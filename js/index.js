// 定时器实现关键词切换
{
    let input = document.querySelector(".search input");
    // 设置关键词
    const KeyWord = ['Vue3.0', 'React', '爬虫技术', 'Java', '多线程'];

    let i = 0;
    input.ariaPlaceholder = KeyWord[i];
    setInterval(() => {
        i++;
        if (i == 5) {
            i = 0;
        }
        input.placeholder = KeyWord[i];
    }, 2000);
}