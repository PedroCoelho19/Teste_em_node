export interface AppointmetProps {
    customer: string
    startsAt: Date
    endAt: Date
}

export class Appointmet {
    private props: AppointmetProps

    get customer () {
        return this.props.customer
    }

    get startAt () {
        return this.props.startsAt
    }
    get endAt () {
        return this.props.endAt
    }

    constructor(props:AppointmetProps){
        this.props = props
    }
}