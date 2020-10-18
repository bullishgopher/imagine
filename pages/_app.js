import '../assets/css/bootstrap.min.css';
import '../assets/css/visibility.min.css';
import '../assets/css/icofont.min.css';
import '../assets/css/animate.min.css';

import '../assets/css/style.css';
import '../assets/css/scent.css';

import '../assets/css/responsive.min.css';

import { Provider } from 'react-redux';
import { Preloader, Placeholder } from 'react-preloading-screen';
import App, {Container} from 'next/app';

import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
//import { loadUser } from '../store/actions/authActions';

import { DefaultSeo } from 'next-seo';
import GoTop from '../components/Shared/GoTop';
import Loader from '../components/Shared/Loader'; 

import 'lazysizes';
// import lazysizes plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';

class MyApp extends App {
    
    static async getInitialProps ({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        }
    }

    // componentDidMount() {
    //     initStore.dispatch(loadUser());
    // }

    render () {
        const { Component, pageProps, store } = this.props

        return (
            <Container>
                <DefaultSeo
                    title="imAGINE - digital signage software"
                    description="imAGINE digital signage software"
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: 'https://nextland-react.envytheme.com/',
                        site_name: 'imAGINE - digital signage software',
                    }}
                />
                <Preloader>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                    <Placeholder>
                        <Loader />
                    </Placeholder>
                </Preloader>
            </Container>
        );
    }
}

export default withRedux(initStore)(MyApp);