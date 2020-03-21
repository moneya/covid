<template>
    <App :show-sidebar="false" :show-header="false">
        <template #page-header>
            <div class="row">
                <div class="col-12">
                    <div class="card card-transparent">
                        <div class="card-header ">
                            <div class="card-title">Network Graph</div>
                        </div>
                        <div class="card-body">
                            <h3><span class="bold">COVID-19</span> Case Map</h3>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <div class="row">
            <div class="col-12">
                <div class="card card-body card-transparent">
                    <div id="map"></div>
                </div>
            </div>
        </div>

    </App>
</template>

<script>
    import App from "../../Layouts/App";
    import vis from 'vis-network/dist/vis-network';

    export default {
        name: "CaseMap",
        components: {App},
        props: {
            network : Object,
        },
        mounted(){
            var nodes = new vis.DataSet(this.network.nodes);

            // create an array with edges
            var edges = new vis.DataSet(this.network.edges);

            // create a network
            var container = document.getElementById('map');
            var data = {
                nodes: nodes,
                edges: edges
            };
            var options = {
                physics: {
                    stabilization: false,
                    barnesHut: {
                        springLength: 200
                    }
                },
                // layout:{
                //     hierarchical: true
                // },
                edges:{
                    arrows: 'to, middle',
                    color: 'red',
                    font: '12px arial #ff0000',
                    scaling:{
                        label: true,
                    },
                    shadow: true,
                    smooth: true,
                },
                nodes: {
                    shape: 'hexagon'
                }
            };
            var network = new vis.Network(container, data, options);
        }
    }
</script>

<style scoped lang="scss">
    div#map {
        height: 600px;
    }
</style>