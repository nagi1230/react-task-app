import React from 'react';
import './Table.css';

const Table = ({
    columns,
    data,
    className = '',
    striped = false,
    hoverable = true,
    bordered = false
}) => {
    const tableClass = [
        'custom-table',
        striped ? 'table-striped' : '',
        hoverable ? 'table-hoverable' : '',
        bordered ? 'table-bordered' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className="table-container">
            <table className={tableClass}>
                <thead className="table-header">
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="table-header-cell"
                                style={{ width: column.width }}
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="table-body">
                    {data.length === 0 ? (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="table-empty"
                            >
                                No data available
                            </td>
                        </tr>
                    ) : (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="table-row">
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex} className="table-cell">
                                        {column.render
                                            ? column.render(row[column.key], row, rowIndex)
                                            : row[column.key]
                                        }
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
