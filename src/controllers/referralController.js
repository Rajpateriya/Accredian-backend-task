const prisma = require('../utils/prismaClient');
const emailService = require('../services/emailService');

const createReferral = async (req, res) => {
  const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;

  if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
      },
    });

    await emailService.sendReferralEmail(referrerEmail, refereeEmail);

    return res.status(201).json(referral);
  } catch (error) {
    console.error('Error creating referral:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createReferral,
};


