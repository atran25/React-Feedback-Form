import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h1>About This Application</h1>
                <p>This form serves to give feedback on anything you choose.</p>
                <p>Version: 1.0</p>
                <Link to="/">Back to Home</Link>
            </div>
        </Card>
    )
}

export default AboutPage;