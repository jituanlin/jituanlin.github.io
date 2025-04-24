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
      title: 'A Search Engine',
      description: `What if you could look up any information in the world? Webpages, images, videos
        and more. Google has many features to help you find exactly what you're looking
        for.`,
      imgSrc: '/static/images/google.png',
      href: 'https://www.google.com',
    },
    {
      title: 'The Time Machine',
      description: `Imagine being able to travel back in time or to the future. Simple turn the knob
        to the desired date and press "Go". No more worrying about lost keys or
        forgotten headphones with this simple yet affordable solution.`,
      imgSrc: '/static/images/time-machine.jpg',
      href: '/blog/the-time-machine',
    },
  ],

  zh: [
    {
      title: '搜索引擎',
      description: `如果您可以查找世界上的任何信息会怎样？网页、图片、视频
        等等。谷歌提供了许多功能，帮助您找到您正在寻找的确切内容。`,
      imgSrc: '/static/images/google.png',
      href: 'https://www.google.com',
    },
    {
      title: '时间机器',
      description: `想象一下能够穿越回过去或到未来。只需将旋钮转到
        所需的日期并按下"开始"。有了这个简单而实惠的解决方案，
        再也不用担心丢失钥匙或忘记耳机了。`,
      imgSrc: '/static/images/time-machine.jpg',
      href: '/blog/the-time-machine',
    },
  ],
}

export default projectsData
