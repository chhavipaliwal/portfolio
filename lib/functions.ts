import Otp from '@/models/Otp';

export const sendSMS = async (phone: string, message: string) => {
  console.log(`Your otp for ${phone} is ${message}`);
  return `Your otp for ${phone} is ${message}`;
};

export const generateOtp = () => {
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp;
};

export const handleDbOtp = async (id: string) => {
  const otp = generateOtp();
  const res = await Otp.findOne({ id });
  if (!res) {
    await Otp.create({ id, otp });
    return otp;
  }
  if (res.otpCount <= 3) {
    res.otp = otp;
    res.otpCount++;
    await res.save();
    return res.otp;
  } else {
    throw new Error('Maximum otp attempts reached');
  }
};

export const phoneValidate = (phone: string) => {
  if (/^[0-9]{10}$/.test(phone)) {
    return phone;
  } else if (/^91[0-9]{10}$/.test(phone)) {
    return phone.replace(/^91/, '');
  } else if (/^\+91[0-9]{10}$/.test(phone)) {
    return phone.replace(/^\+91/, '');
  } else {
    return null;
  }
};
