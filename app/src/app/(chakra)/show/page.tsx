"use client"
import { useRouter,useSearchParams } from "next/navigation";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container 
  } from '@chakra-ui/react'
import TailwindContainer from "@/components/Auto/UI/TailwindContainer";
  export default function Show(){
    const router = useRouter()
    const searchParams = useSearchParams();
    const auth_check = searchParams.get("auth");
    if(auth_check === null){
        router.push("/")
    }
    return (
        <>
            <TailwindContainer>
                <TableContainer>
                    <Table 
                        variant="simple"
                        size="md">
                        <TableCaption placement="top">
                            様々な学生の経験談がここに集まっています！
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>
                                    学年
                                </Th>
                                <Th>
                                    学科
                                </Th>
                                <Th>
                                    経験談
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody overflowX="hidden">
                        <Tr>
                            <Td>三年生</Td>
                            <Td>情報工学科</Td>
                            <Td >CG-ARTSWebデザインのエキスパート試験に挑戦した！</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </TailwindContainer>
        </>
    )
}
