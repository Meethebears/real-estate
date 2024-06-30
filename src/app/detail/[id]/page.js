'use client'

import React from "react"
import styles from './page.module.css'
import ImageShow from "@/app/Component/imgshow"
import ContentDetail from "@/app/Component/contentdetail"

const Detail = ({ params }) => {
    return (
        <main className={styles.main}>
            <div style={{ boxShadow:'inset 0 0 20px #000000' }}>
                <ImageShow />
            </div>
            <div style={{ width:'100%', backgroundColor: "white" }}>
                <ContentDetail />
            </div>
        </main>
    )
}

export default Detail;