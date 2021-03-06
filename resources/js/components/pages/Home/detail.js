import React, { Component } from "react";
import { Layout, Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../../../../images/content-banner.png";
import White_Brusali from "../../../../images/White_brusali.png";
import detail from "../../../../images/detail.png";
import detail2 from "../../../../images/detail2.png";
import detail3 from "../../../../images/detail3.png";
import sofa from "../../../../images/sofa.jpg";
import CoverLogo from "../../../../images/logo.png";

const { Header, Content } = Layout;

const InfoCard = styled.div`
    font-family: "Bai Jamjuree", sans-serif;
    padding: 40px;
    background: #c4c4c4;
    width: 300px;
    margin-top: 50px;
`;
const GreenText = styled(Col)`
    font-family: "Bai Jamjuree", sans-serif;
    color: #3b5042;
    font-size: 21px;
    margin-bottom: 10px;
`;
const WhiteDot = styled.div`
    height: 25px;
    width: 25px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
`;

const Logo = styled.div`
    background-color: #fff;
    width: 180px;
    height: 180px;
    margin-left: auto;
    margin-right: auto;
`;

const Image = styled.img`
    padding: 10px;
    width: 100%;
    height: auto;
`;
const Detail = props => {
    return (
        <Layout>
            <Header
                className="header"
                style={{ height: 180, backgroundImage: `url(${Background})` }}
            >
                <Link to="/">
                    <Logo>
                        <Image src={CoverLogo} />
                    </Logo>
                </Link>
            </Header>
            <Content style={{ paddingBottom: 50 }}>
                <Row
                    style={{ maxWidth: 1280, margin: "auto" }}
                    justify="center"
                    type="flex"
                >
                    <Col xs={24}>
                        <Row type="flex" justify="center">
                            <InfoCard>
                                <p
                                    style={{
                                        color: "white",
                                        marginLeft: -10,
                                        fontSize: 21
                                    }}
                                >
                                    ABOUT
                                </p>
                                <GreenText>
                                    BRUSALI บรูสซาลีโต๊ะเข้ามุม
                                </GreenText>
                                <Row type="flex">
                                    <GreenText xs={12}>Price</GreenText>
                                    <GreenText xs={12}>3,290 B</GreenText>
                                    <GreenText xs={12}>Color</GreenText>
                                    <GreenText xs={12}>
                                        <WhiteDot />
                                    </GreenText>
                                    <GreenText xs={12}>Brand</GreenText>
                                    <GreenText xs={12}>IKEA</GreenText>
                                    <GreenText xs={12}>Size</GreenText>
                                    <GreenText xs={12}>150 x 50 x 80</GreenText>
                                </Row>
                            </InfoCard>
                            <div style={{ textAlign: "center" }}>
                                <Image alt="" src={White_Brusali} />
                            </div>
                        </Row>
                        <Row
                            type="flex"
                            justify="end"
                            style={{ marginTop: 20 }}
                        >
                            <Col>
                                <h4>Department Homeware</h4>
                                <p>Type Bedroom</p>
                                <p>Meterial</p>
                                <p>Designer IKEA</p>
                                <p>Inspired by</p>
                            </Col>
                        </Row>

                        <h2
                            style={{
                                marginBottom: 20,
                                fontFamily: "Bai Jamjuree"
                            }}
                        >
                            Sofa ตัวไหนเหมาะกับบ้านสไตล์คริสต์มาส
                        </h2>
                        <Row type="flex" justify="space-around">
                            <Card
                                hoverable
                                style={{ width: 400 }}
                                cover={<img alt="" src={detail} />}
                            >
                                <Card.Meta
                                    title="DEVIL เก้าอี้โมเดิร์นขาไม้"
                                    description="Index"
                                />
                            </Card>
                            <Card
                                hoverable
                                style={{ width: 400 }}
                                cover={<img alt="" src={detail2} />}
                            >
                                <Card.Meta
                                    title="WINNER FASHION BOX"
                                    description="IKEA"
                                />
                            </Card>
                            <Card
                                hoverable
                                style={{ width: 400 }}
                                cover={<img alt="" src={detail3} />}
                            >
                                <Card.Meta
                                    title="ที่นอน Dunlopillo"
                                    description="IKEA"
                                />
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Detail;
