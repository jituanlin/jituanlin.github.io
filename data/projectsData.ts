type Project = {
  title: string
  description: string
  imgSrc: string
  href: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {
  en: [
    {
      title: 'pipeable-es-fns',
      description: `A typed, curried, ES6+ functions library for pipe style programming. 
        Use it when you like pipe style programming, but Ramda is too cumbersome and 
        fp-ts introduces too many FP concepts than you want. Just use native ES6+ 
        functions with pipe style programming.`,
      imgSrc: '/static/images/bulksplash-anton_lammert-LPPOau2BJNA.jpg',
      href: 'https://github.com/jituanlin/pipeable-es-fns',
    },
    {
      title: 'cookbook',
      description: `A collection of code snippets organized by runtime. 
        Currently includes Node.js snippets for fp-ts, monocle-ts, io-ts, rxjs, 
        ramda and more. A practical resource for functional programming and 
        reactive programming in TypeScript.`,
      imgSrc: '/static/images/bulksplash-kirildobrev-v63UL8s28Ew.jpg',
      href: 'https://github.com/jituanlin/cookbook',
    },
  ],

  zh: [
    {
      title: 'pipeable-es-fns',
      description: `一个类型化、柯里化的ES6+函数库，用于管道式编程。
        当您喜欢管道式编程，但Ramda太繁琐，而fp-ts引入了太多您不需要的FP概念时，
        可以使用它。只需使用原生ES6+函数进行管道式编程。`,
      imgSrc: '/static/images/bulksplash-anton_lammert-LPPOau2BJNA.jpg',
      href: 'https://github.com/jituanlin/pipeable-es-fns',
    },
    {
      title: 'cookbook',
      description: `代码片段集合，按运行时环境组织。
        目前包含用于fp-ts、monocle-ts、io-ts、rxjs、ramda等的Node.js代码片段。
        TypeScript中函数式编程和响应式编程的实用资源。`,
      imgSrc: '/static/images/bulksplash-kirildobrev-v63UL8s28Ew.jpg',
      href: 'https://github.com/jituanlin/cookbook',
    },
  ],
}

export default projectsData
