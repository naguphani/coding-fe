import React,{useState} from "react"
import CustomButton from "../../custom-button/custom-button.component"
import "./zoomPage.css"
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const ZoomPage =({user})=>{
    const [editProfile,setEditProfile]=useState(false);    
    const [formats, setFormats] = React.useState(() => ["Hindi"]);
  const handleFormat = (event, newFormats) => {
    if (newFormats.length) {
        setFormats(newFormats,setDetails({
            ...details,languages:formats
        },setDetails({...details,languages:formats},)));
        
    }
  };
    const [details,setDetails]=useState({
        name:!user?.profileObj ? `${user?.user?.email}` : `${user?.profileObj?.name}`,
        displayName:!user?.profileObj ? `${user?.user?.email}` : `${user?.profileObj?.name}`,
        email:!user?.profileObj ? `${user?.user?.email}` : `${user?.profileObj?.email}`,
        imageurl:user?.profileObj?.imageUrl ? user?.profileObj?.imageUrl : `data:image/png;base64,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` ,
        address:{
            state:"Kerala",
            city:"kochi"
        },
        languages:formats,
        age:18,
        phoneNumber:9443214526,
        showEmail:true,
        editLanguages:false,
        editPassword:false,
        currentPassword:"",
        newPassword:"",
        confirmNewPassword:"",
    })
    return(
        <div className="zoom_page">
            <div className="conatainer padding">
                <div className="container">
                    <div className="row">
                         <div className="col-sm-3">
                            <img className="pro_pic" src={details.imageurl} />

                            <div className="links">
                                <a>Change</a>
                                <a>Delete</a>
                            </div>
                         </div>
                         <div className="col-sm-9 new">
                            {!editProfile && <div>
                                <p className="full_name">{details.name}</p>
                                <p className="display_name">{details.displayName}</p>
                            </div>}
                            {!editProfile && <div className="edit">
                                <a onClick={()=>{setEditProfile(!editProfile)}}> Edit</a>
                            </div>}
                            {editProfile && <div className="inputs">
                                <div className="name_inputs">
                                    <div className="name_input" >
                                        <p>First Name</p>
                                        <input type="text" placeholder="First Name" value={details.name.split(" ")[0]}/>
                                    </div>
                                    <div className="name_input">
                                        <p>Last Name</p>
                                        <input type="text"  placeholder="Last Name" value={details.name.split(" ")[details.name.split(" ").length-1]}/>
                                    </div>
                                </div>
                                <div className="name_input">
                                        <p>Display Name</p>
                                        <input className="full_width_input" placeholder="Display Name" value={details.displayName} type="text"/>
                                        <span className="padding_top">Display name could be your first name or your nickname, or other name you want other people know you on Zoom.</span>

                                </div>
                                
                                <div className="name_input">
                                        <p>Phone Number</p>
                                        <input className="full_width_input" vlaue={details.phoneNumber} placeholder="Phone Number" type="text"/>
                                        
                                </div>
                                
                                <div className="name_input">
                                        <p>Age</p>
                                        <input className="full_width_input" value={details.age} placeholder="Age" type="text"/>
                                    
                                </div>
                                <div className="buttons">
                                    <div className="save_changes_button">
                                        <CustomButton onClick={()=>{setEditProfile(!editProfile)}} isGoogleSignIn >Save Changes</CustomButton>
                                    </div>
                                    <div className="cancel_button">
                                        <CustomButton onClick={()=>{setEditProfile(!editProfile)}} >Cancel</CustomButton>
                                    </div>  
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="container email">
                    <div className="row">
                         <div className="col-sm-3">
                             <h2>Sign-In Email</h2>
                         </div>
                         <div className="col-sm-9">
                            <p className="email_text">{details.showEmail ? `${details.email.split("@")[0].slice(0,3)}****@${details.email.split("@")[1]}`:`${details.email}`} <a className="show" onClick={()=>{setDetails({...details,showEmail:!details.showEmail})}}>{details.showEmail ? `Show` : `Hide`}</a>   </p>
                            <p className="acounts_text padding_top">Linked accounts: <p className="email_text account">SurveyBuddy</p> </p>
                         </div>
                    </div>
                </div>
                <hr/>
                <div className="container email">
                    <div className="row">
                         <div className="col-sm-3">
                             <h2>Language</h2>
                         </div>
                         <div className="col-sm-9 languages">
                           {!details.editLanguages 
                                ? 
                                <p className="acounts_text">
                                    {formats.map(item=><p className="acounts_text">{item}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>)}
                                </p> 
                                :
                                <div className="languages_known_options">
                                <ToggleButtonGroup className="languages_known " value={formats} onChange={handleFormat} aria-label="device">
                                    <ToggleButton value="Hindi" aria-label="Hindi" disabled={false}>
                                      Hindi
                                    </ToggleButton>
                                    <ToggleButton value="English" aria-label="English" disabled={false}>
                                      English
                                    </ToggleButton>
                                    <ToggleButton value="Other" aria-label="Other" disabled={false}>
                                      Other
                                    </ToggleButton>
                                </ToggleButtonGroup>
                                </div>
                            }
                            <a onClick={()=>{setDetails({...details,editLanguages:!details.editLanguages})}} className="show_lang">{!details.editLanguages ? `Edit` : `Save`}</a>
                         </div>
                    </div>
                </div>
                <hr/>
                <div className="container address">
                    <div className="row">
                         <div className="col-sm-3">
                             <h2>Address</h2>
                         </div>
                         <div className="col-sm-9">
                            <div className="row">
                                <div className="col-sm-2">
                                    <p className="address_detail">State</p>
                                </div>
                                <div className="col-sm-10">
                                    <p>Kerala</p>
                                    {/* <a>Edit</a> */}
                                </div>
                            </div>
                         </div>
                    </div>
                    <div className="row padding_top">
                         <div className="col-sm-3">
                             <h2></h2>
                         </div>
                         <div className="col-sm-9">
                            <div className="row">
                                <div className="col-sm-2">
                                    <p className="address_detail">City</p>
                                </div>
                                <div className="col-sm-10">
                                    <p>Kochi</p>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
                <hr/>
                <div className="container change_password">
                    <div className="row">
                         <div className="col-sm-3">
                             <h2>Change Password</h2>
                         </div>
                         <div className="col-sm-9">
                            <div className="row">
                                {!details.editPassword && <div className="col-sm-4">
                                    <p className="address_detail"> <a onClick={()=>{setDetails({...details,editPassword:!details.editPassword})}} >Change Passsword</a></p>
                                </div>}
                                {details.editPassword && <div className="inputs">
                                    <div className="name_input">
                                            <p>Current Password</p>
                                            <input className="full_width_input" placeholder="Current Password" value={details.currentPassword} type="password"/>
                                    </div>

                                    <div className="name_input">
                                            <p>New Password</p>
                                            <input className="full_width_input" vlaue={details.newPassword} placeholder="New Password" type="password"/>

                                    </div>

                                    <div className="name_input">
                                            <p>Confirm New Password</p>
                                            <input className="full_width_input" value={details.confirmNewPassword} placeholder="Confirm New Password" type="password"/>

                                    </div>
                                    <div className="buttons">
                                        <div className="save_changes_button">
                                            <CustomButton onClick={()=>{setDetails({...details,editPassword:!details.editPassword})}} isGoogleSignIn >Save Changes</CustomButton>
                                        </div>
                                        <div className="cancel_button">
                                            <CustomButton onClick={()=>{setDetails({...details,editPassword:!details.editPassword})}} >Cancel</CustomButton>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                         </div>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
}
export default ZoomPage