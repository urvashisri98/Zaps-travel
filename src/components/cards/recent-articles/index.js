import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { recentArticlesData } from '../../../config';
import './style.css';

const RecentArticlesAndBlogs = () => {
  return (
    <>
      <div className='header-recent-articles'>
        <div className='info'>
          <div className='title'>Recent <span className='text'>Articles </span>And <span className='text'>Blogs </span></div>
          <div className='subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
        </div>
        <div className='view-all-blogs'>
          View All Blogs
        </div>
      </div>
      <div className='back-arrow'>
        <ArrowBackIcon className='back-arrow-icon' />
      </div>
      <div className='forward-arrow'>
        <ArrowForwardIcon className='forward-arrow-icon' />
      </div>
      <div className='recent-articles-cards'>
        {
          recentArticlesData && recentArticlesData.map((article) => {
            const { id, image, info, title, date} = article;
            return (
              <div className='article-card' key={id}>
                <div className='article-date-box'>
                  <div className='article-date-text'>{date}</div>
                </div>
                <div className='article-text-box'>
                  <div className='article-content'>
                    <div className='article-header'>{title}</div>
                    <div className='article-info'>{info}</div>
                  </div>
                </div>
                <div className='outer-article-image'>
                  <div className='article-image' style={{ backgroundImage: `url(${image})`}}></div>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default RecentArticlesAndBlogs;