import React from "react"
interface ICardProps {
    name: string;
    flag: string;
    region: string
}
export default function CountryCard(props: ICardProps) {
    return <div style={{ width: "250px", padding: "3%", border: "1px solid black", borderRadius: "10px", display: "inline-block", }}>
        <h4> {props.name} </h4>
        <div>
            <img height={120} width={120} src={props.flag} />
        </div>
        <div>
            <span style={{ color: "blue" }}> {props.region} </span>
        </div>
    </div>
}