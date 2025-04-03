import { useState, useEffect } from "react";
import Table from "./Table";
import axiosInstance from "../Intercepter/axiosInstance";

export const ApiTable = () => {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get("/college/get-all");
                if (response.data.status && response.data.data.content) {
                    const transformedData = response.data.data.content.map((college) => ({
                        CollegeName: college.name || "N/A",
                        Email: college.email || "N/A",
                        Phone: college.phone || "N/A",
                        Address: college.address || "N/A",
                        Status: (
                            <span className="bg-amber-500 px-3 py-2 rounded-4xl text-white">
                                Pending...
                            </span>
                        ),
                        Action: (
                            <button className="rounded py-2 px-3 bg-blue-600 text-white cursor-pointer">
                                Approve
                            </button>
                        ),
                    }));
                    setApiData(transformedData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return <div>{loading ? <p>Loading...</p> : <Table data={apiData} />}</div>;
};
