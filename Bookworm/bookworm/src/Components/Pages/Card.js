import React, { useRef } from 'react';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;
const MainCard = () => {
  const cardContainerRef = useRef(null);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -300, 
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 300, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-lion bg-reseda-green">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 opacity-0 pointer-events-none"
      />
      <div
        ref={cardContainerRef}
        className="flex overflow-x-auto items-center justify-center scrollbar-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        <Row
          gutter={[16, 16]} 
          className="flex-nowrap flex items-center pl-20 pt-8 "
          style={{ width: 'max-content' }}
        >
          <Col xs={24} sm={12} md={8} lg={6} className="card-col">
            <Card
                hoverable
                style={{
                width: '75%', 
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6} className="card-col">
            <Card
                hoverable
                style={{
                    width: '75%', 
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6} className="card-col">
            <Card
                hoverable
                style={{
                    width: '75%', 
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          
          <Col xs={24} sm={12} md={8} lg={6} className="card-col">
            <Card
                hoverable
                style={{
                    width: '75%', 
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 opacity-0 pointer-events-none"
      />
            <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 opacity-0 pointer-events-none"
      />
      <div
        ref={cardContainerRef}
        className="flex overflow-x-auto items-center justify-center scrollbar-hidden "
        style={{ scrollBehavior: 'smooth' }}
      >
        <Row
          gutter={[16, 16]} 
          className="flex-nowrap flex items-center pl-20 pt-8 pb-8"
          style={{ width: 'max-content' }}
        >
          <Col xs={24} sm={12} md={8} lg={6} className="card-col">
            <Card
                hoverable
                style={{
                width: '75%', 
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6} className="card-col">
            <Card
                hoverable
                style={{
                    width: '75%', 
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>

          <Col xs={24} sm={12} md={8} lg={6} className="card-col">
            <Card
                hoverable
                style={{
                    width: '75%', 
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          
          <Col xs={24} sm={12} md={8} lg={6} className="card-col">
            <Card
                hoverable
                style={{
                    width: '75%', 
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 opacity-0 pointer-events-none"
      />
    </div>
  );
};

export default MainCard;
