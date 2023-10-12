
"use client"
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  chakra
} from "@chakra-ui/react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { useState } from "react";
import { Pagination } from ".";
import { useDebouce } from "../../hooks";
import { DataTableSkeleton } from "./dataTableSkeleton";

export type IDataTableProps<Data extends object> = {
  data: Data[];
  columns: ColumnDef<Data, any>[];
  handleNextPage?: () => void
  handlePreviousPage?: () => void
  isLoading: boolean
};

export function DataTable<Data extends object>({
  data,
  columns,
  handleNextPage,
  handlePreviousPage,
  isLoading
}: IDataTableProps<Data>) {
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])
  const debounce = useDebouce()
  const table = useReactTable({
    data,
    columns,
    initialState: {
      columnVisibility: {
        'id': false
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
  })

  const handleSetFilter = debounce((value: string) => setGlobalFilter(String(value)), 500)

  if (isLoading) { return <DataTableSkeleton /> }
  return <Flex
    direction='column'
    w='100%'
  >
    <HStack
      my={8}
    >
      <Input
        w={['100%', '100%', '50%']}
        placeholder="Filter by title"
        onChange={(e) => handleSetFilter(e.target.value)}

      />
    </HStack>

    <TableContainer>
      <Table
        variant='striped'
      >
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Tr
              key={headerGroup.id}
            >
              {headerGroup.headers.map(header => {
                const meta: any = header.column.columnDef.meta
                return (
                  <Th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    isNumeric={meta?.isNumeric}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <chakra.span pl="4">
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === "desc" ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                )
              })}
            </Tr>
          ))}
        </Thead>

        <Tbody>
          {table.getRowModel().rows.map(row => (
            <Tr
              key={row.id}
              onClick={() => {
                window.location.href = `/comments/${row.getValue('id')}`
              }}
              style={{
                cursor: 'pointer',
              }}
            >
              {
                row.getVisibleCells().map(cell => {
                  const meta: any = cell.column.columnDef.meta
                  return (
                    <Td
                      key={cell.id}
                      isNumeric={meta?.isNumeric}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}

                    </Td>

                  )
                })
              }
            </Tr>

          ))}
        </Tbody>
        {!!handlePreviousPage && !!handleNextPage && (
          <Pagination
            handlePreviousPage={() => {
              handlePreviousPage()
              setGlobalFilter('')
            }}
            handleNextPage={() => {
              handleNextPage()
              setGlobalFilter('')
            }}
          />
        )}
      </Table>
    </TableContainer>
  </Flex>
}