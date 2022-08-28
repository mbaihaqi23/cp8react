import { Component } from "react";
import Button1 from "./Button1";

class Sekolah extends Component {
render() {
    return (
        <>
        <div>
            <th>Pendidikan</th>
            <table>
                <tr>
                    <th>No</th>
                    <th>Level</th>
                    <th>Nama Sekolah</th>
                </tr>
                    <td>1</td>
                    <td>SD</td>
                    <td>MIN Kuta Blang</td>
                <tr>
                    <td>2</td>
                    <td>SMP</td>
                    <td>SMPN 5</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>SMA</td>
                    <td>SMAN 2</td>
                </tr>
            </table>
        </div>
        <Button1/>
        </>
    )
}
}

export default Sekolah
