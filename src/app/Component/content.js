'use client'
import React from "react";
import { Image, Flex, Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation"
import styles from '@/app/page.module.css'

const { Meta } = Card
const Content = () => {
    const router = useRouter();
    return (
        // <div style={{ marginTop:25, display:'flex', justifyContent:'space-between' }}>
        <Flex wrap gap="small" style={{ marginTop: 60 }} className={styles.link}>
            <Card
                hoverable
                cover={<Image
                    width={300}
                    height={300}
                    src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/448474623_1014513156732060_2637327742649680328_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEljVqafesKbuTkllpnL51ATeSP3JSrPDhN5I_clKs8OKhzkukhHTzPF2jTXBaeFsJ6txUpro9XCL9CiB3S4h21&_nc_ohc=WuJ5TH-DDw4Q7kNvgGvqj0h&_nc_ht=scontent.fbkk28-1.fna&oh=00_AYBsxa_kar3qZ1fKxk5gKwsOeTveAMEd0O9a9HOHctnFMw&oe=6674469B"
                />
                }
            >
                <Meta
                    title="Europe Street beat"
                    description={
                        <div className={styles.link}>
                            <p>ดูรายละเอียดเพิ่มเติม</p>
                        </div>
                    }
                    onClick={() => router.push(`/detail/1`)}
                />
            </Card>

            <Card
                hoverable
                cover={<Image
                    width={300}
                    height={300}
                    src="https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/448548456_1016761829840526_2928229988734737822_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEPQA9FYaONo27Lup9B7-DIusHRZ6nPk6a6wdFnqc-TpvRpXJyKX--A2xvRKcPbCw4qDwIL4MIqCXXUw9LwT7dE&_nc_ohc=tsZ6mWHtMBQQ7kNvgHJ2c2o&_nc_ht=scontent.fbkk28-1.fna&oh=00_AYBtnyNDZu1GlcnHzrVJZl9svEl20azFyg_xmQOUqZ8WTQ&oe=6678DA43"
                />
                }
            >
                <Meta
                    title="Europe Street beat"
                    description={"ดูรายละเอียดเพิ่มเติม"}
                    onClick={() => console.log('Click')}

                />
            </Card>
            <Card
                hoverable
                cover={<Image
                    width={300}
                    height={200}
                    src="https://tjh.com/wp-content/uploads/2023/06/TJH_HERO_TJH-HOME@2x-1-1536x1021.webp"
                />
                }
            >
                <Meta
                    title="Europe Street beat"
                    description={"ดูรายละเอียดเพิ่มเติม"}
                    onClick={() => console.log('Click')}
                />
            </Card>
            <Card
                hoverable
                cover={<Image
                    width={300}
                    height={200}
                    src="https://tjh.com/wp-content/uploads/2023/06/TJH_HERO_TJH-HOME@2x-1-1536x1021.webp"
                />
                }
            >
                <Meta
                    title="Europe Street beat"
                    description={"ดูรายละเอียดเพิ่มเติม"}
                    onClick={() => console.log('Click')}
                />
            </Card>
        </Flex>
        // </div>
    )
}

export default Content;