const { db } = require('../sequelize')

module.exports = async () => {
    const pupilMails = [
        { mail: 'crurinidosoi-9060@yopmail.com', pupil_id: 1 },
        { mail: 'keiriseteiboi-5292@yopmail.com', pupil_id: 1 },
        
        { mail: 'dommigrellatri-9698@yopmail.com', pupil_id: 2 },
        { mail: 'zowadauvagrau-6579@yopmail.com', pupil_id: 2 },
        
        { mail: 'vemmajugroumou-1555@yopmail.com', pupil_id: 3 },
        { mail: 'bofotroffibrei-1008@yopmail.com', pupil_id: 3 },
        
        { mail: 'norozutuquou-6414@yopmail.com', pupil_id: 4 },
        { mail: 'jowehelano-7028@yopmail.com', pupil_id: 4 },
        
        { mail: 'cragulleufodoi-4163@yopmail.com', pupil_id: 5 },
        { mail: 'ceuffaliteri-5361@yopmail.com', pupil_id: 5 },
        
        { mail: 'preufrissappouffa-6874@yopmail.com', pupil_id: 6 },
        { mail: 'hematroserei-6037@yopmail.com', pupil_id: 6 },
        
        { mail: 'tiwejaxeuzi-8995@yopmail.com', pupil_id: 7 },
        { mail: 'groffemugrabra-2920@yopmail.com', pupil_id: 7 },
        
        { mail: 'trozoutreyitru-2007@yopmail.com', pupil_id: 8 },
        { mail: 'kopipapreicre-7491@yopmail.com', pupil_id: 8 },
        
        { mail: 'zassoiwoujefra-2150@yopmail.com', pupil_id: 9 },
        { mail: 'vayuffoddaunne-5776@yopmail.com', pupil_id: 9 },
        
        { mail: 'niyoseulorau-8573@yopmail.com', pupil_id: 10 },
        { mail: 'broicopponipa-3109@yopmail.com', pupil_id: 10 },
    ]
    for (const pupilMail of pupilMails) {
        await db.PupilMails.create({ ...pupilMail })
    }
};