var CONST = require("./const");

module.exports = {
  title: `Today I Learned`,
  description: `Today I Learned`,
  base: "/TIL/",
  dest: 'build',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Monthly I Learned',
        children: CONST.MILList
      },
      {
        title: 'Daily Coding',
        children: CONST.DailyCodingList
      }, {
        title: 'Data structure and Algorithm',
        children: CONST.DataStructureAndAlgorithmList
      }, {
        title: 'Programming-Language',
        children: CONST.ProgramLangList
      }, {
        title: 'System-Security',
        children: CONST.SystemList
      }
    ],
    nav: [{
      text: 'GitHub',
      link: 'https://github.com/lv1turtle/'
    }, {
      text: 'Blog',
      link: 'https://lv1turtle.github.io/'
    }
    ]
  },
}