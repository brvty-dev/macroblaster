document.addEventListener('DOMContentLoaded', function () {
    const rawData = document.getElementById('chart-data').textContent;
    const data = JSON.parse(rawData);

    const labels = data.labels;
    const views = data.views;
    const conversions = data.conversions;
    const conversionRates = data.conversion_rates;

    new Chart(document.getElementById('combinedChart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                   label: 'Views',
                   data: views,
                   yAxisID: 'y',
                   type: 'bar'
                },
                {
                   label: 'Conversions',
                   data: conversions,
                   yAxisID: 'y',
                   type: 'bar'
                },
                {
                   label: 'Conversion Rate (%)',
                   data: conversionRates,
                   yAxisID: 'y1',
                   type: 'line',
                   tension: 0.4,
                   pointStyle: 'circle',
                   pointRadius: 4,
                   fill: false
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
           stacked: false,
           plugins: {
               title: {
                    display: true,
                    text: 'Landing Page Performance Overview',
                    color: '#ffffff',
                    font: {
                        size: 20,
                        weight: 'normal'
                    }
                },
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white' // x-axis tick labels
                    },
                    title: {
                        display: true,
                        text: 'Date',
                        color: 'white' // x-axis title
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: 'white' // x-axis tick labels
                    },
                    title: {
                        display: true,
                        text: 'Count',
                        color: '#ffffff'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: 'white' // x-axis tick labels
                    },
                    title: {
                        display: true,
                        text: 'Conversion Rate (%)',
                        color: '#ffffff'
                    },
                    grid: {
                        drawOnChartArea: false
                    },
                    min: 0,
                    max: 100
                }
            }
        }
    });

    const variantRaw = document.getElementById('variant-data')?.textContent;
    if (variantRaw) {
        const variantData = JSON.parse(variantRaw);
    
        for (const [page, info] of Object.entries(variantData)) {
            const ctx = document.getElementById(`chart_${page}`);
            if (!ctx) continue;
    
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: info.variants,
                    datasets: [
                        {
                            label: 'Views',
                            data: info.views,
                            yAxisID: 'y',
                            type: 'bar'
                        },
                        {
                            label: 'Conversions',
                            data: info.conversions,
                            yAxisID: 'y',
                            type: 'bar'
                        },
                        {
                            label: 'Conversion Rate (%)',
                            data: info.rates,
                            yAxisID: 'y1',
                            type: 'line',
                            tension: 0.4,
                            pointStyle: 'circle',
                            pointRadius: 4,
                            fill: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    interaction: {
                        mode: 'index',
                        intersect: false
                    },
                    stacked: false,
                    plugins: {
                        title: {
                            display: true,
                            text: `${page.replace('_', ' ').replace(/^\w/, c => c.toUpperCase())} Page-Share Overview`,
                            color: '#ffffff',
                            font: {
                                size: 20,
                                weight: 'normal'
                            }
                        },
                        legend: {
                            labels: {
                                color: '#ffffff'
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: 'white'
                            }
                        },
                        y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                            ticks: {
                                color: 'white'
                            },
                            title: {
                                display: true,
                                text: 'Count',
                                color: '#ffffff'
                            }
                        },
                        y1: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            ticks: {
                                color: 'white'
                            },
                            title: {
                                display: true,
                                text: 'Conversion Rate (%)',
                                color: '#ffffff'
                            },
                            grid: {
                                drawOnChartArea: false
                            },
                            min: 0,
                            max: 100
                        }
                    }
                }
            });
        }
    }

});