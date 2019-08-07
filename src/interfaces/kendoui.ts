interface IKendoDataTransport {
    type: String,
    transport: {
        read: String
    },
}

interface IKDropDownData {
    dataText: String,
    dataValue: String,
    dataSource: IKendoDataTransport
}

export { IKendoDataTransport, IKDropDownData };