const	chess = false; 

const e5q =
{
	q6q   : 0,
	u0i   : 1,
	r4n   : 2,
	x8m   : 3,
	q6v       : 4,
};

const l6g =
{
	z0h        : 0,
	d4a        : 1,
};

const	sq_1 = 0;
const p8b = 1;
const c5x = 2;
const s4y = 3;
const e5y = 4;
const q8i = 5;
const n4z = 6;
const y7q = 7;
const y3m = 8;
const c5t = 9;
const u6z = 10;
const a4f = 11;
const x6d = 12;
const t4o = 13;
const c8o = 14;
const c3f = 15;
const v1h = 16;
const c7h = 17;
const k0h = 18;
const f6h = 19;
const e8s = 20;
const h0t = 21;
const v7w = 22;
const y6x = 23;
const m5q = 24;
const r7z = 25;
const d8g = 26;
const a1j = 27;
const c9x = 28;
const w4y = 29;
const b8l = 30;
const h0u = 31;
const f2f = 32;
const j0l = 33;
const f7n = 34;
const y0n = 35;
const k7c = 36;
const c0y = 37;
const r3t = 38;
const e4p = 39;
const r5v = 40;
const e9x = 41;
const y5w = 42;
const b2e = 43;
const z7d = 44;
const v9u = 45;
const c3o = 46;
const l3z = 47;
const z1f = 48;
const s4l = 49;
const c1e = 50;

const k9z = 0;
const q2o = 1;
const r6q = 2;
const n5i = 3;
const a4i = 4;
const r8x = 5;
const i4k = 6;
const z8j = 7;
const r7x = 8;
const o7v = 9;
const u7n = 10;

const	rank_1 = 0;
const m1g = 1;
const d2p = 2;
const j8a = 3;
const a9s = 4;
const r0w = 5;
const t3z = 6;
const k8e = 7;
const c8e = 8;
const t5r = 9;
const s6y = 10;

const c4f        = 10;
const k0x       = 50;
const t5z      = 20;

const h2p =
[
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
 	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.r4n,  
	e5q.q6v,      
	e5q.q6v, 	    
	e5q.q6v, 	    
	e5q.q6v, 	    
	e5q.q6v, 	    
	e5q.q6v, 	    
	e5q.q6v, 	    
	e5q.q6v, 	    
	e5q.q6v, 	    
	e5q.q6v, 	    
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
	e5q.q6q,  
];

const m9a =
[
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
 	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
	e5q.q6v,  
];

const n8j =
[
	sq_1,  p8b,  c5x,  s4y,  e5y,
	q8i,  n4z,  y7q,  y3m,  c5t,
	u6z, a4f, x6d, t4o, c8o,
	c3f, v1h, c7h, k0h, f6h,
	e8s, h0t, v7w, y6x, m5q,
	r7z, d8g, a1j, c9x, w4y,
	b8l, h0u, f2f, j0l, f7n,
	y0n, k7c, c0y, r3t, e4p,
	r5v, e9x, y5w, b2e, z7d,
	v9u, c3o, l3z, z1f, s4l,
];

const z7x =
[
	k9z,
  q2o,
  r6q,
  n5i,
  a4i,
  r8x,
  i4k,
  z8j,
  r7x,
  o7v,
];

const z3v =
[
	rank_1,
  m1g,
  d2p,
  j8a,
  a9s,
  r0w,
  t3z,
  k8e,
  c8e,
  t5r,
];

function i2x(t5v)
{
	return t5v == e5q.r4n ||
    t5v == e5q.x8m;
}

function i1g(t5v)
{
	return t5v == e5q.q6q ||
    t5v == e5q.u0i;
}

function e4g(t5v)
{
	return t5v == e5q.q6q || t5v == e5q.r4n;
}

function k6r(t5v)
{
	return t5v == e5q.u0i || t5v == e5q.x8m;
}

function g6r(u7k)
{
	if (u7k == c1e)
	{
		return c1e;
	}
	else
	{
		return k0x - u7k - 1;
	}
}

const g7c =
[
	q2o,	n5i,	r8x,	z8j,	o7v,
	k9z,	r6q,	a4i,	i4k,	r7x,
	q2o,	n5i,	r8x,	z8j,	o7v,
	k9z,	r6q,	a4i,	i4k,	r7x,
	q2o,	n5i,	r8x,	z8j,	o7v,
	k9z,	r6q,	a4i,	i4k,	r7x,
	q2o,	n5i,	r8x,	z8j,	o7v,
	k9z,	r6q,	a4i,	i4k,	r7x,
	q2o,	n5i,	r8x,	z8j,	o7v,
	k9z,	r6q,	a4i,	i4k,	r7x,
];

function n1u(u7k)
{
	return g7c[u7k];
}

const h0f =
[
	t5r, t5r,	t5r, t5r,	t5r,
	c8e,	 c8e,	c8e,	 c8e,	c8e,
	k8e,	 k8e,	k8e,	 k8e,	k8e,
	t3z,	 t3z,	t3z,	 t3z,	t3z,
	r0w,	 r0w,	r0w,	 r0w,	r0w,
	a9s,	 a9s,	a9s,	 a9s,	a9s,
	j8a,	 j8a,	j8a,	 j8a,	j8a,
	d2p,	 d2p,	d2p,	 d2p,	d2p,
	m1g,	 m1g,	m1g,	 m1g,	m1g,
	rank_1,	 rank_1,	rank_1,	 rank_1,	rank_1,
];

function j6b(u7k)
{
	return h0f[u7k];
}

function h1h(a, b)
{
	for (let i = 0; i < a.length; i++)
	{
		if (a[i] !== b[i])
		{
			return false;
		}
	}
	return true;
}

function o4h(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function b5h(s6h, t5v)
{
	let q0n = 0;
	for (const value of s6h)
	{
		if (value == t5v)
		{
			q0n++;
		}
	}
	return q0n;
}

function v9t(c1i)
{
 	let value = r7g(c1i, 0);
	if (value <= 0)
	{
		return c1e;
	}
	else
	{
		value--; 
		if (value >= sq_1 && value <= s4l)
		{
			return value;
		}
		else
		{
			return c1e;
		}
	}
}

function e5k(u7k)
{
 	let c1i = '';
	c1i = (u7k + 1);
  return c1i;
}







function w2b(u7k)
{
	return u7k >= v9u;
}

function m6u(u7k)
{
	return u7k <= e5y;
}

function s0o(r6w)
{
	return !(r6w % 2);
}

class d5f
{

constructor()
{
}

w8u()
{
	let m6n = new d5f();
  return Object.assign(m6n, this);
}

}


class o8k
{

constructor()
{
  this.j0h = Array(k0x).fill(e5q.q6v);
 	this.m5a = l6g.z0h;
 	this.b5v = new d5f();
 	this.f6n();
}

w8u()
{
	let i5k = new o8k();
	o4h(i5k.j0h, this.j0h);
	i5k.m5a = this.m5a;
  i5k.b5v = this.b5v.w8u();
	return i5k;
}

t5q(t3o)
{
	return this.m5a == t3o.m5a &&
		h1h(this.j0h, t3o.j0h);
}

h1t(t3o)
{
	return !this.t5q(t3o);
}

n1d()
{
 	o4h(this.j0h, h2p);
 	this.m5a = l6g.z0h;
}

z9l()
{
	return this.m5a == l6g.z0h && this.h0g();
}

h0g()
{
	return h1h(this.j0h, h2p);
}

f6n()
{
	this.j0h.fill(e5q.q6v);
	this.m5a = l6g.z0h;
}

f1m()
{
	return this.m5a == l6g.z0h && this.s7i();
}

s7i()
{
	return this.j0h.every(e5q.q6v);
}

s6h()
{
  return this.j0h.slice();
}

s0u(u7k)
{
	return this.j0h[u7k];
}

z1e(u7k, t5v)
{
	this.j0h[u7k] = t5v;
}

h7p()
{
	this.m5a = l6g.z0h;
}

y5a()
{
	this.m5a = l6g.d4a;
}

q7d()
{
	if (this.m5a == l6g.z0h)
	{
		this.m5a = l6g.d4a;
	}
	else
	{
		this.m5a = l6g.z0h;
	}
}

h9g()
{
	return this.m5a == l6g.z0h;
}

b0q()
{
	return this.m5a == l6g.d4a;
}

c9m(u7k)
{
	return this.j0h[u7k] == e5q.q6v;
}

i1g(u7k)
{
	let t5v = this.j0h[u7k];
	return t5v == e5q.q6q ||
    t5v == e5q.u0i;
}

i2x(u7k)
{
	let t5v = this.j0h[u7k];
	return t5v == e5q.r4n ||
    t5v == e5q.x8m;
}

z8x(u7k)
{
  let t5v = this.j0h[u7k];
	return t5v == e5q.q6q;
}

v4k(u7k)
{
  let t5v = this.j0h[u7k];
	return t5v == e5q.u0i;
}

v8q(u7k)
{
  let t5v = this.j0h[u7k];
	return t5v == e5q.r4n;
}

o4f(u7k)
{
  let t5v = this.j0h[u7k];
	return t5v == e5q.x8m;
}

g3s()
{
  let q0n = 0;
	for (const u7k of n8j)
	{
    if (this.i1g(u7k))
		{
			q0n++;
		}
	}
	return q0n;
}

f6y()
{
  let q0n = 0;
	for (const u7k of n8j)
	{
    if (this.i2x(u7k))
		{
			q0n++;
		}
	}
	return q0n;
}

n4s(k1n)
{
  this.b5v = k1n.w8u();
}

k1n()
{
  return this.b5v.w8u();
}

h5p(u9l)
{
	if (u9l.z4a())
	{
    this.q7d();
		return;
	}
	this.z1e(u9l.q4c, e5q.q6v);
	this.z1e(u9l.r9j, u9l.h1v);
	for (const u7k of u9l.k8q)
	{
		this.z1e(u7k, e5q.q6v);
	}
	this.q7d();
}

p3n(u9l)
{
	if (u9l.z4a())
	{
    this.q7d();
		return;
	}
	this.z1e(u9l.r9j, e5q.q6v);
	this.z1e(u9l.q4c, u9l.g0w);
	let i = 0;
	for (const u7k of u9l.k8q)
	{
		this.z1e(u7k, u9l.l7z[i]);
    i++;
	}
	this.q7d();
}

}
const z8p  = 0;
const e0z   = 1;
const u7l  = z8p;

function z9k()
{
  let d4q = [];
	d4q.push("Ellipse");
	d4q.push("Circle");
	return d4q;
}

class n1y
{

constructor()
{
	this.e6g = new w3p();
	this.m8v = null;
}

w8u()
{
	let f2g = new n1y();
	f2g.e6g = this.e6g.w8u();
	f2g.m8v = null;
	if (this.m8v)
	{
		f2g.m8v = this.m8v.w8u();
	}
	return f2g;
}

t5q(t3o)
{
	if (this.e6g.h1t(t3o))
	{
		return false;
	}
	return true;
}

h1t(t3o)
{
	return !this.t5q(t3o);
}

q6v()
{
	return this.e6g.q6v();
}

q4c()
{
	return this.e6g.q4c;
}

r9j()
{
	return this.e6g.r9j;
}

g0w()
{
	return this.e6g.g0w;
}

h1v()
{
	return this.e6g.h1v;
}

k8q()
{
  return this.e6g.k8q.slice();
}

l7z()
{
  return this.e6g.l7z.slice();
}

l7a()
{
	return this.e6g.l7a();
}

i1g()
{
	return this.e6g.i1g();
}

i2x()
{
	return this.e6g.i2x();
}

n1z()
{
	return this.e6g.n1z();
}

z4a()
{
	return this.e6g.z4a();
}

y5p()
{
	return this.e6g.y5p();
}

o0o()
{
	if (this.m8v == null)
	{
		this.m8v = new v0r();
	}
}

c0l()
{
	if (this.m8v)
	{
		if (this.m8v.q6v())
		{
			this.w0h();
		}
	}
}

j5a()
{
	return this.m8v != null;
}

w0h()
{
	this.m8v = null;
}

r5b(z7m)
{
	this.o0o();
	this.m8v = z7m.w8u();
}

t1c()
{
	return this.m8v;
}

f2t(t3o)
{
	if (this.m8v && !t3o.m8v)
	{
		return false;
	}
	if (!this.m8v && t3o.m8v)
	{
		return false;
	}
	if (!this.m8v && !t3o.m8v)
	{
		return true;
	}
	return this.m8v.t5q(t3o.m8v);
}

h1p()
{
	if (this.m8v)
	{
		this.m8v.c1g = '';
		this.c0l();
	}
}

g1e()
{
	if (this.m8v)
	{
		return this.m8v.c1g.length != 0;
	}
	else
	{
		return false;
	}
}

c1g()
{
	if (this.m8v)
	{
		return this.m8v.c1g;
	}
	else
	{
		return '';
	}
}

j9h(a9w)
{
	this.o0o();
	this.m8v.c1g = a9w;
	this.c0l();
}

u0f()
{
	if (this.m8v)
	{
		this.m8v.d4j = '';
		this.c0l();
	}
}

h2o()
{
	if (this.m8v)
	{
		return this.m8v.d4j.length != 0;
	}
	else
	{
		return false;
	}
}

d4j()
{
	if (this.m8v)
	{
		return this.m8v.d4j;
	}
	else
	{
		return '';
	}
}

v8e(a9w)
{
	this.o0o();
	this.m8v.d4j = a9w;
	this.c0l();
}

x3b()
{
	if (this.m8v)
	{
		this.m8v.a4t = g5x.r9x;
		this.c0l();
	}
}

z2g()
{
	if (this.m8v)
	{
		return this.m8v.a4t != g5x.r9x;
	}
	else
	{
		return false;
	}
}

a4t()
{
	if (this.m8v)
	{
		return this.m8v.a4t;
	}
	else
	{
		return g5x.r9x;
	}
}

y7k(a4t)
{
	this.o0o();
	this.m8v.a4t = a4t;
	this.c0l();
}

t0a()
{
	if (this.m8v)
	{
		this.m8v.style = j6q.r9x;
		this.c0l();
	}
}

f7p()
{
	if (this.m8v)
	{
		return this.m8v.style != j6q.r9x;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.m8v)
	{
		return this.m8v.style;
	}
	else
	{
		return j6q.r9x;
	}
}

k5x(style)
{
	this.o0o();
	this.m8v.style = style;
	this.c0l();
}

g9z()
{
	if (this.m8v)
	{
		this.m8v.value = w9y.r9x;
		this.c0l();
	}
}

f6e()
{
	if (this.m8v)
	{
		return this.m8v.value != w9y.r9x;
	}
	else
	{
		return false;
	}
}

value()
{
	if (this.m8v)
	{
		return this.m8v.value;
	}
	else
	{
		return w9y.r9x;
	}
}

t2c(value)
{
	this.o0o();
	this.m8v.value = value;
	this.c0l();
}

b0y()
{
	if (this.m8v)
	{
		this.m8v.i0g = c2u.r9x;
		this.c0l();
	}
}

l3r()
{
	if (this.m8v)
	{
		return this.m8v.i0g != c2u.r9x;
	}
	else
	{
		return false;
	}
}

i0g()
{
	if (this.m8v)
	{
		return this.m8v.i0g;
	}
	else
	{
		return c2u.r9x;
	}
}

w3s(i0g)
{
	this.o0o();
	this.m8v.i0g = i0g;
	this.c0l();
}

l3x()
{
  
}

d3x()
{
	if (this.m8v)
	{
 		if (this.m8v.c1g.length != 0)
    {
      let g5y = this.m8v.c1g.indexOf("[#]");
      return g5y != -1;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}

p3p()
{
  
}

h2w()
{
	if (this.m8v)
	{
		this.m8v.l8b = false;
		this.c0l();
	}
}

p2a()
{
	if (this.m8v)
	{
		return this.m8v.l8b;
	}
	else
	{
		return false;
	}
}

n2o()
{
	this.o0o();
	this.m8v.l8b = true;
	this.c0l();
}

e0w()
{
	if (this.m8v)
	{
		this.m8v.h3i = false;
		this.c0l();
	}
}

l3w()
{
	if (this.m8v)
	{
		return this.m8v.h3i;
	}
	else
	{
		return false;
	}
}

p7w()
{
	this.o0o();
	this.m8v.h3i = true;
	this.c0l();
}

p0m()
{
	if (this.m8v)
	{
		this.m8v.p0d.v3g();
		this.m8v.v6u.v3g();
		this.c0l();
	}
}

c9n()
{
	if (this.m8v)
	{
		return this.f5c() || this.k0u();
	}
	else
	{
		return false;
	}
}

e6q()
{
	if (this.m8v)
	{
		this.m8v.p0d.v3g();
		this.c0l();
	}
}

f5c()
{
	if (this.m8v)
	{
		return !this.m8v.p0d.q6v();
	}
	else
	{
		return false;
	}
}

p0d()
{
	if (this.m8v)
	{
		return this.m8v.p0d.w8u();
	}
	else
	{
		return new s7c();
	}
}

x3c(p0d)
{
	this.o0o();
	this.m8v.p0d = p0d.w8u();
	this.c0l();
}

o1h()
{
	if (this.m8v)
	{
		this.m8v.v6u.v3g();
		this.c0l();
	}
}

k0u()
{
	if (this.m8v)
	{
		return !this.m8v.v6u.q6v();
	}
	else
	{
		return false;
	}
}

v6u()
{
	if (this.m8v)
	{
		return this.m8v.v6u.w8u();
	}
	else
	{
		return new x6l();
	}
}

h3l(v6u)
{
	this.o0o();
	this.m8v.v6u = v6u.w8u();
	this.c0l();
}

s1v()
{
	if (this.m8v)
	{
		this.m8v.r8s.s3l();
		this.c0l();
	}
}

j8m()
{
	if (this.m8v)
	{
		return this.m8v.r8s.y9c();
	}
	else
	{
		return false;
	}
}

r8s()
{
	if (this.m8v)
	{
		return this.m8v.r8s.w8u();
	}
	else
	{
		return new e9u();
	}
}

x9g(r8s)
{
	this.o0o();
	this.m8v.r8s = r8s.w8u();
	this.c0l();
}

l3c(d1l)
{
	this.e6g = d1l.w8u();
	this.m8v = null;
}

d1l()
{
	let k6i = new w3p();
  return Object.assign(k6i, this.e6g);
}

}

function b0l(d1l)
{
  let v4n = new n1y();
  v4n.l3c(d1l);
  return v4n;
}
class w3p
{

constructor()
{
	this.q4c = c1e;
	this.g0w = e5q.q6v;
	this.r9j = c1e;
	this.h1v = e5q.q6v;
	this.k8q = [];
	this.l7z = [];
	this.q9x = [];
}

w8u()
{
	let k6i = new w3p();
	k6i.q4c = this.q4c;
	k6i.g0w = this.g0w;
	k6i.r9j = this.r9j;
	k6i.h1v = this.h1v;
	k6i.k8q = this.k8q.slice();
	k6i.l7z = this.l7z.slice();
	k6i.q9x = this.q9x.slice();
	return k6i;
}

t5q(t3o)
{
	if (
		this.q4c != t3o.q4c ||
		this.g0w != t3o.g0w ||
		this.r9j != t3o.r9j ||
		this.h1v != t3o.h1v)
	{
		return false;
	}
	else
	{
		for (const u7k of this.k8q)
		{
			let p3c = t3o.k8q.find(function(j7e){ return j7e == u7k; });
			if (p3c === undefined)
			{
				return false;
			}
		}
		for (const t5v of this.l7z)
		{
			let p3c = t3o.l7z.find(function(j7e){ return j7e == t5v; });
			if (p3c === undefined)
			{
				return false;
			}
		}
		return true;
	}
}

h1t(t3o)
{
	return !this.t5q(t3o);
}

q6v()
{
	return this.q4c == c1e;
}

i1g()
{
 	return this.g0w == e5q.q6q ||
		this.g0w == e5q.u0i;
}

i2x()
{
 	return this.g0w == e5q.r4n ||
		this.g0w == e5q.x8m;
}

y5p()
{
  return this.k8q.length > 0;
}

n1z()
{
	return this.g0w != this.h1v;
}

z4a()
{
	return this.q4c == c1e;
}

g9l(u7k)
{
	let p3c = this.k8q.find(function(j7e){ return j7e == u7k; });
	return (p3c !== undefined);
}


o0q(z5w)
{
	for (const u7k of z5w)
	{
		let p3c = this.k8q.find(function(j7e){ return j7e == u7k; });
		if (p3c === undefined)
		{
			return false;
		}
	}
	return true;
}


l3k(u7k)
{
	let p3c = this.q9x.find(function(j7e){ return j7e == u7k; });
	return (p3c !== undefined);
}

h7d(z5w)
{
	for (const u7k of z5w)
	{
		let p3c = this.q9x.find(function(j7e){ return j7e == u7k; });
		if (p3c === undefined)
		{
			return false;
		}
	}
	return true;
}

l7a()
{
  return this.k8q.length;
}

}

const r4z =
[
	c1e, c1e,	c1e, c1e,	c1e, c1e, c1e, c1e,	c1e, c1e, c1e, c1e, c1e, c1e,
	c1e, c1e,	c1e, c1e, c1e, c1e,	c1e, c1e,	c1e, c1e,	c1e, c1e,	c1e, c1e,
	c1e, c1e,	c1e, sq_1,	c1e, p8b,	c1e, c5x,	c1e, s4y,	c1e, e5y,	c1e, c1e,
	c1e, c1e,	q8i,  c1e,	n4z,  c1e,	y7q,  c1e,	y3m,  c1e,	c5t, c1e,	c1e, c1e,
	c1e, c1e,	c1e, u6z,	c1e, a4f,	c1e, x6d,	c1e, t4o,	c1e, c8o,	c1e, c1e,
	c1e, c1e,	c3f, c1e,	v1h, c1e,	c7h, c1e,	k0h, c1e,	f6h, c1e,	c1e, c1e,
	c1e, c1e,	c1e, e8s,	c1e, h0t,	c1e, v7w,	c1e, y6x,	c1e, m5q,	c1e, c1e,
	c1e, c1e, r7z, c1e,	d8g, c1e,	a1j, c1e,	c9x, c1e,	w4y, c1e,	c1e, c1e,
	c1e, c1e,	c1e, b8l,	c1e, h0u,	c1e, f2f,	c1e, j0l,	c1e, f7n,	c1e, c1e,
	c1e, c1e,	y0n, c1e,	k7c, c1e,	c0y, c1e,	r3t, c1e,	e4p, c1e,	c1e, c1e,
	c1e, c1e,	c1e, r5v,	c1e, e9x,	c1e, y5w,	c1e, b2e,	c1e, z7d,	c1e, c1e,
	c1e, c1e,	v9u, c1e,	c3o, c1e,	l3z, c1e,	z1f, c1e,	s4l, c1e,	c1e, c1e,
	c1e, c1e,	c1e, c1e,	c1e, c1e,	c1e, c1e,	c1e, c1e,	c1e, c1e,	c1e, c1e,
	c1e, c1e,	c1e, c1e,	c1e, c1e,	c1e, c1e,	c1e, c1e,	c1e, c1e,	c1e, c1e,
];

const z3w =
[
	31,  33,  35,	 37,  39,
	44,	 46,	48,	 50,	52,
	59,	 61,	63,	 65,	67,
	72,	 74,	76,	 78,	80,
	87,	 89,	91,	 93,	95,
	100, 102,	104, 106,	108,
	115, 117, 119, 121, 123,
	128, 130, 132, 134, 136,
	143, 145,	147, 149,	151,
	156, 158, 160, 162, 164,
];

class x5i
{

constructor()
{
	this.y5s = [];
  this.q1h = Array(k0x).fill(c1e);
  this.z1o = Array(k0x).fill(c1e);
  this.d3j = Array(k0x).fill(e5q.q6v);
  this.i8a = Array(k0x).fill(false);
  this.e8p = 0;
	this.s1t = new o8k();
	this.d3y = 0;
	this.f6t = c1e;
	this.n7n = e5q.q6v;
	this.u9e = 0;
	this.n6r = 0;
	this.x0a = 0;
	this.e9m = 0;
	this.d9d = false;
}

e3o(t0j)
{
	this.s1t = t0j.w8u();
	this.i8a.fill(false);
  this.e8p = 0;
	let g6k = 14;
	if (this.s1t.h9g())
	{
		this.u9e = -(g6k + 1);
		this.n6r = -(g6k - 1);
		this.x0a = (g6k - 1);
		this.e9m = (g6k + 1);
	}
	else
	{
		this.u9e = (g6k + 1);
		this.n6r = (g6k - 1);
		this.x0a = -(g6k - 1);
		this.e9m = -(g6k + 1);
	}
}

h5y(q4c)
{
 	this.f6t = q4c;
	this.n7n = this.s1t.s0u(this.f6t);
	this.d3y = 0;
	if (
		(this.s1t.h9g() && this.n7n == e5q.q6q) ||
		(this.s1t.b0q() && this.n7n == e5q.r4n))
	{
		this.g8f(this.f6t);
	}
	else if (
		(this.s1t.h9g() && this.n7n == e5q.u0i) ||
		(this.s1t.b0q() && this.n7n == e5q.x8m))
	{
		this.b4q(this.f6t);
	}
}

g8f(u7k)
{
 	this.x5d(u7k, this.u9e);
	this.x5d(u7k, this.n6r);
}

x5d(q4c, d1j)
{
	let r9j = r4z[z3w[q4c] + d1j];
	if (r9j != c1e)
  {
    if (this.s1t.c9m(r9j))
  	{
	  	this.f4v(r9j);
  	}
  }
}

b4q(q4c)
{
	this.l4o(q4c, this.u9e);
	this.l4o(q4c, this.n6r);
	this.l4o(q4c, this.e9m);
	this.l4o(q4c, this.x0a);
}

l4o(q4c, d1j)
{
	let p3a = d1j;
	do
	{
		let r9j = r4z[z3w[q4c] + p3a];
		if (r9j == c1e)
    {
      break;
    }
    if (!this.s1t.c9m(r9j))
		{
			break;
		}
		this.f4v(r9j);
		p3a += d1j;
	} while (true);
}

f0c(q4c)
{
	this.f6t = q4c;
	this.n7n = this.s1t.s0u(this.f6t);
	this.d3y = 0;
	let t5v = this.s1t.s0u(this.f6t);
	if ((this.s1t.h9g() && this.n7n == e5q.q6q) ||
		(this.s1t.b0q() && this.n7n == e5q.r4n))
	{
		this.s1t.z1e(this.f6t, e5q.q6v);
		this.s2p(this.f6t);
	}
	else if (
		(this.s1t.h9g() && this.n7n == e5q.u0i) ||
		(this.s1t.b0q() && this.n7n == e5q.x8m))
	{
		this.s1t.z1e(this.f6t, e5q.q6v);
		this.g7n(this.f6t);
	}
	this.s1t.z1e(this.f6t, t5v);
}

s2p(q4c)
{
	let a5b = true;
	if (this.f5y(q4c, this.u9e))
	{
		a5b = false;
	}
	if (this.f5y(q4c, this.n6r))
	{
		a5b = false;
	}
	if (this.f5y(q4c, this.e9m))
	{
		a5b = false;
	}
	if (this.f5y(q4c, this.x0a))
	{
		a5b = false;
	}
	if (a5b)
	{
		this.l8c(q4c);
	}
}

f5y(q4c, d1j)
{
	let c9t = r4z[z3w[q4c] + d1j];
	if (c9t == c1e)
	{
		return false;
	}
	let r9j = r4z[z3w[q4c] + 2 * d1j];
	if (r9j == c1e)
	{
		return false;
	}
	if (!this.s1t.c9m(r9j))
	{
		return false;
	}
	if (this.i8a[c9t])
	{
		return false;
	}
	if (this.n7n == e5q.q6q)
	{
		if (!this.s1t.i2x(c9t))
		{
			return false;
		}
	}
	else
	{
		if (!this.s1t.i1g(c9t))
		{
			return false;
		}
	}
	this.q1h[this.d3y] = c9t;
	this.d3j[this.d3y] = this.s1t.s0u(c9t);
	this.z1o[this.d3y] = r9j;
	this.d3y++;
	let t5v = this.s1t.s0u(c9t);
	this.i8a[c9t] = true;
	this.s2p(r9j);
	this.i8a[c9t] = false;
	this.s1t.z1e(c9t, t5v);
	this.d3y--;
	return true;
}

g7n(q4c)
{
	let a5b = true;
	if (this.t8y(q4c, this.u9e))
	{
		a5b = false;
	}
	if (this.t8y(q4c, this.n6r))
	{
		a5b = false;
	}
	if (this.t8y(q4c, this.e9m))
	{
		a5b = false;
	}
	if (this.t8y(q4c, this.x0a))
	{
		a5b = false;
	}
	if (a5b)
	{
		this.l8c(q4c);
	}
}

t8y(s3e, d1j)
{
	let c9t = c1e;
	let p3a = d1j;
	do
	{
		c9t = r4z[z3w[s3e] + p3a];
		if (c9t == c1e)
		{
			return false;
		}
		if (this.i8a[c9t])
		{
			return false;
		}
		if (this.n7n == e5q.u0i)
		{
			if (this.s1t.i2x(c9t))
			{
				break;
			}
		}
		else
		{
			if (this.s1t.i1g(c9t))
			{
				break;
			}
		}
		if (!this.s1t.c9m(c9t))
		{
			return false;
		}
		p3a += d1j;
	} while (true);
	let m8s = false;
	do
	{
		p3a += d1j;
		let r9j = r4z[z3w[s3e] + p3a];
		if (r9j == c1e)
    {
      return m8s;
    }
    if (!this.s1t.c9m(r9j))
		{
			return m8s;
		}
		this.q1h[this.d3y] = c9t;
		this.d3j[this.d3y] = this.s1t.s0u(c9t);
		this.z1o[this.d3y] = r9j;
		this.d3y++;
		let s9w = this.s1t.s0u(c9t);
		this.i8a[c9t] = true;
		this.g7n(r9j);
		this.i8a[c9t] = false;
		this.s1t.z1e(c9t, s9w);
		this.d3y--;
		m8s = true;
	} while (true);
}

l8c(r9j)
{
	if (!this.d3y)
	{
		return;
	}
	if (this.d3y >= this.e8p)
	{
		if (this.d3y > this.e8p)
		{
      this.y5s.length = 0;
		}
		this.f4v(r9j);
	}
}

f4v(r9j)
{
	let u9l = new w3p();
	u9l.q4c = this.f6t;
	u9l.r9j = r9j;
	u9l.g0w = this.n7n;
	u9l.h1v = u9l.g0w;
	if (u9l.g0w == e5q.q6q)
	{
		if (m6u(u9l.r9j))
		{
			u9l.h1v = e5q.u0i;
		}
	}
	else if (u9l.g0w == e5q.r4n)
	{
		if (w2b(u9l.r9j))
		{
			u9l.h1v = e5q.x8m;
		}
	}
	for (let i = 0; i < this.d3y; i++)
	{
		u9l.k8q.push(this.q1h[i]);
		u9l.l7z.push(this.d3j[i]);
	}
	for (let i = 0; i < this.d3y - 1; i++)
	{
		u9l.q9x.push(this.z1o[i]);
	}

	if (this.d9d)
	{
		if (this.d3y >= 2)
		{
			let p3c = this.y5s.find(function(j7e)
			{
				if (j7e.t5q(u9l))
				{
					return true;
				}
			});
			if (p3c != undefined)
			{
				return;
			}
		}
	}
	this.e8p = u9l.l7a();
	this.y5s.push(u9l);
}

y8a(t0j, y3r)
{
	this.e3o(t0j);
	this.d9d = y3r;
	this.y5s.length = 0;

	for (const u7k of n8j)
	{
		this.f0c(u7k);
	}

	if (this.y5s.length === 0)
	{
		for (const u7k of n8j)
		{
			this.h5y(u7k);
		}
	}
	return this.y5s;
}

z5l(t0j)
{
	this.e3o(t0j);
	this.d9d = true;
	this.y5s.length = 0;

	for (const u7k of n8j)
	{
		this.f0c(u7k);
	}
	return this.y5s.length > 0;
}

f5s(t0j, c9t)
{
	this.e3o(t0j);
	this.d9d = true;
	this.y5s.length = 0;

	for (const u7k of n8j)
	{
		this.f0c(u7k);
	}
	for (const d1l of this.y5s)
	{
		if (d1l.g9l(c9t))
		{
			return true;
		}
	}
	return false;
}

q9x(t0j, u9l)
{
	this.e3o(t0j);
	this.d9d = true;
	this.y5s.length = 0;

	this.f0c(u9l.q4c);
	let w7e = [];
  let k8q = u9l.k8q;
	for (const c9t of k8q)
	{
		w7e.push(c9t);
	}
	for (const d1l of this.y5s)
	{
		if (d1l.r9j != u9l.r9j)
		{
			continue;
		}
		if (!d1l.o0q(w7e))
		{
			continue;
		}
		return d1l.q9x.slice();
	}
	return [];
}

e1j(t0j, u9l)
{
	this.e3o(t0j);
	this.d9d = true;
	this.y5s.length = 0;

	this.f0c(u9l.q4c);
	let n5e = 0;
	for (const d1l of this.y5s)
	{
		if (d1l.r9j == u9l.r9j)
		{
			n5e++;
		}
	}
	return n5e > 1;
}

} 


function t1e(t0j)
{
	let a0h = new x5i();
	return a0h.y8a(t0j, true);
}

function y7b(t0j, q4c)
{
	let a0h = new x5i();
	let b8f = a0h.y8a(t0j, true);
	let i8p = [];
	for (const d1l of b8f)
	{
		if (d1l.q4c == q4c)
		{
			i8p.push(d1l);
		}
	}
	return i8p;
}

function y6n(t0j, r9j)
{
	let a0h = new x5i();
	let b8f = a0h.y8a(t0j, true);
	let y2e = [];
	for (const d1l of b8f)
	{
		if (d1l.r9j == r9j)
		{
			y2e.push(d1l);
		}
	}
	return y2e;
}

function b6a(t0j, q4c, r9j)
{
	let a0h = new x5i();
	let b8f = a0h.y8a(t0j, true);
	let s5o = [];
	for (const d1l of b8f)
	{
		if (d1l.q4c == q4c && d1l.r9j == r9j)
		{
			s5o.push(d1l);
		}
	}
	return s5o;
}

function f8d(t0j, q4c, r9j, k8q)
{
	let a0h = new x5i();
	let b8f = a0h.y8a(t0j, true);
	let y8a = [];
	for (const d1l of b8f)
	{
		if (d1l.q4c != q4c)
		{
			continue;
		}
		if (d1l.r9j != r9j)
		{
			continue;
		}
		if (!d1l.g9l(k8q))
		{
			continue;
		}
		y8a.push(d1l);
	}
	return y8a;
}

function a1y(t0j, q4c, r9j, q9x)
{
	let a0h = new x5i();
	let b8f = a0h.y8a(t0j, false);
	let y8a = [];
	for (const d1l of b8f)
	{
		if (d1l.q4c != q4c)
		{
			continue;
		}
		if (d1l.r9j != r9j)
		{
			continue;
		}
		if (!d1l.h7d(q9x))
		{
			continue;
		}
		
		let a6b = false;
		for (const m of y8a)
		{
			if (m.t5q(u9l))
			{
				a6b = true;
				break;
			}
		}
		if (!a6b)
		{
			y8a.push(d1l);
		}
	}
	return y8a;
}

function j3k(t0j, u9l)
{
	let a0h = new x5i();
	return a0h.q9x(t0j, u9l);
}

function z5l(t0j)
{
	let a0h = new x5i();
	return a0h.z5l(t0j);
}

function f5s(t0j, c9t)
{
	let a0h = new x5i();
	return a0h.f5s(t0j, c9t);
}

function e1j(t0j, u9l)
{
	let a0h = new x5i();
	return a0h.e1j(t0j, u9l);
}

function y7d(t0j)
{
	let a0h = new x5i();
	if (a0h.z5l(t0j))
	{
		return false;
	}
	let v6b = t0j.w8u();
	v6b.q7d();
	return !a0h.z5l(v6b);
}

function l9v()
{
}
/* voor dammen niet nodig */
const o9q =
{
  r9x : 0,  
	r9e : 1,
	o5l : 2,
};

function p2r(t0j, u9l)
{
 	let c1i = '';
	if (u9l.q6v())
	{
		c1i += "--";
	}
  else
  {
    c1i = e5k(u9l.q4c);
    if (u9l.k8q.length > 0)
    {
      c1i += 'x';
    }
    else
    {
      c1i += '-';
    }
    if (u9l.k8q.length > 2)
    {
      if (e1j(t0j, u9l))
      {
        let q9x = j3k(t0j, u9l);
        for (const u7k of q9x)
        {
          c1i += e5k(u7k);
          c1i += 'x';
        }
        c1i += e5k(u9l.r9j);
      }
      else
      {
        c1i += e5k(u9l.r9j);
      }
    }
    else
    {
      c1i += e5k(u9l.r9j);
    }
  }
	return c1i;
}


class p9o
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.fontSize = 0;
}

}

function t9b(j0m,
  g8m,
  w7k,
  coordinate,
  coordinatesType,
  n7y,
  h8h,
  marginSize) 
{
 	let s2n = (coordinatesType == l8m.a3y ||
		coordinatesType == l8m.e5u ||
		coordinatesType == l8m.o8m);
	let y5u = (coordinatesType == l8m.a3y ||
		coordinatesType == l8m.e5u ||
		coordinatesType == l8m.i2w);
	let q4x =	(coordinatesType == l8m.a3y ||
		coordinatesType == l8m.o8m ||
		coordinatesType == l8m.l5d);
	let x0c = (coordinatesType == l8m.a3y ||
		coordinatesType == l8m.i2w ||
		coordinatesType == l8m.l5d);

	j0m.font = (coordinate.fontSize).toString() + "px serif";
	j0m.fillStyle = n7y;
  let p6n = coordinate.height;

	if (y5u)
	{
  	let q0d = 0;
		if (h8h)
		{
			q0d = k0x - c4f / 2;
		}
		else
		{
			q0d = c4f / 2 + 1;
		}
    for (let r6w = 0; r6w < c4f; r6w++)
		{
 			if (r6w % 2)
			{
				continue;
			}
			let k5l = j0m.measureText(q0d).width;
			let top = g8m.i1m + 1 + (r6w + 1) * w7k.w5c;
			top += (w7k.w5c - p6n) / 2 + p6n;
			let b3k = g8m.q7j - marginSize + (marginSize - k5l) / 2;
      j0m.fillText(q0d, b3k, top);
			if (h8h)
			{
				q0d -= c4f;
			}
			else
			{
				q0d += c4f;
			}
		}
	}

	if (q4x)
	{
		let q0d = 0;
		if (h8h)
		{
			q0d = k0x - c4f / 2 + 1;
		}
		else
		{
			q0d = c4f / 2;
		}
    for (let r6w = 0; r6w < c4f; r6w++)
		{
 			if (r6w % 2)
			{
				continue;
			}
      let k5l = j0m.measureText(q0d).width;
			let top = g8m.i1m + 1 + r6w * w7k.w5c;
			top += (w7k.w5c - p6n) / 2 + p6n;
			let b3k = g8m.q7j + g8m.x7l() +
        (marginSize - k5l) / 2;
      j0m.fillText(q0d, b3k, top);
			if (h8h)
			{
				q0d -= c4f;
			}
			else
			{
				q0d += c4f;
			}
		}
	}

	if (s2n)
	{
		let q0d = 0;
		if (h8h)
		{
			q0d = k0x;
		}
		else
		{
			q0d = 1;
		}
    for (let d6n = 0; d6n < c4f; d6n++)
		{
 			if (d6n % 2)
			{
				continue;
			}
			let left = g8m.q7j + 1 + (d6n + 1) * w7k.w5c;
      let k5l = j0m.measureText(q0d).width;
			let b3k = left + (w7k.w5c - k5l) / 2;
			let d9i = g8m.i1m - (marginSize - p6n) / 2 - 2;
      
      j0m.fillText(q0d, b3k, d9i);
			if (h8h)
			{
				q0d--;
			}
			else
			{
				q0d++;
			}
		}
	}

	if (x0c)
	{
		let q0d = 0;
		if (h8h)
		{
			q0d = c4f / 2;
		}
		else
		{
			q0d = k0x - c4f / 2 + 1;
		}
    for (let d6n = 0; d6n < c4f; d6n++)
		{
			if (d6n % 2)
			{
				continue;
			}
			let left = g8m.q7j + 1 + d6n * w7k.w5c;
      let k5l = j0m.measureText(q0d).width;
			let b3k = left + (w7k.w5c - k5l) / 2;
			let d9i = g8m.i1m + g8m.c6g() +
        (marginSize - p6n) / 2 + p6n - 2;
      
      j0m.fillText(q0d, b3k, d9i);
			if (h8h)
			{
				q0d--;
			}
			else
			{
				q0d++;
			}
		}
	}
}

function g2t(j0m, fontSize)
{
	let o5b = new p9o();
	o5b.fontSize = fontSize;
	o5b.height = fontSize;
	o5b.width = fontSize;
	return o5b;
}
function l2i(j0m, rect, t5v)
{
 	j0m.lineWidth = "1";
  if (t5v == e5q.q6q || t5v == e5q.u0i)
  {
    j0m.fillStyle = "white";
    j0m.strokeStyle = "black";
  }
  else
  {
    j0m.fillStyle = "black";
    j0m.strokeStyle = "white";
  }
  let j4i = 80;
  let b3g = rect.x7l() + 1;
 	let f3t = ((0.19 * j4i) / 100) * b3g;
  let l0o = rect.q7j + b3g / 2;
  let s7l = (b3g / 4);
  let f4x = (b3g / 2.4);
	if (t5v == e5q.q6q || t5v == e5q.r4n)
	{
    let g9c = rect.i1m + b3g / 1.8;
    j0m.beginPath();
    j0m.ellipse(l0o, g9c, s7l, f4x, Math.PI / 2, 0, 2 * Math.PI);
    j0m.fill();
    j0m.stroke();
		g9c -= f3t;
    j0m.beginPath();
    j0m.ellipse(l0o, g9c, s7l, f4x, Math.PI / 2, 0, 2 * Math.PI);
    j0m.fill();
    j0m.stroke();
	}
	else if (t5v == e5q.u0i || t5v == e5q.x8m)
	{
    let g9c = rect.i1m + b3g / 1.55;
    j0m.beginPath();
    j0m.ellipse(l0o, g9c, s7l, f4x, Math.PI / 2, 0, 2 * Math.PI);
    j0m.fill();
    j0m.stroke();
		g9c -= f3t;
    j0m.beginPath();
    j0m.ellipse(l0o, g9c, s7l, f4x, Math.PI / 2, 0, 2 * Math.PI);
    j0m.fill();
    j0m.stroke();
		g9c -= f3t;
    j0m.beginPath();
    j0m.ellipse(l0o, g9c, s7l, f4x, Math.PI / 2, 0, 2 * Math.PI);
    j0m.fill();
    j0m.stroke();
	}
}

function s7r(j0m, rect, t5v)
{
 	j0m.lineWidth = "1";
  if (t5v == e5q.q6q || t5v == e5q.u0i)
  {
    j0m.fillStyle = "white";
    j0m.strokeStyle = "black";
  }
  else
  {
    j0m.fillStyle = "black";
    j0m.strokeStyle = "white";
  }

  let j4i = 80;
  let b3g = rect.x7l() + 1;
 	let f3t = ((0.19 * j4i) / 100) * b3g;
  let l0o = rect.q7j + b3g / 2;
  let s7l = (b3g / 4);
  let f4x = (b3g / 2.4);


  let g9c = rect.i1m + b3g / 2; 
  let w7u = b3g * 0.4;

  j0m.beginPath();
  j0m.arc(l0o, g9c, w7u, 0, Math.PI * 2);
  j0m.closePath();
  j0m.fill();
  j0m.stroke();

	if (k6r(t5v))
	{
		if (t5v == e5q.u0i)
		{
      j0m.fillStyle = "black";
      j0m.strokeStyle = "black";
		}
		else
		{
      j0m.fillStyle = "white";
      j0m.strokeStyle = "white";
		}
    w7u = b3g * 0.1;
    j0m.beginPath();
    j0m.arc(l0o, g9c, w7u, 0, Math.PI * 2);
    j0m.closePath();
    j0m.fill();
    j0m.stroke();
	}
}

function j1c(j0m, rect, t5v)
{
  if (t5v == e5q.q6v) return;
  if (j2m.j9d == 0)
  {
    l2i(j0m, rect, t5v);
  }
  else
  {
    s7r(j0m, rect, t5v);
  }
}


function q0z(j9d)
{
}
function q2u(j7e)
{
	let t0j = new o8k();
	let u2n = j7e.length;
	if (u2n < 6) 
	{
		return t0j;
	}
	if (j7e[0] != 'W' && j7e[0] != 'B')
	{
		return t0j;
	}
	if (j7e[0] == 'W')
	{
		t0j.h7p();
	}
	else if (j7e[0] == 'B')
	{
		t0j.y5a();
	}
	let h1b = j7e.indexOf(":W");
	let d9a = j7e.indexOf(":B");
	let o3k = j7e.indexOf(".");
  if (o3k == -1)
	{
		o3k = j7e.length;
	}
	if (h1b == -1 || d9a == -1 || o3k <= d9a)
	{
		return t0j;
	}
	let w = j7e.substr(h1b + 2, d9a - (h1b + 2));
	let b = j7e.substr(d9a + 2, o3k - (d9a + 2));
	let i0y = w.split(",");
	let m4u = b.split(",");

	for (const s of i0y)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let d6i = s.substr(1, 2);
					let u7k = r7g(d6i, 0);
					if (u7k)
					{
						t0j.z1e(u7k-1, e5q.u0i);
					}
				}
			}
			else
			{
				let u7k = r7g(s, 0);
				if (u7k)
				{
					t0j.z1e(u7k-1, e5q.q6q);
				}
			}
		}
	}
	for (const s of m4u)
	{
		if (s.length)
		{
			if (s[0] == 'K')
			{
				if (s.length > 1)
				{
					let d6i = s.substr(1, 2);
					let u7k = r7g(d6i, 0);
					if (u7k)
					{
						t0j.z1e(u7k-1, e5q.x8m);
					}
				}
			}
			else
			{
				let u7k = r7g(s, 0);
				if (u7k)
				{
					t0j.z1e(u7k-1, e5q.r4n);
				}
			}
		}
	}
	return t0j;
}

function f7z(t0j, i6g)
{
  let y3x = i6g.length;

 	
	if (i6g[0] == 'Z' || (y3x == 2 && i6g == "--") || (y3x == 4 && i6g == "null"))
	{
		return new w3p();
	}

	let z5w = [];
	let i = 0;
	let u2n = i6g.length;
	while (i < u2n)
	{
		let j7v = i;
		let p5k = 0;
		let w3b = i6g[i];
		while (i < u2n && w3b != '-' && w3b != 'x' && w3b != ':')
		{
			i++;
			p5k++;
			if (i < u2n)
			{
				w3b = i6g[i];
			}
		}
		let m1p = i6g.substr(j7v, p5k);
    z5w.push(v9t(m1p));
		i++; 
	}
	let w0o = z5w.length;
	if (w0o < 2)
	{
		return false;
	}
	else if (w0o == 2)
	{
		let q4c = z5w[0];
		let r9j = z5w[1];
		let y8a = b6a(t0j, q4c, r9j);
		if (y8a.length == 1)
		{
			return y8a[0];
		}
		return false;
	}
	else
	{
		let q4c = z5w[0];
		let r9j = z5w[1];
		let k8q = [];
		for (let i = 2; i < w0o; i++)
		{
			k8q.push(z5w[i]);
		}
		let y8a = f8d(t0j, q4c, r9j, k8q);
		if (y8a.length == 1)
		{
			return y8a[0];
		}
		q4c = z5w[0];
		r9j = z5w[z5w.length - 1];
		let q9x = [];
		for (let i = 1; i < w0o - 1; i++)
		{
			q9x.push(z5w[i]);
		}
		y8a = a1y(t0j, q4c, r9j, q9x);
		if (y8a.length == 1)
		{
			return y8a[0];
		}
		return false;
	}
}

function f1c()
{
  let z1t = ["images/board/BoardBackground.png",
    "images/board/DarkSquare.png",
    "images/board/LightSquare.png",
    "images/board/Margin.png"];
  return z1t;
}
class b5n
{

constructor()
{
	this.u6v = '';
}

w8u()
{
	let x3x = new b5n();
	x3x.u6v = this.u6v;
	return x3x;
}

q6v()
{
	return this.u6v.length == 0;
}

i9f()
{
	return this.u6v;
}

}


const y2m =
{
	r9x : 0,
	e7i : 1,
	u2k: 2,
	w9i: 3,
	x4s: 4,
	b5z: 5,
	t3s: 6,
	h7n: 7,
	b7y: 8,
	x2e: 9,
	e3c: 10,
	q7n: 11,
	x0d: 12,
	e6b: 13,
	f3z: 14,
	q3y: 15,
	j3b: 16,
	i3m: 17,
	k0b: 18,
	f1j: 19,
	t9a: 20,
	x7q: 21,
	h5x: 22,
	l5o: 23,
	d9n: 24,
	c4c: 25,
	s3a: 26,
	j0s: 27,
	y7m: 28,
	i5c: 29,
	f0k: 30,
	s7w: 31,
	c8n: 32,
	w9z: 33,
	v5x: 34,
	x3t: 35,
	r1u: 36,
	x7v: 37,
	f8o: 38,
	s9q: 39,
	j9z: 40,
	b6d: 41,
	x2z: 42,
	l7v: 43,
	l9h: 44,
	o8d: 45,
	e5s: 46,
	y7u: 47,
	g6o: 48,
	g4o: 49,
	r8o: 50,
	m1e: 51,
	c9b: 52,
	q6z: 53,
	x9b: 54,
	t9p: 55,
	o2c: 56,
	u5j: 57,
	u8v: 58,
	o7c: 59,
	q8t: 60,
	o2d: 61,
	k0q: 62,
	b2c: 63,
	k7u: 64,
	q9s: 65,
	h7o: 66,
	a5m: 67,
	d1a: 68,
	a2a: 69,
	v7p: 70,
	z4u: 71,
	q7h: 72,
	n9q: 73,
	g3r: 74,
	e1f: 75,
	j6t: 76,
	p0r: 77,
	v8w: 78,
	a1e: 79,
	h3d: 80,
	a1v: 81,
	z9z: 82,
	d0n: 83,
	j7z: 84,
	v2d: 85,
	z5m: 86,
	l4h: 87,
	p1d: 88,
	f5e: 89,
	f3x: 90,
	c5f: 91,
	h6r: 92,
	s0k: 93,
	x1i: 94,
	g3j: 95,
	k1w: 96,
	p3r: 97,
	t2u: 98,
	g8j: 99,
	c2h: 100,
	s0y: 101,
	n7a: 102,
	p6h: 103,
	a9r: 104,
	i7v: 105,
	o4l: 106,
	v5g: 107,
	z1m: 108,
	p7l: 109,
	b8p: 110,
	z4c: 111,
	v8d: 112,
	e7m: 113,
	f1k: 114,
	l4f: 115,
	v0j: 116,
	o7o: 117,
	j5x: 118,
	o6h: 119,
	h0b: 120,
	c6j: 121,
	g0g: 122,
	k3x: 123,
	j0x: 124,
	j5b: 125,
	w5k: 126,
	q8v: 127,
	f7o: 128,
	f3e: 129,
	w5y: 130,
	e1l: 131,
	u5z: 132,
	t4w: 133,
	b5u: 134,
	x0s: 135,
	l6p: 136,
	p0w: 137,
	a4g: 138,
	q0r: 139,
	e2m: 140,
	m9k: 141,
	l1y: 142,
	x8e: 143,
	c4n: 144,
	c1n: 145,
	y7j: 146,
	e9d: 147,
	b0s: 148,
	z3s: 149,
	z8c: 150,
	u9t: 151,
	y1u: 152,
	i8b: 153,
	a6d: 154,
	o3j: 155,
	w5z: 156,
	f8a: 157,
	t7l: 158,
	d8l: 159,
	m1l: 160,
	l1i: 161,
	r4r: 162,
	z7q: 163,
	g6q: 164,
	t3g: 165,
	j8j: 166,
	d8q: 167,
	r3k: 168,
	g7h: 169,
	e6o: 170,
	m2b: 171,
	n3h: 172,
	u2y: 173,
	d6a: 174,
	t6x: 175,
	e1k: 176,
	j4k: 177,
	a3e: 178,
	r7j: 179,
	j3o: 180,
	c3a: 181,
	t7o: 182,
	n0o: 183,
	n2g: 184,
	y1y: 185,
	j4t: 186,
	x9m: 187,
	w7p: 188,
	r5k: 189,
	d7r: 190,
	r4l: 191,
	p6u: 192,
	p3f: 193,
	l5t: 194,
	h8d: 195,
	v5z: 196,
	r3v: 197,
	c2f: 198,
	z3p: 199,
	n4w: 200,
	j4q: 201,
	m6l: 202,
	q1o: 203,
	h6d: 204,
	n8g: 205,
	v7r: 206,
	o1a: 207,
	i4c: 208,
	h0p: 209,
	c3m: 210,
	v1x: 211,
	i8u: 212,
	u4x: 213,
	a8d: 214,
	c1b: 215,
	y9a: 216,
	k7a: 217,
	k1p: 218,
	k1e: 219,
	d7c: 220,
	p4n: 221,
	p2k: 222,
	z3n: 223,
	c2e: 224,
	m2w: 225,
	d1g: 226,
	m5p: 227,
	s7n: 228,
	t4r: 229,
	e3m: 230,
	g5e: 231,
	c0u: 232,
	j6l: 233,
	t0h: 234,
	r6y: 235,
	q8y: 236,
	t8r: 237,
	z5u: 238,
	o6a: 239,
	f0e: 240,
	w7i: 241,
	v8n: 242,
	p0j: 243,
	q4y: 244,
	g1q: 245,
	v1u: 246,
	e4x: 247,
	o8c: 248,
	i4u: 249,
	o1r: 250,
	w1j: 251,
	b5c: 252,
	e3i: 253,
	v2x: 254,
	g5c: 255,
	d6e: 256,
	c4v: 257,
	d5o: 258,
	b9d: 259
};


const q7u = 0;
const f9y = 500;

function m7d(c1i)
{
	if (c1i.length != 3)
	{
		return 0;
	}
	let q4j = c1i[0];
	let g2o = c1i[1];
	let k7z = c1i[2];

	let e6a = 0;
	if (q4j == 'A' || q4j == 'a') e6a = 0;
	else if (q4j == 'B' || q4j == 'b') e6a = 1;
	else if (q4j == 'C' || q4j == 'c') e6a = 2;
	else if (q4j == 'D' || q4j == 'd') e6a = 3;
	else if (q4j == 'E' || q4j == 'e') e6a = 4;
	else return 0;
	if (isNaN(g2o) || isNaN(k7z))
	{
		return 0;
	}
	return e6a * 100 + r7g(c1i.substr(1, 2), 0) + 1;
}

function u1y(t0x)
{
	if (t0x)
	{
		let div = Math.trunc((t0x - 1) / 100);
		let y8l = (t0x - 1) % 100;
		let c5y = 'A';
		if (div == 0) c5y = 'A';
		else if (div == 1) c5y = 'B';
		else if (div == 2) c5y = 'C';
		else if (div == 3) c5y = 'D';
		else if (div == 4) c5y = 'E';
		return c5y + y8l.toString().padStart(2, '0');
	}
	else
	{
		return "";
	}
}
class j6w
{

constructor()
{
	this.t8l = 0;
	this.e8v = 0;
	this.u2w = 0;
}

w8u()
{
	let k9v = new j6w();
	k9v.f7j = this.t8l;
	k9v.s6s = this.e8v;
	k9v.r0s = this.u2w;
	return k9v;
}

q6v()
{
	return this.u2w == 0 && this.e8v == 0 && this.t8l == 0;
}

a0m()
{
	let r0s = this.u2w.toString().padStart(4, '0');
	let s6s = this.e8v.toString().padStart(2, '0');
	let f7j = this.t8l.toString().padStart(2, '0');
	return r0s + s6s + f7j;
}

h7c(m5c, c1i)
{
	let u2n = c1i.length;
	if (!u2n)
	{
		this.u2w = 0;
		this.e8v = 0;
		this.t8l = 0;
	}
	else if (m5c == "dd-mm-yyyy" || m5c == "dd.mm.yyyy")
	{
  	if (u2n == 4)
		{
      this.u2w = r7g(c1i.substr(1, 4), 0);
		}
		else if (u2n == 10)
		{
			this.t8l = r7g(c1i.substr(0, 2), 0);
			this.e8v = r7g(c1i.substr(3, 2), 0);
			this.u2w = r7g(c1i.substr(6, 4), 0);
		}
	}
	else if (m5c == "yyyy-mm-dd" || m5c == "yyyy.mm.dd")
	{
  	if (u2n == 4)
		{
      this.u2w = r7g(c1i.substr(1, 4), 0);
		}
		else if (u2n == 10)
		{
			this.t8l = r7g(c1i.substr(8, 2), 0);
			this.e8v = r7g(c1i.substr(5, 2), 0);
			this.u2w = r7g(c1i.substr(0, 4), 0);
		}
	}
	else if (m5c == "dd-mm-yy" || m5c == "dd.mm.yy")
	{
		if (u2n == 8)
		{
			this.t8l = r7g(c1i.substr(0, 2), 0);
			this.e8v = r7g(c1i.substr(3, 2), 0);
			this.u2w = r7g(c1i.substr(6, 2), 0) + 2000;
		}
	}
}

toString(m5c)
{
	let c1i = '';
	if (this.q6v())
	{
	}
	else if (m5c == "list")
	{
		let r0s = this.u2w.toString().padStart(4, '0');
		let s6s = this.e8v.toString().padStart(2, '0');
		let f7j = this.t8l.toString().padStart(2, '0');
		if (this.t8l)
		{
			c1i = f7j + "-" + s6s + "-" + r0s;
		}
		else if (this.e8v)
		{
			c1i = s6s + "-" + r0s;
		}
		else if (this.u2w)
		{
			c1i = r0s;
		}
	}
	else if (m5c == "dd-mm-yyyy")
	{
		let r0s = this.u2w.toString().padStart(4, '0');
		let s6s = this.e8v.toString().padStart(2, '0');
		let f7j = this.t8l.toString().padStart(2, '0');
		c1i = f7j + "-" + s6s + "-" + r0s;
	}
	else if (m5c == "dd.mm.yyyy")
	{
		let r0s = this.u2w.toString().padStart(4, '0');
		let s6s = this.e8v.toString().padStart(2, '0');
		let f7j = this.t8l.toString().padStart(2, '0');
		c1i = f7j + "." + s6s + "." + r0s;
	}
	else if (m5c == "yyyy-mm-dd")
	{
		let r0s = this.u2w.toString().padStart(4, '0');
		let s6s = this.e8v.toString().padStart(2, '0');
		let f7j = this.t8l.toString().padStart(2, '0');
		c1i = r0s + "-" + s6s + "-" + f7j;
	}
	else if (m5c == "yyyy.mm.dd")
	{
		let r0s = this.u2w.toString().padStart(4, '0');
		let s6s = this.e8v.toString().padStart(2, '0');
		let f7j = this.t8l.toString().padStart(2, '0');
		c1i = r0s + "." + s6s + "." + f7j;
	}
	else if (m5c == "yyyymmdd")
	{
		let r0s = this.u2w.toString().padStart(4, '0');
		let s6s = this.e8v.toString().padStart(2, '0');
		let f7j = this.t8l.toString().padStart(2, '0');
		c1i = r0s + s6s + f7j;
	}
	else if (m5c == "yyyy")
	{
		let r0s = this.u2w.toString().padStart(4, '0');
		c1i = r0s;
	}
	return c1i;
}

}

class i8o
{

constructor()
{
	this.d1e = new w6u();
	this.v4m = new j3a();
	this.q9a = 0;
	this.s4t = 0;
	this.i9k = "";
  this.b4a = y2m.r9x;
}

w8u()
{
	let d7o = new i8o();
	d7o.d1e = this.d1e.w8u();
	d7o.v4m = this.v4m.w8u();
	d7o.q9a = this.q9a;
	d7o.s4t = this.s4t;
	d7o.i9k = this.i9k;
  d7o.b4a = this.b4a;
	return d7o;
}

q6v()
{
	return this.d1e.q6v() &&
		this.v4m.q6v() &&
		this.q9a == 0 &&
		this.s4t == 0 &&
		this.i9k == "" &&
 		this.b4a == y2m.r9x;
}

}


class e5o
{

constructor()
{
	this.z0h = new i8o();
	this.d4a = new i8o();
	this.m5m = new l7y();
	this.g1t = new b5n();
	this.c2d = new e1x();
	this.i9k = new f0w();
	this.a0m = new j6w();
	this.m1u = o8u.r9x;
	this.t0x = 0;
	this.w6a = 0;
	this.h8a = 0;
	this.q8e = new u2s();
  this.id = new v1a();
}

w8u()
{
	let s7x = new e5o();
	s7x.z0h = this.z0h.w8u();
	s7x.d4a = this.d4a.w8u();
	s7x.m5m = this.m5m.w8u();
	s7x.g1t = this.g1t.w8u();
	s7x.c2d = this.c2d.w8u();
	s7x.i9k = this.i9k.w8u();
	s7x.a0m = this.a0m.w8u();
	s7x.m1u = this.m1u;
	s7x.t0x = this.t0x;
	s7x.w6a = this.w6a;
	s7x.h8a = this.h8a;
	s7x.q8e = this.q8e.w8u();
  s7x.id = this.id.w8u();
	return s7x;
}

q6v()
{
	return this.z0h.q6v() &&
		this.d4a.q6v() &&
		this.m5m.q6v() &&
		this.g1t.q6v() &&
		this.c2d.q6v() &&
		this.i9k.q6v() &&
		this.a0m.q6v() &&
		this.m1u == o8u.r9x &&
		this.t0x == 0 &&
		this.w6a == 0 &&
		this.h8a == 0 &&
		this.q8e.q6v();
}

e5p()
{
	let c1i = '';
	if (this.h8a)
	{
		c1i = this.w6a.toString() + "." + this.h8a.toString();
	}
	else if (this.w6a)
	{
		c1i = this.w6a.toString();
	}
	return c1i;
}

}


class v1a
{

constructor()
{
	this.w2r = '';
}

w8u()
{
	let p5j = new v1a();
	p5j.w2r = this.w2r;
	return p5j;
}

toString()
{
  return this.w2r;
}

}


class f0w
{

constructor()
{
	this.i9k = '';
}

w8u()
{
	let v0d = new f0w();
	v0d.i9k = this.i9k;
	return v0d;
}

q6v()
{
	return this.i9k.length == 0;
}

i9f()
{
	return this.i9k;
}

}


class w6u
{

constructor()
{
	this.r6z = '';
	this.e8e = '';
}

w8u()
{
	let e5e = new w6u();
	e5e.r6z = this.r6z;
	e5e.e8e = this.e8e;
	return e5e;
}

q6v()
{
	return this.e8e.length == 0 &&
		this.r6z.length == 0;
}

u6v()
{
	if (!this.e8e.length == 0 && !this.r6z.length == 0)
	{
		return this.e8e + "," + this.r6z;
	}
	else if (this.e8e.length == 0 && this.r6z.length == 0)
	{
		return "";
	}
	else if (this.r6z.length == 0)
	{
		return this.e8e;
	}
	else
	{
		return this.r6z;
	}
}

s5m()
{
	return this.u6v().replace(/,/g, " ");
}

b1i()
{
	return this.r0d(1).replace(/,/g, " ");
}

r0d(h9j)
{
	if (this.e8e.length == 0)
	{
		if (this.r6z.length == 0 || h9j < 1)
		{
			return "";
		}
		else
		{
			return this.r6z.substring(0, h9j);
		}
	}
	else
	{
		if (this.r6z.length == 0 || h9j < 1)
		{
			return this.e8e;
		}
		else
		{
			return this.e8e + "," + this.r6z.substring(0, h9j);
		}
	}
}

k6w(l4n)
{
	let c1i = l4n.trim();
	let g5y = c1i.lastIndexOf(",");
	if (g5y != -1)
	{
		this.e8e = c1i.substr(0, g5y).trim();
		this.r6z = c1i.substr(g5y+1, c1i.length).trim();
		if (this.r6z.length != 0)
		{
			if (this.r6z.charAt(0).toLowerCase() == this.r6z.charAt(0))
			{
				this.e8e += ",";
				this.e8e += this.r6z;
				this.r6z = "";
			}
		}
	}
	else
	{
		this.e8e = c1i;
		this.r6z = "";
	}
}

i9f()
{
	return this.u6v();
}

}

const o8u =
{
	r9x : 0,
	b6m : 1,
	o0g : 2,
	z4x : 3,
	u2o : 4,
	t1y : 5,
	q9l : 6,
	c6n : 7,
	f4p : 8,
	e7e : 9,
	z8i : 10,
	o0n : 11,
	s3s : 12,
	h5b : 13,
	g3w : 14,
	u2h : 15
};


function k7k(m1u)
{
	switch (m1u)
	{
		case o8u.b6m:
			return "2-0";
		case o8u.z4x:
			return "1-1";
		case o8u.o0g:
			return "0-2";
		default:
			return "";
	}
}
const u4d =
{
	z6z : 0,
	i7t : 1,
	s3v : 2
};

const c9o =
[
	[ u4d.z6z,   "High" ],
	[ u4d.i7t, "Middle" ],
	[ u4d.s3v,    "Low" ]
];

class e1x
{

constructor()
{
	this.i9k = '';
	this.t5h = '';
	this.r7n = new j6w();
	this.z4p = new j6w();
	this.y0s = 0;
	this.d2w = u4d.z6z;
}

w8u()
{
	let f1h = new e1x();
	f1h.i9k = this.i9k;
	f1h.t5h = this.t5h;
	f1h.r7n = this.r7n.w8u();
	f1h.z4p = this.z4p.w8u();
	f1h.y0s = this.y0s;
	f1h.d2w = this.d2w;
	return f1h;
}

q6v()
{
	return this.i9k.length == 0 &&
		this.t5h.length == 0 &&
		this.r7n.q6v() &&
		this.z4p.q6v() &&
		this.y0s == 0 &&
		this.d2w == u4d.z6z;
}

i9f()
{
	let c1i = this.i9k;
	if (this.t5h.length)
	{
		if (c1i.length)
		{
			c1i += " ";
		}
		c1i += this.t5h;
	}
	return c1i;
}

}


const t2b =
{
	c4e : 0,
	m8o : 1,
	l2r : 2,
	e6j : 3,
	w2k : 4,
	x5k : 5,
	f2o : 6,
	d2d : 7,
	d2t : 8,
	y1r : 9,
	l4r : 10,
	b7c : 11,
	j5y : 12,
	i8l : 13,
	o4z : 14,
	s7m : 15
};

class u2s
{

constructor()
{
	this.value = 0;
}

c5s(value)
{
	this.value = value;
}

w8u()
{
	let e9r = new u2s();
	e9r.value = this.value;
	return e9r;
}

q6v()
{
	return this.value == 0;
}

y9c()
{
	return this.value != 0;
}

r9x()
{
	return this.value == 0;
}

p5k()
{
	let q0n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.d0p(i))
		{
			q0n++;
		}
	}
	return q0n;
}

s3l()
{
	this.value = 0;
}

set(g4e, b0e)
{
	if (b0e)
	{
		this.value |= (1 << g4e);
	}
	else
	{
		this.value &= ~(1 << g4e);
	}
}

d0p(g4e)
{
	return (this.value & (1 << g4e)) != 0;
}

t2o()
{
	return this.value;
}

}

function j9o(r0s)
{
	return r0s.toString().padStart(4, '0');
}

class j3a
{

constructor()
{
	this.u6v = '';
	this.s2u = 0;
	this.r0s = 0;
	this.z7p = false;
	this.b4a = y2m.r9x;
}

w8u()
{
	let c2q = new j3a();
	c2q.u6v = this.u6v;
	c2q.s2u = this.s2u;
	c2q.r0s = this.r0s;
	c2q.z7p = this.z7p;
	c2q.b4a = this.b4a;
	return c2q;
}

q6v()
{
	return this.u6v.length == 0 &&
		this.s2u == 0 &&
		this.r0s == 0 &&
		this.z7p == false &&
		this.b4a == y2m.r9x;
}

o6w()
{
	let c1i = this.u6v;
	if (this.s2u)
	{
		if (c1i.length)
		{
			c1i += " ";
		}
		c1i += this.s2u;
	}
	return c1i;
}

i9f()
{
	let c1i = this.u6v;
	if (this.s2u)
	{
		if (c1i.length)
		{
			c1i += " ";
		}
		c1i += this.s2u;
	}
	if (c1i.length)
	{
		c1i += " ";
	}
	c1i += this.l4l();
	return c1i;
}


u2e()
{
	let c1i = this.u6v;
	if (this.s2u > 1)
	{
		c1i += " ";
		c1i += this.s2u;
	}
	return c1i;
}

l4l()
{
	let c1i = '';
	if (this.z7p)
	{
		let r0f = j9o(this.r0s);
		let s7u = j9o(this.r0s + 1);
		let m6h = r0f + "/" + s7u.substr(2, 2);
		c1i = m6h;
	}
	else
	{
		c1i = j9o(this.r0s);
	}
	return c1i;
}

}

class a7j
{

constructor()
{
	this.e4r = 0;
	this.m4a = 0;
	this.o6c = 0;

}

}

function v0g(c1i, d9l, s4t)
{
	s4t.e4r = 0;
	s4t.m4a = 0;
	s4t.o6c = 0;

	let u2n = c1i.length;
	if (!u2n || c1i == "?")
	{
		return;
	}
	let i = 0;
	for (; i < u2n; i++)
	{
		if (!isNaN(c1i[i]))
		{
			break;
		}
	}
	let u5m = '';
	for (; i < u2n; i++)
	{
		if (isNaN(c1i[i]))
		{
			break;
		}
		u5m += c1i[i].toString();
	}
	for (; i < u2n; i++)
	{
		if (!isNaN(c1i[i]))
		{
			break;
		}
	}
	let s5h = '';
	for (; i < u2n; i++)
	{
		if (isNaN(c1i[i]))
		{
			break;
		}
		s5h += c1i[i].toString();
	}
	for (; i < u2n; i++)
	{
		if (!isNaN(c1i[i]))
		{
			break;
		}
	}
	let o9x = '';
	for (; i < u2n; i++)
	{
		if (isNaN(c1i[i]))
		{
			break;
		}
		o9x += c1i[i].toString();
	}
	let d6s = r7g(u5m, 0);
	let v3d = r7g(s5h, 0);
	let w8i = r7g(o9x, 0);
	if (
		d6s < 0 || d6s > d9l ||
		v3d < 0 || v3d > 59 ||
		w8i < 0 || w8i > 59)
	{
		d6s = 0;
		v3d = 0;
		w8i = 0;
	}
	s4t.e4r = d6s;
	s4t.m4a = v3d;
	s4t.o6c = w8i;
}

function l7d(c1i)
{
	if (c1i.length == 0)
	{
		return 0;
	}
	else
	{
		let s4t = new a7j();
		v0g(c1i, 9, s4t);
		return s4t.e4r * 60 + s4t.m4a;
	}
}


const o7f =
{
	r9x : 0,
	b9l : 1,
	m5x : 2,
	m5m : 3,
	p8l : 4,
	g1b : 5,
	d7b : 6,
	f8m : 7
};

const k2e =
[
	[ o7f.r9x, 			 	""                   ],
	[ o7f.b9l,  		 	"SingleGame"         ],
	[ o7f.m5x,  		 	"Match"              ],
	[ o7f.m5m,  "RoundRobin"         ],
	[ o7f.p8l,   		"SwissSystem"        ],
	[ o7f.g1b,    "Knockout"           ],
	[ o7f.d7b,"Simul"              ],
	[ o7f.f8m,"ScheveningenSystem" ]
];

class l7y
{

constructor()
{
	this.i9k = '';
	this.i4f = '';
	this.s3z = new j6w();
	this.w7r = new j6w();
	this.v4e = v8z.r9e;
	this.s8i = 0;
	this.b4a = y2m.r9x;
	this.type = o7f.r9x;
	this.n9f = 0;
	this.s6n = false;
	this.i8y = false;
	this.f7y = false;
	this.v9n = false;
}

w8u()
{
	let p9c = new l7y();
	p9c.i9k = this.i9k;
	p9c.i4f = this.i4f;
	p9c.s3z = this.s3z.w8u();
	p9c.w7r = this.w7r.w8u();
	p9c.v4e = this.v4e;
	p9c.s8i = this.s8i;
	p9c.b4a = this.b4a;
	p9c.type = this.type;
	p9c.n9f = this.n9f;
	p9c.s6n = this.s6n;
	p9c.i8y = this.i8y;
	p9c.f7y = this.f7y;
	p9c.v9n = this.v9n;
	return p9c;
}

q6v()
{
	return this.i9k.length == 0 &&
		this.i4f.length == 0 &&
		this.s3z.q6v() &&
		this.w7r.q6v() &&
		this.v4e == v8z.r9e &&
		this.s8i == 0 &&
		this.b4a == y2m.r9x &&
		this.type == o7f.r9x &&
		!this.n9f &&
		!this.s6n &&
		!this.i8y &&
		!this.f7y &&
		!this.v9n;
}

i9f()
{
	let c1i = this.i9k;
	if (this.i4f.length)
	{
		if (c1i.length)
		{
			c1i += " ";
		}
		c1i += this.i4f;
	}
	if (c1i.length)
	{
		c1i += " ";
	}
	let r0s = this.s3z.r0s.toString().padStart(4, '0');
	c1i += r0s;
	return c1i;
}

}



const v8z =
{
	r9e : 0,
	r8h : 1,
	u4n : 2,
	i1a : 3
};

const g8i =
[
	[ v8z.r9e, "Normal" ],
	[ v8z.r8h,  "Rapid"  ],
	[ v8z.u4n,  "Blitz"  ],
	[ v8z.i1a,   "Corr"   ]
];

function j6e(v4e)
{
	return g8i[v4e][1];
}

function u0g()
{
	let o0s = [];
	for (const v4e of g8i)
	{
		o0s.push(v4e[1]);
	}
	return o0s;
}

class v0r
{

constructor()
{
	this.c1g = '';
	this.d4j = '';
	this.a4t = g5x.r9x;
	this.style = j6q.r9x;
	this.value = w9y.r9x;
	this.r8s = new e9u();
	this.p0d = new s7c();
	this.v6u = new x6l();
	this.i0g = c2u.r9x;
	this.l8b = false;
	this.w3r = false;
  this.h3i = false;
}

w8u()
{
	let s4e = new v0r();
	s4e.c1g = this.c1g;
	s4e.d4j = this.d4j;
	s4e.a4t = this.a4t;
	s4e.style = this.style;
	s4e.value = this.value;
	s4e.r8s = this.r8s.w8u();
	s4e.p0d = this.p0d.w8u();
	s4e.v6u = this.v6u.w8u();
	s4e.i0g = this.i0g;
	s4e.l8b = this.l8b;
	s4e.w3r = this.w3r;
 	s4e.h3i = this.h3i;
	return s4e;
}

q6v()
{
	return this.c1g.length == 0 &&
		this.d4j.length == 0 &&
		this.a4t == g5x.r9x &&
		this.style == j6q.r9x &&
		this.value == w9y.r9x &&
		this.r8s.q6v() &&
		this.p0d.q6v() &&
		this.v6u.q6v() &&
		this.i0g == c2u.r9x &&
		this.l8b == false &&
		this.w3r == false &&
 		this.h3i == false;
}

}

const c2u =
{
	r9x : 0,
	x3o : 1,
	i7t : 2,
	y8o : 3
};

const v9v =
{
	g5u : 0,
	z7g : 1,
	p0i : 2,
	g9p : 3,
	e2n : 4,
	t6k : 5,
	h1q : 6,
	u2h : 7,
	o7a : 8,
	x2b : 9,
	l8d : 10,
	v8t : 11,
	w1k : 12,
	l2z : 13,
	b1f : 14,
	a1l : 15
};

class e9u
{

constructor()
{
	this.value = 0;
}

c5s(value)
{
	this.value = value;
}

w8u()
{
	let a7h = new e9u();
	a7h.value = this.value;
	return a7h;
}

q6v()
{
	return this.value == 0;
}

y9c()
{
	return this.value != 0;
}

r9x()
{
	return this.value == 0;
}

p5k()
{
	let q0n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.d0p(i))
		{
			q0n++;
		}
	}
	return q0n;
}

s3l()
{
	this.value = 0;
}

set(g4e, b0e)
{
	if (b0e)
	{
		this.value |= (1 << g4e);
	}
	else
	{
		this.value &= ~(1 << g4e);
	}
}

d0p(g4e)
{
	return (this.value & (1 << g4e)) != 0;
}

t2o()
{
	return this.value;
}

}

const g5x =
{
	r9x : 0,
	z0p : 1,
	g9u : 2,
	w3q : 3,
	q6i : 4,
	t3h : 5,
	f5p : 6
};

const q5f =
[
	[ g5x.r9x,     		  ""   ],
	[ g5x.z0p,       		  "RR" ],
	[ g5x.g9u, 		  "&#8979;"  ],
	[ g5x.w3q, 		  "&#8804;"  ],
	[ g5x.q6i,  "="  ],
	[ g5x.t3h,   "&#9651;"  ],
	[ g5x.f5p,  "&#9661;"  ]
];

function v7j(a4t)
{
	return q5f[a4t][1];
}


const j6q =
{
	r9x : 0,
	o2z : 1,
	m3d : 2,
	g0c : 3,
	s1m : 4,
	p9h : 5,
	r3s : 6,
	j3i : 7,
	u5i : 8
};

const o6j =
[
	[ j6q.r9x,     		"" 	 ],
	[ j6q.o2z,       	"!"  ],
	[ j6q.m3d, 					"?"  ],
	[ j6q.g0c,	"!?" ],
	[ j6q.s1m,	 		"?!" ],
	[ j6q.p9h,  	"!!" ],
	[ j6q.r3s, 			"??" ],
	[ j6q.j3i, 		"&#8857;"  ],
	[ j6q.u5i, 		"&#9723;"  ]
];

function y5o(style)
{
	return o6j[style][1];
}


class r2o
{

constructor()
{
	this.u9l = new n1y();
	this.h0q = null;
	this.t6j = null;
	this.e2y = null;
	this.l3h = null;
  this.s2u = 0; 
}

f2l(u9l)
{
	this.u9l = u9l.w8u();
}

l3c(t0j, x0u, o4t, f7k)
{
	this.u9l.l3c(t0j, x0u, o4t, f7k);
}

}

class o2p
{

constructor()
{
	this.q5v = null;
	this.u9l = null;
}

t5q(t3o)
{
	return this.q5v == t3o.q5v;
}

h1t(t3o)
{
	return !this.t5q(t3o);
}

w8u()
{
	let k5j = new o2p();
  k5j.q5v = this.q5v;
  k5j.u9l = this.u9l;
	return k5j;
}

}


class l8k
{

constructor()
{
	this.y9l = new o8k();
 	this.j6s = null;
	this.e7s = 1;
	this.y9l.n1d();
  this.a9d = new v0r();
}

w5u(t3o)
{
	this.j8l(t3o.y9l, t3o.e7s);
	this.a9d = t3o.a9d.w8u();
	this.j6s = this.o5y(t3o.j6s);
}

w8u()
{
	let y1i = new l8k();
	y1i.w5u(this);
	return y1i;
}

j8l(b2u, x7e)
{
	this.y9l = b2u.w8u();
	this.e7s = x7e;
	this.a9d = new v0r();
	this.j6s = null;
}

x7e()
{
	return this.e7s;
}

b2u()
{
	return this.y9l.w8u();
}

s3u(g5y)
{
  let q1p = this.q9c(g5y) + 1;
	if (q1p)
	{
		return this.e7s +
			Math.floor((q1p - 1 + this.y9l.b0q()) / 2);
	}
	else
	{
		return this.e7s;
	}
}

q9c(g5y)
{
	let q1p = 0;
	if (!g5y.q5v)
	{
		return 0;
	}
	let a9g = g5y.q5v;
	while (1)
	{
		q1p++;
		if (!a9g.t6j)
		{
			let r1l = a9g;
			while (r1l.e2y)
			{
				r1l = r1l.e2y;
			}
			if (!r1l.t6j)
			{
				break;
			}
		}
		if (a9g.t6j)
		{
			a9g = a9g.t6j;
		}
		else
		{
			let r1l = a9g;
			while (r1l.e2y)
			{
				r1l = r1l.e2y;
			}
			a9g = r1l.t6j;
		}
	}
	return q1p;
}


l8u()
{
	let o4s = 0;
	let y0q = this.j6s;
	while (y0q)
	{
		o4s++;
		y0q = y0q.h0q;
	}
	return o4s;
}

u1n()
{
	return this.j6s != null;
}

p5g(g5y)
{
	return g5y.t5q(this.l2x());
}

v7m(g5y)
{
	if (g5y.q5v)
	{
		return g5y.q5v.h0q == null;
	}
	else if (this.j6s)
	{
		return false;
	}
	else
	{
		return true;
	}
}

p3n(g5y)
{
	if (!this.p5g(g5y))
	{
		if (g5y.q5v.t6j)
		{
			g5y.q5v = g5y.q5v.t6j;
			g5y.u9l = g5y.q5v.u9l;
		}
		else
		{
			let a9g = g5y.q5v;
			while (a9g.e2y)
			{
				a9g = a9g.e2y;
			}
			a9g = a9g.t6j;
			g5y.q5v = a9g;
      if (g5y.q5v)
      {
  			g5y.u9l = g5y.q5v.u9l;
      }
      else
      {
        g5y.u9l = null;
      }
		}
	}
}

h5p(g5y)
{
	if (!this.v7m(g5y))
	{
		g5y.q5v = this.n9r(g5y);
		g5y.u9l = g5y.q5v.u9l;
	}
}

u3j(g5y, a7i)
{
	let v2y = this.a0u(g5y);
	if (a7i < 0 || a7i >= v2y)
	{
		return;
	}
	let r1l = this.n9r(g5y);
	let i = 0;
	while (i != a7i)
	{
		i++;
		r1l = r1l.l3h;
	}
	g5y.q5v = r1l;
	g5y.u9l = g5y.q5v.u9l;
}

x6s(g5y)
{
	if (!g5y.q5v)
	{
		return this.e7s;
	}
	let q1p = this.q9c(g5y);
	if (q1p)
	{
		return this.e7s +
      Math.floor((q1p - 1 + this.y9l.b0q()) / 2);
	}
	else
	{
		return this.e7s;
	}
}

l2x()
{
	let g5y = new o2p();
	g5y.q5v = null;
	g5y.u9l = null;
	return g5y;
}

j4o(g5y)
{
	if (!this.v7m(g5y))
	{
		let a9g = this.n9r(g5y);
		while (true)
		{
			if (!a9g.h0q)
			{
				break;
			}
			a9g = a9g.h0q;
		}
		g5y.q5v = a9g;
		g5y.u9l = g5y.q5v.u9l;
	}
}

b7j(h1j)
{
	let g5y = this.l2x();
	if (h1j > 0)
	{
    this.h1j = 0;
		this.b8x(g5y, h1j);
		return g5y;
	}
	else
	{
		return g5y;
	}
}

b8x(g5y, h1j)
{
	while (true)
	{
		if (this.v7m(g5y))
		{
			return false;
		}
		let v2y = this.a0u(g5y);
		if (v2y > 1)
		{
			let e6v = g5y.w8u();
			for (let i = 1; i < v2y; i++)
			{
				this.u3j(g5y, i);
				this.h1j++;
				if (this.h1j == h1j)
				{
					return true;
				}
				if (this.b8x(g5y, h1j))
				{
					return true;
				}
        g5y.q5v = e6v.q5v;
        g5y.u9l = e6v.u9l;
			}
		}
		this.h5p(g5y);
		this.h1j++;
		if (this.h1j == h1j)
		{
			return true;
		}
	}
}

b1y(g5y)
{
	if (!g5y.q5v)
	{
		return 0;
	}
	else
	{
		return g5y.q5v.s2u;
	}
}

f1a(g5y)
{
	let y8a = [];
 	if (!g5y.q5v)
  {
		return y8a;
	}
	let a9g = g5y.q5v;
	while (1)
	{
		y8a.push(a9g);
		if (!a9g.t6j)
		{
			let r1l = a9g;
			while (r1l.e2y)
			{
				r1l = r1l.e2y;
			}
			if (!r1l.t6j)
			{
				break;
			}
		}
		if (a9g.t6j)
		{
			a9g = a9g.t6j;
		}
		else
		{
			let r1l = a9g;
			while (r1l.e2y)
			{
				r1l = r1l.e2y;
			}
			a9g = r1l.t6j;
		}
	}
	return y8a.reverse();
}

y1o(g5y)
{
	let y8a = this.f1a(g5y);
	let v2y = this.a0u(g5y);
	if (v2y == 0)
	{
		return y8a;
	}
	let j3r = this.b3a(g5y, 0);
	while (j3r)
	{
		y8a.push(j3r);
		j3r = j3r.h0q;
	}
	return y8a;
}

a0u(g5y)
{
	let j3r = this.n9r(g5y);
	if (!j3r)
	{
		return 0;
	}
	let v2y = 1;
	while (j3r.l3h)
	{
		v2y++;
		j3r = j3r.l3h;
	}
	return v2y;
}

a6c(g5y, l5k)
{
	if (this.p5g(g5y))
	{
		this.j6s = l5k;
		g5y.q5v = l5k;
		g5y.u9l = g5y.q5v.u9l;
	}
	else
	{
		g5y.q5v.h0q = l5k;
		l5k.t6j = g5y.q5v;
		g5y.q5v = l5k;
		g5y.u9l = g5y.q5v.u9l;
	}
}

a8u(g5y, l5k)
{
	let r1l = this.n9r(g5y);
	while (r1l.l3h)
	{
		r1l = r1l.l3h;
	}
	r1l.l3h = l5k;
	l5k.e2y = r1l;

	g5y.q5v = l5k;
	g5y.u9l = g5y.q5v.u9l;
}

f4v(g5y, u9l)
{
	let l5k = new r2o();
 	l5k.f2l(u9l);
	if (this.v7m(g5y))
	{
		this.a6c(g5y, l5k);
	}
	else
	{
		this.a8u(g5y, l5k);
	}
}

l0g(g5y)
{
	let r1l = this.b3a(g5y, 1);
	if (!r1l)
	{
		return false;
	}
	while (r1l)
	{
		let y0q = r1l.h0q;
		while (y0q)
		{
			if (y0q.l3h)
			{
				return false;
			}
			y0q = y0q.h0q;
		}
		r1l = r1l.l3h;
	}
	return true;
}

i5o()
{
	let y0q = this.j6s;
	while (y0q)
	{
		if (y0q.l3h)
		{
			return true;
		}
		y0q = y0q.h0q;
	}
	return false;
}

j5a()
{
	if (!this.a9d.q6v())
	{
		return true;
	}
	if (this.i5o())
	{
		return true;
	}
	let y0q = this.j6s;
	while (y0q)
	{
		if (y0q.u9l.j5a())
		{
			return true;
		}
		y0q = y0q.h0q;
	}
	return false;
}

n9r(g5y)
{
	if (g5y.q5v)
	{
		return g5y.q5v.h0q;
	}
	return this.j6s;
}

b3a(g5y, a7i)
{
	let i = 0;
	let r1l = this.n9r(g5y);
	while (r1l && i != a7i)
	{
		r1l = r1l.l3h;
		i++;
	}
	return r1l;
}

o5y(r1l)
{
	let v3t = r1l;
	let h0o = null;
	let l5k = null;
	let i6b = null;
	while (v3t)
	{
		l5k = new r2o();
		l5k.f2l(v3t.u9l);
		if (h0o)
		{
			h0o.h0q = l5k;
			l5k.t6j = h0o;
		}
		else
		{
			i6b = l5k;
		}
		h0o = l5k;
		if (v3t.l3h && !v3t.e2y)
		{
			let g8e = v3t.l3h;
			let m7i = h0o;
			while (g8e)
			{
				let u0j = this.o5y(g8e);
				m7i.l3h = u0j;
				u0j.e2y = m7i;
				m7i = u0j;
				g8e = g8e.l3h;
			}
		}
		v3t = v3t.h0q;
	}
	return i6b;
}

s9u()
{
	return this.a9d;
}

h4o()
{
	return this.a9d.c1g;
}

x4d(a9w)
{
	this.a9d.c1g = a9w;
}

q5m()
{
	return !this.a9d.p0d.q6v();
}

a4p(p0d)
{
	this.a9d.p0d = p0d.w8u();
}

z1q()
{
	return this.a9d.p0d;
}

r1o()
{
	return !this.a9d.v6u.q6v();
}

g7d(v6u)
{
	this.a9d.v6u = v6u.w8u();
}

x1d()
{
	return this.a9d.v6u;
}

q3e()
{
	return !this.a9d.r8s.q6v();
}

d5g(r8s)
{
	this.a9d.r8s = r8s.w8u();
}

n8y()
{
	return this.a9d.r8s;
}

r7w(h1j)
{
  if (h1j == 0)
  {
    return true;
  }
	let y0q = this.j6s;
	while (y0q)
	{
    if (y0q.s2u == h1j)
    {
      return true;
    }
		y0q = y0q.h0q;
	}
	return false;
}

y2n()
{
	let g5y = this.l2x();
	this.h1j = 0;
	this.s9v(g5y);
}

s9v(g5y)
{
	while (true)
	{
		if (this.v7m(g5y))
		{
			return;
		}
		let v2y = this.a0u(g5y);
		if (v2y > 1)
		{
			let e6v = g5y.w8u();
			for (let i = 1; i < v2y; i++)
			{
				this.u3j(g5y, i);
				this.h1j++;
        g5y.q5v.s2u = this.h1j;
				this.s9v(g5y);
        g5y.q5v = e6v.q5v;
        g5y.u9l = e6v.u9l;
			}
		}
		this.h5p(g5y);
  	this.h1j++;
    g5y.q5v.s2u = this.h1j;
	}
}

t0j(g5y)
{
	let t0j = this.y9l.w8u();
	if (!g5y.q5v)
	{
		return t0j;
	}
	let y8a = this.c8c(g5y);
  for (const u9l of y8a)
	{
		t0j.h5p(u9l.d1l());
	}
	return t0j;
}

c8c(g5y)
{
	let y8a = [];
 	if (!g5y.q5v)
  {
		return y8a;
	}
	let a9g = g5y.q5v;
	while (1)
	{
		y8a.push(a9g.u9l);
		if (!a9g.t6j)
		{
			let r1l = a9g;
			while (r1l.e2y)
			{
				r1l = r1l.e2y;
			}
			if (!r1l.t6j)
			{
				break;
			}
		}
		if (a9g.t6j)
		{
			a9g = a9g.t6j;
		}
		else
		{
			let r1l = a9g;
			while (r1l.e2y)
			{
				r1l = r1l.e2y;
			}
			a9g = r1l.t6j;
		}
	}
	return y8a.reverse();
}


c4d()
{
	this.a9d = new v0r();
	this.j6s = null; 
  
}


u5o()
{
	let y8a = [];
	let y0q = this.j6s;
	while (y0q)
	{
		y8a.push(y0q.u9l);
		y0q = y0q.h0q;
	}
	return y8a;
}

}

const w9y =
{
	r9x : 0,
	u2o : 1,
	t1y : 2,
	q9l : 3,
	c6n : 4,
	f4p : 5,
	e7e : 6,
	z8i : 7,
	o0n : 8,
	s3s : 9,
	h5b : 10,
	g3w : 11,
	u2h : 12,
	f6o : 13,
	v5c : 14,
	g9p : 15
};

const s3i =
[
	[ w9y.r9x,     						  ""    ],
	[ w9y.u2o,        "+&#8211;" ],
	[ w9y.t1y, 						"&#177;" ],
	[ w9y.q9l,		"&#10866;"  ],
	[ w9y.c6n, 							"="   ],
	[ w9y.f4p,  							"&#8734;" ],
	[ w9y.e7e,  	"&#10865;"],
	[ w9y.z8i, 						"&#8723;" ],
	[ w9y.o0n, 				"&#8211;+"],
	[ w9y.s3s,						"&#8773;" ],
	[ w9y.h5b, 						"&#8646;" ],
	[ w9y.g3w,  						"&#8593;" ],
	[ w9y.u2h, 								"&#8594;" ],
	[ w9y.f6o, 					"&#8853;" ],
	[ w9y.v5c,		"&#10227;"],
	[ w9y.g9p, 								"N"   ]
];

function c8w(value)
{
	return s3i[value][1];
}


const b4f =
{
	p5a : 0,
	u2j : 1,
	q8l : 2
};

const n8u =
{
	r9x : 0,
	z6x : 1,
	p3l : 2,
	i6z : 3,
	t5j : 4,
	a4t : 5,
	d4j : 6,
	c1g : 7,
	k6f : 8,
	r8s : 9,
	l8b : 10,
	w3r : 11
};

/*
TO DO
- Aanpassen voor tekst after van w7y daar kan dia inzitten (zie c++)
- Vette tekst en niet vette z6x testen bij wel/niet MultiPV
*/
class c8l
{

constructor()
{
	this.m1m = new o9d();
  this.h7i = true;
  this.x7c = false;
  this.u3g = true;
  this.q0q = true;
  this.z1j = b4f.p5a;
  this.k0m = false;
  this.b4j = true;
 	this.c6b = true;
 	this.y7c = -1;
  this.t1i = false;
  this.g8o = false;
	this.b9b = false;
	this.q5b = true;
  this.m8v = false;
  this.e3t = false;
  this.g5p = 0;
	this.c0p = true;
  this.l1h = null;
 	this.g9j = n8u.r9x;
}

g0r(y8a)
{
	this.l1h = y8a;
 	let l2x = this.l1h.l2x();
	let b2u = this.l1h.b2u();
	this.g9j = n8u.r9x;
	this.q5b = true;
	this.g8o = false;
	this.b9b = false;
	this.t1i = false;
	this.m8v = this.l1h.j5a();
	this.c0p = true;
	this.g5p = 0;

	if (this.k0m)
	{
		this.a1m(n8u.p3l);
		this.p7b();
	}
	else
	{
    
    if (this.z1j == b4f.u2j ||
      (this.z1j == b4f.q8l && !b2u.z9l()))
    {
      if (this.q0q)
      {
        this.n8v(l2x, b2u, g5p);
        this.q5b = true;
      }
    }

    this.a1m((this.m8v && !this.h3i) ? n8u.z6x : n8u.p3l);
    this.l5v(this.m8v);
    this.f4v(l2x, "");
    this.b9h(l2x, this.l1h.s9u().c1g);

    if (this.l1h.u1n())
    {
      this.e6u();
    }
   	this.a1m(n8u.r9x);
   	this.z0m();
  }
}

p7b()
{
	let g5y = this.l1h.l2x();
	let a0u = this.l1h.a0u(g5y);
	for (let i = 0; i < a0u; i++)
	{
    this.m1m.z1b('<div class="variation-row">');
		g5y = this.l1h.l2x();
  	let t0j = this.l1h.b2u();
	  let x6s = this.l1h.x7e();
		this.l1h.u3j(g5y, i);
		this.q5b = true;
		let h9e = true;
		let u9l = g5y.u9l;
		let d4j = u9l.d4j();
		if (d4j.length)
		{
			this.w1d(g5y, d4j);
		}
		this.a1m(n8u.p3l);
		do
		{
			if (h9e)
			{
				g5y.u9l.u0f();
			}
			this.p0y(g5y, t0j, x6s);
			if (h9e)
			{
				g5y.u9l.v8e(d4j);
				h9e = false;
			}
			if (this.l1h.v7m(g5y))
			{
				break;
			}
			t0j.h5p(g5y.u9l);
			if (t0j.h9g())
			{
				x6s++;
			}
			this.l1h.h5p(g5y);
		} while (true);
    this.m1m.z1b('<div');
	}
}

e6u()
{
  let j4v = 0;
 	let g5y = this.l1h.l2x();
	let t0j = this.l1h.b2u();
  let x6s = this.l1h.x7e();

	let x5g = 100000;
	if (this.y7c == 0)
	{
		return;
	}
	if (this.y7c != -1)
	{
		x5g = this.y7c;
	}
	let r5q = x6s + x5g - 1;
	this.q5b = true;
	while (true)
	{
		let a0u = this.l1h.a0u(g5y);
		while (x6s <= r5q && !this.l1h.v7m(g5y))
		{
      this.l1h.h5p(g5y);
    	this.a1m((this.m8v && !this.h3i) ? n8u.z6x : n8u.p3l);
			this.p0y(g5y, t0j, x6s);
			t0j.h5p(g5y.u9l.d1l());
 			if (t0j.h9g())
			{
				x6s++;
			}
			if (this.c6b && a0u > 1)
			{
				break;
			}
			a0u = this.l1h.a0u(g5y);
		}
		if (!a0u || x6s > r5q)
		{
			return;
		}
    t0j.p3n(g5y.u9l.d1l());
		if (t0j.b0q())
		{
			x6s--;
		}
    this.l1h.p3n(g5y);
		for (let i = 1; i < a0u; i++)
		{
      j4v++;
      let f2w = "<span class=\"tdline\" data-level=\"";
      f2w += j4v.toString();
      f2w += "\">";
      this.m1m.z1b(f2w);
			this.m0v(n8u.i6z);
			this.c3l("[", true);
			let a4t = '';
      this.r8u(g5y, t0j, x6s, i, a4t, j4v);
			this.a1m(n8u.i6z);
			this.c3l("]", true);
      this.m1m.z1b("</span>");
      j4v--;
     	this.a1m((this.m8v && !this.h3i) ? n8u.z6x : n8u.p3l);
		}
		this.m0v(this.g9j);
    this.l1h.h5p(g5y);
    t0j.h5p(g5y.u9l.d1l());
		if (t0j.h9g())
		{
			x6s++;
		}
		this.q5b = true;
	}
}

p0y(g5y, t0j, x6s)
{
	if (this.l1h.p5g(g5y))
	{
		return;
	}
 	let u9l = g5y.u9l;

	let c1i = '';
  let u9c = false;
  if (this.h7i)
	{
		if (u9l.i2x())
		{
			if (!this.l1h.p5g(g5y))
			{
        let u9r = g5y.w8u();
        this.l1h.p3n(u9r);
        if (u9r.u9l)
        {
  				if (u9r.u9l.g1e())
	  			{
		  			u9c = true;
			  	}
        }
			}
		}
  }
	if (this.g8o)
	{
		c1i = "(";
		this.g8o = false;
		if (this.h7i && u9l.h2o())
		{
			this.c3l("(", true);
			let q1s = this.g9j;
			this.w1d(g5y, u9l.d4j());
			this.a1m(q1s);
			c1i = "";
      u9c = true;
		}
	}
	else
	{
		if (this.h7i && u9l.h2o())
		{
  	  let q1s = this.g9j;
	  	this.w1d(g5y, u9l.d4j());
		  this.a1m(q1s);
      u9c = true;
    }
	}
	if (u9l.z2g())
	{
		c1i += v7j(u9l.a4t());
	}
	let t2h = u9l.i1g();
	if (t2h)
	{
    c1i += x6s;
		c1i += '.';
	}
	else
	{
		if (this.q5b || u9c)
		{
 			c1i += x6s;
			c1i += "...";
		}
	}
	c1i += p2r(t0j, u9l.d1l(), false);
	if (u9l.f7p())
	{
		c1i += y5o(u9l.style());
	}
	if (u9l.f6e())
	{
		c1i += c8w(u9l.value());
	}
	if (u9l.l3w())
	{
		c1i += " End Of Game";
  }
	if (this.b9b || this.t1i)
	{
		if (this.l1h.v7m(g5y) && (!this.h7i || !u9l.g1e()))
		{
			if (this.b9b)
			{
				c1i += ")";
				this.b9b = false;
			}
			else
			{
				c1i += ";";
				this.t1i = false;
			}
		}
	}
	this.f4v(g5y, c1i);
	this.q5b = false;

	if (u9l.d3x())
	{
		let c1g = u9l.c1g();
    let u5v = c1g.indexOf("[#]");
		let p2p = c1g.substring(0, u5v);
	  let u6b = c1g.substring(u5v + 3);
		if (p2p.length)
		{
			this.b9h(g5y, p2p);
		}
		this.g5p++;
		if (this.q0q)
		{
			this.m0v(n8u.r9x);
      this.n8v(g5y, t0j, this.g5p);
			this.q5b = true;
		}
		if (u6b.length)
		{
			this.b9h(g5y, u6b);
		}
	}
	else
	{
		this.b9h(g5y, u9l.c1g());
	}

  if (u9l.l3w())
	{
    this.m1m.e7n("<div>&nbsp;</div>"); 
   	this.z0m();
 	  this.l5v(false); 
 	  this.e3t = true;
	}
}

a1m(x4h)
{
	if (x4h != this.g9j)
	{
		this.n5a();
		this.g9j = x4h;
		this.a1p();
	}
}

a1p()
{
}

n5a()
{
	this.g9j = n8u.r9x;
}

m0v(x4h)
{
	this.n5a();
	this.g9j = n8u.r9x;
  
  
  
  
  this.m1m.e7n("<br>"); 
	if (x4h != n8u.r9x)
	{
		this.g9j = x4h;
		this.a1p();
	}
}

n8v(g5y, t0j, s2u)
{
  this.c0p = true;
	let f2w = "<span class=\"tddia\" movenr=\"";
  f2w += this.l1h.b1y(g5y).toString();
	f2w += "\">",
	this.m1m.z1b(f2w);
	this.m1m.z1b("<canvas></canvas>");
	this.m1m.z1b("</span>");
	this.q5b = true;
}

q2j(g5y, a9w)
{
  this.d1x(g5y);
	this.i5y(a9w);
  this.a7n();
}

r8u(z4w, x1l, x6s, a7i, a4t, j4v)
{
  let g5y = z4w.w8u();
  let t0j = x1l.w8u();

	if (a4t.length)
	{
		this.a1m(n8u.a4t);
		let a4l = a4t;
		a4l += ")";
    let f2w = "<span class=\"tdprefix\">";
    this.m1m.z1b(f2w);
  	this.c3l(a4l);
    this.m1m.z1b("</span>");
	}
	let a0u = 0;
	let n5e = 1;
  this.l1h.u3j(g5y, a7i);
	this.q5b = true;
	do
	{
		this.a1m(n8u.i6z);
		this.p0y(g5y, t0j, x6s);
		if (a0u > 1)
		{
      this.l1h.p3n(g5y);
      this.w5x(g5y, t0j, x6s);
      this.l1h.h5p(g5y);
			this.q5b = true;
		}
		t0j.h5p(g5y.u9l.d1l());
		if (t0j.h9g())
		{
			x6s++;
		}
		a0u = this.l1h.a0u(g5y);
		if (a0u == 0)
		{
			break;
		}
		if (a0u > 1)
		{
			if (!this.l1h.l0g(g5y))
			{
				break;
			}
		}
    this.l1h.h5p(g5y);
		n5e++;
	} while (true);

	if (this.l1h.v7m(g5y))
	{
		return;
	}

	let e1i = a4t.length;
	let a4l = '';
	let b6f = 1;
	for (let i = 0; i < a0u; i++)
	{
		if (e1i == 0)
		{
      a4l = String.fromCharCode('A'.charCodeAt() + b6f - 1);
		}
		else if (e1i == 1)
		{
      a4l = a4t;
      a4l += b6f;
		}
		else if (e1i == 2)
		{
      a4l = a4t;
      a4l += String.fromCharCode('a'.charCodeAt() + b6f - 1);
		}
		else
		{
      a4l = a4t;
      a4l += b6f;
		}

    let f2w = "<span class=\"tdline\" data-level=\"";
    f2w += j4v.toString();
    f2w += "\">";
    this.m1m.z1b(f2w);
  	this.m0v(this.g9j);
    this.r8u(g5y, t0j, x6s, i, a4l, j4v);
    this.m1m.z1b("</span>");
		b6f++;
	}
}

w5x(z4w, x1l, x6s)
{
  let g5y = z4w.w8u();
  let t0j = x1l.w8u();

	this.a1m(n8u.t5j);
	this.g8o = true;
	this.t1i = false;
	let a0u = this.l1h.a0u(g5y);
	for (let i = 1; i < a0u; i++)
	{
		if (i == a0u - 1)
		{
			this.b9b = true;
		}
		if (i < a0u - 1)
		{
			this.t1i = true;
		}
    this.v2o(g5y, t0j, x6s, i);
		if (this.t1i)
		{
			this.a1m(n8u.t5j);
			this.c3l(";", false);
			this.t1i = false;
		}
	}
	this.a1m(n8u.t5j);
	if (this.b9b)
	{
		this.c3l(")", false);
		this.b9b = false;
	}
}

v2o(z4w, x1l, x6s, a7i)
{
  let g5y = z4w.w8u();
  let t0j = x1l.w8u();

  this.l1h.u3j(g5y, a7i);
	let n5e = 0;
	this.q5b = true;
	do
	{
		n5e++;
		this.a1m(n8u.t5j);
		this.p0y(g5y, t0j, x6s);
		if (this.l1h.v7m(g5y))
		{
			break;
		}
		t0j.h5p(g5y.u9l.d1l());
		if (t0j.h9g())
		{
			x6s++;
		}
    this.l1h.h5p(g5y);
	} while (true);
}

f4v(g5y, c1i)
{
	if (c1i.length)
	{
 		this.f3w(g5y, c1i);
	}
	else
	{
		if (this.b4j)
    {
      this.f3w(g5y, "[...]");
    }
	}
	if (g5y.u9l)
	{
		if (g5y.u9l.f5c() || g5y.u9l.k0u())
		{
			this.v3a(g5y, n8u.k6f);
		}
		if (g5y.u9l.d3x())
		{
		}
		if (g5y.u9l.p2a())
		{
			this.v3a(g5y, n8u.l8b);
		}
		if (g5y.u9l.j8m())
		{
			this.v3a(g5y, n8u.r8s);
		}
	}
	else
	{
		if (this.l1h.q5m() || this.l1h.r1o())
		{
			this.v3a(g5y, n8u.k6f);
		}
		if (this.l1h.q3e())
		{
		 	this.v3a(g5y, n8u.r8s);
		}
	}
}

c3l(c1i, n8n)
{
	if (c1i.length == 0)
	{
		return;
	}
	if (!this.c0p && n8n)
	{
		this.m1m.e7n(" ");
	}
	this.m1m.e7n(c1i);
	this.c0p = false;
}

w1d(g5y, d4j)
{
	if (this.h7i && d4j.length)
	{
		this.a1m(n8u.d4j);
		this.q2j(g5y, d4j);
	}
}

b9h(g5y, c1g)
{
	if (this.h7i && c1g.length)
	{
		this.a1m(n8u.c1g);
		this.q2j(g5y, c1g);
	}
}

i5y(a9w)
{
  let y3a = a9w;
  let m0f = y3a.replaceAll("<br><br>", "<br>");
  let f1i = m0f.replaceAll("<br><br>", "<br>");
  let k9g = f1i.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = k9g;
  this.m1m.e7n(s);
}

f3w(g5y, c1i)
{
	if (c1i.length == 0)
	{
		return;
	}
	if (!this.c0p)
	{
		this.m1m.e7n(" ");
	}
  let d4v = '';
  if (g5y.u9l)
  {
  	if (g5y.u9l.l3r())
	  {
		  if (g5y.u9l.i0g() == c2u.x3o)
  		{
	  		d4v = "tdmove-crit-opening";
		  }
  		else if (g5y.u9l.i0g() == c2u.i7t)
	  	{
		  	d4v = "tdmove-crit-middle";
  		}
	  	else if (g5y.u9l.i0g() == c2u.y8o)
		  {
  			d4v = "tdmove-crit-end";
	  	}
  	}
  }
	let x1e = "<span class=\"";
	if (d4v.length == 0)
	{
		x1e += "tdmove\" movenr=\"";
	}
	else
	{
		x1e += "tdmove " + d4v + "\" movenr=\"";
	}
  x1e += this.l1h.b1y(g5y).toString();
  x1e += "\"";
	x1e += ">",
	x1e += c1i;
	x1e += "</span>";

	this.m1m.z1b(x1e);
	this.c0p = false;
}

v3a(g5y, x4h)
{
  if (x4h == n8u.k6f)
  {
    this.l8q(g5y);
  }
  else if (x4h == n8u.r8s)
  {
    this.p5u(g5y);
  }
}

l8q(g5y)
{
	let f2w = "<span class=\"tdcolors\" movenr=\"";
  f2w += this.l1h.b1y(g5y).toString();
	f2w += "\">",
	this.m1m.z1b(f2w);
	this.m1m.z1b("</span>");
}

p5u(g5y)
{
	let f2w = "<span class=\"tdmedal\" movenr=\"";
  f2w += this.l1h.b1y(g5y).toString();
	f2w += "\">",
	this.m1m.z1b(f2w);
	this.m1m.z1b("<canvas></canvas>");
	this.m1m.z1b("</span>");
}

l5v(y3q)
{
 	let f2w = "<span class=\"tdline\"";
	if (y3q)
	{
		f2w += " data-commented=\"1\"";
	}
	f2w += " data-level=\"0\">";
	this.m1m.e7n(f2w);
}

z0m()
{
  this.m1m.z1b("</span>");
}

d1x(g5y)
{
  let n7t = "tdcomment";
  if (this.x7c)
  {
    n7t += " is-bold";
  }
  let f2w = "<span class=\"" + n7t + "\" movenr=\"";
  f2w += this.l1h.b1y(g5y).toString();
  f2w += "\">";
  this.m1m.e7n(f2w);
}

a7n()
{
  this.m1m.z1b("</span>");
}

u2v(value)
{
  this.b4j = value;
}

p2d(value)
{
  this.x7c = value;
}

i7j(value)
{
  this.u3g = value;
}

j0g(value)
{
  this.k0m = value;
}

} 
const c3j =
{
	u2h : 1,
	x2b : 2,
	b9j : 3
};

class k7q
{

constructor()
{
	this.q4c = 0;
	this.r9j = 0;
	this.type = c3j.u2h;
}

w8u()
{
	let r3m = new k7q();
	r3m.q4c = this.q4c;
	r3m.r9j = this.r9j;
	r3m.type = this.type;
	return r3m;
}

}

function p9r(q4c, r9j, type)
{
	let s = new k7q();
	s.q4c = q4c;
	s.r9j = r9j;
	s.type = type;
	return s;
}
class s7c
{

constructor()
{
	this.l7l = [];
}

w8u()
{
	let m6y = new s7c();
	for (const c0j of this.l7l)
	{
		m6y.add(c0j.w8u());
	}
	return m6y;
}

v3g()
{
	this.l7l.length = 0;
}

q6v()
{
	return this.l7l.length == 0;
}

size()
{
	return this.l7l.length;
}

add(c0j)
{
	let l4z = c0j.w8u();
	this.l7l.push(l4z);
}

}

const c7m =
{
	a5z : 0,
	g7b : 1,
	l6c : 2
};

class r3c
{

constructor()
{
	this.u7k = 0;
	this.type = c7m.a5z;
}

w8u()
{
	let w2m = new r3c();
	w2m.u7k = this.u7k;
	w2m.type = this.type;
	return w2m;
}

}

function v9e(u7k, type)
{
	let v5q = new r3c();
	v5q.u7k = u7k;
	v5q.type = type;
	return v5q;
}

class x6l
{

constructor()
{
	this.c5z = [];
}

w8u()
{
	let c9y = new x6l();
	for (const b6j of this.c5z)
	{
		c9y.add(b6j.w8u());
	}
	return c9y;
}

v3g()
{
	this.c5z.length = 0;
}

q6v()
{
	return this.c5z.length == 0;
}

size()
{
	return this.c5z.length;
}

add(z8a)
{
	let f9a = z8a.w8u();
	this.c5z.push(f9a);
}

}

const q3c =
{
	q1l    : 0,
	n8s  : 1,
	i6o  : 2,
	o1q    : 3,
  n7e   : 4,
	b3q    : 5,
};


function v8b(t5v)
{
	let c1i = '';
	switch (t5v)
	{
		case q3c.q1l:
			c1i = "P";
			break;
		case q3c.n8s:
			c1i = "N";
			break;
		case q3c.i6o:
			c1i = "B";
			break;
		case q3c.o1q:
			c1i = "R";
			break;
		case q3c.n7e:
			c1i = "Q";
			break;
		case q3c.king:
			c1i = "K";
			break;
	}
	return c1i;
}

class j0c
{

constructor()
{
  this.l3n = 0;
	this.h6y = new e5o();
	this.y8a = new l8k();
}

w8u()
{
	let v8u = new j0c();
  v8u.l3n = this.l3n;
	v8u.h6y = this.h6y.w8u();
	v8u.y8a = this.y8a.w8u();
	return v8u;
}

}

const w7n = 	 		"#7B8295";
const u7f =			"#9F9F9F";
const w3l = 			    "#7B8295";
const t6r = 		  "#FFFFFF";
const t5u =       "#D0B194";

const h1g	   = "#E13129";
const h2u	 = "#389C13";
const c4m = "#E2B628";

const e6m	 = "#E13129";
const b0x	 = "#389C13";
const i8h	   = "#E2B628";

class s0a
{

constructor()
{
	this.t2a = null;
	this.v6m = false;
	this.q8g = null;
	this.q0t = null;
	this.r2e = null;
	this.e7o = 0;
	this.g4q = 0;
	this.m4z = 0;
	this.n6a = 0;
	this.k6l = 0;
	this.d7t = 0;
	this.w7k = new j6p();
	this.t0j = new o8k();
	this.p0d = new s7c();
	this.v6u = new x6l();
  this.d2r = new w3p();
  this.q9k = true;
	this.s5a = true;
	this.n4t = true;
	this.h8h = false;
	this.x4c = w7n;
	this.s1s = u7f;
	this.n7y = b3p;
	this.d1o = y7p;
	this.y3f = y7p;
	this.i5u = r6v;
	this.e6z = true;
	this.c7i = c1e;
	this.m6r = c1e;
	this.s9h = false;
	this.b5p = [];
	this.h4h = 0;
}

h1s(t2a)
{
	this.t2a = t2a;
}

l6q(w7k)
{
	this.w7k = w7k;
	this.m4z = w7k.m4z();
	this.n6a = w7k.m4z();

	this.e7o = (this.t2a.width - this.m4z) / 2;
	let top = (this.t2a.height - this.n6a) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.g4q = top;
	this.k6l = this.e7o + this.m4z - 1;
	this.d7t = this.g4q + this.n6a - 1;
	this.v6m = false;
	this.b6i();
}

j8l(t0j)
{
	this.t0j = t0j.w8u();
	this.p0d.v3g();
	this.v6u.v3g();
}

x3c(p0d)
{
	this.p0d = p0d.w8u();
}

h3l(v6u)
{
	this.v6u = v6u.w8u();
}

j0e(u9l)
{
  this.d2r = u9l.w8u();
}

k1u(h8h)
{
	this.h8h = h8h;
}

h7b()
{
	this.h8h = !this.h8h;
}

z4x()
{
	if (!this.t2a) return;
	if (this.m4z <= 0 || this.n6a <= 0)
	{
		return;
	}
	this.b7l();
}

y9m()
{
	let a7k = this.w7k.a7k;
	if (this.v6m)
	{
		return;
	}
	this.v6m = true;
	if (a7k == k5t.x4w)
	{
  	this.q8g = t7q.y5m("images/board/LightSquare");
  	this.q0t = t7q.y5m("images/board/DarkSquare");
		this.r2e = t7q.y5m("images/board/Margin");
	}
}

b6i()
{
	this.y9m();
	let a7k = this.w7k.a7k;
	if (a7k == k5t.x4w)
	{
		this.e6z = false;
		this.s5a = false;
		this.n4t = false;
		this.n7y = "#FFFF97";
		this.d1o = "#9B2E31";
		this.y3f = g5o;
	}
}

b7l()
{
	this.b6i();
	if (this.w7k.a7k == k5t.x4w)
	{
		let h1d = t7q.y5m("images/board/BoardBackground");
		this.k2v(new x2v(0, 0, this.t2a.width, this.t2a.height), h1d);
	}
	this.u1e();  
	this.m9b(); 
	this.w1u(); 
  if (chess)
  {
	  this.k0v();
  }
  else
  {
	  this.q3z();
  	this.a2l();
  }
  
  this.a1t();
 	this.y1l();
 	this.t4q();
 	this.h7a();
	this.t9b(); 
	this.b2b();      
}

u1e()
{
	let a5e = this.g4q;
	let m5i = this.e7o;
	let b3r = this.k6l;
	let q2r = this.d7t;
	let z8u = this.w7k.p0b;
	this.z7r(new x2v(m5i, a5e, b3r, a5e+z8u-1), this.d1o);
	this.z7r(new x2v(m5i, q2r-z8u+1, b3r, q2r), this.y3f);
	this.z7r(new x2v(m5i, a5e, m5i+z8u-1, q2r), this.d1o);
	this.z7r(new x2v(b3r-z8u+1, a5e, b3r, q2r), this.y3f);
}

m9b()
{
	let p0b = this.w7k.p0b;
	let w6d = this.w7k.w6d;
	if (!w6d)
	{
		return;
	}
	if (this.e6z || !this.r2e)
	{
		this.c7a(this.i5u);
	}
	else
	{
		let left = this.e7o + p0b;
		let top = this.g4q + p0b;
		let l1s = this.k6l - p0b;
		let x2h = this.g4q + p0b + w6d - 1;
		this.k2v(new x2v(left, top, l1s, x2h), this.r2e);

		left = this.e7o + p0b;
		top = this.g4q + p0b;
		l1s = this.e7o + p0b + w6d - 1;
		x2h = this.d7t - p0b;
		this.k2v(new x2v(left, top, l1s, x2h), this.r2e);

		left = this.e7o + p0b;
		top = this.d7t - p0b - w6d + 1;
		l1s = this.k6l - p0b;
		x2h = this.d7t - p0b;
		this.k2v(new x2v(left, top, l1s, x2h), this.r2e);

		left = this.k6l - p0b - w6d + 1;
		top = this.g4q + p0b;
		l1s = this.k6l - p0b;
		x2h = this.d7t - p0b;
		this.k2v(new x2v(left, top, l1s, x2h), this.r2e);
	}
}

c7a()
{
	let p0b = this.w7k.p0b;
	let w6d = this.w7k.w6d;
	if (!w6d)
	{
		return;
	}

	let left = this.e7o + p0b;
	let top = this.g4q + p0b;
	let l1s = this.k6l - p0b;
	let x2h = this.g4q + p0b + w6d - 1;
	this.z7r(new x2v(left, top, l1s, x2h), this.i5u);

	left = this.e7o + p0b;
	top = this.g4q + p0b;
	l1s = this.e7o + p0b + w6d - 1;
	x2h = this.d7t - p0b;
	this.z7r(new x2v(left, top, l1s, x2h), this.i5u);

	left = this.e7o + p0b;
	top = this.d7t - p0b - w6d + 1;
	l1s = this.k6l - p0b;
	x2h = this.d7t - p0b;
	this.z7r(new x2v(left, top, l1s, x2h), this.i5u);

	left = this.k6l - p0b - w6d + 1;
	top = this.g4q + p0b;
	l1s = this.k6l - p0b;
	x2h = this.d7t - p0b;
	this.z7r(new x2v(left, top, l1s, x2h), this.i5u);
}

b2b()
{
	if (this.w7k.u0k)
	{
  	if (!this.w7k.w6d)
  	{
	  	return;
  	}
		let color = "#000000";
		if (this.t0j.h9g())
		{
			color = "#EDD790";
		}
		else
		{
			color = "#000000";
		}
		let rect = this.f8g();
		let j0m = this.e9k();
		j0m.beginPath();
		j0m.fillStyle = color;
		let w7u = rect.x7l() * 0.40;
		j0m.arc(rect.q7j + rect.x7l()/2 - 1, rect.i1m + rect.c6g()/2 - 1,
			w7u, 0, 2 * Math.PI);
		j0m.fill();
	}
}

w1u()
{
	let l8r = g5o;
	let p0b = this.w7k.p0b;
	let w6d = this.w7k.w6d;
	let z8u = this.w7k.z8u;
	let a5e = this.g4q + p0b + w6d;
	let m5i = this.e7o + p0b + w6d;
	let b3r = this.k6l - p0b - w6d;
	let q2r = this.d7t - p0b - w6d;
	this.z7r(new x2v(m5i, a5e, b3r, a5e+z8u-1), l8r);
	this.z7r(new x2v(m5i, q2r-z8u+1, b3r, q2r), l8r);
	this.z7r(new x2v(m5i, a5e, m5i+z8u-1, q2r), l8r);
	this.z7r(new x2v(b3r-z8u+1, a5e, b3r, q2r), l8r);
}

e9k()
{
	return this.t2a.getContext('2d');
}

a7e(rect, color)
{
	let j0m = this.e9k();
	j0m.beginPath();
	j0m.lineWidth = "1";
	j0m.strokeStyle = color;
	j0m.rect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());
	j0m.stroke();
}

z7r(rect, color)
{
	let j0m = this.e9k();
	j0m.fillStyle = color;
	j0m.fillRect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());
}

k2v(rect, img)
{
	let j0m = this.e9k();
	let t2f = j0m.createPattern(img, 'repeat');
	j0m.fillStyle = t2f;
	j0m.fillRect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());
}

h0e(rect, img)
{
	let j0m = this.e9k();
	let t2f = j0m.createPattern(img, 'no-repeat');
	j0m.fillStyle = t2f;
	j0m.fillRect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());
}

o6e(u7k)
{
	let d6n = u7n;
	let r6w = s6y;
	if (this.h8h)
	{
		d6n = n1u(g6r(u7k));
		r6w = j6b(g6r(u7k));
	}
	else
	{
		d6n = n1u(u7k);
		r6w = j6b(u7k);
	}
	if (s0o(r6w))
	{
		d6n++;
	}
	else
	{
		d6n--;
	}
	return this.y3t(r6w, d6n);
}

q3z()
{
	for (const u7k of n8j)
	{
		this.r6e(u7k);
	}
}

r6e(u7k)
{
	this.w0v(this.o6e(u7k), u7k);
}

w0v(rect, u7k)
{
	let y5m = this.q8g;
	if (this.n4t)
	{
		this.e7q(rect, this.s1s);
		return;
	}
	if (!y5m)
	{
		this.e7q(rect, this.s1s);
		return;
	}

	let u3a = y5m.width;
	let x1z = y5m.height;
	let u4a = this.w7k.w5c;
	if (u3a < u4a || x1z < u4a)
	{
		this.h0e(rect, y5m);
		return;
	}

	let v4u = Math.trunc(u3a / this.w7k.w5c);
	let o6t = Math.trunc(x1z / this.w7k.w5c);
	if (v4u == 0)
	{
		v4u = 1;
	}
	if (o6t == 0)
	{
		o6t = 1;
	}

	let g6w = Math.trunc((u7k) / v4u);
	let m7e = (u7k) % v4u;
	let y = Math.trunc(g6w / o6t);
	g6w = g6w % o6t;

  let d6x = new x2v();
	d6x.q7j = m7e * this.w7k.w5c;
	d6x.i1m = g6w * this.w7k.w5c;
	d6x.h7x = (m7e + 1) * this.w7k.w5c - 1;
	d6x.d7v = (g6w + 1) * this.w7k.w5c - 1;
	let j0m = this.e9k();
	r0q(j0m, rect, y5m, d6x);
}

u3o(u7k)
{
	let d6n = u7n;
	let r6w = s6y;
	if (this.h8h)
	{
		d6n = n1u(g6r(u7k));
		r6w = j6b(g6r(u7k));
	}
	else
	{
		d6n = n1u(u7k);
		r6w = j6b(u7k);
	}
	return this.y3t(r6w, d6n);
}

a2l()
{
	for (const u7k of n8j)
	{
		this.x4a(u7k);
	}
}

x4a(u7k)
{
	this.i0p(this.u3o(u7k), u7k);
}

i0p(rect, u7k)
{
	let y5m = this.q0t;
	if (this.s5a)
	{
		this.e7q(rect, this.x4c);
		return;
	}
	if (!y5m)
	{
		this.e7q(rect, this.x4c);
		return;
	}

	let u3a = y5m.width;
	let x1z = y5m.height;
	let u4a = this.w7k.w5c;
	if (u3a < u4a || x1z < u4a)
	{
		this.h0e(rect, y5m);
		return;
	}

	let v4u = Math.trunc(u3a / this.w7k.w5c);
	let o6t = Math.trunc(x1z / this.w7k.w5c);
	if (v4u == 0)
	{
		v4u = 1;
	}
	if (o6t == 0)
	{
		o6t = 1;
	}

	let g6w = Math.trunc((u7k) / v4u);
	let m7e = (u7k) % v4u;
	let y = Math.trunc(g6w / o6t);
	g6w = g6w % o6t;

  let d6x = new x2v();
	d6x.q7j = m7e * this.w7k.w5c;
	d6x.i1m = g6w * this.w7k.w5c;
	d6x.h7x = (m7e + 1) * this.w7k.w5c - 1;
	d6x.d7v = (g6w + 1) * this.w7k.w5c - 1;
	let j0m = this.e9k();
	r0q(j0m, rect, y5m, d6x);
}

y3t(r6w, d6n)
{
	let p0b = this.w7k.p0b;
	let w6d = this.w7k.w6d;
	let z8u = this.w7k.z8u;
	let w5c = this.w7k.w5c;
	let rect = new x2v();
	rect.q7j = this.e7o + p0b + w6d +	z8u + (d6n) * w5c;
	rect.h7x = rect.q7j + w5c - 1;
	rect.i1m = this.g4q + p0b + w6d +	z8u + (c4f - r6w - 1) * w5c;
	rect.d7v = rect.i1m + w5c - 1;
	return rect;
}

q2f(u7k)
{
	let d6n = u7n;
	let r6w = s6y;
	if (this.h8h)
	{
		d6n = n1u(g6r(u7k));
		r6w = j6b(g6r(u7k));
	}
	else
	{
		d6n = n1u(u7k);
		r6w = j6b(u7k);
	}
	return this.y3t(r6w, d6n);
}

k0v()
{
	for (const u7k of n8j)
	{
		this.d6h(u7k);
	}
}

d6h(u7k)
{
	this.h5w(this.q2f(u7k), u7k);
}

h5w(rect, u7k)
{
	let y6m = isDarkSquare(u7k);
	let y5m = this.q8g;
	if (y6m)
	{
		y5m = this.q0t;
	}
	if (y6m)
	{
		if (this.s5a)
		{
			this.e7q(rect, this.x4c);
			return;
		}
		if (!y5m)
		{
			this.e7q(rect, this.x4c);
			return;
		}
	}
	else
	{
		if (this.n4t)
		{
			this.e7q(rect, this.s1s);
			return;
		}
		if (!y5m)
		{
			this.e7q(rect, this.s1s);
			return;
		}
	}

 	let u3a = y5m.width;
	let x1z = y5m.height;
	let u4a = this.w7k.w5c;
	if (u3a < u4a || x1z < u4a)
	{
		this.h0e(rect, y5m);
		return;
	}
	let v4u = Math.trunc(u3a / this.w7k.w5c);
	let o6t = Math.trunc(x1z / this.w7k.w5c);
	if (v4u == 0)
	{
		v4u = 1;
	}
	if (o6t == 0)
	{
		o6t = 1;
	}

	let g6w = Math.trunc((u7k) / v4u);
	let m7e = (u7k) % v4u;
	let y = Math.trunc(g6w / o6t);
	g6w = g6w % o6t;

  let d6x = new x2v();
	d6x.q7j = m7e * this.w7k.w5c;
	d6x.i1m = g6w * this.w7k.w5c;
	d6x.h7x = (m7e + 1) * this.w7k.w5c - 1;
	d6x.d7v = (g6w + 1) * this.w7k.w5c - 1;
	let j0m = this.e9k();
	r0q(j0m, rect, y5m, d6x);
}

e7q(rect, color)
{
	this.z7r(rect, color);
}

t4q()
{
	for (const u7k of n8j)
	{
		this.t6e(u7k);
	}
}

c0g(q4c, r9j, c9t)
{
	this.c7i = q4c;
	this.m6r = r9j;
	this.s9h = c9t;

	this.b5p.length = 0;
 	let n3k = this.q2f(q4c);
  let t4u = this.q2f(r9j);
	let b3g = this.w7k.w5c;

	let w8l = 32;
	if (b3g < 32)
	{
		w8l = b3g;
	}

  
	if (false)
	{
    
    
		let l7o = new b4c(n3k.q7j + b3g / 2, n3k.i1m + b3g / 2);
		let n8h = new b4c(t4u.q7j + b3g / 2, t4u.i1m + b3g / 2);
		let k4o = Math.abs(l7o.X - n8h.X);
		let t1j = Math.abs(l7o.Y - n8h.Y);
		let h9k = Math.atan2(n8h.X - l7o.X, l7o.Y - n8h.Y);
		let s7l = Math.sqrt(k4o*k4o + t1j*t1j) / 2;
		n8h.X = l7o.X + s7l * 2;
		n8h.Y = l7o.Y;
		let w2h = new b4c(l7o.X + s7l, l7o.Y);
		let y8e = Math.PI / w8l;
		let f4x = b3g * 0.40;
		let e7x = Math.PI;
		let f0i = (t4u.q7j > n3k.q7j && t4u.i1m < n3k.i1m) ||
			(t4u.q7j < n3k.q7j && t4u.i1m > n3k.i1m);
		for (let i = 1; i < w8l; i++)
		{
			let a7e = new x2v();
			if (f0i)
			{
				e7x -= y8e;
			}
			else
			{
				e7x += y8e;
			}
			let i2u = Math.cos(e7x);
			let m7p = Math.sin(e7x);
			let g3i = new b4c(w2h.X + s7l * i2u,
				w2h.Y - f4x * m7p);
			this.b5p.push(x0b(g3i, l7o, h9k - Math.PI / 2));
		}
	}
	else
	{
		let l7o = new b4c(n3k.q7j + b3g / 2, n3k.i1m + b3g / 2);
		let n8h = new b4c(t4u.q7j + b3g / 2, t4u.i1m + b3g / 2);
		let a0s = (n8h.X - l7o.X) / w8l;
		let c7t = (n8h.Y - l7o.Y) / w8l;
		for (let i = 1; i < w8l; i++)
		{
			this.b5p.push(new b4c(l7o.X + i * a0s, l7o.Y + i * c7t));
		}
	}
	this.b5p.push(new b4c(t4u.q7j + b3g / 2, t4u.i1m + b3g / 2));
	this.h4h = 0;
}

n5g()
{
	this.c7i = c1e;
	this.m6r = c1e;
}

v1n()
{
	this.z4x(); 

	let y6k = this.b5p[this.h4h];
	let w5c = this.w7k.w5c;
	let a7e = new x2v();
	a7e.q7j = y6k.X - w5c / 2;
	a7e.i1m = y6k.Y - w5c / 2;
	a7e.x9h(w5c);
	a7e.p6z(w5c);
 	let j0m = this.e9k();
	j1c(j0m, a7e, this.t0j.s0u(this.c7i));

	this.h4h++;
	if (this.h4h >= this.b5p.length)
	{
		let t5v = this.t0j.s0u(this.c7i);
		this.t0j.z1e(this.c7i, e5q.q6v);
		this.t0j.z1e(this.m6r, t5v);
		this.n5g();
		return true;
	}
	else
	{
		return false;
	}
}

t6e(u7k)
{
	if (u7k == this.c7i)
	{
		return;
	}
	let n1m = this.q2f(u7k);
 	let j0m = this.e9k();
	j1c(j0m, n1m, this.t0j.s0u(u7k));
}

t9b()
{
	if (!this.w7k.k3c)
	{
    return;
  }

 	let z8u = this.w7k.z8u;
	let p0b = this.w7k.p0b;
	let w6d = this.w7k.w6d;
	let w5c = this.w7k.w5c;

	let g8m = new x2v();
	g8m.q7j = this.e7o + p0b + w6d;
	g8m.i1m = this.g4q + p0b + w6d;
	g8m.x9h(c4f * w5c + 2 * z8u);
	g8m.p6z(c4f * w5c + 2 * z8u);

 	let j0m = this.e9k();
  let o5b = g2t(j0m, w6d-6);

  t9b(j0m,
    g8m,
    this.w7k,
    o5b,
    l8m.i2w,
    this.n7y,
    this.h8h,
    w6d);
}

s0h(u7k, color)
{
	let rect = this.q2f(u7k);
	let j0m = this.e9k();
  j0m.save();
  j0m.globalAlpha = 0.25; 
	j0m.fillStyle = color;
	j0m.fillRect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());
  j0m.restore();
}

a1t()
{
	if (this.q9k)
	{
		if (!this.d2r.q6v())
		{
      let color = "#800080"; 
			this.s0h(this.d2r.q4c, color);
			this.s0h(this.d2r.r9j, color);
		}
  }
}

y1l()
{
	for (const b6j of this.v6u.c5z)
	{
		this.g4w(b6j);
	}
}

g4w(b6j)
{
	let rect = this.q2f(b6j.u7k);
	let s4a = '';
	switch (b6j.type)
	{
		case c7m.a5z:
			s4a = h1g;
			break;
		case c7m.g7b:
			s4a = h2u;
			break;
		case c7m.l6c:
			s4a = c4m;
			break;
	}
	let b3g = this.m4z / 10;
	let j0m = this.e9k();
  /* dit is met roundrect
  p6f(rect, 5);
	j0m.lineWidth = b3g / 15;
	j0m.strokeStyle = s4a;
	w4z(j0m, rect.q7j, rect.i1m, rect.x7l(), rect.c6g(), 10);
  */
  
  j0m.save();
  j0m.globalAlpha = 0.7; 
	j0m.fillStyle = s4a;
	j0m.fillRect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());
  j0m.restore();
}

h7a()
{
	for (const c0j of this.p0d.l7l)
	{
		this.g2k(c0j);
	}
}

g2k(c0j)
{
	let q4c = c0j.q4c;
	let r9j = c0j.r9j;
	let i3h = c0j.type;

	let n3k = this.q2f(q4c);
	let t4u = this.q2f(r9j);

	let z4v = n3k.q7j + n3k.x7l()/2;
	let o9f = n3k.i1m + n3k.c6g()/2;
	let l5e = new b4c(z4v, o9f);

	let o3n = t4u.q7j + t4u.x7l()/2;
	let l2c = t4u.i1m + t4u.c6g()/2;

	let e0v = (o3n-z4v)*(o3n-z4v) + (l2c-o9f)*(l2c-o9f);
	let c0b = Math.sqrt(e0v);

	let y7x = (this.t0j.c9m(q4c)) ? 0 : n3k.x7l() / 4;
	c0b -= y7x;
	let u4m = (this.t0j.c9m(r9j)) ? 0 : n3k.x7l() / 4;
	c0b -= u4m;

	let v4r = 5;
	let p7x = 5 * v4r;
	let l3j = 7 * v4r;

	let n9a = z4v + y7x;
	let n3y = o9f;

	let b9q = n9a + c0b - 1;
	let k7p = o9f;

	let c7c = b9q - l3j;
	let j4c = o9f;

	let h9k = Math.atan2((o3n - z4v), (o9f - l2c));

  
	let s2x = [];
  let r6n = 10; 
	s2x.push(new b4c(c7c, j4c));
	s2x.push(new b4c(c7c - r6n, j4c - p7x));
	s2x.push(new b4c(b9q, k7p));
	s2x.push(new b4c(c7c - r6n, j4c + p7x));
	s2x.push(new b4c(c7c, k7p));
	let i1k = [];
	for (let i = 0; i <= 4; i++)
	{
		i1k.push(x0b(s2x[i], l5e, h9k - Math.PI / 2));
	}

	let j0m = this.e9k();
  j0m.save();
  j0m.globalAlpha = 0.7;

 	let o3z = '';
	switch (i3h)
	{
		case c3j.u2h:
			o3z = e6m;
			break;
		case c3j.x2b:
			o3z = b0x;
			break;
		case c3j.b9j:
			o3z = i8h;
			break;
	}
 	j0m.fillStyle = o3z;
  j0m.strokeStyle = o3z;
	j0m.beginPath();
	j0m.moveTo(i1k[0].X, i1k[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		j0m.lineTo(i1k[i].X, i1k[i].Y);
	}
	j0m.closePath();
	j0m.fill();

  
	s2x.length = 0;
	s2x.push(new b4c(n9a, n3y - v4r));
	s2x.push(new b4c(n9a, n3y + v4r));
	s2x.push(new b4c(c7c, n3y + v4r));
	s2x.push(new b4c(c7c, n3y - v4r));
	i1k.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		i1k.push(x0b(s2x[i], l5e, h9k - Math.PI / 2));
	}
	if (z4v == o3n)
	{
		if (i1k[0].Y != i1k[1].Y)
		{
			i1k[0].Y = i1k[1].Y;
		}
		if (i1k[2].Y != i1k[3].Y)
		{
			i1k[2].Y = i1k[3].Y;
		}
	}
	if (o9f == l2c)
	{
		if (i1k[0].X != i1k[1].X)
		{
			i1k[0].X = i1k[1].X;
		}
		if (i1k[2].X != i1k[3].X)
		{
			i1k[2].X = i1k[3].X;
		}
	}
	j0m.beginPath();
	j0m.moveTo(i1k[0].X, i1k[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		j0m.lineTo(i1k[i].X, i1k[i].Y);
	}
	j0m.closePath();
	j0m.fill();
  j0m.restore();
}

f8g()
{
	let p0b = this.w7k.p0b;
	let w6d = this.w7k.w6d;
	let b3g = this.w7k.w5c;
	let rect = new x2v();
	rect.q7j = this.k6l - p0b - w6d + 1;
	rect.i1m = this.d7t - p0b - w6d;
	rect.d7v = this.d7t;
	rect.h7x = this.k6l - 1;
	return rect;
}

}

const h4r = 14;

const k5t =
{
	x4w : 0
};

const l6y =
{
	x4w : 0
};

const p9u =
{
	r9x : 0,
	f7a : 1,
};

const l8m =
{
	a3y: 0,
	e5u: 1,
	i2w: 2,
	o8m: 3,
	l5d: 4,
};

class j6p
{

constructor()
{
	this.a7k = k5t.x4w;
	this.j9d = 1; 
	this.p0b = 0;
	this.w6d = h4r;
	this.z8u = 2;
	this.w5c = 32;
	this.r2t = 20;
	this.k3c = true;
	this.i1y = p9u.f7a;
	this.u0k = true;
}

w8u()
{
	let r8e = new j6p();
	r8e.a7k = this.a7k;
	r8e.j9d = this.j9d;
	r8e.p0b = this.p0b;
	r8e.w6d = this.w6d;
	r8e.z8u = this.z8u;
	r8e.w5c = this.w5c;
	r8e.r2t = this.r2t;
	r8e.k3c = this.k3c;
	r8e.i1y = this.i1y;
	r8e.u0k = this.u0k;
	return r8e;
}

m4z()
{
	return this.w5c * c4f + 2 * (this.p0b + this.w6d + this.z8u);
}

b2d(rect)
{
	let w = rect.x7l();
	let h = rect.c6g();
	let t8c = 0;
	if (w < h)
	{
		t8c = w;
	}
	else
	{
		t8c = h;
	}
	if (this.w6d)
	{
		for (this.w5c = 2; this.w5c < 1000; this.w5c++)
		{
			this.w6d = (this.w5c / 100) * this.r2t;
			if (this.w6d < h4r)
			{
				this.w6d = h4r;
			}
			let size = 2 * (this.p0b + this.w6d + this.z8u) + c4f * this.w5c;
			if (size > t8c)
			{
				break;
			}
		}
		this.w5c--;
		this.w6d = (this.w5c / 100) * this.r2t;
		if (this.w6d < h4r)
		{
			this.w6d = h4r;
		}
	}
	else
	{
		for (this.w5c = 2; this.w5c < 1000; this.w5c++)
		{
			let size = 2 * (this.p0b + this.z8u) + c4f * this.w5c;
			if (size > t8c)
			{
				break;
			}
		}
		this.w5c--;
	}
	return this.m4z();
}

}


class u9g
{

constructor()
{
	this.b2u = new o8k();
	this.i2z = new o8k();
	this.p0d = new s7c();
	this.v6u = new x6l();
	this.h0q = new w3p();
 	this.t6j = new w3p();
	this.s3u = 0;
	this.w4r = false;
	this.j4r = false;
	this.n5e = 0;
	this.q9c = 0;
	this.l8d = '';
}

}

const f1x =
[
	"#F7C42B",  
	"#F327F3",  
	"#26BCBC",  
	"#2727F3",  
	"#298F8F",  
	"#94612A",  
	"#8D2727",  
	"#F4F428",  
	"#F22626",  
	"#F3F3F3",  
	"#8F298F",  
	"#28F428",  
	"#288E28",  
	"#272727",  
	"#919191",  
	"#28F4F4"   
];

function p6f(rect, p3a)
{
	rect.q7j += p3a;
	rect.h7x -= p3a;
	if (rect.q7j > rect.h7x)
	{
		rect.q7j = rect.h7x;
	}
	rect.i1m += p3a;
	rect.d7v -= p3a;
	if (rect.i1m > rect.d7v)
	{
		rect.i1m = rect.d7v;
	}
}

function r0q(z4d, z5g, t9y, d6x)
{
	z4d.drawImage(t9y, d6x.q7j, d6x.i1m, d6x.x7l(), d6x.c6g(),
		z5g.q7j, z5g.i1m, z5g.x7l(), z5g.c6g());
}

function w4z(j0m, x, y, width, height, w7u)
{
	j0m.beginPath();
	j0m.moveTo(x, y + w7u);
	j0m.lineTo(x, y + height - w7u);
	j0m.arcTo(x, y + height, x + w7u, y + height, w7u);
	j0m.lineTo(x + width - w7u, y + height);
	j0m.arcTo(x + width, y + height, x + width, y + height-w7u, w7u);
	j0m.lineTo(x + width, y + w7u);
	j0m.arcTo(x + width, y, x + width - w7u, y, w7u);
	j0m.lineTo(x + w7u, y);
	j0m.arcTo(x, y, x, y + w7u, w7u);
	j0m.stroke();
}

function x0b(t2z, l5e, h6c)
{
	let p = new b4c();
	p.X = (Math.cos(h6c) * (t2z.X - l5e.X)) - (Math.sin(h6c) * (t2z.Y - l5e.Y)) + l5e.X;
	p.Y = (Math.sin(h6c) * (t2z.X - l5e.X)) + (Math.cos(h6c) * (t2z.Y - l5e.Y)) + l5e.Y;
	return p;
}

function t7s(j0m, rect, r8s)
{
	let left = rect.q7j;
	let top = rect.i1m;
	let l1s = rect.h7x;
	let x2h = rect.d7v;

	j0m.fillStyle = p4u;
	j0m.fillRect(rect.q7j, rect.i1m, rect.x7l(), rect.c6g());

	if (r8s.r9x())
	{
		return;
	}

	let c2w = r8s.p5k();
	let q4r = 0;
	if (c2w > 8)
	{
		q4r = (l1s - left) / 8;
	}
	else
	{
		q4r = (l1s - left) / c2w;
	}
	let x6h = left - q4r;
	let a3z = top;
	let y4l = x6h + q4r;
	let g5b = 0;
	if (c2w > 8)
	{
		g5b = (x2h - top + 1) / 2;
	}
	else
	{
		g5b = x2h - top + 1;
	}

	let t9j = top + g5b - 1;
	let i2f = 0;
	for (let i = 0; i < 16; i++)
	{
		if (r8s.d0p(i))
		{
			x6h += q4r;
			y4l += q4r;
			if (i2f == 7 || i2f == 15 ||
				(i2f < 8 && i2f == c2w - 1))
			{
				y4l = l1s;
			}
			if (i2f == 8)
			{
				x6h = left;
				y4l = x6h + q4r;
				a3z = top + g5b;
				t9j = x2h;
			}
			let w9g = new x2v(x6h, a3z, y4l, t9j);
			j0m.fillStyle = f1x[i];
			j0m.fillRect(w9g.q7j, w9g.i1m, w9g.x7l(), w9g.c6g());
			i2f++;
		}
	}
}




class i7n
{

constructor()
{
	this.u6v = '';
	this.y5m = null;
}

}

class l3a
{

constructor()
{
	this.o1w = [];
}

add(img)
{
	let j7l = new i7n();
	j7l.u6v = img.id;
	j7l.y5m = img;
	this.o1w.push(j7l);
}

y5m(u6v)
{
	for (const i9a of this.o1w)
	{
		if (i9a.u6v.toLowerCase() == u6v.toLowerCase())
		{
			return i9a.y5m;
		}
	}
	return null;
}

}
const y6a 				= "#00FFFF";
const g5o 			= "#000000";
const r6v 				= "#0000FF";
const x9d 			= "#FFFBF0";
const x5m 			= "#808080";
const e2q 		= "#FF00FF";
const k3d 				= "#808080";
const q2h 			= "#008000";
const c8h 				= "#00FF00";
const r4g 			= "#C0C0C0";
const o7g 			= "#800000";
const l4p 		= "#A0A0A4";
const k4u 	= "#C0DCC0";
const l0p 				= "#000080";
const c7g 			= "#808000";
const z5s 			= "#800080";
const p4u 				= "#FF0000";
const q5a 			= "#C0C0C0";
const e6r 		= "#A6CAF0";
const n4c 				= "#008000";
const y7p 			= "#FFFFFF";
const b3p 			= "#FFFF00";

class b4c
{

constructor(x, y)
{
	if (x === undefined)
	{
		this.X = 0;
		this.Y = 0;
	}
	else
	{
		this.X = x;
		this.Y = y;
	}
}

w8u()
{
	let y0x = new b4c();
	y0x.q7j = this.X;
	y0x.i1m = this.Y;
	return y0x;
}

}

class x2v
{

constructor(left, top, l1s, x2h)
{
	if (left === undefined)
	{
		this.q7j = 0;
		this.i1m = 0;
		this.h7x = 0;
		this.d7v = 0;
	}
	else
	{
		this.q7j = left;
		this.i1m = top;
		this.h7x = l1s;
		this.d7v = x2h;
	}
}

w8u()
{
	let c5v = new x2v();
	c5v.q7j = this.q7j;
	c5v.i1m = this.i1m;
	c5v.h7x = this.h7x;
	c5v.d7v = this.d7v;
	return c5v;
}

x7l()
{
	return this.h7x - this.q7j + 1;
}

b2s()
{
	return this.h7x - this.q7j + 1;
}

x9h(width)
{
	this.h7x = this.q7j + width - 1;
}

c6g()
{
	return this.d7v - this.i1m + 1;
}

i0b()
{
	return this.d7v - this.i1m + 1;
}

p6z(height)
{
	this.d7v = this.i1m + height - 1;
}

i6u()
{
	this.q7j++;
	this.i1m++;
	this.h7x--;
	this.d7v--;
}

l4v(y6k)
{
	return y6k.X >= this.q7j &&
		y6k.X <= this.h7x &&
		y6k.Y >= this.i1m &&
		y6k.Y <= this.d7v;
}


}

class b2l
{

constructor(l7b)
{
	this.l7b = l7b;
	this.y0m = new o8k();
	this.s6h = new s0a();
	this.t6q = null;
	this.w7k = new j6p();
	this.l9i = true;
}

s6b()
{
	let j3m = window.devicePixelRatio;

	this.s6h.t2a.width = this.t6q.clientWidth * j3m;
	this.s6h.t2a.height = this.t6q.clientHeight * j3m;

	let p8x = 32 * j3m;
	let s0p = 32 * j3m;
	let a0b = this.s6h.t2a.width - p8x;
	let h2j = this.s6h.t2a.height - s0p;
	let w3w = h2j < a0b ? h2j : a0b;
	if (w3w < 128)
	{
		w3w = 128;
	}
	let rect = new x2v();
	rect.q7j = 0;
	rect.i1m = 0;
	rect.x9h(w3w);
	rect.p6z(w3w);
	this.w7k.w6d = w3w * 0.02;
  if (this.w7k.w6d < h4r)
  {
    this.w7k.w6d = h4r;
  }
	w3w = this.w7k.b2d(rect);
 	this.s6h.l6q(this.w7k);
	this.s6h.z4x();
}

h7b()
{
	this.s6h.h7b();
	this.s6h.z4x();
}

u4f()
{
	this.w7k.k3c = !this.w7k.k3c;
	this.s6h.l6q(this.w7k);
	this.s6h.z4x();
}

m0t()
{
	this.s6h.l6q(this.w7k);
	this.s6h.z4x();
}

e0q(e6h)
{
	this.y0m = e6h.i2z.w8u();
	this.s6h.j8l(this.y0m);
	this.s6h.x3c(e6h.p0d);
	this.s6h.h3l(e6h.v6u);
  
 	this.s6h.j0e(e6h.t6j);
	this.s6h.z4x();

	if (this.l9i)
	{
		f6u('playBackward' + this.l7b, e6h.w4r);
		f6u('goToBegin'+ this.l7b, e6h.w4r);
		f6u('playForward' + this.l7b, e6h.j4r);
		f6u('goToEnd' + this.l7b, e6h.j4r);
		f6u('autoPlay' + this.l7b, e6h.j4r);
	}
	else
	{
		f6u('goToBegin' + this.l7b, e6h.w4r);
		f6u('goToEnd' + this.l7b, e6h.j4r);
	}
}

j8l(t0j)
{
	let e6h = new u9g();
	e6h.i2z = t0j.w8u();
	this.j8l(e6h);
}

l6q(w7k)
{
  this.w7k = w7k.w8u();
}

}

class g0e
{

constructor(l7b)
{
	this.l7b = l7b;
  this.d5l = null;
	this.l9f = new e5o();
}

o5c(l9f)
{
	this.l9f = l9f.w8u();
	this.s0f();
}

s0f()
{
	let u8s = this.l9f.z0h.d1e.s5m();
	let o6r = this.l9f.d4a.d1e.s5m();

	let j0v = '';
	if (u8s.length && this.l9f.z0h.q9a)
	{
		j0v = this.l9f.z0h.q9a.toString();
	}
	let o9y = '';
	if (u8s.length && this.l9f.z0h.i9k.length)
	{
		o9y = this.l9f.z0h.i9k.toString();
	}

	let q3k = '';
	if (o6r.length && this.l9f.d4a.q9a)
	{
		q3k = this.l9f.d4a.q9a.toString();
	}
	let u6y = '';
	if (o6r.length && this.l9f.d4a.i9k.length)
	{
		u6y = this.l9f.d4a.i9k.toString();
	}

	let x9e = this.l9f.z0h.d1e.r0d(1);
	let w7l = this.l9f.d4a.d1e.r0d(1);

	let d6z = '';
	let y7s = '';
	if (!this.l9f.z0h.v4m.q6v() &&
		!this.l9f.d4a.v4m.q6v())
	{
		d6z = this.l9f.z0h.v4m.o6w();
		y7s = this.l9f.d4a.v4m.o6w();
	}

	let p6q = k7k(this.l9f.m1u);
	let m5m = this.l9f.m5m.i9k;
	if (!this.l9f.m5m.s3z.q6v())
	{
		m5m += " ";
		m5m += this.l9f.m5m.s3z.r0s.toString();
	}
	let t7e = '';
	if (!this.l9f.a0m.q6v())
	{
		t7e = this.l9f.a0m.toString("dd-mm-yyyy");
	}
	let g1t = '';
	if (!this.l9f.g1t.q6v())
	{
		g1t = '</br>' + '[' + this.l9f.g1t.u6v + ']';
	}

	let a7a = document.getElementById("nota-container"+this.l7b);
	let s6p = a7a.clientHeight;
	let x0v = 200;

  let index = this.l7b;
  let i4f = this.l9f.m5m.i4f;

	let e5b = true;
	if (this.d5l.clientWidth >= 374 && s6p >= x0v)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + u8s + "</span>";
    s += 					"<span class=\"rating\">" + j0v + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + d6z + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + p6q + "</span>";
		s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + o6r + "</span>";
		s +=          "<span class=\"rating\">" + q3k + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + y7s + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "<span>" + o9y + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + m5m + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + i4f + "</span>";
		s +=          "<span class=\"gameDate\">" + t7e + "</span>";
    s +=          "<span class=\"annotator\">" + g1t + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + u6y + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
		s +=      "</tr>";
		s +=    "</table>";
		this.d5l.innerHTML = s;

		
		
		let m0s = Math.trunc(this.d5l.clientWidth / 10);
		if (m0s < 24) m0s = 24;
    
		
		
		
		
		
		
	}
	else if (this.d5l.clientWidth >= 300 && s6p >= x0v)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + x9e + "</span>";
    s +=          "<span class=\"rating\">" + j0v + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + d6z + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + p6q + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + w7l + "</span>";
    s +=          "<span class=\"rating\">" + q3k + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + y7s + "</span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + o9y + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + m5m + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + i4f + "</span>";
    s +=          "<span class=\"gameDate\">" + t7e + "</span>";
		s +=          "<span class=\"annotator\">" + g1t + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + u6y + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.d5l.innerHTML = s;
	}
	else if (this.d5l.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + x9e + "</span>";
    s +=          "<span class=\"rating\">" + j0v + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + p6q + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + w7l + "</span>";
    s +=          "<span class=\"rating\">" + q3k + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.d5l.innerHTML = s;
	}
	else
	{
		
		e5b = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + x9e + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + p6q + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + w7l + "</span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.d5l.innerHTML = s;
	}

	if (e5b)
	{
		let c7p = 16;
		if (this.d5l.clientWidth < 400)
		{
			c7p = 16;
		}
		else if (this.d5l.clientWidth < 500)
		{
			c7p = 24;
		}
		else
		{
			c7p = 32;
		}
    if (this.l9f.z0h.b4a != y2m.r9x)
    {
  		let i1t = document.getElementById("whitePlayerNation"+this.l7b);
	  	i1t.src = "images/flags/" + c7p.toString() +"/" + h5j(this.l9f.z0h.b4a) + ".png";
		  i1t.height = c7p;
  		i1t.width = c7p;
    }
    if (this.l9f.d4a.b4a != y2m.r9x)
    {
  		let x8y = document.getElementById("blackPlayerNation"+this.l7b);
	  	x8y.src = "images/flags/" + c7p.toString() + "/" + h5j(this.l9f.d4a.b4a) + ".png";
		  x8y.height = c7p;
  		x8y.width = c7p;
    }
	}
}

}

class m1c
{

constructor(l7b)
{
	this.l7b = l7b;
	this.l9f = new e5o();
	this.q0o = new b2l(l7b);
	this.o1c = new v3w(l7b);
	this.o1c.i4m.t3w = this; 
	this.g1d = new e1q();
}

h7b()
{
	this.q0o.h7b();
}

u4f()
{
	this.q0o.u4f();
}

m0t()
{
	this.q0o.m0t();
	this.o1c.i4m.m0t();
}

c3d(i4g, d0h, h1j, b9l)
{
	this.i7y(b9l, h1j);
}

i7y(b9l, h1j)
{
	this.l9f = b9l.h6y.w8u();
	this.o5c();
	this.o1c.i4m.z3f(b9l.y8a, h1j);
}

o5c()
{
	this.o1c.c4b.o5c(this.l9f);
}

g2e(e6h)
{
	this.q0o.e0q(e6h);
  this.p8a();
}

m8c()
{
	if (this.g1d.o4r())
	{
		this.g1d.q0e();
	}
	else
	{
		if (!this.o1c.i4m.v7m())
		{
      
			this.g1d.t3w = this; 
			this.g1d.j7v();
			this.o1c.i4m.t0l();
		}
	}
}

p8a()
{
}

}

const o3l =
{
	t8m : 0,
	j8u : 1,
	l4s : 2,
	d8i : 3,
	s4n : 4,
 	w3v : 5,
	m1u : 6,
	y8a : 7,
	r0s : 8,
	event : 9,
	w6a : 10
};

const r3w =
{
	r9x : 0,
	g6i : 1,
	z4y : 2
};

let a3h = 0;
let p4t = 0;
let j9b = 0;
let p8t = 0;
let v0a = 0;
let v9s = 0;
let q2s = 0;
let t2m = 0;

let z4y = false;

function t8e(f, s)
{
	let z6g = f.h6y.z0h.d1e.u6v();
	let w3d = s.h6y.z0h.d1e.u6v();
	if (z6g < w3d)
	{
		return z4y ? -1 : 1;
	}
	if (z6g > w3d)
	{
		return z4y ? 1 : -1;
	}
	z6g = f.h6y.d4a.d1e.u6v();
	w3d = s.h6y.d4a.d1e.u6v();
	if (z6g < w3d)
	{
		return -1;
	}
	if (z6g > w3d)
	{
		return 1;
	}
	return 0;
}

function e0p(f, s)
{
	let z6g = f.h6y.d4a.d1e.u6v();
	let w3d = s.h6y.d4a.d1e.u6v();
	if (z6g < w3d)
	{
		return z4y ? -1 : 1;
	}
	if (z6g > w3d)
	{
		return z4y ? 1 : -1;
	}
	z6g = f.h6y.z0h.d1e.u6v();
	w3d = s.h6y.z0h.d1e.u6v();
	if (z6g < w3d)
	{
		return -1;
	}
	if (z6g > w3d)
	{
		return 1;
	}
	return 0;
}

function j8c(f, s)
{
	let l1o = f.h6y.z0h.q9a - s.h6y.z0h.q9a;
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	l1o = f.h6y.d4a.q9a - s.h6y.d4a.q9a;
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	return t8e(f, s);
}

function m0o(f, s)
{
	let l1o = f.h6y.d4a.q9a - s.h6y.d4a.q9a;
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	l1o = f.h6y.z0h.q9a - s.h6y.z0h.q9a;
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	return t8e(f, s);
}

function g5q(f, s)
{
	let l1o = f.h6y.z0h.b4a - s.h6y.z0h.b4a;
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	l1o = f.h6y.d4a.b4a - s.h6y.d4a.b4a;
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	return t8e(f, s);
}

function y9e(f, s)
{
	let l1o = f.h6y.d4a.b4a - s.h6y.d4a.b4a;
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	l1o = f.h6y.z0h.b4a - s.h6y.z0h.b4a;
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	return t8e(f, s);
}

function u8e(f, s)
{
	let l1o = f.h6y.m1u - s.h6y.m1u;
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	return t8e(f, s);
}

function w2y(f, s)
{
	let l1o = s.h6y.a0m.a0m() - f.h6y.a0m.a0m();
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	return t8e(f, s);
}

function k4d(f, s)
{
	let c9e = f.h6y.m5m.i9k;
	let i2k = s.h6y.m5m.i9k;
	if (c9e < i2k)
	{
		return z4y ? -1 : 1;
	}
	if (c9e > i2k)
	{
		return z4y ? 1 : -1;
	}
	let l1o = f.h6y.m5m.s3z.a0m() - s.h6y.m5m.s3z.a0m();
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	l1o = f.h6y.w6a - s.h6y.w6a;
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	l1o = f.h6y.h8a - s.h6y.h8a;
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	return t8e(f, s);
}

function k8r(f, s)
{
	let l1o = s.h6y.w6a - f.h6y.w6a;
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	l1o = s.h6y.h8a - f.h6y.h8a;
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	return t8e(f, s);
}

function a2u(f, s)
{
	let l1o = s.l3n - f.l3n;
	if (z4y)
	{
		l1o = -l1o;
	}
	if (l1o < 0) return -1;
	if (l1o > 0) return 1;
	return t8e(f, s);
}

class h2g
{

constructor(l7b)
{
	this.l7b = l7b;
	this.z2m = [];
	this.k2o = null;
	this.l2o = null;
	this.s3w = null;
	this.u4j = [];
	this.b6b = [];
	this.w2j = -1;
	this.a4b = r3w.r9x;
	this.h3c = 0;
  this.k0p = null;
}

x0j()
{
	let s = "";
	s += "<tr class=\"grid-header-row\">";
	s += "<th class=\"grid-header-cell grid-player\">White</th>";
	s += "<th class=\"grid-header-cell grid-rating\">RatW</th>";
 	s += "<th class=\"grid-header-cell grid-flag\">FlgW</th>";
	s += "<th class=\"grid-header-cell grid-player\">Black</th>";
	s += "<th class=\"grid-header-cell grid-rating\">RatB</th>";
 	s += "<th class=\"grid-header-cell grid-flag\">FlgB</th>";
	s += "<th class=\"grid-header-cell grid-result\">Res</th>";
	s += "<th class=\"grid-header-cell grid-moves\">Len</th>";
	s += "<th class=\"grid-header-cell grid-year\">Year</th>";
	s += "<th class=\"grid-header-cell grid-event\">Event</th>";
	s += "<th class=\"grid-header-cell grid-round\">Rnd</th>";
	s += "</tr>";
	this.s3w.innerHTML = s;
	this.u4j = this.s3w.getElementsByTagName("TH");
	let l7b = this.l7b;

 	this.u4j[o3l.t8m].onclick = this.w1p.bind(this);
	this.u4j[o3l.j8u].onclick = this.m7j.bind(this);
  this.u4j[o3l.l4s].onclick = this.p9b.bind(this);
	this.u4j[o3l.d8i].onclick = this.w1p.bind(this);
	this.u4j[o3l.s4n].onclick = this.q4s.bind(this);
  this.u4j[o3l.w3v].onclick = this.q6p.bind(this);
	this.u4j[o3l.m1u].onclick = this.k6a.bind(this);
	this.u4j[o3l.y8a].onclick = this.v4p.bind(this);
	this.u4j[o3l.r0s].onclick = this.e2l.bind(this);
	this.u4j[o3l.event].onclick = this.o0h.bind(this);
	this.u4j[o3l.w6a].onclick = this.d8s.bind(this);
}

b6n(z2m)
{
	this.z2m = z2m;
	this.s6b();
}

h9n()
{
	this.a0e("grid-player");
	this.a0e("grid-rating");
 	this.a0e("grid-flag");
	this.a0e("grid-result");
	this.a0e("grid-moves");
	this.a0e("grid-year");
	this.a0e("grid-event");
	this.a0e("grid-round");
}

l6s()
{
	this.j3g("grid-player", a3h);
	this.j3g("grid-rating", p4t);
 	this.j3g("grid-flag", t2m);
	this.j3g("grid-result", j9b);
	this.j3g("grid-moves", p8t);
	this.j3g("grid-year", v0a);
	this.j3g("grid-event", v9s);
	this.j3g("grid-round", q2s);

}

a0e(z7f)
{
	let x3p = this.k2o.getElementsByClassName(z7f);
	for (let i = 0; i < x3p.length; i++) {
		x3p[i].style.display = "none";
	}
}

m9g(z7f)
{
	let x3p = this.k2o.getElementsByClassName(z7f);
	for (let i = 0; i < x3p.length; i++) {
		x3p[i].style.display = "table-cell";
	}
}

j3g(z7f, width)
{
	let x3p = this.k2o.getElementsByClassName(z7f);
	for (let i = 0; i < x3p.length; i++) {
		x3p[i].style.width = (width) + "px";
	}
}

s6b()
{
	this.h3c = this.k2o.clientWidth;
	this.h3c -= 17;
	if (this.h3c < 100)
	{
		this.h3c = 100;
	}
	a3h = 200;
	p4t = 52;
	j9b = 34;
	p8t = 50;
	v0a = 52;
	v9s = 200;
	q2s = 50;
  t2m = 30;

 
	let s1a = document.getElementsByClassName("tdreplay")[0];
	if (s1a.clientWidth <= z3x)
	{
		let d7i = 0.7;
		a3h *= d7i;
		p4t *= d7i;
		j9b *= d7i;
		p8t *= d7i;
		v0a *= d7i;
		v9s *= d7i;
		q2s *= d7i;
	}
	this.y0y();
}

a2m()
{
	this.h9n();
	this.l6s();

  let o5k = 2.8;
  let k6k = 2.8;
  let u5b = 17;
	if (this.h3c <= 400)
	{
		this.m9g("grid-player");
		this.m9g("grid-result");
    this.m9g("grid-year");
		this.m9g("grid-event");
    let h5g = 5 * (o5k + k6k);
		let i6i = j9b + v0a;
		let g3u = Math.trunc((this.h3c - i6i - h5g - u5b) / 3);
		this.j3g("grid-player", g3u);
		this.j3g("grid-event", g3u);
	}
	else if (this.h3c <= 580)
	{
		this.m9g("grid-player");
		this.m9g("grid-rating");
		this.m9g("grid-result");
		this.m9g("grid-year");
		this.m9g("grid-event");
    let h5g = 7 * (o5k + k6k);
		let i6i = 2 * p4t + j9b + v0a;
		let g3u = Math.trunc((this.h3c - i6i - h5g - u5b) / 3);
		this.j3g("grid-player", g3u);
		this.j3g("grid-event", g3u);
	}
	else
	{
		this.m9g("grid-player");
		this.m9g("grid-rating");
    this.m9g("grid-flag");
		this.m9g("grid-result");
		this.m9g("grid-moves");
		this.m9g("grid-year");
		this.m9g("grid-event");
		this.m9g("grid-round");
    let h5g = 11 * (o5k + k6k);
		let i6i = 2 * p4t + 2 * t2m + j9b + p8t + v0a + q2s;
		let g3u = Math.trunc((this.h3c - i6i - h5g - u5b) / 3);
		this.j3g("grid-player", g3u);
		this.j3g("grid-event", g3u);
	}
}

y0y()
{
	let c7p = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.l7b + "\">"; 
	for (const b9l of this.z2m)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += b9l.h6y.z0h.d1e.b1i();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (b9l.h6y.z0h.q9a)
		{
			s += b9l.h6y.z0h.q9a;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (b9l.h6y.z0h.b4a != y2m.r9x)
		{
      let z8f = "images/flags/" + c7p.toString() + "/" + h5j(b9l.h6y.z0h.b4a) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += z8f;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += b9l.h6y.d4a.d1e.b1i();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (b9l.h6y.d4a.q9a)
		{
			s += b9l.h6y.d4a.q9a;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (b9l.h6y.d4a.b4a != y2m.r9x)
		{
      let z8f = "images/flags/" + c7p.toString() + "/" + h5j(b9l.h6y.d4a.b4a) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += z8f;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-result\">";
		s += k7k(b9l.h6y.m1u);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += b9l.l3n;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += b9l.h6y.a0m.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += b9l.h6y.m5m.i9k;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += b9l.h6y.e5p();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.l2o.innerHTML = s;

  let c9p = document.getElementById('gameList' + this.l7b);
  c9p.addEventListener('click', this.z1d.bind(this));

	this.a2m();
}

r9g(b0a)
{
	if (b0a != this.w2j)
	{
		this.w2j = b0a;
		this.a4b = r3w.g6i;
	}
	else
	{
		if (this.a4b == r3w.r9x)
		{
			this.a4b = r3w.g6i;
		}
		else if (this.a4b == r3w.g6i)
		{
			this.a4b = r3w.z4y;
		}
		else if (this.a4b == r3w.z4y)
		{
			this.a4b = r3w.g6i;
		}
	}
	z4y = (this.a4b == r3w.z4y);

	for (const t0g of this.u4j)
	{
		let s = t0g.n7t;
		let a6q = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let t7b = a6q.replace(" grid-header-sort grid-header-sort-asc", "");
		t0g.n7t = t7b;
	}
	let b6q = this.u4j[this.w2j];
	if (this.a4b == r3w.z4y)
	{
		b6q.n7t = b6q.n7t + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		b6q.n7t = b6q.n7t + " grid-header-sort grid-header-sort-asc";
	}
}

w1p(event)
{
	this.r9g(o3l.t8m);
	this.z2m.sort(t8e);
	this.y0y();
}

m7j(event)
{
	this.r9g(o3l.j8u);
	this.z2m.sort(j8c);
	this.y0y();
}

p9b(event)
{
	this.r9g(o3l.l4s);
	this.z2m.sort(g5q);
	this.y0y();
}

n4a(event)
{
	this.r9g(o3l.d8i);
	this.z2m.sort(e0p);
	this.y0y();
}

q4s(event)
{
	this.r9g(o3l.s4n);
	this.z2m.sort(m0o);
	this.y0y();
}

q6p(event)
{
	this.r9g(o3l.w3v);
	this.z2m.sort(y9e);
	this.y0y();
}

k6a(event)
{
	this.r9g(o3l.m1u);
	this.z2m.sort(u8e);
	this.y0y();
}

e2l(event)
{
	this.r9g(o3l.r0s);
	this.z2m.sort(w2y);
	this.y0y();
}

o0h(event)
{
	this.r9g(o3l.event);
	this.z2m.sort(k4d);
	this.y0y();
}

d8s(event)
{
	this.r9g(o3l.w6a);
	this.z2m.sort(k8r);
	this.y0y();
}

v4p(event)
{
	this.r9g(o3l.y8a);
	this.z2m.sort(a2u);
	this.y0y();
}

z1d(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.k0p)
  {
    this.k0p(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class b8t
{

constructor()
{
	this.t0j = new o8k();
	this.w5n = new o8k();
	this.c9t = false;
	this.s1p = 0;
	this.l7a = 0;
	this.z5w = [];
}

}

var tooltip = null;

class f1z
{

constructor(l7b)
{
	this.l7b = l7b;
	this.l1h = new l8k();
	this.t3w = null;
	this.u5a = new b8t();
	this.x5b = null;
	this.s2l = [];
	this.g4l = [];
  this.a3q = [];
  this.n4j = [];
	this.k1k = -1;
	this.w7k = new j6p();
  this.r5w = null;
	this.z8s = true;
	this.v7h = false;
	this.y1b = [];
	this.q8j = 0;
  this.b4j = true;
  this.p1n = false;
	this.x7c = false;
	this.u3g = true;
  this.k0m = false;
}

z3f(z0e, h1j)
{
	this.l1h = z0e.w8u();
  this.l1h.y2n();
	this.r5w = this.l1h.b7j(h1j);
	this.c3d();
}

j6o(g4i)
{
  this.i4z(this.a3q[g4i]);
}

c3d()
{
	this.x0l();
	this.t0l();
  this.q7i(this.l1h.b1y(this.r5w));
}

x0l()
{
	let d8j = new c8l();
  d8j.u2v(this.b4j);
	d8j.j0g(this.k0m);
  /*
	d8j.setOneLine(this.k0m);
  */
	d8j.p2d(this.x7c);
	d8j.i7j(this.u3g);
	d8j.g0r(this.l1h);

  this.x5b.innerHTML = d8j.m1m.a9w;
  this.s2l = this.x5b.getElementsByClassName("tdmove");
  this.g4l = this.x5b.getElementsByClassName("tdcomment");

	this.s9p("tdmove");
	this.s9p("tdcomment");
	this.s9p("tddia");
	this.s9p("tdmedal");
  this.s9p("tdcolors");

  this.a1b("tdmove");

	this.l8a();
	this.t7s();
}

s9p(q6r)
{
	let l7b = this.l7b;
	let q8e = this.x5b.getElementsByClassName(q6r);
	for (const g4e of q8e)
	{
    let h1j = g4e.getAttribute('movenr');
    g4e.onclick = this.m7r.bind(this, h1j);
	}
}

a1b(q6r)
{
	let l7b = this.l7b;
	let q8e = this.x5b.getElementsByClassName(q6r);
	for (const g4e of q8e)
	{
    let h1j = g4e.getAttribute('movenr');
    g4e.onmouseover = this.h7r.bind(this, h1j);
    g4e.onmouseleave = this.c9s.bind(this, h1j);
	}
}

m0t()
{
	this.l8a();
}

l8a()
{
	let h4t = this.x5b.getElementsByClassName("tddia");
	for (const d5e of h4t)
	{
		let s6h = new s0a();
		s6h.t2a = d5e.getElementsByTagName("canvas")[0];
		let w3w = this.w7k.m4z();
		s6h.t2a.width = w3w;
		s6h.t2a.height = w3w;
		s6h.l6q(this.w7k);
		let g5y = this.l1h.b7j(d5e.getAttribute('movenr'));
    s6h.j8l(this.l1h.t0j(g5y));
    if (g5y.u9l)
    {
  		s6h.x3c(g5y.u9l.p0d());
	  	s6h.h3l(g5y.u9l.v6u());
    }
    else
    {
   		s6h.x3c(this.l1h.z1q());
	  	s6h.h3l(this.l1h.x1d());
    }
		s6h.z4x();
	}
}

t7s()
{
	let m1q = this.x5b.getElementsByClassName("tdmedal");
	for (const d6j of m1q)
	{
		let t2a = d6j.getElementsByTagName("canvas")[0];
		t2a.width = 40;
		t2a.height = 16;
		let j0m = t2a.getContext('2d');
		let rect = new x2v();
		rect.x9h(40);
		rect.p6z(16);
		let g5y = this.l1h.b7j(d6j.getAttribute('movenr'));
    if (g5y.u9l)
    {
  		t7s(j0m, rect, g5y.u9l.r8s());
    }
    else
    {
  		t7s(j0m, rect, this.l1h.n8y());
    }
	}
}

t0l()
{
	let e6h = new u9g();
	e6h.b2u = this.l1h.b2u();
  e6h.i2z = this.l1h.t0j(this.r5w);
  if (this.p5g())
  {
    e6h.p0d = this.l1h.z1q();
	  e6h.v6u = this.l1h.x1d();
  }
  else
  {
  	e6h.p0d = this.r5w.u9l.p0d();
	  e6h.v6u = this.r5w.u9l.v6u();
  }
  
	if (this.v7m())
	{
		e6h.h0q = new w3p();
	}
	else
	{
    let h5r = this.r5w.w8u();
		this.l1h.h5p(h5r);
		e6h.h0q = h5r.u9l.d1l().w8u();
	}
  
 	if (!this.p5g())
	{
		e6h.t6j = this.r5w.u9l.d1l();
	}
	e6h.s3u = this.s3u();
	e6h.w4r = this.w4r();
	e6h.j4r = this.j4r();
	e6h.n5e = 0; 
  e6h.q9c = this.l1h.q9c(this.r5w);
	if (this.t3w)
	{
		this.t3w.g2e(e6h);
	}
}

b8h(q0d)
{
	this.r5w = this.l1h.b7j(q0d);
	this.t0l();
}

s2i(f8e)
{
	switch (f8e)
	{
		case g1r:
		case r3o:
		case w4t:
			this.u4i();
			break;
		case z4m:
		case o0y:
		case j0n:
			this.y8v();
			break;
		case g6j:
		case z7o:
		case e0y:
			this.j0j();
			break;
		case z7h:
		case o4v:
		case k6e:
			this.o5o();
			break;
		case j5w:
			break;
		case g8w:
			break;
	}
}

b7w()
{
  if (this.r5w.q5v)
  {
    this.q7i(this.r5w.q5v.s2u);
  }
  else
  {
    this.q7i(0);
  }
}

v5r()
{
	this.b7w();
	this.t0l();
}

w4r()
{
	return !this.p5g();
}

p5g()
{
	return this.l1h.p5g(this.r5w);
}

v7m()
{
	return this.l1h.v7m(this.r5w);
}

s3u()
{
	return this.l1h.s3u(this.r5w);
}

h0q(a7i)
{
	if (this.v7m())
	{
		return null;
	}
	else
	{
    let h5r = this.r5w.w8u();
		this.l1h.u3j(h5r, a7i);
		return h5r.u9l;
	}
}

y8v()
{
	if (this.w4r())
	{
		this.l1h.p3n(this.r5w);
		this.v5r();
	}
}

j4r()
{
	return !this.v7m();
}

u4i()
{
	if (this.j4r())
	{
		this.f7i(0);
	}
}

f7i(index)
{
	let v2y = this.l1h.a0u(this.r5w);
	if (index >= 0 && index < v2y)
	{
		this.l1h.u3j(this.r5w, index);
		this.v5r();
	}
}

o5o()
{
	if (this.j4r())
	{
		this.l1h.j4o(this.r5w);
		this.v5r();
	}
}

j0j()
{
	if (this.w4r())
	{
		this.r5w = this.l1h.l2x();
		this.v5r();
	}
}

k3q()
{
	if (this.z8s)
	{
		this.y8y();
	}
	else
	{
		this.v0l();
	}
}

k2y()
{
	if (this.v7h)
	{
		this.v7h = false;
		this.t3w.q0o.s6h.n5g();
		this.t0l();
	}
	else
	{
		this.t0l();
	}
}


v0l()
{
	if (this.v7m())
	{
		this.t0l();
		return;
	}
  if (chess)
  {
  	this.f7i(0);
    return;
  }

  
 	let u9l = this.h0q(0);
  if (!u9l.l7a())
 	{
  	this.f7i(0);
	  return;
 	}

  
	let m0l = false;
	if (!this.u5a.c9t)
	{
		m0l = true;
	}
	else
	{
		m0l = false;
		if (this.u5a.s1p < this.u5a.l7a)
		{
			if (this.u5a.w5n.h1t(this.u5a.t0j))
			{
				m0l = true;
			}
		}
	}
	if (m0l)
	{
		this.u5a.t0j = this.l1h.t0j(this.r5w);
		this.u5a.w5n = this.l1h.t0j(this.r5w);
		this.u5a.c9t = true;
		this.u5a.s1p = 0;
		this.u5a.z5w.length = 0;
		this.u5a.z5w.push(u9l.q4c()); 
		this.u5a.l7a = u9l.l7a();
		if (this.u5a.l7a > 1)
		{
			let o7x = j3k(this.u5a.w5n, u9l.d1l());
			for (let i = 0; i < this.u5a.l7a - 1; i++)
			{
				this.u5a.z5w.push(o7x[i]);
			}
		}
		this.u5a.z5w.push(u9l.o4t());
	}
	if (this.u5a.s1p < this.u5a.l7a)
	{
		let g0w = u9l.g0w();
		let x0u = this.u5a.z5w[this.u5a.s1p];
		let o4t = this.u5a.z5w[this.u5a.s1p + 1];
		this.u5a.w5n.z1e(x0u, e5q.q6v);
		this.u5a.w5n.z1e(o4t, g0w);
		this.u5a.t0j = this.u5a.w5n.w8u();
		this.u5a.s1p++;
		let e6h = new u9g();
		e6h.i2z = this.u5a.w5n.w8u();
		e6h.w4r = this.w4r();
		e6h.j4r = this.j4r();
		if (this.t3w)
		{
			this.t3w.g2e(e6h);
		}
	}
	else
	{
		this.u5a.c9t = false;
		this.f7i(0);
	}
}



y8y()
{
	if (this.v7h)
	{
		let x7p = this.t3w.q0o.s6h.v1n();
		if (x7p)
		{
			if (this.q8j < this.y1b.length - 1)
			{
				this.t3w.q0o.s6h.c0g(this.y1b[this.q8j],
					this.y1b[this.q8j+1], true);
				this.q8j++;
			}
			else
			{
				this.v7h = false;
				this.f7i(0);
			}
		}
		return;
	}

	if (this.v7m())
	{
		this.t0l();
		return;
	}

	this.y1b.length = 0;
	let u9l = this.h0q(0);
	let l7a = u9l.l7a();
	if (l7a == 0)
	{
		this.y1b.push(u9l.q4c()); 
		this.y1b.push(u9l.r9j());
	}
	else
	{
		this.y1b.push(u9l.q4c());
		if (l7a > 1)
		{
      let t0j = this.l1h.t0j(this.r5w);
      let o7x = j3k(t0j, u9l.d1l());
			for (let i = 0; i < l7a - 1; i++)
			{
				this.y1b.push(o7x[i]);
			}
		}
		this.y1b.push(u9l.r9j());
	}

	this.t3w.q0o.s6h.c0g(this.y1b[0],
		this.y1b[1], l7a > 0);
	this.q8j = 1;
	this.v7h = true;
}

o7l(z3y)
{
	for (const m of this.s2l)
	{
		if (m.getAttribute('movenr') == z3y)
		{
			return m;
		}
	}
	return null;
}

m6c(z3y)
{
	let j5l = [];
	for (const t1d of this.g4l)
	{
		if (t1d.getAttribute('movenr') == z3y)
		{
			j5l.push(t1d);
		}
	}
	return j5l;
}

i4z(b8s)
{
	let o3y = b8s.offsetTop;
	let d5m = b8s.scrollHeight;

	let z2e = this.x5b.offsetTop;
	let b7x = this.x5b.scrollTop;
	let i3x = this.x5b.clientHeight;
	let k2b = this.x5b.scrollHeight;
	let x8g = o3y - z2e;
	if (x8g >= b7x && x8g + d5m <= b7x + i3x - 1)
	{
		
	}
	else
	{
		
		let top = x8g - (i3x / 2);
		if (top < 0) top = 0;
		this.x5b.scrollTop = top;
	}
}

d1t(r1l, n7v)
{
	let y0q = r1l;
	while (y0q.e2y)
	{
		y0q = y0q.e2y;
	}
 	while (y0q)
	{
    if (this.l1h.r7w(y0q.s2u) == false)
    {
 	  	let b8s = this.o7l(y0q.s2u);
  	  if (b8s)
 		  {
  		  b8s.classList.add(n7v);
 	  	}
    }
    y0q = y0q.l3h;
  }
}

q7i(h1j)
{
  
 	for (const u9l of this.s2l)
	{
 		u9l.classList.remove('tdcurline');
    u9l.classList.remove('tdcurnode1');
	}
 	for (const t1d of this.g4l)
	{
 		t1d.classList.remove('tdcurline');
	}

  
	if (this.k1k >= 0)
	{
		let b8s = this.o7l(this.k1k);
		if (b8s)
		{
			b8s.classList.remove('tdcurmove');
		}
	}

  
  let i6b = true;
  let n1f = this.l1h.y1o(this.r5w);
 	for (const r1l of n1f)
	{
    if (r1l.e2y && i6b)
		{
		  this.d1t(r1l, 'tdcurnode1');
      i6b = false;
    }
    else
    {
      if (this.l1h.r7w(r1l.s2u) == false)
      {
   	  	let f0d = this.o7l(r1l.s2u);
	  	  if (f0d)
  		  {
	  		  f0d.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let b8s = this.o7l(h1j);
	if (b8s)
	{
    b8s.classList.remove('tdcurline');
		b8s.classList.add('tdcurmove');
		this.i4z(b8s);
	}
	this.k1k = h1j;
}

b7t()
{
	let u9l = this.o7l(this.k1k);
	if (!u9l) return;
	let x1r = u9l.offsetTop;
	let m3w = null;
	let u9m = -1;
	for (const m of this.s2l)
	{
		if (m.offsetTop < x1r)
		{
			if (m.offsetTop > u9m)
			{
				m3w = m;
				u9m = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (m3w)
	{
		this.m2p(m3w.getAttribute('movenr'));
	}
	else
	{
		if (this.s2l.length)
		{
			this.m2p(this.s2l[0].getAttribute('movenr'));
		}
	}
}

v0o()
{
	let u9l = this.o7l(this.k1k);
	if (!u9l)
	{
		this.u4i();
		return;
	}
	let x1r = u9l.offsetTop;
	for (const m of this.s2l)
	{
		if (m.offsetTop > x1r)
		{
			this.m2p(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.s2l.length)
	{
		this.m2p(this.s2l[this.s2l.length - 1].getAttribute('movenr'));
	}
}

m2p(q0d)
{
  
  
  
  
  if (this.r5w.q5v)
  {
    if (this.r5w.q5v.s2u == q0d)
    {
      return;
    }
  }
  else
  {
    if (q0d == 0)
    {
      return;
    }
  }
	
  this.b8h(q0d);
  this.q7i(q0d);
	
}

b1y()
{
	return this.l1h.b1y(this.r5w);
}

l6q(w7k)
{
  this.w7k = w7k.w8u();
	this.w7k.p0b = 0;
	this.w7k.w6d = 0;
	this.w7k.w5c = 32;
  this.w7k.z8u = 2;
 	this.w7k.k3c = false;
}

b2u()
{
	return this.l1h.b2u();
}

x7e()
{
	return this.l1h.x7e();
}

c8c()
{
	return this.l1h.c8c(this.r5w);
}

u1n()
{
	return this.l1h.u1n();
}

m7r(h1j, event)
{
  this.m2p(h1j);
}

h7r(h1j, event)
{
  if (!this.p1n) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const g4e = event.currentTarget; 
  const rect = g4e.getBoundingClientRect();
  console.log(`x2v.q7j: ${rect.left}`);
  console.log(`x2v.i1m: ${rect.top}`);
  let i9p = rect.left;
  let o3w = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let s3y = this.w7k.m4z();

  if (i9p + s3y > viewportWidth)
  {
    i9p = viewportWidth - s3y - 5;
  }
  if (i9p < 5)
  {
    i9p = 5;
  }
  if (o3w + s3y > viewportHeight)
  {
    o3w = viewportHeight - s3y - 5;
  }
  if (o3w < 5)
  {
    o3w = 5;
  }

  let g5y = this.l1h.b7j(h1j);
  let t0j = this.l1h.t0j(g5y);
  tooltip.innerHTML = this.q8r(t0j);

  tooltip.style.left = `${i9p}px`;
  tooltip.style.top = `${o3w}px`;
  tooltip.classList.add('visible');
}

c9s(h1j, event)
{
  if (!this.p1n) return;
  tooltip.classList.remove('visible');
}

q8r(t0j)
{
  let s6h = new s0a();
  const tempCanvas = document.createElement('canvas');
	s6h.t2a = tempCanvas;
	let w3w = this.w7k.m4z();
	s6h.t2a.width = w3w;
	s6h.t2a.height = w3w;
	s6h.l6q(this.w7k);
  s6h.j8l(t0j);
  s6h.z4x();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="${imageDataURL}" alt="Chess Position" width="${boardSize}" height="${boardSize}">`;
}

}

class p6t
{

constructor()
{
	this.fontSize = 15;
  this.i0i = true;
 	this.z2z = true;
}

w8u()
{
  return Object.assign(new p6t(), this);
}

}
class v3w
{

constructor(l7b)
{
  this.c4b = new g0e(l7b);
  this.i4m = new f1z(l7b);
}

}

class e1q
{

constructor()
{
	this.l0j = false;
	this.t3w = null;
	this.i6l = null;
	this.v0e = 6;
	this.p3t = null;
	this.u7c = null;
	this.d0w = null;
	this.k1h = null;
	this.f2x = null;
	this.o4i = false;
}

j7v()
{
	this.l0j = false;
	this.m0x();
	this.p3t.classList.replace('autoPlay', 'autoStop');
	this.k1h.style.display = 'none';
	this.f2x.style.display = 'none';
	this.u7c.style.display = 'inline-block';
	this.d0w.style.display = 'inline-block';
	this.k8g();
	this.t3w.q0o.l9i = false;
}

q0e()
{
	if (this.i6l)
	{
		clearInterval(this.i6l);
		this.i6l = null;
		this.p3t.classList.replace('autoStop', 'autoPlay');
		this.k1h.style.display = 'inline-block';
		this.f2x.style.display = 'inline-block';
		this.u7c.style.display = 'none';
		this.d0w.style.display = 'none';
		this.t3w.q0o.l9i = true; 
		this.t3w.o1c.i4m.k2y();
	}
}

m0x()
{
	let l7b = this.t3w.l7b;
	this.i6l = setInterval(function(){ w0m(l7b); },
		this.t3w.o1c.i4m.z8s ? this.v0e * 2 : this.v0e * 100);
}

o4r()
{
	return this.i6l != null;
}

w4r()
{
	return !this.t3w.o1c.i4m.p5g();
}

j4r()
{
	return !this.t3w.o1c.i4m.v7m();
}

r6f()
{
	if (this.o4i)
	{
		return;
	}
	else
	{
		this.o4i = true;
	}
	if (!this.j4r())
	{
		this.q0e();
	}
	else
	{
		this.t3w.o1c.i4m.k3q();
	}
	this.o4i = false;
}

j1l()
{
	if (this.i6l)
	{
		if (this.v0e < 50)
		{
			this.v0e++;
			clearInterval(this.i6l);
			this.m0x();
			this.k8g();
		}
	}
}

z2k()
{
	if (this.i6l)
	{
		if (this.v0e > 1)
		{
			this.v0e--;
			clearInterval(this.i6l);
			this.m0x();
			this.k8g();
		}
	}
}

k8g()
{
	p2g(this.u7c, this.v0e < 50);
	p2g(this.d0w, this.v0e > 1);
}

}

let u4v = null;
let p3a = 0;
let d7h = null;

class b9s
{

constructor()
{
	this.index = 0;
	this.m9n = '';
	this.s1a = null;
	this.i9l = false;
	this.t3w = null;
	this.j3x = null;
  this.z2m = [];
	this.i0h = 0;
  this.j0p = 0;

	this.d1y = null;
	this.w7y = null;
	this.left = null;
	this.m9d = null;
	this.u0d = null;
	this.g1j = null;
	this.n0j = null;
	this.t6q = null;
	this.n4d = null;
	this.a1r = null;
	this.e4y = null;
 	this.r3f = null;
 	this.c6i = null;
	this.r9f = null;
	this.k1h = null;
	this.u7c = null;
	this.p3t = null;
	this.f2x = null;
	this.d0w = null;
	this.c6v = null;
 	this.x8h = null;
  this.f0l = null;
	this.q0s = null;
  this.y4e = null;
	this.v4x = null;
	this.u0c = null;
	this.k2o = null;
	this.t4y = null;
	this.p2y = null;
	this.y5i = null;
  this.y6r = null;
  this.m8n = null;
	this.v9y = null;
	this.l1s = null;
	this.f3q = null;
	this.q0w = null;
	this.w8t = null;

	this.a6x = null;
	this.q6c = null;
	this.l5h = null;
	this.p3e = null;

  
  this.o4u = null;
  this.k5r = null;
  this.g6s = null;
  this.g9i = null;
  this.q7b = null;
  this.q3r = null;
}

k7y(index, s1a, m9n)
{
	this.index = index;
	this.s1a = s1a;
	this.m9n = m9n;
	s1a.innerHTML = '';
	s1a.id = "replay";

  let s = '';
 	s += "<div class=\"rootParent\">";
	s +=   "<div id=\"root" + index + "\" class=\"root\">";

	s +=     "<div id=\"left" + index + "\" class=\"left\">";
	s +=       "<div id=\"leftContainer" + index + "\" class=\"leftContainer\">";
	s +=         "<div id=\"leftNest" + index + "\" class=\"leftNest\">";
	s +=           "<div id=\"leftNorth" + index + "\" class=\"leftNorth\">";
	s +=             "<div id=\"boardHolder" + index + "\" class=\"boardHolder\">";
	s +=               "<div id=\"boardPanel" + index + "\" class=\"boardPanel\">";
	s +=                 "<canvas id=\"boardCanvas" + index + "\" class=\"boardCanvas\"></canvas>";
	s +=               "</div>";
	s +=             "</div>";
	s +=             "<div id=\"belowBoard" + index + "\" class=\"belowBoard\">";
	s +=               "<div id=\"replayPanel" + index + "\" class=\"replayPanel\">";
	s +=                 "<button id=\"goToBegin" + index + "\" class=\"replayButton goToBegin\" title=\"Go to begin\"></button>";
	s +=                 "<button id=\"playBackward" + index + "\" class=\"replayButton playBackward\" title=\"Play backward\"></button>";
	s +=                 "<button id=\"playSlower" + index + "\" class=\"replayButton playSlower\" title=\"Slower\"></button>";
	s +=                 "<button id=\"autoPlay" + index + "\" class=\"replayButton autoPlay\" title=\"Auto play\"></button>";
	s +=                 "<button id=\"playForward" + index + "\" class=\"replayButton playForward\" title=\"Play forward\"></button>";
	s +=                 "<button id=\"playFaster" + index + "\" class=\"replayButton playFaster\" title=\"Faster\"></button>";
	s +=                 "<button id=\"goToEnd" + index + "\" class=\"replayButton goToEnd\" title=\"Go to end\"></button>";
	s +=                 "<button id=\"flipBoard" + index + "\" class=\"replayButton flipBoard\" title=\"Flip Board\"></button>";
	s +=                 "<button id=\"goToPrevious" + index + "\" class=\"replayButton loadPrevious\" title=\"Load previous game\"></button>";
	s +=                 "<button id=\"goToNext" + index + "\" class=\"replayButton loadNext\" title=\"Load next game\"></button>";
  s +=                 "<button id=\"showGameList" + index + "\" class=\"replayButton gameList\" title=\"Show Game List\"></button>";
	s +=                 "<button id=\"download" + index + "\" class=\"replayButton download\" title=\"Download PDN\"></button>";
	s +=                 "<button id=\"settings" + index + "\" class=\"replayButton settings\" title=\"Settings\"></button>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=           "<div id=\"leftSouth" + index + "\" class=\"leftSouth\">";
	s +=             "<div id=\"leftSouthNest" + index + "\" class=\"leftSouthNest\">";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
	s +=       "</div>";
	s +=     "</div>";

	s +=     "<div id=\"right" + index + "\" class=\"right\">";
	s +=       "<div id=\"rightNest" + index + "\" class=\"rightNest\">";
	s +=         "<div id=\"rightNorth" + index + "\" class=\"rightNorth\">";
	s +=           "<div id=\"nota-container" + index + "\" class=\"nota-container\">";
	s +=             "<div id=\"nota-header-container" + index + "\" class=\"nota-header-container\">";
	s +=               "<div id=\"headerPanel" + index + "\" class=\"headerPanel\"></div>";
	s +=             "</div>";
	s +=             "<div class=\"nota-moves-container\">";
	s +=               "<div id=\"nota-imoves-container" + index + "\" class=\"nota-imoves-container\">";
	s +=                 "<div id=\"movesPanel" + index + "\" class=\"movesPanel\"></div>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
	s +=         "</div>";
	s +=         "<div id=\"rightSouth" + index + "\" class=\"rightSouth\">";
	s +=         "</div>";
  s +=       "</div>";
	s +=     "</div>";

 	s +=     "<div id=\"listParent" + index + "\" class=\"listParent grid\">";
	s +=       "<div id=\"listHeader" + index + "\" class=\"grid-header grid-header-scrollbar\">";
	s +=         "<table id=\"listHeaderTable" + index + "\" class=\"grid-table\">";
	s +=         "</table>";
	s +=       "</div>";
	s +=       "<div id=\"listBody" + index + "\" class=\"listBody grid-body\">";
	s +=         "<table id=\"gameList" + index + "\" class=\"grid-table gamelist-table\"></table>";
	s +=       "</div>";
  s +=       "<div id=\"list-button-container" + index + "\" class=\"navButtonContainer\">";
	s +=  	     "<button id=\"hideGameList" + index + "\" class=\"navButton\" title=\"Hide Game List\">&lt; Back</button>";
  s +=       "</div>";
  s +=     "</div>";
	s +=   "</div>";
	s += "</div>";

  s1a.innerHTML = s;

	this.d1y = document.getElementById("rootParent"+index);
	this.w7y = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.m9d = document.getElementById("leftContainer"+index);
	this.u0d = document.getElementById("leftNest"+index);
	this.g1j = document.getElementById("leftNorth"+index);
	this.n0j = document.getElementById("boardHolder"+index);
	this.t6q = document.getElementById("boardPanel"+index);
	this.n4d = document.getElementById("boardCanvas"+index);
	this.a1r = document.getElementById("belowBoard"+index);
	this.e4y = document.getElementById("replayPanel"+index);
 	this.r3f = document.getElementById("goToPrevious"+index);
 	this.c6i = document.getElementById("goToNext"+index);
	this.r9f = document.getElementById("goToBegin"+index);
	this.k1h = document.getElementById("playBackward"+index);
	this.u7c = document.getElementById("playSlower"+index);
	this.p3t = document.getElementById("autoPlay"+index);
	this.f2x = document.getElementById("playForward"+index);
	this.d0w = document.getElementById("playFaster"+index);
	this.c6v = document.getElementById("goToEnd"+index);
  this.x8h = document.getElementById("flipBoard"+index);
  this.f0l = document.getElementById("download"+index);
	this.q0s = document.getElementById("showGameList"+index);
  this.y4e = document.getElementById("settings"+index);
	this.v4x = document.getElementById("leftSouth"+index);
	this.u0c = document.getElementById("leftSouthNest"+index);
	this.k2o = document.getElementById("listParent"+index);
	this.t4y = document.getElementById("listHeader"+index);
	this.p2y = document.getElementById("listHeaderTable"+index);
	this.y5i = document.getElementById("listBody"+index);
  this.y6r = document.getElementById("list-button-container"+index);
  this.m8n = document.getElementById("hideGameList"+index);
	this.v9y = document.getElementById("gameList"+index);
	this.l1s = document.getElementById("right"+index);
	this.f3q = document.getElementById("rightNest"+index);
	this.q0w = document.getElementById("rightNorth"+index);
	this.w8t = document.getElementById("rightSouth"+index);
	this.a6x = document.getElementById("nota-container"+index);
  this.a6x.style.fontSize = v2k.fontSize + 'px';
	this.q6c = document.getElementById("nota-header-container"+index);
	this.l5h = document.getElementById("headerPanel"+index);
	this.p3e = document.getElementById("movesPanel"+index);
}

x0j()
{
	this.s1a.style.display = 'block';
	this.u7c.style.display = 'none';
	this.d0w.style.display = 'none';
	this.k2o.style.display = 'none';

	this.i9l = false;
	if (this.s1a.clientWidth <= z3x)
	{
		this.w2o();
		this.i9l = true;
	}
	else
	{
		this.p2h();
		this.c3c();
	}
  this.o2k();
	let l7b = this.index;

	this.r9f.onclick = this.l1n.bind(this);
	this.k1h.onclick = this.y8v.bind(this);
	this.u7c.onclick = this.j1l.bind(this);
	this.p3t.onclick = this.n4u.bind(this);
	this.d0w.onclick = this.z2k.bind(this);
	this.f2x.onclick = this.u4i.bind(this);
	this.c6v.onclick = this.z0a.bind(this);
  this.r3f.onclick = this.s4j.bind(this);
  this.c6i.onclick = this.g0f.bind(this);
  this.x8h.onclick = this.h7b.bind(this);
 	this.f0l.onclick = this.x4l.bind(this);
	this.q0s.onclick = this.u9n.bind(this);
 	this.m8n.onclick = this.a0g.bind(this);

  this.y4e.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

	this.t3w = new m1c(this.index);
	this.t3w.q0o.s6h.h1s(this.n4d);
	this.t3w.q0o.t6q = this.t6q;
  this.t3w.q0o.l6q(j2m);
	this.t3w.o1c.c4b.d5l = this.l5h;
	this.t3w.o1c.i4m.x5b = this.p3e;
  this.t3w.o1c.i4m.l6q(j2m);
	this.t3w.g1d.p3t = this.p3t;
	this.t3w.g1d.u7c = this.u7c;
	this.t3w.g1d.d0w = this.d0w;
	this.t3w.g1d.k1h = this.k1h;
	this.t3w.g1d.f2x = this.f2x;

	this.j3x = new h2g(this.index);
	this.j3x.k2o = this.k2o;
	this.j3x.l2o = this.v9y;
	this.j3x.s3w = this.p2y;
	this.j3x.x0j();
	this.j3x.b6n(this.z2m);
  this.j3x.k0p = (v9y, index) => {
    this.c8k(v9y, index);
  };
	if (this.j3x.z2m.length)
	{
		this.c3d(0, 0);
	}
	else
	{
		let b9l = new j0c();
		this.t3w.c3d(null, 1, 0, b9l);
	}
}

g5t(m9n)
{
	this.m9n = m9n;
 	let j4a = this.m9n.split('\n');
	let w1q = 0;
	for (const l9m of j4a)
	{
		if (l9m.startsWith("[Event \""))
		{
			let i6d = w1q;
      let q7a = j4a.length;
   		let i9b = j4a.slice(i6d, q7a);
  		let t9d = new s5c(i9b);
	  	this.j3x.z2m[this.i0h] = t9d.e7g();
      break;
    }
    w1q++;
	}
  this.c3d(0, 0);
}

o2k()
{
	let j4a = this.m9n.split('\n');
	let t1a = [];
	let w1q = 0;
	for (const l9m of j4a)
	{
		if (l9m.startsWith("[Event \""))
		{
			t1a.push(w1q);
		}
		w1q++;
	}
	let i = 0;
	this.z2m = [];
	for (const z6v of t1a)
	{
		let i6d = z6v;
		let q7a = 0;
		if (i < t1a.length - 1)
		{
			q7a = t1a[i + 1];
		}
		else
		{
			q7a = j4a.length;
		}
		let i9b = j4a.slice(i6d, q7a);
		let t9d = new s5c(i9b);
		let b9l = t9d.e7g();
		this.z2m.push(b9l);
		i++;
	}
}

e2c()
{
	if (this.i9l || this.w7y.clientHeight <= z3x)
	{
		this.s1a.style.m5i = "0px";
		this.s1a.style.b3r = "0px";
		this.s1a.style.width = "100%";
		this.s1a.style.height = "88vh";
	}
	else
	{
		this.s1a.style.m5i = "1px solid gray";
		this.s1a.style.b3r = "1px solid gray";
		this.s1a.style.height = "88vh";
	}
}

g1s()
{
	this.e2c();

	this.left.style.width = "100%";

	let f7g = this.g1j.getBoundingClientRect();
	this.v4x.style.top = (f7g.height) + "px";
	this.c3c();

	this.x9n();
	this.p2h();
	this.c6m();
	this.a7c();
  this.f2e()
}

m4t()
{
	this.e2c();

	let i0z = this.w7y.getBoundingClientRect();
	this.left.style.width = (i0z.width * 0.50) + "px";
	let p5i = this.left.getBoundingClientRect();

	let f7g = this.g1j.getBoundingClientRect();
	this.v4x.style.top = (f7g.height) + "px";
	this.c3c();

	this.l1s.style.left = (p5i.width) + "px";
	this.l1s.style.width = (i0z.width - p5i.width) + "px";

	this.x9n();
	this.p2h();
	this.c6m();
	this.a7c();
  this.f2e()
}

p2h()
{
}

c0x()
{
  this.g1j.style.height = '100%';
  this.q0w.appendChild(this.a6x);
  this.a6x.style.height = '100%';
  this.l1s.style.display = 'block';
}

w2o()
{
  this.g1j.style.height = '70%';
  this.u0c.appendChild(this.a6x);
  this.a6x.style.height = '100%';
  this.l1s.style.display = 'none';
}

u9n(event)
{
	this.k2o.style.display = 'block';
  let p6s = this.k2o.clientHeight - this.t4y.clientHeight - this.y6r.clientHeight;
  this.y5i.style.height = p6s + "px";
	this.c6m();
}

a0g(event)
{
 	this.k2o.style.display = 'none';
}

a7c()
{
	this.t3w.o1c.c4b.s0f();
}

f2e()
{
}

c6m()
{
  this.j3x.s6b();
}

x9n()
{
	let f7g = this.g1j.getBoundingClientRect();
	let q9g = this.a1r.getBoundingClientRect();
	this.n0j.style.height = (f7g.height - q9g.height - 1) + "px";
	this.t3w.q0o.s6b();
}

c3c()
{
	let p3w = this.u0d.getBoundingClientRect();
	let f7g = this.g1j.getBoundingClientRect();
	let q6n = p3w.height - f7g.height;
	if (q6n < 0) q6n = 0;
	this.v4x.style.height = q6n + "px";
}

a3c()
{
  f6u('goToPrevious'+this.index, this.i0h > 0);
  f6u('goToNext'+this.index, this.i0h < this.j3x.z2m.length - 1);
}

i8g(e)
{
	this.t3w.q0o.s6h.mouseDown(e);
}

d4o(e)
{
	this.t3w.q0o.s6h.mouseMove(e);
}

n5l(e)
{
	this.t3w.q0o.s6h.mouseUp(e);
}

m6m(e)
{
	this.t3w.q0o.s6h.touchStart(e);
}

m3f(e)
{
	this.t3w.q0o.s6h.touchMove(e);
}

u3z(e)
{
	this.t3w.q0o.s6h.touchEnd(e);
}

j1l(event)
{
	this.t3w.g1d.j1l();
}

z2k(event)
{
	this.t3w.g1d.z2k();
}

y8v(event)
{
	this.t3w.g1d.q0e();
	this.t3w.o1c.i4m.y8v();
}

u4i(event)
{
	this.t3w.g1d.q0e();
	this.t3w.o1c.i4m.u4i();
}

l1n(event)
{
	this.t3w.g1d.q0e();
	this.t3w.o1c.i4m.j0j();
}

z0a(event)
{
	this.t3w.g1d.q0e();
	this.t3w.o1c.i4m.o5o();
}

n4u(event)
{
	this.t3w.m8c();
}

p7h()
{
 	if (this.j3x.z2m.length)
  {
    this.c3d(0, 0);
  }
}

s4j(event)
{
 	if (this.i0h > 0)
  {
    this.c3d(this.i0h - 1, 0);
  }
}

g0f(event)
{
  if (this.i0h < this.j3x.z2m.length - 1)
  {
    this.c3d(this.i0h + 1, 0);
  }
}

g2p()
{
	if (this.j3x.z2m.length)
  {
    this.i0h = this.j3x.z2m.length - 1;
    this.c3d(this.j3x.z2m.length - 1, 0);
	}
}

c3d(i0h, h1j)
{
  if (i0h >= 0 && i0h <= this.j3x.z2m.length - 1)
  {
    this.i0h = i0h;
  	this.t3w.c3d(null, 1, h1j, this.j3x.z2m[this.i0h]);
  }
  this.a3c();
}

h7b(event)
{
	this.t3w.h7b();
}

u4f()
{
	this.t3w.u4f();
}

e8c()
{
	if (this.s1a.clientWidth <= z3x)
	{
		if (this.i9l)
		{
			this.g1s();
		}
		else
		{
			this.w2o();
			this.i9l = true;
			this.g1s();
		}
	}
	else
	{
		if (!this.i9l)
		{
			this.m4t();
		}
		else
		{
			this.c0x();
			this.i9l = false;
			this.m4t();
		}
	}
}

c8k(v9y, index)
{
	this.c3d(index, 0);
  this.a0g();
}

x4l(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.m9n.length - 1)
  {
    if (this.m9n[i] == '[')
    {
        break;
    }
    i++;
  }
  let m9n = this.m9n.substring(i);
  a.href = window.URL.createObjectURL(new Blob([m9n], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

l2q()
{
  this.t3w.q0o.l6q(j2m);
  this.t3w.q0o.s6b();
  this.t3w.o1c.i4m.l6q(j2m);
  this.t3w.o1c.i4m.x0l();
  let a6x = document.getElementById("nota-container"+this.index);
  a6x.style.fontSize = v2k.fontSize + 'px';
}

async onSettingsClick()
{
  const dialog = new o1s();
  const { m1u } = await dialog.show();

  if (m1u === dialog.z6a)
  {
    this.l2q();
  }
}

}

class o1s
{

constructor()
{
  this.z6a = 1;
  this.x7m = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.h0i();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.k5r = this.dialog.querySelector(".piece-select");
  this.g6s = this.dialog.querySelector(".coordinates-checkbox");
  this.g9i = this.dialog.querySelector(".font-select");
  this.q7b = this.dialog.querySelector(".ok-button");
  this.q3r = this.dialog.querySelector(".cancel-button");

  this.q7b.onclick = this.n4n.bind(this);
 	this.q3r.onclick = this.m6w.bind(this);
}

h0i()
{
  const d4q = z9k();
  const s = `
    <dialog id="settingsDialog" class="settingsDialog">
      <h2>Settings</h2>

      <div class="settings-row">
        <span class="label-text">Pieces:</span>
        <select class="pieceSelect piece-select">
          ${d4q.map((t5v, i) => '<option value="' + i + '">' + t5v + '</option>').join('')}
        </select>
      </div>

      <div class="settings-row">
        <span class="label-text">Coordinates:</span>
        <input type="checkbox" class="coordinates-checkbox">
      </div>

      <div class="settings-row">
        <span class="label-text">Notation font size:</span>
        <select class="movesFontSizeSelect font-select">
          <option value="12">Small</option>
          <option value="15">Default</option>
          <option value="18">Medium</option>
          <option value="22">Large</option>
        </select>
      </div>

      <form method="dialog">
        <button value="ok" class="settingsButton ok-button">OK</button>
        <button value="cancel" class="settingsButton cancel-button">Cancel</button>
      </form>
    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

n4n(event)
{
  j2m.j9d = this.k5r.value;
  localStorage.setItem(b4h, j2m.j9d);
  q0z(j2m.j9d);
  j2m.k3c = this.g6s.checked;
  localStorage.setItem(p9p, j2m.k3c.toString());
  v2k.fontSize = this.g9i.value;
  localStorage.setItem(d0f, v2k.fontSize);
  this.dialog.close('ok');
}

m6w(event)
{
  this.dialog.close('cancel');
}

async show()
{
  y3p = true;

  this.k5r.value = j2m.j9d;
  this.g6s.checked = j2m.k3c;
  this.g9i.value = v2k.fontSize;

  const m1u = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.z6a : this.x7m);
    };
    this.dialog.showModal();
  });

  y3p = false;
  return { m1u };
}

}

const c1t = 38;
const q5w = 40;
const z4m = 37;
const o0y = 37;
const j0n = 52;
const g1r = 39;
const r3o = 39;
const w4t = 54;
const g6j = 36;
const z7o = 36;
const e0y = 55;
const z7h = 35;
const o4v = 35;
const k6e = 49;
const k4s = 187;
const h1o = 107;
const c9v = 61;
const t9u = 42;
const b2a = 170;
const g8w = 8;
const j5w = 13;
let d5n = false;
let y3p = false;

const z3x = 767;
let o8n = [];
let e5f = -1;
let t7q = new l3a();

let j2m = new j6p();
let v2k = new p6t();

window.onload = function()
{
  f0j();
  l9v();
  r3g();
};

document.onkeydown = e4n;

function e4n(e)
{
  if (e.f8e === "Escape")
  {
    return;
  }

  if (y3p)
  {
    
    e.preventDefault();
    return;
  }

	let m2k = e || window.event;
	let f8e = m2k.keyCode;

	if (d5n) return;
	d5n = true;

	if (e5f == -1) return;

	if (e.ctrlKey)
	{
		if (f8e == 66) 
		{
				o8n[e5f].h7b();
				e.preventDefault();
				
				
				
		}
		d5n = false;
		return;
	}
	if (f8e)
	{
		
		m3k(f8e);
		e.preventDefault(); 
		
	}
	d5n = false;
}

function w0m(l7b)
{
	o8n[l7b].t3w.g1d.r6f();
}

function m3k(f8e)
{
	if (e5f == -1) return;

	if (f8e == c1t)
	{
		o8n[e5f].t3w.o1c.i4m.b7t();
	}
	else if (f8e == q5w)
	{
		o8n[e5f].t3w.o1c.i4m.v0o();
	}
	else if (f8e == z4m || f8e == o0y || f8e == j0n ||
	f8e == g1r || f8e == r3o || f8e == w4t ||
	f8e == g6j || f8e == z7o ||
	f8e == z7h || f8e == o4v)
	{
		o8n[e5f].t3w.o1c.i4m.s2i(f8e);
	}
	else if (f8e == k4s || f8e == h1o || f8e == c9v)
	{
		o8n[e5f].doFlipBoard();
	}
}

function e9c(b3y, r5n)
{
	let r7i = b3y.length;
	let p5k = 0;

	function check(n)
	{
		if (n == r7i)
		{
			r5n();
		}
	}

	for (let i = 0; i < b3y.length; ++i)
	{
    let s6k = b3y[i];
		let img = document.createElement("img");
		img.id = b3y[i].replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
		t7q.add(img);
		img.addEventListener("load", function()
		{
			p5k++;
			check(p5k);
		});
		img.src = s6k;
	}
}

function f0j()
{
 	e9c(f1c(), r1a);
  
  
}

function e8c()
{
	for (const d9s of o8n)
	{
		d9s.e8c();
	}
}

function r1a()
{
	let d4p = document.getElementsByClassName("tdreplay");
	for (const s1a of d4p)
	{
		let d9s = new b9s();
		d9s.k7y(o8n.length, s1a, s1a.innerHTML);
		d9s.x0j();
		o8n.push(d9s);
	}
	if (o8n.length)
	{
		e5f = 0;
	}
	window.addEventListener("resize", e8c);
	e8c();
}

function f6u(u6v, v9m)
{
	let button = document.getElementById(u6v);
	if (v9m)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function p2g(button, v9m)
{
	if (v9m)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const p9p = 'Coordinates';
const b4h = 'Pieces';
const d0f = 'MovesFontSize';
const d0k = 'SearchTime';
const u3u = 'MultiPV';
const o0c = 'Threads';
const x2n = 'Memory';

function r3g()
{
  const coordinatesValue = localStorage.getItem(p9p);
  if (coordinatesValue === null)
  {
    j2m.k3c = true;
  }
  else
  {
    j2m.k3c = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(b4h);
  if (piecesValue === null)
  {
    j2m.j9d = 0;
  }
  else
  {
    j2m.j9d = piecesValue;
  }
  q0z(j2m.j9d);

  const movesFontSizeValue = localStorage.getItem(d0f);
  if (movesFontSizeValue === null)
  {
    v2k.fontSize = 15;
  }
  else
  {
    v2k.fontSize = movesFontSizeValue;
  }
}
const d0x =
[
	[ o7f.r9x, 			  	""      ],
	[ o7f.b9l,  		 		"game"  ],
	[ o7f.m5x,    		 	"match" ],
	[ o7f.m5m,  	"tourn" ],
	[ o7f.p8l,   			"swiss" ],
	[ o7f.g1b,    	"k.o."  ],
	[ o7f.d7b,	"simul" ],
	[ o7f.f8m,	"schev" ]
];

const q7y =
[
	[ v8z.r9e, ""        ],
	[ v8z.r8h,  "(rapid)" ],
	[ v8z.u4n,  "(blitz)" ],
	[ v8z.i1a,   "(corr)"  ]
];

const a5l =
[
	[ g5x.r9x,     		 ""     ],
	[ g5x.z0p,       		 "$145" ],
	[ g5x.g9u, 		 "$142" ],
	[ g5x.w3q, 		 "$143" ],
	[ g5x.q6i, "$144" ],
	[ g5x.t3h,  "$140" ],
	[ g5x.f5p, "$141" ]
];

const n2u =
[
	[ j6q.r9x,     		""   ],
	[ j6q.o2z,       	"$1" ],
	[ j6q.m3d, 			  	"$2" ],
	[ j6q.g0c,	"$5" ],
	[ j6q.s1m, 		  "$6" ],
	[ j6q.p9h,  	"$3" ],
	[ j6q.r3s, 		  "$4" ],
	[ j6q.j3i, 		"$22" ],
	[ j6q.u5i, 		"$8" ]
];

const x8t =
[
	[ w9y.r9x,     						""     ],
	[ w9y.u2o,      "$18"  ],
	[ w9y.t1y, 					"$16"  ],
	[ w9y.q9l,	"$14"  ],
	[ w9y.c6n, 						"$11"  ],
	[ w9y.f4p,  						"$13"  ],
	[ w9y.e7e,  "$15"  ],
	[ w9y.z8i, 					"$17"  ],
	[ w9y.o0n, 			"$19"  ],
	[ w9y.s3s,					"$44"  ],
	[ w9y.h5b, 					"$132" ],
	[ w9y.g3w,  					"$36"  ],
	[ w9y.u2h, 							"$40"  ],
	[ w9y.f6o, 			  "$138" ],
	[ w9y.v5c,	"$32"  ],
	[ w9y.g9p, 							"$146" ]
];

const i2y =
[
	[ c2u.r9x,     		""     ],
	[ c2u.x3o,     "$51"  ],
	[ c2u.i7t, 			"$52"  ],
	[ c2u.y8o,	    		"$53"  ]
];

const k7h =
[
	[ u4d.z6z, 			 	""       ],
	[ u4d.i7t,   		"middle" ],
	[ u4d.s3v,   	   	 	"low"    ]
];


function j0q(v4e)
{
	return q7y[v4e][1];
}

function h2n(j7i)
{
	for (const v4e of q7y)
	{
		if (v4e[1] == j7i)
		{
			return v4e[0];
		}
	}
	return v8z.r9e;
}

function x3i(type)
{
	return d0x[type][1];
}

function k1s(j7i)
{
	for (const c3b of d0x)
	{
		if (c3b[1] == j7i)
		{
			return c3b[0];
		}
	}
	return o7f.r9x;
}

function g5g(a4t)
{
	return a5l[a4t][1];
}

function h3t(j7i)
{
	for (const a4t of a5l)
	{
		if (a4t[1] == j7i)
		{
			return a4t[0];
		}
	}
	return g5x.r9x;
}

function w5e(style)
{
	return n2u[style][1];
}

function g9x(j7i)
{
	for (const style of n2u)
	{
		if (style[1] == j7i)
		{
			return style[0];
		}
	}
	return j6q.r9x;
}

function q8p(value)
{
	return x8t[value][1];
}

function z9w(j7i)
{
	for (const value of x8t)
	{
		if (value[1] == j7i)
		{
			return value[0];
		}
	}
	return w9y.r9x;
}

function p8d(i0g)
{
	return i2y[i0g][1];
}

function p4e(j7i)
{
	for (const a6t of i2y)
	{
		if (a6t[1] == j7i)
		{
			return a6t[0];
		}
	}
	return c2u.r9x;
}

function e5t(j7i)
{
	return j7i.length == 0 ||
		j7i == "?" ||
		j7i == "-" ||
		j7i == "*" ||
		j7i == "????.??.??";
}

function h8y(j7i)
{
	if (e5t(j7i))
	{
		return "";
	}
	else
	{
		return j7i.trim();
	}
}

function c1d(j7i, p0n)
{
	if (e5t(j7i))
	{
		return p0n;
	}
	else
	{
		return r7g(j7i, p0n);
	}
}

function b3t(value)
{
	return value ? value.toString() : "";
}

function s6z(d2w)
{
	return k7h[d2w][1];
}

function y7g(j7i)
{
	for (const d2w of k7h)
	{
		if (d2w[1] == j7i)
		{
			return d2w[0];
		}
	}
	return u4d.z6z;
}

function q0u(m4a)
{
	if (!m4a)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(m4a / 60);
		let y8l = m4a % 60;
		return div.toString() + "." + y8l.toString().padStart(2, '0');
	}
}

function f9j(m1u)
{
	switch (m1u)
	{
		case o8u.b6m:
			return "1-0";
		case o8u.z4x:
			return "1/2-1/2";
		case o8u.o0g:
			return "0-1";
		default:
			return "*";
	}
}

function v5t(q9a)
{
	if (q9a > 0 && q9a <= 9999)
	{
		return q9a.toString().padStart(4, '0');
	}
	else
	{
		return "-";
	}
}

function q8a(a0m)
{
	if (a0m.q6v())
	{
		return "????.??.??";
	}
	let j7i = '';
	if (a0m.r0s)
	{
		j7i = a0m.r0s.toString().padStart(4, '0');
	}
	else
	{
		j7i = "????";
	}
	j7i += ".";
	if (a0m.s6s)
	{
		let o9l = a0m.s6s.toString().padStart(2, '0');
		j7i += o9l;
	}
	else
	{
		j7i += "??";
	}
	j7i += ".";
	if (a0m.f7j)
	{
		let k2h = a0m.f7j.toString().padStart(2, '0');;
		j7i += k2h;
	}
	else
	{
		j7i += "??";
	}
	return j7i;
}

function t9z(c1i)
{
	if (e5t(c1i))
	{
		return new j6w();
	}
	else
	{
		let a0m = new j6w();
		a0m.h7c("yyyy.mm.dd", c1i);
		return a0m;
	}
}

function t1z(c1i, m5m)
{
	m5m.s6n = (c1i.indexOf("team") != -1);
	m5m.type = o7f.r9x;
	for (const c3b of d0x)
	{
		if (c1i.indexOf(c3b[1]) != -1)
		{
			m5m.type = c3b[0];
			break;
		}
	}
	m5m.v4e = v8z.r9e;
	for (const v4e of q7y)
	{
		if (c1i.indexOf(v4e[1]) != -1)
		{
			m5m.v4e = v4e[0];
			break;
		}
	}
}

function d4m(c1i, l9f)
{
	l9f.w6a = 0;
	l9f.h8a = 0;
	let g5y = c1i.indexOf(".");
	if (g5y != -1)
	{
		let f9i = c1i.substr(0, g5y);
		l9f.w6a = r7g(f9i, 0);
		let v5s = c1i.substr(g5y + 1, c1i.length);
		g5y = v5s.indexOf(".");
		if (g5y != -1)
		{
			f9i = v5s.substr(0, g5y);
			l9f.h8a = r7g(f9i, 0);
		}
		else
		{
			l9f.h8a = r7g(v5s, 0);
		}
	}
	else
	{
		l9f.w6a = r7g(c1i, 0);
	}
}

function e2e(l9f)
{
	let c1i = '';
	if (l9f.h8a)
	{
		c1i = l9f.w6a.toString() + "." + l9f.h8a.toString();
	}
	else if (l9f.w6a)
	{
		c1i = l9f.w6a.toString();
	}
	return c1i;
}

function c2k(c1i)
{
	if (c1i == "2-0" || c1i == "20" || c1i == "1-0" || c1i == "10")
	{
		return o8u.b6m;
	}
	else if (c1i == "1-1" || c1i == "11" || c1i == "1/2-1/2" ||
		c1i == "1/21/2" || c1i == "0.5-0.5")
	{
		return o8u.z4x;
	}
	else if (c1i == "0-2" || c1i == "02" || c1i == "0-1" || c1i == "01")
	{
		return o8u.o0g;
	}
	else
	{
		return o8u.r9x;
	}
}

function a3k(c1i)
{
	return r7g(c1i, 0);
}

function x6r(c1i)
{
	return m7d(c1i);
}

function a8s(c1i)
{
	return l7d(c1i);
}

function c0k(value)
{
	return value ? "1" : "";
}

function r5r(c1i)
{
	return c1i == "1";
}

function p7t(t3d)
{
	let l9f = new e5o();

	
	l9f.z0h.d1e.k6w(h8y(t3d.t8m));
	if (!e5t(t3d.c4p))
	{
		l9f.z0h.v4m.u6v = h8y(t3d.c4p);
		l9f.z0h.v4m.s2u = c1d(t3d.l6w, 0);
		if (!e5t(t3d.g3t))
		{
			let a0m = t9z(t3d.g3t);
			l9f.z0h.v4m.r0s = a0m.r0s;
		}
		l9f.z0h.v4m.z7p = r5r(t3d.l9z);
		l9f.z0h.v4m.b4a = h2l(h8y(t3d.i9e));
	}
	l9f.z0h.q9a = a3k(h8y(t3d.j8u));
	l9f.z0h.s4t = a8s(h8y(t3d.i0c));
	l9f.z0h.i9k = h8y(t3d.z5p);
	l9f.z0h.b4a = o9z(h8y(t3d.w4g));

	
	l9f.d4a.d1e.k6w(h8y(t3d.d8i));
	if (!e5t(t3d.c0f))
	{
		l9f.d4a.v4m.u6v = h8y(t3d.c0f);
		l9f.d4a.v4m.s2u = c1d(t3d.r5f, 0);
		if (!e5t(t3d.v3c))
		{
			let a0m = t9z(t3d.v3c);
			l9f.d4a.v4m.r0s = a0m.r0s;
		}
		l9f.d4a.v4m.z7p = r5r(t3d.y6y);
		l9f.d4a.v4m.b4a = h2l(h8y(t3d.v7x));
	}
	l9f.d4a.q9a = a3k(h8y(t3d.s4n));
	l9f.d4a.s4t = a8s(h8y(t3d.u2m));
	l9f.d4a.i9k = h8y(t3d.t2l);
	l9f.d4a.b4a = o9z(h8y(t3d.l4d));

	
	l9f.m5m.i9k = h8y(t3d.j3q);
	l9f.m5m.i4f = h8y(t3d.k9w);
	l9f.m5m.s3z = t9z(t3d.t4a);
	l9f.m5m.w7r = t9z(t3d.q9u);

	t1z(h8y(t3d.c3b), l9f.m5m);
	
	
	
	let h6j = h2n(t3d.h6j);
	if (h6j != v8z.r9e)
	{
		l9f.m5m.v4e = h6j;
	}
	l9f.m5m.b4a = h2l(h8y(t3d.u4e));
	l9f.m5m.s8i = c1d(t3d.s3f, 0);
	let c3b = k1s(t3d.c3b);
	if (c3b != o7f.r9x)
	{
		l9f.m5m.type= c3b;
	}
	l9f.m5m.n9f = c1d(t3d.t3i, 0);
	l9f.m5m.s6n = r5r(t3d.d6p);
	l9f.m5m.i8y = r5r(t3d.a8o);
	l9f.m5m.f7y = r5r(t3d.k8c);
	l9f.m5m.v9n = r5r(t3d.j3j);

	
	l9f.g1t.u6v = h8y(t3d.g1t);

	
	l9f.c2d.i9k = h8y(t3d.y1n);
	l9f.c2d.t5h = h8y(t3d.m1r);
	l9f.c2d.r7n = t9z(t3d.m9w);
	l9f.c2d.y0s = c1d(t3d.n7s, 0);
	l9f.c2d.z4p = t9z(t3d.u4b);
	l9f.c2d.d2w = y7g(t3d.n4b);

	
	l9f.i9k.i9k = h8y(t3d.i9k);

	
	l9f.a0m = t9z(t3d.a0m);
	l9f.m1u = c2k(h8y(t3d.m1u));
	l9f.t0x = x6r(h8y(t3d.t0x));
	d4m(h8y(t3d.w6a), l9f);

	
	let q8e = c1d(t3d.q8e, 0);
	l9f.q8e.c5s(q8e);

  
  l9f.id.w2r = t3d.w2r;

	return l9f;
}

function r9v(l9f)
{
	let t3d = new l5s();

	
	t3d.t8m = l9f.z0h.d1e.u6v();
	if (l9f.z0h.v4m.u6v.length)
	{
		t3d.c4p = l9f.z0h.v4m.u6v;
		if (l9f.z0h.v4m.s2u)
		{
			t3d.l6w = l9f.z0h.v4m.s2u;
		}
		if (l9f.z0h.v4m.r0s)
		{
			let j5j = new j6w();
			j5j.r0s = l9f.z0h.v4m.r0s;
			t3d.g3t = q8a(j5j);
		}
		if (l9f.z0h.v4m.z7p)
		{
			t3d.l9z = c0k(l9f.z0h.v4m.z7p);
		}
		if (l9f.z0h.v4m.b4a != y2m.r9x)
		{
			t3d.i9e = e5i(l9f.z0h.v4m.b4a);
		}
	}
	t3d.j8u = v5t(l9f.z0h.q9a);
	t3d.i0c = q0u(l9f.z0h.s4t);
	t3d.z5p = l9f.z0h.i9k;

	
	t3d.d8i = l9f.d4a.d1e.u6v();
	if (l9f.d4a.v4m.u6v.length)
	{
		t3d.c0f = l9f.d4a.v4m.u6v;
		if (l9f.d4a.v4m.s2u)
		{
			t3d.r5f = l9f.d4a.v4m.s2u;
		}
		if (l9f.d4a.v4m.r0s)
		{
			let j1s = new j6w();
			j1s.r0s = l9f.d4a.v4m.r0s;
			t3d.v3c = q8a(j1s);
		}
		if (l9f.d4a.v4m.z7p)
		{
			t3d.y6y = c0k(l9f.d4a.v4m.z7p);
		}
		if (l9f.d4a.v4m.b4a != y2m.r9x)
		{
			t3d.v7x = e5i(l9f.d4a.v4m.b4a);
		}
	}
	t3d.s4n = v5t(l9f.d4a.q9a);
	t3d.u2m = q0u(l9f.d4a.s4t);
	t3d.t2l = l9f.d4a.i9k;

	
	t3d.j3q = l9f.m5m.i9k;
	t3d.k9w = l9f.m5m.i4f;
	t3d.t4a = q8a(l9f.m5m.s3z);
	t3d.q9u = q8a(l9f.m5m.w7r);
	t3d.h6j = j0q(l9f.m5m.v4e);
	t3d.s3f = b3t(l9f.m5m.s8i);
	t3d.u4e = e5i(l9f.m5m.b4a);
	t3d.c3b = x3i(l9f.m5m.type);
	t3d.t3i = b3t(l9f.m5m.n9f);
	t3d.d6p = c0k(l9f.m5m.s6n);
	t3d.a8o = c0k(l9f.m5m.i8y);
	t3d.k8c = c0k(l9f.m5m.f7y);
	t3d.j3j = c0k(l9f.m5m.v9n);

	
	t3d.g1t = l9f.g1t.u6v;

	
	t3d.y1n = l9f.c2d.i9k;
	t3d.m1r = l9f.c2d.t5h;
	t3d.m9w = q8a(l9f.c2d.r7n);
	t3d.n7s = b3t(l9f.c2d.y0s);
	t3d.u4b = q8a(l9f.c2d.z4p);
	t3d.n4b = s6z(l9f.c2d.d2w);

	
	t3d.i9k = l9f.i9k.i9k;

	
	t3d.a0m = q8a(l9f.a0m);
	t3d.m1u = f9j(l9f.m1u);
	t3d.t0x = u1y(l9f.t0x);
	t3d.w6a = e2e(l9f);

	
	t3d.q8e = b3t(l9f.q8e.t2o());

	return t3d;
}

const y1k  					= "White";
const u9j					= "WhiteTeam";
const g3z 				= "WhiteTeamNumber";
const a7d 					= "WhiteTeamYear";
const x2d 				= "WhiteTeamSeason";
const z0x 			= "WhiteTeamCountry";
const x3y 						= "WhiteRating";
const r1g 							= "WhiteTime";
const w2v 							= "WhiteElo";
const y2p  						= "WhiteTitle";
const k7f						= "WhiteCountry";

const a0x						= "Black";
const q7w					= "BlackTeam";
const t1o 				= "BlackTeamNumber";
const j8h 					= "BlackTeamYear";
const a2y 				= "BlackTeamSeason";
const e2r 			= "BlackTeamCountry";
const m6o 						= "BlackRating";
const d4k 							= "BlackTime";
const i4x 							= "BlackElo";
const z0t  						= "BlackTitle";
const v5h						= "BlackCountry";

const i1q 				= "Event";
const m3j				= "Site";
const e0l 			 	= "EventDate";
const p2m 		 	= "EventEndDate";
const w5o 			 	= "EventSpeed";
const b6o 	 	= "EventCategory";
const k9b 		 	= "EventCountry";
const m5g 			 	= "EventType";
const h8n 		 	= "EventRounds";
const j7x 			 	= "EventTeams";
const w3m		 	= "EventComplete";
const w3g 	= "EventThreePoints";
const y2s	= "EventBoardPoints";

const u0y 							= "Annotator";

const h7w 				 		= "SourceTitle";
const k4i 				 		= "Publication";
const l3y		 		= "SourcePublisher";
const l3m		 		= "PublicationDate";
const g7g 				 		= "SourceDate";
const f3u 		= "SourceVersionNumber";
const t0s 	 		= "SourceVersionDate";
const i3l 			 		= "SourceQuality";

const q4k 					 		    = "Title";

const u1r 							 		= "Date";
const n6p 								= "Result";
const q2l 										= "ECO";
const h2v 									= "Round";

const m7s			 							= "Tags";

const v3n 									= "Setup";
const m9t 										= "FEN";
const b1e 							= "PlyCount";

const j0t      							= "GUID";

const r5y = "(";
const t8a   = ")";
const y1t    = "{";

class e9p
{

constructor()
{
  this.v0m = new s7c();
  this.g7q = new x6l();
  this.r8s = new e9u();
  this.e2n = false;
  this.l8b = false;
  this.h3i = false;
  this.s4r = '';
}

}

class s5c
{

constructor(j4a)
{
	this.j7f = new l5s();
	this.f0a = j4a;
	this.u4p = 0;
	this.a9n = '';
	this.s5b = 0;
	this.x7f = 0;
	this.h1z = '';
	this.x6w = 0;
	this.j2t = false;
	this.f4i = '';
	this.l2s = '';
	this.l1h = null;
	this.y9l = new o8k();
	this.q2p = '';
	this.z9p = false;
 	this.j2k = false;
	this.b6s = false;
}

e7g()
{
  this.x6w = 0;
	let b9l = new j0c();
	this.l1h = b9l.y8a;
	try
	{
		this.g3o();
	}
	catch (err)
	{
	}
	b9l.h6y = p7t(this.j7f);
  b9l.l3n = this.x6w;
	return b9l;
}

g3o()
{
	this.j2t = false;
	this.x7d();
	if (this.j2t)
	{
		this.b2u = q2u(this.l2s);
		this.l1h.j8l(this.b2u, 1);
	}
 	this.z0k();
}

c2b()
{
	if (this.f0a.length == 0)
	{
		return false;
	}
	if (this.u4p >= this.f0a.length)
	{
		return false;
	}
	else
	{
		this.a9n = this.f0a[this.u4p];
		this.s5b = this.a9n.length;
		this.x7f = 0;
		this.u4p++;
		return true;
	}
}

x7d()
{
	this.b6s = false;
	this.j2k = false;
	while (true)
	{
		if (!this.c2b())
		{
			return;
		}
		this.d8b();
		if (!this.v5p())
		{
			return;
		}
		this.u5r();
	}
}


d5c(j3z)
{
	let c1i = this.h1z.substr(1, this.h1z.length - 1);
	return c1i.toUpperCase() === j3z.toUpperCase();
}

z0k()
{
 	if (this.h1z.length == 0) return;
	this.z9p = false;

	while (this.h1z[0] == '{')
	{
		let a9w = this.e3h();
    let d7w = new e9p();
		this.r9w(a9w, d7w);
    if (!d7w.v0m.q6v())
		{
			this.l1h.a4p(d7w.v0m);
		}
 		if (!d7w.g7q.q6v())
		{
			this.l1h.g7d(d7w.g7q);
		}
		if (!d7w.r8s.q6v())
		{
			this.l1h.d5g(d7w.r8s);
		}
 		a9w = d7w.s4r.trim();
    if (a9w.length)
    {
      
      
      if (a9w.startsWith("[%a") && a9w.length > 7)
      {
        a9w = a9w.substr(7, a9w.length).trim();
      }
      let h4o = this.l1h.h4o();
      if (h4o.length)
      {
        h4o += ' ';
      }
      h4o += a9w;
      this.l1h.x4d(h4o);
		}
		this.d8b();
		if (this.h1z.length == 0)
		{
			return;
		}
	}
	this.y2h(this.l1h.l2x(), this.l1h.b2u());
}

y2h(z4w, x1l)
{
  let g5y = z4w.w8u();
  let t0j = x1l.w8u();

	let k7l = null;
 	let k1n = new d5f();

	do
	{
		if (this.h1z == r5y)
		{
			if (!k7l)
			{
				throw "error";
			}
			if (!this.d8b())
			{
				throw "error";
			}

 			t0j.p3n(g5y.u9l.d1l());
			t0j.n4s(k1n);
			this.l1h.p3n(g5y); 
      this.y2h(g5y, t0j);
			this.l1h.h5p(g5y); 
			t0j.h5p(g5y.u9l.d1l());

			while (this.d8b())
			{
				if (this.h1z != r5y)
				{
					break;
				}
				if (!this.d8b())
				{
					throw "error";
				}
        t0j.p3n(g5y.u9l.d1l());
				t0j.n4s(k1n);
				this.l1h.p3n(g5y); 
				this.y2h(g5y, t0j);
				this.l1h.h5p(g5y);  
				t0j.h5p(g5y.u9l.d1l());
			}
		}

		if (this.h1z == t8a)
		{
			break;
		}

		if (
			this.h1z == "1-0" ||
			this.h1z == "2-0" ||
			this.h1z == "0-1" ||
			this.h1z == "0-2" ||
			this.h1z == "1/2-1/2" ||
			this.h1z == "1-1" ||
			this.h1z == "*" ||
			this.h1z == "**" ||
			this.h1z == "-*" ||
			this.h1z == "1-0*" ||
			this.h1z == "2-0*" ||
			this.h1z == "0-1*" ||
			this.h1z == "0-2*" ||
			this.h1z == "1/2-1/2*" ||
			this.h1z == "1-1*" ||
			this.h1z == "2-00*" ||
			this.h1z == "00-2*")
			break;

		if (this.h1z[0] == '$')
		{
			if (!k7l)
			{
				throw "error";
			}
			let a4t = h3t(this.h1z);
			if (a4t != g5x.r9x)
			{
				k7l.y7k(a4t);
				continue;
			}
			let style = g9x(this.h1z);
			if (style != j6q.r9x)
			{
				k7l.k5x(style);
				continue;
			}
			let value = z9w(this.h1z);
			if (value != w9y.r9x)
			{
				k7l.t2c(value);
				continue;
			}
			let i0g = p4e(this.h1z);
			if (i0g != c2u.r9x)
			{
				k7l.w3s(i0g);
				continue;
			}
			continue;
		}
		if (this.h1z[0] == '{')
		{
			let a9w = this.e3h();
      let d7w = new e9p();
  		this.r9w(a9w, d7w);
      if (!d7w.v0m.q6v())
      {
		  	if (k7l)
			  {
				  k7l.x3c(d7w.v0m);
				}
			}
   		if (!d7w.g7q.q6v())
      {
				if (k7l)
				{
					k7l.h3l(d7w.g7q);
				}
			}
   		if (!d7w.r8s.q6v())
      {
				if (k7l)
				{
					k7l.x9g(d7w.r8s);
				}
			}
      if (d7w.l8b)
      {
				if (k7l)
				{
					k7l.n2o();
				}
			}
      if (d7w.h3i)
      {
				if (k7l)
				{
					k7l.p7w();
				}
			}
   		a9w = d7w.s4r.trim();
      if (!a9w.length)
      {
        continue;
      }
			if (k7l)
			{
        let c1g = k7l.c1g();
        if (c1g.length)
        {
          c1g += ' ';
        }
        c1g += a9w;
				k7l.j9h(c1g);
			}
			else
			{
        if (this.q2p.length)
        {
   				this.q2p += ' ';
        }
				this.q2p += a9w;
				this.z9p = true;
			}
			continue;
		}
		if (!this.a1f())
		{
			continue;
		}
		let d2r = false;
		if (this.h1z[this.h1z.length] == '*')
		{
			this.h1z = this.h1z.substr(0, this.h1z.length - 1);
			d2r = true;
		}
 		let u3t = this.c6a(this.h1z);
    let d1l = f7z(t0j, this.h1z);
 		k1n = t0j.k1n();
		t0j.h5p(d1l);
		let u9l = b0l(d1l);
    u9l.k5x(u3t);
    this.l1h.f4v(g5y, u9l);
		k7l = g5y.u9l;
		if (this.z9p)
		{
			k7l.v8e(this.q2p);
			this.z9p = false;
      this.q2p = '';
		}
		if (d2r)
		{
			break;
		}
	} while (this.d8b());
}

c6a(c1i)
{
	if (c1i.endsWith("??"))
	{
		c1i = c1i.subString(0, c1i.length-2);
		return j6q.r3s;
	}
	else if (c1i.endsWith("!!"))
	{
		c1i = c1i.subString(0, c1i.length-2);
		return j6q.p9h;
	}
	else if (c1i.endsWith("?!"))
	{
		c1i = c1i.subString(0, c1i.length-2);
		return j6q.s1m;
	}
	else if (c1i.endsWith("!?"))
	{
		c1i = c1i.subString(0, c1i.length-2);
		return j6q.g0c;
	}
	else if (c1i.endsWith("?"))
	{
		c1i = c1i.subString(0, c1i.length-1);
		return j6q.m3d;
	}
	else if (c1i.endsWith("!"))
	{
		c1i = c1i.subString(0, c1i.length-1);
		return j6q.o2z;
	}
	else
	{
		return j6q.r9x;
	}
}

a1f()
{
	let u2n = this.h1z.length;
	let g5y = -1;
	for (let i = 0; i < u2n; i++)
	{
		if (this.h1z[i] == '.')
		{
			g5y = i;
		}
	}
	if (g5y != -1)
	{
		this.h1z = this.h1z.substr(g5y + 1 , u2n);
	}
	return this.h1z.length != 0;
}

d8b()
{
	this.h1z = "";
	let e0v = '';
	let index = 0;
	let u2n = 0;
	while (true)
	{
		let w3b = 0;
		if (this.x7f < this.s5b)
		{
			w3b = this.a9n[this.x7f];
		}
		else
		{
			w3b = 0;
		}
		if (!w3b)
		{
			if (u2n)
			{
				break;
			}
			if (!this.c2b())
			{
				return false;
			}
			continue;
		}
		if (w3b == ';')
		{
			if (!this.c2b())
			{
				return false;
			}
			continue;
		}
		if (w3b == '(')
		{
			if (u2n)
			{
				break;
			}
			else
			{
				this.x7f++;
				this.h1z = r5y;
				return true;
			}
		}
		if (w3b == ')')
		{
			if (u2n)
			{
				break;
			}
			else
			{
				this.x7f++;
				this.h1z = t8a;
				return true;
			}
		}
		if (w3b == '{')
		{
			if (u2n)
			{
				break;
			}
			else
			{
				this.x7f++;
				this.h1z = y1t;
				return true;
			}
		}
		if (w3b == ' ' || w3b == '\r' || w3b == '\n')
		{
			if (u2n)
			{
				this.x7f++;
				break;
			}
			else
			{
				this.x7f++;
				continue;
			}
		}
		e0v += w3b;
		index++;
		u2n++;
		this.x7f++;
	}
	if (index)
	{
		this.h1z += e0v;
	}
	return this.h1z.length != 0;
}

e3h()
{
	let c1i = '';
	let e0v = '';
	let index = 0;
	let x1c = 0;
	while (true)
	{
		let w3b = 0;
		if (this.x7f < this.s5b)
		{
			w3b = this.a9n[this.x7f];
		}
		else
		{
			w3b = 0;
		}
		if (!w3b)
		{
			if (!this.c2b())
			{
				break;
			}
			if (index > 0)
			{
				e0v += ' '; 
				index++;
			}
			continue;
		}
		if (w3b == '{')
		{
			x1c++;
		}
		if (w3b == '}')
		{
			if (x1c)
			{
				x1c--;
			}
			else
			{
				this.x7f++;
				break;
			}
		}
		e0v += w3b;
		index++;
		this.x7f++;
	}
	if (index)
	{
		c1i += e0v;
	}
	return c1i.trim();
}

r7l()
{
	this.f4i = "";

	let y4a = 0;
	let u2n = this.a9n.length;
	for (let i = u2n - 1; i >= 0; i--)
	{
		if (this.a9n[i] == ']')
		{
			y4a = i;
			break;
		}
	}
	let index = 0;
	let p3c = false;
	let e0v = '';
	while (true)
	{
		let w3b = 0;
		if (this.x7f < this.s5b)
		{
			w3b = this.a9n[this.x7f];
		}
		else
		{
			w3b = 0;
		}
		if (!w3b)
		{
			if (!this.c2b())
			{
				break;
			}
			continue;
		}
		if (w3b == '\"')
		{
			p3c = true;
			this.x7f++;
			continue;
		}
		if (w3b == ']')
		{
			if (this.x7f == y4a)
			{
				this.x7f++;
				break;
			}
		}
		if (p3c)
		{
			e0v += w3b;
			index++;
		}
		this.x7f++;
	}
	if (index)
	{
		this.f4i += e0v;
	}
}

v5p()
{
	if (this.h1z.length == 0)
	{
		return false;
	}
	if (this.h1z[0] != '[')
	{
		return false;
	}
	
	let index = this.x7f;
	let e6x = false;
	while (index < this.s5b)
	{
		let w3b = this.a9n[index++];
		if (w3b == '\"' && this.a9n[index] == ']')
		{
			index++;
			e6x = true;
			continue;
		}
		if (w3b == '\r' || w3b == '\n')
		{
			break;
		}
		if (e6x)
		{
			e6x = false;
			break;
		}
	}
	return e6x;
}

u5r()
{
	
	if (this.d5c(y1k))
	{
		this.r7l();
		this.j7f.t8m = this.f4i;
		return;
	}
	if (this.d5c(u9j))
	{
		this.r7l();
		this.j7f.c4p = this.f4i;
		return;
	}
	if (this.d5c(g3z))
	{
		this.r7l();
		this.j7f.l6w = this.f4i;
		return;
	}
	if (this.d5c(a7d))
	{
		this.r7l();
		this.j7f.g3t = this.f4i;
		return;
	}
	if (this.d5c(x2d))
	{
		this.r7l();
		this.j7f.l9z = this.f4i;
		return;
	}
	if (this.d5c(z0x))
	{
		this.r7l();
		this.j7f.i9e = this.f4i;
		return;
	}
	if (this.d5c(w2v) || this.d5c(x3y))
	{
		this.r7l();
		this.j7f.j8u = this.f4i;
		return;
	}
	if (this.d5c(r1g))
	{
		this.r7l();
		this.j7f.i0c = this.f4i;
		return;
	}
	if (this.d5c(y2p))
	{
		this.r7l();
		this.j7f.z5p = this.f4i;
		return;
	}
	if (this.d5c(k7f))
	{
		this.r7l();
		this.j7f.w4g = this.f4i;
		return;
	}

	
	if (this.d5c(a0x))
	{
		this.r7l();
		this.j7f.d8i = this.f4i;
		return;
	}
	if (this.d5c(q7w))
	{
		this.r7l();
		this.j7f.c0f = this.f4i;
		return;
	}
	if (this.d5c(t1o))
	{
		this.r7l();
		this.j7f.r5f = this.f4i;
		return;
	}
	if (this.d5c(j8h))
	{
		this.r7l();
		this.j7f.v3c = this.f4i;
		return;
	}
	if (this.d5c(a2y))
	{
		this.r7l();
		this.j7f.y6y = this.f4i;
		return;
	}
	if (this.d5c(e2r))
	{
		this.r7l();
		this.j7f.v7x = this.f4i;
		return;
	}
	if (this.d5c(i4x) || this.d5c(m6o))
	{
		this.r7l();
		this.j7f.s4n = this.f4i;
		return;
	}
	if (this.d5c(d4k))
	{
		this.r7l();
		this.j7f.u2m = this.f4i;
		return;
	}
	if (this.d5c(z0t))
	{
		this.r7l();
		this.j7f.t2l = this.f4i;
		return;
	}
	if (this.d5c(v5h))
	{
		this.r7l();
		this.j7f.l4d = this.f4i;
		return;
	}

	
	if (this.d5c(i1q))
	{
		this.r7l();
		this.j7f.j3q = this.f4i;
		return;
	}
	if (this.d5c(m3j))
	{
		this.r7l();
		this.j7f.k9w = this.f4i;
		return;
	}
	if (this.d5c(e0l))
	{
		this.r7l();
		this.j7f.t4a = this.f4i;
		return;
	}
	if (this.d5c(p2m))
	{
		this.r7l();
		this.j7f.q9u = this.f4i;
		return;
	}
	if (this.d5c(w5o))
	{
		this.r7l();
		this.j7f.h6j = this.f4i;
		return;
	}
	if (this.d5c(b6o))
	{
		this.r7l();
		this.j7f.s3f = this.f4i;
		return;
	}
	if (this.d5c(k9b))
	{
		this.r7l();
		this.j7f.u4e = this.f4i;
		return;
	}
	if (this.d5c(m5g))
	{
		this.r7l();
		this.j7f.c3b = this.f4i;
		return;
	}
	if (this.d5c(h8n))
	{
		this.r7l();
		this.j7f.t3i = this.f4i;
		return;
	}
	if (this.d5c(j7x))
	{
		this.r7l();
		this.j7f.d6p = this.f4i;
		return;
	}
	if (this.d5c(w3m))
	{
		this.r7l();
		this.j7f.a8o = this.f4i;
		return;
	}
	if (this.d5c(w3g))
	{
		this.r7l();
		this.j7f.k8c = this.f4i;
		return;
	}
	if (this.d5c(y2s))
	{
		this.r7l();
		this.j7f.j3j = this.f4i;
		return;
	}

	
	if (this.d5c(u0y))
	{
		this.r7l();
		this.j7f.g1t = this.f4i;
		return;
	}

	
	if (this.d5c(h7w))
	{
		this.r7l();
		this.j7f.y1n = this.f4i;
		return;
	}
	if (this.d5c(k4i))
	{
		this.r7l();
		this.j7f.y1n = this.f4i;
		return;
	}
	if (this.d5c(l3y))
	{
		this.r7l();
		this.j7f.m1r = this.f4i;
		return;
	}
	if (this.d5c(g7g))
	{
		this.r7l();
		this.j7f.m9w = this.f4i;
		return;
	}
	if (this.d5c(l3m))
	{
		this.r7l();
		this.j7f.m9w = this.f4i;
		return;
	}
	if (this.d5c(f3u))
	{
		this.r7l();
		this.j7f.n7s = this.f4i;
		return;
	}
	if (this.d5c(t0s))
	{
		this.r7l();
		this.j7f.u4b = this.f4i;
		return;
	}
	if (this.d5c(i3l))
	{
		this.r7l();
		this.j7f.n4b = this.f4i;
		return;
	}

	
	if (this.d5c(q4k))
	{
		this.r7l();
		this.j7f.i9k = this.f4i;
		return;
	}

	
	if (this.d5c(u1r))
	{
		this.r7l();
		this.j7f.a0m = this.f4i;
		return;
	}
	if (this.d5c(n6p))
	{
		this.r7l();
		this.j7f.m1u = this.f4i;
		return;
	}
	if (this.d5c(q2l))
	{
		this.r7l();
		this.j7f.t0x = this.f4i;
		return;
	}
	if (this.d5c(h2v))
	{
		this.r7l();
		this.j7f.w6a = this.f4i;
		return;
	}

	
	if (this.d5c(m7s))
	{
		this.r7l();
		this.j7f.q8e = this.f4i;
		return;
	}

	
	if (this.d5c(v3n))
	{
		this.r7l();
		return;
	}
	if (this.d5c(m9t))
	{
		this.r7l();
		if (this.f4i.length == 0 || this.f4i == "?")
		{
			return;
		}
		this.j2t = true;
		this.l2s = this.f4i;
		return;
	}
	if (this.d5c(b1e))
	{
		this.r7l();
		this.x6w = r7g(this.f4i, 0);
		return;
	}
  
 	if (this.d5c(j0t))
	{
		this.r7l();
		this.j7f.w2r = this.f4i;
		return;
	}

}

r7y(a9w)
{
	let p0d = new s7c();
	let c1i = a9w.substr(6, a9w.length - 6);
	let c8d = c1i.split(",");
	for (const s of c8d)
	{
		if (s.length < 5)
		{
			continue;
		}
		let q4c = v9t(s.substr(1, 2));
		let r9j = v9t(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let c0j = p9r(q4c, r9j, c3j.u2h);
			p0d.add(c0j);
		}
		else if (s[0] == 'G')
		{
			let c0j = p9r(q4c, r9j, c3j.x2b);
			p0d.add(c0j);
		}
		else if (s[0] == 'Y')
		{
			let c0j = p9r(q4c, r9j, c3j.b9j);
			p0d.add(c0j);
		}
	}
	return p0d;
}

v1d(a9w)
{
	let v6u = new x6l();
	let c1i = a9w.substr(6, a9w.length - 6);
	let c8d = c1i.split(",");
	for (const s of c8d)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let u7k = v9t(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let b6j = v9e(u7k, c7m.a5z);
			v6u.add(b6j);
		}
		else if (s[0] == 'G')
		{
      let b6j = v9e(u7k, c7m.g7b);
			v6u.add(b6j);
		}
		else if (s[0] == 'Y')
		{
      let b6j = v9e(u7k, c7m.l6c);
			v6u.add(b6j);
		}
	}
	return v6u;
}

o5h(a9w)
{
	let c1i = a9w.substr(6, a9w.length - 6);
	let g5y = c1i.indexOf("]");
	if (g5y != -1)
	{
		let r8s = new e9u();
		let value = r7g(c1i.substr(0, g5y), 0);
		r8s.c5s(value);
		return r8s;
	}
	else
	{
		return new e9u();
	}
}


r9w(a9w, d7w)
{
	if (
		a9w.startsWith("[%cal") ||
    a9w.startsWith("[%csb") ||
		a9w.startsWith("[%csl") ||
		a9w.startsWith("[%mdl") ||
		a9w.startsWith("[%evp") ||
		a9w.startsWith("[%eval") ||
		a9w.startsWith("[%emt") ||
		a9w.startsWith("[%tqu") ||
		a9w.startsWith("[%tqu") ||
		a9w.startsWith("[%pws") ||
		a9w.startsWith("[%pth") ||
		a9w.startsWith("[%eog"))
	{
		let k6q = 0;
		{
     	let h7l = a9w.indexOf("[%cal");
			if (h7l != -1)
			{
        let j4o = a9w.indexOf("]", h7l);
				if (j4o != -1)
				{
     			let r4h = a9w.substring(h7l, j4o + 1);
					d7w.v0m = this.r7y(r4h).w8u();
					if (j4o > k6q) k6q = j4o;
				}
			}
		}
		{
     	let h7l = a9w.indexOf("[%csb");
   		if (h7l != -1)
			{
        let j4o = a9w.indexOf("]", h7l);
				if (j4o != -1)
				{
          let u2b = a9w.substring(h7l, j4o + 1);
					d7w.g7q = this.v1d(u2b).w8u();
					if (j4o > k6q) k6q = j4o;
				}
			}
		}
		{
      let h7l = a9w.indexOf("[%csl");
			if (h7l != -1)
			{
        let j4o = a9w.indexOf("]", h7l);
				if (j4o != -1)
				{
          let u2b = a9w.substring(h7l, j4o + 1);
					d7w.g7q = this.v1d(u2b).w8u();
					if (j4o > k6q) k6q = j4o;
				}
			}
		}
		{
      let h7l = a9w.indexOf("[%mdl");
			if (h7l != -1)
			{
        let j4o = a9w.indexOf("]", h7l);
				if (j4o != -1)
				{
          let d9x = a9w.substring(h7l, j4o + 1);
					d7w.r8s = this.o5h(d9x).w8u();
					if (j4o > k6q) k6q = j4o;
				}
			}
		}
		{
      let h7l = a9w.indexOf("[%evp");
			if (h7l != -1)
			{
        let j4o = a9w.indexOf("]", h7l);
				if (j4o != -1)
				{
					if (j4o > k6q) k6q = j4o;
				}
			}
		}
		{
      let h7l = a9w.indexOf("[%eval");
			if (h7l != -1)
			{
        let j4o = a9w.indexOf("]", h7l);
				if (j4o != -1)
				{
					if (j4o > k6q) k6q = j4o;
				}
			}
		}
		{
      let h7l = a9w.indexOf("[%emt");
			if (h7l = -1)
			{
        let j4o = a9w.indexOf("]", h7l);
				if (j4o != -1)
				{
					if (j4o > k6q) k6q = j4o;
				}
			}
		}
		{
      let h7l = a9w.indexOf("[%tqu");
			if (h7l != -1)
			{
        let j4o = a9w.indexOf("]", h7l);
				if (j4o != -1)
				{
					if (j4o > k6q) k6q = j4o;
				}
			}
		}
		{
      let h7l = a9w.indexOf("[%pws");
			if (h7l != -1)
			{
        let j4o = a9w.indexOf("]", h7l);
				if (j4o != -1)
				{
          d7w.e2n = true;
					if (j4o > k6q) k6q = j4o;
				}
			}
		}
		{
      let h7l = a9w.indexOf("[%pth");
			if (h7l != -1)
			{
        let j4o = a9w.indexOf("]", h7l);
				if (j4o != -1)
				{
          d7w.l8b = true;
					if (j4o > k6q) k6q = j4o;
				}
			}
		}
		{
      let h7l = a9w.indexOf("[%eog");
			if (h7l != -1)
			{
        let j4o = a9w.indexOf("]", h7l);
				if (j4o != -1)
				{
					d7w.h3i = true; 
					if (j4o > k6q) k6q = j4o;
				}
			}
		}
    d7w.s4r = a9w.substring(k6q + 1);
	}
	else
	{
		d7w.s4r = a9w;
	}
}

}

class u9p
{

constructor()
{
  this.l3n = 0;
	this.h6y = new l5s();
	this.y8a = new l8k();
}

w8u()
{
	let d1c = new u9p();
  d1c.l3n = this.l3n;
	d1c.h6y = this.h6y.w8u();
	d1c.y8a = this.y8a.w8u();
	return d1c;
}

}

class l5s
{

constructor()
{
	this.t8m = '';
	this.c4p = '';
	this.l6w = '';
	this.g3t = '';
	this.l9z = '';
	this.i9e = '';
	this.j8u = '';
	this.i0c = '';
	this.z5p = '';
  this.w4g = '';
	this.d8i = '';
	this.c0f = '';
	this.r5f = '';
	this.v3c = '';
	this.y6y = '';
	this.v7x = '';
	this.s4n = '';
	this.u2m = '';
	this.t2l = '';
  this.l4d = '';
	this.j3q = '';
	this.k9w = '';
	this.t4a = '';
	this.q9u = '';
	this.h6j = '';
	this.s3f = '';
	this.u4e = '';
	this.c3b = '';
	this.t3i = '';
	this.d6p = '';
	this.a8o = '';
	this.k8c = '';
	this.j3j = '';
	this.g1t = '';
	this.y1n = '';
	this.m1r = '';
	this.m9w = '';
	this.n7s = '';
	this.u4b = '';
	this.n4b = '';
	this.i9k = '';
	this.a0m = '';
	this.m1u = '';
	this.t0x = '';
	this.w6a = '';
	this.q8e = '';
  this.w2r = '';
}

w8u()
{
	let h8r = new l5s();

	h8r.t8m = this.t8m;
	h8r.c4p = this.c4p;
	h8r.l6w = this.l6w;
	h8r.g3t = this.g3t;
	h8r.l9z = this.l9z;
	h8r.i9e = this.i9e;
	h8r.j8u = this.j8u;
	h8r.i0c = this.i0c;
	h8r.z5p = this.z5p;
	h8r.w4g = this.w4g;

	h8r.d8i = this.d8i;
	h8r.c0f = this.c0f;
	h8r.r5f = this.r5f;
	h8r.v3c = this.v3c;
	h8r.y6y = this.y6y;
	h8r.v7x = this.v7x;
	h8r.s4n = this.s4n;
	h8r.u2m = this.u2m;
	h8r.t2l = this.t2l;
	h8r.l4d = this.l4d;

	h8r.j3q = this.j3q;
	h8r.k9w = this.k9w;
	h8r.t4a = this.t4a;
	h8r.q9u = this.q9u;
	h8r.h6j = this.h6j;
	h8r.s3f = this.s3f;
	h8r.u4e = this.u4e;
	h8r.c3b = this.c3b;
	h8r.t3i = this.t3i;
	h8r.d6p = this.d6p;
	h8r.a8o = this.a8o;
	h8r.k8c = this.k8c;
	h8r.j3j = this.j3j;

	h8r.g1t = this.g1t;

	h8r.y1n = this.y1n;
	h8r.m1r = this.m1r;
	h8r.m9w = this.m9w;
	h8r.n7s = this.n7s;
	h8r.u4b = this.u4b;
	h8r.n4b = this.n4b;

	h8r.i9k = this.i9k;

	h8r.a0m = this.a0m;
	h8r.m1u = this.m1u;
	h8r.t0x = this.t0x;
	h8r.w6a = this.w6a;

	h8r.q8e = this.q8e;
 	h8r.w2r = this.w2r;

	return h8r;
}

}


const l1d =
[
		[ y2m.r9x, 				  									"",											            "", 																	"",   ""    ],
		[ y2m.e7i, 										  "Afghanistan",											"Afghanistan", 												"af", "AFG" ],
		[ y2m.u2k, 									 	"AlandIslands",										  "Aland", 															"ax", "ALA" ],
		[ y2m.w9i,  											 	"Albania",													"Albania", 														"al", "ALB" ],
		[ y2m.x4s,  											 	"Algeria",													"Algeria", 														"dz", "DZA" ],
		[ y2m.b5z,  								 	"AmericanSamoa",										"American Samoa", 										"as", "ASM" ],
		[ y2m.t3s,  											 	"Andorra",													"Andorra", 														"ad", "AND" ],
		[ y2m.h7n,                           "Angola",													  "Angola", 														"ao", "AGO" ],
		[ y2m.b7y,  											  "Anguilla",												  "Anguilla", 													"ai", "AIA" ],
		[ y2m.x2e,  										  "Antarctica",											  "Antarctica", 												"aq", "ATA" ],
		[ y2m.e3c,  								  "AntiguaBarbuda",									  "Antigua & Barbuda", 									"ag", "ATG" ],
		[ y2m.q7n,  										 	"Argentina",												"Argentina", 													"ar", "ARG" ],
		[ y2m.x0d,  											 	"Armenia",													"Armenia",														"am", "ARM" ],
		[ y2m.e6b,  												 	"Aruba",														"Aruba",															"aw", "ABW" ],
		[ y2m.f3z,  										 	"Australia",												"Australia",													"au", "AUS" ],
		[ y2m.q3y,  											 	"Austria",													"Austria",											 			"at", "AUT" ],
		[ y2m.j3b,  										  "Azerbaijan",											  "Azerbaijan",													"az", "AZE" ],
		[ y2m.i3m,  											 	"Bahamas",													"Bahamas",														"bs", "BHS" ],
		[ y2m.k0b,  											 	"Bahrain",													"Bahrain",														"bh", "BHR" ],
		[ y2m.f1j,  										  "Bangladesh",											  "Bangladesh",													"bd", "BGD" ],
		[ y2m.t9a,  											  "Barbados",												  "Barbados",														"bb", "BRB" ],
		[ y2m.x7q,  								 	"BasqueCountry",	 									"Basque Country",     								"x1", "XX1" ], 
		[ y2m.h5x,  											 	"Belarus",													"Belarus",														"by", "BLR" ],
		[ y2m.l5o,  											 	"Belgium",													"Belgium",														"be", "BEL" ],
		[ y2m.d9n,  												  "Belize",													  "Belize",															"bz", "BLZ" ],
		[ y2m.c4c,  												 	"Benin",														"Benin",															"bj", "BEN" ],
		[ y2m.s3a,  											 	"Bermuda",													"Bermuda",														"bm", "BMU" ],
		[ y2m.j0s,  												  "Bhutan",													  "Bhutan",															"bt", "BTN" ],
		[ y2m.y7m,  												"Bolivia",													"Bolivia",														"bo", "BOL" ],
		[ y2m.i5c,  						  "BosniaHerzegovina",       				  "Bosnia & Herzegovina", 							"ba", "BIH" ], 
		[ y2m.f0k,  											  "Botswana",                      	  "Botswana",														"bw", "BWA" ],
		[ y2m.s7w,  									  "BouvetIsland",                 		"Bouvet",															"bv", "BVT" ],
		[ y2m.c8n,  												  "Brazil",                        	  "Brazil",															"br", "BRA" ],
		[ y2m.w9z,  	 	"BritishIndianOceanTerritory",			"British Indian Ocean Territory", 		"io", "IOT" ],
		[ y2m.v5x, 							 	"BruneiDarussalam",								  "Brunei",															"bn", "BRN" ], 
		[ y2m.x3t,  											  "Bulgaria",												  "Bulgaria", 													"bg", "BGR" ],
		[ y2m.r1u, 										  "BurkinaFaso",											"Burkina Faso",												"bf", "BFA" ],
		[ y2m.x7v,  											 	"Burundi",													"Burundi",														"bi", "BDI" ],
		[ y2m.f8o,  											  "Cambodia",												  "Cambodja",														"kh", "KHM" ],
		[ y2m.s9q,  											  "Cameroon",												  "Cameroon",														"cm", "CMR" ],
		[ y2m.j9z,  												  "Canada",													  "Canada",															"ca", "CAN" ],
		[ y2m.b6d,  										  "CapeVerde",												"Cape Verde",													"cv", "CPV" ], 
		[ y2m.x2z,  										  "Catalonia",												"Catalonia",													"x2", "XX2" ], 
		[ y2m.l7v,  								  "CaymanIslands",										"Cayman Islands",											"ky", "CYM" ],
		[ y2m.l9h,  				  "CentralAfricanRepublic",					  "Central African Republic",						"cf", "CAF" ],
		[ y2m.o8d,  													  "Chad",														  "Chad",																"td", "TCD" ],
		[ y2m.e5s,  												 	"Chile",														"Chile",															"cl", "CHL" ],
		[ y2m.y7u,  												 	"China",														"China",															"cn", "CHN" ],
		[ y2m.g6o,  							 	"ChristmasIsland",									"Christmas",													"cx", "CXR" ],
		[ y2m.g4o,  					 	"CocosKeelingIslands",							"Cocos (Keeling)",										"cc", "CCK" ], 
		[ y2m.r8o,  											  "Colombia",												  "Colombia",														"co", "COL" ],
		[ y2m.m1e,  											 	"Comoros",													"Comoros",														"km", "COM" ],
		[ y2m.c9b,  												 	"Congo",														"Congo-Brazzaville", 						    	"cg", "COG" ],
		[ y2m.q6z,  			 	"CongoDemocraticRepublic",					"Congo-Kinshasa(Zaire)",						  "cd", "COD" ],
		[ y2m.x9b,  									 	"CookIslands",											"Cook Islands",											 	"ck", "COK" ],
		[ y2m.t9p,  											"CostaRica",												"Costa Rica",												 	"cr", "CRI" ],
		[ y2m.o2c,  												"Croatia",													"Croatia",														"hr", "HRV" ],
		[ y2m.u5j,  													  "Cuba",														  "Cuba",															 	"cu", "CUB" ],
		[ y2m.u8v,  												"Curacao",													"Curacao",											  		"cw", "CUW" ],
		[ y2m.o7c,  												  "Cyprus",													  "Cyprus",														 	"cy", "CYP" ],
		[ y2m.q8t,  									      "Czechia",										      "Czech Republic", 										"cz", "CZE" ],
		[ y2m.o2d,  										  "CoteIvoire",	   					 				  "Cote d'Ivoire",											"ci", "CIV" ],
		[ y2m.k0q,  												"Denmark",													"Denmark",													  "dk", "DNK" ],
		[ y2m.b2c,  											  "Djibouti",												  "Djibouti",													 	"dj", "DJI" ],
		[ y2m.k7u,  											  "Dominica",												  "Dominica",													 	"dm", "DMA" ],
		[ y2m.q9s,  							"DominicanRepublic",								"Dominican Republic",								 	"do", "DOM" ],
		[ y2m.h7o,  												"Ecuador",													"Ecuador",													 	"ec", "ECU" ],
		[ y2m.a5m,  													"Egypt",														"Egypt", 														 	"eg", "EGY" ],
		[ y2m.d1a,  										  "ElSalvador",											  "El Salvador",												"sv", "SLV" ],
		[ y2m.a2a,  												"England",													"England",														"x3", "GBR" ],
		[ y2m.v7p,  							  "EquatorialGuinea",								  "Equatorial Guinea",									"gq", "GNQ" ], 
		[ y2m.z4u,  												"Eritrea",													"Eritrea",														"er", "ERI" ],
		[ y2m.q7h,  												"Estonia",													"Estonia",														"ee", "EST" ],
		[ y2m.n9q,  											  "Ethiopia",												  "Ethiopia",													 	"et", "ETH" ],
		[ y2m.g3r,  								"FalklandIslands",									"England",														"fk", "FLK" ], 
		[ y2m.e1f,  									  "FaroeIslands",										  "Faroes",														 	"fo", "FRO" ],
		[ y2m.j6t,  													  "Fiji",														  "Fiji",															 	"fj", "FJI" ],
		[ y2m.p0r,  												"Finland",													"Finland",														"fi", "FIN" ],
		[ y2m.v8w,  												  "France",													  "France",														 	"fr", "FRA" ],
		[ y2m.a1e,  									  "FrenchGuiana",										  "Guyana", 														"gf", "GUF" ], 
		[ y2m.h3d,  								"FrenchPolynesia",									"Tahiti(French Polinesia)", 					"pf", "PYF" ], 
		[ y2m.a1v,  			"FrenchSouthernTerritories",				"French Southern and Antarctic Lands","tf", "ATF" ],
		[ y2m.z9z,  													"Gabon",														"Gabon",															"ga", "GAB" ], 
		[ y2m.d0n,  												  "Gambia",													  "Gambia",															"gm", "GMB" ],
		[ y2m.j7z,  												"Georgia",													"Georgia",														"ge", "GEO" ],
		[ y2m.v2d,  												"Germany",													"Germany",														"de", "DEU" ],
		[ y2m.z5m, 													  "Ghana",														"Ghana",															"gh", "GHA" ],
		[ y2m.l4h,  											"Gibraltar",												"Gibraltar",													"gi", "GIB" ],
		[ y2m.p1d,  												  "Greece",													  "Greece",															"gr", "GRC" ],
		[ y2m.f5e,  											"Greenland",												"Greenland",													"gl", "GRL" ],
		[ y2m.f3x,  												"Grenada",													"Grenada",														"gd", "GRD" ],
		[ y2m.c5f,  										  "Guadeloupe",											  "Guadeloupe",													"gp", "GLP" ],
		[ y2m.h6r,  													  "Guam",														  "Guam",																"gu", "GUM" ],
		[ y2m.s0k,  											"Guatemala",												"Guatemala",													"gt", "GTM" ],
		[ y2m.x1i,  											  "Guernsey",												  "Guernsey",														"gg", "GGY" ], 
		[ y2m.g3j,  												  "Guinea",													  "Guinea",															"gn", "GIN" ],
		[ y2m.k1w,  									  "GuineaBissau",										  "Guinea-Bissau",											"gw", "GNB" ],
		[ y2m.p3r,  												  "Guyana",													  "Guyana",															"gy", "GUY" ],
		[ y2m.t2u,  													"Haiti",														"Haiti",															"ht", "HTI" ],
		[ y2m.g8j, 			"HeardIslandMcDonaldIslands", 			"Australia",   									  		"hm", "HMD" ],
		[ y2m.c2h,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ y2m.s0y,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ y2m.n7a,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ y2m.p6h,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ y2m.a9r,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ y2m.i7v,  												 	"India",														"India",															"in", "IND" ],
		[ y2m.o4l,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ y2m.v5g,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ y2m.z1m,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ y2m.p7l,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ y2m.b8p,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ y2m.z4c,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ y2m.v8d,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ y2m.e7m,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ y2m.f1k,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], 
		[ y2m.l4f,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ y2m.v0j,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ y2m.o7o,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ y2m.j5x,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ y2m.o6h,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ y2m.h0b,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ y2m.c6j,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], 
		[ y2m.g0g,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], 
		[ y2m.k3x,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ y2m.j0x,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ y2m.j5b,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ y2m.w5k,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ y2m.q8v, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ y2m.f7o,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ y2m.f3e, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ y2m.w5y,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ y2m.e1l,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ y2m.u5z,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ y2m.t4w,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ y2m.b5u,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ y2m.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ y2m.l6p,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ y2m.p0w,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ y2m.a4g,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ y2m.q0r,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ y2m.e2m,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ y2m.m9k, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ y2m.l1y,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ y2m.x8e,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ y2m.c4n,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ y2m.c1n,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ y2m.y7j,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ y2m.e9d,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ y2m.b0s,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ y2m.z3s,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ y2m.z8c,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ y2m.u9t,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ y2m.y1u,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ y2m.i8b,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ y2m.a6d,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ y2m.o3j,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ y2m.w5z,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ y2m.f8a, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ y2m.t7l,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ y2m.d8l,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ y2m.m1l,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ y2m.l1i,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ y2m.r4r, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ y2m.z7q,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ y2m.g6q,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ y2m.t3g,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ y2m.j8j,  													"Niger",														"Niger",															"ne", "NER" ],
		[ y2m.d8q,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ y2m.r3k,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ y2m.g7h,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ y2m.e6o,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], 
		[ y2m.m2b,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ y2m.n3h,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ y2m.u2y,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ y2m.d6a,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ y2m.t6x,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ y2m.e1k,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ y2m.j4k,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ y2m.a3e,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ y2m.r7j,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ y2m.j3o,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ y2m.c3a,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ y2m.t7o,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ y2m.n0o,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ y2m.n2g,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ y2m.y1y,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ y2m.j4t,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ y2m.x9m,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ y2m.w7p,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ y2m.r5k,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ y2m.d7r,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ y2m.r4l,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ y2m.p6u,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], 
		[ y2m.p3f,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], 
		[ y2m.l5t, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], 
		[ y2m.h8d,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ y2m.v5z,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], 
		[ y2m.r3v,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], 
		[ y2m.c2f,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ y2m.z3p,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ y2m.n4w,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ y2m.j4q,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ y2m.m6l,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ y2m.q1o,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ y2m.h6d,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ y2m.n8g,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ y2m.v7r,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ y2m.o1a,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ y2m.i4c,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ y2m.h0p,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ y2m.c3m,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ y2m.v1x,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ y2m.i8u,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ y2m.u4x,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ y2m.a8d, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ y2m.c1b,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ y2m.y9a,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ y2m.k7a, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ y2m.k1p,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ y2m.k1e,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ y2m.d7c,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], 
		[ y2m.p4n,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], 
		[ y2m.p2k,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ y2m.z3n,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ y2m.c2e,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ y2m.m2w,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ y2m.d1g,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ y2m.m5p,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ y2m.s7n,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ y2m.t4r, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ y2m.e3m,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], 
		[ y2m.g5e, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ y2m.c0u,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], 
		[ y2m.j6l,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ y2m.t0h,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ y2m.r6y,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ y2m.q8y,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ y2m.t8r,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ y2m.z5u,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ y2m.o6a,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ y2m.f0e,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ y2m.w7i,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ y2m.v8n,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ y2m.p0j,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], 
		[ y2m.q4y,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ y2m.g1q, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ y2m.v1u,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ y2m.e4x,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ y2m.o8c,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ y2m.i4u,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ y2m.o1r,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ y2m.w1j,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ y2m.b5c,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ y2m.e3i,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ y2m.v2x,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ y2m.g5c,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ y2m.d6e,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ y2m.c4v,  											 		"Zaire",														"",																		"zr", "ZRN" ], 
		[ y2m.d5o,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ y2m.b9d,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function h5j(b4a)
{
	return l1d[b4a][2];
}

function e5i(b4a)
{
	return l1d[b4a][4];
}

function h2l(x8q)
{
	for (const b4a of l1d)
	{
		if (b4a[4] == x8q)
		{
			return b4a[0];
		}
	}
	return y2m.r9x;
}

function o9z(k6j)
{
	for (const b4a of l1d)
	{
		if (b4a[3] == k6j)
		{
			return b4a[0];
		}
	}
	return y2m.r9x;
}
class o9d
{

constructor()
{
	this.a9w = '';
}

e7n(c1i)
{
	this.a9w += c1i;
}

z1b(c1i)
{
	this.a9w += c1i + '\n';
}

j3e()
{
	this.a9w += '\n';
}

}




function r7g(u6i, x5f)
{
	let value = Number(u6i);
	if (isNaN(value))
	{
		return x5f;
	}
	else
	{
		return value;
	}
}
