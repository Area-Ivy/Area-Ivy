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
  Hi there my No.
  <img src="https://profile-counter.glitch.me/Area-Ivy/count.svg" height="30"/>
  visitor!
</h1>

> [!TIP]
> ⏳ Year Progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
>
> ⏰ Updated on ${new Date().toUTCString()}

### 👨‍💻 *[About Me](https://bunnyoii.github.io)*

* 🚀 I'm an undergraduate student of School of Software Engineering, [Tongji University](https://www.tongji.edu.cn).

* 🌱 I’m currently learning software engineering and exploring new technologies.

* 🔭 I love collaborating on interesting tech projects and connecting with like-minded individuals.

* 📫 Email: chenyiming12500@gmail.com

* 💡 OnlyFans: not yet available

### 📊 *[My GitHub](https://github.com/Area-Ivy)*

<div align="left">
  <img src="https://github-readme-stats.vercel.app/api?username=Area-Ivy&show_icons=true&count_private=true" height="160"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Area-Ivy&layout=compact" height="160"/>
</div>

### 📊 *Tech Stack*
[![My Skills](https://skillicons.dev/icons?i=html,css,js,vue,fastapi,spring,go,java,cpp,py,mysql,redis,linux,git)](https://skillicons.dev)

### 🥰 *Take a look at my repositories and let's get in touch!*\
`

console.log(readme)
