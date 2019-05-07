const moment = require('moment');
const Parser = require('rss-parser');

const parser = new Parser();

const newsFeed = [];

const url = 'https://medium.com/feed/the-story';
const getNewsFeed = async () => {
  const mediumRss = await parser.parseURL(url);
  mediumRss.items.forEach(item => {
    const created = moment(item.pubDate).format('DD/MM/YYYY');
    const { creator, title, link } = item;

    /* 
      User Profile uses content:encoded
       */
    if (item['content:encoded']) {
      // Trim comments from our results
      const includeFigure = item['content:encoded'].indexOf('figure') !== -1;
      if (includeFigure) {
        const tagIndex = item['content:encoded'].indexOf('<img'); // Find where the img tag starts
        const srcIndex =
          item['content:encoded'].substring(tagIndex).indexOf('src=') +
          tagIndex;
        const srcStart = srcIndex + 5;
        const srcEnd =
          item['content:encoded'].substring(srcStart).indexOf('"') + srcStart;
        const src = item['content:encoded'].substring(srcStart, srcEnd); // Extract just the URL
        const image = src;
        const blog = {
          created,
          creator,
          title,
          link,
          image,
        };
        newsFeed.push(blog);
      }
      /* 
        Publication profiles uses content
        */
    } else if (item.content) {
      const tagIndex = item.content.indexOf('<img'); // Find where the img tag starts
      const srcIndex =
        item.content.substring(tagIndex).indexOf('src=') + tagIndex;
      const srcStart = srcIndex + 5;
      const srcEnd = item.content.substring(srcStart).indexOf('"') + srcStart;
      const src = item.content.substring(srcStart, srcEnd); // Extract just the URL
      const image = src;
      const blog = {
        created,
        creator,
        title,
        link,
        image,
      };
      newsFeed.push(blog);
    }
  });
  console.log(newsFeed); // return
};

getNewsFeed();
