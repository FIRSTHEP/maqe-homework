import React from 'react';
import { Row, Col, Card } from 'antd';
import './ForumCard.css';
import moment from 'moment';

const ForumCard = ({ data, index }) => {
  const date_format = 'dddd, MMMM DD, yyyy, HH:mm';

  const fullname = data?.user ? `${data.user.firstname} ${data.user.lastname}` : '-';
  const content = data?.content || {};

  return (
    <div className="forum-card">
      <Card
        style={index % 2 === 1 && { background: '#ccecff' }}
        className={'custom-card'}
        title={
          <>
            <span className='user'>{fullname}</span>{' '}
            {content?.created_at ? (
              <span className='posted'> posted on {moment(content?.created_at).format(date_format)}</span>
            ) : (
              '-'
            )}
          </>
        }
        bordered={false}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6} xl={5} xxl={4}>
            <div className="image-container">
              <img
                src={content?.content_image_url || 'fallback-image-url'}
                alt={content?.content_title || 'Image'}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'fallback-image-url';
                }}
              />
            </div>
          </Col>
          <Col xs={24} sm={12} md={16} lg={18} xl={19} xxl={20}>
            <h2 className='content-title'>{content?.content_title || '-'}</h2>
            <p className='content-subtitle'>{content?.content_subtitle || '-'}</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ForumCard;
