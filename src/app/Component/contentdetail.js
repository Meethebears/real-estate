'use client'

import { Card, Col, Row } from "antd";
import Image from 'next/image'

const ContentDetail = () => {

    return (
        <>
            <Row justify="center" align="middle">
                <Col span={3} style={{ display:'flex', alignItems:'end' }}>
                    <Image
                        src='/img/icon-bedroom.png'
                        alt='icon-bedroom'
                        width={50}
                        height={50}
                        quality={100}
                    />
                    <br/>
                    <p style={{ marginLeft:10 }}>
                        3 ห้องนอน
                    </p>
                </Col>

            </Row>
            <Row justify="center" align="middle" style={{marginTop:5 ,marginLeft:15}}>
                <Col span={3} style={{ display:'flex', alignItems:'end' }}>
                    <Image
                        src='/img/icon-livingroom.png'
                        alt='icon-livingroom'
                        width={40}
                        height={40}
                        quality={100}
                    />
                    <br/>
                    <p style={{ marginLeft:10 }}>
                        1 ห้องนั่งเล่น
                    </p>
                </Col>
            </Row>
            <Row justify="center" align="middle" style={{marginTop:15 ,marginLeft:15}}>
                <Col span={3} style={{ display:'flex', alignItems:'end' }}>
                    <Image
                        src='/img/icon-kitchen.png'
                        alt='icon-kitchen'
                        width={40}
                        height={40}
                    />
                    <br/>
                    <p style={{ marginLeft:10 }}>
                        2 ห้องครัว
                    </p>
                </Col>
            </Row>
            <Row justify="center" align="middle" style={{marginTop:15 ,marginLeft:15}}>
                <Col span={3} style={{ display:'flex', alignItems:'end' }}>
                    <Image
                        src='/img/icon-pool.png'
                        alt='icon-pool'
                        width={40}
                        height={40}
                    />
                    <br/>
                    <p style={{ marginLeft:10 }}>
                        1 สระว่ายน้ำ
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default ContentDetail;