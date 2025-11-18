import React from 'react';
import useAuth from '../../hook/useAuth';
import useSecureAxios from '../../hook/useSecureAxios';
import { useQuery } from '@tanstack/react-query';

const MyParcel = () => {
    const {user} = useAuth()
    const axiosSecure = useSecureAxios()
    const {data: parcels = []} = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            <h2>myj parcel {parcels.length}</h2>
        </div>
    );
};

export default MyParcel;