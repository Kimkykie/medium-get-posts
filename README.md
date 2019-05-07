# Medium Get Posts

This is a simple node project to get the latest medium posts from a user or publication.
Medium provides rss feeds for users and publications. This projects implements a parser to return that data in a more usable format.

## Installation

On your terminal
```bash
git clone https://github.com/Kimkykie/medium-get-posts.git
cd medium-get-posts
npm install
```

## Usage
The code is located in ```index.js```

Change the url in ```const url = '';```

Here are the medium rules for accessing users/publication feeds.

#### User profile
To access a user's feed, add /feed/ before their username, for example:

```https://medium.com/feed/@Medium```

#### Publications
For a Medium publication's RSS feed, add /feed/ before the publication's name, like so:

```https://medium.com/feed/the-story```

#### Publications with custom domains
For a publication on a custom domain, add /feed/ to the end of the URL:

```https://journal.thriveglobal.com/feed.```

To view results, run ```npm start``` and view results in terminal.

## Results
The following fields are returned from the medium rss feed.
```javascript
{ created: '29/01/2019',
  creator: 'Pema Lin',
  title: 'An Honest and Open Letter to the D&I Community',
  link: 'https://blog.medium.com/an-honest-and-open-letter-to-the-d-i-community-bd1489f05a1d?source=rss----15f753907972---4',
  image: 'https://cdn-images-1.medium.com/max/1024/1*_hEDASII5u7vgqJ9NH4mYA.jpeg' 
},...
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please do suggest updates and improvements.

## License
[MIT](https://choosealicense.com/licenses/mit/)