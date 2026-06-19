import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {AddCheckIn, GetAllRecord,AddCheckOut,GetEmployeeRecords} from "./apiFetching";

function useAddCheckIn() {
    const queryClient = useQueryClient();

    const {isLoading:isAdding, mutate:addcheckin} = useMutation(
        {
            mutationFn: AddCheckIn,
            onError: async (err) => {
                console.log("err", err)
            },
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: ['allRecord'],
                })
            },
        }
    );

    return {isAdding, addcheckin};
}


function useAddCheckOut() {
    const queryClient = useQueryClient();

    const {isLoading:isAdding, mutate:addcheckout} = useMutation(
        {
            mutationFn: AddCheckOut,
            onError: async (err) => {
                console.log("err", err)
            },
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: ['allRecord'],
                })
            },
        }
    );

    return {isAdding, addcheckout};
}

function useGetEmployee() {
    const {isLoading:isSearching, mutate:getemployee, data, isError, error} = useMutation({
        mutationFn: GetEmployeeRecords,
        onError: async (err) => {
            console.log("err", err)
        },
        onSuccess: (ok)=>{
           console.log(ok)
        },
    });

    return {isSearching, getemployee, data, isError, error};
}


function useGetAllRecord() {
    const query = useQuery({
        queryKey: ['allRecord'],
        queryFn: () => GetAllRecord(),
        staleTime: 5 * 60 * 1000, // Consider data stale after 10 minutes
        gcTime: 5 * 60 * 1000, // Keep data in cache for 20 minutes
        retry: (failureCount, error) => {
            return failureCount < 3;
        }
    });
    return query;
}

export {useGetAllRecord, useAddCheckIn, useAddCheckOut,useGetEmployee};