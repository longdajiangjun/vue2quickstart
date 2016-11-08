/**
 * Created by Bruce.Liu on 2016-10-10.
 */
import  hello from './components/Hello.vue'
import foo from './components/Foo.vue'
import bar from './components/Bar.vue'
import Table1 from './components/elements/Table1.vue'
import Table2 from './components/elements/Table2Service.vue'
import Table3 from './components/elements/Table3Dialog.vue'
import Checkbox1 from './components/elements/Checkbox1.vue'
import dialogIndex from './components/demo/index.vue'
export default [
  {path: '/', redirect: '/hello'},
  {path: '/hello', component: hello},
  {path: '/foo', component: foo},
  {path: '/bar', component: bar},
  {path: '/table', component: Table1},
  {path: '/table2', component: Table2},
  {path: '/table3', component: Table3},
  {path: '/checkbox', component: Checkbox1},
  {path: '/dialogIndex', component: dialogIndex}
]
