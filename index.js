const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = '▇'.repeat(passedProgressBarIndex) + '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `[ ${progressBar} ]`
}

const readme = `\
<h1>
  <img src="https://emojis.slackmojis.com/emojis/images/1660853767/60881/meow_attention.gif?1660853767" height="30"/>
  Hi there my visitor!
</h1>

> [!TIP]
> ⏳ Year Progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
>
> ⏰ Updated on ${new Date().toUTCString()}

### 👨‍💻 *About Me*

* 🚀 I'm an undergraduate student of School of Software Engineering, [Tongji University](https://www.tongji.edu.cn).
  
* 🌱 Currently exploring full-stack development, algorithms, and open-source contributions.
  
* 🔭 Always eager to learn new technologies and take on challenging projects.
  
* 📫 Email: chenyiming12500@gmail.com
  
* 💡 OnlyFans: not yet available

### 📊 *My GitHub*

<picture decoding="async" loading="lazy">
  <img alt="github stats" src="https://pixel-profile.vercel.app/api/github-stats?username=Area-Ivy&screen_effect=false&theme=fuji&hide=avatar&dithering=true">
</picture>

### 📊 *Tech Stack*
[![My Skills](https://skillicons.dev/icons?i=html,css,js,vue,fastapi,spring,java,cpp,py,mysql,redis,linux,git)](https://skillicons.dev)

### 🥰 *Take a look at my repositories and let's get in touch!*\
`

console.log(readme)
