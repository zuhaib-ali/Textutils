import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.title} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.title}: </strong> {props.alert.message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

Alert.defaultProps = {
    title:"Alert title!",
    message: "You alert message"
}
