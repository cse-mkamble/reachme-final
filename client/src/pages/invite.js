import React from "react"
import Avatar from '../components/Avatar'
import { useSelector } from 'react-redux'

const Installation = () => {
    const { theme } = useSelector(state => state)

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <div>
                    <img style={{
                        filter: theme ? 'invert(1)' : 'invert(0)',
                        color: theme ? 'white' : '#111',
                        width: '64px', height: '64px', margin: '10px'
                    }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1625477279/icon/ReachMe2_pnioxk.png" />
                </div>
                <div style={{ paddingTop: '15px' }}>
                    <h4 style={{ marginBottom: '.0rem' }}>ReachMe</h4>
                    <p style={{ marginTop: '0px' }}>Social Networking Platforms</p>
                </div>
            </div>
            <hr />

            <div>
                {/* `<div style=" color: #323232; " >
                    <div style=" max-width: 600px; margin:auto; font-size: 110%; text-align: center; background: #eaeaea87; padding: 10px; ">
                        <div style=" text-align: center; ">
                            <img style=" width: 64px; height: 64px; margin: 10px 0 20px 0; " src="https://res.cloudinary.com/mayurkamble/image/upload/v1625477279/icon/ReachMe2_pnioxk.png" />
                        </div>
                        <div style=" text-align: center; padding: 40px; background: #fff; border-radius: 10px; ">
                            <img style=" width: 100px; height: 100px; margin: auto; " src="https://res.cloudinary.com/mayurkamble/image/upload/v1625314150/icon/green_check_mark_icon_flat_yzusy1.png" />
                            <h2 style=" margin: 0; ">Thank you</h2>
                            <p style=" color: rgb(165, 164, 164); margin: 5px; " >You have verified your email</p>
                            <a href="" style="background: #2196f3; border-radius: 4px; text-decoration: none; color: rgb(255, 255, 255); padding: 10px 30px; display: inline-block;">emaillMessageButtonName</a>
                        </div>
                    </div>
                </div>` */}
                <div style={{ padding: '10px' }}>
                    <div style={{ color: '#323232' }}>
                        <div style={{
                            maxWidth: '600px',
                            margin: 'auto',
                            fontSize: '110%',
                            textAlign: 'center',
                            background: '#eaeaea87',
                            padding: '10px'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <img style={{
                                    width: '64px',
                                    height: '64px',
                                    margin: '10px 0 20px 0'
                                }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1625477279/icon/ReachMe2_pnioxk.png" />
                            </div>
                            <div style={{
                                textAlign: 'center',
                                padding: '40px',
                                background: '#fff',
                                borderRadius: '10px'
                            }} >
                                <img style={{
                                    width: '100px',
                                    height: '100px',
                                    margin: '5px',
                                    borderRadius: '20%',
                                    boxShadow: '4px 4px 2px #ccc'
                                }}
                                    src="https://res.cloudinary.com/mayurkamble/image/upload/v1628163486/xbxswevknkzlqzeg7vdj.jpg"
                                />
                                {/* <h2 style=" margin: 0; "></h2>
                                <p style=" color: rgb(165, 164, 164); margin: 5px; " >You'll see when others are active here. You can also invite more friends to join ReachMe.</p>
                                <a href="" style="background: #2196f3; border-radius: 4px; text-decoration: none; color: rgb(255, 255, 255); padding: 10px 30px; display: inline-block;">emaillMessageButtonName</a> */}
                                <h4 style={{ margin: '0' }}>No Active People</h4>
                                <p style={{ color: 'rgb(109 103 103)', margin: '5px' }} >You'll see when others are active here. You can also invite more friends to join ReachMe.</p>
                                <a href="" style={{
                                    background: '#2196f3',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    color: 'rgb(255, 255, 255)',
                                    padding: '10px 30px',
                                    display: 'inline-block'
                                }}>
                                    Invite
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Installation