function ErrorModal({errorMessage = 'Error!'}) {
    return (
        <div
            style={{
                position: "absolute",
                backgroundColor: "blue",
                width: 200,
                height: 50,
                top: 50,
                right: "50%"
            }}
        >
            <p>{errorMessage}</p>
        </div>
    )
}

export default ErrorModal;