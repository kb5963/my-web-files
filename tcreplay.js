const q5b = "https://kb5963.github.io/replay/";
const	chess = true; 

const b4h =
{
	b3m    : 0,
	e0h  : 1,
	a2r  : 2,
	w3c    : 3,
  y0a   : 4,
	q6y    : 5,
	u2m    : 6,
	y6y  : 7,
	q3k  : 8,
	s6h    : 9,
	u4n   : 10,
	y7s    : 11,
	r7x        : 12,
};

const i6u =
{
	p8k        : 0,
	d9a        : 1,
};

const	a1 = 0;
const i3m = 1;
const l9h = 2;
const g6k = 3;
const u4s = 4;
const g0w = 5;
const j2m = 6;
const f8e = 7;
const	a2 = 8;
const k0b = 9;
const w3b = 10;
const d1j = 11;
const z6g = 12;
const n7n = 13;
const v2k = 14;
const e4n = 15;
const	a3 = 16;
const c6n = 17;
const q4j = 18;
const k4o = 19;
const c9e = 20;
const x0u = 21;
const v0o = 22;
const h0b = 23;
const	a4 = 24;
const f1j = 25;
const g2o = 26;
const t1j = 27;
const g3r = 28;
const f6t = 29;
const l1n = 30;
const n8s = 31;
const	a5 = 32;
const t9a = 33;
const k7z = 34;
const b2c = 35;
const e1f = 36;
const l4n = 37;
const r9f = 38;
const g1b = 39;
const	a6 = 40;
const x7q = 41;
const o8d = 42;
const r1a = 43;
const j2t = 44;
const z9z = 45;
const z0a = 46;
const c6j = 47;
const	a7 = 48;
const f9i = 49;
const c0l = 50;
const e8c = 51;
const j6t = 52;
const d0n = 53;
const c6v = 54;
const g0g = 55;
const	a8 = 56;
const d4j = 57;
const e5s = 58;
const k7u = 59;
const d6n = 60;
const b9l = 61;
const m2p = 62;
const k3x = 63;
const y3r = 64;

const a6x = 0;
const q6c = 1;
const d0h = 2;
const g8i = 3;
const r9v = 4;
const t3w = 5;
const z2m = 6;
const a0h = 7;
const r4z = 8;

const	rank_1 = 0;
const h0p = 1;
const c3m = 2;
const d7i = 3;
const o9l = 4;
const s4a = 5;
const s5a = 6;
const n4t = 7;
const e6z = 8;

const c4f        = 8;
const e9p       = 64;
const t5z      = 16;

const a1l =
[
	b4h.w3c,    
  b4h.e0h,  
  b4h.a2r,  
  b4h.y0a,   
  b4h.q6y,    
  b4h.a2r,  
  b4h.e0h,  
  b4h.w3c,    
	b4h.b3m,    
  b4h.b3m,    
  b4h.b3m,    
  b4h.b3m,    
  b4h.b3m,    
  b4h.b3m,    
  b4h.b3m,    
  b4h.b3m,    
	b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
	b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
	b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
	b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
	b4h.u2m,    
  b4h.u2m,    
  b4h.u2m,    
  b4h.u2m,    
  b4h.u2m,    
  b4h.u2m,    
  b4h.u2m,    
  b4h.u2m,    
	b4h.s6h,    
  b4h.y6y,  
  b4h.q3k,  
  b4h.u4n,   
  b4h.y7s,    
  b4h.q3k,  
  b4h.y6y,  
  b4h.s6h,    
];

const u7n =
[
	b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
	b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
	b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
	b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
	b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
	b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
	b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
	b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
  b4h.r7x,        
];

const x0c =
[
	a1, i3m, l9h, g6k, u4s, g0w, j2m, f8e,
	a2, k0b, w3b, d1j, z6g, n7n, v2k, e4n,
	a3, c6n, q4j, k4o, c9e, x0u, v0o, h0b,
	a4, f1j, g2o, t1j, g3r, f6t, l1n, n8s,
	a5, t9a, k7z, b2c, e1f, l4n, r9f, g1b,
	a6, x7q, o8d, r1a, j2t, z9z, z0a, c6j,
	a7, f9i, c0l, e8c, j6t, d0n, c6v, g0g,
	a8, d4j, e5s, k7u, d6n, b9l, m2p, k3x,
];

const g4q =
[
	a6x,
  q6c,
  d0h,
  g8i,
  r9v,
  t3w,
  z2m,
  a0h,
];

const m5i =
[
	rank_1,
  h0p,
  c3m,
  d7i,
  o9l,
  s4a,
  s5a,
  n4t,
];

function d9x(r4y)
{
	return r4y == b4h.u2m ||
		r4y == b4h.y6y ||
    r4y == b4h.q3k ||
    r4y == b4h.s6h ||
    r4y == b4h.u4n ||
    r4y == b4h.y7s;
}

function c8w(r4y)
{
	return r4y == b4h.b3m ||
		r4y == b4h.e0h ||
    r4y == b4h.a2r ||
    r4y == b4h.w3c ||
    r4y == b4h.y0a ||
    r4y == b4h.q6y;
}

function g5g(r4y)
{
	return r4y == b4h.b3m || r4y == b4h.u2m;
}

function b8h(r4y)
{
	return r4y == b4h.e0h || r4y == b4h.y6y;
}

function m1q(r4y)
{
	return r4y == b4h.a2r || r4y == b4h.q3k;
}

function x1r(r4y)
{
	return r4y == b4h.w3c || r4y == b4h.s6h;
}

function y5o(r4y)
{
	return r4y == b4h.y0a || r4y == b4h.u4n;
}

function d4v(r4y)
{
	return r4y == b4h.q6y || r4y == b4h.y7s;
}

function p2m(d9d)
{
	if (d9d == y3r)
	{
		return y3r;
	}
	else
	{
		return e9p - d9d - 1;
	}
}

const v4n =
[
	a6x, q6c, d0h, g8i, r9v, t3w, z2m, a0h,
	a6x, q6c, d0h, g8i, r9v, t3w, z2m, a0h,
	a6x, q6c, d0h, g8i, r9v, t3w, z2m, a0h,
	a6x, q6c, d0h, g8i, r9v, t3w, z2m, a0h,
	a6x, q6c, d0h, g8i, r9v, t3w, z2m, a0h,
	a6x, q6c, d0h, g8i, r9v, t3w, z2m, a0h,
	a6x, q6c, d0h, g8i, r9v, t3w, z2m, a0h,
	a6x, q6c, d0h, g8i, r9v, t3w, z2m, a0h,
];

function j3x(d9d)
{
	return v4n[d9d];
}

const d6i =
[
	rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1,
	h0p, h0p, h0p, h0p, h0p, h0p, h0p, h0p,
	c3m, c3m, c3m, c3m, c3m, c3m, c3m, c3m,
	d7i, d7i, d7i, d7i, d7i, d7i, d7i, d7i,
	o9l, o9l, o9l, o9l, o9l, o9l, o9l, o9l,
	s4a, s4a, s4a, s4a, s4a, s4a, s4a, s4a,
	s5a, s5a, s5a, s5a, s5a, s5a, s5a, s5a,
	n4t, n4t, n4t, n4t, n4t, n4t, n4t, n4t,
];

function i4c(d9d)
{
	return d6i[d9d];
}

function q7u(a, b)
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

function o2d(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function w7u(w3w, r4y)
{
	let p0n = 0;
	for (const value of w3w)
	{
		if (value == r4y)
		{
			p0n++;
		}
	}
	return p0n;
}

var stringToSquareMapInited = false;
const w3q = new Map();
function u5o()
{
  w3q.set("a1", a1);
  w3q.set("a2", a2);
  w3q.set("a3", a3);
  w3q.set("a4", a4);
  w3q.set("a5", a5);
  w3q.set("a6", a6);
  w3q.set("a7", a7);
  w3q.set("a8", a8);
  w3q.set("b1", i3m);
  w3q.set("b2", k0b);
  w3q.set("b3", c6n);
  w3q.set("b4", f1j);
  w3q.set("b5", t9a);
  w3q.set("b6", x7q);
  w3q.set("b7", f9i);
  w3q.set("b8", d4j);
  w3q.set("c1", l9h);
  w3q.set("c2", w3b);
  w3q.set("c3", q4j);
  w3q.set("c4", g2o);
  w3q.set("c5", k7z);
  w3q.set("c6", o8d);
  w3q.set("c7", c0l);
  w3q.set("c8", e5s);
  w3q.set("d1", g6k);
  w3q.set("d2", d1j);
  w3q.set("d3", k4o);
  w3q.set("d4", t1j);
  w3q.set("d5", b2c);
  w3q.set("d6", r1a);
  w3q.set("d7", e8c);
  w3q.set("d8", k7u);
  w3q.set("e1", u4s);
  w3q.set("e2", z6g);
  w3q.set("e3", c9e);
  w3q.set("e4", g3r);
  w3q.set("e5", e1f);
  w3q.set("e6", j2t);
  w3q.set("e7", j6t);
  w3q.set("e8", d6n);
  w3q.set("f1", g0w);
  w3q.set("f2", n7n);
  w3q.set("f3", x0u);
  w3q.set("f4", f6t);
  w3q.set("f5", l4n);
  w3q.set("f6", z9z);
  w3q.set("f7", d0n);
  w3q.set("f8", b9l);
  w3q.set("g1", j2m);
  w3q.set("g2", v2k);
  w3q.set("g3", v0o);
  w3q.set("g4", l1n);
  w3q.set("g5", r9f);
  w3q.set("g6", z0a);
  w3q.set("g7", c6v);
  w3q.set("g8", m2p);
  w3q.set("h1", f8e);
  w3q.set("h2", e4n);
  w3q.set("h3", h0b);
  w3q.set("h4", n8s);
  w3q.set("h5", g1b);
  w3q.set("h6", c6j);
  w3q.set("h7", g0g);
  w3q.set("h8", k3x);
}

function h7n(b5c)
{
  if (!stringToSquareMapInited)
  {
    u5o();
    stringToSquareMapInited = true;
  }
  if (w3q.has(b5c))
  {
    return w3q.get(b5c);
  }
  else
  {
		return y3r;
  }
}

function p0j(d9d)
{
  return h6c[d9d];
}

const h5s  = j2m;
const t6y  = g0w;
const p5d = l9h;
const l4i = g6k;
const j1s  = m2p;
const r5f  = b9l;
const n5a = e5s;
const i8a = k7u;

const h6c =
[
	"a1",	"b1",	"c1",	"d1",	"e1", "f1", "g1", "h1",
	"a2",	"b2",	"c2",	"d2",	"e2", "f2", "g2", "h2",
	"a3",	"b3",	"c3",	"d3",	"e3", "f3", "g3", "h3",
	"a4",	"b4",	"c4",	"d4",	"e4", "f4", "g4", "h4",
	"a5",	"b5",	"c5",	"d5",	"e5", "f5", "g5", "h5",
	"a6",	"b6",	"c6",	"d6",	"e6", "f6", "g6", "h6",
	"a7",	"b7",	"c7",	"d7",	"e7", "f7", "g7", "h7",
	"a8",	"b8",	"c8",	"d8",	"e8", "f8", "g8", "h8",
];

const p3l =
[
	'1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
];

const c6m =
[
	'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
];




const f0l =
[
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false, true, false, true, false, true,
	true,  false,   true,  false, true, false,  true, false,
	false,  true,  false,  true, false,  true, false, true,
];

function y1u(d9d)
{
	return f0l[d9d];
}



















function l3x(b3p)
{
  if (b3p == '1')
  {
    return rank_1;
  }
  else if (b3p == '2')
  {
    return h0p;
  }
  else if (b3p == '3')
  {
    return c3m;
  }
  else if (b3p == '4')
  {
    return d7i;
  }
  else if (b3p == '5')
  {
    return o9l;
  }
  else if (b3p == '6')
  {
    return s4a;
  }
  else if (b3p == '7')
  {
    return s5a;
  }
  else if (b3p == '8')
  {
    return n4t;
  }
	else
	{
		return e6z;
	}
}

function b0y(b3p)
{
  if (b3p == 'a')
  {
    return a6x;
  }
  else if (b3p == 'b')
  {
    return q6c;
  }
  else if (b3p == 'c')
  {
    return d0h;
  }
  else if (b3p == 'd')
  {
    return g8i;
  }
  else if (b3p == 'e')
  {
    return r9v;
  }
  else if (b3p == 'f')
  {
    return t3w;
  }
  else if (b3p == 'g')
  {
    return z2m;
  }
  else if (b3p == 'h')
  {
    return a0h;
  }
  else
	{
		return r4z;
	}
}

function p3e(i9b)
{
  return c6m[i9b];
}

function y3x(o1a)
{
  return p3l[o1a];
}


class d5f
{

constructor()
{
	this.p0m = false;
	this.l6d = u4s;
	this.w7l = d6n;
	this.x1x = f8e;
	this.j9x = a1;
	this.c0f = k3x;
	this.a1p = a8;
	this.h3h = false;
	this.n9s = false;
	this.v7x = false;
	this.m0v = false;
	this.k2v = y3r;
}

o0o()
{
	let i1k = new d5f();
  return Object.assign(i1k, this);
}

}


class o8k
{

constructor()
{
  this.b0l = Array(e9p).fill(b4h.r7x);
 	this.b5w = i6u.p8k;
 	this.a7i = new d5f();
 	this.i6z();
}

o0o()
{
	let x4c = new o8k();
	o2d(x4c.b0l, this.b0l);
	x4c.b5w = this.b5w;
  x4c.a7i = this.a7i.o0o();
  x4c.whiteKing_ = this.whiteKing_;
	x4c.blackKing_ = this.blackKing_;
	return x4c;
}

h7r(k6a)
{
	return this.b5w == k6a.b5w &&
		q7u(this.b0l, k6a.b0l);
}

u5a(k6a)
{
	return !this.h7r(k6a);
}

y1r()
{
 	o2d(this.b0l, a1l);
 	this.b5w = i6u.p8k;
  this.a7i.p0m = false;
	this.a7i.l6d = u4s;
	this.a7i.w7l = d6n;
	this.a7i.x1x = f8e;
	this.a7i.j9x = a1;
	this.a7i.c0f = k3x;
	this.a7i.a1p = a8;
	this.a7i.k2v = y3r;
	this.a7i.h3h = true;
	this.a7i.n9s = true;
	this.a7i.v7x = true;
	this.a7i.m0v = true;
 	this.whiteKing_ = u4s;
	this.blackKing_ = d6n;
}

q8p()
{
	return this.b5w == i6u.p8k && this.z0e();
}

z0e()
{
	return q7u(this.b0l, a1l);
}

i6z()
{
	this.b0l.fill(b4h.r7x);
	this.b5w = i6u.p8k;
	this.a7i.p0m = false;
	this.a7i.l6d = u4s;
	this.a7i.w7l = d6n;
	this.a7i.x1x = f8e;
	this.a7i.j9x = a1;
	this.a7i.c0f = k3x;
	this.a7i.a1p = a8;
	this.a7i.k2v = y3r;
	this.a7i.h3h = false;
	this.a7i.n9s = false;
	this.a7i.v7x = false;
	this.a7i.m0v = false;
  this.whiteKing_ = y3r;
  this.blackKing_ = y3r;
}

a6d()
{
	return this.b5w == i6u.p8k && this.e8v();
}

e8v()
{
	return this.b0l.every(b4h.r7x);
}

w3w()
{
  return this.b0l.slice();
}

p3t(d9d)
{
	return this.b0l[d9d];
}

c9p(d9d, r4y)
{
	if (this.b0l[d9d] == b4h.q6y)
	{
		this.whiteKing_ = y3r;
	}
	else if (this.b0l[d9d] == b4h.y7s)
	{
		this.blackKing_ = y3r;
	}
	if (r4y == b4h.q6y)
	{
		this.whiteKing_ = d9d;
	}
	else if (r4y == b4h.y7s)
	{
		this.blackKing_ = d9d;
	}
	this.b0l[d9d] = r4y;
}

s7m()
{
	this.b5w = i6u.p8k;
}

t6k()
{
	this.b5w = i6u.d9a;
}

f5y()
{
	if (this.b5w == i6u.p8k)
	{
		this.b5w = i6u.d9a;
	}
	else
	{
		this.b5w = i6u.p8k;
	}
}

p8t()
{
	return this.b5w == i6u.p8k;
}

g9c()
{
	return this.b5w == i6u.d9a;
}

s6s(d9d)
{
	return this.b0l[d9d] == b4h.r7x;
}

c8w(d9d)
{
	let r4y = this.b0l[d9d];
	return r4y == b4h.b3m ||
		r4y == b4h.e0h ||
    r4y == b4h.a2r ||
    r4y == b4h.w3c ||
    r4y == b4h.y0a ||
    r4y == b4h.q6y;
}

d9x(d9d)
{
	let r4y = this.b0l[d9d];
	return r4y == b4h.u2m ||
		r4y == b4h.y6y ||
    r4y == b4h.q3k ||
    r4y == b4h.s6h ||
    r4y == b4h.u4n ||
    r4y == b4h.y7s;
}

x5b(d9d)
{
  let r4y = this.b0l[d9d];
	return r4y == b4h.b3m;
}

g9i(d9d)
{
  let r4y = this.b0l[d9d];
	return r4y == b4h.e0h;
}

e6g(d9d)
{
  let r4y = this.b0l[d9d];
	return r4y == b4h.a2r;
}

i4m(d9d)
{
  let r4y = this.b0l[d9d];
	return r4y == b4h.w3c;
}

q1p(d9d)
{
  let r4y = this.b0l[d9d];
	return r4y == b4h.y0a;
}

z3y(d9d)
{
  let r4y = this.b0l[d9d];
	return r4y == b4h.q6y;
}

z3s(d9d)
{
  let r4y = this.b0l[d9d];
	return r4y == b4h.u2m;
}

b0s(d9d)
{
  let r4y = this.b0l[d9d];
	return r4y == b4h.y6y;
}

a3z(d9d)
{
  let r4y = this.b0l[d9d];
	return r4y == b4h.q3k;
}

l0o(d9d)
{
  let r4y = this.b0l[d9d];
	return r4y == b4h.s6h;
}

i7t(d9d)
{
  let r4y = this.b0l[d9d];
	return r4y == b4h.u4n;
}

q4r(d9d)
{
  let r4y = this.b0l[d9d];
	return r4y == b4h.y7s;
}

f4x()
{
  let p0n = 0;
	for (const d9d of x0c)
	{
    if (this.c8w(d9d))
		{
			p0n++;
		}
	}
	return p0n;
}

d2w()
{
  let p0n = 0;
	for (const d9d of x0c)
	{
    if (this.d9x(d9d))
		{
			p0n++;
		}
	}
	return p0n;
}

l4r(b6f)
{
  this.a7i = b6f.o0o();
}

b6f()
{
  return this.a7i.o0o();
}

j7z(z0x)
{
 	this.a7i.k2v = y3r; 
	if (z0x.x6s())
	{
		this.f5y();
		return;
	}
	if (z0x.c8w())
	{
		if (z0x.x0v())
		{
			this.b0l[z0x.k4u] = b4h.r7x;
			if (z0x.l0p == b4h.s6h)
			{
				if (z0x.k4u == this.a7i.a1p)
				{
					this.a7i.m0v = false;
				}
				else if (z0x.k4u == this.a7i.c0f)
				{
					this.a7i.v7x = false;
				}
			}
		}
		this.b0l[z0x.e7g] = b4h.r7x;
		this.b0l[z0x.x7z] = z0x.q2q;
		if (z0x.e5i == b4h.b3m)
		{
			if ((z0x.x7z - z0x.e7g) == 16)
			{
				this.a7i.k2v = (z0x.e7g + 8);
			}
		}
		else if (z0x.e5i == b4h.w3c)
		{
			if (z0x.e7g == this.a7i.j9x)
			{
				this.a7i.n9s = false;
			}
			else if (z0x.e7g == this.a7i.x1x)
			{
				this.a7i.h3h = false;
			}
		}
		else if (z0x.e5i == b4h.q6y)
		{
			if (z0x.m4a())
			{
				if (z0x.x7z == p5d)
				{
					
					if (this.a7i.j9x != z0x.x7z)
					{
						this.b0l[this.a7i.j9x] = b4h.r7x;
					}
					this.b0l[l4i] = b4h.w3c;
				}
				else if (z0x.x7z == h5s)
				{
					
					if (this.a7i.x1x != z0x.x7z)
					{
						this.b0l[this.a7i.x1x] = b4h.r7x;
					}
					this.b0l[t6y] = b4h.w3c;
				}
			}
			this.a7i.n9s = false;
			this.a7i.h3h = false;
			this.whiteKing_ = z0x.x7z;
		}
	}
	else
	{
		if (z0x.x0v())
		{
			this.b0l[z0x.k4u] = b4h.r7x;
			if (z0x.l0p == b4h.w3c)
			{
				if (z0x.k4u == this.a7i.j9x)
				{
					this.a7i.n9s = false;
				}
				else if (z0x.k4u == this.a7i.x1x)
				{
					this.a7i.h3h = false;
				}
			}
		}
		this.b0l[z0x.e7g] = b4h.r7x;
		this.b0l[z0x.x7z] = z0x.q2q;
		if (z0x.e5i == b4h.u2m)
		{
			if ((z0x.x7z - z0x.e7g) == -16)
			{
				this.a7i.k2v = (z0x.e7g - 8);
			}
		}
		else if (z0x.e5i == b4h.s6h)
		{
			if (z0x.e7g == this.a7i.a1p)
			{
				this.a7i.m0v = false;
			}
			else if (z0x.e7g == this.a7i.c0f)
			{
				this.a7i.v7x = false;
			}
		}
		else if (z0x.e5i == b4h.y7s)
		{
			if (z0x.m4a())
			{
				if (z0x.x7z == n5a)
				{
					
					if (this.a7i.a1p != z0x.x7z)
					{
						this.b0l[this.a7i.a1p] = b4h.r7x;
					}
					this.b0l[i8a] = b4h.s6h;
				}
				else if (z0x.x7z == j1s)
				{
					
					if (this.a7i.c0f != z0x.x7z)
					{
						this.b0l[this.a7i.c0f] = b4h.r7x;
					}
					this.b0l[r5f] = b4h.s6h;
				}
			}
			this.a7i.m0v = false;
			this.a7i.v7x = false;
			this.blackKing_ = z0x.x7z;
		}
	}
	this.f5y();
}

x7e(z0x)
{
 	if (z0x.x6s())
	{
		this.f5y();
		return;
	}
	if (z0x.c8w())
	{
		this.b0l[z0x.x7z] = b4h.r7x;
		this.b0l[z0x.e7g] = z0x.e5i;
		if (z0x.e5i == b4h.q6y)
		{
			if (z0x.m4a())
			{
				if (z0x.x7z == p5d)
				{
					
					if (l4i != z0x.e7g)
					{
						this.b0l[l4i] = b4h.r7x;
					}
					this.b0l[this.a7i.j9x] = b4h.w3c;
				}
				else if (z0x.x7z == h5s)
				{
					
					if (t6y != z0x.e7g)
					{
						this.b0l[t6y] = b4h.r7x;
					}
					this.b0l[this.a7i.x1x] = b4h.w3c;
				}
			}
			this.whiteKing_ = z0x.e7g;
		}
		if (z0x.x0v())
		{
			this.b0l[z0x.k4u] = z0x.l0p;
		}
	}
	else
	{
		this.b0l[z0x.x7z] = b4h.r7x;
		this.b0l[z0x.e7g] = z0x.e5i;
		if (z0x.e5i == b4h.y7s)
		{
			if (z0x.m4a())
			{
				if (z0x.x7z == n5a)
				{
					
					if (i8a != z0x.e7g)
					{
						this.b0l[i8a] = b4h.r7x;
					}
					this.b0l[this.a7i.a1p] = b4h.s6h;
				}
				else if (z0x.x7z == j1s)
				{
					
					if (r5f != z0x.e7g)
					{
						this.b0l[r5f] = b4h.r7x;
					}
					this.b0l[this.a7i.c0f] = b4h.s6h;
				}
			}
			this.blackKing_ = z0x.e7g;
		}
		if (z0x.x0v())
		{
			this.b0l[z0x.k4u] = z0x.l0p;
		}
	}
	this.f5y();
}

q6y()
{
  return this.whiteKing_;
}

y7s()
{
  return this.blackKing_;
}

y8a()
{
	return this.a7i.h3h;
}

r5w()
{
	return this.a7i.n9s;
}

r8s()
{
	return this.a7i.v7x;
}

w2h()
{
	return this.a7i.m0v;
}

l6d()
{
  return this.a7i.l6d;
}

w7l()
{
  return this.a7i.w7l;
}

x1x()
{
  return this.a7i.x1x;
}

j9x()
{
  return this.a7i.j9x;
}

c0f()
{
  return this.a7i.c0f;
}

a1p()
{
  return this.a7i.a1p;
}

k2v()
{
  return this.a7i.k2v;
}

p0i()
{
	return this.a7i.p0m;
}

}
const e0z = 0;
const z8p   = 1;
const u7l  = e0z;

function g3w()
{
  let c0k = [];
	c0k.push("CBurnettt (Lichess)");
	c0k.push("Merida (Lichess)");
	return c0k;
}

class n1y
{

constructor()
{
	this.i4f = new w3p();
	this.s7x = null;
}

o0o()
{
	let k7l = new n1y();
	k7l.i4f = this.i4f.o0o();
	k7l.s7x = null;
	if (this.s7x)
	{
		k7l.s7x = this.s7x.o0o();
	}
	return k7l;
}

h7r(k6a)
{
	if (this.i4f.u5a(k6a))
	{
		return false;
	}
	return true;
}

u5a(k6a)
{
	return !this.h7r(k6a);
}

r7x()
{
	return this.i4f.r7x();
}

e7g()
{
	return this.i4f.e7g;
}

x7z()
{
	return this.i4f.x7z;
}

e5i()
{
	return this.i4f.e5i;
}

q2q()
{
	return this.i4f.q2q;
}

k4u()
{
	return this.i4f.k4u;
}

l0p()
{
	return this.i4f.l0p;
}

s6z()
{
	return this.i4f.s6z();
}

c8w()
{
	return this.i4f.c8w();
}

d9x()
{
	return this.i4f.d9x();
}

w5e()
{
	return this.i4f.w5e();
}

x6s()
{
	return this.i4f.x6s();
}

x0v()
{
	return this.i4f.x0v();
}

c7t()
{
	if (this.s7x == null)
	{
		this.s7x = new v0r();
	}
}

e0w()
{
	if (this.s7x)
	{
		if (this.s7x.r7x())
		{
			this.e0p();
		}
	}
}

d2r()
{
	return this.s7x != null;
}

e0p()
{
	this.s7x = null;
}

m7d(a5l)
{
	this.c7t();
	this.s7x = a5l.o0o();
}

v5g()
{
	return this.s7x;
}

m5c(k6a)
{
	if (this.s7x && !k6a.s7x)
	{
		return false;
	}
	if (!this.s7x && k6a.s7x)
	{
		return false;
	}
	if (!this.s7x && !k6a.s7x)
	{
		return true;
	}
	return this.s7x.h7r(k6a.s7x);
}

m8v()
{
	if (this.s7x)
	{
		this.s7x.x4s = '';
		this.e0w();
	}
}

w5k()
{
	if (this.s7x)
	{
		return this.s7x.x4s.length != 0;
	}
	else
	{
		return false;
	}
}

x4s()
{
	if (this.s7x)
	{
		return this.s7x.x4s;
	}
	else
	{
		return '';
	}
}

k2y(r0s)
{
	this.c7t();
	this.s7x.x4s = r0s;
	this.e0w();
}

y9e()
{
	if (this.s7x)
	{
		this.s7x.h5x = '';
		this.e0w();
	}
}

k1k()
{
	if (this.s7x)
	{
		return this.s7x.h5x.length != 0;
	}
	else
	{
		return false;
	}
}

h5x()
{
	if (this.s7x)
	{
		return this.s7x.h5x;
	}
	else
	{
		return '';
	}
}

b1f(r0s)
{
	this.c7t();
	this.s7x.h5x = r0s;
	this.e0w();
}

j8c()
{
	if (this.s7x)
	{
		this.s7x.t2c = e9u.h2n;
		this.e0w();
	}
}

u0d()
{
	if (this.s7x)
	{
		return this.s7x.t2c != e9u.h2n;
	}
	else
	{
		return false;
	}
}

t2c()
{
	if (this.s7x)
	{
		return this.s7x.t2c;
	}
	else
	{
		return e9u.h2n;
	}
}

c4e(t2c)
{
	this.c7t();
	this.s7x.t2c = t2c;
	this.e0w();
}

w2y()
{
	if (this.s7x)
	{
		this.s7x.style = q5f.h2n;
		this.e0w();
	}
}

p5i()
{
	if (this.s7x)
	{
		return this.s7x.style != q5f.h2n;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.s7x)
	{
		return this.s7x.style;
	}
	else
	{
		return q5f.h2n;
	}
}

b7c(style)
{
	this.c7t();
	this.s7x.style = style;
	this.e0w();
}

s3s()
{
	if (this.s7x)
	{
		this.s7x.value = o9q.h2n;
		this.e0w();
	}
}

v4x()
{
	if (this.s7x)
	{
		return this.s7x.value != o9q.h2n;
	}
	else
	{
		return false;
	}
}

value()
{
	if (this.s7x)
	{
		return this.s7x.value;
	}
	else
	{
		return o9q.h2n;
	}
}

i8l(value)
{
	this.c7t();
	this.s7x.value = value;
	this.e0w();
}

m0o()
{
	if (this.s7x)
	{
		this.s7x.z4y = c2u.h2n;
		this.e0w();
	}
}

r5q()
{
	if (this.s7x)
	{
		return this.s7x.z4y != c2u.h2n;
	}
	else
	{
		return false;
	}
}

z4y()
{
	if (this.s7x)
	{
		return this.s7x.z4y;
	}
	else
	{
		return c2u.h2n;
	}
}

l7d(z4y)
{
	this.c7t();
	this.s7x.z4y = z4y;
	this.e0w();
}

k4d()
{
  
}

e8e()
{
	if (this.s7x)
	{
 		if (this.s7x.x4s.length != 0)
    {
      let g7d = this.s7x.x4s.indexOf("[#]");
      return g7d != -1;
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

c6a()
{
  
}

t8e()
{
	if (this.s7x)
	{
		this.s7x.t7b = false;
		this.e0w();
	}
}

d1o()
{
	if (this.s7x)
	{
		return this.s7x.t7b;
	}
	else
	{
		return false;
	}
}

l2z()
{
	this.c7t();
	this.s7x.t7b = true;
	this.e0w();
}

a2u()
{
	if (this.s7x)
	{
		this.s7x.i6b = false;
		this.e0w();
	}
}

k6q()
{
	if (this.s7x)
	{
		return this.s7x.i6b;
	}
	else
	{
		return false;
	}
}

a4l()
{
	this.c7t();
	this.s7x.i6b = true;
	this.e0w();
}

u8e()
{
	if (this.s7x)
	{
		this.s7x.y2n.y3q();
		this.s7x.a0x.y3q();
		this.e0w();
	}
}

f7o()
{
	if (this.s7x)
	{
		return this.y4a() || this.x1c();
	}
	else
	{
		return false;
	}
}

m1e()
{
	if (this.s7x)
	{
		this.s7x.y2n.y3q();
		this.e0w();
	}
}

y4a()
{
	if (this.s7x)
	{
		return !this.s7x.y2n.r7x();
	}
	else
	{
		return false;
	}
}

y2n()
{
	if (this.s7x)
	{
		return this.s7x.y2n.o0o();
	}
	else
	{
		return new s7c();
	}
}

u6i(y2n)
{
	this.c7t();
	this.s7x.y2n = y2n.o0o();
	this.e0w();
}

k8r()
{
	if (this.s7x)
	{
		this.s7x.a0x.y3q();
		this.e0w();
	}
}

x1c()
{
	if (this.s7x)
	{
		return !this.s7x.a0x.r7x();
	}
	else
	{
		return false;
	}
}

a0x()
{
	if (this.s7x)
	{
		return this.s7x.a0x.o0o();
	}
	else
	{
		return new x6l();
	}
}

z3n(a0x)
{
	this.c7t();
	this.s7x.a0x = a0x.o0o();
	this.e0w();
}

g5q()
{
	if (this.s7x)
	{
		this.s7x.f3u.c1b();
		this.e0w();
	}
}

m9d()
{
	if (this.s7x)
	{
		return this.s7x.f3u.q7n();
	}
	else
	{
		return false;
	}
}

f3u()
{
	if (this.s7x)
	{
		return this.s7x.f3u.o0o();
	}
	else
	{
		return new v9v();
	}
}

p8l(f3u)
{
	this.c7t();
	this.s7x.f3u = f3u.o0o();
	this.e0w();
}

p4n(p7x)
{
	this.i4f = p7x.o0o();
	this.s7x = null;
}

p7x()
{
	let u5j = new w3p();
  return Object.assign(u5j, this.i4f);
}

}

function l7z(p7x)
{
  let x1i = new n1y();
  x1i.p4n(p7x);
  return x1i;
}
class w3p
{

constructor()
{
	this.e7g = y3r;
	this.e5i = b4h.r7x;
	this.x7z = y3r;
	this.q2q = b4h.r7x;
	this.k4u = y3r;
	this.o7g = b4h.r7x;
	this.type = o2p.h2n;
}

o0o()
{
	let u5j = new w3p();
	u5j.e7g = this.e7g;
	u5j.e5i = this.e5i;
	u5j.x7z = this.x7z;
	u5j.q2q = this.q2q;
	u5j.k4u = this.k4u;
	u5j.l0p = this.l0p;
	u5j.type = this.type;
	return u5j;
}

h7r(k6a)
{
	if (
		this.e7g != k6a.e7g ||
		this.e5i != k6a.e5i ||
		this.x7z != k6a.x7z ||
		this.q2q != k6a.q2q ||
		this.k4u != k6a.k4u ||
		this.l0p != k6a.l0p ||
    this.type != k6a.type)
	{
		return false;
	}
	else
	{
		return true;
	}
}

u5a(k6a)
{
	return !this.h7r(k6a);
}

r7x()
{
	return this.type == o2p.h2n;
}

c8w()
{
	return this.e5i == b4h.b3m ||
		this.e5i == b4h.e0h ||
    this.e5i == b4h.a2r ||
    this.e5i == b4h.w3c ||
    this.e5i == b4h.y0a ||
    this.e5i == b4h.q6y;
}

d9x()
{
	return this.e5i == b4h.u2m ||
		this.e5i == b4h.y6y ||
    this.e5i == b4h.q3k ||
    this.e5i == b4h.s6h ||
    this.e5i == b4h.u4n ||
    this.e5i == b4h.y7s;
}

x0v()
{
	return this.k4u != y3r;
}

w5e()
{
	return this.e5i != this.q2q;
}

o3j()
{
  return this.type == o2p.z7r;
}

x6s()
{
	return this.type == o2p.h2n;
}

m4a()
{
	return this.type == o2p.c7g;
}

s6z()
{
	if (this.x0v())
  {
    return 1;
  }
  else
  {
    return 0;
  }
}

}

var northSquares = [];
var northEastSquares = [];
var eastSquares = [];
var southEastSquares = [];
var southSquares = [];
var southWestSquares = [];
var westSquares = [];
var northWestSquares = [];

var northEastSquare = [];
var eastSquare = [];
var southEastSquare = [];
var southWestSquare =[];
var westSquare = [];
var northWestSquare = [];

var kingSquares = [];
var knightSquares = [];

var moveGeneratorInited = false;

function o6c(w3w, p7x)
{
	if (p7x.type == o2p.q7y)
	{
		w3w[p7x.x7z] = w3w[p7x.e7g];
		w3w[p7x.e7g] = b4h.r7x;
	}
	else if (p7x.type == o2p.z7r)
	{
		let k4u = (p7x.x7z - 8);
		w3w[k4u] = b4h.r7x;
		w3w[p7x.x7z] = b4h.b3m;
		w3w[p7x.e7g] = b4h.r7x;
	}
	else if (p7x.type == o2p.y0y)
	{
		w3w[p7x.x7z] = b4h.y0a;
		w3w[p7x.e7g] = b4h.r7x;
	}
	else if (p7x.type == o2p.o5c)
	{
		w3w[p7x.x7z] = b4h.w3c;
		w3w[p7x.e7g] = b4h.r7x;
	}
	else if (p7x.type == o2p.b7w)
	{
		w3w[p7x.x7z] = b4h.a2r;
		w3w[p7x.e7g] = b4h.r7x;
	}
	else if (p7x.type == o2p.u9n)
	{
		w3w[p7x.x7z] = b4h.e0h;
		w3w[p7x.e7g] = b4h.r7x;
	}
}

function z3p(w3w, p7x)
{
	if (p7x.type == o2p.q7y)
	{
		w3w[p7x.x7z] = w3w[p7x.e7g];
		w3w[p7x.e7g] = b4h.r7x;
	}
	else if (p7x.type == o2p.z7r)
	{
		let k4u = (p7x.x7z + 8);
		w3w[k4u] = b4h.r7x;
		w3w[p7x.x7z] = b4h.u2m;
		w3w[p7x.e7g] = b4h.r7x;
	}
	else if (p7x.type == o2p.y0y)
	{
		w3w[p7x.x7z] = b4h.u4n;
		w3w[p7x.e7g] = b4h.r7x;
	}
	else if (p7x.type == o2p.o5c)
	{
		w3w[p7x.x7z] = b4h.s6h;
		w3w[p7x.e7g] = b4h.r7x;
	}
	else if (p7x.type == o2p.b7w)
	{
		w3w[p7x.x7z] = b4h.q3k;
		w3w[p7x.e7g] = b4h.r7x;
	}
	else if (p7x.type == o2p.u9n)
	{
		w3w[p7x.x7z] = b4h.y6y;
		w3w[p7x.e7g] = b4h.r7x;
	}
}

function b0a(w3w, p7x)
{
	if (p7x.x7z == p5d)
	{
		w3w[p7x.x7z] = b4h.q6y;
		w3w[p7x.e7g] = b4h.r7x;
		w3w[a1] = b4h.r7x; 
		w3w[l4i] = b4h.w3c;
	}
	else
	{
		w3w[p7x.x7z] = b4h.q6y;
		w3w[p7x.e7g] = b4h.r7x;
		w3w[f8e] = b4h.r7x; 
		w3w[t6y] = b4h.w3c;
	}
}

function n4w(w3w, p7x)
{
	if (p7x.x7z == n5a)
	{
		w3w[p7x.x7z] = b4h.y7s;
		w3w[p7x.e7g] = b4h.r7x;
		w3w[a8] = b4h.r7x; 
		w3w[i8a] = b4h.s6h;
	}
	else
	{
		w3w[p7x.x7z] = b4h.y7s;
		w3w[p7x.e7g] = b4h.r7x;
		w3w[k3x] = b4h.r7x; 
		w3w[r5f] = b4h.s6h;
	}
}

function l4l(w3w, p7x, b6f)
{
	if (p7x.x7z == p5d)
	{
		w3w[p7x.x7z] = b4h.q6y;
		w3w[p7x.e7g] = b4h.r7x;
		if (b6f.j9x != p7x.x7z)
		{
			w3w[b6f.j9x] = b4h.r7x;
		}
		w3w[l4i] = b4h.w3c;
	}
	else if (p7x.x7z == h5s)
	{
		w3w[p7x.x7z] = b4h.q6y;
		w3w[p7x.e7g] = b4h.r7x;
		if (b6f.x1x != p7x.x7z)
		{
			w3w[b6f.x1x] = b4h.r7x;
		}
		w3w[t6y] = b4h.w3c;
	}
}

function c2f(w3w, p7x, b6f)
{
	if (p7x.x7z == n5a)
	{
		w3w[p7x.x7z] = b4h.y7s;
		w3w[p7x.e7g] = b4h.r7x;
		if (b6f.a1p != p7x.x7z)
		{
			w3w[b6f.a1p] = b4h.r7x;
		}
		w3w[i8a] = b4h.s6h;
	}
	else if (p7x.x7z == j1s)
	{
		w3w[p7x.x7z] = b4h.y7s;
		w3w[p7x.e7g] = b4h.r7x;
		if (b6f.c0f != p7x.x7z)
		{
			w3w[b6f.c0f] = b4h.r7x;
		}
		w3w[r5f] = b4h.s6h;
	}
}

function f0d(b6i, p7x)
{
	let l4z = b6i.q6y();
	if (l4z == y3r) return true;
	if (p7x.e5i == b4h.q6y)
	{
		l4z = p7x.x7z;
	}
	let w3w = b6i.w3w();
	if (p7x.type == o2p.c7g)
	{
		if (b6i.p0i())
		{
			l4l(w3w, p7x, b6i.b6f());
		}
		else
		{
			b0a(w3w, p7x);
		}
	}
	else
	{
		o6c(w3w, p7x);
	}
	return !r2e(w3w, l4z);
}

function p8d(b6i, p7x)
{
	let l4z = b6i.y7s();
	if (l4z == y3r) return true;
	if (p7x.e5i == b4h.y7s)
	{
		l4z = p7x.x7z;
	}
	let w3w = b6i.w3w();
	if (p7x.type == o2p.c7g)
	{
		if (b6i.p0i())
		{
			c2f(w3w, p7x, b6i.b6f());
		}
		else
		{
			n4w(w3w, p7x);
		}
	}
	else
	{
		z3p(w3w, p7x);
	}
	return !y7j(w3w, l4z);
}

function a0b(y8v, b6i, e7g)
{
	if (i4c(e7g) == n4t)
	{
		return;
	}
	e4r(y8v, b6i, e7g);
	let x7z = northWestSquare[e7g];
	if (x7z != y3r)
	{
		n7a(y8v, b6i, e7g, x7z);
	}
	x7z = northEastSquare[e7g];
	if (x7z != y3r)
	{
		n7a(y8v, b6i, e7g, x7z);
	}
}

function e5b(y8v, b6i, e7g)
{
	if (i4c(e7g) == rank_1)
	{
		return;
	}
	k0u(y8v, b6i, e7g);
	let x7z = southEastSquare[e7g];
	if (x7z != y3r)
	{
		l3w(y8v, b6i, e7g, x7z);
	}
	x7z = southWestSquare[e7g];
	if (x7z != y3r)
	{
		l3w(y8v, b6i, e7g, x7z);
	}
}

function e4r(y8v, b6i, e7g)
{
	let x7z = (e7g + d0x);
	if (b6i.s6s(x7z))
	{
		if (i4c(e7g) == s5a)
		{
			v5s(y8v, b6i, e7g, x7z);
		}
		else
		{
			a6c(y8v, b6i, e7g, x7z, o2p.q7y);
			if (i4c(e7g) == h0p)
			{
				let x7z = (e7g + d0x + d0x);
				if (b6i.s6s(x7z))
				{
					a6c(y8v, b6i, e7g, x7z, o2p.q7y);
				}
			}
		}
	}
}

function k0u(y8v, b6i, e7g)
{
	let x7z = (e7g + t4a);
	if (b6i.s6s(x7z))
	{
		if (i4c(e7g) == h0p)
		{
			l8c(y8v, b6i, e7g, x7z);
		}
		else
		{
			a6c(y8v, b6i, e7g, x7z, o2p.q7y);
			if (i4c(e7g) == s5a)
			{
				let x7z = (e7g + t4a + t4a);
				if (b6i.s6s(x7z))
				{
					a6c(y8v, b6i, e7g, x7z, o2p.q7y);
				}
			}
		}
	}
}

function n7a(y8v, b6i, e7g, x7z)
{
	if (!b6i.d9x(x7z))
	{
		return;
	}
	if (i4c(e7g) == s5a)
	{
		e7i(y8v, b6i, e7g, x7z);
	}
	else
	{
		n8v(y8v, b6i, e7g, x7z, o2p.q7y);
	}
}

function l3w(y8v, b6i, e7g, x7z)
{
	if (!b6i.c8w(x7z))
	{
		return;
	}
	if (i4c(e7g) == h0p)
	{
		s5d(y8v, b6i, e7g, x7z);
	}
	else
	{
		n8v(y8v, b6i, e7g, x7z, o2p.q7y);
	}
}

function a7j(y8v, b6i, e7g, z6n)
{
	for (const x7z of z6n)
	{
		if (b6i.s6s(x7z))
		{
			a6c(y8v, b6i, e7g, x7z, o2p.q7y);
		}
		else if (b6i.d9x(x7z))
		{
			n8v(y8v, b6i, e7g, x7z, o2p.q7y);
		}
	}
}

function l3r(y8v, b6i, e7g, z6n)
{
	for (const x7z of z6n)
	{
		if (b6i.s6s(x7z))
		{
			a6c(y8v, b6i, e7g, x7z, o2p.q7y);
		}
		else if (b6i.c8w(x7z))
		{
			n8v(y8v, b6i, e7g, x7z, o2p.q7y);
		}
	}
}

function u9m(y8v, b6i, e7g)
{
	a7j(y8v, b6i, e7g, knightSquares[e7g]);
}

function j5a(y8v, b6i, e7g)
{
	l3r(y8v, b6i, e7g, knightSquares[e7g]);
}

function m8n(y8v, b6i, e7g)
{
	s0y(y8v, b6i, e7g, northEastSquares[e7g]);
	s0y(y8v, b6i, e7g, southEastSquares[e7g]);
	s0y(y8v, b6i, e7g, southWestSquares[e7g]);
	s0y(y8v, b6i, e7g, northWestSquares[e7g]);
}

function h2o(y8v, b6i, e7g)
{
	d3x(y8v, b6i, e7g, northEastSquares[e7g]);
	d3x(y8v, b6i, e7g, southEastSquares[e7g]);
	d3x(y8v, b6i, e7g, southWestSquares[e7g]);
	d3x(y8v, b6i, e7g, northWestSquares[e7g]);
}

function f5x(y8v, b6i, e7g)
{
	s0y(y8v, b6i, e7g, northSquares[e7g]);
	s0y(y8v, b6i, e7g, eastSquares[e7g]);
	s0y(y8v, b6i, e7g, southSquares[e7g]);
	s0y(y8v, b6i, e7g, westSquares[e7g]);
}

function p2a(y8v, b6i, e7g)
{
	d3x(y8v, b6i, e7g, northSquares[e7g]);
	d3x(y8v, b6i, e7g, eastSquares[e7g]);
	d3x(y8v, b6i, e7g, southSquares[e7g]);
	d3x(y8v, b6i, e7g, westSquares[e7g]);
}

function e6a(y8v, b6i, e7g)
{
	s0y(y8v, b6i, e7g, northSquares[e7g]);
	s0y(y8v, b6i, e7g, northEastSquares[e7g]);
	s0y(y8v, b6i, e7g, eastSquares[e7g]);
	s0y(y8v, b6i, e7g, southEastSquares[e7g]);
	s0y(y8v, b6i, e7g, southSquares[e7g]);
	s0y(y8v, b6i, e7g, southWestSquares[e7g]);
	s0y(y8v, b6i, e7g, westSquares[e7g]);
	s0y(y8v, b6i, e7g, northWestSquares[e7g]);
}

function j8m(y8v, b6i, e7g)
{
	d3x(y8v, b6i, e7g, northSquares[e7g]);
	d3x(y8v, b6i, e7g, northEastSquares[e7g]);
	d3x(y8v, b6i, e7g, eastSquares[e7g]);
	d3x(y8v, b6i, e7g, southEastSquares[e7g]);
	d3x(y8v, b6i, e7g, southSquares[e7g]);
	d3x(y8v, b6i, e7g, southWestSquares[e7g]);
	d3x(y8v, b6i, e7g, westSquares[e7g]);
	d3x(y8v, b6i, e7g, northWestSquares[e7g]);
}

function d1t(y8v, b6i, e7g)
{
	a6b(y8v, b6i, e7g, kingSquares[e7g]);
}

function h7d(y8v, b6i, e7g)
{
	g9l(y8v, b6i, e7g, kingSquares[e7g]);
}

function s0y(y8v, b6i, e7g, z6n)
{
	for (const x7z of z6n)
	{
		if (b6i.s6s(x7z))
		{
			a6c(y8v, b6i, e7g, x7z, o2p.q7y);
		}
		else if (b6i.c8w(x7z))
		{
			break;
		}
		else
		{
			n8v(y8v, b6i, e7g, x7z, o2p.q7y);
			break;
		}
	}
}

function d3x(y8v, b6i, e7g, z6n)
{
	for (const x7z of z6n)
	{
		if (b6i.s6s(x7z))
		{
			a6c(y8v, b6i, e7g, x7z, o2p.q7y);
		}
		else if (b6i.d9x(x7z))
		{
			break;
		}
		else
		{
			n8v(y8v, b6i, e7g, x7z, o2p.q7y);
			break;
		}
	}
}

function a6b(y8v, b6i, e7g, z6n)
{
	for (const x7z of z6n)
	{
		if (b6i.s6s(x7z))
		{
			a6c(y8v, b6i, e7g, x7z, o2p.q7y);
		}
		else if (b6i.d9x(x7z))
		{
			n8v(y8v, b6i, e7g, x7z, o2p.q7y);
		}
	}
}

function g9l(y8v, b6i, e7g, z6n)
{
	for (const x7z of z6n)
	{
		if (b6i.s6s(x7z))
		{
			a6c(y8v, b6i, e7g, x7z, o2p.q7y);
		}
		else if (b6i.c8w(x7z))
		{
			n8v(y8v, b6i, e7g, x7z, o2p.q7y);
		}
	}
}

function t2z(left, v1h)
{
	let g1q = [];
	if (left > v1h)
	{
    let b9q = left;
    left = v1h;
    v1h = b9q;
	}
	for (let i = left + 1; i < v1h; i++)
	{
		g1q.push(i);
	}
	return g1q;
}

function q3e(y8v, b6i)
{
	if (!b6i.z3y(b6i.l6d()))
	{
		return;
	}
	if (!b6i.i4m(b6i.j9x()))
	{
		return;
	}
	let m5q = t2z(b6i.j9x(), l4i);
  for (const d9d of m5q)
	{
		if (d9d != b6i.l6d())
		{
			if (!b6i.s6s(d9d))
			{
				return;
			}
		}
	}
	let p5a = t2z(b6i.l6d(), p5d);
  for (const d9d of p5a)
	{
		if (d9d != b6i.j9x())
		{
			if (!b6i.s6s(d9d))
			{
				return;
			}
		}
	}
  for (const d9d of p5a)
	{
		if (l1y(b6i, d9d))
		{
			return;
		}
	}
	if (l1y(b6i, b6i.l6d()))
	{
		return;
	}
	if (b6i.l6d() != p5d)
	{
		if (!b6i.s6s(p5d))
		{
			if (p5d != b6i.j9x())
			{
				return;
			}
		}
	}
	if (b6i.j9x() != l4i)
	{
		if (!b6i.s6s(l4i))
		{
			if (l4i != b6i.l6d())
			{
				return;
			}
		}
	}
	a6c(y8v, b6i, b6i.l6d(), p5d, o2p.c7g);
}

function r1o(y8v, b6i)
{
	if (!b6i.z3y(b6i.l6d()))
	{
		return;
	}
	if (!b6i.i4m(b6i.x1x()))
	{
		return;
	}
	let m5q = t2z(b6i.x1x(), t6y);
  for (const d9d of m5q)
	{
		if (d9d != b6i.l6d())
		{
			if (!b6i.s6s(d9d))
			{
				return;
			}
		}
	}
	let p5a = t2z(b6i.l6d(), h5s);
  for (const d9d of p5a)
	{
		if (d9d != b6i.x1x())
		{
			if (!b6i.s6s(d9d))
			{
				return;
			}
		}
	}
  for (const d9d of p5a)
	{
		if (l1y(b6i, d9d))
		{
			return;
		}
	}
	if (l1y(b6i, b6i.l6d()))
	{
		return;
	}
	if (b6i.l6d() != h5s)
	{
		if (!b6i.s6s(h5s))
		{
			if (h5s != b6i.x1x())
			{
				return;
			}
		}
	}
	if (b6i.x1x() != t6y)
	{
		if (!b6i.s6s(t6y))
		{
			if (t6y != b6i.l6d())
			{
				return;
			}
		}
	}
	a6c(y8v, b6i, b6i.l6d(), h5s, o2p.c7g);
}

function z2g(y8v, b6i)
{
	if (!b6i.q4r(b6i.w7l()))
	{
		return;
	}
	if (!b6i.l0o(b6i.c0f()))
	{
		return;
	}
	let m5q = t2z(b6i.c0f(), r5f);
  for (const d9d of m5q)
	{
		if (d9d != b6i.w7l())
		{
			if (!b6i.s6s(d9d))
			{
				return;
			}
		}
	}
	let p5a = t2z(b6i.w7l(), j1s);
  for (const d9d of p5a)
	{
		if (d9d != b6i.c0f())
		{
			if (!b6i.s6s(d9d))
			{
				return;
			}
		}
	}
  for (const d9d of p5a)
	{
		if (c1n(b6i, d9d))
		{
			return;
		}
	}
	if (c1n(b6i, b6i.w7l()))
	{
		return;
	}
	if (b6i.w7l() != j1s)
	{
		if (!b6i.s6s(j1s))
		{
			if (j1s != b6i.c0f())
			{
				return;
			}
		}
	}
	if (b6i.c0f() != r5f)
	{
		if (!b6i.s6s(r5f))
		{
			if (r5f != b6i.w7l())
			{
				return;
			}
		}
	}
	a6c(y8v, b6i, b6i.w7l(), j1s, o2p.c7g);
}

function q5m(y8v, b6i)
{
	if (!b6i.q4r(b6i.w7l()))
	{
		return;
	}
	if (!b6i.l0o(b6i.a1p()))
	{
		return;
	}
	let m5q = t2z(b6i.a1p(), i8a);
  for (const d9d of m5q)
	{
		if (d9d != b6i.w7l())
		{
			if (!b6i.s6s(d9d))
			{
				return;
			}
		}
	}
	let p5a = t2z(b6i.w7l(), n5a);
  for (const d9d of p5a)
	{
		if (d9d != b6i.a1p())
		{
			if (!b6i.s6s(d9d))
			{
				return;
			}
		}
	}
  for (const d9d of p5a)
	{
		if (c1n(b6i, d9d))
		{
			return;
		}
	}
	if (c1n(b6i, b6i.w7l()))
	{
		return;
	}
	if (b6i.w7l() != n5a)
	{
		if (!b6i.s6s(n5a))
		{
			if (n5a != b6i.a1p())
			{
				return;
			}
		}
	}
	if (b6i.a1p() != i8a)
	{
		if (!b6i.s6s(i8a))
		{
			if (i8a != b6i.w7l())
			{
				return;
			}
		}
	}
	a6c(y8v, b6i, b6i.w7l(), n5a, o2p.c7g);
}

function a0e(y8v, b6i)
{
	if (!b6i.z3y(b6i.l6d()))
	{
		return;
	}
	if (!b6i.i4m(b6i.j9x()))
	{
		return;
	}
	if (!b6i.s6s(i3m))
	{
		return;
	}
	if (!b6i.s6s(l9h))
	{
		return;
	}
	if (!b6i.s6s(g6k))
	{
		return;
	}
	if (l1y(b6i, b6i.l6d()))
	{
		return;
	}
	if (l1y(b6i, g6k))
	{
		return;
	}
	a6c(y8v, b6i, b6i.l6d(), p5d, o2p.c7g);
}

function g8j(y8v, b6i)
{
	if (!b6i.z3y(b6i.l6d()))
	{
		return;
	}
	if (!b6i.i4m(b6i.x1x()))
	{
		return;
	}
	if (!b6i.s6s(g0w))
	{
		return;
	}
	if (!b6i.s6s(j2m))
	{
		return;
	}
	if (l1y(b6i, b6i.l6d()))
	{
		return;
	}
	if (l1y(b6i, g0w))
	{
		return;
	}
	a6c(y8v, b6i, b6i.l6d(), h5s, o2p.c7g);
}

function u4j(y8v, b6i)
{
	if (!b6i.q4r(b6i.w7l()))
	{
		return;
	}
	if (!b6i.l0o(b6i.a1p()))
	{
		return;
	}
	if (!b6i.s6s(d4j))
	{
		return;
	}
	if (!b6i.s6s(e5s))
	{
		return;
	}
	if (!b6i.s6s(k7u))
	{
		return;
	}
	if (c1n(b6i, b6i.w7l()))
	{
		return;
	}
	if (c1n(b6i, k7u))
	{
		return;
	}
	a6c(y8v, b6i, b6i.w7l(), n5a, o2p.c7g);
}

function t0g(y8v, b6i)
{
	if (!b6i.q4r(b6i.w7l()))
	{
		return;
	}
	if (!b6i.l0o(b6i.c0f()))
	{
		return;
	}
	if (!b6i.s6s(b9l))
	{
		return;
	}
	if (!b6i.s6s(m2p))
	{
		return;
	}
	if (c1n(b6i, b6i.w7l()))
	{
		return;
	}
	if (c1n(b6i, b9l))
	{
		return;
	}
	a6c(y8v, b6i, b6i.w7l(), j1s, o2p.c7g);
}

function p6h(y8v, b6i)
{
	if (b6i.p0i())
	{
		q3e(y8v, b6i);
	}
	else
	{
		a0e(y8v, b6i);
	}
}

function m3w(y8v, b6i)
{
	if (b6i.p0i())
	{
		r1o(y8v, b6i);
	}
	else
	{
		g8j(y8v, b6i);
	}
}

function z6z(y8v, b6i)
{
	if (b6i.r5w())
	{
		p6h(y8v, b6i);
	}
	if (b6i.y8a())
	{
		m3w(y8v, b6i);
	}
}

function u1n(y8v, b6i)
{
	if (b6i.p0i())
	{
		q5m(y8v, b6i);
	}
	else
	{
		u4j(y8v, b6i);
	}
}

function o0q(y8v, b6i)
{
	if (b6i.p0i())
	{
		z2g(y8v, b6i);
	}
	else
	{
		t0g(y8v, b6i);
	}
}

function z9p(y8v, b6i)
{
	if (b6i.w2h())
	{
		u1n(y8v, b6i);
	}
	if (b6i.r8s())
	{
		o0q(y8v, b6i);
	}
}

function q7i(y8v, b6i)
{
	if (b6i.k2v() == y3r)
	{
		return;
	}
	if (i4c(b6i.k2v()) != s4a)
	{
		return;
	}
	if (!b6i.s6s(b6i.k2v()))
	{
		return;
	}
	let h0e = (b6i.k2v() + 8);
	if (!b6i.s6s(h0e))
	{
		return;
	}
	let x7p = (b6i.k2v() - 8);
	if (!b6i.z3s(x7p))
	{
		return;
	}
	let d7h = westSquare[x7p];
	if (d7h != y3r)
	{
		if (b6i.x5b(d7h))
		{
			f3w(y8v, b6i, d7h, b4h.b3m, b6i.k2v(),
				b4h.b3m, x7p, b4h.u2m, o2p.z7r);
		}
	}
	d7h = eastSquare[x7p];
	if (d7h != y3r)
	{
		if (b6i.x5b(d7h))
		{
			f3w(y8v, b6i, d7h, b4h.b3m, b6i.k2v(),
				b4h.b3m, x7p, b4h.u2m, o2p.z7r);
		}
	}
}

function l3k(y8v, b6i)
{
	if (b6i.k2v() == y3r)
	{
		return;
	}
	if (i4c(b6i.k2v()) != c3m)
	{
		return;
	}
	if (!b6i.s6s(b6i.k2v()))
	{
		return;
	}
	let h0e = (b6i.k2v() - 8);
	if (!b6i.s6s(h0e))
	{
		return;
	}
	let x7p = (b6i.k2v() + 8);
	if (!b6i.x5b(x7p))
	{
		return;
	}
	let d7h = westSquare[x7p];
	if (d7h != y3r)
	{
		if (b6i.z3s(d7h))
		{
			f3w(y8v, b6i, d7h, b4h.u2m, b6i.k2v(),
				b4h.u2m, x7p, b4h.b3m, o2p.z7r);
		}
	}
	d7h = eastSquare[x7p];
	if (d7h != y3r)
	{
		if (b6i.z3s(d7h))
		{
			f3w(y8v, b6i, d7h, b4h.u2m, b6i.k2v(),
				b4h.u2m, x7p, b4h.b3m, o2p.z7r);
		}
	}
}

function f3w(y8v, b6i, e7g, e5i, x7z, q2q, k4u, l0p, type)
{
  let z0x = new w3p();
	z0x.e7g = e7g;
	z0x.e5i = e5i;
	z0x.x7z = x7z;
	z0x.q2q = q2q;
	z0x.k4u = k4u;
	z0x.l0p = l0p;
	z0x.type = type;
	if (c8w(e5i))
	{
		if (f0d(b6i, z0x))
		{
			y8v.push(z0x);
		}
	}
	else
	{
		if (p8d(b6i, z0x))
		{
			y8v.push(z0x);
		}
	}
}

function a6c(y8v, b6i, e7g, x7z, type)
{
	let r4y = b6i.p3t(e7g);
	f3w(y8v, b6i, e7g, r4y, x7z, r4y, y3r, b4h.r7x, type);
}

function n8v(y8v, b6i, e7g, x7z, type)
{
	let r4y = b6i.p3t(e7g);
	let l0p = b6i.p3t(x7z);
	f3w(y8v, b6i, e7g, r4y, x7z, r4y, x7z, l0p, type);
}

function v5s(y8v, b6i, e7g, x7z)
{
	f3w(y8v, b6i, e7g, b4h.b3m, x7z, b4h.e0h, y3r, b4h.r7x, o2p.u9n);
	f3w(y8v, b6i, e7g, b4h.b3m, x7z, b4h.a2r, y3r, b4h.r7x, o2p.b7w);
	f3w(y8v, b6i, e7g, b4h.b3m, x7z, b4h.w3c, y3r, b4h.r7x, o2p.o5c);
	f3w(y8v, b6i, e7g, b4h.b3m, x7z, b4h.y0a, y3r, b4h.r7x, o2p.y0y);
}

function l8c(y8v, b6i, e7g, x7z)
{
	f3w(y8v, b6i, e7g, b4h.u2m, x7z, b4h.y6y, y3r, b4h.r7x, o2p.u9n);
	f3w(y8v, b6i, e7g, b4h.u2m, x7z, b4h.q3k, y3r, b4h.r7x, o2p.b7w);
	f3w(y8v, b6i, e7g, b4h.u2m, x7z, b4h.s6h, y3r, b4h.r7x, o2p.o5c);
	f3w(y8v, b6i, e7g, b4h.u2m, x7z, b4h.u4n, y3r, b4h.r7x, o2p.y0y);
}

function e7i(y8v, b6i, e7g, x7z)
{
	let l0p = b6i.p3t(x7z);
	f3w(y8v, b6i, e7g, b4h.b3m, x7z, b4h.e0h, x7z, l0p, o2p.u9n);
	f3w(y8v, b6i, e7g, b4h.b3m, x7z, b4h.a2r, x7z, l0p, o2p.b7w);
	f3w(y8v, b6i, e7g, b4h.b3m, x7z, b4h.w3c, x7z, l0p, o2p.o5c);
	f3w(y8v, b6i, e7g, b4h.b3m, x7z, b4h.y0a, x7z, l0p, o2p.y0y);
}

function s5d(y8v, b6i, e7g, x7z)
{
	let l0p = b6i.p3t(x7z);
	f3w(y8v, b6i, e7g, b4h.u2m, x7z, b4h.y6y, x7z, l0p, o2p.u9n);
	f3w(y8v, b6i, e7g, b4h.u2m, x7z, b4h.q3k, x7z, l0p, o2p.b7w);
	f3w(y8v, b6i, e7g, b4h.u2m, x7z, b4h.s6h, x7z, l0p, o2p.o5c);
	f3w(y8v, b6i, e7g, b4h.u2m, x7z, b4h.u4n, x7z, l0p, o2p.y0y);
}

function p8x(y8v, b6i, x7z)
{
	let e7g = (x7z - d0x);
	if (b6i.x5b(e7g))
	{
		if (i4c(e7g) == s5a)
		{
			v5s(y8v, b6i, e7g, x7z);
		}
		else
		{
			a6c(y8v, b6i, e7g, x7z, o2p.q7y);
		}
	}
	else
	{
		if (b6i.s6s(e7g))
		{
			if (i4c(x7z) == d7i)
			{
				e7g = (x7z - d0x - d0x);
				if (b6i.x5b(e7g))
				{
					a6c(y8v, b6i, e7g, x7z, o2p.q7y);
				}
			}
		}
	}

	if (b6i.d9x(x7z))
	{
		let e7g = southWestSquare[x7z];
		if (e7g != y3r)
		{
			if (b6i.x5b(e7g))
			{
				if (i4c(e7g) == s5a)
				{
					e7i(y8v, b6i, e7g, x7z);
				}
				else
				{
					n8v(y8v, b6i, e7g, x7z, o2p.q7y);
				}
			}
		}
		e7g = southEastSquare[x7z];
		if (e7g != y3r)
		{
			if (b6i.x5b(e7g))
			{
				if (i4c(e7g) == s5a)
				{
					e7i(y8v, b6i, e7g, x7z);
				}
				else
				{
					n8v(y8v, b6i, e7g, x7z, o2p.q7y);
				}
			}
		}
	}

	if (b6i.k2v() == x7z)
	{
		let h0e = (b6i.k2v() + 8);
		if (!b6i.s6s(h0e))
		{
			return;
		}
		let x7p = (b6i.k2v() - 8);
		if (!b6i.z3s(x7p))
		{
			return;
		}
		let d7h = westSquare[x7p];
		if (d7h != y3r)
		{
			if (b6i.x5b(d7h))
			{
				f3w(y8v, b6i, d7h, b4h.b3m, b6i.k2v(),
					b4h.b3m, x7p, b4h.u2m, o2p.z7r);
			}
		}
		d7h = eastSquare[x7p];
		if (d7h != y3r)
		{
			if (b6i.x5b(d7h))
			{
				f3w(y8v, b6i, d7h, b4h.b3m, b6i.k2v(),
					b4h.b3m, x7p, b4h.u2m, o2p.z7r);
			}
		}
	}
}

function c9n(y8v, b6i, x7z)
{
	let e7g = (x7z - t4a);
	if (b6i.z3s(e7g))
	{
		if (i4c(e7g) == h0p)
		{
			l8c(y8v, b6i, e7g, x7z);
		}
		else
		{
			a6c(y8v, b6i, e7g, x7z, o2p.q7y);
		}
	}
	else
	{
		if (b6i.s6s(e7g))
		{
			if (i4c(x7z) == o9l)
			{
				e7g = (x7z - t4a - t4a);
				if (b6i.z3s(e7g))
				{
					a6c(y8v, b6i, e7g, x7z, o2p.q7y);
				}
			}
		}
	}

	if (b6i.c8w(x7z))
	{
		let e7g = northWestSquare[x7z];
		if (e7g != y3r)
		{
			if (b6i.z3s(e7g))
			{
				if (i4c(e7g) == h0p)
				{
					s5d(y8v, b6i, e7g, x7z);
				}
				else
				{
					n8v(y8v, b6i, e7g, x7z, o2p.q7y);
				}
			}
		}
		e7g = northEastSquare[x7z];
		if (e7g != y3r)
		{
			if (b6i.z3s(e7g))
			{
				if (i4c(e7g) == h0p)
				{
					s5d(y8v, b6i, e7g, x7z);
				}
				else
				{
					n8v(y8v, b6i, e7g, x7z, o2p.q7y);
				}
			}
		}
	}

	if (b6i.k2v() == x7z)
	{
		let h0e = (b6i.k2v() - 8);
		if (!b6i.s6s(h0e))
		{
			return;
		}
		let x7p = (b6i.k2v() + 8);
		if (!b6i.x5b(x7p))
		{
			return;
		}
		let d7h = westSquare[x7p];
		if (d7h != y3r)
		{
			if (b6i.z3s(d7h))
			{
				f3w(y8v, b6i, d7h, b4h.u2m, b6i.k2v(),
					b4h.u2m, x7p, b4h.b3m, o2p.z7r);
			}
		}
		d7h = eastSquare[x7p];
		if (d7h != y3r)
		{
			if (b6i.z3s(d7h))
			{
				f3w(y8v, b6i, d7h, b4h.u2m, b6i.k2v(),
					b4h.u2m, x7p, b4h.b3m, o2p.z7r);
			}
		}
	}
}

function j3z(y8v, b6i, x7z, r4y)
{
	l3j(y8v, b6i, x7z, knightSquares[x7z], r4y);
}

function f5c(y8v, b6i, x7z, r4y)
{
	d5l(y8v, b6i, x7z, northEastSquares[x7z], r4y);
	d5l(y8v, b6i, x7z, southEastSquares[x7z], r4y);
	d5l(y8v, b6i, x7z, southWestSquares[x7z], r4y);
	d5l(y8v, b6i, x7z, northWestSquares[x7z], r4y);
}

function s3w(y8v, b6i, x7z, r4y)
{
	d5l(y8v, b6i, x7z, northSquares[x7z], r4y);
	d5l(y8v, b6i, x7z, eastSquares[x7z], r4y);
	d5l(y8v, b6i, x7z, southSquares[x7z], r4y);
	d5l(y8v, b6i, x7z, westSquares[x7z], r4y);
}

function s0f(y8v, b6i, x7z, r4y)
{
	d5l(y8v, b6i, x7z, northSquares[x7z], r4y);
	d5l(y8v, b6i, x7z, northEastSquares[x7z], r4y);
	d5l(y8v, b6i, x7z, eastSquares[x7z], r4y);
	d5l(y8v, b6i, x7z, southEastSquares[x7z], r4y);
	d5l(y8v, b6i, x7z, southSquares[x7z], r4y);
	d5l(y8v, b6i, x7z, southWestSquares[x7z], r4y);
	d5l(y8v, b6i, x7z, westSquares[x7z], r4y);
	d5l(y8v, b6i, x7z, northWestSquares[x7z], r4y);
}

function f6e(y8v, b6i, x7z, r4y)
{
	i5o(y8v, b6i, x7z, kingSquares[x7z], r4y);
}

function d5l(y8v, b6i, x7z, e3h, r4y)
{
  for (const e7g of e3h)
	{
		if (b6i.p3t(e7g) == r4y)
		{
			if (b6i.s6s(x7z))
			{
				a6c(y8v, b6i, e7g, x7z, o2p.q7y);
			}
			else
			{
				n8v(y8v, b6i, e7g, x7z, o2p.q7y);
			}
			break;
		}
		else
		{
			if (!b6i.s6s(e7g))
			{
				break;
			}
		}
	}
}

function i5o(y8v, b6i, x7z, e3h, r4y)
{
  for (const e7g of e3h)
	{
		if (b6i.p3t(e7g) == r4y)
		{
			if (b6i.s6s(x7z))
			{
				a6c(y8v, b6i, e7g, x7z, o2p.q7y);
				break;
			}
			else
			{
				n8v(y8v, b6i, e7g, x7z, o2p.q7y);
				break;
			}
		}
	}
}

function l3j(y8v, b6i, x7z, e3h, r4y)
{
  for (const e7g of e3h)
	{
		if (b6i.p3t(e7g) == r4y)
		{
			if (b6i.s6s(x7z))
			{
				a6c(y8v, b6i, e7g, x7z, o2p.q7y);
				
			}
			else
			{
				n8v(y8v, b6i, e7g, x7z, o2p.q7y);
				
			}
		}
	}
}

function f9y(w3w, z6n)
{
  for (const x7z of z6n)
	{
		if (w3w[x7z] != b4h.r7x)
		{
			if (d9x(w3w[x7z]))
			{
				return false;
			}
			else
			{
				if (w3w[x7z] == b4h.a2r || w3w[x7z] == b4h.y0a)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function y4l(w3w, z6n)
{
  for (const x7z of z6n)
	{
		if (w3w[x7z] != b4h.r7x)
		{
			if (d9x(w3w[x7z]))
			{
				return false;
			}
			else
			{
				if (w3w[x7z] == b4h.w3c || w3w[x7z] == b4h.y0a)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function d9l(w3w, z6n)
{
  for (const x7z of z6n)
	{
		if (w3w[x7z] != b4h.r7x)
		{
			if (d9x(w3w[x7z]))
			{
				return false;
			}
			else
			{
				if (w3w[x7z] == b4h.w3c || w3w[x7z] == b4h.y0a)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function x6h(w3w, x7z)
{
	if (x7z == y3r)
	{
		return false;
	}
	if (w3w[x7z] == b4h.b3m)
	{
		return true;
	}
	return false;
}

function i2f(w3w, z6n)
{
  for (const x7z of z6n)
	{
		if (w3w[x7z] == b4h.e0h)
		{
			return true;
		}
	}
	return false;
}

function t9j(w3w, z6n)
{
  for (const x7z of z6n)
	{
		if (w3w[x7z] == b4h.q6y)
		{
			return true;
		}
	}
	return false;
}

function r2t(w3w, z6n)
{
  for (const x7z of z6n)
	{
		if (w3w[x7z] != b4h.r7x)
		{
			if (c8w(w3w[x7z]))
			{
				return false;
			}
			else
			{
				if (w3w[x7z] == b4h.q3k || w3w[x7z] == b4h.u4n)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function l8d(w3w, z6n)
{
  for (const x7z of z6n)
	{
		if (w3w[x7z] != b4h.r7x)
		{
			if (c8w(w3w[x7z]))
			{
				return false;
			}
			else
			{
				if (w3w[x7z] == b4h.s6h || w3w[x7z] == b4h.u4n)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function b6j(w3w, z6n)
{
  for (const x7z of z6n)
	{
		if (w3w[x7z] != b4h.r7x)
		{
			if (c8w(w3w[x7z]))
			{
				return false;
			}
			else
			{
				if (w3w[x7z] == b4h.s6h || w3w[x7z] == b4h.u4n)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function c4n(w3w, x7z)
{
	if (x7z == y3r)
	{
		return false;
	}
	if (w3w[x7z] == b4h.u2m)
	{
		return true;
	}
	return false;
}

function c5z(w3w, z6n)
{
  for (const x7z of z6n)
	{
		if (w3w[x7z] == b4h.y6y)
		{
			return true;
		}
	}
	return false;
}

function u2b(w3w,  z6n)
{
  for (const x7z of z6n)
	{
		if (w3w[x7z] == b4h.y7s)
		{
			return true;
		}
	}
	return false;
}

function e8p(b6i, z6n, z2d)
{
  for (const x7z of z6n)
	{
		if (!b6i.s6s(x7z))
		{
			if (b6i.d9x(x7z))
			{
				return false;
			}
			else
			{
				if (b6i.e6g(x7z) || b6i.q1p(x7z))
				{
					z2d = x7z;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function i5u(b6i, z6n, z2d)
{
  for (const x7z of z6n)
	{
		if (!b6i.s6s(x7z))
		{
			if (b6i.c8w(x7z))
			{
				return false;
			}
			else
			{
				if (b6i.a3z(x7z) || b6i.i7t(x7z))
				{
					z2d = x7z;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function w9g(b6i, z6n, z2d)
{
  for (const x7z of z6n)
	{
		if (!b6i.s6s(x7z))
		{
			if (b6i.d9x(x7z))
			{
				return false;
			}
			else
			{
				if (b6i.i4m(x7z) || b6i.q1p(x7z))
				{
					z2d = x7z;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function m5x(b6i, z6n, z2d)
{
  for (const x7z of z6n)
	{
		if (!b6i.s6s(x7z))
		{
			if (b6i.c8w(x7z))
			{
				return false;
			}
			else
			{
				if (b6i.l0o(x7z) || b6i.i7t(x7z))
				{
					z2d = x7z;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function m0s(b6i, z6n, z2d)
{
  for (const x7z of z6n)
	{
		if (!b6i.s6s(x7z))
		{
			if (b6i.d9x(x7z))
			{
				return false;
			}
			else
			{
				if (b6i.i4m(x7z) || b6i.q1p(x7z))
				{
					z2d = x7z;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function w6d(b6i, z6n, z2d)
{
  for (const x7z of z6n)
	{
		if (!b6i.s6s(x7z))
		{
			if (b6i.c8w(x7z))
			{
				return false;
			}
			else
			{
				if (b6i.l0o(x7z) || b6i.i7t(x7z))
				{
					z2d = x7z;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function g5b(b6i, x7z)
{
	if (x7z == y3r)
	{
		return false;
	}
	if (b6i.x5b(x7z))
	{
		return true;
	}
	return false;
}

function x8e(b6i, x7z)
{
	if (x7z == y3r)
	{
		return false;
	}
	if (b6i.z3s(x7z))
	{
		return true;
	}
	return false;
}

function f1x(b6i, z6n, z2d)
{
  for (const x7z of z6n)
	{
		if (b6i.g9i(x7z))
		{
			z2d = x7z;
			return true;
		}
	}
	return false;
}



function v6u(b6i, z6n, z2d)
{
  for (const x7z of z6n)
	{
		if (b6i.b0s(x7z))
		{
			z2d = x7z;
			return true;
		}
	}
	return false;
}

function e9d(b6i, z6n, z2d)
{
  for (const x7z of z6n)
	{
		if (b6i.z3y(x7z))
		{
			z2d = x7z;
			return true;
		}
	}
	return false;
}

function g7q(b6i, z6n, z2d)
{
  for (const x7z of z6n)
	{
		if (b6i.q4r(x7z))
		{
			z2d = x7z;
			return true;
		}
	}
	return false;
}

function y7j(w3w, d9d)
{
	if (f9y(w3w, northEastSquares[d9d])) return true;
	if (f9y(w3w, southEastSquares[d9d])) return true;
	if (f9y(w3w, southWestSquares[d9d])) return true;
	if (f9y(w3w, northWestSquares[d9d])) return true;
	if (y4l(w3w, northSquares[d9d])) return true;
	if (d9l(w3w, eastSquares[d9d])) return true;
	if (y4l(w3w, southSquares[d9d])) return true;
	if (d9l(w3w, westSquares[d9d])) return true;
	if (x6h(w3w, southEastSquare[d9d])) return true;
	if (x6h(w3w, southWestSquare[d9d])) return true;
	if (i2f(w3w, knightSquares[d9d])) return true;
	if (t9j(w3w, kingSquares[d9d])) return true;
	return false;
}

function r2e(w3w, d9d)
{
	if (r2t(w3w, northEastSquares[d9d])) return true;
	if (r2t(w3w, southEastSquares[d9d])) return true;
	if (r2t(w3w, southWestSquares[d9d])) return true;
	if (r2t(w3w, northWestSquares[d9d])) return true;
	if (l8d(w3w, northSquares[d9d])) return true;
	if (b6j(w3w, eastSquares[d9d])) return true;
	if (l8d(w3w, southSquares[d9d])) return true;
	if (b6j(w3w, westSquares[d9d])) return true;
	if (c4n(w3w, northEastSquare[d9d])) return true;
	if (c4n(w3w, northWestSquare[d9d])) return true;
	if (c5z(w3w, knightSquares[d9d])) return true;
	if (u2b(w3w, kingSquares[d9d])) return true;
	return false;
}

function c1n(b6i, d9d)
{
	let z2d = y3r;
	if (e8p(b6i, northEastSquares[d9d], z2d)) return true;
	if (e8p(b6i, southEastSquares[d9d], z2d)) return true;
	if (e8p(b6i, southWestSquares[d9d], z2d)) return true;
	if (e8p(b6i, northWestSquares[d9d], z2d)) return true;
	if (w9g(b6i, northSquares[d9d], z2d)) return true;
	if (m0s(b6i, eastSquares[d9d], z2d)) return true;
	if (w9g(b6i, southSquares[d9d], z2d)) return true;
	if (m0s(b6i, westSquares[d9d], z2d)) return true;
	if (g5b(b6i, southEastSquare[d9d])) return true;
	if (g5b(b6i, southWestSquare[d9d])) return true;
	if (f1x(b6i, knightSquares[d9d], z2d)) return true;
	if (e9d(b6i, kingSquares[d9d], z2d)) return true;
	return false;
}

function l1y(b6i, d9d)
{
	let z2d = y3r;
	if (i5u(b6i, northEastSquares[d9d], z2d)) return true;
	if (i5u(b6i, southEastSquares[d9d], z2d)) return true;
	if (i5u(b6i, southWestSquares[d9d], z2d)) return true;
	if (i5u(b6i, northWestSquares[d9d], z2d)) return true;
	if (m5x(b6i, northSquares[d9d], z2d)) return true;
	if (w6d(b6i, eastSquares[d9d], z2d)) return true;
	if (m5x(b6i, southSquares[d9d], z2d)) return true;
	if (w6d(b6i, westSquares[d9d], z2d)) return true;
	if (x8e(b6i, northEastSquare[d9d])) return true;
	if (x8e(b6i, northWestSquare[d9d])) return true;
	if (v6u(b6i, knightSquares[d9d], z2d)) return true;
	if (g7q(b6i, kingSquares[d9d], z2d)) return true;
	return false;
}

function n3a()
{
	if (moveGeneratorInited) return;
	moveGeneratorInited = true;
 	for (const d9d of x0c)
	{
 		if (i4c(d9d) <= s5a && j3x(d9d) <= z2m)
		{
			let x7z = d9d + z3x;
			northEastSquare.push(x7z);
		}
		else
		{
			northEastSquare.push(y3r);
		}
		if (j3x(d9d) <= z2m)
		{
			let x7z = d9d + n1u;
			eastSquare.push(x7z);
		}
		else
		{
			eastSquare.push(y3r);
		}
		if (i4c(d9d) >= h0p && j3x(d9d) <= z2m)
		{
			let x7z = d9d + k8c;
			southEastSquare.push(x7z);
		}
		else
		{
			southEastSquare.push(y3r);
		}
		if (i4c(d9d) >= h0p && j3x(d9d) >= q6c)
		{
			let x7z = d9d + q8y;
			southWestSquare.push(x7z);
		}
		else
		{
			southWestSquare.push(y3r);
		}
		if (j3x(d9d) >= q6c)
		{
			let x7z = d9d + v4y;
			westSquare.push(x7z);
		}
		else
		{
			westSquare.push(y3r);
		}
		if (i4c(d9d) <= s5a && j3x(d9d) >= q6c)
		{
			let x7z = d9d + t0j;
			northWestSquare.push(x7z);
		}
		else
		{
			northWestSquare.push(y3r);
		}
	}

  for (const d9d of x0c)
	{
  	northSquares.push(y6m(d9d));
		northEastSquares.push(d5c(d9d));
		eastSquares.push(e1j(d9d));
		southEastSquares.push(s7i(d9d));
		southSquares.push(f1m(d9d));
		southWestSquares.push(v7m(d9d));
		westSquares.push(v5p(d9d));
		northWestSquares.push(y3p(d9d));
		kingSquares.push(w2b(d9d));
		knightSquares.push(b0q(d9d));
	}
}

function o4l(b6i)
{
	let y8v = [];

	if (b6i.p8t())
	{
		let f4x = b6i.f4x();
    for (const d9d of x0c)
		{
			if (!f4x) break;
			if (b6i.c8w(d9d))
			{
				switch (b6i.p3t(d9d))
				{
					case b4h.b3m:
						a0b(y8v, b6i, d9d);
						f4x--;
						break;
					case b4h.e0h:
						u9m(y8v, b6i, d9d);
						f4x--;
						break;
					case b4h.a2r:
						m8n(y8v, b6i, d9d);
						f4x--;
						break;
					case b4h.w3c:
						f5x(y8v, b6i, d9d);
						f4x--;
						break;
					case b4h.y0a:
						e6a(y8v, b6i, d9d);
						f4x--;
						break;
					case b4h.q6y:
						d1t(y8v, b6i, d9d);
						f4x--;
						break;
					default:
						break;
				}
			}
		}
		q7i(y8v, b6i);
		z6z(y8v, b6i);
	}
	else
	{
		let d2w = b6i.d2w();
    for (const d9d of x0c)
		{
			if (!d2w) break;
			if (b6i.d9x(d9d))
			{
				switch (b6i.p3t(d9d))
				{
					case b4h.u2m:
						e5b(y8v, b6i, d9d);
						d2w--;
						break;
					case b4h.y6y:
						j5a(y8v, b6i, d9d);
						d2w--;
						break;
					case b4h.q3k:
						h2o(y8v, b6i, d9d);
						d2w--;
						break;
					case b4h.s6h:
						p2a(y8v, b6i, d9d);
						d2w--;
						break;
					case b4h.u4n:
						j8m(y8v, b6i, d9d);
						d2w--;
						break;
					case b4h.y7s:
						h7d(y8v, b6i, d9d);
						d2w--;
						break;
					default:
						break;
				}
			}
		}
		l3k(y8v, b6i);
		z9p(y8v, b6i);
	}

	return y8v;
}

function x0j(b6i, t0e)
{
	let y8v = [];

	if (b6i.p8t())
	{
		if (!b6i.c8w(t0e))
		{
			p8x(y8v, b6i, t0e);
		}
	}
	else
	{
		if (!b6i.d9x(t0e))
		{
			c9n(y8v, b6i, t0e);
		}
	}

	return y8v;
}

function i7v(b6i, t0e)
{
	let y8v = [];

	if (b6i.p8t())
	{
		if (!b6i.c8w(t0e))
		{
			j3z(y8v, b6i, t0e, b4h.e0h);
		}
	}
	else
	{
		if (!b6i.d9x(t0e))
		{
			j3z(y8v, b6i, t0e, b4h.y6y);
		}
	}

	return y8v;
}

function x3e(b6i, t0e)
{
	let y8v = [];

	if (b6i.p8t())
	{
		if (!b6i.c8w(t0e))
		{
			f5c(y8v, b6i, t0e, b4h.a2r);
		}
	}
	else
	{
		if (!b6i.d9x(t0e))
		{
			f5c(y8v, b6i, t0e, b4h.q3k);
		}
	}

	return y8v;
}

function q0z(b6i, t0e)
{
	let y8v = [];

	if (b6i.p8t())
	{
		if (!b6i.c8w(t0e))
		{
			s3w(y8v, b6i, t0e, b4h.w3c);
		}
	}
	else
	{
		if (!b6i.d9x(t0e))
		{
			s3w(y8v, b6i, t0e, b4h.s6h);
		}
	}

	return y8v;
}

function y9m(b6i, t0e)
{
	let y8v = [];

	if (b6i.p8t())
	{
		if (!b6i.c8w(t0e))
		{
			s0f(y8v, b6i, t0e, b4h.y0a);
		}
	}
	else
	{
		if (!b6i.d9x(t0e))
		{
			s0f(y8v, b6i, t0e, b4h.u4n);
		}
	}

	return y8v;
}

function b3y(b6i, t0e)
{
	let y8v = [];

	let l4z = y3r;
	if (b6i.p8t())
	{
		l4z = b6i.q6y();
	}
	else
	{
		l4z = b6i.y7s();
	}

	if (l4z == y3r)
	{
		return y8v;
	}

	if (b6i.p8t())
	{
		d1t(y8v, b6i, l4z);
		z6z(y8v, b6i);
	}
	else
	{
		h7d(y8v, b6i, l4z);
		z9p(y8v, b6i);
	}

	return y8v;
}

function z1t(b6i, t0e)
{
	let y8v = [];

	let l4z = y3r;
	if (b6i.p8t())
	{
		l4z = b6i.q6y();
	}
	else
	{
		l4z = b6i.y7s();
	}

	if (l4z == y3r)
	{
		return y8v;
	}

	if (b6i.p8t())
	{
		if (!b6i.c8w(t0e))
		{
			f6e(y8v, b6i, t0e, b4h.q6y);
		}
	}
	else
	{
		if (!b6i.d9x(t0e))
		{
			f6e(y8v, b6i, t0e, b4h.y7s);
		}
	}

	return y8v;
}

function l9v(b6i)
{
	let y8v = [];

	if (b6i.p8t())
	{
		if (!b6i.z3y(b6i.l6d()))
		{
			return y8v;
		}
		if (!b6i.r5w())
		{
			return y8v;
		}
		p6h(y8v, b6i);
		return y8v;
	}
	else
	{
		if (!b6i.q4r(b6i.w7l()))
		{
			return y8v;
		}
		if (!b6i.w2h())
		{
			return y8v;
		}
		u1n(y8v, b6i);
		return y8v;
	}
}

function o4i(b6i)
{
	let y8v = [];

	if (b6i.p8t())
	{
		if (!b6i.z3y(b6i.l6d()))
		{
			return y8v;
		}
		if (!b6i.y8a())
		{
			return y8v;
		}
		m3w(y8v, b6i);
		return y8v;
	}
	else
	{
		if (!b6i.q4r(b6i.w7l()))
		{
			return y8v;
		}
		if (!b6i.r8s())
		{
			return y8v;
		}
		o0q(y8v, b6i);
		return y8v;
	}
}

function g6r(b6i)
{
	if (b6i.p8t())
	{
		if (b6i.q6y() != y3r)
		{
			return l1y(b6i, b6i.q6y());
		}
	}
	else
	{
		if (b6i.y7s() != y3r)
		{
			return c1n(b6i, b6i.y7s());
		}
	}
	return false;
}




function p4i(b6i, e7g)
{
	let h6y = o4l(b6i);
	let l0g = [];
  for (const p7x of h6y)
	{
		if (p7x.e7g == e7g)
		{
			l0g.push(p7x);
		}
	}
	return l0g;
}

function e3o(b6i, x7z)
{
	let h6y = o4l(b6i);
	let a0g = [];
  for (const p7x of h6y)
	{
		if (p7x.x7z == x7z)
		{
			a0g.push(p7x);
		}
	}
	return a0g;
}

function s6k(b6i, e7g, x7z)
{
	let h6y = o4l(b6i);
	let f7p = [];
  for (const p7x of h6y)
	{
		if (p7x.e7g == e7g && p7x.x7z == x7z)
		{
			f7p.push(p7x);
		}
	}
	return f7p;
}

function d3j(b6i, e7g, x7z, type)
{
	let z0x = new w3p();
	if (type == o2p.null)
	{
		return z0x;
	}

	z0x.e7g = e7g;
	z0x.x7z = x7z;
	z0x.type = type;
	if (type == o2p.q7y)
	{
		if (b6i.p3t(z0x.x7z) != b4h.r7x)
		{
			z0x.k4u = z0x.x7z;
			z0x.l0p = b6i.p3t(z0x.x7z);
		}
		z0x.e5i = b6i.p3t(z0x.e7g);
		z0x.q2q = z0x.e5i;
	}
	else if (type == o2p.c7g)
	{
		z0x.e5i = b6i.p3t(z0x.e7g);
		z0x.q2q = z0x.e5i;
	}
	else if (type == o2p.z7r)
	{
		z0x.e5i = b6i.p3t(z0x.e7g);
		z0x.q2q = z0x.e5i;
		if (c8w(z0x.e5i))
		{
			z0x.k4u = (z0x.x7z - 8);
			z0x.l0p = b4h.u2m;
		}
		else
		{
			z0x.k4u = (z0x.x7z + 8);
			z0x.l0p = b4h.b3m;
		}
	}
	else if (type == o2p.y0y)
	{
		if (b6i.p3t(z0x.x7z) != b4h.r7x)
		{
			z0x.k4u = z0x.x7z;
			z0x.l0p = b6i.p3t(z0x.x7z);
		}
		z0x.e5i = b6i.p3t(z0x.e7g);
		if (c8w(z0x.e5i))
		{
			z0x.q2q = b4h.y0a;
		}
		else
		{
			z0x.q2q = b4h.u4n;
		}
	}
	else if (type == o2p.o5c)
	{
		if (b6i.p3t(z0x.x7z) != b4h.r7x)
		{
			z0x.k4u = z0x.x7z;
			z0x.l0p = b6i.p3t(z0x.x7z);
		}
		z0x.e5i = b6i.p3t(z0x.e7g);
		if (c8w(z0x.e5i))
		{
			z0x.q2q = b4h.w3c;
		}
		else
		{
			z0x.q2q = b4h.s6h;
		}
	}
	else if (type == o2p.b7w)
	{
		if (b6i.p3t(z0x.x7z) != b4h.r7x)
		{
			z0x.k4u = z0x.x7z;
			z0x.l0p = b6i.p3t(z0x.x7z);
		}
		z0x.e5i = b6i.p3t(z0x.e7g);
		if (c8w(z0x.e5i))
		{
			z0x.q2q = b4h.a2r;
		}
		else
		{
			z0x.q2q = b4h.q3k;
		}
	}
	else if (type == o2p.u9n)
	{
		if (b6i.p3t(z0x.x7z) != b4h.r7x)
		{
			z0x.k4u = z0x.x7z;
			z0x.l0p = b6i.p3t(z0x.x7z);
		}
		z0x.e5i = b6i.p3t(z0x.e7g);
		if (c8w(z0x.e5i))
		{
			z0x.q2q = b4h.e0h;
		}
		else
		{
			z0x.q2q = b4h.y6y;
		}
	}
	return z0x;
}

function d3j(w3w, e7g, x7z, type)
{
	let z0x = new w3p();
	if (type == o2p.null)
	{
		return z0x;
	}

	z0x.e7g = e7g;
	z0x.x7z = x7z;
	z0x.type = type;
	if (type == o2p.q7y)
	{
		if (w3w[z0x.x7z] != b4h.r7x)
		{
			z0x.k4u = z0x.x7z;
			z0x.l0p = w3w[z0x.x7z];
		}
		z0x.e5i = w3w[z0x.e7g];
		z0x.q2q = z0x.e5i;
	}
	else if (type == o2p.c7g)
	{
		z0x.e5i = w3w[z0x.e7g];
		z0x.q2q = z0x.e5i;
	}
	else if (type == o2p.z7r)
	{
		z0x.e5i = w3w[z0x.e7g];
		z0x.q2q = z0x.e5i;
		if (c8w(z0x.e5i))
		{
			z0x.k4u = (z0x.x7z - 8);
			z0x.l0p = b4h.u2m;
		}
		else
		{
			z0x.k4u = (z0x.x7z + 8);
			z0x.l0p = b4h.b3m;
		}
	}
	else if (type == o2p.y0y)
	{
		if (w3w[z0x.x7z] != b4h.r7x)
		{
			z0x.k4u = z0x.x7z;
			z0x.l0p = w3w[z0x.x7z];
		}
		z0x.e5i = w3w[z0x.e7g];
		if (c8w(z0x.e5i))
		{
			z0x.q2q = b4h.y0a;
		}
		else
		{
			z0x.q2q = b4h.u4n;
		}
	}
	else if (type == o2p.o5c)
	{
		if (w3w[z0x.x7z] != b4h.r7x)
		{
			z0x.k4u = z0x.x7z;
			z0x.l0p = w3w[z0x.x7z];
		}
		z0x.e5i = w3w[z0x.e7g];
		if (c8w(z0x.e5i))
		{
			z0x.q2q = b4h.w3c;
		}
		else
		{
			z0x.q2q = b4h.s6h;
		}
	}
	else if (type == o2p.b7w)
	{
		if (w3w[z0x.x7z] != b4h.r7x)
		{
			z0x.k4u = z0x.x7z;
			z0x.l0p = w3w[z0x.x7z];
		}
		z0x.e5i = w3w[z0x.e7g];
		if (c8w(z0x.e5i))
		{
			z0x.q2q = b4h.a2r;
		}
		else
		{
			z0x.q2q = b4h.q3k;
		}
	}
	else if (type == o2p.u9n)
	{
		if (w3w[z0x.x7z] != b4h.r7x)
		{
			z0x.k4u = z0x.x7z;
			z0x.l0p = w3w[z0x.x7z];
		}
		z0x.e5i = w3w[z0x.e7g];
		if (c8w(z0x.e5i))
		{
			z0x.q2q = b4h.e0h;
		}
		else
		{
			z0x.q2q = b4h.y6y;
		}
	}
	return z0x;
}

const d0x 						=   8; 
const t4a 						=  -8; 
const n1u 	      			=   1; 
const v4y 	      			=  -1; 
const z4w 		=  17; 
const n2g 		=  10; 
const z3x 				=   9; 
const x1l 		=   6; 
const l2s 		=  15; 
const t0j 				=   7; 
const t0h 		= -17; 
const t8r 		= -10; 
const q8y 				=  -9; 
const j3q 		=  -6; 
const x3i 		= -15; 
const k8c 				=  -7; 

function y6m(d9d)
{
	let g1q = [];
	let c6b = d0x;
	let x7z = d9d;
	while (i4c(x7z) <= s5a)
	{
		x7z = x7z + c6b;
		g1q.push(x7z);
	}
	return g1q;
}

function d5c(d9d)
{
	let g1q = [];
	let c6b = z3x;
	let x7z = d9d;
	while (i4c(x7z) <= s5a && j3x(x7z) <= z2m)
	{
		x7z = x7z + c6b;
		g1q.push(x7z);
	}
	return g1q;
}

function e1j(d9d)
{
	let g1q = [];
	let c6b = n1u;
	let x7z = d9d;
	while (j3x(x7z) <= z2m)
	{
		x7z = x7z + c6b;
		g1q.push(x7z);
	}
	return g1q;
}

function s7i(d9d)
{
	let g1q = [];
	let c6b = k8c;
	let x7z = d9d;
	while (i4c(x7z) >= h0p && j3x(x7z) <= z2m)
	{
		x7z = x7z + c6b;
		g1q.push(x7z);
	}
	return g1q;
}

function f1m(d9d)
{
	let g1q = [];
	let c6b = t4a;
	let x7z = d9d;
	while (i4c(x7z) >= h0p)
	{
		x7z = x7z + c6b;
		g1q.push(x7z);
	}
	return g1q;
}

function v7m(d9d)
{
	let g1q = [];
	let c6b = q8y;
	let x7z = d9d;
	while (i4c(x7z) >= h0p && j3x(x7z) >= q6c)
	{
		x7z = x7z + c6b;
		g1q.push(x7z);
	}
	return g1q;
}

function v5p(d9d)
{
	let g1q = [];
	let c6b = v4y;
	let x7z = d9d;
	while (j3x(x7z) >= q6c)
	{
		x7z = x7z + c6b;
		g1q.push(x7z);
	}
	return g1q;
}

function y3p(d9d)
{
	let g1q = [];
	let c6b = t0j;
	let x7z = d9d;
	while (i4c(x7z) <= s5a && j3x(x7z) >= q6c)
	{
		x7z = x7z + c6b;
		g1q.push(x7z);
	}
	return g1q;
}

function b0q(d9d)
{
	let g1q = [];
	if (i4c(d9d) <= s4a && j3x(d9d) <= z2m)
	{
		let x7z = d9d + z4w;
		g1q.push(x7z);
	}
	if (i4c(d9d) <= s5a && j3x(d9d) <= t3w)
	{
		let x7z = d9d + n2g;
		g1q.push(x7z);
	}
	if (i4c(d9d) >= h0p && j3x(d9d) <= t3w)
	{
		let x7z = d9d + j3q;
		g1q.push(x7z);
	}
	if (i4c(d9d) >= c3m && j3x(d9d) <= z2m)
	{
		let x7z = d9d + x3i;
		g1q.push(x7z);
	}
	if (i4c(d9d) >= c3m && j3x(d9d) >= q6c)
	{
		let x7z = d9d + t0h;
		g1q.push(x7z);
	}
	if (i4c(d9d) >= h0p && j3x(d9d) >= d0h)
	{
		let x7z = d9d + t8r;
		g1q.push(x7z);
	}
	if (i4c(d9d) <= s5a && j3x(d9d) >= d0h)
	{
		x7z = d9d + x1l;
		g1q.push(x7z);
	}
	if (i4c(d9d) <= s4a && j3x(d9d) >= q6c)
	{
		let x7z = d9d + l2s;
		g1q.push(x7z);
	}
	return g1q;
}

function w2b(d9d)
{
	let g1q = [];
	if (i4c(d9d) <= s5a)
	{
		let x7z = d9d + d0x;
		g1q.push(x7z);
	}
	if (i4c(d9d) <= s5a && j3x(d9d) <= z2m)
	{
		let x7z = d9d + z3x;
		g1q.push(x7z);
	}
	if (j3x(d9d) <= z2m)
	{
		let x7z = d9d + n1u;
		g1q.push(x7z);
	}
	if (i4c(d9d) >= h0p && j3x(d9d) <= z2m)
	{
		let x7z = d9d + k8c;
		g1q.push(x7z);
	}
	if (i4c(d9d) >= h0p)
	{
		let x7z = d9d + t4a;
		g1q.push(x7z);
	}
	if (i4c(d9d) >= h0p && j3x(d9d) >= q6c)
	{
		let x7z = d9d + q8y;
		g1q.push(x7z);
	}
	if (j3x(d9d) >= q6c)
	{
		let x7z = d9d + v4y;
		g1q.push(x7z);
	}
	if (i4c(d9d) <= s5a && j3x(d9d) >= q6c)
	{
		let x7z = d9d + t0j;
		g1q.push(x7z);
	}
	return g1q;
}

const o2p =
{
  h2n : 0,  
	q7y : 1,
	c7g : 2,
	z7r : 3,
	u9n : 4,
	b7w : 5,
	o5c : 6,
	y0y : 7
};

function o7a(r4y)
{
	switch (r4y)
	{
		case b4h.b3m:
		case b4h.u2m:
			return e5q.s1a;
		case b4h.e0h:
		case b4h.y6y:
			return e5q.z7q;
		case b4h.a2r:
		case b4h.q3k:
			return e5q.w3v;
		case b4h.w3c:
		case b4h.s6h:
			return e5q.y6x;
		case b4h.y0a:
		case b4h.u4n:
			return e5q.u0k;
		case b4h.q6y:
		case b4h.y7s:
			return e5q.king;
		case b4h.r7x:
			return e5q.s1a;
	}
}

function j4i(b6i, z0x, z8f)
{
 	let b5c = '';
	if (z0x.r7x())
	{
		b5c += "--";
	}
	else if (g5g(z0x.e5i))
	{
    if (z0x.x0v())
    {
			let f1c = j3x(z0x.e7g);
			b5c = p3e(f1c) + "x" + p0j(z0x.x7z);
    }
    else
    {
 			b5c = p0j(z0x.x7z);
    }
		if (z0x.w5e())
		{
			b5c += "=";
			b5c += a6q(o7a(z0x.q2q));
		}
	}
	else if (z0x.e5i == b4h.q6y && z0x.m4a())
	{
		if (z0x.x7z == p5d)
		{
			b5c = "O-O-O";
		}
		else
		{
			b5c = "O-O";
		}
	}
	else if (z0x.e5i == b4h.y7s && z0x.m4a())
	{
		if (z0x.x7z == n5a)
		{
			b5c = "O-O-O";
		}
		else
		{
			b5c = "O-O";
		}
	}
	else
	{
		b5c = a6q(o7a(z0x.e5i));
    let h6y = [];
    if (c8w(z0x.e5i))
    {
      if (z0x.e5i == b4h.e0h)
      {
        h6y = i7v(b6i, z0x.x7z);
      }
      else if (z0x.e5i == b4h.a2r)
      {
        h6y = x3e(b6i, z0x.x7z);
      }
      else if (z0x.e5i == b4h.w3c)
      {
        h6y = q0z(b6i, z0x.x7z);
      }
      else if (z0x.e5i == b4h.y0a)
      {
        h6y = y9m(b6i, z0x.x7z);
      }
      else if (z0x.e5i == b4h.q6y)
      {
        h6y = z1t(b6i, z0x.x7z);
      }
    }
    else
    {
      if (z0x.e5i == b4h.y6y)
      {
        h6y = i7v(b6i, z0x.x7z);
      }
      else if (z0x.e5i == b4h.q3k)
      {
        h6y = x3e(b6i, z0x.x7z);
      }
      else if (z0x.e5i == b4h.s6h)
      {
        h6y = q0z(b6i, z0x.x7z);
      }
      else if (z0x.e5i == b4h.u4n)
      {
        h6y = y9m(b6i, z0x.x7z);
      }
      else if (z0x.e5i == b4h.y7s)
      {
        h6y = z1t(b6i, z0x.x7z);
      }
    }
    if (h6y.length > 1)
    {
      
      let g3o = 0;
      let f1c = j3x(z0x.e7g);
     	for (const p7x of h6y)
      {
        if (j3x(p7x.e7g) == f1c)
        {
          g3o++;
        }
      }
      if (g3o == 1)
      {
        
 				let f1c = j3x(z0x.e7g);
				b5c += p3e(f1c);
      }
      else
      {
        g3o = 0;
        let o7l = i4c(z0x.e7g);
       	for (const p7x of h6y)
        {
          if (i4c(p7x.e7g) == o7l)
          {
            g3o++;
          }
        }
        if (g3o == 1)
        {
          
          b5c += y3x(o7l);
        }
        else
        {
          
 					b5c += p0j(z0x.e7g);
        }
      }
    }
		if (z0x.x0v())
		{
       b5c += "x";
		}
		b5c += p0j(z0x.x7z);
	}
	if (!z0x.r7x())
	{
  	let v2d = b6i.o0o();
    v2d.j7z(z0x);
  	if (g6r(v2d))
	  {
  		let y8v = o4l(v2d);
	  	if (y8v.length == 0)
		  {
			  b5c += "#";
  		}
	  	else
		  {
			  b5c += "+";
  		}
	  }
	}
	return b5c;
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

function k8g(z4d,
  b3r,
  l8r,
  coordinate,
  coordinatesType,
  i2u,
  s2p,
  marginSize) 
{
 	let s4h = (coordinatesType == l8m.t3s ||
		coordinatesType == l8m.a6k ||
		coordinatesType == l8m.a6h);
	let b3a = (coordinatesType == l8m.t3s ||
		coordinatesType == l8m.a6k ||
		coordinatesType == l8m.q3r);
	let c7h =	(coordinatesType == l8m.t3s ||
		coordinatesType == l8m.a6h ||
		coordinatesType == l8m.m6w);
	let j9z = (coordinatesType == l8m.t3s ||
		coordinatesType == l8m.q3r ||
		coordinatesType == l8m.m6w);

	z4d.font = (coordinate.fontSize).toString() + "px serif";
	z4d.fillStyle = i2u;
  let d6e = coordinate.height;

	if (b3a)
	{
		let r7n = c4f;
		if (s2p)
		{
			r7n = 1;
		}
    for (let o1a = 0; o1a < c4f; o1a++)
		{
			let b9d = z4d.measureText(r7n).width;
			let top = b3r.j3a + 1 + o1a * l8r.q4y;
			top += (l8r.q4y - d6e) / 2 + d6e;
			let c4v = b3r.q7j - marginSize + (marginSize - b9d) / 2;
      z4d.fillText(r7n, c4v, top);
			if (s2p)
			{
				r7n++;
			}
			else
			{
				r7n--;
			}
		}
	}

	if (c7h)
	{
		let r7n = c4f;
		if (s2p)
		{
			r7n = 1;
		}
    for (let o1a = 0; o1a < c4f; o1a++)
		{
      let b9d = z4d.measureText(r7n).width;
			let top = b3r.j3a + 1 + o1a * l8r.q4y;
			top += (l8r.q4y - d6e) / 2 + d6e;
			let c4v = b3r.q7j + b3r.k2e() +
        (marginSize - b9d) / 2;
      z4d.fillText(r7n, c4v, top);
			if (s2p)
			{
				r7n++;
			}
			else
			{
				r7n--;
			}
		}
	}

	if (s4h)
	{
		let v9y = 'a';
		if (s2p)
		{
			v9y = 'h';
		}
    for (let i9b = 0; i9b < c4f; i9b++)
		{
			let w0h = v9y;
			let left = b3r.q7j + 1 + i9b * l8r.q4y;
      let b9d = z4d.measureText(w0h).width;
			let c4v = left + (l8r.q4y - b9d) / 2;
			let d5o = b3r.j3a - (marginSize - d6e) / 2 - 2;
      
      if (v9y == 'g')
      {
        d5o -= 2; 
      }
      z4d.fillText(w0h, c4v, d5o);
			if (s2p)
			{
        let u0f = v9y.charCodeAt(0);
        u0f--;
        v9y = String.fromCharCode(u0f);
			}
			else
			{
        let u0f = v9y.charCodeAt(0);
        u0f++;
        v9y = String.fromCharCode(u0f);
			}
		}
	}

	if (j9z)
	{
		let v9y = 'a';
		if (s2p)
		{
			v9y = 'h';
		}
    for (let i9b = 0; i9b < c4f; i9b++)
		{
			let w0h = v9y;
			let left = b3r.q7j + 1 + i9b * l8r.q4y;
      let b9d = z4d.measureText(w0h).width;
			let c4v = left + (l8r.q4y - b9d) / 2;
			let d5o = b3r.j3a + b3r.c6g() +
        (marginSize - d6e) / 2 + d6e - 2;
      
      if (v9y == 'g')
      {
        d5o -= 2; 
      }
      z4d.fillText(w0h, c4v, d5o);
			if (s2p)
			{
        let u0f = v9y.charCodeAt(0);
        u0f--;
        v9y = String.fromCharCode(u0f);
			}
			else
			{
        let u0f = v9y.charCodeAt(0);
        u0f++;
        v9y = String.fromCharCode(u0f);
			}
		}
	}
}

function y7u(z4d, fontSize)
{
	let c2q = new p9o();
	c2q.fontSize = fontSize;
	c2q.height = fontSize;
	c2q.width = fontSize;
	return c2q;
}
var whitePawnBitmap = null;
var whiteKnightBitmap = null;
var whiteBishopBitmap = null;
var whiteRookBitmap = null;
var whiteQueenBitmap = null;
var whiteKingBitmap = null;
var blackPawnBitmap = null;
var blackKnightBitmap = null;
var blackBishopBitmap = null;
var blackRookBitmap = null;
var blackQueenBitmap = null;
var blackKingBitmap = null;
var pieceBitmapsInitialized = false;

function b5u()
{
  whitePawnBitmap = d8i.x8m("images/pieces/Merida/wP");
 	whiteKnightBitmap = d8i.x8m("images/pieces/Merida/wN");
  whiteBishopBitmap = d8i.x8m("images/pieces/Merida/wB");
 	whiteRookBitmap = d8i.x8m("images/pieces/Merida/wR");
  whiteQueenBitmap = d8i.x8m("images/pieces/Merida/wQ");
 	whiteKingBitmap = d8i.x8m("images/pieces/Merida/wK");
  blackPawnBitmap = d8i.x8m("images/pieces/Merida/bP");
 	blackKnightBitmap = d8i.x8m("images/pieces/Merida/bN");
  blackBishopBitmap = d8i.x8m("images/pieces/Merida/bB");
 	blackRookBitmap = d8i.x8m("images/pieces/Merida/bR");
  blackQueenBitmap = d8i.x8m("images/pieces/Merida/bQ");
 	blackKingBitmap = d8i.x8m("images/pieces/Merida/bK");
}

function s3v()
{
  whitePawnBitmap = d8i.x8m("images/pieces/CBurnett/wP");
 	whiteKnightBitmap = d8i.x8m("images/pieces/CBurnett/wN");
  whiteBishopBitmap = d8i.x8m("images/pieces/CBurnett/wB");
 	whiteRookBitmap = d8i.x8m("images/pieces/CBurnett/wR");
  whiteQueenBitmap = d8i.x8m("images/pieces/CBurnett/wQ");
 	whiteKingBitmap = d8i.x8m("images/pieces/CBurnett/wK");
  blackPawnBitmap = d8i.x8m("images/pieces/CBurnett/bP");
 	blackKnightBitmap = d8i.x8m("images/pieces/CBurnett/bN");
  blackBishopBitmap = d8i.x8m("images/pieces/CBurnett/bB");
 	blackRookBitmap = d8i.x8m("images/pieces/CBurnett/bR");
  blackQueenBitmap = d8i.x8m("images/pieces/CBurnett/bQ");
 	blackKingBitmap = d8i.x8m("images/pieces/CBurnett/bK");
}

function x0s(r4l)
{
  if (r4l == 0)
  {
    s3v();
  }
  else
  {
    b5u();
  }
}

function c9m(r4y)
{
  switch (r4y)
	{
    case b4h.b3m:
      return whitePawnBitmap;
      break;
    case b4h.e0h:
      return whiteKnightBitmap;
      break;
    case b4h.a2r:
      return whiteBishopBitmap;
      break;
    case b4h.w3c:
      return whiteRookBitmap;
      break;
    case b4h.y0a:
      return whiteQueenBitmap;
      break;
    case b4h.q6y:
      return whiteKingBitmap;
      break;
    case b4h.u2m:
      return blackPawnBitmap;
      break;
    case b4h.y6y:
      return blackKnightBitmap;
      break;
    case b4h.q3k:
      return blackBishopBitmap;
      break;
    case b4h.s6h:
      return blackRookBitmap;
      break;
    case b4h.u4n:
      return blackQueenBitmap;
      break;
    case b4h.y7s:
      return blackKingBitmap;
      break;
    default:
      break
	}
  return null;
}

function a2a(z4d, rect, r4y)
{
  if (r4y == b4h.r7x) return;
	let x8m = c9m(r4y);
  z4d.drawImage(x8m, rect.q7j, rect.j3a, rect.k2e(), rect.c6g());
}
function p2g(l5h)
{
	let b6i = new o8k();
	let n3h = l5h.length;

 	let y8z = l5h.split(" ");
	if (y8z.length < 2)
	{
		return b6i;
	}

	let a1z = y8z[1];
	if (a1z.length)
	{
		if (a1z[0] == 'w')
		{
			b6i.s7m();
		}
		else if (a1z[0] == 'b')
		{
			b6i.t6k();
		}
	}

 	let v1x = y8z[0].split("/");
	if (v1x.length != 8)
	{
		return b6i;
	}
	let g8e = a8;
	for (const o1a of v1x)
	{
		let d9d = g8e;
		let n3h = o1a.length;
		for (let i = 0; i < n3h; i++)
		{
			if (d9d == g8e + 8)
			{
				return b6i; 
			}
			let f0a = true;
			switch (o1a[i])
			{
				case 'p':
					b6i.c9p(d9d, b4h.u2m);
					break;
				case 'n':
					b6i.c9p(d9d, b4h.y6y);
					break;
				case 'b':
					b6i.c9p(d9d, b4h.q3k);
					break;
				case 'r':
					b6i.c9p(d9d, b4h.s6h);
					break;
				case 'q':
					b6i.c9p(d9d, b4h.u4n);
					break;
				case 'k':
					b6i.c9p(d9d, b4h.y7s);
					break;
				case 'P':
					b6i.c9p(d9d, b4h.b3m);
					break;
				case 'N':
					b6i.c9p(d9d, b4h.e0h);
					break;
				case 'B':
					b6i.c9p(d9d, b4h.a2r);
					break;
				case 'R':
					b6i.c9p(d9d, b4h.w3c);
					break;
				case 'Q':
					b6i.c9p(d9d, b4h.y0a);
					break;
				case 'K':
					b6i.c9p(d9d, b4h.q6y);
					break;
				default:
					f0a = false;
					break;
			}
			if (f0a)
			{
				d9d = d9d + 1;
			}
			else
			{
				if (!isNaN(o1a[i]))
				{
					d9d = d9d + k0x(o1a[i], 0);
				}
			}
		}
		g8e = g8e - 8;
	}

 	if (y8z.length >= 3)
	{
		let i2w = new d5f(); 
		let z5s = y8z[2];
		if (z5s.length)
		{
			if (z5s[0] != '-')
			{
				let n3h = z5s.length;
				if (z5s[0] >= 'A' && z5s[0] <= 'H')
				{
 					i2w.p0m = true; 
          
					i2w.l6d = b6i.q6y();
					i2w.w7l = b6i.y7s();
					if (n3h == 4)
					{
						let b5c = z5s.charAt(0).toLowerCase();
						b5c += "1";
						i2w.x1x = h7n(b5c);
						if (b6i.i4m(i2w.x1x))
						{
							i2w.h3h = true;
						}
						b5c = z5s.charAt(1).toLowerCase();
						b5c += "1";
						i2w.j9x = h7n(b5c);
						if (b6i.i4m(i2w.j9x))
						{
							i2w.n9s = true;
						}
						b5c = z5s.charAt(2).toLowerCase();
						b5c += "8";
						i2w.c0f = h7n(b5c);
						if (b6i.l0o(i2w.c0f))
						{
							i2w.v7x = true;
						}
						b5c = z5s.charAt(3).toLowerCase();
						b5c += "8";
						i2w.a1p = h7n(b5c);
						if (b6i.l0o(i2w.a1p))
						{
							i2w.m0v = true;
						}
          }
				}
				else
				{
					for (let i = 0; i < n3h; i++)
					{
						switch (z5s[i])
						{
							case 'K':
								if (b6i.z3y(i2w.l6d) && b6i.i4m(i2w.x1x))
								{
									i2w.h3h = true;
								}
								break;
							case 'Q':
								if (b6i.z3y(i2w.l6d) && b6i.i4m(i2w.j9x))
								{
									i2w.n9s = true;
								}
								break;
							case 'k':
								if (b6i.q4r(i2w.w7l) && b6i.l0o(i2w.c0f))
								{
									i2w.v7x = true;
								}
								break;
							case 'q':
								if (b6i.q4r(i2w.w7l) && b6i.l0o(i2w.a1p))
								{
									i2w.m0v = true;
								}
								break;
						}
					}
				}
			}
		}
		if (y8z.length >= 4)
		{
			let s6b = y8z[3];
			if (s6b.length)
			{
				if (s6b[0] != '-')
				{
					i2w.k2v = h7n(s6b);
					if (i4c(i2w.k2v) == s4a)
					{
						let b1y = i2w.k2v + 8;
						let t0e = i2w.k2v - 8;
						if (!b6i.s6s(b1y) || !b6i.z3s(t0e))
						{
							i2w.k2v = y3r;
						}
					}
					else if (i4c(i2w.k2v) == c3m)
					{
						let b1y = i2w.k2v - 8;
						let t0e = i2w.k2v + 8;
						if (!b6i.s6s(b1y) || !b6i.x5b(t0e))
						{
							i2w.k2v = y3r;
						}
					}
					else
					{
						i2w.k2v = y3r;
					}
				}
			}
		}
		b6i.l4r(i2w);
	}
	return b6i;
}

function k5x(b6i)
{
	let l5h = '';
	let g8e = a8;
	for (let o1a = 7; o1a >= 0; o1a--)
	{
		let d9d = g8e;
		let n7e = 0;
		for (let i9b = 0; i9b < 8; i9b++)
		{
			if (b6i.s6s(d9d))
			{
				n7e++;
			}
			else
			{
				if (n7e)
				{
					l5h += n7e;
					n7e = 0;
				}
				switch (b6i.p3t(d9d))
				{
					case b4h.r7x:
						break;
					case b4h.b3m:
						l5h += 'P';
						break;
					case b4h.e0h:
						l5h += 'N';
						break;
					case b4h.a2r:
						l5h += 'B';
						break;
					case b4h.w3c:
						l5h += 'R';
						break;
					case b4h.y0a:
						l5h += 'Q';
						break;
					case b4h.q6y:
						l5h += 'K';
						break;
					case b4h.u2m:
						l5h += 'p';
						break;
					case b4h.y6y:
						l5h += 'n';
						break;
					case b4h.q3k:
						l5h += 'b';
						break;
					case b4h.s6h:
						l5h += 'r';
						break;
					case b4h.u4n:
						l5h += 'q';
						break;
					case b4h.y7s:
						l5h += 'k';
						break;
				}
			}
			d9d = d9d + 1;
		}
		if (n7e)
		{
			l5h += n7e;
		}
		g8e = (g8e - 8);
		if (o1a > 0)
		{
			l5h += "/";
		}
	}
	l5h += " ";
	if (b6i.p8t())
	{
		l5h += "w";
	}
	else
	{
		l5h += "b";
	}
	l5h += " ";
	let i2w = b6i.b6f();
	if (
		!i2w.h3h &&
		!i2w.n9s &&
		!i2w.v7x &&
		!i2w.m0v)
	{
		l5h += "-";
	}
	else
	{
		if (i2w.p0m)
		{
			if (i2w.h3h)
			{
				l5h += p3e(j3x(i2w.x1x)).toUpperCase();
			}
			if (i2w.n9s)
			{
				l5h += p3e(j3x(i2w.j9x)).toUpperCase();
			}
			if (i2w.v7x)
			{
				l5h += p3e(j3x(i2w.c0f)).toUpperCase();
			}
			if (i2w.m0v)
			{
				l5h += p3e(j3x(i2w.a1p)).toUpperCase();
			}
		}
		else
		{
			if (i2w.h3h)
			{
				l5h += "K";
			}
			if (i2w.n9s)
			{
				l5h += "Q";
			}
			if (i2w.v7x)
			{
				l5h += "k";
			}
			if (i2w.m0v)
			{
				l5h += "q";
			}
		}
	}
	l5h += " ";
	if (i2w.k2v == y3r)
	{
		l5h += "-";
	}
	else
	{
		l5h += p0j(i2w.k2v);
	}
	return l5h;
}

function l3c(b6i, n4u)
{
	
	

  let i9k = n4u.length;
	if (i9k < 2 || i9k > 7)
	{
		return false;
	}

	
	if (n4u[0] == 'Z' || (i9k == 2 && n4u == "--") || (i9k == 4 && n4u == "null"))
	{
		return new w3p();
	}

	
	let b3p = n4u[i9k-1];
	if (b3p == '+' || b3p == '#')
	{
		i9k--;
		if (i9k < 2)
		{
   		return false;
		}
	}

	
	if (n4u[0] == 'O' || n4u[0] == '0')
	{
		if (i9k == 3)
		{
			let h6y = o4i(b6i);
			if (h6y.length != 1)
			{
    		return false;
			}
			return h6y[0];
		}
		if (i9k == 5)
		{
			let h6y = l9v(b6i);
			if (h6y.length != 1)
			{
    		return false;
			}
			return h6y[0];
		}
 		return false;
	}

	
	let m9g = false;
	let q0s = b4h.r7x;
	if (n4u[i9k-2] == '=')
	{
		m9g = true;
		let c3d = n4u[i9k-1];
		if (c3d == 'N')
		{
			q0s = b6i.p8t() ? b4h.e0h : b4h.y6y;
		}
		else if (c3d == 'B')
		{
			q0s = b6i.p8t() ? b4h.a2r : b4h.q3k;
		}
		else if (c3d == 'R')
		{
			q0s = b6i.p8t() ? b4h.w3c : b4h.s6h;
		}
		else if (c3d == 'Q')
		{
			q0s = b6i.p8t() ? b4h.y0a : b4h.u4n;
		}
		else
		{
  		return false;
		}
		i9k -= 2;
		if (i9k < 2)
		{
  		return false;
		}
	}

 	
	let toString = '';
	toString += n4u[i9k-2];
	toString += n4u[i9k-1];
	let t0e = h7n(toString);
	if (t0e == y3r)
	{
		return false;
	}
	i9k -= 2;
	

 	if (m9g)
	{
		let h6y = x0j(b6i, t0e);
		if (h6y.length == 0)
		{
  		return false;
		}
		let k7p = [];
		for (const z0x of h6y)
		{
			if (z0x.q2q == q0s)
			{
				k7p.push(z0x);
			}
		}
		h6y = k7p;
		if (h6y.length == 1)
		{
			return h6y[0];
		}
		if (i9k == 0)
		{
			
			for (const p7x of h6y)
			{
				if (p7x.k4u == y3r)
				{
					return p7x;
				}
			}
  		return false;
		}
		if (i9k != 2)
		{
  		return false;
		}
		
		let b3p = n4u[0];
		if (b3p < 'a' || b3p > 'h')
		{
  		return false;
		}
		let f1c = b0y(b3p);
		for (const p7x of h6y)
		{
			if (j3x(p7x.e7g) == f1c)
			{
				return p7x;
			}
		}
		return false;
	}

	if (i9k == 0)
	{
  	
		let h6y = x0j(b6i, t0e);
		if (h6y.length != 1)
		{
  		return false;
		}
		return h6y[0];
	}

  
	let s1a = false;
	let h6y = [];
	let y5s = n4u[0];
	if (y5s == 'N')
	{
		h6y = i7v(b6i, t0e);
	}
	else if (y5s == 'B')
	{
		h6y = x3e(b6i, t0e);
	}
	else if (y5s == 'R')
	{
		h6y = q0z(b6i, t0e);
	}
	else if (y5s == 'Q')
	{
		h6y = y9m(b6i, t0e);
	}
	else if (y5s == 'K')
	{
		
		h6y = z1t(b6i, t0e);
	}
	else
	{
		s1a = true;
		h6y = x0j(b6i, t0e);
	}
	if (h6y.length == 0)
	{
		return false;
	}
	if (h6y.length == 1)
	{
		return h6y[0]; 
	}

	
	
	
	if (i9k < 2)
	{
		return false;
	}

 	if (s1a)
	{
		let b3p = n4u[0]; 
		if (b3p < 'a' || b3p > 'h')
		{
  	  return false;
		}
		let f1c = b0y(b3p);
		for (const p7x of h6y)
		{
			if (j3x(p7x.e7g) == f1c && p7x.k4u != y3r)
			{
				return p7x;
			}
		}
		return false;
	}

	

 	
	let r4g = false;
	if (n4u[i9k-1] == 'x')
	{
		r4g = true;
		i9k--;
	}
	else if (n4u[i9k-1] == '-') 
	{
		r4g = false;
		i9k--;
	}

	if (i9k < 2)
	{
		return false;
	}

 	if (i9k == 2)
	{
		
		let b3p = n4u[1]; 
		if (b3p >= 'a' && b3p <= 'h')
		{
			let f1c = b0y(b3p);
			let c5s  = 0;
      let g6m = null;
			for (const p7x of h6y)
			{
				if (j3x(p7x.e7g) == f1c)
				{
					g6m = p7x;
					c5s++;
				}
			}
      return c5s === 1 ? g6m : false;
		}
		if (b3p >= '1' && b3p <= '8')
		{
			let o7l = l3x(b3p);
			let c5s = 0;
      let g6m = null;
			for (const p7x of h6y)
			{
				if (i4c(p7x.e7g) == o7l)
				{
					g6m = p7x;
					c5s++;
				}
			}
      return c5s === 1 ? g6m : false;
		}
		return false;
	}

 	if (i9k == 3)
	{
		
		let z5m = '';
		z5m += n4u[1]; 
		z5m += n4u[2];
		let b1y = h7n(z5m);
		if (b1y == y3r)
		{
  		return false;
		}
		let c5s = 0;
    let g6m = null;
		for (const p7x of h6y)
		{
			if (p7x.e7g == b1y)
			{
				g6m = p7x;
				c5s++;
			}
		}
    return c5s === 1 ? g6m : false;
	}

	return false;
}

function o4f()
{
  let g2p = [
    "images/board/BoardBackground.png",
    "images/board/DarkSquare.png",
    "images/board/LightSquare.png",
    "images/board/Margin.png",
    "images/pieces/Merida/bB.svg",
    "images/pieces/Merida/bK.svg",
    "images/pieces/Merida/bN.svg",
    "images/pieces/Merida/bP.svg",
    "images/pieces/Merida/bQ.svg",
    "images/pieces/Merida/bR.svg",
    "images/pieces/Merida/wB.svg",
    "images/pieces/Merida/wK.svg",
    "images/pieces/Merida/wN.svg",
    "images/pieces/Merida/wP.svg",
    "images/pieces/Merida/wQ.svg",
    "images/pieces/Merida/wR.svg",
    "images/pieces/CBurnett/bB.svg",
    "images/pieces/CBurnett/bK.svg",
    "images/pieces/CBurnett/bN.svg",
    "images/pieces/CBurnett/bP.svg",
    "images/pieces/CBurnett/bQ.svg",
    "images/pieces/CBurnett/bR.svg",
    "images/pieces/CBurnett/wB.svg",
    "images/pieces/CBurnett/wK.svg",
    "images/pieces/CBurnett/wN.svg",
    "images/pieces/CBurnett/wP.svg",
    "images/pieces/CBurnett/wQ.svg",
    "images/pieces/CBurnett/wR.svg"
  ].map(path => q5b + path);

  return g2p;
}
class b5n
{

constructor()
{
	this.q9c = '';
}

o0o()
{
	let t9p = new b5n();
	t9p.q9c = this.q9c;
	return t9p;
}

r7x()
{
	return this.q9c.length == 0;
}

y1l()
{
	return this.q9c;
}

}


const y2m =
{
	h2n : 0,
	u2k : 1,
	v9t: 2,
	u2j: 3,
	b5z: 4,
	v1n: 5,
	q8j: 6,
	v7h: 7,
	z8s: 8,
	o8n: 9,
	l2q: 10,
	c0b: 11,
	v0m: 12,
	a1b: 13,
	h1d: 14,
	e6v: 15,
	r6n: 16,
	l2x: 17,
	b2u: 18,
	n3k: 19,
	y7x: 20,
	z4v: 21,
	j0s: 22,
	i6o: 23,
	y5m: 24,
	j7l: 25,
	t7q: 26,
	o3k: 27,
	x7v: 28,
	f5s: 29,
	w4r: 30,
	t2a: 31,
	b6d: 32,
	c9t: 33,
	f7k: 34,
	q1h: 35,
	x2z: 36,
	s8i: 37,
	y6a: 38,
	g5o: 39,
	x5m: 40,
	c8h: 41,
	p4u: 42,
	e6r: 43,
	y7p: 44,
	e6q: 45,
	o1h: 46,
	s1v: 47,
	h2w: 48,
	q6z: 49,
	r8e: 50,
	p5j: 51,
	c5v: 52,
	r0q: 53,
	e9r: 54,
	z7g: 55,
	i9f: 56,
	z5g: 57,
	w3r: 58,
	q0q: 59,
	l1o: 60,
	y2h: 61,
	m9b: 62,
	s1m: 63,
	u1y: 64,
	h7o: 65,
	o7v: 66,
	q2o: 67,
	r6q: 68,
	h8h: 69,
	o6w: 70,
	h5p: 71,
	u3j: 72,
	p3c: 73,
	t7e: 74,
	l9f: 75,
	i0h: 76,
	b8f: 77,
	t1c: 78,
	o9z: 79,
	h2l: 80,
	h5j: 81,
	m7r: 82,
	x1e: 83,
	w5u: 84,
	r3g: 85,
	k6r: 86,
	r7w: 87,
	b8p: 88,
	k6j: 89,
	x8q: 90,
	z4c: 91,
	v8d: 92,
	e7m: 93,
	f1k: 94,
	v0j: 95,
	o7o: 96,
	j5x: 97,
	j0x: 98,
	l9m: 99,
	i2q: 100,
	n4j: 101,
	o0s: 102,
	p2y: 103,
	l2o: 104,
	g5t: 105,
	s4j: 106,
	q0r: 107,
	e2m: 108,
	m9k: 109,
	l1h: 110,
	z6a: 111,
	k0m: 112,
	f8a: 113,
	u6v: 114,
	s5m: 115,
	t7l: 116,
	d8l: 117,
	v4u: 118,
	m1l: 119,
	f9a: 120,
	v5q: 121,
	l5k: 122,
	u0j: 123,
	g6q: 124,
	h0q: 125,
	s3u: 126,
	r1l: 127,
	n7v: 128,
	a7a: 129,
	i3x: 130,
	a7c: 131,
	k2b: 132,
	q7b: 133,
	c8t: 134,
	t6x: 135,
	g5y: 136,
	e1k: 137,
	v1d: 138,
	o5h: 139,
	o2k: 140,
	r9w: 141,
	v0g: 142,
	e2r: 143,
	q7w: 144,
	j8h: 145,
	d4k: 146,
	m9t: 147,
	m7s: 148,
	q4k: 149,
	h8n: 150,
	w5o: 151,
	j7x: 152,
	w3g: 153,
	k7f: 154,
	w2v: 155,
	j0j: 156,
	a3h: 157,
	x6w: 158,
	y6k: 159,
	n0o: 160,
	t9d: 161,
	t1z: 162,
	i2y: 163,
	j7i: 164,
	f7z: 165,
	p4e: 166,
	h3t: 167,
	g9x: 168,
	k1s: 169,
	p8a: 170,
	e6h: 171,
	s1t: 172,
	t5r: 173,
	s6y: 174,
	r8h: 175,
	q9a: 176,
	v5t: 177,
	p4t: 178,
	x7d: 179,
	r5k: 180,
	d7r: 181,
	p6u: 182,
	l6q: 183,
	a4p: 184,
	x0l: 185,
	t0l: 186,
	c3f: 187,
	v7w: 188,
	y5w: 189,
	b2e: 190,
	s4l: 191,
	q8i: 192,
	n4z: 193,
	y7q: 194,
	y3m: 195,
	c1e: 196,
	u7k: 197,
	b3g: 198,
	e5k: 199,
	w5c: 200,
	z5w: 201,
	c0g: 202,
	q0e: 203,
	n5g: 204,
	m5p: 205,
	f7y: 206,
	q0u: 207,
	e3m: 208,
	d6s: 209,
	v3d: 210,
	o4t: 211,
	t2o: 212,
	d6p: 213,
	c3b: 214,
	r6y: 215,
	z5u: 216,
	o6a: 217,
	x5g: 218,
	u8s: 219,
	q6q: 220,
	t8m: 221,
	j2x: 222,
	i1t: 223,
	j8u: 224,
	j0v: 225,
	w5x: 226,
	d1x: 227,
	r8u: 228,
	j3i: 229,
	x8d: 230,
	o9b: 231,
	z7a: 232,
	w5g: 233,
	x9l: 234,
	c2m: 235,
	s4k: 236,
	w8c: 237,
	m8h: 238,
	y0v: 239,
	v1o: 240,
	y2r: 241,
	l0e: 242,
	l3u: 243,
	q8f: 244,
	m3e: 245,
	n2v: 246,
	k2x: 247,
	h6o: 248,
	x2m: 249,
	b7o: 250,
	n1v: 251,
	m1d: 252,
	q5u: 253,
	q1j: 254,
	b0f: 255,
	t0f: 256,
	x6m: 257,
	k9q: 258,
	s2z: 259
};


const w3m = 0;
const z0t = 500;

function a5z(b5c)
{
	if (b5c.length != 3)
	{
		return 0;
	}
	let n7t = b5c[0];
	let v3g = b5c[1];
	let h1p = b5c[2];

	let t4y = 0;
	if (n7t == 'A' || n7t == 'a') t4y = 0;
	else if (n7t == 'B' || n7t == 'b') t4y = 1;
	else if (n7t == 'C' || n7t == 'c') t4y = 2;
	else if (n7t == 'D' || n7t == 'd') t4y = 3;
	else if (n7t == 'E' || n7t == 'e') t4y = 4;
	else return 0;
	if (isNaN(v3g) || isNaN(h1p))
	{
		return 0;
	}
	return t4y * 100 + k0x(b5c.substr(1, 2), 0) + 1;
}

function k9z(g7c)
{
	if (g7c)
	{
		let div = Math.trunc((g7c - 1) / 100);
		let p9b = (g7c - 1) % 100;
		let s6p = 'A';
		if (div == 0) s6p = 'A';
		else if (div == 1) s6p = 'B';
		else if (div == 2) s6p = 'C';
		else if (div == 3) s6p = 'D';
		else if (div == 4) s6p = 'E';
		return s6p + p9b.toString().padStart(2, '0');
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
	this.h7a = 0;
	this.m5g = 0;
	this.l6h = 0;
}

o0o()
{
	let v9e = new j6w();
	v9e.g2k = this.h7a;
	v9e.i1q = this.m5g;
	v9e.r2w = this.l6h;
	return v9e;
}

r7x()
{
	return this.l6h == 0 && this.m5g == 0 && this.h7a == 0;
}

u4v()
{
	let r2w = this.l6h.toString().padStart(4, '0');
	let i1q = this.m5g.toString().padStart(2, '0');
	let g2k = this.h7a.toString().padStart(2, '0');
	return r2w + i1q + g2k;
}

a1f(t1e, b5c)
{
	let n3h = b5c.length;
	if (!n3h)
	{
		this.l6h = 0;
		this.m5g = 0;
		this.h7a = 0;
	}
	else if (t1e == "dd-mm-yyyy" || t1e == "dd.mm.yyyy")
	{
  	if (n3h == 4)
		{
      this.l6h = k0x(b5c.substr(1, 4), 0);
		}
		else if (n3h == 10)
		{
			this.h7a = k0x(b5c.substr(0, 2), 0);
			this.m5g = k0x(b5c.substr(3, 2), 0);
			this.l6h = k0x(b5c.substr(6, 4), 0);
		}
	}
	else if (t1e == "yyyy-mm-dd" || t1e == "yyyy.mm.dd")
	{
  	if (n3h == 4)
		{
      this.l6h = k0x(b5c.substr(1, 4), 0);
		}
		else if (n3h == 10)
		{
			this.h7a = k0x(b5c.substr(8, 2), 0);
			this.m5g = k0x(b5c.substr(5, 2), 0);
			this.l6h = k0x(b5c.substr(0, 4), 0);
		}
	}
	else if (t1e == "dd-mm-yy" || t1e == "dd.mm.yy")
	{
		if (n3h == 8)
		{
			this.h7a = k0x(b5c.substr(0, 2), 0);
			this.m5g = k0x(b5c.substr(3, 2), 0);
			this.l6h = k0x(b5c.substr(6, 2), 0) + 2000;
		}
	}
}

toString(t1e)
{
	let b5c = '';
	if (this.r7x())
	{
	}
	else if (t1e == "list")
	{
		let r2w = this.l6h.toString().padStart(4, '0');
		let i1q = this.m5g.toString().padStart(2, '0');
		let g2k = this.h7a.toString().padStart(2, '0');
		if (this.h7a)
		{
			b5c = g2k + "-" + i1q + "-" + r2w;
		}
		else if (this.m5g)
		{
			b5c = i1q + "-" + r2w;
		}
		else if (this.l6h)
		{
			b5c = r2w;
		}
	}
	else if (t1e == "dd-mm-yyyy")
	{
		let r2w = this.l6h.toString().padStart(4, '0');
		let i1q = this.m5g.toString().padStart(2, '0');
		let g2k = this.h7a.toString().padStart(2, '0');
		b5c = g2k + "-" + i1q + "-" + r2w;
	}
	else if (t1e == "dd.mm.yyyy")
	{
		let r2w = this.l6h.toString().padStart(4, '0');
		let i1q = this.m5g.toString().padStart(2, '0');
		let g2k = this.h7a.toString().padStart(2, '0');
		b5c = g2k + "." + i1q + "." + r2w;
	}
	else if (t1e == "yyyy-mm-dd")
	{
		let r2w = this.l6h.toString().padStart(4, '0');
		let i1q = this.m5g.toString().padStart(2, '0');
		let g2k = this.h7a.toString().padStart(2, '0');
		b5c = r2w + "-" + i1q + "-" + g2k;
	}
	else if (t1e == "yyyy.mm.dd")
	{
		let r2w = this.l6h.toString().padStart(4, '0');
		let i1q = this.m5g.toString().padStart(2, '0');
		let g2k = this.h7a.toString().padStart(2, '0');
		b5c = r2w + "." + i1q + "." + g2k;
	}
	else if (t1e == "yyyymmdd")
	{
		let r2w = this.l6h.toString().padStart(4, '0');
		let i1q = this.m5g.toString().padStart(2, '0');
		let g2k = this.h7a.toString().padStart(2, '0');
		b5c = r2w + i1q + g2k;
	}
	else if (t1e == "yyyy")
	{
		let r2w = this.l6h.toString().padStart(4, '0');
		b5c = r2w;
	}
	return b5c;
}

}

class w6u
{

constructor()
{
	this.b6b = new q3c();
	this.q2j = new u2s();
	this.q6p = 0;
	this.u7h = 0;
	this.x9v = "";
  this.v0e = y2m.h2n;
}

o0o()
{
	let i2z = new w6u();
	i2z.b6b = this.b6b.o0o();
	i2z.q2j = this.q2j.o0o();
	i2z.q6p = this.q6p;
	i2z.u7h = this.u7h;
	i2z.x9v = this.x9v;
  i2z.v0e = this.v0e;
	return i2z;
}

r7x()
{
	return this.b6b.r7x() &&
		this.q2j.r7x() &&
		this.q6p == 0 &&
		this.u7h == 0 &&
		this.x9v == "" &&
 		this.v0e == y2m.h2n;
}

}


class e5o
{

constructor()
{
	this.p8k = new w6u();
	this.d9a = new w6u();
	this.p8w = new i1m();
	this.l7b = new b5n();
	this.j3j = new l6g();
	this.x9v = new f0w();
	this.u4v = new j6w();
	this.u6z = e1q.h2n;
	this.g7c = 0;
	this.y0n = 0;
	this.u2o = 0;
	this.p7b = new t2b();
  this.id = new v1a();
}

o0o()
{
	let i0g = new e5o();
	i0g.p8k = this.p8k.o0o();
	i0g.d9a = this.d9a.o0o();
	i0g.p8w = this.p8w.o0o();
	i0g.l7b = this.l7b.o0o();
	i0g.j3j = this.j3j.o0o();
	i0g.x9v = this.x9v.o0o();
	i0g.u4v = this.u4v.o0o();
	i0g.u6z = this.u6z;
	i0g.g7c = this.g7c;
	i0g.y0n = this.y0n;
	i0g.u2o = this.u2o;
	i0g.p7b = this.p7b.o0o();
  i0g.id = this.id.o0o();
	return i0g;
}

r7x()
{
	return this.p8k.r7x() &&
		this.d9a.r7x() &&
		this.p8w.r7x() &&
		this.l7b.r7x() &&
		this.j3j.r7x() &&
		this.x9v.r7x() &&
		this.u4v.r7x() &&
		this.u6z == e1q.h2n &&
		this.g7c == 0 &&
		this.y0n == 0 &&
		this.u2o == 0 &&
		this.p7b.r7x();
}

k7c()
{
	let b5c = '';
	if (this.u2o)
	{
		b5c = this.y0n.toString() + "." + this.u2o.toString();
	}
	else if (this.y0n)
	{
		b5c = this.y0n.toString();
	}
	return b5c;
}

}


class v1a
{

constructor()
{
	this.l4f = '';
}

o0o()
{
	let o2c = new v1a();
	o2c.l4f = this.l4f;
	return o2c;
}

toString()
{
  return this.l4f;
}

}


class f0w
{

constructor()
{
	this.x9v = '';
}

o0o()
{
	let j0m = new f0w();
	j0m.x9v = this.x9v;
	return j0m;
}

r7x()
{
	return this.x9v.length == 0;
}

y1l()
{
	return this.x9v;
}

}


class q3c
{

constructor()
{
	this.j3k = '';
	this.d8q = '';
}

o0o()
{
	let e5f = new q3c();
	e5f.j3k = this.j3k;
	e5f.d8q = this.d8q;
	return e5f;
}

r7x()
{
	return this.d8q.length == 0 &&
		this.j3k.length == 0;
}

q9c()
{
	if (!this.d8q.length == 0 && !this.j3k.length == 0)
	{
		return this.d8q + "," + this.j3k;
	}
	else if (this.d8q.length == 0 && this.j3k.length == 0)
	{
		return "";
	}
	else if (this.j3k.length == 0)
	{
		return this.d8q;
	}
	else
	{
		return this.j3k;
	}
}

l3n()
{
	return this.q9c().replace(/,/g, " ");
}

u2e()
{
	return this.v4m(1).replace(/,/g, " ");
}

v4m(f0c)
{
	if (this.d8q.length == 0)
	{
		if (this.j3k.length == 0 || f0c < 1)
		{
			return "";
		}
		else
		{
			return this.j3k.substring(0, f0c);
		}
	}
	else
	{
		if (this.j3k.length == 0 || f0c < 1)
		{
			return this.d8q;
		}
		else
		{
			return this.d8q + "," + this.j3k.substring(0, f0c);
		}
	}
}

m0f(l4h)
{
	let b5c = l4h.trim();
	let g7d = b5c.lastIndexOf(",");
	if (g7d != -1)
	{
		this.d8q = b5c.substr(0, g7d).trim();
		this.j3k = b5c.substr(g7d+1, b5c.length).trim();
		if (this.j3k.length != 0)
		{
			if (this.j3k.charAt(0).toLowerCase() == this.j3k.charAt(0))
			{
				this.d8q += ",";
				this.d8q += this.j3k;
				this.j3k = "";
			}
		}
	}
	else
	{
		this.d8q = b5c;
		this.j3k = "";
	}
}

y1l()
{
	return this.q9c();
}

}

const e1q =
{
	h2n : 0,
	d3r : 1,
	d4q : 2,
	o3y : 3,
	k2t : 4,
	i1x : 5,
	o5x : 6,
	y9l : 7,
	t4s : 8,
	n4d : 9,
	s4n : 10,
	v3c : 11,
	h8r : 12,
	x5f : 13,
	j6o : 14,
	j3b : 15
};


function t4o(u6z)
{
	switch (u6z)
	{
		case e1q.d3r:
			return "2-0";
		case e1q.o3y:
			return "1-1";
		case e1q.d4q:
			return "0-2";
		default:
			return "";
	}
}
const e1x =
{
	u4p : 0,
	y2s : 1,
	i6i : 2
};

const l4v =
[
	[ e1x.u4p,   "High" ],
	[ e1x.y2s, "Middle" ],
	[ e1x.i6i,    "Low" ]
];

class l6g
{

constructor()
{
	this.x9v = '';
	this.v5r = '';
	this.i0i = new j6w();
	this.e2f = new j6w();
	this.q6f = 0;
	this.b4j = e1x.u4p;
}

o0o()
{
	let q8a = new l6g();
	q8a.x9v = this.x9v;
	q8a.v5r = this.v5r;
	q8a.i0i = this.i0i.o0o();
	q8a.e2f = this.e2f.o0o();
	q8a.q6f = this.q6f;
	q8a.b4j = this.b4j;
	return q8a;
}

r7x()
{
	return this.x9v.length == 0 &&
		this.v5r.length == 0 &&
		this.i0i.r7x() &&
		this.e2f.r7x() &&
		this.q6f == 0 &&
		this.b4j == e1x.u4p;
}

y1l()
{
	let b5c = this.x9v;
	if (this.v5r.length)
	{
		if (b5c.length)
		{
			b5c += " ";
		}
		b5c += this.v5r;
	}
	return b5c;
}

}


const o0c =
{
	l6w : 0,
	l9z : 1,
	g3t : 2,
	b6s : 3,
	i0c : 4,
	z5p : 5,
	o9y : 6,
	b6m : 7,
	t3h : 8,
	h1z : 9,
	g0r : 10,
	b9h : 11,
	w1d : 12,
	a7n : 13,
	z0m : 14,
	p0y : 15
};

class t2b
{

constructor()
{
	this.value = 0;
}

j5y(value)
{
	this.value = value;
}

o0o()
{
	let f7j = new t2b();
	f7j.value = this.value;
	return f7j;
}

r7x()
{
	return this.value == 0;
}

q7n()
{
	return this.value != 0;
}

h2n()
{
	return this.value == 0;
}

g3o()
{
	let p0n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.j4c(i))
		{
			p0n++;
		}
	}
	return p0n;
}

c1b()
{
	this.value = 0;
}

set(c4p, m1g)
{
	if (m1g)
	{
		this.value |= (1 << c4p);
	}
	else
	{
		this.value &= ~(1 << c4p);
	}
}

j4c(c4p)
{
	return (this.value & (1 << c4p)) != 0;
}

c5p()
{
	return this.value;
}

}

function y6n(r2w)
{
	return r2w.toString().padStart(4, '0');
}

class u2s
{

constructor()
{
	this.q9c = '';
	this.j4t = 0;
	this.r2w = 0;
	this.s0o = false;
	this.v0e = y2m.h2n;
}

o0o()
{
	let t8l = new u2s();
	t8l.q9c = this.q9c;
	t8l.j4t = this.j4t;
	t8l.r2w = this.r2w;
	t8l.s0o = this.s0o;
	t8l.v0e = this.v0e;
	return t8l;
}

r7x()
{
	return this.q9c.length == 0 &&
		this.j4t == 0 &&
		this.r2w == 0 &&
		this.s0o == false &&
		this.v0e == y2m.h2n;
}

h5y()
{
	let b5c = this.q9c;
	if (this.j4t)
	{
		if (b5c.length)
		{
			b5c += " ";
		}
		b5c += this.j4t;
	}
	return b5c;
}

y1l()
{
	let b5c = this.q9c;
	if (this.j4t)
	{
		if (b5c.length)
		{
			b5c += " ";
		}
		b5c += this.j4t;
	}
	if (b5c.length)
	{
		b5c += " ";
	}
	b5c += this.k1n();
	return b5c;
}


z0r()
{
	let b5c = this.q9c;
	if (this.j4t > 1)
	{
		b5c += " ";
		b5c += this.j4t;
	}
	return b5c;
}

k1n()
{
	let b5c = '';
	if (this.s0o)
	{
		let c7c = y6n(this.r2w);
		let x8l = y6n(this.r2w + 1);
		let n3y = c7c + "/" + x8l.substr(2, 2);
		b5c = n3y;
	}
	else
	{
		b5c = y6n(this.r2w);
	}
	return b5c;
}

}

class g4i
{

constructor()
{
	this.y6r = 0;
	this.e0l = 0;
	this.b5v = 0;

}

}

function s4r(b5c, q2l, u7h)
{
	u7h.y6r = 0;
	u7h.e0l = 0;
	u7h.b5v = 0;

	let n3h = b5c.length;
	if (!n3h || b5c == "?")
	{
		return;
	}
	let i = 0;
	for (; i < n3h; i++)
	{
		if (!isNaN(b5c[i]))
		{
			break;
		}
	}
	let z4b = '';
	for (; i < n3h; i++)
	{
		if (isNaN(b5c[i]))
		{
			break;
		}
		z4b += b5c[i].toString();
	}
	for (; i < n3h; i++)
	{
		if (!isNaN(b5c[i]))
		{
			break;
		}
	}
	let e3i = '';
	for (; i < n3h; i++)
	{
		if (isNaN(b5c[i]))
		{
			break;
		}
		e3i += b5c[i].toString();
	}
	for (; i < n3h; i++)
	{
		if (!isNaN(b5c[i]))
		{
			break;
		}
	}
	let v2x = '';
	for (; i < n3h; i++)
	{
		if (isNaN(b5c[i]))
		{
			break;
		}
		v2x += b5c[i].toString();
	}
	let t8b = k0x(z4b, 0);
	let s5z = k0x(e3i, 0);
	let d2s = k0x(v2x, 0);
	if (
		t8b < 0 || t8b > q2l ||
		s5z < 0 || s5z > 59 ||
		d2s < 0 || d2s > 59)
	{
		t8b = 0;
		s5z = 0;
		d2s = 0;
	}
	u7h.y6r = t8b;
	u7h.e0l = s5z;
	u7h.b5v = d2s;
}

function g5c(b5c)
{
	if (b5c.length == 0)
	{
		return 0;
	}
	else
	{
		let u7h = new g4i();
		s4r(b5c, 9, u7h);
		return u7h.y6r * 60 + u7h.e0l;
	}
}


const v8z =
{
	h2n : 0,
	c6i : 1,
	t1o : 2,
	p8w : 3,
	h1b : 4,
	z7m : 5,
	s4t : 6,
	j7v : 7
};

const o7f =
[
	[ v8z.h2n, 			 	""                   ],
	[ v8z.c6i,  		 	"SingleGame"         ],
	[ v8z.t1o,  		 	"Match"              ],
	[ v8z.p8w,  "RoundRobin"         ],
	[ v8z.h1b,   		"SwissSystem"        ],
	[ v8z.z7m,    "Knockout"           ],
	[ v8z.s4t,"Simul"              ],
	[ v8z.j7v,"ScheveningenSystem" ]
];

class i1m
{

constructor()
{
	this.x9v = '';
	this.l5t = '';
	this.e4x = new j6w();
	this.h9j = new j6w();
	this.f4p = l7y.q7y;
	this.q5a = 0;
	this.v0e = y2m.h2n;
	this.type = v8z.h2n;
	this.e4p = 0;
	this.n9a = false;
	this.i5k = false;
	this.l8h = false;
	this.q2r = false;
}

o0o()
{
	let j0p = new i1m();
	j0p.x9v = this.x9v;
	j0p.l5t = this.l5t;
	j0p.e4x = this.e4x.o0o();
	j0p.h9j = this.h9j.o0o();
	j0p.f4p = this.f4p;
	j0p.q5a = this.q5a;
	j0p.v0e = this.v0e;
	j0p.type = this.type;
	j0p.e4p = this.e4p;
	j0p.n9a = this.n9a;
	j0p.i5k = this.i5k;
	j0p.l8h = this.l8h;
	j0p.q2r = this.q2r;
	return j0p;
}

r7x()
{
	return this.x9v.length == 0 &&
		this.l5t.length == 0 &&
		this.e4x.r7x() &&
		this.h9j.r7x() &&
		this.f4p == l7y.q7y &&
		this.q5a == 0 &&
		this.v0e == y2m.h2n &&
		this.type == v8z.h2n &&
		!this.e4p &&
		!this.n9a &&
		!this.i5k &&
		!this.l8h &&
		!this.q2r;
}

y1l()
{
	let b5c = this.x9v;
	if (this.l5t.length)
	{
		if (b5c.length)
		{
			b5c += " ";
		}
		b5c += this.l5t;
	}
	if (b5c.length)
	{
		b5c += " ";
	}
	let r2w = this.e4x.r2w.toString().padStart(4, '0');
	b5c += r2w;
	return b5c;
}

}



const l7y =
{
	q7y : 0,
	i8u : 1,
	v9n : 2,
	h0o : 3
};

const t3v =
[
	[ l7y.q7y, "Normal" ],
	[ l7y.i8u,  "Rapid"  ],
	[ l7y.v9n,  "Blitz"  ],
	[ l7y.h0o,   "Corr"   ]
];

function x3o(f4p)
{
	return t3v[f4p][1];
}

function g3i()
{
	let d3y = [];
	for (const f4p of t3v)
	{
		d3y.push(f4p[1]);
	}
	return d3y;
}

class v0r
{

constructor()
{
	this.x4s = '';
	this.h5x = '';
	this.t2c = e9u.h2n;
	this.style = q5f.h2n;
	this.value = o9q.h2n;
	this.f3u = new v9v();
	this.y2n = new s7c();
	this.a0x = new x6l();
	this.z4y = c2u.h2n;
	this.t7b = false;
	this.c7a = false;
  this.i6b = false;
}

o0o()
{
	let p9r = new v0r();
	p9r.x4s = this.x4s;
	p9r.h5x = this.h5x;
	p9r.t2c = this.t2c;
	p9r.style = this.style;
	p9r.value = this.value;
	p9r.f3u = this.f3u.o0o();
	p9r.y2n = this.y2n.o0o();
	p9r.a0x = this.a0x.o0o();
	p9r.z4y = this.z4y;
	p9r.t7b = this.t7b;
	p9r.c7a = this.c7a;
 	p9r.i6b = this.i6b;
	return p9r;
}

r7x()
{
	return this.x4s.length == 0 &&
		this.h5x.length == 0 &&
		this.t2c == e9u.h2n &&
		this.style == q5f.h2n &&
		this.value == o9q.h2n &&
		this.f3u.r7x() &&
		this.y2n.r7x() &&
		this.a0x.r7x() &&
		this.z4y == c2u.h2n &&
		this.t7b == false &&
		this.c7a == false &&
 		this.i6b == false;
}

}

const c2u =
{
	h2n : 0,
	r0w : 1,
	y2s : 2,
	r6z : 3
};

const b8t =
{
	u3a : 0,
	s7r : 1,
	m3j : 2,
	t2f : 3,
	i1y : 4,
	o1r : 5,
	j5j : 6,
	j3b : 7,
	e5y : 8,
	l2i : 9,
	a2y : 10,
	w3d : 11,
	q7d : 12,
	i9e : 13,
	s0p : 14,
	r3n : 15
};

class v9v
{

constructor()
{
	this.value = 0;
}

j5y(value)
{
	this.value = value;
}

o0o()
{
	let y0q = new v9v();
	y0q.value = this.value;
	return y0q;
}

r7x()
{
	return this.value == 0;
}

q7n()
{
	return this.value != 0;
}

h2n()
{
	return this.value == 0;
}

g3o()
{
	let p0n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.j4c(i))
		{
			p0n++;
		}
	}
	return p0n;
}

c1b()
{
	this.value = 0;
}

set(c4p, m1g)
{
	if (m1g)
	{
		this.value |= (1 << c4p);
	}
	else
	{
		this.value &= ~(1 << c4p);
	}
}

j4c(c4p)
{
	return (this.value & (1 << c4p)) != 0;
}

c5p()
{
	return this.value;
}

}

const e9u =
{
	h2n : 0,
	e9x : 1,
	o1w : 2,
	x5x : 3,
	j9o : 4,
	t3l : 5,
	a3y : 6
};

const g5x =
[
	[ e9u.h2n,     		  ""   ],
	[ e9u.e9x,       		  "RR" ],
	[ e9u.o1w, 		  "&#8979;"  ],
	[ e9u.x5x, 		  "&#8804;"  ],
	[ e9u.j9o,  "="  ],
	[ e9u.t3l,   "&#9651;"  ],
	[ e9u.a3y,  "&#9661;"  ]
];

function t5v(t2c)
{
	return g5x[t2c][1];
}


const q5f =
{
	h2n : 0,
	h9g : 1,
	l7o : 2,
	a4g : 3,
	m2k : 4,
	a1v : 5,
	x9n : 6,
	j8o : 7,
	j8a : 8
};

const j6q =
[
	[ q5f.h2n,     		"" 	 ],
	[ q5f.h9g,       	"!"  ],
	[ q5f.l7o, 					"?"  ],
	[ q5f.a4g,	"!?" ],
	[ q5f.m2k,	 		"?!" ],
	[ q5f.a1v,  	"!!" ],
	[ q5f.x9n, 			"??" ],
	[ q5f.j8o, 		"&#8857;"  ],
	[ q5f.j8a, 		"&#9723;"  ]
];

function v8t(style)
{
	return j6q[style][1];
}


class l8k
{

constructor()
{
	this.z0x = new n1y();
	this.r5r = null;
	this.h7p = null;
	this.o4u = null;
	this.c1d = null;
  this.j4t = 0; 
}

c2e(z0x)
{
	this.z0x = z0x.o0o();
}

p4n(b6i, b1y, t0e, l4p)
{
	this.z0x.p4n(b6i, b1y, t0e, l4p);
}

}

class r2o
{

constructor()
{
	this.h8y = null;
	this.z0x = null;
}

h7r(k6a)
{
	return this.h8y == k6a.h8y;
}

u5a(k6a)
{
	return !this.h7r(k6a);
}

o0o()
{
	let u8v = new r2o();
  u8v.h8y = this.h8y;
  u8v.z0x = this.z0x;
	return u8v;
}

}


class o6j
{

constructor()
{
	this.g9u = new o8k();
 	this.b8l = null;
	this.q9g = 1;
	this.g9u.y1r();
  this.c9x = new v0r();
}

p0w(k6a)
{
	this.h1q(k6a.g9u, k6a.q9g);
	this.c9x = k6a.c9x.o0o();
	this.b8l = this.b6q(k6a.b8l);
}

o0o()
{
	let w5n = new o6j();
	w5n.p0w(this);
	return w5n;
}

h1q(g5u, a1r)
{
	this.g9u = g5u.o0o();
	this.q9g = a1r;
	this.c9x = new v0r();
	this.b8l = null;
}

a1r()
{
	return this.q9g;
}

g5u()
{
	return this.g9u.o0o();
}

t9z(g7d)
{
  let z2k = this.h6d(g7d) + 1;
	if (z2k)
	{
		return this.q9g +
			Math.floor((z2k - 1 + this.g9u.g9c()) / 2);
	}
	else
	{
		return this.q9g;
	}
}

h6d(g7d)
{
	let z2k = 0;
	if (!g7d.h8y)
	{
		return 0;
	}
	let d8b = g7d.h8y;
	while (1)
	{
		z2k++;
		if (!d8b.h7p)
		{
			let z9w = d8b;
			while (z9w.o4u)
			{
				z9w = z9w.o4u;
			}
			if (!z9w.h7p)
			{
				break;
			}
		}
		if (d8b.h7p)
		{
			d8b = d8b.h7p;
		}
		else
		{
			let z9w = d8b;
			while (z9w.o4u)
			{
				z9w = z9w.o4u;
			}
			d8b = z9w.h7p;
		}
	}
	return z2k;
}


r7j()
{
	let r6w = 0;
	let u5v = this.b8l;
	while (u5v)
	{
		r6w++;
		u5v = u5v.r5r;
	}
	return r6w;
}

y5u()
{
	return this.b8l != null;
}

d6j(g7d)
{
	return g7d.h7r(this.s3a());
}

c9s(g7d)
{
	if (g7d.h8y)
	{
		return g7d.h8y.r5r == null;
	}
	else if (this.b8l)
	{
		return false;
	}
	else
	{
		return true;
	}
}

x7e(g7d)
{
	if (!this.d6j(g7d))
	{
		if (g7d.h8y.h7p)
		{
			g7d.h8y = g7d.h8y.h7p;
			g7d.z0x = g7d.h8y.z0x;
		}
		else
		{
			let d8b = g7d.h8y;
			while (d8b.o4u)
			{
				d8b = d8b.o4u;
			}
			d8b = d8b.h7p;
			g7d.h8y = d8b;
      if (g7d.h8y)
      {
  			g7d.z0x = g7d.h8y.z0x;
      }
      else
      {
        g7d.z0x = null;
      }
		}
	}
}

j7z(g7d)
{
	if (!this.c9s(g7d))
	{
		g7d.h8y = this.c2k(g7d);
		g7d.z0x = g7d.h8y.z0x;
	}
}

z9k(g7d, h5t)
{
	let y1y = this.s7l(g7d);
	if (h5t < 0 || h5t >= y1y)
	{
		return;
	}
	let z9w = this.c2k(g7d);
	let i = 0;
	while (i != h5t)
	{
		i++;
		z9w = z9w.c1d;
	}
	g7d.h8y = z9w;
	g7d.z0x = g7d.h8y.z0x;
}

j3o(g7d)
{
	if (!g7d.h8y)
	{
		return this.q9g;
	}
	let z2k = this.h6d(g7d);
	if (z2k)
	{
		return this.q9g +
      Math.floor((z2k - 1 + this.g9u.g9c()) / 2);
	}
	else
	{
		return this.q9g;
	}
}

s3a()
{
	let g7d = new r2o();
	g7d.h8y = null;
	g7d.z0x = null;
	return g7d;
}

h7b(g7d)
{
	if (!this.c9s(g7d))
	{
		let d8b = this.c2k(g7d);
		while (true)
		{
			if (!d8b.r5r)
			{
				break;
			}
			d8b = d8b.r5r;
		}
		g7d.h8y = d8b;
		g7d.z0x = g7d.h8y.z0x;
	}
}

i1g(a3k)
{
	let g7d = this.s3a();
	if (a3k > 0)
	{
    this.a3k = 0;
		this.v4k(g7d, a3k);
		return g7d;
	}
	else
	{
		return g7d;
	}
}

v4k(g7d, a3k)
{
	while (true)
	{
		if (this.c9s(g7d))
		{
			return false;
		}
		let y1y = this.s7l(g7d);
		if (y1y > 1)
		{
			let s3e = g7d.o0o();
			for (let i = 1; i < y1y; i++)
			{
				this.z9k(g7d, i);
				this.a3k++;
				if (this.a3k == a3k)
				{
					return true;
				}
				if (this.v4k(g7d, a3k))
				{
					return true;
				}
        g7d.h8y = s3e.h8y;
        g7d.z0x = s3e.z0x;
			}
		}
		this.j7z(g7d);
		this.a3k++;
		if (this.a3k == a3k)
		{
			return true;
		}
	}
}

y5p(g7d)
{
	if (!g7d.h8y)
	{
		return 0;
	}
	else
	{
		return g7d.h8y.j4t;
	}
}

t5j(g7d)
{
	let y8v = [];
 	if (!g7d.h8y)
  {
		return y8v;
	}
	let d8b = g7d.h8y;
	while (1)
	{
		y8v.push(d8b);
		if (!d8b.h7p)
		{
			let z9w = d8b;
			while (z9w.o4u)
			{
				z9w = z9w.o4u;
			}
			if (!z9w.h7p)
			{
				break;
			}
		}
		if (d8b.h7p)
		{
			d8b = d8b.h7p;
		}
		else
		{
			let z9w = d8b;
			while (z9w.o4u)
			{
				z9w = z9w.o4u;
			}
			d8b = z9w.h7p;
		}
	}
	return y8v.reverse();
}

q8l(g7d)
{
	let y8v = this.t5j(g7d);
	let y1y = this.s7l(g7d);
	if (y1y == 0)
	{
		return y8v;
	}
	let x6r = this.d4m(g7d, 0);
	while (x6r)
	{
		y8v.push(x6r);
		x6r = x6r.r5r;
	}
	return y8v;
}

s7l(g7d)
{
	let x6r = this.c2k(g7d);
	if (!x6r)
	{
		return 0;
	}
	let y1y = 1;
	while (x6r.c1d)
	{
		y1y++;
		x6r = x6r.c1d;
	}
	return y1y;
}

i5y(g7d, x8t)
{
	if (this.d6j(g7d))
	{
		this.b8l = x8t;
		g7d.h8y = x8t;
		g7d.z0x = g7d.h8y.z0x;
	}
	else
	{
		g7d.h8y.r5r = x8t;
		x8t.h7p = g7d.h8y;
		g7d.h8y = x8t;
		g7d.z0x = g7d.h8y.z0x;
	}
}

b2d(g7d, x8t)
{
	let z9w = this.c2k(g7d);
	while (z9w.c1d)
	{
		z9w = z9w.c1d;
	}
	z9w.c1d = x8t;
	x8t.o4u = z9w;

	g7d.h8y = x8t;
	g7d.z0x = g7d.h8y.z0x;
}

a6c(g7d, z0x)
{
	let x8t = new l8k();
 	x8t.c2e(z0x);
	if (this.c9s(g7d))
	{
		this.i5y(g7d, x8t);
	}
	else
	{
		this.b2d(g7d, x8t);
	}
}

o5k(g7d)
{
	let z9w = this.d4m(g7d, 1);
	if (!z9w)
	{
		return false;
	}
	while (z9w)
	{
		let u5v = z9w.r5r;
		while (u5v)
		{
			if (u5v.c1d)
			{
				return false;
			}
			u5v = u5v.r5r;
		}
		z9w = z9w.c1d;
	}
	return true;
}

q6n()
{
	let u5v = this.b8l;
	while (u5v)
	{
		if (u5v.c1d)
		{
			return true;
		}
		u5v = u5v.r5r;
	}
	return false;
}

d2r()
{
	if (!this.c9x.r7x())
	{
		return true;
	}
	if (this.q6n())
	{
		return true;
	}
	let u5v = this.b8l;
	while (u5v)
	{
		if (u5v.z0x.d2r())
		{
			return true;
		}
		u5v = u5v.r5r;
	}
	return false;
}

c2k(g7d)
{
	if (g7d.h8y)
	{
		return g7d.h8y.r5r;
	}
	return this.b8l;
}

d4m(g7d, h5t)
{
	let i = 0;
	let z9w = this.c2k(g7d);
	while (z9w && i != h5t)
	{
		z9w = z9w.c1d;
		i++;
	}
	return z9w;
}

b6q(z9w)
{
	let s3z = z9w;
	let l8a = null;
	let x8t = null;
	let y7b = null;
	while (s3z)
	{
		x8t = new l8k();
		x8t.c2e(s3z.z0x);
		if (l8a)
		{
			l8a.r5r = x8t;
			x8t.h7p = l8a;
		}
		else
		{
			y7b = x8t;
		}
		l8a = x8t;
		if (s3z.c1d && !s3z.o4u)
		{
			let q7o = s3z.c1d;
			let w1u = l8a;
			while (q7o)
			{
				let k7h = this.b6q(q7o);
				w1u.c1d = k7h;
				k7h.o4u = w1u;
				w1u = k7h;
				q7o = q7o.c1d;
			}
		}
		s3z = s3z.r5r;
	}
	return y7b;
}

a1j()
{
	return this.c9x;
}

j0l()
{
	return this.c9x.x4s;
}

f2o(r0s)
{
	this.c9x.x4s = r0s;
}

p3w()
{
	return !this.c9x.y2n.r7x();
}

e6j(y2n)
{
	this.c9x.y2n = y2n.o0o();
}

d8g()
{
	return this.c9x.y2n;
}

g1j()
{
	return !this.c9x.a0x.r7x();
}

w2k(a0x)
{
	this.c9x.a0x = a0x.o0o();
}

c5x()
{
	return this.c9x.a0x;
}

f7g()
{
	return !this.c9x.f3u.r7x();
}

x5k(f3u)
{
	this.c9x.f3u = f3u.o0o();
}

w4y()
{
	return this.c9x.f3u;
}

s2l(a3k)
{
  if (a3k == 0)
  {
    return true;
  }
	let u5v = this.b8l;
	while (u5v)
	{
    if (u5v.j4t == a3k)
    {
      return true;
    }
		u5v = u5v.r5r;
	}
	return false;
}

u2h()
{
	let g7d = this.s3a();
	this.a3k = 0;
	this.f3z(g7d);
}

f3z(g7d)
{
	while (true)
	{
		if (this.c9s(g7d))
		{
			return;
		}
		let y1y = this.s7l(g7d);
		if (y1y > 1)
		{
			let s3e = g7d.o0o();
			for (let i = 1; i < y1y; i++)
			{
				this.z9k(g7d, i);
				this.a3k++;
        g7d.h8y.j4t = this.a3k;
				this.f3z(g7d);
        g7d.h8y = s3e.h8y;
        g7d.z0x = s3e.z0x;
			}
		}
		this.j7z(g7d);
  	this.a3k++;
    g7d.h8y.j4t = this.a3k;
	}
}

b6i(g7d)
{
	let b6i = this.g9u.o0o();
	if (!g7d.h8y)
	{
		return b6i;
	}
	let y8v = this.n8g(g7d);
  for (const z0x of y8v)
	{
		b6i.j7z(z0x.p7x());
	}
	return b6i;
}

n8g(g7d)
{
	let y8v = [];
 	if (!g7d.h8y)
  {
		return y8v;
	}
	let d8b = g7d.h8y;
	while (1)
	{
		y8v.push(d8b.z0x);
		if (!d8b.h7p)
		{
			let z9w = d8b;
			while (z9w.o4u)
			{
				z9w = z9w.o4u;
			}
			if (!z9w.h7p)
			{
				break;
			}
		}
		if (d8b.h7p)
		{
			d8b = d8b.h7p;
		}
		else
		{
			let z9w = d8b;
			while (z9w.o4u)
			{
				z9w = z9w.o4u;
			}
			d8b = z9w.h7p;
		}
	}
	return y8v.reverse();
}


a1t()
{
	this.c9x = new v0r();
	this.b8l = null; 
  
}


a3e()
{
	let y8v = [];
	let u5v = this.b8l;
	while (u5v)
	{
		y8v.push(u5v.z0x);
		u5v = u5v.r5r;
	}
	return y8v;
}

}

const o9q =
{
	h2n : 0,
	k2t : 1,
	i1x : 2,
	o5x : 3,
	y9l : 4,
	t4s : 5,
	n4d : 6,
	s4n : 7,
	v3c : 8,
	h8r : 9,
	x5f : 10,
	j6o : 11,
	j3b : 12,
	g9a : 13,
	j1c : 14,
	t2f : 15
};

const w9y =
[
	[ o9q.h2n,     						  ""    ],
	[ o9q.k2t,        "+&#8211;" ],
	[ o9q.i1x, 						"&#177;" ],
	[ o9q.o5x,		"&#10866;"  ],
	[ o9q.y9l, 							"="   ],
	[ o9q.t4s,  							"&#8734;" ],
	[ o9q.n4d,  	"&#10865;"],
	[ o9q.s4n, 						"&#8723;" ],
	[ o9q.v3c, 				"&#8211;+"],
	[ o9q.h8r,						"&#8773;" ],
	[ o9q.x5f, 						"&#8646;" ],
	[ o9q.j6o,  						"&#8593;" ],
	[ o9q.j3b, 								"&#8594;" ],
	[ o9q.g9a, 					"&#8853;" ],
	[ o9q.j1c,		"&#10227;"],
	[ o9q.t2f, 								"N"   ]
];

function l5e(value)
{
	return w9y[value][1];
}


const b4f =
{
	q2u : 0,
	b7y : 1,
	d1g : 2
};

const p6t =
{
	h2n : 0,
	j4k : 1,
	r6f : 2,
	u0i : 3,
	s7n : 4,
	t2c : 5,
	h5x : 6,
	x4s : 7,
	m6n : 8,
	f3u : 9,
	t7b : 10,
	c7a : 11
};

/*
TO DO
- Aanpassen voor tekst after van r7z daar kan dia inzitten (zie c++)
- Vette tekst en niet vette j4k testen bij wel/niet MultiPV
*/
class v3w
{

constructor()
{
	this.w1j = new r7g();
  this.d9s = true;
  this.r1u = false;
  this.x3t = true;
  this.h5w = true;
  this.e7q = b4f.q2u;
  this.d1e = false;
  this.b3k = true;
 	this.m9x = true;
 	this.w5j = -1;
  this.z8i = false;
  this.a9s = false;
	this.c9b = false;
	this.o7x = true;
  this.s7x = false;
  this.c7p = false;
  this.d6h = 0;
	this.d9n = true;
  this.f7i = null;
 	this.f1a = p6t.h2n;
}

i1u(y8v)
{
	this.f7i = y8v;
 	let s3a = this.f7i.s3a();
	let g5u = this.f7i.g5u();
	this.f1a = p6t.h2n;
	this.o7x = true;
	this.a9s = false;
	this.c9b = false;
	this.z8i = false;
	this.s7x = this.f7i.d2r();
	this.d9n = true;
	this.d6h = 0;

	if (this.d1e)
	{
		this.c8d(p6t.r6f);
		this.q4p();
	}
	else
	{
    
    if (this.e7q == b4f.b7y ||
      (this.e7q == b4f.d1g && !g5u.q8p()))
    {
      if (this.h5w)
      {
        this.v3a(s3a, g5u, d6h);
        this.o7x = true;
      }
    }

    this.c8d((this.s7x && !this.i6b) ? p6t.j4k : p6t.r6f);
    this.g6v(this.s7x);
    this.a6c(s3a, "");
    this.t1f(s3a, this.f7i.a1j().x4s);

    if (this.f7i.y5u())
    {
      this.o5v();
    }
   	this.c8d(p6t.h2n);
   	this.g7i();
  }
}

q4p()
{
	let g7d = this.f7i.s3a();
	let s7l = this.f7i.s7l(g7d);
	for (let i = 0; i < s7l; i++)
	{
    this.w1j.j3e('<div class="variation-row">');
		g7d = this.f7i.s3a();
  	let b6i = this.f7i.g5u();
	  let j3o = this.f7i.a1r();
		this.f7i.z9k(g7d, i);
		this.o7x = true;
		let k7y = true;
		let z0x = g7d.z0x;
		let h5x = z0x.h5x();
		if (h5x.length)
		{
			this.i5e(g7d, h5x);
		}
		this.c8d(p6t.r6f);
		do
		{
			if (k7y)
			{
				g7d.z0x.y9e();
			}
			this.v8k(g7d, b6i, j3o);
			if (k7y)
			{
				g7d.z0x.b1f(h5x);
				k7y = false;
			}
			if (this.f7i.c9s(g7d))
			{
				break;
			}
			b6i.j7z(g7d.z0x);
			if (b6i.p8t())
			{
				j3o++;
			}
			this.f7i.j7z(g7d);
		} while (true);
    this.w1j.j3e('<div');
	}
}

o5v()
{
  let x4l = 0;
 	let g7d = this.f7i.s3a();
	let b6i = this.f7i.g5u();
  let j3o = this.f7i.a1r();

	let l2t = 100000;
	if (this.w5j == 0)
	{
		return;
	}
	if (this.w5j != -1)
	{
		l2t = this.w5j;
	}
	let j8j = j3o + l2t - 1;
	this.o7x = true;
	while (true)
	{
		let s7l = this.f7i.s7l(g7d);
		while (j3o <= j8j && !this.f7i.c9s(g7d))
		{
      this.f7i.j7z(g7d);
    	this.c8d((this.s7x && !this.i6b) ? p6t.j4k : p6t.r6f);
			this.v8k(g7d, b6i, j3o);
			b6i.j7z(g7d.z0x.p7x());
 			if (b6i.p8t())
			{
				j3o++;
			}
			if (this.m9x && s7l > 1)
			{
				break;
			}
			s7l = this.f7i.s7l(g7d);
		}
		if (!s7l || j3o > j8j)
		{
			return;
		}
    b6i.x7e(g7d.z0x.p7x());
		if (b6i.g9c())
		{
			j3o--;
		}
    this.f7i.x7e(g7d);
		for (let i = 1; i < s7l; i++)
		{
      x4l++;
      let f0e = "<span class=\"tdline\" data-level=\"";
      f0e += x4l.toString();
      f0e += "\">";
      this.w1j.j3e(f0e);
			this.w7k(p6t.u0i);
			this.c1g("[", true);
			let t2c = '';
      this.e4t(g7d, b6i, j3o, i, t2c, x4l);
			this.c8d(p6t.u0i);
			this.c1g("]", true);
      this.w1j.j3e("</span>");
      x4l--;
     	this.c8d((this.s7x && !this.i6b) ? p6t.j4k : p6t.r6f);
		}
		this.w7k(this.f1a);
    this.f7i.j7z(g7d);
    b6i.j7z(g7d.z0x.p7x());
		if (b6i.p8t())
		{
			j3o++;
		}
		this.o7x = true;
	}
}

v8k(g7d, b6i, j3o)
{
	if (this.f7i.d6j(g7d))
	{
		return;
	}
 	let z0x = g7d.z0x;

	let b5c = '';
  let a5m = false;
  if (this.d9s)
	{
		if (z0x.d9x())
		{
			if (!this.f7i.d6j(g7d))
			{
        let y4e = g7d.o0o();
        this.f7i.x7e(y4e);
        if (y4e.z0x)
        {
  				if (y4e.z0x.w5k())
	  			{
		  			a5m = true;
			  	}
        }
			}
		}
  }
	if (this.a9s)
	{
		b5c = "(";
		this.a9s = false;
		if (this.d9s && z0x.k1k())
		{
			this.c1g("(", true);
			let c0p = this.f1a;
			this.i5e(g7d, z0x.h5x());
			this.c8d(c0p);
			b5c = "";
      a5m = true;
		}
	}
	else
	{
		if (this.d9s && z0x.k1k())
		{
  	  let c0p = this.f1a;
	  	this.i5e(g7d, z0x.h5x());
		  this.c8d(c0p);
      a5m = true;
    }
	}
	if (z0x.u0d())
	{
		b5c += t5v(z0x.t2c());
	}
	let s8u = z0x.c8w();
	if (s8u)
	{
    b5c += j3o;
		b5c += '.';
	}
	else
	{
		if (this.o7x || a5m)
		{
 			b5c += j3o;
			b5c += "...";
		}
	}
	b5c += j4i(b6i, z0x.p7x(), false);
	if (z0x.p5i())
	{
		b5c += v8t(z0x.style());
	}
	if (z0x.v4x())
	{
		b5c += l5e(z0x.value());
	}
	if (z0x.k6q())
	{
		b5c += " End Of Game";
  }
	if (this.c9b || this.z8i)
	{
		if (this.f7i.c9s(g7d) && (!this.d9s || !z0x.w5k()))
		{
			if (this.c9b)
			{
				b5c += ")";
				this.c9b = false;
			}
			else
			{
				b5c += ";";
				this.z8i = false;
			}
		}
	}
	this.a6c(g7d, b5c);
	this.o7x = false;

	if (z0x.e8e())
	{
		let x4s = z0x.x4s();
    let t4q = x4s.indexOf("[#]");
		let u2w = x4s.substring(0, t4q);
	  let v0a = x4s.substring(t4q + 3);
		if (u2w.length)
		{
			this.t1f(g7d, u2w);
		}
		this.d6h++;
		if (this.h5w)
		{
			this.w7k(p6t.h2n);
      this.v3a(g7d, b6i, this.d6h);
			this.o7x = true;
		}
		if (v0a.length)
		{
			this.t1f(g7d, v0a);
		}
	}
	else
	{
		this.t1f(g7d, z0x.x4s());
	}

  if (z0x.k6q())
	{
    this.w1j.x7l("<div>&nbsp;</div>"); 
   	this.g7i();
 	  this.g6v(false); 
 	  this.c7p = true;
	}
}

c8d(c8c)
{
	if (c8c != this.f1a)
	{
		this.z3v();
		this.f1a = c8c;
		this.g8m();
	}
}

g8m()
{
}

z3v()
{
	this.f1a = p6t.h2n;
}

w7k(c8c)
{
	this.z3v();
	this.f1a = p6t.h2n;
  
  
  
  
  this.w1j.x7l("<br>"); 
	if (c8c != p6t.h2n)
	{
		this.f1a = c8c;
		this.g8m();
	}
}

v3a(g7d, b6i, j4t)
{
  this.d9n = true;
	let f0e = "<span class=\"tddia\" movenr=\"";
  f0e += this.f7i.y5p(g7d).toString();
	f0e += "\">",
	this.w1j.j3e(f0e);
	this.w1j.j3e("<canvas></canvas>");
	this.w1j.j3e("</span>");
	this.o7x = true;
}

j4d(g7d, r0s)
{
  this.k9k(g7d);
	this.c3l(r0s);
  this.m5l();
}

e4t(d5g, u2v, j3o, h5t, t2c, x4l)
{
  let g7d = d5g.o0o();
  let b6i = u2v.o0o();

	if (t2c.length)
	{
		this.c8d(p6t.t2c);
		let t2h = t2c;
		t2h += ")";
    let f0e = "<span class=\"tdprefix\">";
    this.w1j.j3e(f0e);
  	this.c1g(t2h);
    this.w1j.j3e("</span>");
	}
	let s7l = 0;
	let y8e = 1;
  this.f7i.z9k(g7d, h5t);
	this.o7x = true;
	do
	{
		this.c8d(p6t.u0i);
		this.v8k(g7d, b6i, j3o);
		if (s7l > 1)
		{
      this.f7i.x7e(g7d);
      this.u6l(g7d, b6i, j3o);
      this.f7i.j7z(g7d);
			this.o7x = true;
		}
		b6i.j7z(g7d.z0x.p7x());
		if (b6i.p8t())
		{
			j3o++;
		}
		s7l = this.f7i.s7l(g7d);
		if (s7l == 0)
		{
			break;
		}
		if (s7l > 1)
		{
			if (!this.f7i.o5k(g7d))
			{
				break;
			}
		}
    this.f7i.j7z(g7d);
		y8e++;
	} while (true);

	if (this.f7i.c9s(g7d))
	{
		return;
	}

	let a2m = t2c.length;
	let t2h = '';
	let l6i = 1;
	for (let i = 0; i < s7l; i++)
	{
		if (a2m == 0)
		{
      t2h = String.fromCharCode('A'.charCodeAt() + l6i - 1);
		}
		else if (a2m == 1)
		{
      t2h = t2c;
      t2h += l6i;
		}
		else if (a2m == 2)
		{
      t2h = t2c;
      t2h += String.fromCharCode('a'.charCodeAt() + l6i - 1);
		}
		else
		{
      t2h = t2c;
      t2h += l6i;
		}

    let f0e = "<span class=\"tdline\" data-level=\"";
    f0e += x4l.toString();
    f0e += "\">";
    this.w1j.j3e(f0e);
  	this.w7k(this.f1a);
    this.e4t(g7d, b6i, j3o, i, t2h, x4l);
    this.w1j.j3e("</span>");
		l6i++;
	}
}

u6l(d5g, u2v, j3o)
{
  let g7d = d5g.o0o();
  let b6i = u2v.o0o();

	this.c8d(p6t.s7n);
	this.a9s = true;
	this.z8i = false;
	let s7l = this.f7i.s7l(g7d);
	for (let i = 1; i < s7l; i++)
	{
		if (i == s7l - 1)
		{
			this.c9b = true;
		}
		if (i < s7l - 1)
		{
			this.z8i = true;
		}
    this.z0u(g7d, b6i, j3o, i);
		if (this.z8i)
		{
			this.c8d(p6t.s7n);
			this.c1g(";", false);
			this.z8i = false;
		}
	}
	this.c8d(p6t.s7n);
	if (this.c9b)
	{
		this.c1g(")", false);
		this.c9b = false;
	}
}

z0u(d5g, u2v, j3o, h5t)
{
  let g7d = d5g.o0o();
  let b6i = u2v.o0o();

  this.f7i.z9k(g7d, h5t);
	let y8e = 0;
	this.o7x = true;
	do
	{
		y8e++;
		this.c8d(p6t.s7n);
		this.v8k(g7d, b6i, j3o);
		if (this.f7i.c9s(g7d))
		{
			break;
		}
		b6i.j7z(g7d.z0x.p7x());
		if (b6i.p8t())
		{
			j3o++;
		}
    this.f7i.j7z(g7d);
	} while (true);
}

a6c(g7d, b5c)
{
	if (b5c.length)
	{
 		this.a8u(g7d, b5c);
	}
	else
	{
		if (this.b3k)
    {
      this.a8u(g7d, "[...]");
    }
	}
	if (g7d.z0x)
	{
		if (g7d.z0x.y4a() || g7d.z0x.x1c())
		{
			this.f0j(g7d, p6t.m6n);
		}
		if (g7d.z0x.e8e())
		{
		}
		if (g7d.z0x.d1o())
		{
			this.f0j(g7d, p6t.t7b);
		}
		if (g7d.z0x.m9d())
		{
			this.f0j(g7d, p6t.f3u);
		}
	}
	else
	{
		if (this.f7i.p3w() || this.f7i.g1j())
		{
			this.f0j(g7d, p6t.m6n);
		}
		if (this.f7i.f7g())
		{
		 	this.f0j(g7d, p6t.f3u);
		}
	}
}

c1g(b5c, m5a)
{
	if (b5c.length == 0)
	{
		return;
	}
	if (!this.d9n && m5a)
	{
		this.w1j.x7l(" ");
	}
	this.w1j.x7l(b5c);
	this.d9n = false;
}

i5e(g7d, h5x)
{
	if (this.d9s && h5x.length)
	{
		this.c8d(p6t.h5x);
		this.j4d(g7d, h5x);
	}
}

t1f(g7d, x4s)
{
	if (this.d9s && x4s.length)
	{
		this.c8d(p6t.x4s);
		this.j4d(g7d, x4s);
	}
}

c3l(r0s)
{
  let b6h = r0s;
  let x9e = b6h.replaceAll("<br><br>", "<br>");
  let q9l = x9e.replaceAll("<br><br>", "<br>");
  let i0y = q9l.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = i0y;
  this.w1j.x7l(s);
}

a8u(g7d, b5c)
{
	if (b5c.length == 0)
	{
		return;
	}
	if (!this.d9n)
	{
		this.w1j.x7l(" ");
	}
  let u9j = '';
  if (g7d.z0x)
  {
  	if (g7d.z0x.r5q())
	  {
		  if (g7d.z0x.z4y() == c2u.r0w)
  		{
	  		u9j = "tdmove-crit-opening";
		  }
  		else if (g7d.z0x.z4y() == c2u.y2s)
	  	{
		  	u9j = "tdmove-crit-middle";
  		}
	  	else if (g7d.z0x.z4y() == c2u.r6z)
		  {
  			u9j = "tdmove-crit-end";
	  	}
  	}
  }
	let z9l = "<span class=\"";
	if (u9j.length == 0)
	{
		z9l += "tdmove\" movenr=\"";
	}
	else
	{
		z9l += "tdmove " + u9j + "\" movenr=\"";
	}
  z9l += this.f7i.y5p(g7d).toString();
  z9l += "\"";
	z9l += ">",
	z9l += b5c;
	z9l += "</span>";

	this.w1j.j3e(z9l);
	this.d9n = false;
}

f0j(g7d, c8c)
{
  if (c8c == p6t.m6n)
  {
    this.r0d(g7d);
  }
  else if (c8c == p6t.f3u)
  {
    this.b1i(g7d);
  }
}

r0d(g7d)
{
	let f0e = "<span class=\"tdcolors\" movenr=\"";
  f0e += this.f7i.y5p(g7d).toString();
	f0e += "\">",
	this.w1j.j3e(f0e);
	this.w1j.j3e("</span>");
}

b1i(g7d)
{
	let f0e = "<span class=\"tdmedal\" movenr=\"";
  f0e += this.f7i.y5p(g7d).toString();
	f0e += "\">",
	this.w1j.j3e(f0e);
	this.w1j.j3e("<canvas></canvas>");
	this.w1j.j3e("</span>");
}

g6v(v8u)
{
 	let f0e = "<span class=\"tdline\"";
	if (v8u)
	{
		f0e += " data-commented=\"1\"";
	}
	f0e += " data-level=\"0\">";
	this.w1j.x7l(f0e);
}

g7i()
{
  this.w1j.j3e("</span>");
}

k9k(g7d)
{
  let g4l = "tdcomment";
  if (this.r1u)
  {
    g4l += " is-bold";
  }
  let f0e = "<span class=\"" + g4l + "\" movenr=\"";
  f0e += this.f7i.y5p(g7d).toString();
  f0e += "\">";
  this.w1j.x7l(f0e);
}

m5l()
{
  this.w1j.j3e("</span>");
}

d2t(value)
{
  this.b3k = value;
}

u5m(value)
{
  this.r1u = value;
}

c1i(value)
{
  this.x3t = value;
}

m2w(value)
{
  this.d1e = value;
}

} 
const c3j =
{
	j3b : 1,
	l2i : 2,
	h8d : 3
};

class k7q
{

constructor()
{
	this.e7g = 0;
	this.x7z = 0;
	this.type = c3j.j3b;
}

o0o()
{
	let p5k = new k7q();
	p5k.e7g = this.e7g;
	p5k.x7z = this.x7z;
	p5k.type = this.type;
	return p5k;
}

}

function p3a(e7g, x7z, type)
{
	let s = new k7q();
	s.e7g = e7g;
	s.x7z = x7z;
	s.type = type;
	return s;
}
class s7c
{

constructor()
{
	this.s9v = [];
}

o0o()
{
	let q0n = new s7c();
	for (const r4h of this.s9v)
	{
		q0n.add(r4h.o0o());
	}
	return q0n;
}

y3q()
{
	this.s9v.length = 0;
}

r7x()
{
	return this.s9v.length == 0;
}

size()
{
	return this.s9v.length;
}

add(r4h)
{
	let t3d = r4h.o0o();
	this.s9v.push(t3d);
}

}

const c7m =
{
	y7r : 0,
	l4s : 1,
	q8r : 2
};

class r3c
{

constructor()
{
	this.d9d = 0;
	this.type = c7m.y7r;
}

o0o()
{
	let h5b = new r3c();
	h5b.d9d = this.d9d;
	h5b.type = this.type;
	return h5b;
}

}

function a0s(d9d, type)
{
	let n2u = new r3c();
	n2u.d9d = d9d;
	n2u.type = type;
	return n2u;
}

class x6l
{

constructor()
{
	this.m6o = [];
}

o0o()
{
	let l1d = new x6l();
	for (const u0y of this.m6o)
	{
		l1d.add(u0y.o0o());
	}
	return l1d;
}

y3q()
{
	this.m6o.length = 0;
}

r7x()
{
	return this.m6o.length == 0;
}

size()
{
	return this.m6o.length;
}

add(m4z)
{
	let j7f = m4z.o0o();
	this.m6o.push(j7f);
}

}

const e5q =
{
	s1a    : 0,
	z7q  : 1,
	w3v  : 2,
	y6x    : 3,
  u0k   : 4,
	v2y    : 5,
};


function a6q(r4y)
{
	let b5c = '';
	switch (r4y)
	{
		case e5q.s1a:
			b5c = "P";
			break;
		case e5q.z7q:
			b5c = "N";
			break;
		case e5q.w3v:
			b5c = "B";
			break;
		case e5q.y6x:
			b5c = "R";
			break;
		case e5q.u0k:
			b5c = "Q";
			break;
		case e5q.king:
			b5c = "K";
			break;
	}
	return b5c;
}

class j0c
{

constructor()
{
  this.j9h = 0;
	this.c5y = new e5o();
	this.y8v = new o6j();
}

o0o()
{
	let a6t = new j0c();
  a6t.j9h = this.j9h;
	a6t.c5y = this.c5y.o0o();
	a6t.y8v = this.y8v.o0o();
	return a6t;
}

}

const x3x = 	 		"#7B8295";
const o4h =			"#9F9F9F";
const r3m = 			    "#7B8295";
const n7y = 		  "#FFFFFF";
const g6s =       "#D0B194";

const c9y	   = "#E13129";
const w2m	 = "#389C13";
const m6y = "#E2B628";

const x9b	 = "#E13129";
const o5b	 = "#389C13";
const k3c	   = "#E2B628";

class s0a
{

constructor()
{
	this.q2h = null;
	this.o6r = false;
	this.b7x = null;
	this.q9s = null;
	this.l6c = null;
	this.m6m = 0;
	this.l5d = 0;
	this.h0i = 0;
	this.u3z = 0;
	this.z8u = 0;
	this.q2f = 0;
	this.l8r = new j6p();
	this.b6i = new o8k();
	this.y2n = new s7c();
	this.a0x = new x6l();
  this.t3g = new w3p();
  this.w7e = true;
	this.f8g = true;
	this.h1v = true;
	this.s2p = false;
	this.u9c = x3x;
	this.z2e = o4h;
	this.i2u = t1d;
	this.q5v = z7f;
	this.k0h = z7f;
	this.q1l = g9z;
	this.w2o = true;
	this.x2e = y3r;
	this.y9c = y3r;
	this.g1t = false;
	this.e3c = [];
	this.c6b = 0;
}

o9x(q2h)
{
	this.q2h = q2h;
}

m1m(l8r)
{
	this.l8r = l8r;
	this.h0i = l8r.h0i();
	this.u3z = l8r.h0i();

	this.m6m = (this.q2h.width - this.h0i) / 2;
	let top = (this.q2h.height - this.u3z) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.l5d = top;
	this.z8u = this.m6m + this.h0i - 1;
	this.q2f = this.l5d + this.u3z - 1;
	this.o6r = false;
	this.d2d();
}

h1q(b6i)
{
	this.b6i = b6i.o0o();
	this.y2n.y3q();
	this.a0x.y3q();
}

u6i(y2n)
{
	this.y2n = y2n.o0o();
}

z3n(a0x)
{
	this.a0x = a0x.o0o();
}

p2k(z0x)
{
  this.t3g = z0x.o0o();
}

h8a(s2p)
{
	this.s2p = s2p;
}

t8y()
{
	this.s2p = !this.s2p;
}

o3y()
{
	if (!this.q2h) return;
	if (this.h0i <= 0 || this.u3z <= 0)
	{
		return;
	}
	this.w1k();
}

u0g()
{
	let x4w = this.l8r.x4w;
	if (this.o6r)
	{
		return;
	}
	this.o6r = true;
	if (x4w == k5t.y7c)
	{
  	this.b7x = d8i.x8m("images/board/LightSquare");
  	this.q9s = d8i.x8m("images/board/DarkSquare");
		this.l6c = d8i.x8m("images/board/Margin");
	}
}

d2d()
{
	this.u0g();
	let x4w = this.l8r.x4w;
	if (x4w == k5t.y7c)
	{
		this.w2o = false;
		this.f8g = false;
		this.h1v = false;
		this.i2u = "#FFFF97";
		this.q5v = "#9B2E31";
		this.k0h = t0a;
	}
}

w1k()
{
	this.d2d();
	if (this.l8r.x4w == k5t.y7c)
	{
		let q2p = d8i.x8m("images/board/BoardBackground");
		this.z3w(new c9o(0, 0, this.q2h.width, this.q2h.height), q2p);
	}
	this.w7r();  
	this.t4u(); 
	this.m9a(); 
  if (chess)
  {
	  this.z6v();
  }
  else
  {
	  this.j4o();
  	this.y8o();
  }
  
  this.h3i();
 	this.o3n();
 	this.f2e();
 	this.f4i();
	this.k8g(); 
	this.t1a();      
}

w7r()
{
	let s9q = this.l5d;
	let r5n = this.m6m;
	let f8o = this.z8u;
	let f7a = this.q2f;
	let z5l = this.l8r.m6c;
	this.i8p(new c9o(r5n, s9q, f8o, s9q+z5l-1), this.q5v);
	this.i8p(new c9o(r5n, f7a-z5l+1, f8o, f7a), this.k0h);
	this.i8p(new c9o(r5n, s9q, r5n+z5l-1, f7a), this.q5v);
	this.i8p(new c9o(f8o-z5l+1, s9q, f8o, f7a), this.k0h);
}

t4u()
{
	let m6c = this.l8r.m6c;
	let m9n = this.l8r.m9n;
	if (!m9n)
	{
		return;
	}
	if (this.w2o || !this.l6c)
	{
		this.q6i(this.q1l);
	}
	else
	{
		let left = this.m6m + m6c;
		let top = this.l5d + m6c;
		let v1h = this.z8u - m6c;
		let j4r = this.l5d + m6c + m9n - 1;
		this.z3w(new c9o(left, top, v1h, j4r), this.l6c);

		left = this.m6m + m6c;
		top = this.l5d + m6c;
		v1h = this.m6m + m6c + m9n - 1;
		j4r = this.q2f - m6c;
		this.z3w(new c9o(left, top, v1h, j4r), this.l6c);

		left = this.m6m + m6c;
		top = this.q2f - m6c - m9n + 1;
		v1h = this.z8u - m6c;
		j4r = this.q2f - m6c;
		this.z3w(new c9o(left, top, v1h, j4r), this.l6c);

		left = this.z8u - m6c - m9n + 1;
		top = this.l5d + m6c;
		v1h = this.z8u - m6c;
		j4r = this.q2f - m6c;
		this.z3w(new c9o(left, top, v1h, j4r), this.l6c);
	}
}

q6i()
{
	let m6c = this.l8r.m6c;
	let m9n = this.l8r.m9n;
	if (!m9n)
	{
		return;
	}

	let left = this.m6m + m6c;
	let top = this.l5d + m6c;
	let v1h = this.z8u - m6c;
	let j4r = this.l5d + m6c + m9n - 1;
	this.i8p(new c9o(left, top, v1h, j4r), this.q1l);

	left = this.m6m + m6c;
	top = this.l5d + m6c;
	v1h = this.m6m + m6c + m9n - 1;
	j4r = this.q2f - m6c;
	this.i8p(new c9o(left, top, v1h, j4r), this.q1l);

	left = this.m6m + m6c;
	top = this.q2f - m6c - m9n + 1;
	v1h = this.z8u - m6c;
	j4r = this.q2f - m6c;
	this.i8p(new c9o(left, top, v1h, j4r), this.q1l);

	left = this.z8u - m6c - m9n + 1;
	top = this.l5d + m6c;
	v1h = this.z8u - m6c;
	j4r = this.q2f - m6c;
	this.i8p(new c9o(left, top, v1h, j4r), this.q1l);
}

t1a()
{
	if (this.l8r.k5l)
	{
  	if (!this.l8r.m9n)
  	{
	  	return;
  	}
		let color = "#000000";
		if (this.b6i.p8t())
		{
			color = "#EDD790";
		}
		else
		{
			color = "#000000";
		}
		let rect = this.k7i();
		let z4d = this.b3t();
		z4d.beginPath();
		z4d.fillStyle = color;
		let v7r = rect.k2e() * 0.40;
		z4d.arc(rect.q7j + rect.k2e()/2 - 1, rect.j3a + rect.c6g()/2 - 1,
			v7r, 0, 2 * Math.PI);
		z4d.fill();
	}
}

m9a()
{
	let g2t = t0a;
	let m6c = this.l8r.m6c;
	let m9n = this.l8r.m9n;
	let z5l = this.l8r.z5l;
	let s9q = this.l5d + m6c + m9n;
	let r5n = this.m6m + m6c + m9n;
	let f8o = this.z8u - m6c - m9n;
	let f7a = this.q2f - m6c - m9n;
	this.i8p(new c9o(r5n, s9q, f8o, s9q+z5l-1), g2t);
	this.i8p(new c9o(r5n, f7a-z5l+1, f8o, f7a), g2t);
	this.i8p(new c9o(r5n, s9q, r5n+z5l-1, f7a), g2t);
	this.i8p(new c9o(f8o-z5l+1, s9q, f8o, f7a), g2t);
}

b3t()
{
	return this.q2h.getContext('2d');
}

f2t(rect, color)
{
	let z4d = this.b3t();
	z4d.beginPath();
	z4d.lineWidth = "1";
	z4d.strokeStyle = color;
	z4d.rect(rect.q7j, rect.j3a, rect.k2e(), rect.c6g());
	z4d.stroke();
}

i8p(rect, color)
{
	let z4d = this.b3t();
	z4d.fillStyle = color;
	z4d.fillRect(rect.q7j, rect.j3a, rect.k2e(), rect.c6g());
}

z3w(rect, img)
{
	let z4d = this.b3t();
	let q9k = z4d.createPattern(img, 'repeat');
	z4d.fillStyle = q9k;
	z4d.fillRect(rect.q7j, rect.j3a, rect.k2e(), rect.c6g());
}

s5o(rect, img)
{
	let z4d = this.b3t();
	let q9k = z4d.createPattern(img, 'no-repeat');
	z4d.fillStyle = q9k;
	z4d.fillRect(rect.q7j, rect.j3a, rect.k2e(), rect.c6g());
}

q0o(d9d)
{
	let i9b = r4z;
	let o1a = e6z;
	if (this.s2p)
	{
		i9b = j3x(p2m(d9d));
		o1a = i4c(p2m(d9d));
	}
	else
	{
		i9b = j3x(d9d);
		o1a = i4c(d9d);
	}
	if (startsWithDarkSquare(o1a))
	{
		i9b++;
	}
	else
	{
		i9b--;
	}
	return this.x2h(o1a, i9b);
}

j4o()
{
	for (const d9d of x0c)
	{
		this.e3t(d9d);
	}
}

e3t(d9d)
{
	this.n8h(this.q0o(d9d), d9d);
}

n8h(rect, d9d)
{
	let x8m = this.b7x;
	if (this.h1v)
	{
		this.z4u(rect, this.z2e);
		return;
	}
	if (!x8m)
	{
		this.z4u(rect, this.z2e);
		return;
	}

	let n4l = x8m.width;
	let o0n = x8m.height;
	let a4b = this.l8r.q4y;
	if (n4l < a4b || o0n < a4b)
	{
		this.s5o(rect, x8m);
		return;
	}

	let s2x = Math.trunc(n4l / this.l8r.q4y);
	let t5h = Math.trunc(o0n / this.l8r.q4y);
	if (s2x == 0)
	{
		s2x = 1;
	}
	if (t5h == 0)
	{
		t5h = 1;
	}

	let r5v = Math.trunc((d9d) / s2x);
	let z0k = (d9d) % s2x;
	let y = Math.trunc(r5v / t5h);
	r5v = r5v % t5h;

  let k9w = new c9o();
	k9w.q7j = z0k * this.l8r.q4y;
	k9w.j3a = r5v * this.l8r.q4y;
	k9w.o8u = (z0k + 1) * this.l8r.q4y - 1;
	k9w.d7v = (r5v + 1) * this.l8r.q4y - 1;
	let z4d = this.b3t();
	a0m(z4d, rect, x8m, k9w);
}

n8j(d9d)
{
	let i9b = r4z;
	let o1a = e6z;
	if (this.s2p)
	{
		i9b = j3x(p2m(d9d));
		o1a = i4c(p2m(d9d));
	}
	else
	{
		i9b = j3x(d9d);
		o1a = i4c(d9d);
	}
	return this.x2h(o1a, i9b);
}

y8o()
{
	for (const d9d of x0c)
	{
		this.a3c(d9d);
	}
}

a3c(d9d)
{
	this.v9m(this.n8j(d9d), d9d);
}

v9m(rect, d9d)
{
	let x8m = this.q9s;
	if (this.f8g)
	{
		this.z4u(rect, this.u9c);
		return;
	}
	if (!x8m)
	{
		this.z4u(rect, this.u9c);
		return;
	}

	let n4l = x8m.width;
	let o0n = x8m.height;
	let a4b = this.l8r.q4y;
	if (n4l < a4b || o0n < a4b)
	{
		this.s5o(rect, x8m);
		return;
	}

	let s2x = Math.trunc(n4l / this.l8r.q4y);
	let t5h = Math.trunc(o0n / this.l8r.q4y);
	if (s2x == 0)
	{
		s2x = 1;
	}
	if (t5h == 0)
	{
		t5h = 1;
	}

	let r5v = Math.trunc((d9d) / s2x);
	let z0k = (d9d) % s2x;
	let y = Math.trunc(r5v / t5h);
	r5v = r5v % t5h;

  let k9w = new c9o();
	k9w.q7j = z0k * this.l8r.q4y;
	k9w.j3a = r5v * this.l8r.q4y;
	k9w.o8u = (z0k + 1) * this.l8r.q4y - 1;
	k9w.d7v = (r5v + 1) * this.l8r.q4y - 1;
	let z4d = this.b3t();
	a0m(z4d, rect, x8m, k9w);
}

x2h(o1a, i9b)
{
	let m6c = this.l8r.m6c;
	let m9n = this.l8r.m9n;
	let z5l = this.l8r.z5l;
	let q4y = this.l8r.q4y;
	let rect = new c9o();
	rect.q7j = this.m6m + m6c + m9n +	z5l + (i9b) * q4y;
	rect.o8u = rect.q7j + q4y - 1;
	rect.j3a = this.l5d + m6c + m9n +	z5l + (c4f - o1a - 1) * q4y;
	rect.d7v = rect.j3a + q4y - 1;
	return rect;
}

f0k(d9d)
{
	let i9b = r4z;
	let o1a = e6z;
	if (this.s2p)
	{
		i9b = j3x(p2m(d9d));
		o1a = i4c(p2m(d9d));
	}
	else
	{
		i9b = j3x(d9d);
		o1a = i4c(d9d);
	}
	return this.x2h(o1a, i9b);
}

z6v()
{
	for (const d9d of x0c)
	{
		this.q7h(d9d);
	}
}

q7h(d9d)
{
	this.n9q(this.f0k(d9d), d9d);
}

n9q(rect, d9d)
{
	let u9t = y1u(d9d);
	let x8m = this.b7x;
	if (u9t)
	{
		x8m = this.q9s;
	}
	if (u9t)
	{
		if (this.f8g)
		{
			this.z4u(rect, this.u9c);
			return;
		}
		if (!x8m)
		{
			this.z4u(rect, this.u9c);
			return;
		}
	}
	else
	{
		if (this.h1v)
		{
			this.z4u(rect, this.z2e);
			return;
		}
		if (!x8m)
		{
			this.z4u(rect, this.z2e);
			return;
		}
	}

 	let n4l = x8m.width;
	let o0n = x8m.height;
	let a4b = this.l8r.q4y;
	if (n4l < a4b || o0n < a4b)
	{
		this.s5o(rect, x8m);
		return;
	}
	let s2x = Math.trunc(n4l / this.l8r.q4y);
	let t5h = Math.trunc(o0n / this.l8r.q4y);
	if (s2x == 0)
	{
		s2x = 1;
	}
	if (t5h == 0)
	{
		t5h = 1;
	}

	let r5v = Math.trunc((d9d) / s2x);
	let z0k = (d9d) % s2x;
	let y = Math.trunc(r5v / t5h);
	r5v = r5v % t5h;

  let k9w = new c9o();
	k9w.q7j = z0k * this.l8r.q4y;
	k9w.j3a = r5v * this.l8r.q4y;
	k9w.o8u = (z0k + 1) * this.l8r.q4y - 1;
	k9w.d7v = (r5v + 1) * this.l8r.q4y - 1;
	let z4d = this.b3t();
	a0m(z4d, rect, x8m, k9w);
}

z4u(rect, color)
{
	this.i8p(rect, color);
}

f2e()
{
	for (const d9d of x0c)
	{
		this.j5l(d9d);
	}
}

v1u(e7g, x7z, r4g)
{
	this.x2e = e7g;
	this.y9c = x7z;
	this.g1t = r4g;

	this.e3c.length = 0;
 	let s1p = this.f0k(e7g);
  let x8h = this.f0k(x7z);
	let v8n = this.l8r.q4y;

	let c2h = 32;
	if (v8n < 32)
	{
		c2h = v8n;
	}

  
	if (false)
	{
    
    
		let c4c = new i8o(s1p.q7j + v8n / 2, s1p.j3a + v8n / 2);
		let t2m = new i8o(x8h.q7j + v8n / 2, x8h.j3a + v8n / 2);
		let b2b = Math.abs(c4c.X - t2m.X);
		let n1m = Math.abs(c4c.Y - t2m.Y);
		let l5v = Math.atan2(t2m.X - c4c.X, c4c.Y - t2m.Y);
		let d7b = Math.sqrt(b2b*b2b + n1m*n1m) / 2;
		t2m.X = c4c.X + d7b * 2;
		t2m.Y = c4c.Y;
		let b6o = new i8o(c4c.X + d7b, c4c.Y);
		let p6f = Math.PI / c2h;
		let m7p = v8n * 0.40;
		let p1n = Math.PI;
		let i3h = (x8h.q7j > s1p.q7j && x8h.j3a < s1p.j3a) ||
			(x8h.q7j < s1p.q7j && x8h.j3a > s1p.j3a);
		for (let i = 1; i < c2h; i++)
		{
			let f2t = new c9o();
			if (i3h)
			{
				p1n -= p6f;
			}
			else
			{
				p1n += p6f;
			}
			let m7i = Math.cos(p1n);
			let f6o = Math.sin(p1n);
			let t3z = new i8o(b6o.X + d7b * m7i,
				b6o.Y - m7p * f6o);
			this.e3c.push(f7n(t3z, c4c, l5v - Math.PI / 2));
		}
	}
	else
	{
		let c4c = new i8o(s1p.q7j + v8n / 2, s1p.j3a + v8n / 2);
		let t2m = new i8o(x8h.q7j + v8n / 2, x8h.j3a + v8n / 2);
		let w0v = (t2m.X - c4c.X) / c2h;
		let q3z = (t2m.Y - c4c.Y) / c2h;
		for (let i = 1; i < c2h; i++)
		{
			this.e3c.push(new i8o(c4c.X + i * w0v, c4c.Y + i * q3z));
		}
	}
	this.e3c.push(new i8o(x8h.q7j + v8n / 2, x8h.j3a + v8n / 2));
	this.c6b = 0;
}

z4p()
{
	this.x2e = y3r;
	this.y9c = y3r;
}

s9h()
{
	this.o3y(); 

	let v8e = this.e3c[this.c6b];
	let q4y = this.l8r.q4y;
	let f2t = new c9o();
	f2t.q7j = v8e.X - q4y / 2;
	f2t.j3a = v8e.Y - q4y / 2;
	f2t.p6z(q4y);
	f2t.d0k(q4y);
 	let z4d = this.b3t();
	a2a(z4d, f2t, this.b6i.p3t(this.x2e));

	this.c6b++;
	if (this.c6b >= this.e3c.length)
	{
		let r4y = this.b6i.p3t(this.x2e);
		this.b6i.c9p(this.x2e, b4h.r7x);
		this.b6i.c9p(this.y9c, r4y);
		this.z4p();
		return true;
	}
	else
	{
		return false;
	}
}

j5l(d9d)
{
	if (d9d == this.x2e)
	{
		return;
	}
	let v9s = this.f0k(d9d);
 	let z4d = this.b3t();
	a2a(z4d, v9s, this.b6i.p3t(d9d));
}

k8g()
{
	if (!this.l8r.p9c)
	{
    return;
  }

 	let z5l = this.l8r.z5l;
	let m6c = this.l8r.m6c;
	let m9n = this.l8r.m9n;
	let q4y = this.l8r.q4y;

	let b3r = new c9o();
	b3r.q7j = this.m6m + m6c + m9n;
	b3r.j3a = this.l5d + m6c + m9n;
	b3r.p6z(c4f * q4y + 2 * z5l);
	b3r.d0k(c4f * q4y + 2 * z5l);

 	let z4d = this.b3t();
  let c2q = y7u(z4d, m9n-6);

  k8g(z4d,
    b3r,
    this.l8r,
    c2q,
    l8m.q3r,
    this.i2u,
    this.s2p,
    m9n);
}

v7p(d9d, color)
{
	let rect = this.f0k(d9d);
	let z4d = this.b3t();
  z4d.save();
  z4d.globalAlpha = 0.25; 
	z4d.fillStyle = color;
	z4d.fillRect(rect.q7j, rect.j3a, rect.k2e(), rect.c6g());
  z4d.restore();
}

h3i()
{
	if (this.w7e)
	{
		if (!this.t3g.r7x())
		{
      let color = "#800080"; 
			this.v7p(this.t3g.e7g, color);
			this.v7p(this.t3g.x7z, color);
		}
  }
}

o3n()
{
	for (const u0y of this.a0x.m6o)
	{
		this.u4m(u0y);
	}
}

u4m(u0y)
{
	let rect = this.f0k(u0y.d9d);
	let c0x = '';
	switch (u0y.type)
	{
		case c7m.y7r:
			c0x = c9y;
			break;
		case c7m.l4s:
			c0x = w2m;
			break;
		case c7m.q8r:
			c0x = m6y;
			break;
	}
	let v8n = this.h0i / 10;
	let z4d = this.b3t();
  /* dit is met roundrect
  y0m(rect, 5);
	z4d.lineWidth = v8n / 15;
	z4d.strokeStyle = c0x;
	s4y(z4d, rect.q7j, rect.j3a, rect.k2e(), rect.c6g(), 10);
  */
  
  z4d.save();
  z4d.globalAlpha = 0.7; 
	z4d.fillStyle = c0x;
	z4d.fillRect(rect.q7j, rect.j3a, rect.k2e(), rect.c6g());
  z4d.restore();
}

f4i()
{
	for (const r4h of this.y2n.s9v)
	{
		this.j7e(r4h);
	}
}

j7e(r4h)
{
	let e7g = r4h.e7g;
	let x7z = r4h.x7z;
	let s9p = r4h.type;

	let s1p = this.f0k(e7g);
	let x8h = this.f0k(x7z);

	let q9x = s1p.q7j + s1p.k2e()/2;
	let z1o = s1p.j3a + s1p.c6g()/2;
	let p3f = new i8o(q9x, z1o);

	let u4f = x8h.q7j + x8h.k2e()/2;
	let v6b = x8h.j3a + x8h.c6g()/2;

	let b9q = (u4f-q9x)*(u4f-q9x) + (v6b-z1o)*(v6b-z1o);
	let l7l = Math.sqrt(b9q);

	let t1i = (this.b6i.s6s(e7g)) ? 0 : s1p.k2e() / 4;
	l7l -= t1i;
	let m0t = (this.b6i.s6s(x7z)) ? 0 : s1p.k2e() / 4;
	l7l -= m0t;

	let v2o = 5;
	let f3e = 5 * v2o;
	let u2n = 7 * v2o;

	let u7w = q9x + t1i;
	let v2w = z1o;

	let r1c = u7w + l7l - 1;
	let h7h = z1o;

	let a9q = r1c - u2n;
	let d4r = z1o;

	let l5v = Math.atan2((u4f - q9x), (z1o - v6b));

  
	let y5a = [];
  let e7s = 10; 
	y5a.push(new i8o(a9q, d4r));
	y5a.push(new i8o(a9q - e7s, d4r - f3e));
	y5a.push(new i8o(r1c, h7h));
	y5a.push(new i8o(a9q - e7s, d4r + f3e));
	y5a.push(new i8o(a9q, h7h));
	let c4d = [];
	for (let i = 0; i <= 4; i++)
	{
		c4d.push(f7n(y5a[i], p3f, l5v - Math.PI / 2));
	}

	let z4d = this.b3t();
  z4d.save();
  z4d.globalAlpha = 0.7;

 	let p0d = '';
	switch (s9p)
	{
		case c3j.j3b:
			p0d = x9b;
			break;
		case c3j.l2i:
			p0d = o5b;
			break;
		case c3j.h8d:
			p0d = k3c;
			break;
	}
 	z4d.fillStyle = p0d;
  z4d.strokeStyle = p0d;
	z4d.beginPath();
	z4d.moveTo(c4d[0].X, c4d[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		z4d.lineTo(c4d[i].X, c4d[i].Y);
	}
	z4d.closePath();
	z4d.fill();

  
	y5a.length = 0;
	y5a.push(new i8o(u7w, v2w - v2o));
	y5a.push(new i8o(u7w, v2w + v2o));
	y5a.push(new i8o(a9q, v2w + v2o));
	y5a.push(new i8o(a9q, v2w - v2o));
	c4d.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		c4d.push(f7n(y5a[i], p3f, l5v - Math.PI / 2));
	}
	if (q9x == u4f)
	{
		if (c4d[0].Y != c4d[1].Y)
		{
			c4d[0].Y = c4d[1].Y;
		}
		if (c4d[2].Y != c4d[3].Y)
		{
			c4d[2].Y = c4d[3].Y;
		}
	}
	if (z1o == v6b)
	{
		if (c4d[0].X != c4d[1].X)
		{
			c4d[0].X = c4d[1].X;
		}
		if (c4d[2].X != c4d[3].X)
		{
			c4d[2].X = c4d[3].X;
		}
	}
	z4d.beginPath();
	z4d.moveTo(c4d[0].X, c4d[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		z4d.lineTo(c4d[i].X, c4d[i].Y);
	}
	z4d.closePath();
	z4d.fill();
  z4d.restore();
}

k7i()
{
	let m6c = this.l8r.m6c;
	let m9n = this.l8r.m9n;
	let v8n = this.l8r.q4y;
	let rect = new c9o();
	rect.q7j = this.z8u - m6c - m9n + 1;
	rect.j3a = this.q2f - m6c - m9n;
	rect.d7v = this.q2f;
	rect.o8u = this.z8u - 1;
	return rect;
}

}

const h4r = 14;

const k5t =
{
	y7c : 0
};

const l6y =
{
	y7c : 0
};

const p9u =
{
	h2n : 0,
	x3p : 1,
};

const l8m =
{
	t3s: 0,
	a6k: 1,
	q3r: 2,
	a6h: 3,
	m6w: 4,
};

class j6p
{

constructor()
{
	this.x4w = k5t.y7c;
	this.r4l = 1; 
	this.m6c = 0;
	this.m9n = h4r;
	this.z5l = 2;
	this.q4y = 32;
	this.e2n = 20;
	this.p9c = true;
	this.c2d = p9u.x3p;
	this.k5l = true;
}

o0o()
{
	let b4a = new j6p();
	b4a.x4w = this.x4w;
	b4a.r4l = this.r4l;
	b4a.m6c = this.m6c;
	b4a.m9n = this.m9n;
	b4a.z5l = this.z5l;
	b4a.q4y = this.q4y;
	b4a.e2n = this.e2n;
	b4a.p9c = this.p9c;
	b4a.c2d = this.c2d;
	b4a.k5l = this.k5l;
	return b4a;
}

h0i()
{
	return this.q4y * c4f + 2 * (this.m6c + this.m9n + this.z5l);
}

f5p(rect)
{
	let w = rect.k2e();
	let h = rect.c6g();
	let v4p = 0;
	if (w < h)
	{
		v4p = w;
	}
	else
	{
		v4p = h;
	}
	if (this.m9n)
	{
		for (this.q4y = 2; this.q4y < 1000; this.q4y++)
		{
			this.m9n = (this.q4y / 100) * this.e2n;
			if (this.m9n < h4r)
			{
				this.m9n = h4r;
			}
			let size = 2 * (this.m6c + this.m9n + this.z5l) + c4f * this.q4y;
			if (size > v4p)
			{
				break;
			}
		}
		this.q4y--;
		this.m9n = (this.q4y / 100) * this.e2n;
		if (this.m9n < h4r)
		{
			this.m9n = h4r;
		}
	}
	else
	{
		for (this.q4y = 2; this.q4y < 1000; this.q4y++)
		{
			let size = 2 * (this.m6c + this.z5l) + c4f * this.q4y;
			if (size > v4p)
			{
				break;
			}
		}
		this.q4y--;
	}
	return this.h0i();
}

}


class l5s
{

constructor()
{
	this.g5u = new o8k();
	this.g5p = new o8k();
	this.y2n = new s7c();
	this.a0x = new x6l();
	this.r5r = new w3p();
 	this.h7p = new w3p();
	this.t9z = 0;
	this.r6v = false;
	this.x9d = false;
	this.y8e = 0;
	this.h6d = 0;
	this.a2y = '';
}

}

const b1e =
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

function y0m(rect, r6e)
{
	rect.q7j += r6e;
	rect.o8u -= r6e;
	if (rect.q7j > rect.o8u)
	{
		rect.q7j = rect.o8u;
	}
	rect.j3a += r6e;
	rect.d7v -= r6e;
	if (rect.j3a > rect.d7v)
	{
		rect.j3a = rect.d7v;
	}
}

function a0m(t7s, b7l, s3f, k9w)
{
	t7s.drawImage(s3f, k9w.q7j, k9w.j3a, k9w.k2e(), k9w.c6g(),
		b7l.q7j, b7l.j3a, b7l.k2e(), b7l.c6g());
}

function s4y(z4d, x, y, width, height, v7r)
{
	z4d.beginPath();
	z4d.moveTo(x, y + v7r);
	z4d.lineTo(x, y + height - v7r);
	z4d.arcTo(x, y + height, x + v7r, y + height, v7r);
	z4d.lineTo(x + width - v7r, y + height);
	z4d.arcTo(x + width, y + height, x + width, y + height-v7r, v7r);
	z4d.lineTo(x + width, y + v7r);
	z4d.arcTo(x + width, y, x + width - v7r, y, v7r);
	z4d.lineTo(x + v7r, y);
	z4d.arcTo(x, y, x, y + v7r, v7r);
	z4d.stroke();
}

function f7n(l8u, p3f, y1b)
{
	let p = new i8o();
	p.X = (Math.cos(y1b) * (l8u.X - p3f.X)) - (Math.sin(y1b) * (l8u.Y - p3f.Y)) + p3f.X;
	p.Y = (Math.sin(y1b) * (l8u.X - p3f.X)) + (Math.cos(y1b) * (l8u.Y - p3f.Y)) + p3f.Y;
	return p;
}

function l2c(z4d, rect, f3u)
{
	let left = rect.q7j;
	let top = rect.j3a;
	let v1h = rect.o8u;
	let j4r = rect.d7v;

	z4d.fillStyle = h2u;
	z4d.fillRect(rect.q7j, rect.j3a, rect.k2e(), rect.c6g());

	if (f3u.h2n())
	{
		return;
	}

	let e7x = f3u.g3o();
	let t0s = 0;
	if (e7x > 8)
	{
		t0s = (v1h - left) / 8;
	}
	else
	{
		t0s = (v1h - left) / e7x;
	}
	let n6p = left - t0s;
	let h7w = top;
	let v3n = n6p + t0s;
	let l3m = 0;
	if (e7x > 8)
	{
		l3m = (j4r - top + 1) / 2;
	}
	else
	{
		l3m = j4r - top + 1;
	}

	let j0t = top + l3m - 1;
	let k4i = 0;
	for (let i = 0; i < 16; i++)
	{
		if (f3u.j4c(i))
		{
			n6p += t0s;
			v3n += t0s;
			if (k4i == 7 || k4i == 15 ||
				(k4i < 8 && k4i == e7x - 1))
			{
				v3n = v1h;
			}
			if (k4i == 8)
			{
				n6p = left;
				v3n = n6p + t0s;
				h7w = top + l3m;
				j0t = j4r;
			}
			let h2v = new c9o(n6p, h7w, v3n, j0t);
			z4d.fillStyle = b1e[i];
			z4d.fillRect(h2v.q7j, h2v.j3a, h2v.k2e(), h2v.c6g());
			k4i++;
		}
	}
}




class i7n
{

constructor()
{
	this.q9c = '';
	this.x8m = null;
}

}

class l3a
{

constructor()
{
	this.x8y = [];
}

add(img)
{
	let r4n = new i7n();
	r4n.q9c = img.id;
	r4n.x8m = img;
	this.x8y.push(r4n);
}

x8m(q9c)
{
	for (const k6l of this.x8y)
	{
		if (k6l.q9c.toLowerCase() == q9c.toLowerCase())
		{
			return k6l.x8m;
		}
	}
	return null;
}

}
const x3b 				= "#00FFFF";
const t0a 			= "#000000";
const g9z 				= "#0000FF";
const e6x 			= "#FFFBF0";
const b9b 			= "#808080";
const g4o 		= "#FF00FF";
const m7e 				= "#808080";
const e6m 			= "#008000";
const b0x 				= "#00FF00";
const i8h 			= "#C0C0C0";
const t5u 			= "#800000";
const t6r 		= "#A0A0A4";
const w7n 	= "#C0DCC0";
const u7f 				= "#000080";
const w3l 			= "#808000";
const c4m 			= "#800080";
const h2u 				= "#FF0000";
const h1g 			= "#C0C0C0";
const r8o 		= "#A6CAF0";
const k6f 				= "#008000";
const z7f 			= "#FFFFFF";
const t1d 			= "#FFFF00";

class i8o
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

o0o()
{
	let o7c = new i8o();
	o7c.q7j = this.X;
	o7c.j3a = this.Y;
	return o7c;
}

}

class c9o
{

constructor(left, top, v1h, j4r)
{
	if (left === undefined)
	{
		this.q7j = 0;
		this.j3a = 0;
		this.o8u = 0;
		this.d7v = 0;
	}
	else
	{
		this.q7j = left;
		this.j3a = top;
		this.o8u = v1h;
		this.d7v = j4r;
	}
}

o0o()
{
	let j4v = new c9o();
	j4v.q7j = this.q7j;
	j4v.j3a = this.j3a;
	j4v.o8u = this.o8u;
	j4v.d7v = this.d7v;
	return j4v;
}

k2e()
{
	return this.o8u - this.q7j + 1;
}

b2s()
{
	return this.o8u - this.q7j + 1;
}

p6z(width)
{
	this.o8u = this.q7j + width - 1;
}

c6g()
{
	return this.d7v - this.j3a + 1;
}

i0b()
{
	return this.d7v - this.j3a + 1;
}

d0k(height)
{
	this.d7v = this.j3a + height - 1;
}

o1s()
{
	this.q7j++;
	this.j3a++;
	this.o8u--;
	this.d7v--;
}

u9g(v8e)
{
	return v8e.X >= this.q7j &&
		v8e.X <= this.o8u &&
		v8e.Y >= this.j3a &&
		v8e.Y <= this.d7v;
}


}

class b2l
{

constructor(c0j)
{
	this.c0j = c0j;
	this.k5h = new o8k();
	this.w3w = new s0a();
	this.y7m = null;
	this.l8r = new j6p();
	this.m6e = true;
}

g8f()
{
	let k1p = window.devicePixelRatio;

	this.w3w.q2h.width = this.y7m.clientWidth * k1p;
	this.w3w.q2h.height = this.y7m.clientHeight * k1p;

	let p6s = 32 * k1p;
	let g5h = 32 * k1p;
	let y5i = this.w3w.q2h.width - p6s;
	let f5u = this.w3w.q2h.height - g5h;
	let i5c = f5u < y5i ? f5u : y5i;
	if (i5c < 128)
	{
		i5c = 128;
	}
	let rect = new c9o();
	rect.q7j = 0;
	rect.j3a = 0;
	rect.p6z(i5c);
	rect.d0k(i5c);
	this.l8r.m9n = i5c * 0.02;
  if (this.l8r.m9n < h4r)
  {
    this.l8r.m9n = h4r;
  }
	i5c = this.l8r.f5p(rect);
 	this.w3w.m1m(this.l8r);
	this.w3w.o3y();
}

t8y()
{
	this.w3w.t8y();
	this.w3w.o3y();
}

b4q()
{
	this.l8r.p9c = !this.l8r.p9c;
	this.w3w.m1m(this.l8r);
	this.w3w.o3y();
}

l4o()
{
	this.w3w.m1m(this.l8r);
	this.w3w.o3y();
}

g4e(n4s)
{
	this.k5h = n4s.g5p.o0o();
	this.w3w.h1q(this.k5h);
	this.w3w.u6i(n4s.y2n);
	this.w3w.z3n(n4s.a0x);
  
 	this.w3w.p2k(n4s.h7p);
	this.w3w.o3y();

	if (this.m6e)
	{
		m8o('playBackward' + this.c0j, n4s.r6v);
		m8o('goToBegin'+ this.c0j, n4s.r6v);
		m8o('playForward' + this.c0j, n4s.x9d);
		m8o('goToEnd' + this.c0j, n4s.x9d);
		m8o('autoPlay' + this.c0j, n4s.x9d);
	}
	else
	{
		m8o('goToBegin' + this.c0j, n4s.r6v);
		m8o('goToEnd' + this.c0j, n4s.x9d);
	}
}

h1q(b6i)
{
	let n4s = new l5s();
	n4s.g5p = b6i.o0o();
	this.h1q(n4s);
}

m1m(l8r)
{
  this.l8r = l8r.o0o();
}

}

class g0e
{

constructor(c0j)
{
	this.c0j = c0j;
  this.w5y = null;
	this.b7t = new e5o();
}

d0p(b7t)
{
	this.b7t = b7t.o0o();
	this.e1l();
}

e1l()
{
	let q1t = this.b7t.p8k.b6b.l3n();
	let j2k = this.b7t.d9a.b6b.l3n();

	let y9t = '';
	if (q1t.length && this.b7t.p8k.q6p)
	{
		y9t = this.b7t.p8k.q6p.toString();
	}
	let g4b = '';
	if (q1t.length && this.b7t.p8k.x9v.length)
	{
		g4b = this.b7t.p8k.x9v.toString();
	}

	let i9a = '';
	if (j2k.length && this.b7t.d9a.q6p)
	{
		i9a = this.b7t.d9a.q6p.toString();
	}
	let t6q = '';
	if (j2k.length && this.b7t.d9a.x9v.length)
	{
		t6q = this.b7t.d9a.x9v.toString();
	}

	let r1k = this.b7t.p8k.b6b.v4m(1);
	let d7t = this.b7t.d9a.b6b.v4m(1);

	let g0q = '';
	let u3o = '';
	if (!this.b7t.p8k.q2j.r7x() &&
		!this.b7t.d9a.q2j.r7x())
	{
		g0q = this.b7t.p8k.q2j.h5y();
		u3o = this.b7t.d9a.q2j.h5y();
	}

	let a4f = t4o(this.b7t.u6z);
	let p8w = this.b7t.p8w.x9v;
	if (!this.b7t.p8w.e4x.r7x())
	{
		p8w += " ";
		p8w += this.b7t.p8w.e4x.r2w.toString();
	}
	let r3f = '';
	if (!this.b7t.u4v.r7x())
	{
		r3f = this.b7t.u4v.toString("dd-mm-yyyy");
	}
	let l7b = '';
	if (!this.b7t.l7b.r7x())
	{
		l7b = '</br>' + '[' + this.b7t.l7b.q9c + ']';
	}

	let a4t = document.getElementById("nota-container"+this.c0j);
	let e1i = a4t.clientHeight;
	let k9b = 200;

  let index = this.c0j;
  let l5t = this.b7t.p8w.l5t;

	let q8v = true;
	if (this.w5y.clientWidth >= 374 && e1i >= k9b)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + q1t + "</span>";
    s += 					"<span class=\"rating\">" + y9t + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + g0q + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + a4f + "</span>";
		s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + j2k + "</span>";
		s +=          "<span class=\"rating\">" + i9a + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + u3o + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "<span>" + g4b + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + p8w + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + l5t + "</span>";
		s +=          "<span class=\"gameDate\">" + r3f + "</span>";
    s +=          "<span class=\"annotator\">" + l7b + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + t6q + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
		s +=      "</tr>";
		s +=    "</table>";
		this.w5y.innerHTML = s;

		
		
		let u1r = Math.trunc(this.w5y.clientWidth / 10);
		if (u1r < 24) u1r = 24;
    
		
		
		
		
		
		
	}
	else if (this.w5y.clientWidth >= 300 && e1i >= k9b)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + r1k + "</span>";
    s +=          "<span class=\"rating\">" + y9t + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + g0q + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + a4f + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + d7t + "</span>";
    s +=          "<span class=\"rating\">" + i9a + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + u3o + "</span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + g4b + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + p8w + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + l5t + "</span>";
    s +=          "<span class=\"gameDate\">" + r3f + "</span>";
		s +=          "<span class=\"annotator\">" + l7b + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + t6q + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.w5y.innerHTML = s;
	}
	else if (this.w5y.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + r1k + "</span>";
    s +=          "<span class=\"rating\">" + y9t + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + a4f + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + d7t + "</span>";
    s +=          "<span class=\"rating\">" + i9a + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.w5y.innerHTML = s;
	}
	else
	{
		
		q8v = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + r1k + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + a4f + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + d7t + "</span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.w5y.innerHTML = s;
	}

	if (q8v)
	{
		let a1y = 16;
		if (this.w5y.clientWidth < 400)
		{
			a1y = 16;
		}
		else if (this.w5y.clientWidth < 500)
		{
			a1y = 24;
		}
		else
		{
			a1y = 32;
		}
    if (this.b7t.p8k.v0e != y2m.h2n)
    {
  		let a7p = document.getElementById("whitePlayerNation"+this.c0j);
	  	a7p.src = q5b + "images/flags/" + a1y.toString() +"/" + p5g(this.b7t.p8k.v0e) + ".png";
		  a7p.height = a1y;
  		a7p.width = a1y;
    }
    if (this.b7t.d9a.v0e != y2m.h2n)
    {
  		let o0g = document.getElementById("blackPlayerNation"+this.c0j);
	  	o0g.src = q5b + "images/flags/" + a1y.toString() + "/" + p5g(this.b7t.d9a.v0e) + ".png";
		  o0g.height = a1y;
  		o0g.width = a1y;
    }
	}
}

}

class m1c
{

constructor(c0j)
{
	this.c0j = c0j;
	this.b7t = new e5o();
	this.v5x = new b2l(c0j);
	this.l8q = new n8u(c0j);
	this.l8q.u4i.z1d = this; 
	this.e9m = new x2v();
}

t8y()
{
	this.v5x.t8y();
}

b4q()
{
	this.v5x.b4q();
}

l4o()
{
	this.v5x.l4o();
	this.l8q.u4i.l4o();
}

r0f(b7j, p3r, a3k, c6i)
{
	this.k1e(c6i, a3k);
}

k1e(c6i, a3k)
{
	this.b7t = c6i.c5y.o0o();
	this.d0p();
	this.l8q.u4i.f1i(c6i.y8v, a3k);
}

d0p()
{
	this.l8q.p1d.d0p(this.b7t);
}

p5u(n4s)
{
	this.v5x.g4e(n4s);
  this.n1d();
}

n4b()
{
	if (this.e9m.p2r())
	{
		this.e9m.i4u();
	}
	else
	{
		if (!this.l8q.u4i.c9s())
		{
      
			this.e9m.z1d = this; 
			this.e9m.l9i();
			this.l8q.u4i.p6n();
		}
	}
}

n1d()
{
}

}

const o3l =
{
	c9q : 0,
	l3p : 1,
	d4y : 2,
	t2l : 3,
	r3s : 4,
 	m4u : 5,
	u6z : 6,
	y8v : 7,
	r2w : 8,
	event : 9,
	y0n : 10
};

const r3w =
{
	h2n : 0,
	i6g : 1,
	g4w : 2
};

let q1o = 0;
let q4s = 0;
let c8o = 0;
let f2x = 0;
let v6z = 0;
let a1e = 0;
let r3t = 0;
let b6a = 0;

let g4w = false;

function d7o(f, s)
{
	let i4g = f.c5y.p8k.b6b.q9c();
	let l3z = s.c5y.p8k.b6b.q9c();
	if (i4g < l3z)
	{
		return g4w ? -1 : 1;
	}
	if (i4g > l3z)
	{
		return g4w ? 1 : -1;
	}
	i4g = f.c5y.d9a.b6b.q9c();
	l3z = s.c5y.d9a.b6b.q9c();
	if (i4g < l3z)
	{
		return -1;
	}
	if (i4g > l3z)
	{
		return 1;
	}
	return 0;
}

function k6i(f, s)
{
	let i4g = f.c5y.d9a.b6b.q9c();
	let l3z = s.c5y.d9a.b6b.q9c();
	if (i4g < l3z)
	{
		return g4w ? -1 : 1;
	}
	if (i4g > l3z)
	{
		return g4w ? 1 : -1;
	}
	i4g = f.c5y.p8k.b6b.q9c();
	l3z = s.c5y.p8k.b6b.q9c();
	if (i4g < l3z)
	{
		return -1;
	}
	if (i4g > l3z)
	{
		return 1;
	}
	return 0;
}

function y0x(f, s)
{
	let k0v = f.c5y.p8k.q6p - s.c5y.p8k.q6p;
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	k0v = f.c5y.d9a.q6p - s.c5y.d9a.q6p;
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	return d7o(f, s);
}

function f2g(f, s)
{
	let k0v = f.c5y.d9a.q6p - s.c5y.d9a.q6p;
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	k0v = f.c5y.p8k.q6p - s.c5y.p8k.q6p;
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	return d7o(f, s);
}

function e5e(f, s)
{
	let k0v = f.c5y.p8k.v0e - s.c5y.p8k.v0e;
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	k0v = f.c5y.d9a.v0e - s.c5y.d9a.v0e;
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	return d7o(f, s);
}

function v0d(f, s)
{
	let k0v = f.c5y.d9a.v0e - s.c5y.d9a.v0e;
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	k0v = f.c5y.p8k.v0e - s.c5y.p8k.v0e;
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	return d7o(f, s);
}

function o5y(f, s)
{
	let k0v = f.c5y.u6z - s.c5y.u6z;
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	return d7o(f, s);
}

function d1c(f, s)
{
	let k0v = s.c5y.u4v.u4v() - f.c5y.u4v.u4v();
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	return d7o(f, s);
}

function a7h(f, s)
{
	let c8k = f.c5y.p8w.x9v;
	let z1f = s.c5y.p8w.x9v;
	if (c8k < z1f)
	{
		return g4w ? -1 : 1;
	}
	if (c8k > z1f)
	{
		return g4w ? 1 : -1;
	}
	let k0v = f.c5y.p8w.e4x.u4v() - s.c5y.p8w.e4x.u4v();
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	k0v = f.c5y.y0n - s.c5y.y0n;
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	k0v = f.c5y.u2o - s.c5y.u2o;
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	return d7o(f, s);
}

function k5j(f, s)
{
	let k0v = s.c5y.y0n - f.c5y.y0n;
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	k0v = s.c5y.u2o - f.c5y.u2o;
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	return d7o(f, s);
}

function y1i(f, s)
{
	let k0v = s.j9h - f.j9h;
	if (g4w)
	{
		k0v = -k0v;
	}
	if (k0v < 0) return -1;
	if (k0v > 0) return 1;
	return d7o(f, s);
}

class h2g
{

constructor(c0j)
{
	this.c0j = c0j;
	this.g1e = [];
	this.g3s = null;
	this.o4s = null;
	this.u5z = null;
	this.s1s = [];
	this.w8l = [];
	this.i9p = -1;
	this.s2n = r3w.h2n;
	this.f3t = 0;
  this.d2p = null;
}

j6e()
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
	this.u5z.innerHTML = s;
	this.s1s = this.u5z.getElementsByTagName("TH");
	let c0j = this.c0j;

 	this.s1s[o3l.c9q].onclick = this.h5g.bind(this);
	this.s1s[o3l.l3p].onclick = this.y3a.bind(this);
  this.s1s[o3l.d4y].onclick = this.r7i.bind(this);
	this.s1s[o3l.t2l].onclick = this.h5g.bind(this);
	this.s1s[o3l.r3s].onclick = this.j6l.bind(this);
  this.s1s[o3l.m4u].onclick = this.g5e.bind(this);
	this.s1s[o3l.u6z].onclick = this.e5u.bind(this);
	this.s1s[o3l.y8v].onclick = this.o3w.bind(this);
	this.s1s[o3l.r2w].onclick = this.m5m.bind(this);
	this.s1s[o3l.event].onclick = this.s3y.bind(this);
	this.s1s[o3l.y0n].onclick = this.o8m.bind(this);
}

d7c(g1e)
{
	this.g1e = g1e;
	this.g8f();
}

x0a()
{
	this.x7f("grid-player");
	this.x7f("grid-rating");
 	this.x7f("grid-flag");
	this.x7f("grid-result");
	this.x7f("grid-moves");
	this.x7f("grid-year");
	this.x7f("grid-event");
	this.x7f("grid-round");
}

n8n()
{
	this.m1p("grid-player", q1o);
	this.m1p("grid-rating", q4s);
 	this.m1p("grid-flag", b6a);
	this.m1p("grid-result", c8o);
	this.m1p("grid-moves", f2x);
	this.m1p("grid-year", v6z);
	this.m1p("grid-event", a1e);
	this.m1p("grid-round", r3t);

}

x7f(s4e)
{
	let n4c = this.g3s.getElementsByClassName(s4e);
	for (let i = 0; i < n4c.length; i++) {
		n4c[i].style.display = "none";
	}
}

s6n(s4e)
{
	let n4c = this.g3s.getElementsByClassName(s4e);
	for (let i = 0; i < n4c.length; i++) {
		n4c[i].style.display = "table-cell";
	}
}

m1p(s4e, width)
{
	let n4c = this.g3s.getElementsByClassName(s4e);
	for (let i = 0; i < n4c.length; i++) {
		n4c[i].style.width = (width) + "px";
	}
}

g8f()
{
	this.f3t = this.g3s.clientWidth;
	this.f3t -= 17;
	if (this.f3t < 100)
	{
		this.f3t = 100;
	}
	q1o = 200;
	q4s = 52;
	c8o = 34;
	f2x = 50;
	v6z = 52;
	a1e = 200;
	r3t = 50;
  b6a = 30;

 
	let e2l = document.getElementsByClassName("tdreplay")[0];
	if (e2l.clientWidth <= m0x)
	{
		let w8i = 0.7;
		q1o *= w8i;
		q4s *= w8i;
		c8o *= w8i;
		f2x *= w8i;
		v6z *= w8i;
		a1e *= w8i;
		r3t *= w8i;
	}
	this.s9w();
}

o4z()
{
	this.x0a();
	this.n8n();

  let n6r = 2.8;
  let e8s = 2.8;
  let h2p = 17;
	if (this.f3t <= 400)
	{
		this.s6n("grid-player");
		this.s6n("grid-result");
    this.s6n("grid-year");
		this.s6n("grid-event");
    let g2x = 5 * (n6r + e8s);
		let k8e = c8o + v6z;
		let c5t = Math.trunc((this.f3t - k8e - g2x - h2p) / 3);
		this.m1p("grid-player", c5t);
		this.m1p("grid-event", c5t);
	}
	else if (this.f3t <= 580)
	{
		this.s6n("grid-player");
		this.s6n("grid-rating");
		this.s6n("grid-result");
		this.s6n("grid-year");
		this.s6n("grid-event");
    let g2x = 7 * (n6r + e8s);
		let k8e = 2 * q4s + c8o + v6z;
		let c5t = Math.trunc((this.f3t - k8e - g2x - h2p) / 3);
		this.m1p("grid-player", c5t);
		this.m1p("grid-event", c5t);
	}
	else
	{
		this.s6n("grid-player");
		this.s6n("grid-rating");
    this.s6n("grid-flag");
		this.s6n("grid-result");
		this.s6n("grid-moves");
		this.s6n("grid-year");
		this.s6n("grid-event");
		this.s6n("grid-round");
    let g2x = 11 * (n6r + e8s);
		let k8e = 2 * q4s + 2 * b6a + c8o + f2x + v6z + r3t;
		let c5t = Math.trunc((this.f3t - k8e - g2x - h2p) / 3);
		this.m1p("grid-player", c5t);
		this.m1p("grid-event", c5t);
	}
}

s9w()
{
	let a1y = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.c0j + "\">"; 
	for (const c6i of this.g1e)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += c6i.c5y.p8k.b6b.u2e();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (c6i.c5y.p8k.q6p)
		{
			s += c6i.c5y.p8k.q6p;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (c6i.c5y.p8k.v0e != y2m.h2n)
		{
      let f8d = q5b + "images/flags/" + a1y.toString() + "/" + p5g(c6i.c5y.p8k.v0e) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += f8d;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += c6i.c5y.d9a.b6b.u2e();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (c6i.c5y.d9a.q6p)
		{
			s += c6i.c5y.d9a.q6p;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (c6i.c5y.d9a.v0e != y2m.h2n)
		{
      let f8d = q5b + "images/flags/" + a1y.toString() + "/" + p5g(c6i.c5y.d9a.v0e) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += f8d;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-result\">";
		s += t4o(c6i.c5y.u6z);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += c6i.j9h;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += c6i.c5y.u4v.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += c6i.c5y.p8w.x9v;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += c6i.c5y.k7c();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.o4s.innerHTML = s;

  let d6z = document.getElementById('gameList' + this.c0j);
  d6z.addEventListener('click', this.j5b.bind(this));

	this.o4z();
}

k9g(h4h)
{
	if (h4h != this.i9p)
	{
		this.i9p = h4h;
		this.s2n = r3w.i6g;
	}
	else
	{
		if (this.s2n == r3w.h2n)
		{
			this.s2n = r3w.i6g;
		}
		else if (this.s2n == r3w.i6g)
		{
			this.s2n = r3w.g4w;
		}
		else if (this.s2n == r3w.g4w)
		{
			this.s2n = r3w.i6g;
		}
	}
	g4w = (this.s2n == r3w.g4w);

	for (const q8g of this.s1s)
	{
		let s = q8g.g4l;
		let v9u = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let c3o = v9u.replace(" grid-header-sort grid-header-sort-asc", "");
		q8g.g4l = c3o;
	}
	let h4t = this.s1s[this.i9p];
	if (this.s2n == r3w.g4w)
	{
		h4t.g4l = h4t.g4l + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		h4t.g4l = h4t.g4l + " grid-header-sort grid-header-sort-asc";
	}
}

h5g(event)
{
	this.k9g(o3l.c9q);
	this.g1e.sort(d7o);
	this.s9w();
}

y3a(event)
{
	this.k9g(o3l.l3p);
	this.g1e.sort(y0x);
	this.s9w();
}

r7i(event)
{
	this.k9g(o3l.d4y);
	this.g1e.sort(e5e);
	this.s9w();
}

c0u(event)
{
	this.k9g(o3l.t2l);
	this.g1e.sort(k6i);
	this.s9w();
}

j6l(event)
{
	this.k9g(o3l.r3s);
	this.g1e.sort(f2g);
	this.s9w();
}

g5e(event)
{
	this.k9g(o3l.m4u);
	this.g1e.sort(v0d);
	this.s9w();
}

e5u(event)
{
	this.k9g(o3l.u6z);
	this.g1e.sort(o5y);
	this.s9w();
}

m5m(event)
{
	this.k9g(o3l.r2w);
	this.g1e.sort(d1c);
	this.s9w();
}

s3y(event)
{
	this.k9g(o3l.event);
	this.g1e.sort(a7h);
	this.s9w();
}

o8m(event)
{
	this.k9g(o3l.y0n);
	this.g1e.sort(k5j);
	this.s9w();
}

o3w(event)
{
	this.k9g(o3l.y8v);
	this.g1e.sort(y1i);
	this.s9w();
}

j5b(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.d2p)
  {
    this.d2p(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class x5i
{

constructor()
{
	this.b6i = new o8k();
	this.d5e = new o8k();
	this.r4g = false;
	this.d4a = 0;
	this.s6z = 0;
	this.g1q = [];
}

}

var tooltip = null;

class s3i
{

constructor(c0j)
{
	this.c0j = c0j;
	this.f7i = new o6j();
	this.z1d = null;
	this.y2p = new x5i();
	this.o5o = null;
	this.r1g = [];
	this.w8u = [];
  this.s2u = [];
  this.l7a = [];
	this.h5r = -1;
	this.l8r = new j6p();
  this.d0w = null;
	this.h7i = true;
	this.m6r = false;
	this.b5p = [];
	this.c7i = 0;
  this.b3k = true;
  this.t4r = false;
	this.r1u = false;
	this.x3t = true;
  this.d1e = false;
}

f1i(j9d, a3k)
{
	this.f7i = j9d.o0o();
  this.f7i.u2h();
	this.d0w = this.f7i.i1g(a3k);
	this.r0f();
}

r7y(f6y)
{
  this.u5r(this.s2u[f6y]);
}

r0f()
{
	this.p2p();
	this.p6n();
  this.a9n(this.f7i.y5p(this.d0w));
}

p2p()
{
	let o5l = new v3w();
  o5l.d2t(this.b3k);
	o5l.m2w(this.d1e);
  /*
	o5l.setOneLine(this.d1e);
  */
	o5l.u5m(this.r1u);
	o5l.c1i(this.x3t);
	o5l.i1u(this.f7i);

  this.o5o.innerHTML = o5l.w1j.r0s;
  this.r1g = this.o5o.getElementsByClassName("tdmove");
  this.w8u = this.o5o.getElementsByClassName("tdcomment");

	this.s0u("tdmove");
	this.s0u("tdcomment");
	this.s0u("tddia");
	this.s0u("tdmedal");
  this.s0u("tdcolors");

  this.q3y("tdmove");

	this.q6v();
	this.l2c();
}

s0u(e6u)
{
	let c0j = this.c0j;
	let p7b = this.o5o.getElementsByClassName(e6u);
	for (const c4p of p7b)
	{
    let a3k = c4p.getAttribute('movenr');
    c4p.onclick = this.h0g.bind(this, a3k);
	}
}

q3y(e6u)
{
	let c0j = this.c0j;
	let p7b = this.o5o.getElementsByClassName(e6u);
	for (const c4p of p7b)
	{
    let a3k = c4p.getAttribute('movenr');
    c4p.onmouseover = this.x3y.bind(this, a3k);
    c4p.onmouseleave = this.y1k.bind(this, a3k);
	}
}

l4o()
{
	this.q6v();
}

q6v()
{
	let s0h = this.o5o.getElementsByClassName("tddia");
	for (const a7e of s0h)
	{
		let w3w = new s0a();
		w3w.q2h = a7e.getElementsByTagName("canvas")[0];
		let i5c = this.l8r.h0i();
		w3w.q2h.width = i5c;
		w3w.q2h.height = i5c;
		w3w.m1m(this.l8r);
		let g7d = this.f7i.i1g(a7e.getAttribute('movenr'));
    w3w.h1q(this.f7i.b6i(g7d));
    if (g7d.z0x)
    {
  		w3w.u6i(g7d.z0x.y2n());
	  	w3w.z3n(g7d.z0x.a0x());
    }
    else
    {
   		w3w.u6i(this.f7i.d8g());
	  	w3w.z3n(this.f7i.c5x());
    }
		w3w.o3y();
	}
}

l2c()
{
	let l3y = this.o5o.getElementsByClassName("tdmedal");
	for (const g7g of l3y)
	{
		let q2h = g7g.getElementsByTagName("canvas")[0];
		q2h.width = 40;
		q2h.height = 16;
		let z4d = q2h.getContext('2d');
		let rect = new c9o();
		rect.p6z(40);
		rect.d0k(16);
		let g7d = this.f7i.i1g(g7g.getAttribute('movenr'));
    if (g7d.z0x)
    {
  		l2c(z4d, rect, g7d.z0x.f3u());
    }
    else
    {
  		l2c(z4d, rect, this.f7i.w4y());
    }
	}
}

p6n()
{
	let n4s = new l5s();
	n4s.g5u = this.f7i.g5u();
  n4s.g5p = this.f7i.b6i(this.d0w);
  if (this.d6j())
  {
    n4s.y2n = this.f7i.d8g();
	  n4s.a0x = this.f7i.c5x();
  }
  else
  {
  	n4s.y2n = this.d0w.z0x.y2n();
	  n4s.a0x = this.d0w.z0x.a0x();
  }
  
	if (this.c9s())
	{
		n4s.r5r = new w3p();
	}
	else
	{
    let p7t = this.d0w.o0o();
		this.f7i.j7z(p7t);
		n4s.r5r = p7t.z0x.p7x().o0o();
	}
  
 	if (!this.d6j())
	{
		n4s.h7p = this.d0w.z0x.p7x();
	}
	n4s.t9z = this.t9z();
	n4s.r6v = this.r6v();
	n4s.x9d = this.x9d();
	n4s.y8e = 0; 
  n4s.h6d = this.f7i.h6d(this.d0w);
	if (this.z1d)
	{
		this.z1d.p5u(n4s);
	}
}

g3z(r7n)
{
	this.d0w = this.f7i.i1g(r7n);
	this.p6n();
}

x5d(l1i)
{
	switch (l1i)
	{
		case g1r:
		case r3o:
		case w4t:
			this.f8m();
			break;
		case z4m:
		case o0y:
		case j0n:
			this.v5z();
			break;
		case g6j:
		case z7o:
		case e0y:
			this.v3t();
			break;
		case z7h:
		case o4v:
		case k6e:
			this.j4q();
			break;
		case j5w:
			break;
		case g8w:
			break;
	}
}

e0v()
{
  if (this.d0w.h8y)
  {
    this.a9n(this.d0w.h8y.j4t);
  }
  else
  {
    this.a9n(0);
  }
}

u6b()
{
	this.e0v();
	this.p6n();
}

r6v()
{
	return !this.d6j();
}

d6j()
{
	return this.f7i.d6j(this.d0w);
}

c9s()
{
	return this.f7i.c9s(this.d0w);
}

t9z()
{
	return this.f7i.t9z(this.d0w);
}

r5r(h5t)
{
	if (this.c9s())
	{
		return null;
	}
	else
	{
    let p7t = this.d0w.o0o();
		this.f7i.z9k(p7t, h5t);
		return p7t.z0x;
	}
}

v5z()
{
	if (this.r6v())
	{
		this.f7i.x7e(this.d0w);
		this.u6b();
	}
}

x9d()
{
	return !this.c9s();
}

f8m()
{
	if (this.x9d())
	{
		this.u5b(0);
	}
}

u5b(index)
{
	let y1y = this.f7i.s7l(this.d0w);
	if (index >= 0 && index < y1y)
	{
		this.f7i.z9k(this.d0w, index);
		this.u6b();
	}
}

j4q()
{
	if (this.x9d())
	{
		this.f7i.h7b(this.d0w);
		this.u6b();
	}
}

v3t()
{
	if (this.r6v())
	{
		this.d0w = this.f7i.s3a();
		this.u6b();
	}
}

t9y()
{
	if (this.h7i)
	{
		this.m9w();
	}
	else
	{
		this.m1r();
	}
}

y0s()
{
	if (this.m6r)
	{
		this.m6r = false;
		this.z1d.v5x.w3w.z4p();
		this.p6n();
	}
	else
	{
		this.p6n();
	}
}


m1r()
{
	if (this.c9s())
	{
		this.p6n();
		return;
	}
  if (chess)
  {
  	this.u5b(0);
    return;
  }

  
 	let z0x = this.r5r(0);
  if (!z0x.s6z())
 	{
  	this.u5b(0);
	  return;
 	}

  
	let y9a = false;
	if (!this.y2p.r4g)
	{
		y9a = true;
	}
	else
	{
		y9a = false;
		if (this.y2p.d4a < this.y2p.s6z)
		{
			if (this.y2p.d5e.u5a(this.y2p.b6i))
			{
				y9a = true;
			}
		}
	}
	if (y9a)
	{
		this.y2p.b6i = this.f7i.b6i(this.d0w);
		this.y2p.d5e = this.f7i.b6i(this.d0w);
		this.y2p.r4g = true;
		this.y2p.d4a = 0;
		this.y2p.g1q.length = 0;
		this.y2p.g1q.push(z0x.e7g()); 
		this.y2p.s6z = z0x.s6z();
		if (this.y2p.s6z > 1)
		{
			let l4d = generateBetweens(this.y2p.d5e, z0x.p7x());
			for (let i = 0; i < this.y2p.s6z - 1; i++)
			{
				this.y2p.g1q.push(l4d[i]);
			}
		}
		this.y2p.g1q.push(z0x.t0e());
	}
	if (this.y2p.d4a < this.y2p.s6z)
	{
		let e5i = z0x.e5i();
		let b1y = this.y2p.g1q[this.y2p.d4a];
		let t0e = this.y2p.g1q[this.y2p.d4a + 1];
		this.y2p.d5e.c9p(b1y, b4h.r7x);
		this.y2p.d5e.c9p(t0e, e5i);
		this.y2p.b6i = this.y2p.d5e.o0o();
		this.y2p.d4a++;
		let n4s = new l5s();
		n4s.g5p = this.y2p.d5e.o0o();
		n4s.r6v = this.r6v();
		n4s.x9d = this.x9d();
		if (this.z1d)
		{
			this.z1d.p5u(n4s);
		}
	}
	else
	{
		this.y2p.r4g = false;
		this.u5b(0);
	}
}



m9w()
{
	if (this.m6r)
	{
		let d1l = this.z1d.v5x.w3w.s9h();
		if (d1l)
		{
			if (this.c7i < this.b5p.length - 1)
			{
				this.z1d.v5x.w3w.v1u(this.b5p[this.c7i],
					this.b5p[this.c7i+1], true);
				this.c7i++;
			}
			else
			{
				this.m6r = false;
				this.u5b(0);
			}
		}
		return;
	}

	if (this.c9s())
	{
		this.p6n();
		return;
	}

	this.b5p.length = 0;
	let z0x = this.r5r(0);
	let s6z = z0x.s6z();
	if (s6z == 0)
	{
		this.b5p.push(z0x.e7g()); 
		this.b5p.push(z0x.x7z());
	}
	else
	{
		this.b5p.push(z0x.e7g());
		if (s6z > 1)
		{
      let b6i = this.f7i.b6i(this.d0w);
      let l4d = generateBetweens(b6i, z0x.p7x());
			for (let i = 0; i < s6z - 1; i++)
			{
				this.b5p.push(l4d[i]);
			}
		}
		this.b5p.push(z0x.x7z());
	}

	this.z1d.v5x.w3w.v1u(this.b5p[0],
		this.b5p[1], s6z > 0);
	this.c7i = 1;
	this.m6r = true;
}

h1h(b9j)
{
	for (const m of this.r1g)
	{
		if (m.getAttribute('movenr') == b9j)
		{
			return m;
		}
	}
	return null;
}

g0c(b9j)
{
	let z8j = [];
	for (const k9v of this.w8u)
	{
		if (k9v.getAttribute('movenr') == b9j)
		{
			z8j.push(k9v);
		}
	}
	return z8j;
}

u5r(n5i)
{
	let r8x = n5i.offsetTop;
	let a4i = n5i.scrollHeight;

	let y1o = this.o5o.offsetTop;
	let e2y = this.o5o.scrollTop;
	let t6j = this.o5o.clientHeight;
	let u9r = this.o5o.scrollHeight;
	let d8s = r8x - y1o;
	if (d8s >= e2y && d8s + a4i <= e2y + t6j - 1)
	{
		
	}
	else
	{
		
		let top = d8s - (t6j / 2);
		if (top < 0) top = 0;
		this.o5o.scrollTop = top;
	}
}

j4a(z9w, y7g)
{
	let u5v = z9w;
	while (u5v.o4u)
	{
		u5v = u5v.o4u;
	}
 	while (u5v)
	{
    if (this.f7i.s2l(u5v.j4t) == false)
    {
 	  	let n5i = this.h1h(u5v.j4t);
  	  if (n5i)
 		  {
  		  n5i.classList.add(y7g);
 	  	}
    }
    u5v = u5v.c1d;
  }
}

a9n(a3k)
{
  
 	for (const z0x of this.r1g)
	{
 		z0x.classList.remove('tdcurline');
    z0x.classList.remove('tdcurnode1');
	}
 	for (const k9v of this.w8u)
	{
 		k9v.classList.remove('tdcurline');
	}

  
	if (this.h5r >= 0)
	{
		let n5i = this.h1h(this.h5r);
		if (n5i)
		{
			n5i.classList.remove('tdcurmove');
		}
	}

  
  let y7b = true;
  let a8s = this.f7i.q8l(this.d0w);
 	for (const z9w of a8s)
	{
    if (z9w.o4u && y7b)
		{
		  this.j4a(z9w, 'tdcurnode1');
      y7b = false;
    }
    else
    {
      if (this.f7i.s2l(z9w.j4t) == false)
      {
   	  	let a7d = this.h1h(z9w.j4t);
	  	  if (a7d)
  		  {
	  		  a7d.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let n5i = this.h1h(a3k);
	if (n5i)
	{
    n5i.classList.remove('tdcurline');
		n5i.classList.add('tdcurmove');
		this.u5r(n5i);
	}
	this.h5r = a3k;
}

m6u()
{
	let z0x = this.h1h(this.h5r);
	if (!z0x) return;
	let k5r = z0x.offsetTop;
	let b3q = null;
	let a3q = -1;
	for (const m of this.r1g)
	{
		if (m.offsetTop < k5r)
		{
			if (m.offsetTop > a3q)
			{
				b3q = m;
				a3q = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (b3q)
	{
		this.y7d(b3q.getAttribute('movenr'));
	}
	else
	{
		if (this.r1g.length)
		{
			this.y7d(this.r1g[0].getAttribute('movenr'));
		}
	}
}

e4g()
{
	let z0x = this.h1h(this.h5r);
	if (!z0x)
	{
		this.f8m();
		return;
	}
	let k5r = z0x.offsetTop;
	for (const m of this.r1g)
	{
		if (m.offsetTop > k5r)
		{
			this.y7d(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.r1g.length)
	{
		this.y7d(this.r1g[this.r1g.length - 1].getAttribute('movenr'));
	}
}

y7d(r7n)
{
  
  
  
  
  if (this.d0w.h8y)
  {
    if (this.d0w.h8y.j4t == r7n)
    {
      return;
    }
  }
  else
  {
    if (r7n == 0)
    {
      return;
    }
  }
	
  this.g3z(r7n);
  this.a9n(r7n);
	
}

y5p()
{
	return this.f7i.y5p(this.d0w);
}

m1m(l8r)
{
  this.l8r = l8r.o0o();
	this.l8r.m6c = 0;
	this.l8r.m9n = 0;
	this.l8r.q4y = 32;
  this.l8r.z5l = 2;
 	this.l8r.p9c = false;
}

g5u()
{
	return this.f7i.g5u();
}

a1r()
{
	return this.f7i.a1r();
}

n8g()
{
	return this.f7i.n8g(this.d0w);
}

y5u()
{
	return this.f7i.y5u();
}

h0g(a3k, event)
{
  this.y7d(a3k);
}

x3y(a3k, event)
{
  if (!this.t4r) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const c4p = event.currentTarget; 
  const rect = c4p.getBoundingClientRect();
  console.log(`c9o.q7j: ${rect.left}`);
  console.log(`c9o.j3a: ${rect.top}`);
  let g0y = rect.left;
  let y6q = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let c7v = this.l8r.h0i();

  if (g0y + c7v > viewportWidth)
  {
    g0y = viewportWidth - c7v - 5;
  }
  if (g0y < 5)
  {
    g0y = 5;
  }
  if (y6q + c7v > viewportHeight)
  {
    y6q = viewportHeight - c7v - 5;
  }
  if (y6q < 5)
  {
    y6q = 5;
  }

  let g7d = this.f7i.i1g(a3k);
  let b6i = this.f7i.b6i(g7d);
  tooltip.innerHTML = this.m7j(b6i);

  tooltip.style.left = `${g0y}px`;
  tooltip.style.top = `${y6q}px`;
  tooltip.classList.add('visible');
}

y1k(a3k, event)
{
  if (!this.t4r) return;
  tooltip.classList.remove('visible');
}

m7j(b6i)
{
  let w3w = new s0a();
  const tempCanvas = document.createElement('canvas');
	w3w.q2h = tempCanvas;
	let i5c = this.l8r.h0i();
	w3w.q2h.width = i5c;
	w3w.q2h.height = i5c;
	w3w.m1m(this.l8r);
  w3w.h1q(b6i);
  w3w.o3y();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="${imageDataURL}" alt="Chess Position" width="${boardSize}" height="${boardSize}">`;
}

}

class f1z
{

constructor()
{
	this.fontSize = 15;
  this.a9w = true;
 	this.d9i = true;
}

o0o()
{
  return Object.assign(new f1z(), this);
}

}
class n8u
{

constructor(c0j)
{
  this.p1d = new g0e(c0j);
  this.u4i = new s3i(c0j);
}

}

class x2v
{

constructor()
{
	this.n7s = false;
	this.z1d = null;
	this.d6x = null;
	this.u1e = 6;
	this.p3n = null;
	this.z7p = null;
	this.a7k = null;
	this.r3v = null;
	this.m6l = null;
	this.g0f = false;
}

l9i()
{
	this.n7s = false;
	this.l2r();
	this.p3n.classList.replace('autoPlay', 'autoStop');
	this.r3v.style.display = 'none';
	this.m6l.style.display = 'none';
	this.z7p.style.display = 'inline-block';
	this.a7k.style.display = 'inline-block';
	this.p0r();
	this.z1d.v5x.m6e = false;
}

i4u()
{
	if (this.d6x)
	{
		clearInterval(this.d6x);
		this.d6x = null;
		this.p3n.classList.replace('autoStop', 'autoPlay');
		this.r3v.style.display = 'inline-block';
		this.m6l.style.display = 'inline-block';
		this.z7p.style.display = 'none';
		this.a7k.style.display = 'none';
		this.z1d.v5x.m6e = true; 
		this.z1d.l8q.u4i.y0s();
	}
}

l2r()
{
	let c0j = this.z1d.c0j;
	this.d6x = setInterval(function(){ u4x(c0j); },
		this.z1d.l8q.u4i.h7i ? this.u1e * 2 : this.u1e * 100);
}

p2r()
{
	return this.d6x != null;
}

r6v()
{
	return !this.z1d.l8q.u4i.d6j();
}

x9d()
{
	return !this.z1d.l8q.u4i.c9s();
}

k6b()
{
	if (this.g0f)
	{
		return;
	}
	else
	{
		this.g0f = true;
	}
	if (!this.x9d())
	{
		this.i4u();
	}
	else
	{
		this.z1d.l8q.u4i.t9y();
	}
	this.g0f = false;
}

k2h()
{
	if (this.d6x)
	{
		if (this.u1e < 50)
		{
			this.u1e++;
			clearInterval(this.d6x);
			this.l2r();
			this.p0r();
		}
	}
}

j3m()
{
	if (this.d6x)
	{
		if (this.u1e > 1)
		{
			this.u1e--;
			clearInterval(this.d6x);
			this.l2r();
			this.p0r();
		}
	}
}

p0r()
{
	s5h(this.z7p, this.u1e < 50);
	s5h(this.a7k, this.u1e > 1);
}

}

let d5m = null;
let r6e = 0;
let k8u = null;

class b9s
{

constructor()
{
	this.index = 0;
	this.k3q = '';
	this.e2l = null;
	this.u3t = false;
	this.z1d = null;
	this.s0k = null;
  this.g1e = [];
	this.f5e = 0;
  this.t6e = 0;

	this.h0u = null;
	this.r7z = null;
	this.left = null;
	this.n9r = null;
	this.n1f = null;
	this.g7h = null;
	this.m3f = null;
	this.y7m = null;
	this.y3t = null;
	this.x1z = null;
	this.y1n = null;
 	this.z8x = null;
 	this.a5b = null;
	this.i9l = null;
	this.r3v = null;
	this.z7p = null;
	this.p3n = null;
	this.m6l = null;
	this.a7k = null;
	this.o4r = null;
 	this.g7n = null;
  this.d1a = null;
	this.m6h = null;
  this.q8e = null;
	this.u9e = null;
	this.m2b = null;
	this.g3s = null;
	this.w0o = null;
	this.a0u = null;
	this.c2w = null;
  this.b5h = null;
  this.w1q = null;
	this.c5f = null;
	this.v1h = null;
	this.p8b = null;
	this.f6h = null;
	this.h0t = null;

	this.g3j = null;
	this.k1w = null;
	this.o2z = null;
	this.w2r = null;

  
  this.v4r = null;
  this.i2k = null;
  this.i1a = null;
  this.k1h = null;
  this.j6b = null;
  this.e2q = null;
}

a9r(index, e2l, k3q)
{
	this.index = index;
	this.e2l = e2l;
	this.k3q = k3q;
	e2l.innerHTML = '';
	e2l.id = "replay";

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

  e2l.innerHTML = s;

	this.h0u = document.getElementById("rootParent"+index);
	this.r7z = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.n9r = document.getElementById("leftContainer"+index);
	this.n1f = document.getElementById("leftNest"+index);
	this.g7h = document.getElementById("leftNorth"+index);
	this.m3f = document.getElementById("boardHolder"+index);
	this.y7m = document.getElementById("boardPanel"+index);
	this.y3t = document.getElementById("boardCanvas"+index);
	this.x1z = document.getElementById("belowBoard"+index);
	this.y1n = document.getElementById("replayPanel"+index);
 	this.z8x = document.getElementById("goToPrevious"+index);
 	this.a5b = document.getElementById("goToNext"+index);
	this.i9l = document.getElementById("goToBegin"+index);
	this.r3v = document.getElementById("playBackward"+index);
	this.z7p = document.getElementById("playSlower"+index);
	this.p3n = document.getElementById("autoPlay"+index);
	this.m6l = document.getElementById("playForward"+index);
	this.a7k = document.getElementById("playFaster"+index);
	this.o4r = document.getElementById("goToEnd"+index);
  this.g7n = document.getElementById("flipBoard"+index);
  this.d1a = document.getElementById("download"+index);
	this.m6h = document.getElementById("showGameList"+index);
  this.q8e = document.getElementById("settings"+index);
	this.u9e = document.getElementById("leftSouth"+index);
	this.m2b = document.getElementById("leftSouthNest"+index);
	this.g3s = document.getElementById("listParent"+index);
	this.w0o = document.getElementById("listHeader"+index);
	this.a0u = document.getElementById("listHeaderTable"+index);
	this.c2w = document.getElementById("listBody"+index);
  this.b5h = document.getElementById("list-button-container"+index);
  this.w1q = document.getElementById("hideGameList"+index);
	this.c5f = document.getElementById("gameList"+index);
	this.v1h = document.getElementById("right"+index);
	this.p8b = document.getElementById("rightNest"+index);
	this.f6h = document.getElementById("rightNorth"+index);
	this.h0t = document.getElementById("rightSouth"+index);
	this.g3j = document.getElementById("nota-container"+index);
  this.g3j.style.fontSize = z4a.fontSize + 'px';
	this.k1w = document.getElementById("nota-header-container"+index);
	this.o2z = document.getElementById("headerPanel"+index);
	this.w2r = document.getElementById("movesPanel"+index);
}

j6e()
{
	this.e2l.style.display = 'block';
	this.z7p.style.display = 'none';
	this.a7k.style.display = 'none';
	this.g3s.style.display = 'none';

	this.u3t = false;
	if (this.e2l.clientWidth <= m0x)
	{
		this.p4p();
		this.u3t = true;
	}
	else
	{
		this.u4b();
		this.f2w();
	}
  this.x8g();
	let c0j = this.index;

	this.i9l.onclick = this.e5t.bind(this);
	this.r3v.onclick = this.v5z.bind(this);
	this.z7p.onclick = this.k2h.bind(this);
	this.p3n.onclick = this.q1s.bind(this);
	this.a7k.onclick = this.j3m.bind(this);
	this.m6l.onclick = this.f8m.bind(this);
	this.o4r.onclick = this.n1z.bind(this);
  this.z8x.onclick = this.g8o.bind(this);
  this.a5b.onclick = this.k0p.bind(this);
  this.g7n.onclick = this.t8y.bind(this);
 	this.d1a.onclick = this.b8s.bind(this);
	this.m6h.onclick = this.s7u.bind(this);
 	this.w1q.onclick = this.s5b.bind(this);

  this.q8e.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

	this.z1d = new m1c(this.index);
	this.z1d.v5x.w3w.o9x(this.y3t);
	this.z1d.v5x.y7m = this.y7m;
  this.z1d.v5x.m1m(h1t);
	this.z1d.l8q.p1d.w5y = this.o2z;
	this.z1d.l8q.u4i.o5o = this.w2r;
  this.z1d.l8q.u4i.m1m(h1t);
	this.z1d.e9m.p3n = this.p3n;
	this.z1d.e9m.z7p = this.z7p;
	this.z1d.e9m.a7k = this.a7k;
	this.z1d.e9m.r3v = this.r3v;
	this.z1d.e9m.m6l = this.m6l;

	this.s0k = new h2g(this.index);
	this.s0k.g3s = this.g3s;
	this.s0k.o4s = this.c5f;
	this.s0k.u5z = this.a0u;
	this.s0k.j6e();
	this.s0k.d7c(this.g1e);
  this.s0k.d2p = (c5f, index) => {
    this.b8x(c5f, index);
  };
	if (this.s0k.g1e.length)
	{
		this.r0f(0, 0);
	}
	else
	{
		let c6i = new j0c();
		this.z1d.r0f(null, 1, 0, c6i);
	}
}

u5i(k3q)
{
	this.k3q = k3q;
 	let q0d = this.k3q.split('\n');
	let g2e = 0;
	for (const x4h of q0d)
	{
		if (x4h.startsWith("[Event \""))
		{
			let y2e = g2e;
      let l3h = q0d.length;
   		let f3x = q0d.slice(y2e, l3h);
  		let i7j = new b4c(f3x);
	  	this.s0k.g1e[this.f5e] = i7j.i2x();
      break;
    }
    g2e++;
	}
  this.r0f(0, 0);
}

x8g()
{
	let q0d = this.k3q.split('\n');
	let v8w = [];
	let g2e = 0;
	for (const x4h of q0d)
	{
		if (x4h.startsWith("[Event \""))
		{
			v8w.push(g2e);
		}
		g2e++;
	}
	let i = 0;
	this.g1e = [];
	for (const p0b of v8w)
	{
		let y2e = p0b;
		let l3h = 0;
		if (i < v8w.length - 1)
		{
			l3h = v8w[i + 1];
		}
		else
		{
			l3h = q0d.length;
		}
		let f3x = q0d.slice(y2e, l3h);
		let i7j = new b4c(f3x);
		let c6i = i7j.i2x();
		this.g1e.push(c6i);
		i++;
	}
}

v4e()
{
	if (this.u3t || this.r7z.clientHeight <= m0x)
	{
		this.e2l.style.r5n = "0px";
		this.e2l.style.f8o = "0px";
		this.e2l.style.width = "100%";
		this.e2l.style.height = "88vh";
	}
	else
	{
		this.e2l.style.r5n = "1px solid gray";
		this.e2l.style.f8o = "1px solid gray";
		this.e2l.style.height = "88vh";
	}
}

d7w()
{
	this.v4e();

	this.left.style.width = "100%";

	let r9e = this.g7h.getBoundingClientRect();
	this.u9e.style.top = (r9e.height) + "px";
	this.f2w();

	this.a5e();
	this.u4b();
	this.h6r();
	this.a9g();
  this.s2i()
}

k7a()
{
	this.v4e();

	let f2f = this.r7z.getBoundingClientRect();
	this.left.style.width = (f2f.width * 0.50) + "px";
	let l6p = this.left.getBoundingClientRect();

	let r9e = this.g7h.getBoundingClientRect();
	this.u9e.style.top = (r9e.height) + "px";
	this.f2w();

	this.v1h.style.left = (l6p.width) + "px";
	this.v1h.style.width = (f2f.width - l6p.width) + "px";

	this.a5e();
	this.u4b();
	this.h6r();
	this.a9g();
  this.s2i()
}

u4b()
{
}

j6a()
{
  this.g7h.style.height = '100%';
  this.f6h.appendChild(this.g3j);
  this.g3j.style.height = '100%';
  this.v1h.style.display = 'block';
}

p4p()
{
  this.g7h.style.height = '70%';
  this.m2b.appendChild(this.g3j);
  this.g3j.style.height = '100%';
  this.v1h.style.display = 'none';
}

s7u(event)
{
	this.g3s.style.display = 'block';
  let n5e = this.g3s.clientHeight - this.w0o.clientHeight - this.b5h.clientHeight;
  this.c2w.style.height = n5e + "px";
	this.h6r();
}

s5b(event)
{
 	this.g3s.style.display = 'none';
}

a9g()
{
	this.z1d.l8q.p1d.e1l();
}

s2i()
{
}

h6r()
{
  this.s0k.g8f();
}

a5e()
{
	let r9e = this.g7h.getBoundingClientRect();
	let v6m = this.x1z.getBoundingClientRect();
	this.m3f.style.height = (r9e.height - v6m.height - 1) + "px";
	this.z1d.v5x.g8f();
}

f2w()
{
	let r9x = this.n1f.getBoundingClientRect();
	let r9e = this.g7h.getBoundingClientRect();
	let e6o = r9x.height - r9e.height;
	if (e6o < 0) e6o = 0;
	this.u9e.style.height = e6o + "px";
}

i6d()
{
  m8o('goToPrevious'+this.index, this.f5e > 0);
  m8o('goToNext'+this.index, this.f5e < this.s0k.g1e.length - 1);
}

j0h(e)
{
	this.z1d.v5x.w3w.mouseDown(e);
}

u3g(e)
{
	this.z1d.v5x.w3w.mouseMove(e);
}

x7c(e)
{
	this.z1d.v5x.w3w.mouseUp(e);
}

w9z(e)
{
	this.z1d.v5x.w3w.touchStart(e);
}

c8n(e)
{
	this.z1d.v5x.w3w.touchMove(e);
}

s7w(e)
{
	this.z1d.v5x.w3w.touchEnd(e);
}

k2h(event)
{
	this.z1d.e9m.k2h();
}

j3m(event)
{
	this.z1d.e9m.j3m();
}

v5z(event)
{
	this.z1d.e9m.i4u();
	this.z1d.l8q.u4i.v5z();
}

f8m(event)
{
	this.z1d.e9m.i4u();
	this.z1d.l8q.u4i.f8m();
}

e5t(event)
{
	this.z1d.e9m.i4u();
	this.z1d.l8q.u4i.v3t();
}

n1z(event)
{
	this.z1d.e9m.i4u();
	this.z1d.l8q.u4i.j4q();
}

q1s(event)
{
	this.z1d.n4b();
}

n4n()
{
 	if (this.s0k.g1e.length)
  {
    this.r0f(0, 0);
  }
}

g8o(event)
{
 	if (this.f5e > 0)
  {
    this.r0f(this.f5e - 1, 0);
  }
}

k0p(event)
{
  if (this.f5e < this.s0k.g1e.length - 1)
  {
    this.r0f(this.f5e + 1, 0);
  }
}

b0e()
{
	if (this.s0k.g1e.length)
  {
    this.f5e = this.s0k.g1e.length - 1;
    this.r0f(this.s0k.g1e.length - 1, 0);
	}
}

r0f(f5e, a3k)
{
  if (f5e >= 0 && f5e <= this.s0k.g1e.length - 1)
  {
    this.f5e = f5e;
  	this.z1d.r0f(null, 1, a3k, this.s0k.g1e[this.f5e]);
  }
  this.i6d();
}

t8y(event)
{
	this.z1d.t8y();
}

b4q()
{
	this.z1d.b4q();
}

t0x()
{
	if (this.e2l.clientWidth <= m0x)
	{
		if (this.u3t)
		{
			this.d7w();
		}
		else
		{
			this.p4p();
			this.u3t = true;
			this.d7w();
		}
	}
	else
	{
		if (!this.u3t)
		{
			this.k7a();
		}
		else
		{
			this.j6a();
			this.u3t = false;
			this.k7a();
		}
	}
}

b8x(c5f, index)
{
	this.r0f(index, 0);
  this.s5b();
}

b8s(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.k3q.length - 1)
  {
    if (this.k3q[i] == '[')
    {
        break;
    }
    i++;
  }
  let k3q = this.k3q.substring(i);
  a.href = window.URL.createObjectURL(new Blob([k3q], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

o3z()
{
  this.z1d.v5x.m1m(h1t);
  this.z1d.v5x.g8f();
  this.z1d.l8q.u4i.m1m(h1t);
  this.z1d.l8q.u4i.p2p();
  let g3j = document.getElementById("nota-container"+this.index);
  g3j.style.fontSize = z4a.fontSize + 'px';
}

async onSettingsClick()
{
  const dialog = new x9h();
  const { u6z } = await dialog.show();

  if (u6z === dialog.u7c)
  {
    this.o3z();
  }
}

}

class x9h
{

constructor()
{
  this.u7c = 1;
  this.j1l = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.k8q();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.i2k = this.dialog.querySelector(".piece-select");
  this.i1a = this.dialog.querySelector(".coordinates-checkbox");
  this.k1h = this.dialog.querySelector(".font-select");
  this.j6b = this.dialog.querySelector(".ok-button");
  this.e2q = this.dialog.querySelector(".cancel-button");

  this.j6b.onclick = this.h0f.bind(this);
 	this.e2q.onclick = this.k3d.bind(this);
}

k8q()
{
  const c0k = g3w();
  const s = `
    <dialog id="settingsDialog" class="settingsDialog">
      <e4n>Settings</e4n>

      <div class="settings-row">
        <span class="label-text">Pieces:</span>
        <select class="pieceSelect piece-select">
          ${c0k.map((r4y, i) => '<option value="' + i + '">' + r4y + '</option>').join('')}
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

h0f(event)
{
  h1t.r4l = this.i2k.value;
  localStorage.setItem(c8l, h1t.r4l);
  x0s(h1t.r4l);
  h1t.p9c = this.i1a.checked;
  localStorage.setItem(p9p, h1t.p9c.toString());
  z4a.fontSize = this.k1h.value;
  localStorage.setItem(d0f, z4a.fontSize);
  this.dialog.close('ok');
}

k3d(event)
{
  this.dialog.close('cancel');
}

async show()
{
  i8b = true;

  this.i2k.value = h1t.r4l;
  this.i1a.checked = h1t.p9c;
  this.k1h.value = z4a.fontSize;

  const u6z = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.u7c : this.j1l);
    };
    this.dialog.showModal();
  });

  i8b = false;
  return { u6z };
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
let l7v = false;
let i8b = false;

const m0x = 767;
let f0i = [];
let z1j = -1;
let d8i = new l3a();

let h1t = new j6p();
let z4a = new f1z();

window.onload = function()
{
  f4v();
  n3a();
  z6x();
};

document.onkeydown = r4r;

function r4r(e)
{
  if (e.l1i === "Escape")
  {
    return;
  }

  if (i8b)
  {
    
    e.preventDefault();
    return;
  }

	let h3d = e || window.event;
	let l1i = h3d.keyCode;

	if (l7v) return;
	l7v = true;

	if (z1j == -1) return;

	if (e.ctrlKey)
	{
		if (l1i == 66) 
		{
				f0i[z1j].t8y();
				e.preventDefault();
				
				
				
		}
		l7v = false;
		return;
	}
	if (l1i)
	{
		
		m3k(l1i);
		e.preventDefault(); 
		
	}
	l7v = false;
}

function u4x(c0j)
{
	f0i[c0j].z1d.e9m.k6b();
}

function m3k(l1i)
{
	if (z1j == -1) return;

	if (l1i == c1t)
	{
		f0i[z1j].z1d.l8q.u4i.m6u();
	}
	else if (l1i == q5w)
	{
		f0i[z1j].z1d.l8q.u4i.e4g();
	}
	else if (l1i == z4m || l1i == o0y || l1i == j0n ||
	l1i == g1r || l1i == r3o || l1i == w4t ||
	l1i == g6j || l1i == z7o ||
	l1i == z7h || l1i == o4v)
	{
		f0i[z1j].z1d.l8q.u4i.x5d(l1i);
	}
	else if (l1i == k4s || l1i == h1o || l1i == c9v)
	{
		f0i[z1j].doFlipBoard();
	}
}

function u2y(e9c, g6o)
{
	let k0g = e9c.length;
	let g3o = 0;

	function check(n)
	{
		if (n == k0g)
		{
			g6o();
		}
	}

  for (let i = 0; i < e9c.length; ++i)
  {
    let p7h = e9c[i];
    let img = document.createElement("img");
    let h9k = p7h.replace(q5b, "");
    img.id = h9k.replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
    d8i.add(img);
    img.addEventListener("load", function()
    {
        g3o++;
        check(g3o);
    });
    img.src = p7h;
  }
}

function f4v()
{
 	u2y(o4f(), y0l);
}

function t0x()
{
	for (const x0d of f0i)
	{
		x0d.t0x();
	}
}

function y0l()
{
	let a8d = document.getElementsByClassName("tdreplay");
	for (const e2l of a8d)
	{
		let x0d = new b9s();
		x0d.a9r(f0i.length, e2l, e2l.innerHTML);
		x0d.j6e();
		f0i.push(x0d);
	}
	if (f0i.length)
	{
		z1j = 0;
	}
	window.addEventListener("resize", t0x);
	t0x();
}

function m8o(q9c, h9e)
{
	let button = document.getElementById(q9c);
	if (h9e)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function s5h(button, h9e)
{
	if (h9e)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const p9p = 'Coordinates';
const c8l = 'Pieces';
const d0f = 'MovesFontSize';
const h7x = 'SearchTime';
const u3u = 'MultiPV';
const o9d = 'Threads';
const x2n = 'Memory';

function z6x()
{
  const coordinatesValue = localStorage.getItem(p9p);
  if (coordinatesValue === null)
  {
    h1t.p9c = true;
  }
  else
  {
    h1t.p9c = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(c8l);
  if (piecesValue === null)
  {
    h1t.r4l = 0;
  }
  else
  {
    h1t.r4l = piecesValue;
  }
  x0s(h1t.r4l);

  const movesFontSizeValue = localStorage.getItem(d0f);
  if (movesFontSizeValue === null)
  {
    z4a.fontSize = 15;
  }
  else
  {
    z4a.fontSize = movesFontSizeValue;
  }
}
const f6u =
[
	[ v8z.h2n, 			  	""      ],
	[ v8z.c6i,  		 		"game"  ],
	[ v8z.t1o,    		 	"match" ],
	[ v8z.p8w,  	"tourn" ],
	[ v8z.h1b,   			"swiss" ],
	[ v8z.z7m,    	"k.o."  ],
	[ v8z.s4t,	"simul" ],
	[ v8z.j7v,	"schev" ]
];

const y7k =
[
	[ l7y.q7y, ""        ],
	[ l7y.i8u,  "(rapid)" ],
	[ l7y.v9n,  "(blitz)" ],
	[ l7y.h0o,   "(corr)"  ]
];

const w3s =
[
	[ e9u.h2n,     		 ""     ],
	[ e9u.e9x,       		 "$145" ],
	[ e9u.o1w, 		 "$142" ],
	[ e9u.x5x, 		 "$143" ],
	[ e9u.j9o, "$144" ],
	[ e9u.t3l,  "$140" ],
	[ e9u.a3y, "$141" ]
];

const a1m =
[
	[ q5f.h2n,     		""   ],
	[ q5f.h9g,       	"$1" ],
	[ q5f.l7o, 			  	"$2" ],
	[ q5f.a4g,	"$5" ],
	[ q5f.m2k, 		  "$6" ],
	[ q5f.a1v,  	"$3" ],
	[ q5f.x9n, 		  "$4" ],
	[ q5f.j8o, 		"$22" ],
	[ q5f.j8a, 		"$8" ]
];

const h7c =
[
	[ o9q.h2n,     						""     ],
	[ o9q.k2t,      "$18"  ],
	[ o9q.i1x, 					"$16"  ],
	[ o9q.o5x,	"$14"  ],
	[ o9q.y9l, 						"$11"  ],
	[ o9q.t4s,  						"$13"  ],
	[ o9q.n4d,  "$15"  ],
	[ o9q.s4n, 					"$17"  ],
	[ o9q.v3c, 			"$19"  ],
	[ o9q.h8r,					"$44"  ],
	[ o9q.x5f, 					"$132" ],
	[ o9q.j6o,  					"$36"  ],
	[ o9q.j3b, 							"$40"  ],
	[ o9q.g9a, 			  "$138" ],
	[ o9q.j1c,	"$32"  ],
	[ o9q.t2f, 							"$146" ]
];

const r5b =
[
	[ c2u.h2n,     		""     ],
	[ c2u.r0w,     "$51"  ],
	[ c2u.y2s, 			"$52"  ],
	[ c2u.r6z,	    		"$53"  ]
];

const p3p =
[
	[ e1x.u4p, 			 	""       ],
	[ e1x.y2s,   		"middle" ],
	[ e1x.i6i,   	   	 	"low"    ]
];


function x1h(f4p)
{
	return y7k[f4p][1];
}

function j8l(r7l)
{
	for (const f4p of y7k)
	{
		if (f4p[1] == r7l)
		{
			return f4p[0];
		}
	}
	return l7y.q7y;
}

function g9g(type)
{
	return f6u[type][1];
}

function e0q(r7l)
{
	for (const q8c of f6u)
	{
		if (q8c[1] == r7l)
		{
			return q8c[0];
		}
	}
	return v8z.h2n;
}

function c3a(t2c)
{
	return w3s[t2c][1];
}

function h3l(r7l)
{
	for (const t2c of w3s)
	{
		if (t2c[1] == r7l)
		{
			return t2c[0];
		}
	}
	return e9u.h2n;
}

function l8b(style)
{
	return a1m[style][1];
}

function x9g(r7l)
{
	for (const style of a1m)
	{
		if (style[1] == r7l)
		{
			return style[0];
		}
	}
	return q5f.h2n;
}

function t7o(value)
{
	return h7c[value][1];
}

function f2l(r7l)
{
	for (const value of h7c)
	{
		if (value[1] == r7l)
		{
			return value[0];
		}
	}
	return o9q.h2n;
}

function x2d(z4y)
{
	return r5b[z4y][1];
}

function j0e(r7l)
{
	for (const k0q of r5b)
	{
		if (k0q[1] == r7l)
		{
			return k0q[0];
		}
	}
	return c2u.h2n;
}

function v7j(r7l)
{
	return r7l.length == 0 ||
		r7l == "?" ||
		r7l == "-" ||
		r7l == "*" ||
		r7l == "????.??.??";
}

function z1e(r7l)
{
	if (v7j(r7l))
	{
		return "";
	}
	else
	{
		return r7l.trim();
	}
}

function b6n(r7l, i0p)
{
	if (v7j(r7l))
	{
		return i0p;
	}
	else
	{
		return k0x(r7l, i0p);
	}
}

function i4z(value)
{
	return value ? value.toString() : "";
}

function z2z(b4j)
{
	return p3p[b4j][1];
}

function j0g(r7l)
{
	for (const b4j of p3p)
	{
		if (b4j[1] == r7l)
		{
			return b4j[0];
		}
	}
	return e1x.u4p;
}

function z5n(e0l)
{
	if (!e0l)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(e0l / 60);
		let p9b = e0l % 60;
		return div.toString() + "." + p9b.toString().padStart(2, '0');
	}
}

function x6d(u6z)
{
	switch (u6z)
	{
		case e1q.d3r:
			return "1-0";
		case e1q.o3y:
			return "1/2-1/2";
		case e1q.d4q:
			return "0-1";
		default:
			return "*";
	}
}

function n4a(q6p)
{
	if (q6p > 0 && q6p <= 9999)
	{
		return q6p.toString().padStart(4, '0');
	}
	else
	{
		return "-";
	}
}

function z4x(u4v)
{
	if (u4v.r7x())
	{
		return "????.??.??";
	}
	let r7l = '';
	if (u4v.r2w)
	{
		r7l = u4v.r2w.toString().padStart(4, '0');
	}
	else
	{
		r7l = "????";
	}
	r7l += ".";
	if (u4v.i1q)
	{
		let r9j = u4v.i1q.toString().padStart(2, '0');
		r7l += r9j;
	}
	else
	{
		r7l += "??";
	}
	r7l += ".";
	if (u4v.g2k)
	{
		let h7l = u4v.g2k.toString().padStart(2, '0');;
		r7l += h7l;
	}
	else
	{
		r7l += "??";
	}
	return r7l;
}

function p7w(b5c)
{
	if (v7j(b5c))
	{
		return new j6w();
	}
	else
	{
		let u4v = new j6w();
		u4v.a1f("yyyy.mm.dd", b5c);
		return u4v;
	}
}

function p2d(b5c, p8w)
{
	p8w.n9a = (b5c.indexOf("team") != -1);
	p8w.type = v8z.h2n;
	for (const q8c of f6u)
	{
		if (b5c.indexOf(q8c[1]) != -1)
		{
			p8w.type = q8c[0];
			break;
		}
	}
	p8w.f4p = l7y.q7y;
	for (const f4p of y7k)
	{
		if (b5c.indexOf(f4p[1]) != -1)
		{
			p8w.f4p = f4p[0];
			break;
		}
	}
}

function r9g(b5c, b7t)
{
	b7t.y0n = 0;
	b7t.u2o = 0;
	let g7d = b5c.indexOf(".");
	if (g7d != -1)
	{
		let o9f = b5c.substr(0, g7d);
		b7t.y0n = k0x(o9f, 0);
		let w9i = b5c.substr(g7d + 1, b5c.length);
		g7d = w9i.indexOf(".");
		if (g7d != -1)
		{
			o9f = w9i.substr(0, g7d);
			b7t.u2o = k0x(o9f, 0);
		}
		else
		{
			b7t.u2o = k0x(w9i, 0);
		}
	}
	else
	{
		b7t.y0n = k0x(b5c, 0);
	}
}

function c0y(b7t)
{
	let b5c = '';
	if (b7t.u2o)
	{
		b5c = b7t.y0n.toString() + "." + b7t.u2o.toString();
	}
	else if (b7t.y0n)
	{
		b5c = b7t.y0n.toString();
	}
	return b5c;
}

function z3f(b5c)
{
	if (b5c == "2-0" || b5c == "20" || b5c == "1-0" || b5c == "10")
	{
		return e1q.d3r;
	}
	else if (b5c == "1-1" || b5c == "11" || b5c == "1/2-1/2" ||
		b5c == "1/21/2" || b5c == "0.5-0.5")
	{
		return e1q.o3y;
	}
	else if (b5c == "0-2" || b5c == "02" || b5c == "0-1" || b5c == "01")
	{
		return e1q.d4q;
	}
	else
	{
		return e1q.h2n;
	}
}

function k6w(b5c)
{
	return k0x(b5c, 0);
}

function k1u(b5c)
{
	return a5z(b5c);
}

function n2o(b5c)
{
	return g5c(b5c);
}

function d5n(value)
{
	return value ? "1" : "";
}

function f6n(b5c)
{
	return b5c == "1";
}

function i7y(h1s)
{
	let b7t = new e5o();

	
	b7t.p8k.b6b.m0f(z1e(h1s.c9q));
	if (!v7j(h1s.f0f))
	{
		b7t.p8k.q2j.q9c = z1e(h1s.f0f);
		b7t.p8k.q2j.j4t = b6n(h1s.j4b, 0);
		if (!v7j(h1s.n4q))
		{
			let u4v = p7w(h1s.n4q);
			b7t.p8k.q2j.r2w = u4v.r2w;
		}
		b7t.p8k.q2j.s0o = f6n(h1s.f8s);
		b7t.p8k.q2j.v0e = p7l(z1e(h1s.o2w));
	}
	b7t.p8k.q6p = k6w(z1e(h1s.l3p));
	b7t.p8k.u7h = n2o(z1e(h1s.c1s));
	b7t.p8k.x9v = z1e(h1s.x5s);
	b7t.p8k.v0e = z1m(z1e(h1s.t9h));

	
	b7t.d9a.b6b.m0f(z1e(h1s.t2l));
	if (!v7j(h1s.n0j))
	{
		b7t.d9a.q2j.q9c = z1e(h1s.n0j);
		b7t.d9a.q2j.j4t = b6n(h1s.e7o, 0);
		if (!v7j(h1s.z8a))
		{
			let u4v = p7w(h1s.z8a);
			b7t.d9a.q2j.r2w = u4v.r2w;
		}
		b7t.d9a.q2j.s0o = f6n(h1s.o6e);
		b7t.d9a.q2j.v0e = p7l(z1e(h1s.z7x));
	}
	b7t.d9a.q6p = k6w(z1e(h1s.r3s));
	b7t.d9a.u7h = n2o(z1e(h1s.d4o));
	b7t.d9a.x9v = z1e(h1s.n5l);
	b7t.d9a.v0e = z1m(z1e(h1s.e7e));

	
	b7t.p8w.x9v = z1e(h1s.a5f);
	b7t.p8w.l5t = z1e(h1s.p0p);
	b7t.p8w.e4x = p7w(h1s.p4h);
	b7t.p8w.h9j = p7w(h1s.r0m);

	p2d(z1e(h1s.q8c), b7t.p8w);
	
	
	
	let y3z = j8l(h1s.y3z);
	if (y3z != l7y.q7y)
	{
		b7t.p8w.f4p = y3z;
	}
	b7t.p8w.v0e = p7l(z1e(h1s.o1x));
	b7t.p8w.q5a = b6n(h1s.d7m, 0);
	let q8c = e0q(h1s.q8c);
	if (q8c != v8z.h2n)
	{
		b7t.p8w.type= q8c;
	}
	b7t.p8w.e4p = b6n(h1s.o8o, 0);
	b7t.p8w.n9a = f6n(h1s.s4u);
	b7t.p8w.i5k = f6n(h1s.i2m);
	b7t.p8w.l8h = f6n(h1s.m6x);
	b7t.p8w.q2r = f6n(h1s.b8r);

	
	b7t.l7b.q9c = z1e(h1s.l7b);

	
	b7t.j3j.x9v = z1e(h1s.t3i);
	b7t.j3j.v5r = z1e(h1s.u4e);
	b7t.j3j.i0i = p7w(h1s.a8o);
	b7t.j3j.q6f = b6n(h1s.j0q, 0);
	b7t.j3j.e2f = p7w(h1s.h6j);
	b7t.j3j.b4j = j0g(h1s.q9u);

	
	b7t.x9v.x9v = z1e(h1s.x9v);

	
	b7t.u4v = p7w(h1s.u4v);
	b7t.u6z = z3f(z1e(h1s.u6z));
	b7t.g7c = k1u(z1e(h1s.g7c));
	r9g(z1e(h1s.y0n), b7t);

	
	let p7b = b6n(h1s.p7b, 0);
	b7t.p7b.j5y(p7b);

  
  b7t.id.l4f = h1s.l4f;

	return b7t;
}

function t2u(b7t)
{
	let h1s = new u9p();

	
	h1s.c9q = b7t.p8k.b6b.q9c();
	if (b7t.p8k.q2j.q9c.length)
	{
		h1s.f0f = b7t.p8k.q2j.q9c;
		if (b7t.p8k.q2j.j4t)
		{
			h1s.j4b = b7t.p8k.q2j.j4t;
		}
		if (b7t.p8k.q2j.r2w)
		{
			let q7f = new j6w();
			q7f.r2w = b7t.p8k.q2j.r2w;
			h1s.n4q = z4x(q7f);
		}
		if (b7t.p8k.q2j.s0o)
		{
			h1s.f8s = d5n(b7t.p8k.q2j.s0o);
		}
		if (b7t.p8k.q2j.v0e != y2m.h2n)
		{
			h1s.o2w = v8q(b7t.p8k.q2j.v0e);
		}
	}
	h1s.l3p = n4a(b7t.p8k.q6p);
	h1s.c1s = z5n(b7t.p8k.u7h);
	h1s.x5s = b7t.p8k.x9v;

	
	h1s.t2l = b7t.d9a.b6b.q9c();
	if (b7t.d9a.q2j.q9c.length)
	{
		h1s.n0j = b7t.d9a.q2j.q9c;
		if (b7t.d9a.q2j.j4t)
		{
			h1s.e7o = b7t.d9a.q2j.j4t;
		}
		if (b7t.d9a.q2j.r2w)
		{
			let n6a = new j6w();
			n6a.r2w = b7t.d9a.q2j.r2w;
			h1s.z8a = z4x(n6a);
		}
		if (b7t.d9a.q2j.s0o)
		{
			h1s.o6e = d5n(b7t.d9a.q2j.s0o);
		}
		if (b7t.d9a.q2j.v0e != y2m.h2n)
		{
			h1s.z7x = v8q(b7t.d9a.q2j.v0e);
		}
	}
	h1s.r3s = n4a(b7t.d9a.q6p);
	h1s.d4o = z5n(b7t.d9a.u7h);
	h1s.n5l = b7t.d9a.x9v;

	
	h1s.a5f = b7t.p8w.x9v;
	h1s.p0p = b7t.p8w.l5t;
	h1s.p4h = z4x(b7t.p8w.e4x);
	h1s.r0m = z4x(b7t.p8w.h9j);
	h1s.y3z = x1h(b7t.p8w.f4p);
	h1s.d7m = i4z(b7t.p8w.q5a);
	h1s.o1x = v8q(b7t.p8w.v0e);
	h1s.q8c = g9g(b7t.p8w.type);
	h1s.o8o = i4z(b7t.p8w.e4p);
	h1s.s4u = d5n(b7t.p8w.n9a);
	h1s.i2m = d5n(b7t.p8w.i5k);
	h1s.m6x = d5n(b7t.p8w.l8h);
	h1s.b8r = d5n(b7t.p8w.q2r);

	
	h1s.l7b = b7t.l7b.q9c;

	
	h1s.t3i = b7t.j3j.x9v;
	h1s.u4e = b7t.j3j.v5r;
	h1s.a8o = z4x(b7t.j3j.i0i);
	h1s.j0q = i4z(b7t.j3j.q6f);
	h1s.h6j = z4x(b7t.j3j.e2f);
	h1s.q9u = z2z(b7t.j3j.b4j);

	
	h1s.x9v = b7t.x9v.x9v;

	
	h1s.u4v = z4x(b7t.u4v);
	h1s.u6z = x6d(b7t.u6z);
	h1s.g7c = k9z(b7t.g7c);
	h1s.y0n = c0y(b7t);

	
	h1s.p7b = i4z(b7t.p7b.c5p());

	return h1s;
}

const x0b  					= "White";
const e2e					= "WhiteTeam";
const q2s 				= "WhiteTeamNumber";
const n9f 					= "WhiteTeamYear";
const w4z 				= "WhiteTeamSeason";
const e5p 			= "WhiteTeamCountry";
const w6a 						= "WhiteRating";
const g6w 							= "WhiteTime";
const h4o 							= "WhiteElo";
const z0p  						= "WhiteTitle";
const i0z						= "WhiteCountry";

const i6l						= "Black";
const l0j					= "BlackTeam";
const w0m 				= "BlackTeamNumber";
const d4p 					= "BlackTeamYear";
const g1d 				= "BlackTeamSeason";
const p2h 			= "BlackTeamCountry";
const e4y 						= "BlackRating";
const s3l 							= "BlackTime";
const m8c 							= "BlackElo";
const h9n  						= "BlackTitle";
const v0l						= "BlackCountry";

const j6s 				= "Event";
const z1q				= "Site";
const o1q 			 	= "EventDate";
const w7y 		 	= "EventEndDate";
const a9d 			 	= "EventSpeed";
const k6k 	 	= "EventCategory";
const w7p 		 	= "EventCountry";
const d1y 			 	= "EventType";
const s9u 		 	= "EventRounds";
const x1d 			 	= "EventTeams";
const w8t		 	= "EventComplete";
const n8y 	= "EventThreePoints";
const q0w	= "EventBoardPoints";

const y8y 							= "Annotator";

const x9m 				 		= "SourceTitle";
const e2c 				 		= "Publication";
const j9b		 		= "SourcePublisher";
const g3u		 		= "PublicationDate";
const k7k 				 		= "SourceDate";
const q4x 		= "SourceVersionNumber";
const l1s 	 		= "SourceVersionDate";
const m8s 			 		= "SourceQuality";

const f3q 					 		    = "Title";

const m0l 							 		= "Date";
const m1u 								= "Result";
const l6s 										= "ECO";
const p6q 									= "Round";

const y3f			 							= "Tags";

const f9j 									= "Setup";
const m4t 										= "FEN";
const g1s 							= "PlyCount";

const c3c      							= "GUID";

const r5y = "(";
const t8a   = ")";
const y1t    = "{";

class u4d
{

constructor()
{
  this.e6b = new s7c();
  this.v5h = new x6l();
  this.f3u = new v9v();
  this.i1y = false;
  this.t7b = false;
  this.i6b = false;
  this.w1p = '';
}

}

class b4c
{

constructor(q0d)
{
	this.j3g = new u9p();
	this.o6t = q0d;
	this.d8j = 0;
	this.g9p = '';
	this.o1c = 0;
	this.g9j = 0;
	this.u5u = '';
	this.x3c = 0;
	this.c4b = false;
	this.i4k = '';
	this.x4d = '';
	this.f7i = null;
	this.g9u = new o8k();
	this.l5o = '';
	this.q7a = false;
 	this.i8g = false;
	this.t9q = false;
}

i2x()
{
  this.x3c = 0;
	let c6i = new j0c();
	this.f7i = c6i.y8v;
	try
	{
		this.x4a();
	}
	catch (err)
	{
	}
	c6i.c5y = i7y(this.j3g);
  c6i.j9h = this.x3c;
	return c6i;
}

x4a()
{
	this.c4b = false;
	this.o0h();
	if (this.c4b)
	{
		this.g5u = p2g(this.x4d);
		this.f7i.h1q(this.g5u, 1);
	}
 	this.f1h();
}

w2j()
{
	if (this.o6t.length == 0)
	{
		return false;
	}
	if (this.d8j >= this.o6t.length)
	{
		return false;
	}
	else
	{
		this.g9p = this.o6t[this.d8j];
		this.o1c = this.g9p.length;
		this.g9j = 0;
		this.d8j++;
		return true;
	}
}

o0h()
{
	this.t9q = false;
	this.i8g = false;
	while (true)
	{
		if (!this.w2j())
		{
			return;
		}
		this.q6r();
		if (!this.u9l())
		{
			return;
		}
		this.t8c();
	}
}


z8c(u0c)
{
	let b5c = this.u5u.substr(1, this.u5u.length - 1);
	return b5c.toUpperCase() === u0c.toUpperCase();
}

f1h()
{
 	if (this.u5u.length == 0) return;
	this.q7a = false;

	while (this.u5u[0] == '{')
	{
		let r0s = this.t5q();
    let w7i = new u4d();
		this.y8l(r0s, w7i);
    if (!w7i.e6b.r7x())
		{
			this.f7i.e6j(w7i.e6b);
		}
 		if (!w7i.v5h.r7x())
		{
			this.f7i.w2k(w7i.v5h);
		}
		if (!w7i.f3u.r7x())
		{
			this.f7i.x5k(w7i.f3u);
		}
 		r0s = w7i.w1p.trim();
    if (r0s.length)
    {
      
      
      if (r0s.startsWith("[%a") && r0s.length > 7)
      {
        r0s = r0s.substr(7, r0s.length).trim();
      }
      let j0l = this.f7i.j0l();
      if (j0l.length)
      {
        j0l += ' ';
      }
      j0l += r0s;
      this.f7i.f2o(j0l);
		}
		this.q6r();
		if (this.u5u.length == 0)
		{
			return;
		}
	}
	this.t9b(this.f7i.s3a(), this.f7i.g5u());
}

t9b(d5g, u2v)
{
  let g7d = d5g.o0o();
  let b6i = u2v.o0o();

	let v5c = null;
 	let b6f = new d5f();

	do
	{
		if (this.u5u == r5y)
		{
			if (!v5c)
			{
				throw "error";
			}
			if (!this.q6r())
			{
				throw "error";
			}

 			b6i.x7e(g7d.z0x.p7x());
			b6i.l4r(b6f);
			this.f7i.x7e(g7d); 
      this.t9b(g7d, b6i);
			this.f7i.j7z(g7d); 
			b6i.j7z(g7d.z0x.p7x());

			while (this.q6r())
			{
				if (this.u5u != r5y)
				{
					break;
				}
				if (!this.q6r())
				{
					throw "error";
				}
        b6i.x7e(g7d.z0x.p7x());
				b6i.l4r(b6f);
				this.f7i.x7e(g7d); 
				this.t9b(g7d, b6i);
				this.f7i.j7z(g7d);  
				b6i.j7z(g7d.z0x.p7x());
			}
		}

		if (this.u5u == t8a)
		{
			break;
		}

		if (
			this.u5u == "1-0" ||
			this.u5u == "2-0" ||
			this.u5u == "0-1" ||
			this.u5u == "0-2" ||
			this.u5u == "1/2-1/2" ||
			this.u5u == "1-1" ||
			this.u5u == "*" ||
			this.u5u == "**" ||
			this.u5u == "-*" ||
			this.u5u == "1-0*" ||
			this.u5u == "2-0*" ||
			this.u5u == "0-1*" ||
			this.u5u == "0-2*" ||
			this.u5u == "1/2-1/2*" ||
			this.u5u == "1-1*" ||
			this.u5u == "2-00*" ||
			this.u5u == "00-2*")
			break;

		if (this.u5u[0] == '$')
		{
			if (!v5c)
			{
				throw "error";
			}
			let t2c = h3l(this.u5u);
			if (t2c != e9u.h2n)
			{
				v5c.c4e(t2c);
				continue;
			}
			let style = x9g(this.u5u);
			if (style != q5f.h2n)
			{
				v5c.b7c(style);
				continue;
			}
			let value = f2l(this.u5u);
			if (value != o9q.h2n)
			{
				v5c.i8l(value);
				continue;
			}
			let z4y = j0e(this.u5u);
			if (z4y != c2u.h2n)
			{
				v5c.l7d(z4y);
				continue;
			}
			continue;
		}
		if (this.u5u[0] == '{')
		{
			let r0s = this.t5q();
      let w7i = new u4d();
  		this.y8l(r0s, w7i);
      if (!w7i.e6b.r7x())
      {
		  	if (v5c)
			  {
				  v5c.u6i(w7i.e6b);
				}
			}
   		if (!w7i.v5h.r7x())
      {
				if (v5c)
				{
					v5c.z3n(w7i.v5h);
				}
			}
   		if (!w7i.f3u.r7x())
      {
				if (v5c)
				{
					v5c.p8l(w7i.f3u);
				}
			}
      if (w7i.t7b)
      {
				if (v5c)
				{
					v5c.l2z();
				}
			}
      if (w7i.i6b)
      {
				if (v5c)
				{
					v5c.a4l();
				}
			}
   		r0s = w7i.w1p.trim();
      if (!r0s.length)
      {
        continue;
      }
			if (v5c)
			{
        let x4s = v5c.x4s();
        if (x4s.length)
        {
          x4s += ' ';
        }
        x4s += r0s;
				v5c.k2y(x4s);
			}
			else
			{
        if (this.l5o.length)
        {
   				this.l5o += ' ';
        }
				this.l5o += r0s;
				this.q7a = true;
			}
			continue;
		}
		if (!this.t1y())
		{
			continue;
		}
		let t3g = false;
		if (this.u5u[this.u5u.length] == '*')
		{
			this.u5u = this.u5u.substr(0, this.u5u.length - 1);
			t3g = true;
		}
 		let v8b = this.w4g(this.u5u);
    let p7x = l3c(b6i, this.u5u);
 		b6f = b6i.b6f();
		b6i.j7z(p7x);
		let z0x = l7z(p7x);
    z0x.b7c(v8b);
    this.f7i.a6c(g7d, z0x);
		v5c = g7d.z0x;
		if (this.q7a)
		{
			v5c.b1f(this.l5o);
			this.q7a = false;
      this.l5o = '';
		}
		if (t3g)
		{
			break;
		}
	} while (this.q6r());
}

w4g(b5c)
{
	if (b5c.endsWith("??"))
	{
		b5c = b5c.subString(0, b5c.length-2);
		return q5f.x9n;
	}
	else if (b5c.endsWith("!!"))
	{
		b5c = b5c.subString(0, b5c.length-2);
		return q5f.a1v;
	}
	else if (b5c.endsWith("?!"))
	{
		b5c = b5c.subString(0, b5c.length-2);
		return q5f.m2k;
	}
	else if (b5c.endsWith("!?"))
	{
		b5c = b5c.subString(0, b5c.length-2);
		return q5f.a4g;
	}
	else if (b5c.endsWith("?"))
	{
		b5c = b5c.subString(0, b5c.length-1);
		return q5f.l7o;
	}
	else if (b5c.endsWith("!"))
	{
		b5c = b5c.subString(0, b5c.length-1);
		return q5f.h9g;
	}
	else
	{
		return q5f.h2n;
	}
}

t1y()
{
	let n3h = this.u5u.length;
	let g7d = -1;
	for (let i = 0; i < n3h; i++)
	{
		if (this.u5u[i] == '.')
		{
			g7d = i;
		}
	}
	if (g7d != -1)
	{
		this.u5u = this.u5u.substr(g7d + 1 , n3h);
	}
	return this.u5u.length != 0;
}

q6r()
{
	this.u5u = "";
	let b9q = '';
	let index = 0;
	let n3h = 0;
	while (true)
	{
		let b3p = 0;
		if (this.g9j < this.o1c)
		{
			b3p = this.g9p[this.g9j];
		}
		else
		{
			b3p = 0;
		}
		if (!b3p)
		{
			if (n3h)
			{
				break;
			}
			if (!this.w2j())
			{
				return false;
			}
			continue;
		}
		if (b3p == ';')
		{
			if (!this.w2j())
			{
				return false;
			}
			continue;
		}
		if (b3p == '(')
		{
			if (n3h)
			{
				break;
			}
			else
			{
				this.g9j++;
				this.u5u = r5y;
				return true;
			}
		}
		if (b3p == ')')
		{
			if (n3h)
			{
				break;
			}
			else
			{
				this.g9j++;
				this.u5u = t8a;
				return true;
			}
		}
		if (b3p == '{')
		{
			if (n3h)
			{
				break;
			}
			else
			{
				this.g9j++;
				this.u5u = y1t;
				return true;
			}
		}
		if (b3p == ' ' || b3p == '\r' || b3p == '\n')
		{
			if (n3h)
			{
				this.g9j++;
				break;
			}
			else
			{
				this.g9j++;
				continue;
			}
		}
		b9q += b3p;
		index++;
		n3h++;
		this.g9j++;
	}
	if (index)
	{
		this.u5u += b9q;
	}
	return this.u5u.length != 0;
}

t5q()
{
	let b5c = '';
	let b9q = '';
	let index = 0;
	let h1j = 0;
	while (true)
	{
		let b3p = 0;
		if (this.g9j < this.o1c)
		{
			b3p = this.g9p[this.g9j];
		}
		else
		{
			b3p = 0;
		}
		if (!b3p)
		{
			if (!this.w2j())
			{
				break;
			}
			if (index > 0)
			{
				b9q += ' '; 
				index++;
			}
			continue;
		}
		if (b3p == '{')
		{
			h1j++;
		}
		if (b3p == '}')
		{
			if (h1j)
			{
				h1j--;
			}
			else
			{
				this.g9j++;
				break;
			}
		}
		b9q += b3p;
		index++;
		this.g9j++;
	}
	if (index)
	{
		b5c += b9q;
	}
	return b5c.trim();
}

g7b()
{
	this.i4k = "";

	let j3r = 0;
	let n3h = this.g9p.length;
	for (let i = n3h - 1; i >= 0; i--)
	{
		if (this.g9p[i] == ']')
		{
			j3r = i;
			break;
		}
	}
	let index = 0;
	let e9k = false;
	let b9q = '';
	while (true)
	{
		let b3p = 0;
		if (this.g9j < this.o1c)
		{
			b3p = this.g9p[this.g9j];
		}
		else
		{
			b3p = 0;
		}
		if (!b3p)
		{
			if (!this.w2j())
			{
				break;
			}
			continue;
		}
		if (b3p == '\"')
		{
			e9k = true;
			this.g9j++;
			continue;
		}
		if (b3p == ']')
		{
			if (this.g9j == j3r)
			{
				this.g9j++;
				break;
			}
		}
		if (e9k)
		{
			b9q += b3p;
			index++;
		}
		this.g9j++;
	}
	if (index)
	{
		this.i4k += b9q;
	}
}

u9l()
{
	if (this.u5u.length == 0)
	{
		return false;
	}
	if (this.u5u[0] != '[')
	{
		return false;
	}
	
	let index = this.g9j;
	let i8y = false;
	while (index < this.o1c)
	{
		let b3p = this.g9p[index++];
		if (b3p == '\"' && this.g9p[index] == ']')
		{
			index++;
			i8y = true;
			continue;
		}
		if (b3p == '\r' || b3p == '\n')
		{
			break;
		}
		if (i8y)
		{
			i8y = false;
			break;
		}
	}
	return i8y;
}

t8c()
{
	
	if (this.z8c(x0b))
	{
		this.g7b();
		this.j3g.c9q = this.i4k;
		return;
	}
	if (this.z8c(e2e))
	{
		this.g7b();
		this.j3g.f0f = this.i4k;
		return;
	}
	if (this.z8c(q2s))
	{
		this.g7b();
		this.j3g.j4b = this.i4k;
		return;
	}
	if (this.z8c(n9f))
	{
		this.g7b();
		this.j3g.n4q = this.i4k;
		return;
	}
	if (this.z8c(w4z))
	{
		this.g7b();
		this.j3g.f8s = this.i4k;
		return;
	}
	if (this.z8c(e5p))
	{
		this.g7b();
		this.j3g.o2w = this.i4k;
		return;
	}
	if (this.z8c(h4o) || this.z8c(w6a))
	{
		this.g7b();
		this.j3g.l3p = this.i4k;
		return;
	}
	if (this.z8c(g6w))
	{
		this.g7b();
		this.j3g.c1s = this.i4k;
		return;
	}
	if (this.z8c(z0p))
	{
		this.g7b();
		this.j3g.x5s = this.i4k;
		return;
	}
	if (this.z8c(i0z))
	{
		this.g7b();
		this.j3g.t9h = this.i4k;
		return;
	}

	
	if (this.z8c(i6l))
	{
		this.g7b();
		this.j3g.t2l = this.i4k;
		return;
	}
	if (this.z8c(l0j))
	{
		this.g7b();
		this.j3g.n0j = this.i4k;
		return;
	}
	if (this.z8c(w0m))
	{
		this.g7b();
		this.j3g.e7o = this.i4k;
		return;
	}
	if (this.z8c(d4p))
	{
		this.g7b();
		this.j3g.z8a = this.i4k;
		return;
	}
	if (this.z8c(g1d))
	{
		this.g7b();
		this.j3g.o6e = this.i4k;
		return;
	}
	if (this.z8c(p2h))
	{
		this.g7b();
		this.j3g.z7x = this.i4k;
		return;
	}
	if (this.z8c(m8c) || this.z8c(e4y))
	{
		this.g7b();
		this.j3g.r3s = this.i4k;
		return;
	}
	if (this.z8c(s3l))
	{
		this.g7b();
		this.j3g.d4o = this.i4k;
		return;
	}
	if (this.z8c(h9n))
	{
		this.g7b();
		this.j3g.n5l = this.i4k;
		return;
	}
	if (this.z8c(v0l))
	{
		this.g7b();
		this.j3g.e7e = this.i4k;
		return;
	}

	
	if (this.z8c(j6s))
	{
		this.g7b();
		this.j3g.a5f = this.i4k;
		return;
	}
	if (this.z8c(z1q))
	{
		this.g7b();
		this.j3g.p0p = this.i4k;
		return;
	}
	if (this.z8c(o1q))
	{
		this.g7b();
		this.j3g.p4h = this.i4k;
		return;
	}
	if (this.z8c(w7y))
	{
		this.g7b();
		this.j3g.r0m = this.i4k;
		return;
	}
	if (this.z8c(a9d))
	{
		this.g7b();
		this.j3g.y3z = this.i4k;
		return;
	}
	if (this.z8c(k6k))
	{
		this.g7b();
		this.j3g.d7m = this.i4k;
		return;
	}
	if (this.z8c(w7p))
	{
		this.g7b();
		this.j3g.o1x = this.i4k;
		return;
	}
	if (this.z8c(d1y))
	{
		this.g7b();
		this.j3g.q8c = this.i4k;
		return;
	}
	if (this.z8c(s9u))
	{
		this.g7b();
		this.j3g.o8o = this.i4k;
		return;
	}
	if (this.z8c(x1d))
	{
		this.g7b();
		this.j3g.s4u = this.i4k;
		return;
	}
	if (this.z8c(w8t))
	{
		this.g7b();
		this.j3g.i2m = this.i4k;
		return;
	}
	if (this.z8c(n8y))
	{
		this.g7b();
		this.j3g.m6x = this.i4k;
		return;
	}
	if (this.z8c(q0w))
	{
		this.g7b();
		this.j3g.b8r = this.i4k;
		return;
	}

	
	if (this.z8c(y8y))
	{
		this.g7b();
		this.j3g.l7b = this.i4k;
		return;
	}

	
	if (this.z8c(x9m))
	{
		this.g7b();
		this.j3g.t3i = this.i4k;
		return;
	}
	if (this.z8c(e2c))
	{
		this.g7b();
		this.j3g.t3i = this.i4k;
		return;
	}
	if (this.z8c(j9b))
	{
		this.g7b();
		this.j3g.u4e = this.i4k;
		return;
	}
	if (this.z8c(k7k))
	{
		this.g7b();
		this.j3g.a8o = this.i4k;
		return;
	}
	if (this.z8c(g3u))
	{
		this.g7b();
		this.j3g.a8o = this.i4k;
		return;
	}
	if (this.z8c(q4x))
	{
		this.g7b();
		this.j3g.j0q = this.i4k;
		return;
	}
	if (this.z8c(l1s))
	{
		this.g7b();
		this.j3g.h6j = this.i4k;
		return;
	}
	if (this.z8c(m8s))
	{
		this.g7b();
		this.j3g.q9u = this.i4k;
		return;
	}

	
	if (this.z8c(f3q))
	{
		this.g7b();
		this.j3g.x9v = this.i4k;
		return;
	}

	
	if (this.z8c(m0l))
	{
		this.g7b();
		this.j3g.u4v = this.i4k;
		return;
	}
	if (this.z8c(m1u))
	{
		this.g7b();
		this.j3g.u6z = this.i4k;
		return;
	}
	if (this.z8c(l6s))
	{
		this.g7b();
		this.j3g.g7c = this.i4k;
		return;
	}
	if (this.z8c(p6q))
	{
		this.g7b();
		this.j3g.y0n = this.i4k;
		return;
	}

	
	if (this.z8c(y3f))
	{
		this.g7b();
		this.j3g.p7b = this.i4k;
		return;
	}

	
	if (this.z8c(f9j))
	{
		this.g7b();
		return;
	}
	if (this.z8c(m4t))
	{
		this.g7b();
		if (this.i4k.length == 0 || this.i4k == "?")
		{
			return;
		}
		this.c4b = true;
		this.x4d = this.i4k;
		return;
	}
	if (this.z8c(g1s))
	{
		this.g7b();
		this.x3c = k0x(this.i4k, 0);
		return;
	}
  
 	if (this.z8c(c3c))
	{
		this.g7b();
		this.j3g.l4f = this.i4k;
		return;
	}

}

c2b(r0s)
{
	let y2n = new s7c();
	let b5c = r0s.substr(6, r0s.length - 6);
	let z0h = b5c.split(",");
	for (const s of z0h)
	{
		if (s.length < 5)
		{
			continue;
		}
		let e7g = h7n(s.substr(1, 2));
		let x7z = h7n(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let r4h = p3a(e7g, x7z, c3j.j3b);
			y2n.add(r4h);
		}
		else if (s[0] == 'G')
		{
			let r4h = p3a(e7g, x7z, c3j.l2i);
			y2n.add(r4h);
		}
		else if (s[0] == 'Y')
		{
			let r4h = p3a(e7g, x7z, c3j.h8d);
			y2n.add(r4h);
		}
	}
	return y2n;
}

u4a(r0s)
{
	let a0x = new x6l();
	let b5c = r0s.substr(6, r0s.length - 6);
	let z0h = b5c.split(",");
	for (const s of z0h)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let d9d = h7n(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let u0y = a0s(d9d, c7m.y7r);
			a0x.add(u0y);
		}
		else if (s[0] == 'G')
		{
      let u0y = a0s(d9d, c7m.l4s);
			a0x.add(u0y);
		}
		else if (s[0] == 'Y')
		{
      let u0y = a0s(d9d, c7m.q8r);
			a0x.add(u0y);
		}
	}
	return a0x;
}

t3o(r0s)
{
	let b5c = r0s.substr(6, r0s.length - 6);
	let g7d = b5c.indexOf("]");
	if (g7d != -1)
	{
		let f3u = new v9v();
		let value = k0x(b5c.substr(0, g7d), 0);
		f3u.j5y(value);
		return f3u;
	}
	else
	{
		return new v9v();
	}
}


y8l(r0s, w7i)
{
	if (
		r0s.startsWith("[%cal") ||
    r0s.startsWith("[%csb") ||
		r0s.startsWith("[%csl") ||
		r0s.startsWith("[%mdl") ||
		r0s.startsWith("[%evp") ||
		r0s.startsWith("[%eval") ||
		r0s.startsWith("[%emt") ||
		r0s.startsWith("[%tqu") ||
		r0s.startsWith("[%tqu") ||
		r0s.startsWith("[%pws") ||
		r0s.startsWith("[%pth") ||
		r0s.startsWith("[%eog"))
	{
		let r3k = 0;
		{
     	let o8c = r0s.indexOf("[%cal");
			if (o8c != -1)
			{
        let h7b = r0s.indexOf("]", o8c);
				if (h7b != -1)
				{
     			let g6i = r0s.substring(o8c, h7b + 1);
					w7i.e6b = this.c2b(g6i).o0o();
					if (h7b > r3k) r3k = h7b;
				}
			}
		}
		{
     	let o8c = r0s.indexOf("[%csb");
   		if (o8c != -1)
			{
        let h7b = r0s.indexOf("]", o8c);
				if (h7b != -1)
				{
          let i4x = r0s.substring(o8c, h7b + 1);
					w7i.v5h = this.u4a(i4x).o0o();
					if (h7b > r3k) r3k = h7b;
				}
			}
		}
		{
      let o8c = r0s.indexOf("[%csl");
			if (o8c != -1)
			{
        let h7b = r0s.indexOf("]", o8c);
				if (h7b != -1)
				{
          let i4x = r0s.substring(o8c, h7b + 1);
					w7i.v5h = this.u4a(i4x).o0o();
					if (h7b > r3k) r3k = h7b;
				}
			}
		}
		{
      let o8c = r0s.indexOf("[%mdl");
			if (o8c != -1)
			{
        let h7b = r0s.indexOf("]", o8c);
				if (h7b != -1)
				{
          let i3l = r0s.substring(o8c, h7b + 1);
					w7i.f3u = this.t3o(i3l).o0o();
					if (h7b > r3k) r3k = h7b;
				}
			}
		}
		{
      let o8c = r0s.indexOf("[%evp");
			if (o8c != -1)
			{
        let h7b = r0s.indexOf("]", o8c);
				if (h7b != -1)
				{
					if (h7b > r3k) r3k = h7b;
				}
			}
		}
		{
      let o8c = r0s.indexOf("[%eval");
			if (o8c != -1)
			{
        let h7b = r0s.indexOf("]", o8c);
				if (h7b != -1)
				{
					if (h7b > r3k) r3k = h7b;
				}
			}
		}
		{
      let o8c = r0s.indexOf("[%emt");
			if (o8c = -1)
			{
        let h7b = r0s.indexOf("]", o8c);
				if (h7b != -1)
				{
					if (h7b > r3k) r3k = h7b;
				}
			}
		}
		{
      let o8c = r0s.indexOf("[%tqu");
			if (o8c != -1)
			{
        let h7b = r0s.indexOf("]", o8c);
				if (h7b != -1)
				{
					if (h7b > r3k) r3k = h7b;
				}
			}
		}
		{
      let o8c = r0s.indexOf("[%pws");
			if (o8c != -1)
			{
        let h7b = r0s.indexOf("]", o8c);
				if (h7b != -1)
				{
          w7i.i1y = true;
					if (h7b > r3k) r3k = h7b;
				}
			}
		}
		{
      let o8c = r0s.indexOf("[%pth");
			if (o8c != -1)
			{
        let h7b = r0s.indexOf("]", o8c);
				if (h7b != -1)
				{
          w7i.t7b = true;
					if (h7b > r3k) r3k = h7b;
				}
			}
		}
		{
      let o8c = r0s.indexOf("[%eog");
			if (o8c != -1)
			{
        let h7b = r0s.indexOf("]", o8c);
				if (h7b != -1)
				{
					w7i.i6b = true; 
					if (h7b > r3k) r3k = h7b;
				}
			}
		}
    w7i.w1p = r0s.substring(r3k + 1);
	}
	else
	{
		w7i.w1p = r0s;
	}
}

}

class s5c
{

constructor()
{
  this.j9h = 0;
	this.c5y = new u9p();
	this.y8v = new o6j();
}

o0o()
{
	let q8t = new s5c();
  q8t.j9h = this.j9h;
	q8t.c5y = this.c5y.o0o();
	q8t.y8v = this.y8v.o0o();
	return q8t;
}

}

class u9p
{

constructor()
{
	this.c9q = '';
	this.f0f = '';
	this.j4b = '';
	this.n4q = '';
	this.f8s = '';
	this.o2w = '';
	this.l3p = '';
	this.c1s = '';
	this.x5s = '';
  this.t9h = '';
	this.t2l = '';
	this.n0j = '';
	this.e7o = '';
	this.z8a = '';
	this.o6e = '';
	this.z7x = '';
	this.r3s = '';
	this.d4o = '';
	this.n5l = '';
  this.e7e = '';
	this.a5f = '';
	this.p0p = '';
	this.p4h = '';
	this.r0m = '';
	this.y3z = '';
	this.d7m = '';
	this.o1x = '';
	this.q8c = '';
	this.o8o = '';
	this.s4u = '';
	this.i2m = '';
	this.m6x = '';
	this.b8r = '';
	this.l7b = '';
	this.t3i = '';
	this.u4e = '';
	this.a8o = '';
	this.j0q = '';
	this.h6j = '';
	this.q9u = '';
	this.x9v = '';
	this.u4v = '';
	this.u6z = '';
	this.g7c = '';
	this.y0n = '';
	this.p7b = '';
  this.l4f = '';
}

o0o()
{
	let q0t = new u9p();

	q0t.c9q = this.c9q;
	q0t.f0f = this.f0f;
	q0t.j4b = this.j4b;
	q0t.n4q = this.n4q;
	q0t.f8s = this.f8s;
	q0t.o2w = this.o2w;
	q0t.l3p = this.l3p;
	q0t.c1s = this.c1s;
	q0t.x5s = this.x5s;
	q0t.t9h = this.t9h;

	q0t.t2l = this.t2l;
	q0t.n0j = this.n0j;
	q0t.e7o = this.e7o;
	q0t.z8a = this.z8a;
	q0t.o6e = this.o6e;
	q0t.z7x = this.z7x;
	q0t.r3s = this.r3s;
	q0t.d4o = this.d4o;
	q0t.n5l = this.n5l;
	q0t.e7e = this.e7e;

	q0t.a5f = this.a5f;
	q0t.p0p = this.p0p;
	q0t.p4h = this.p4h;
	q0t.r0m = this.r0m;
	q0t.y3z = this.y3z;
	q0t.d7m = this.d7m;
	q0t.o1x = this.o1x;
	q0t.q8c = this.q8c;
	q0t.o8o = this.o8o;
	q0t.s4u = this.s4u;
	q0t.i2m = this.i2m;
	q0t.m6x = this.m6x;
	q0t.b8r = this.b8r;

	q0t.l7b = this.l7b;

	q0t.t3i = this.t3i;
	q0t.u4e = this.u4e;
	q0t.a8o = this.a8o;
	q0t.j0q = this.j0q;
	q0t.h6j = this.h6j;
	q0t.q9u = this.q9u;

	q0t.x9v = this.x9v;

	q0t.u4v = this.u4v;
	q0t.u6z = this.u6z;
	q0t.g7c = this.g7c;
	q0t.y0n = this.y0n;

	q0t.p7b = this.p7b;
 	q0t.l4f = this.l4f;

	return q0t;
}

}


const x2b =
[
		[ y2m.h2n, 				  									"",											            "", 																	"",   ""    ],
		[ y2m.u2k, 										  "Afghanistan",											"Afghanistan", 												"af", "AFG" ],
		[ y2m.v9t, 									 	"AlandIslands",										  "Aland", 															"ax", "ALA" ],
		[ y2m.u2j,  											 	"Albania",													"Albania", 														"al", "ALB" ],
		[ y2m.b5z,  											 	"Algeria",													"Algeria", 														"dz", "DZA" ],
		[ y2m.v1n,  								 	"AmericanSamoa",										"American Samoa", 										"as", "ASM" ],
		[ y2m.q8j,  											 	"Andorra",													"Andorra", 														"ad", "AND" ],
		[ y2m.v7h,                           "Angola",													  "Angola", 														"ao", "AGO" ],
		[ y2m.z8s,  											  "Anguilla",												  "Anguilla", 													"ai", "AIA" ],
		[ y2m.o8n,  										  "Antarctica",											  "Antarctica", 												"aq", "ATA" ],
		[ y2m.l2q,  								  "AntiguaBarbuda",									  "Antigua & Barbuda", 									"ag", "ATG" ],
		[ y2m.c0b,  										 	"Argentina",												"Argentina", 													"ar", "ARG" ],
		[ y2m.v0m,  											 	"Armenia",													"Armenia",														"am", "ARM" ],
		[ y2m.a1b,  												 	"Aruba",														"Aruba",															"aw", "ABW" ],
		[ y2m.h1d,  										 	"Australia",												"Australia",													"au", "AUS" ],
		[ y2m.e6v,  											 	"Austria",													"Austria",											 			"at", "AUT" ],
		[ y2m.r6n,  										  "Azerbaijan",											  "Azerbaijan",													"az", "AZE" ],
		[ y2m.l2x,  											 	"Bahamas",													"Bahamas",														"bs", "BHS" ],
		[ y2m.b2u,  											 	"Bahrain",													"Bahrain",														"bh", "BHR" ],
		[ y2m.n3k,  										  "Bangladesh",											  "Bangladesh",													"bd", "BGD" ],
		[ y2m.y7x,  											  "Barbados",												  "Barbados",														"bb", "BRB" ],
		[ y2m.z4v,  								 	"BasqueCountry",	 									"Basque Country",     								"x1", "XX1" ], 
		[ y2m.j0s,  											 	"Belarus",													"Belarus",														"by", "BLR" ],
		[ y2m.i6o,  											 	"Belgium",													"Belgium",														"be", "BEL" ],
		[ y2m.y5m,  												  "Belize",													  "Belize",															"bz", "BLZ" ],
		[ y2m.j7l,  												 	"Benin",														"Benin",															"bj", "BEN" ],
		[ y2m.t7q,  											 	"Bermuda",													"Bermuda",														"bm", "BMU" ],
		[ y2m.o3k,  												  "Bhutan",													  "Bhutan",															"bt", "BTN" ],
		[ y2m.x7v,  												"Bolivia",													"Bolivia",														"bo", "BOL" ],
		[ y2m.f5s,  						  "BosniaHerzegovina",       				  "Bosnia & Herzegovina", 							"ba", "BIH" ], 
		[ y2m.w4r,  											  "Botswana",                      	  "Botswana",														"bw", "BWA" ],
		[ y2m.t2a,  									  "BouvetIsland",                 		"Bouvet",															"bv", "BVT" ],
		[ y2m.b6d,  												  "Brazil",                        	  "Brazil",															"br", "BRA" ],
		[ y2m.c9t,  	 	"BritishIndianOceanTerritory",			"British Indian Ocean Territory", 		"io", "IOT" ],
		[ y2m.f7k, 							 	"BruneiDarussalam",								  "Brunei",															"bn", "BRN" ], 
		[ y2m.q1h,  											  "Bulgaria",												  "Bulgaria", 													"bg", "BGR" ],
		[ y2m.x2z, 										  "BurkinaFaso",											"Burkina Faso",												"bf", "BFA" ],
		[ y2m.s8i,  											 	"Burundi",													"Burundi",														"bi", "BDI" ],
		[ y2m.y6a,  											  "Cambodia",												  "Cambodja",														"kh", "KHM" ],
		[ y2m.g5o,  											  "Cameroon",												  "Cameroon",														"cm", "CMR" ],
		[ y2m.x5m,  												  "Canada",													  "Canada",															"ca", "CAN" ],
		[ y2m.c8h,  										  "CapeVerde",												"Cape Verde",													"cv", "CPV" ], 
		[ y2m.p4u,  										  "Catalonia",												"Catalonia",													"x2", "XX2" ], 
		[ y2m.e6r,  								  "CaymanIslands",										"Cayman Islands",											"ky", "CYM" ],
		[ y2m.y7p,  				  "CentralAfricanRepublic",					  "Central African Republic",						"cf", "CAF" ],
		[ y2m.e6q,  													  "Chad",														  "Chad",																"td", "TCD" ],
		[ y2m.o1h,  												 	"Chile",														"Chile",															"cl", "CHL" ],
		[ y2m.s1v,  												 	"China",														"China",															"cn", "CHN" ],
		[ y2m.h2w,  							 	"ChristmasIsland",									"Christmas",													"cx", "CXR" ],
		[ y2m.q6z,  					 	"CocosKeelingIslands",							"Cocos (Keeling)",										"cc", "CCK" ], 
		[ y2m.r8e,  											  "Colombia",												  "Colombia",														"co", "COL" ],
		[ y2m.p5j,  											 	"Comoros",													"Comoros",														"km", "COM" ],
		[ y2m.c5v,  												 	"Congo",														"Congo-Brazzaville", 						    	"cg", "COG" ],
		[ y2m.r0q,  			 	"CongoDemocraticRepublic",					"Congo-Kinshasa(Zaire)",						  "cd", "COD" ],
		[ y2m.e9r,  									 	"CookIslands",											"Cook Islands",											 	"ck", "COK" ],
		[ y2m.z7g,  											"CostaRica",												"Costa Rica",												 	"cr", "CRI" ],
		[ y2m.i9f,  												"Croatia",													"Croatia",														"hr", "HRV" ],
		[ y2m.z5g,  													  "Cuba",														  "Cuba",															 	"cu", "CUB" ],
		[ y2m.w3r,  												"Curacao",													"Curacao",											  		"cw", "CUW" ],
		[ y2m.q0q,  												  "Cyprus",													  "Cyprus",														 	"cy", "CYP" ],
		[ y2m.l1o,  									      "Czechia",										      "Czech Republic", 										"cz", "CZE" ],
		[ y2m.y2h,  										  "CoteIvoire",	   					 				  "Cote d'Ivoire",											"ci", "CIV" ],
		[ y2m.m9b,  												"Denmark",													"Denmark",													  "dk", "DNK" ],
		[ y2m.s1m,  											  "Djibouti",												  "Djibouti",													 	"dj", "DJI" ],
		[ y2m.u1y,  											  "Dominica",												  "Dominica",													 	"dm", "DMA" ],
		[ y2m.h7o,  							"DominicanRepublic",								"Dominican Republic",								 	"do", "DOM" ],
		[ y2m.o7v,  												"Ecuador",													"Ecuador",													 	"ec", "ECU" ],
		[ y2m.q2o,  													"Egypt",														"Egypt", 														 	"eg", "EGY" ],
		[ y2m.r6q,  										  "ElSalvador",											  "El Salvador",												"sv", "SLV" ],
		[ y2m.h8h,  												"England",													"England",														"x3", "GBR" ],
		[ y2m.o6w,  							  "EquatorialGuinea",								  "Equatorial Guinea",									"gq", "GNQ" ], 
		[ y2m.h5p,  												"Eritrea",													"Eritrea",														"er", "ERI" ],
		[ y2m.u3j,  												"Estonia",													"Estonia",														"ee", "EST" ],
		[ y2m.p3c,  											  "Ethiopia",												  "Ethiopia",													 	"et", "ETH" ],
		[ y2m.t7e,  								"FalklandIslands",									"England",														"fk", "FLK" ], 
		[ y2m.l9f,  									  "FaroeIslands",										  "Faroes",														 	"fo", "FRO" ],
		[ y2m.i0h,  													  "Fiji",														  "Fiji",															 	"fj", "FJI" ],
		[ y2m.b8f,  												"Finland",													"Finland",														"fi", "FIN" ],
		[ y2m.t1c,  												  "France",													  "France",														 	"fr", "FRA" ],
		[ y2m.o9z,  									  "FrenchGuiana",										  "Guyana", 														"gf", "GUF" ], 
		[ y2m.h2l,  								"FrenchPolynesia",									"Tahiti(French Polinesia)", 					"pf", "PYF" ], 
		[ y2m.h5j,  			"FrenchSouthernTerritories",				"French Southern and Antarctic Lands","tf", "ATF" ],
		[ y2m.m7r,  													"Gabon",														"Gabon",															"ga", "GAB" ], 
		[ y2m.x1e,  												  "Gambia",													  "Gambia",															"gm", "GMB" ],
		[ y2m.w5u,  												"Georgia",													"Georgia",														"ge", "GEO" ],
		[ y2m.r3g,  												"Germany",													"Germany",														"de", "DEU" ],
		[ y2m.k6r, 													  "Ghana",														"Ghana",															"gh", "GHA" ],
		[ y2m.r7w,  											"Gibraltar",												"Gibraltar",													"gi", "GIB" ],
		[ y2m.b8p,  												  "Greece",													  "Greece",															"gr", "GRC" ],
		[ y2m.k6j,  											"Greenland",												"Greenland",													"gl", "GRL" ],
		[ y2m.x8q,  												"Grenada",													"Grenada",														"gd", "GRD" ],
		[ y2m.z4c,  										  "Guadeloupe",											  "Guadeloupe",													"gp", "GLP" ],
		[ y2m.v8d,  													  "Guam",														  "Guam",																"gu", "GUM" ],
		[ y2m.e7m,  											"Guatemala",												"Guatemala",													"gt", "GTM" ],
		[ y2m.f1k,  											  "Guernsey",												  "Guernsey",														"gg", "GGY" ], 
		[ y2m.v0j,  												  "Guinea",													  "Guinea",															"gn", "GIN" ],
		[ y2m.o7o,  									  "GuineaBissau",										  "Guinea-Bissau",											"gw", "GNB" ],
		[ y2m.j5x,  												  "Guyana",													  "Guyana",															"gy", "GUY" ],
		[ y2m.j0x,  													"Haiti",														"Haiti",															"ht", "HTI" ],
		[ y2m.l9m, 			"HeardIslandMcDonaldIslands", 			"Australia",   									  		"hm", "HMD" ],
		[ y2m.i2q,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ y2m.n4j,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ y2m.o0s,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ y2m.p2y,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ y2m.l2o,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ y2m.g5t,  												 	"India",														"India",															"in", "IND" ],
		[ y2m.s4j,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ y2m.q0r,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ y2m.e2m,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ y2m.m9k,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ y2m.l1h,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ y2m.z6a,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ y2m.k0m,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ y2m.f8a,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ y2m.u6v,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], 
		[ y2m.s5m,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ y2m.t7l,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ y2m.d8l,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ y2m.v4u,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ y2m.m1l,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ y2m.f9a,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ y2m.v5q,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], 
		[ y2m.l5k,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], 
		[ y2m.u0j,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ y2m.g6q,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ y2m.h0q,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ y2m.s3u,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ y2m.r1l, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ y2m.n7v,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ y2m.a7a, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ y2m.i3x,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ y2m.a7c,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ y2m.k2b,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ y2m.q7b,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ y2m.c8t,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ y2m.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ y2m.g5y,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ y2m.e1k,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ y2m.v1d,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ y2m.o5h,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ y2m.o2k,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ y2m.r9w, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ y2m.v0g,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ y2m.e2r,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ y2m.q7w,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ y2m.j8h,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ y2m.d4k,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ y2m.m9t,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ y2m.m7s,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ y2m.q4k,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ y2m.h8n,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ y2m.w5o,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ y2m.j7x,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ y2m.w3g,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ y2m.k7f,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ y2m.w2v,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ y2m.j0j,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ y2m.a3h, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ y2m.x6w,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ y2m.y6k,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ y2m.n0o,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ y2m.t9d,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ y2m.t1z, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ y2m.i2y,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ y2m.j7i,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ y2m.f7z,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ y2m.p4e,  													"Niger",														"Niger",															"ne", "NER" ],
		[ y2m.h3t,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ y2m.g9x,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ y2m.k1s,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ y2m.p8a,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], 
		[ y2m.e6h,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ y2m.s1t,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ y2m.t5r,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ y2m.s6y,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ y2m.r8h,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ y2m.q9a,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ y2m.v5t,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ y2m.p4t,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ y2m.x7d,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ y2m.r5k,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ y2m.d7r,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ y2m.p6u,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ y2m.l6q,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ y2m.a4p,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ y2m.x0l,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ y2m.t0l,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ y2m.c3f,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ y2m.v7w,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ y2m.y5w,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ y2m.b2e,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ y2m.s4l,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ y2m.q8i,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], 
		[ y2m.n4z,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], 
		[ y2m.y7q, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], 
		[ y2m.y3m,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ y2m.c1e,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], 
		[ y2m.u7k,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], 
		[ y2m.b3g,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ y2m.e5k,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ y2m.w5c,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ y2m.z5w,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ y2m.c0g,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ y2m.q0e,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ y2m.n5g,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ y2m.m5p,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ y2m.f7y,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ y2m.q0u,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ y2m.e3m,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ y2m.d6s,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ y2m.v3d,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ y2m.o4t,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ y2m.t2o,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ y2m.d6p,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ y2m.c3b, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ y2m.r6y,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ y2m.z5u,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ y2m.o6a, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ y2m.x5g,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ y2m.u8s,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ y2m.q6q,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], 
		[ y2m.t8m,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], 
		[ y2m.j2x,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ y2m.i1t,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ y2m.j8u,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ y2m.j0v,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ y2m.w5x,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ y2m.d1x,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ y2m.r8u,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ y2m.j3i, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ y2m.x8d,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], 
		[ y2m.o9b, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ y2m.z7a,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], 
		[ y2m.w5g,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ y2m.x9l,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ y2m.c2m,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ y2m.s4k,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ y2m.w8c,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ y2m.m8h,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ y2m.y0v,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ y2m.v1o,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ y2m.y2r,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ y2m.l0e,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ y2m.l3u,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], 
		[ y2m.q8f,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ y2m.m3e, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ y2m.n2v,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ y2m.k2x,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ y2m.h6o,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ y2m.x2m,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ y2m.b7o,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ y2m.n1v,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ y2m.m1d,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ y2m.q5u,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ y2m.q1j,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ y2m.b0f,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ y2m.t0f,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ y2m.x6m,  											 		"Zaire",														"",																		"zr", "ZRN" ], 
		[ y2m.k9q,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ y2m.s2z,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function p5g(v0e)
{
	return x2b[v0e][2];
}

function v8q(v0e)
{
	return x2b[v0e][4];
}

function p7l(x7m)
{
	for (const v0e of x2b)
	{
		if (v0e[4] == x7m)
		{
			return v0e[0];
		}
	}
	return y2m.h2n;
}

function z1m(w5z)
{
	for (const v0e of x2b)
	{
		if (v0e[3] == w5z)
		{
			return v0e[0];
		}
	}
	return y2m.h2n;
}
class r7g
{

constructor()
{
	this.r0s = '';
}

x7l(b5c)
{
	this.r0s += b5c;
}

j3e(b5c)
{
	this.r0s += b5c + '\n';
}

e7n()
{
	this.r0s += '\n';
}

}




function k0x(h2j, a2l)
{
	let value = Number(h2j);
	if (isNaN(value))
	{
		return a2l;
	}
	else
	{
		return value;
	}
}
