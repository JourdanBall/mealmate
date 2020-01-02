import React from 'react'
import FileUpload from './UploadComponent.jsx'

const DonorMainPage = (props) => {
    console.log(props)
    return(
        <div>
            <div id='donor-main-page'>
                Hello {props.userId}
            </div>
            <div>
                <FileUpload/>
            </div>
         </div>
    )
}
// class DonorMainPage extends React.Component {
//     render() {
//         return(
//             <div>
//                 this is dornor main page
//                 Hello {this.props.userId}
//             </div>
//         )
//     }
// }

export default DonorMainPage