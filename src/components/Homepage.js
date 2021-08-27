import axios from 'axios';
import React, { useEffect } from 'react';
import postToken from '../services/postToken';
import Banner from './HomePage/Banner';
import ExclusiveBrands from './HomePage/ExclusiveBrands';
import Information from './HomePage/Information';
import Laboratories from './HomePage/Laboratories';
import NavigationBar from './HomePage/NavigationBar';
import Services from './HomePage/Services';
import Suggestions from './HomePage/Suggestions';
import Telefares from './HomePage/Telefares';

const HomePage = () => {

    // useEffect(()=>{
    //     const postFunc = async () => {
    //         const infoToken = await postToken ()
    //         console.log(infoToken.Authorization)nm
    //     } 
    //         postFunc() 
    // },[])

    // useEffect(()=>{
    //     const postTodoContainer = async () => {
    //         // var raw = `{\n	\"username\": \"${dataForm.username}"\,\n	\"password\": \"${dataForm.password}\"\n}`;
    //         let raw = {
    //            user:"DN**EC--U001++",
    //            password: "D1STR1B1D0R4_==_N3G0C13M0$_"
    //         };
    
    //         let requestOptions = {
    //             method:'POST',
    //             url:'/login',
    //             baseURL:'https://181.143.234.138:8080/api.atlas.negociemos/rest/ws',
    //             data: raw
    //         }
    //         const promise = await axios(requestOptions)
    //         return promise
    //     }
    //     postTodoContainer()
    // },[])

    let token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJETioqRUMtLVUwMDErKyIsImlzcyI6Imh0dHA6Ly8xODEuMTQzLjIzNC4xMzg6ODA4MC9hcGkuYXRsYXMubmVnb2NpZW1vcy9yZXN0L3dzL2xvZ2luIiwiaWF0IjoxNjMwMDk5NTYyLCJleHAiOjE2MzAxMDEzNjJ9.hzyj_jdgZZqJ8vJB480LV56TuexCzGX1f-voUINpo7w"

    useEffect(()=>{
        const getProfile = async () => {
            const data = await axios({
                method:'GET',
                url:'/terceros?filtro=farmacia',
                baseURL:'https://181.143.234.138:8080/api.atlas.negociemos/rest/ws',
                headers: {"Authorization":token}
            })
            return data.data
        }
         getProfile()
    },[])
    
    return (
        <div className="HomePage">
            <Information/>
            <NavigationBar/>
            <Banner/>
            <Telefares/>
            <Suggestions/>
            <Services/>
            <Laboratories/>
            <ExclusiveBrands/>
        </div>
    );
};

export default HomePage;