export const resendOtp = handle(async (req, res) => {
  const { email } = req.body;
  if (!email)
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  const user = await User.findOne({ email });
  if (!user)
    return res.status(404).json({ success: false, message: "User not found" });
  if (user.isVerified)
    return res
      .status(400)
      .json({ success: false, message: "Email already verified" });
  const otp = generateOTP();
  user.verifyOtp = await bcrypt.hash(otp, 10);
  user.verifyOtpExpire = new Date(Date.now() + 10 * 60 * 1000);
  await user.save();
  await sendVerificationOTP(user.email, user.name, otp);
  res.status(200).json({ success: true, message: "OTP sent successfully" });
});

export const loginUser = handle(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ success: false, message: "Email and password are required" });
  const user = await User.findOne({ email });
  if (!user)
    return res.status(404).json({ success: false, message: "User not found" });
  if (!user.isVerified)
    return res
      .status(403)
      .json({ success: false, message: "Please verify your email first." });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res
      .status(400)
      .json({ success: false, message: "Invalid password" });
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" },
  );
  res.status(200).json({
    success: true,
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    },
  });
});

export const forgotPassword = handle(async (req, res) => {
  const { email } = req.body;
  if (!email)
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  const user = await User.findOne({ email });
  if (!user)
    return res.status(404).json({ success: false, message: "User not found" });
  const otp = generateOTP();
  user.resetOtp = await bcrypt.hash(otp, 10);
  user.resetOtpExpire = new Date(Date.now() + 10 * 60 * 1000);
  await user.save();
  await sendResetOTP(user.email, user.name, otp);
  res
    .status(200)
    .json({ success: true, message: "Password reset OTP sent successfully." });
});

export const resetPassword = handle(async (req, res) => {
  const { email, otp, password } = req.body;
  if (!email || !otp || !password)
    return res.status(400).json({
      success: false,
      message: "Email, OTP and password are required",
    });
  const user = await User.findOne({ email });
  if (!user)
    return res.status(404).json({ success: false, message: "User not found" });
  if (
    !user.resetOtp ||
    !user.resetOtpExpire ||
    user.resetOtpExpire < Date.now()
  )
    return res.status(400).json({
      success: false,
      message: "OTP expired. Please request a new OTP.",
    });
  const isOtpValid = await bcrypt.compare(otp, user.resetOtp);
  if (!isOtpValid)
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  user.password = await bcrypt.hash(password, 10);
  user.resetOtp = null;
  user.resetOtpExpire = null;
  await user.save();
  res
    .status(200)
    .json({ success: true, message: "Password reset successful." });
});

export const getProfile = handle(async (req, res) => {
  res.status(200).json({ success: true, user: req.user });
});
