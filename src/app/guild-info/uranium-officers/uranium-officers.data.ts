export interface OfficerData {
    title: string;
    name: string;
    imageUrl: string;
    description: string;
}

export const DATA: OfficerData[] = [
    {
        title: 'Commanding Officer',
        name: 'Darnell',
        description: null,
        imageUrl: 'assets/officers/danny.jpg',
    },
    {
        title: 'Executive Officer',
        name: 'Astakyr',
        description: null,
        imageUrl: null,
    },
    {
        title: 'Raid Leader][Gold Team',
        name: 'Scoffsstab',
        description: 'Hi, I’m Chris, purveyor of exquisite tattoos and fine roguishery. I’m in charge of making sure ' +
            'we do the things to kill the big monsters. Also I’m a career bartender so I’m in charge of what happens ' +
            'usually if we DON’T kill the big monsters.',
        imageUrl: 'assets/officers/scoffsstab.jpg',
    },
    {
        title: 'Raid Leader][Blue Team',
        name: 'Vacancy',
        description: 'There is currently an open vacancy for this position.',
        imageUrl: null,
    },
    {
        title: 'Recruiting Officer',
        name: 'Ben / Aelionys',
        description: 'Ben here AKA Aelionys, been a part of the guild since the beginning of BFA. I help with finding' +
            ' members that want to have fun and are willing to take on the challenges World of Warcraft has to offer.' +
            ' Am always willing to help when I can and love seeing the guild grow. I look forward to smashing each ' +
            'raid tier and the exciting times we will have with fellow guildies. If you have any question feel free ' +
            'to reach out on Discord or in game. Favorite WoW quote, “Sometime the hand of fate must be forced.”',
        imageUrl: 'assets/officers/ben-aelionys.jpg',
    },
    {
        title: 'Media Officer',
        name: 'Meeklae / Mike',
        description: 'Despite having written the website, I haven\'t actually written a description for myself yet. Whoops!',
        imageUrl: null,
    },
    {
        title: 'DPS Lead',
        name: 'McDingus',
        description: 'Formed during the most bodacious metal riff known to man whilst lightning struck a flaming unicorn, McDingus was brought into this world to hack, slash, and otherwise kick ass. Bearing the mark of Rage, his temper can only be quelled by l33t d33ps and gummy bears. Armed with his Beard of Destiny, he seeks to triumph over AOTC and Cutting Edge at every turn, striking down trash and looking sick as hell doing it. With his trusty chicken steed "Thic Dingus", he charges into battle knowing only the badass smacks he reigns upon his enemies will bring about his salvation.',
        imageUrl: 'assets/officers/mc-dingus.png',
    },
    {
        title: 'Heal Lead',
        name: 'Rinny',
        description: null,
        imageUrl: null,
    },
];
