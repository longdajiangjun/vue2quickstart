/**
 * Created by Bruce.Liu on 2016-10-10.
 */
import  hello from './components/Hello.vue'
import foo from './components/Foo.vue'
import bar from './components/Bar.vue'

export default [
  {path: '/', redirect: '/hello'},
  {path: '/hello', component: hello},
  {path: '/foo', component: foo},
  {path: '/bar', component: bar}
]
