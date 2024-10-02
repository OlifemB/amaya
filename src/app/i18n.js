import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            slider: {
                slide0: 'Subscription provides access to a large number of applications',
                slide1: 'Exciting tasks and games - we develop creative thinking and useful skills',
                slide2: 'Millions of parents and children already use our games',
                slide3: 'You can play offline',
                slide4: 'Safety - we do not share our users data with third',
            },
            header: {
                title: 'Get 20+ amazing apps with ONE subscription',
            },
            btnMonth: {
                title: 'Month',
                subtitle: '$9.99/month',
            },
            btnAnnual: {
                title: 'Annual',
                subtitle: '$29.99/first year',
                description: 'Renews for $59.99 per year.',
            },
            btnUnlim: {
                title: 'Get unlimited access',
            },
            info: 'Your subscription renews automatically unless you cancel it at least 24 hours before thee current subscription period ends.',
            cancelAnytime: 'Cancel Anytime',
            termsOfUse: {
                title: 'Terms of Use',
            },
            privacyPolicy: {
                title: 'Privacy Policy',
            },
        },
    },
}

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources: resources,
})

export default i18n
