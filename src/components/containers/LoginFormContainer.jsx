import { connect } from 'react-redux'
import Loginformik from '../pure/LoginForm'
import { httpRequest } from '../../store/actions/AsyncActions'


const mapStateToProps = (state) => {
    return {
        loged: state.useState.loged,
        fetching: state.useState.fetching
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onLogin: (email, password) => {
            const data = {
                email: email,
                password: password
            }

            const url = 'https://reqres.in/api/login'

            dispatch(httpRequest('post', url, data));
        }
    }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(Loginformik)
export default LoginFormContainer;