import React, { Component } from "react";
import { FooterBar } from "../components/FooterBar";

class About extends Component{
    render(){
        return(
            <div className="App-header">
                <div className="aboot">
                    <p>hi again! my name is gurjit dhaliwal, i'm a current senior at UMD - College Park.</p>
                    <p>love to write: <a href="https://docs.google.com/document/d/17zug4PKgcrfvgj_hIXA3OZfc-oZI1b6ByWX3HxAsAW4/edit?usp=sharing">philosophical papers</a> and <a href="https://drive.google.com/file/d/1g9xZMXeNHKSs0KQI-lzM9UFyaiH-REpg/view?usp=share_link">short stories</a></p>
                    <p>other than writing, love to partake in sports and any form of competitive activity. currently competing in a traditional punjabi dance, known as bhangra.</p>
                    <p>photos!</p>
                </div>

                <div className="pics">
                    <img src="https://lh3.googleusercontent.com/dYLzQphKTqzFKZ8ilqWN0wKmYFIRQkTW-NoJLwVFgedmKiQelx4Q-H7Pnx0bTZ-xLl8DCObdRzL1REecvziSSMxS97Q6jHjgS_opPc8bHhg-f1GF6x7F_80htImFFoUoJe2miD-l2tnlJauUV-JbCsQjA713lXz29C8B2z4TSQhhcIbsaPQCjyV6mR7eliIxmYT7gOD_7ShH7C1ciu5mqAZYqiQ3k4T9SOyKdAL_Ex1AlU05BjFUkoZ-pgMsahOnDCGc0vWIwmKkBC0aCD8qOGafRk0EA1VumV6DoXKvER80hPBHQ7eBOmEFA6UiTmPgGRmZtspMYhyaIWw53__xCyFg0n2u-NZN0qYs9KI1eGTdJwuaBmw-t1RfVJMv-lMCzImyLoJbXShNqo8-EargNIiZBkxmbD0-cvlugt7GIrQmjv2r4wnuaNLgVonzLOucpOz69UyTrGrL8YHTigq-g5nEXQU2PgThHw7mfbubyV6qzWo3mdibH1l3cF-XA3SnjI8I0Ad8TjkOXXcCY0HipFhCJzlYeUZ3YtAOGT-LbvXMmdpplAfHr9FzDMyM4Tgx_L0iKK-Ca5bd-Tp9U9xjh0OREWbPXbFodYUj6trSlOlKiI71yqxxu9rwyHHxBdKV13B_FP-Q06qcEmlu7xz0VNZA1QojVBbtv4dd2TjbjLPdM-Y9GHzq1nSvCCOwSv5sS3mrHGhRLiulVaoDk0DisMMMHtwVyrgipg96TIGW-3wRVSQJ-4MRnLIZeSmxHz_VlNPhk2smTlnr8JvPXwMTM402EB0VdH8AQssxsT8o64wKEExqhXJNU8oSzryCbmv9lcV4qaxeL7xyUamg_jjAYUpn6EjRIX5EHXQzF9eyXlF5qI4PdbZKEBEEi25-B7vpsp-zIYXP_9OB06eoVtgbliofPsR8ml6hdkMk5nBIwdO-HoR6T4j5Qd3nb_F6UmDHDao1w6setyRbK_uJMmwXtPp-oAfsbd78N5IKQBMReHGRngpijqsu8qEX=w593-h889-no?authuser=0" height={300} width={200}/>&nbsp;&nbsp;
                    <img src="https://lh3.googleusercontent.com/1h9C332-rakyYrncoUAahOvcrsNOyGd3DFu06IFaQ0Ux1rsua_EQDERNnqYCChfuyqzCtgQp6rBoPQUGP56i5iwRbz9kjo_2rxstFuoj5EVcO-r4fsyc5xhNIZuGumhq7Rj2Ac_S5h_aDhIJSHBd1ylYG-Pa69BS_Ez2_ZpLTCTGCMOvaE1_kAow6ucsfy0CuG-8b7DNSykWI2UpfwzM_Embdy2sUBBqVekR6Dj4sWzw1zM86Hkl482hf_uX756w5XI50dR0LdrptUKJSuRluoL2t4JO0XDRZIwOI0iuVYD4wR_Yi0srkqyAe4XS8c-BFokP92WkKQax_UxY6pw0h715Foh0cJ7AapP83lQw2IEWh8NwNnEf65PVjTIPNG7QlfvVHtyR2UtZs9-HFcmGRK1EZ7mPwZGOzTxhhMI5sZJoASrwP8WSoYJ7ixAdg_nA1-G-g_bPsM0KRdpuZmDAOJ8nE3vMKY1bJzTX9ki17T-cttU8UJnYqMr2CAO_-smDJx9VNlXg-bNIZHNfUvC-4q4tzCvR6GWPWNhDLeVe_2qtBVJnvuzORNS1OObMLA77oqq8l2R47s99cOI6fF9EwFD2DnajUYucX0ZJmbB5Dr1J-A-6pPVMoAXG7YrEL5jBdAEP3TPlj0vcDH36q49dILxAQrXVVeBZGNas3vQXEd_jQiMEcRqZhjpaUyfuHVnbRokJNCWsFk0jnrcJYkE7gz2hcQtlZ6h663OU6yu3LyIYK46Td_rEG5JOtR_1aBFw35zo3Hg7Ej84f46u24LKXa2kuDaBYdMdTv6WBGQoBXYPmMbXNDrbsoDn0iQk1qrq1tgAPjQ5Qw9c2Hf62I1U0F_0qoWNDuNPnVO3lkUBb0b1ALTP_zAC2KMbPfjrXvdWl18i5JsnHEGKCnzdLx5lZjQe6kHf1JsFoue0EKMwk3fWLLsOsyWWH2P1vbj4qNkp6RSwzX-c-cpCwXdKMq8bh-KxqDPlORZkvbhDqd57Cn1uaazTglaXCNl1=w1186-h889-no?authuser=0" height={275} width={375}/>&nbsp;&nbsp;
                    <img src="https://lh3.googleusercontent.com/nVRB82Lv7n4z4fAT-RP7F3vZb0hY3y3rsXWxiMJ4huiTeb_U-7hM5X6LeJfnCnhccz26j4g5JTYN2jg2a-BfdAjjo9z6-8cIjoeVc0bDWgNO93K5Og76NL4-2QcVZdfccmX2eszjiPu25EELHQq9jhLCWLFpFqYh2-EMyN-RhTBWQsiaD6DoU8olyGjKNqzHV0QNIgAjpKl2aRkXjAbOTaUxne_RPElj7Xlr7b2SeV6AatmiRx9AlT8j83yhjbAaC2eMfU0c0JHOnkjqB5ibUTsBXbw03AmSbMmlVS2jcSI9TWSRIocdDoEg6V873o7nuxKAtPxDLBFFIEKkMbBPMGmcNj7dieOELLhF7uIbu5FaHqUOWIszvCBpeU7OMpJ3dQEY7GGQSC1_vbyI4GOqkap8YQhiomc8XRagaYA-_ZAvdHoXC51vUQILYVNR7vPjqcQbJh4wvrtkUyRUJyfSOda8eq-R_e9QV-aWwSOL42QNPv3WfTpmwO4kTv0wQzBMNdYd09qnAuzwkpUEXgYLw6BzTbFeEISWb-5ViiVfkninuy3fbb5cM4BWmvR8O00hAa9S6tCYoaTKm5ajKOgyFuK9sk3WeC7NBT1LB-a86g7gpKJT3gRDnxv70k6YWxuT1FPsoFEcnWrDMTef8HRc0oEi_z2tCVVseXXuLHEhtk_MNchCO9vqacjy6s4JpeabmbiwI7FxyUNpTadSXNtxXF8EfA4DEzTPsbwmhD6R9sy-PQdUVMcDMXkh6-fu1NbvBbl3gJ-K3n8glhxrQ-R0d3ZDEPIzR-2aU6I7bH_friuU6xwJ6Wtoi0iZ53fCPPyvn9hCmsM_WGA8C-IQ5WXRhdi0Fv58VO6gO3Ihz6Z7U5pM7vjdwbYrZxCLK_Yxxf0TVvwQYsNQwIVCkOlQ3k36c_oIUV4_WHAPYGWM6-G_UjAEcd2OKAa24mnUEt3lfbc5WIQRk1iUP_e_CRW9Q3wGVyfViRtBY3nWqPNpzZTFqJJ0zfSV43QLOt9P=w592-h889-no?authuser=0" height={300} width={200}/>
                    
                </div>
                <FooterBar/>
            </div>
        )
    }
}

export default About;