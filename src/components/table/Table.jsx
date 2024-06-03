import React, { useEffect, useState } from 'react';
import './Table.scss';
import sprite from '../../assets/icons/sprite.svg';


const Table = ({ url }) => {

    const [data, setData] = useState([])
    const [tableTitles, setTableTitles] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [columnsPerPage, setColumnsPerPage] = useState(10);

    const parseStringToJson = (input) => {
        const jsonData = input.replace(/(?<=: )NaN/g, 'null').replace(/"Уровень риска": "([^"]*),([^"]*")/g, '"Уровень риска": "$1.$2');
        let objectsArray = JSON.parse(jsonData);
        objectsArray = objectsArray.map(obj => {
            let newObj = {};
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    let newKey = key.replace(/ /g, '_');
                    newObj[newKey] = obj[key];
                }
            }

            return newObj;
        })
        return objectsArray
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.text())
            .then(data => {
                const tables = parseStringToJson(data);
                const uniqueKeys = tables.reduce((keys, table) => {
                    Object.keys(table).forEach(key => {
                        if (!keys.includes(key)) {
                            keys.push(key);
                        }
                    });
                    return keys;
                }, []);
                setTableTitles(uniqueKeys)
                setData(tables)
            })
            .catch(error => console.error('Ошибка при получении данных:', error));
    }, [url]);

    useEffect(() => {
        const updateColumnsPerPage = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 576) {
                setColumnsPerPage(3);
            } else if (screenWidth <= 768) {
                setColumnsPerPage(4);
            } else if (screenWidth <= 991) {
                setColumnsPerPage(6);
            } else if (screenWidth <= 1200) {
                setColumnsPerPage(8);
            } else {
                setColumnsPerPage(10);
            }
        };

        window.addEventListener('resize', updateColumnsPerPage);
        updateColumnsPerPage();

        return () => window.removeEventListener('resize', updateColumnsPerPage);
    }, []);
    const titles = tableTitles.map(item => item.replace(/_/g, ' '));

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };
    const handlePrevPage = () => {
        setCurrentPage(prevPage => (prevPage > 0 ? prevPage - 1 : 0));
    };
    const startIndex = currentPage * columnsPerPage;
    const currentPageTitles = titles.slice(startIndex, startIndex + columnsPerPage);
    const currentPageKeys = tableTitles.slice(startIndex, startIndex + columnsPerPage);

    const getClassNames = (value) => {
        if (typeof value === 'string' && value.includes('+')) {
            return 'list__title--green';
        } else if (typeof value === 'string' && value.includes('-')) {
            return 'list__title--red';
        }
        return '';
    };

    const getRowClassNames = (rowData) => {
        const growthValue = rowData['Потенциал_роста'];
        if (typeof growthValue === 'string') {
            if (growthValue.includes('+')) {
                return 'table-body__list--green';
            } else if (growthValue.includes('-')) {
                return 'table-body__list--red';
            }
        }
        return '';
    };

    const formatValue = (key, value) => {
        if (key === 'Уровень_риска' && value != null && !isNaN(value)) {
            return parseFloat(value).toFixed(2);
        }
        return value;
    };

    return (
        <div>
            <div className='pagination'>
                <button className='pagination__btn pagination__btn--prev' onClick={handlePrevPage} disabled={currentPage === 0}>
                    <svg className="icon">
                        <use href={`${sprite}#icon-pagination_arrow`}></use>
                    </svg>
                </button>
                <button className='pagination__btn pagination__btn--next' onClick={handleNextPage} disabled={startIndex + columnsPerPage >= tableTitles.length}>
                    <svg className="icon">
                        <use href={`${sprite}#icon-pagination_arrow`}></use>
                    </svg>
                </button>
            </div>
            <table className='table'>
                <thead className='table-head'>
                    <tr className='table-head__list list'>
                        {currentPageTitles &&
                            currentPageTitles.map(title =>
                                <th key={title} className='list__title'>{title}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {data &&
                        data.map((row, index) => (
                            <tr key={index} className={`table-body__list list ${getRowClassNames(row)}`}>
                                {currentPageKeys &&
                                    currentPageKeys.map((key) => (
                                        <td key={key} className={`list__title ${getClassNames(row[key])}`}>{formatValue(key, row[key])}</td>
                                    ))}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;