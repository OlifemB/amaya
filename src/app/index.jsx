import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n'
import '@/assets/styles/main.scss'
import { Main } from '@/pages/main.jsx'
import { Layout } from '@/app/layout'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Layout>
            <Main />
        </Layout>
    </StrictMode>,
)
