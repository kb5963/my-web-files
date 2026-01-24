const	chess = true; 

const d5p =
{
	x1p    : 0,
	w1z  : 1,
	b1p  : 2,
	l1a    : 3,
  i2l   : 4,
	y3v    : 5,
	x6h    : 6,
	g6s  : 7,
	f4r  : 8,
	b3w    : 9,
	f8i   : 10,
	j1i    : 11,
	g3d        : 12,
};

const r1s =
{
	y1l        : 0,
	n4i        : 1,
};

const	a1 = 0;
const s3h = 1;
const w2m = 2;
const h3a = 3;
const j6d = 4;
const w0r = 5;
const l5c = 6;
const x7a = 7;
const	a2 = 8;
const y6g = 9;
const y2b = 10;
const x8i = 11;
const s5b = 12;
const u6z = 13;
const c5v = 14;
const z3c = 15;
const	a3 = 16;
const i6c = 17;
const n8w = 18;
const g8q = 19;
const l2f = 20;
const j8d = 21;
const g2q = 22;
const h3n = 23;
const	a4 = 24;
const r0s = 25;
const w1u = 26;
const n8v = 27;
const m6b = 28;
const n3g = 29;
const s9s = 30;
const o0w = 31;
const	a5 = 32;
const e1a = 33;
const i9t = 34;
const k8l = 35;
const y1c = 36;
const s8q = 37;
const s6v = 38;
const q6f = 39;
const	a6 = 40;
const f0d = 41;
const r3q = 42;
const t9o = 43;
const v1j = 44;
const d3e = 45;
const c7z = 46;
const x5q = 47;
const	a7 = 48;
const l4j = 49;
const d2n = 50;
const d9w = 51;
const u8h = 52;
const r5v = 53;
const d7l = 54;
const l4a = 55;
const	a8 = 56;
const b4v = 57;
const u1k = 58;
const u8r = 59;
const w2h = 60;
const f3s = 61;
const r1k = 62;
const g3r = 63;
const d2w = 64;

const e7g = 0;
const a1k = 1;
const n8x = 2;
const h4u = 3;
const n0u = 4;
const j2o = 5;
const a8h = 6;
const h7r = 7;
const b4p = 8;

const	rank_1 = 0;
const w6a = 1;
const z4d = 2;
const p1n = 3;
const f3j = 4;
const l3z = 5;
const b2q = 6;
const z2l = 7;
const l4v = 8;

const j3r        = 8;
const h7e       = 64;
const o5x      = 16;

const z4b =
[
	d5p.l1a,    
  d5p.w1z,  
  d5p.b1p,  
  d5p.i2l,   
  d5p.y3v,    
  d5p.b1p,  
  d5p.w1z,  
  d5p.l1a,    
	d5p.x1p,    
  d5p.x1p,    
  d5p.x1p,    
  d5p.x1p,    
  d5p.x1p,    
  d5p.x1p,    
  d5p.x1p,    
  d5p.x1p,    
	d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
	d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
	d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
	d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
	d5p.x6h,    
  d5p.x6h,    
  d5p.x6h,    
  d5p.x6h,    
  d5p.x6h,    
  d5p.x6h,    
  d5p.x6h,    
  d5p.x6h,    
	d5p.b3w,    
  d5p.g6s,  
  d5p.f4r,  
  d5p.f8i,   
  d5p.j1i,    
  d5p.f4r,  
  d5p.g6s,  
  d5p.b3w,    
];

const l8q =
[
	d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
	d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
	d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
	d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
	d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
	d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
	d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
	d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
  d5p.g3d,        
];

const x6a =
[
	a1, s3h, w2m, h3a, j6d, w0r, l5c, x7a,
	a2, y6g, y2b, x8i, s5b, u6z, c5v, z3c,
	a3, i6c, n8w, g8q, l2f, j8d, g2q, h3n,
	a4, r0s, w1u, n8v, m6b, n3g, s9s, o0w,
	a5, e1a, i9t, k8l, y1c, s8q, s6v, q6f,
	a6, f0d, r3q, t9o, v1j, d3e, c7z, x5q,
	a7, l4j, d2n, d9w, u8h, r5v, d7l, l4a,
	a8, b4v, u1k, u8r, w2h, f3s, r1k, g3r,
];

const g3i =
[
	e7g,
  a1k,
  n8x,
  h4u,
  n0u,
  j2o,
  a8h,
  h7r,
];

const v0p =
[
	rank_1,
  w6a,
  z4d,
  p1n,
  f3j,
  l3z,
  b2q,
  z2l,
];

function g0d(d8n)
{
	return d8n == d5p.x6h ||
		d8n == d5p.g6s ||
    d8n == d5p.f4r ||
    d8n == d5p.b3w ||
    d8n == d5p.f8i ||
    d8n == d5p.j1i;
}

function u1g(d8n)
{
	return d8n == d5p.x1p ||
		d8n == d5p.w1z ||
    d8n == d5p.b1p ||
    d8n == d5p.l1a ||
    d8n == d5p.i2l ||
    d8n == d5p.y3v;
}

function q3s(d8n)
{
	return d8n == d5p.x1p || d8n == d5p.x6h;
}

function c4u(d8n)
{
	return d8n == d5p.w1z || d8n == d5p.g6s;
}

function m9v(d8n)
{
	return d8n == d5p.b1p || d8n == d5p.f4r;
}

function t5h(d8n)
{
	return d8n == d5p.l1a || d8n == d5p.b3w;
}

function t3i(d8n)
{
	return d8n == d5p.i2l || d8n == d5p.f8i;
}

function w6f(d8n)
{
	return d8n == d5p.y3v || d8n == d5p.j1i;
}

function u0z(t0h)
{
	if (t0h == d2w)
	{
		return d2w;
	}
	else
	{
		return h7e - t0h - 1;
	}
}

const t8j =
[
	e7g, a1k, n8x, h4u, n0u, j2o, a8h, h7r,
	e7g, a1k, n8x, h4u, n0u, j2o, a8h, h7r,
	e7g, a1k, n8x, h4u, n0u, j2o, a8h, h7r,
	e7g, a1k, n8x, h4u, n0u, j2o, a8h, h7r,
	e7g, a1k, n8x, h4u, n0u, j2o, a8h, h7r,
	e7g, a1k, n8x, h4u, n0u, j2o, a8h, h7r,
	e7g, a1k, n8x, h4u, n0u, j2o, a8h, h7r,
	e7g, a1k, n8x, h4u, n0u, j2o, a8h, h7r,
];

function m9h(t0h)
{
	return t8j[t0h];
}

const l1o =
[
	rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1,
	w6a, w6a, w6a, w6a, w6a, w6a, w6a, w6a,
	z4d, z4d, z4d, z4d, z4d, z4d, z4d, z4d,
	p1n, p1n, p1n, p1n, p1n, p1n, p1n, p1n,
	f3j, f3j, f3j, f3j, f3j, f3j, f3j, f3j,
	l3z, l3z, l3z, l3z, l3z, l3z, l3z, l3z,
	b2q, b2q, b2q, b2q, b2q, b2q, b2q, b2q,
	z2l, z2l, z2l, z2l, z2l, z2l, z2l, z2l,
];

function u4i(t0h)
{
	return l1o[t0h];
}

function g4v(a, b)
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

function c1b(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function p9b(r2x, d8n)
{
	let n6n = 0;
	for (const value of r2x)
	{
		if (value == d8n)
		{
			n6n++;
		}
	}
	return n6n;
}

var stringToSquareMapInited = false;
const o7i = new Map();
function b8k()
{
  o7i.set("a1", a1);
  o7i.set("a2", a2);
  o7i.set("a3", a3);
  o7i.set("a4", a4);
  o7i.set("a5", a5);
  o7i.set("a6", a6);
  o7i.set("a7", a7);
  o7i.set("a8", a8);
  o7i.set("b1", s3h);
  o7i.set("b2", y6g);
  o7i.set("b3", i6c);
  o7i.set("b4", r0s);
  o7i.set("b5", e1a);
  o7i.set("b6", f0d);
  o7i.set("b7", l4j);
  o7i.set("b8", b4v);
  o7i.set("c1", w2m);
  o7i.set("c2", y2b);
  o7i.set("c3", n8w);
  o7i.set("c4", w1u);
  o7i.set("c5", i9t);
  o7i.set("c6", r3q);
  o7i.set("c7", d2n);
  o7i.set("c8", u1k);
  o7i.set("d1", h3a);
  o7i.set("d2", x8i);
  o7i.set("d3", g8q);
  o7i.set("d4", n8v);
  o7i.set("d5", k8l);
  o7i.set("d6", t9o);
  o7i.set("d7", d9w);
  o7i.set("d8", u8r);
  o7i.set("e1", j6d);
  o7i.set("e2", s5b);
  o7i.set("e3", l2f);
  o7i.set("e4", m6b);
  o7i.set("e5", y1c);
  o7i.set("e6", v1j);
  o7i.set("e7", u8h);
  o7i.set("e8", w2h);
  o7i.set("f1", w0r);
  o7i.set("f2", u6z);
  o7i.set("f3", j8d);
  o7i.set("f4", n3g);
  o7i.set("f5", s8q);
  o7i.set("f6", d3e);
  o7i.set("f7", r5v);
  o7i.set("f8", f3s);
  o7i.set("g1", l5c);
  o7i.set("g2", c5v);
  o7i.set("g3", g2q);
  o7i.set("g4", s9s);
  o7i.set("g5", s6v);
  o7i.set("g6", c7z);
  o7i.set("g7", d7l);
  o7i.set("g8", r1k);
  o7i.set("h1", x7a);
  o7i.set("h2", z3c);
  o7i.set("h3", h3n);
  o7i.set("h4", o0w);
  o7i.set("h5", q6f);
  o7i.set("h6", x5q);
  o7i.set("h7", l4a);
  o7i.set("h8", g3r);
}

function t2h(i7a)
{
  if (!stringToSquareMapInited)
  {
    b8k();
    stringToSquareMapInited = true;
  }
  if (o7i.has(i7a))
  {
    return o7i.get(i7a);
  }
  else
  {
		return d2w;
  }
}

function s4c(t0h)
{
  return e1h[t0h];
}

const j7x  = l5c;
const u8j  = w0r;
const w5i = w2m;
const g3y = h3a;
const z1s  = r1k;
const w9o  = f3s;
const s5q = u1k;
const o4f = u8r;

const e1h =
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

const t6c =
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

const t3k =
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




const s2z =
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

function h7z(t0h)
{
	return s2z[t0h];
}



















function n0r(p7i)
{
  if (p7i == '1')
  {
    return rank_1;
  }
  else if (p7i == '2')
  {
    return w6a;
  }
  else if (p7i == '3')
  {
    return z4d;
  }
  else if (p7i == '4')
  {
    return p1n;
  }
  else if (p7i == '5')
  {
    return f3j;
  }
  else if (p7i == '6')
  {
    return l3z;
  }
  else if (p7i == '7')
  {
    return b2q;
  }
  else if (p7i == '8')
  {
    return z2l;
  }
	else
	{
		return l4v;
	}
}

function f5h(p7i)
{
  if (p7i == 'a')
  {
    return e7g;
  }
  else if (p7i == 'b')
  {
    return a1k;
  }
  else if (p7i == 'c')
  {
    return n8x;
  }
  else if (p7i == 'd')
  {
    return h4u;
  }
  else if (p7i == 'e')
  {
    return n0u;
  }
  else if (p7i == 'f')
  {
    return j2o;
  }
  else if (p7i == 'g')
  {
    return a8h;
  }
  else if (p7i == 'h')
  {
    return h7r;
  }
  else
	{
		return b4p;
	}
}

function g4s(g4f)
{
  return t3k[g4f];
}

function h0i(e4p)
{
  return t6c[e4p];
}


class l2d
{

constructor()
{
	this.i5w = false;
	this.g1f = j6d;
	this.s8j = w2h;
	this.o9s = x7a;
	this.x3z = a1;
	this.l2n = g3r;
	this.j0x = a8;
	this.k0s = false;
	this.i6i = false;
	this.v4d = false;
	this.c3u = false;
	this.d7j = d2w;
}

r0c()
{
	let z1o = new l2d();
  return Object.assign(z1o, this);
}

}


class i9r
{

constructor()
{
  this.h4w = Array(h7e).fill(d5p.g3d);
 	this.s7c = r1s.y1l;
 	this.r6f = new l2d();
 	this.b2m();
}

r0c()
{
	let u0b = new i9r();
	c1b(u0b.h4w, this.h4w);
	u0b.s7c = this.s7c;
  u0b.r6f = this.r6f.r0c();
  u0b.whiteKing_ = this.whiteKing_;
	u0b.blackKing_ = this.blackKing_;
	return u0b;
}

s4b(b5l)
{
	return this.s7c == b5l.s7c &&
		g4v(this.h4w, b5l.h4w);
}

n1x(b5l)
{
	return !this.s4b(b5l);
}

e7t()
{
 	c1b(this.h4w, z4b);
 	this.s7c = r1s.y1l;
  this.r6f.i5w = false;
	this.r6f.g1f = j6d;
	this.r6f.s8j = w2h;
	this.r6f.o9s = x7a;
	this.r6f.x3z = a1;
	this.r6f.l2n = g3r;
	this.r6f.j0x = a8;
	this.r6f.d7j = d2w;
	this.r6f.k0s = true;
	this.r6f.i6i = true;
	this.r6f.v4d = true;
	this.r6f.c3u = true;
 	this.whiteKing_ = j6d;
	this.blackKing_ = w2h;
}

n7j()
{
	return this.s7c == r1s.y1l && this.x1t();
}

x1t()
{
	return g4v(this.h4w, z4b);
}

b2m()
{
	this.h4w.fill(d5p.g3d);
	this.s7c = r1s.y1l;
	this.r6f.i5w = false;
	this.r6f.g1f = j6d;
	this.r6f.s8j = w2h;
	this.r6f.o9s = x7a;
	this.r6f.x3z = a1;
	this.r6f.l2n = g3r;
	this.r6f.j0x = a8;
	this.r6f.d7j = d2w;
	this.r6f.k0s = false;
	this.r6f.i6i = false;
	this.r6f.v4d = false;
	this.r6f.c3u = false;
  this.whiteKing_ = d2w;
  this.blackKing_ = d2w;
}

z8n()
{
	return this.s7c == r1s.y1l && this.q4h();
}

q4h()
{
	return this.h4w.every(d5p.g3d);
}

r2x()
{
  return this.h4w.slice();
}

j1a(t0h)
{
	return this.h4w[t0h];
}

z6q(t0h, d8n)
{
	if (this.h4w[t0h] == d5p.y3v)
	{
		this.whiteKing_ = d2w;
	}
	else if (this.h4w[t0h] == d5p.j1i)
	{
		this.blackKing_ = d2w;
	}
	if (d8n == d5p.y3v)
	{
		this.whiteKing_ = t0h;
	}
	else if (d8n == d5p.j1i)
	{
		this.blackKing_ = t0h;
	}
	this.h4w[t0h] = d8n;
}

b7c()
{
	this.s7c = r1s.y1l;
}

g7y()
{
	this.s7c = r1s.n4i;
}

h4t()
{
	if (this.s7c == r1s.y1l)
	{
		this.s7c = r1s.n4i;
	}
	else
	{
		this.s7c = r1s.y1l;
	}
}

k2b()
{
	return this.s7c == r1s.y1l;
}

b9z()
{
	return this.s7c == r1s.n4i;
}

c8p(t0h)
{
	return this.h4w[t0h] == d5p.g3d;
}

u1g(t0h)
{
	let d8n = this.h4w[t0h];
	return d8n == d5p.x1p ||
		d8n == d5p.w1z ||
    d8n == d5p.b1p ||
    d8n == d5p.l1a ||
    d8n == d5p.i2l ||
    d8n == d5p.y3v;
}

g0d(t0h)
{
	let d8n = this.h4w[t0h];
	return d8n == d5p.x6h ||
		d8n == d5p.g6s ||
    d8n == d5p.f4r ||
    d8n == d5p.b3w ||
    d8n == d5p.f8i ||
    d8n == d5p.j1i;
}

w8g(t0h)
{
  let d8n = this.h4w[t0h];
	return d8n == d5p.x1p;
}

o2v(t0h)
{
  let d8n = this.h4w[t0h];
	return d8n == d5p.w1z;
}

e0b(t0h)
{
  let d8n = this.h4w[t0h];
	return d8n == d5p.b1p;
}

g2h(t0h)
{
  let d8n = this.h4w[t0h];
	return d8n == d5p.l1a;
}

c4c(t0h)
{
  let d8n = this.h4w[t0h];
	return d8n == d5p.i2l;
}

z3k(t0h)
{
  let d8n = this.h4w[t0h];
	return d8n == d5p.y3v;
}

s2b(t0h)
{
  let d8n = this.h4w[t0h];
	return d8n == d5p.x6h;
}

c2s(t0h)
{
  let d8n = this.h4w[t0h];
	return d8n == d5p.g6s;
}

a3p(t0h)
{
  let d8n = this.h4w[t0h];
	return d8n == d5p.f4r;
}

f0m(t0h)
{
  let d8n = this.h4w[t0h];
	return d8n == d5p.b3w;
}

u1b(t0h)
{
  let d8n = this.h4w[t0h];
	return d8n == d5p.f8i;
}

p4l(t0h)
{
  let d8n = this.h4w[t0h];
	return d8n == d5p.j1i;
}

i4e()
{
  let n6n = 0;
	for (const t0h of x6a)
	{
    if (this.u1g(t0h))
		{
			n6n++;
		}
	}
	return n6n;
}

y2t()
{
  let n6n = 0;
	for (const t0h of x6a)
	{
    if (this.g0d(t0h))
		{
			n6n++;
		}
	}
	return n6n;
}

m5x(s5z)
{
  this.r6f = s5z.r0c();
}

s5z()
{
  return this.r6f.r0c();
}

m4i(z1e)
{
 	this.r6f.d7j = d2w; 
	if (z1e.a9q())
	{
		this.h4t();
		return;
	}
	if (z1e.u1g())
	{
		if (z1e.w3x())
		{
			this.h4w[z1e.v6z] = d5p.g3d;
			if (z1e.h1u == d5p.b3w)
			{
				if (z1e.v6z == this.r6f.j0x)
				{
					this.r6f.c3u = false;
				}
				else if (z1e.v6z == this.r6f.l2n)
				{
					this.r6f.v4d = false;
				}
			}
		}
		this.h4w[z1e.i1o] = d5p.g3d;
		this.h4w[z1e.p2v] = z1e.y6k;
		if (z1e.x0m == d5p.x1p)
		{
			if ((z1e.p2v - z1e.i1o) == 16)
			{
				this.r6f.d7j = (z1e.i1o + 8);
			}
		}
		else if (z1e.x0m == d5p.l1a)
		{
			if (z1e.i1o == this.r6f.x3z)
			{
				this.r6f.i6i = false;
			}
			else if (z1e.i1o == this.r6f.o9s)
			{
				this.r6f.k0s = false;
			}
		}
		else if (z1e.x0m == d5p.y3v)
		{
			if (z1e.i7q())
			{
				if (z1e.p2v == w5i)
				{
					
					if (this.r6f.x3z != z1e.p2v)
					{
						this.h4w[this.r6f.x3z] = d5p.g3d;
					}
					this.h4w[g3y] = d5p.l1a;
				}
				else if (z1e.p2v == j7x)
				{
					
					if (this.r6f.o9s != z1e.p2v)
					{
						this.h4w[this.r6f.o9s] = d5p.g3d;
					}
					this.h4w[u8j] = d5p.l1a;
				}
			}
			this.r6f.i6i = false;
			this.r6f.k0s = false;
			this.whiteKing_ = z1e.p2v;
		}
	}
	else
	{
		if (z1e.w3x())
		{
			this.h4w[z1e.v6z] = d5p.g3d;
			if (z1e.h1u == d5p.l1a)
			{
				if (z1e.v6z == this.r6f.x3z)
				{
					this.r6f.i6i = false;
				}
				else if (z1e.v6z == this.r6f.o9s)
				{
					this.r6f.k0s = false;
				}
			}
		}
		this.h4w[z1e.i1o] = d5p.g3d;
		this.h4w[z1e.p2v] = z1e.y6k;
		if (z1e.x0m == d5p.x6h)
		{
			if ((z1e.p2v - z1e.i1o) == -16)
			{
				this.r6f.d7j = (z1e.i1o - 8);
			}
		}
		else if (z1e.x0m == d5p.b3w)
		{
			if (z1e.i1o == this.r6f.j0x)
			{
				this.r6f.c3u = false;
			}
			else if (z1e.i1o == this.r6f.l2n)
			{
				this.r6f.v4d = false;
			}
		}
		else if (z1e.x0m == d5p.j1i)
		{
			if (z1e.i7q())
			{
				if (z1e.p2v == s5q)
				{
					
					if (this.r6f.j0x != z1e.p2v)
					{
						this.h4w[this.r6f.j0x] = d5p.g3d;
					}
					this.h4w[o4f] = d5p.b3w;
				}
				else if (z1e.p2v == z1s)
				{
					
					if (this.r6f.l2n != z1e.p2v)
					{
						this.h4w[this.r6f.l2n] = d5p.g3d;
					}
					this.h4w[w9o] = d5p.b3w;
				}
			}
			this.r6f.c3u = false;
			this.r6f.v4d = false;
			this.blackKing_ = z1e.p2v;
		}
	}
	this.h4t();
}

k4f(z1e)
{
 	if (z1e.a9q())
	{
		this.h4t();
		return;
	}
	if (z1e.u1g())
	{
		this.h4w[z1e.p2v] = d5p.g3d;
		this.h4w[z1e.i1o] = z1e.x0m;
		if (z1e.x0m == d5p.y3v)
		{
			if (z1e.i7q())
			{
				if (z1e.p2v == w5i)
				{
					
					if (g3y != z1e.i1o)
					{
						this.h4w[g3y] = d5p.g3d;
					}
					this.h4w[this.r6f.x3z] = d5p.l1a;
				}
				else if (z1e.p2v == j7x)
				{
					
					if (u8j != z1e.i1o)
					{
						this.h4w[u8j] = d5p.g3d;
					}
					this.h4w[this.r6f.o9s] = d5p.l1a;
				}
			}
			this.whiteKing_ = z1e.i1o;
		}
		if (z1e.w3x())
		{
			this.h4w[z1e.v6z] = z1e.h1u;
		}
	}
	else
	{
		this.h4w[z1e.p2v] = d5p.g3d;
		this.h4w[z1e.i1o] = z1e.x0m;
		if (z1e.x0m == d5p.j1i)
		{
			if (z1e.i7q())
			{
				if (z1e.p2v == s5q)
				{
					
					if (o4f != z1e.i1o)
					{
						this.h4w[o4f] = d5p.g3d;
					}
					this.h4w[this.r6f.j0x] = d5p.b3w;
				}
				else if (z1e.p2v == z1s)
				{
					
					if (w9o != z1e.i1o)
					{
						this.h4w[w9o] = d5p.g3d;
					}
					this.h4w[this.r6f.l2n] = d5p.b3w;
				}
			}
			this.blackKing_ = z1e.i1o;
		}
		if (z1e.w3x())
		{
			this.h4w[z1e.v6z] = z1e.h1u;
		}
	}
	this.h4t();
}

y3v()
{
  return this.whiteKing_;
}

j1i()
{
  return this.blackKing_;
}

c6a()
{
	return this.r6f.k0s;
}

u9m()
{
	return this.r6f.i6i;
}

i0q()
{
	return this.r6f.v4d;
}

p9x()
{
	return this.r6f.c3u;
}

g1f()
{
  return this.r6f.g1f;
}

s8j()
{
  return this.r6f.s8j;
}

o9s()
{
  return this.r6f.o9s;
}

x3z()
{
  return this.r6f.x3z;
}

l2n()
{
  return this.r6f.l2n;
}

j0x()
{
  return this.r6f.j0x;
}

d7j()
{
  return this.r6f.d7j;
}

v8j()
{
	return this.r6f.i5w;
}

}
const v0a = 0;
const t1w   = 1;
const l0j  = v0a;

function x4i()
{
  let o8y = [];
	o8y.push("CBurnettt (Lichess)");
	o8y.push("Merida (Lichess)");
	return o8y;
}

class y5p
{

constructor()
{
	this.s2a = new b1y();
	this.n6c = null;
}

r0c()
{
	let i3l = new y5p();
	i3l.s2a = this.s2a.r0c();
	i3l.n6c = null;
	if (this.n6c)
	{
		i3l.n6c = this.n6c.r0c();
	}
	return i3l;
}

s4b(b5l)
{
	if (this.s2a.n1x(b5l))
	{
		return false;
	}
	return true;
}

n1x(b5l)
{
	return !this.s4b(b5l);
}

g3d()
{
	return this.s2a.g3d();
}

i1o()
{
	return this.s2a.i1o;
}

p2v()
{
	return this.s2a.p2v;
}

x0m()
{
	return this.s2a.x0m;
}

y6k()
{
	return this.s2a.y6k;
}

v6z()
{
	return this.s2a.v6z;
}

h1u()
{
	return this.s2a.h1u;
}

r1z()
{
	return this.s2a.r1z();
}

u1g()
{
	return this.s2a.u1g();
}

g0d()
{
	return this.s2a.g0d();
}

m7o()
{
	return this.s2a.m7o();
}

a9q()
{
	return this.s2a.a9q();
}

w3x()
{
	return this.s2a.w3x();
}

x5w()
{
	if (this.n6c == null)
	{
		this.n6c = new r0u();
	}
}

r8k()
{
	if (this.n6c)
	{
		if (this.n6c.g3d())
		{
			this.h3w();
		}
	}
}

x3r()
{
	return this.n6c != null;
}

h3w()
{
	this.n6c = null;
}

h5l(r3s)
{
	this.x5w();
	this.n6c = r3s.r0c();
}

d7f()
{
	return this.n6c;
}

p2i(b5l)
{
	if (this.n6c && !b5l.n6c)
	{
		return false;
	}
	if (!this.n6c && b5l.n6c)
	{
		return false;
	}
	if (!this.n6c && !b5l.n6c)
	{
		return true;
	}
	return this.n6c.s4b(b5l.n6c);
}

d0d()
{
	if (this.n6c)
	{
		this.n6c.f2r = '';
		this.r8k();
	}
}

c8b()
{
	if (this.n6c)
	{
		return this.n6c.f2r.length != 0;
	}
	else
	{
		return false;
	}
}

f2r()
{
	if (this.n6c)
	{
		return this.n6c.f2r;
	}
	else
	{
		return '';
	}
}

l6q(m7i)
{
	this.x5w();
	this.n6c.f2r = m7i;
	this.r8k();
}

p2p()
{
	if (this.n6c)
	{
		this.n6c.i7r = '';
		this.r8k();
	}
}

k5p()
{
	if (this.n6c)
	{
		return this.n6c.i7r.length != 0;
	}
	else
	{
		return false;
	}
}

i7r()
{
	if (this.n6c)
	{
		return this.n6c.i7r;
	}
	else
	{
		return '';
	}
}

p8c(m7i)
{
	this.x5w();
	this.n6c.i7r = m7i;
	this.r8k();
}

z2r()
{
	if (this.n6c)
	{
		this.n6c.o1b = t4p.f0x;
		this.r8k();
	}
}

s3k()
{
	if (this.n6c)
	{
		return this.n6c.o1b != t4p.f0x;
	}
	else
	{
		return false;
	}
}

o1b()
{
	if (this.n6c)
	{
		return this.n6c.o1b;
	}
	else
	{
		return t4p.f0x;
	}
}

f2f(o1b)
{
	this.x5w();
	this.n6c.o1b = o1b;
	this.r8k();
}

j4i()
{
	if (this.n6c)
	{
		this.n6c.style = r2j.f0x;
		this.r8k();
	}
}

n6r()
{
	if (this.n6c)
	{
		return this.n6c.style != r2j.f0x;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.n6c)
	{
		return this.n6c.style;
	}
	else
	{
		return r2j.f0x;
	}
}

c4p(style)
{
	this.x5w();
	this.n6c.style = style;
	this.r8k();
}

y8b()
{
	if (this.n6c)
	{
		this.n6c.value = m0e.f0x;
		this.r8k();
	}
}

h2x()
{
	if (this.n6c)
	{
		return this.n6c.value != m0e.f0x;
	}
	else
	{
		return false;
	}
}

value()
{
	if (this.n6c)
	{
		return this.n6c.value;
	}
	else
	{
		return m0e.f0x;
	}
}

a0e(value)
{
	this.x5w();
	this.n6c.value = value;
	this.r8k();
}

y8w()
{
	if (this.n6c)
	{
		this.n6c.u6x = k9n.f0x;
		this.r8k();
	}
}

y7s()
{
	if (this.n6c)
	{
		return this.n6c.u6x != k9n.f0x;
	}
	else
	{
		return false;
	}
}

u6x()
{
	if (this.n6c)
	{
		return this.n6c.u6x;
	}
	else
	{
		return k9n.f0x;
	}
}

b6k(u6x)
{
	this.x5w();
	this.n6c.u6x = u6x;
	this.r8k();
}

n9a()
{
  
}

y9o()
{
	if (this.n6c)
	{
 		if (this.n6c.f2r.length != 0)
    {
      let p6q = this.n6c.f2r.indexOf("[#]");
      return p6q != -1;
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

a8v()
{
  
}

o3d()
{
	if (this.n6c)
	{
		this.n6c.d0q = false;
		this.r8k();
	}
}

a8q()
{
	if (this.n6c)
	{
		return this.n6c.d0q;
	}
	else
	{
		return false;
	}
}

p7u()
{
	this.x5w();
	this.n6c.d0q = true;
	this.r8k();
}

q0p()
{
	if (this.n6c)
	{
		this.n6c.e8i = false;
		this.r8k();
	}
}

h4b()
{
	if (this.n6c)
	{
		return this.n6c.e8i;
	}
	else
	{
		return false;
	}
}

j3x()
{
	this.x5w();
	this.n6c.e8i = true;
	this.r8k();
}

v9f()
{
	if (this.n6c)
	{
		this.n6c.u5a.h9j();
		this.n6c.z2x.h9j();
		this.r8k();
	}
}

f5x()
{
	if (this.n6c)
	{
		return this.m9z() || this.j3d();
	}
	else
	{
		return false;
	}
}

s1q()
{
	if (this.n6c)
	{
		this.n6c.u5a.h9j();
		this.r8k();
	}
}

m9z()
{
	if (this.n6c)
	{
		return !this.n6c.u5a.g3d();
	}
	else
	{
		return false;
	}
}

u5a()
{
	if (this.n6c)
	{
		return this.n6c.u5a.r0c();
	}
	else
	{
		return new u6i();
	}
}

r8y(u5a)
{
	this.x5w();
	this.n6c.u5a = u5a.r0c();
	this.r8k();
}

r1b()
{
	if (this.n6c)
	{
		this.n6c.z2x.h9j();
		this.r8k();
	}
}

j3d()
{
	if (this.n6c)
	{
		return !this.n6c.z2x.g3d();
	}
	else
	{
		return false;
	}
}

z2x()
{
	if (this.n6c)
	{
		return this.n6c.z2x.r0c();
	}
	else
	{
		return new s2q();
	}
}

v7d(z2x)
{
	this.x5w();
	this.n6c.z2x = z2x.r0c();
	this.r8k();
}

u1n()
{
	if (this.n6c)
	{
		this.n6c.r7v.o5s();
		this.r8k();
	}
}

x2m()
{
	if (this.n6c)
	{
		return this.n6c.r7v.v2j();
	}
	else
	{
		return false;
	}
}

r7v()
{
	if (this.n6c)
	{
		return this.n6c.r7v.r0c();
	}
	else
	{
		return new i5q();
	}
}

v2r(r7v)
{
	this.x5w();
	this.n6c.r7v = r7v.r0c();
	this.r8k();
}

n9k(i1j)
{
	this.s2a = i1j.r0c();
	this.n6c = null;
}

i1j()
{
	let t3c = new b1y();
  return Object.assign(t3c, this.s2a);
}

}

function h6w(i1j)
{
  let n5d = new y5p();
  n5d.n9k(i1j);
  return n5d;
}
class b1y
{

constructor()
{
	this.i1o = d2w;
	this.x0m = d5p.g3d;
	this.p2v = d2w;
	this.y6k = d5p.g3d;
	this.v6z = d2w;
	this.m9u = d5p.g3d;
	this.type = a8g.f0x;
}

r0c()
{
	let t3c = new b1y();
	t3c.i1o = this.i1o;
	t3c.x0m = this.x0m;
	t3c.p2v = this.p2v;
	t3c.y6k = this.y6k;
	t3c.v6z = this.v6z;
	t3c.h1u = this.h1u;
	t3c.type = this.type;
	return t3c;
}

s4b(b5l)
{
	if (
		this.i1o != b5l.i1o ||
		this.x0m != b5l.x0m ||
		this.p2v != b5l.p2v ||
		this.y6k != b5l.y6k ||
		this.v6z != b5l.v6z ||
		this.h1u != b5l.h1u ||
    this.type != b5l.type)
	{
		return false;
	}
	else
	{
		return true;
	}
}

n1x(b5l)
{
	return !this.s4b(b5l);
}

g3d()
{
	return this.type == a8g.f0x;
}

u1g()
{
	return this.x0m == d5p.x1p ||
		this.x0m == d5p.w1z ||
    this.x0m == d5p.b1p ||
    this.x0m == d5p.l1a ||
    this.x0m == d5p.i2l ||
    this.x0m == d5p.y3v;
}

g0d()
{
	return this.x0m == d5p.x6h ||
		this.x0m == d5p.g6s ||
    this.x0m == d5p.f4r ||
    this.x0m == d5p.b3w ||
    this.x0m == d5p.f8i ||
    this.x0m == d5p.j1i;
}

w3x()
{
	return this.v6z != d2w;
}

m7o()
{
	return this.x0m != this.y6k;
}

d0b()
{
  return this.type == a8g.g9h;
}

a9q()
{
	return this.type == a8g.f0x;
}

i7q()
{
	return this.type == a8g.k4m;
}

r1z()
{
	if (this.w3x())
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

function k4c(r2x, i1j)
{
	if (i1j.type == a8g.j8g)
	{
		r2x[i1j.p2v] = r2x[i1j.i1o];
		r2x[i1j.i1o] = d5p.g3d;
	}
	else if (i1j.type == a8g.g9h)
	{
		let v6z = (i1j.p2v - 8);
		r2x[v6z] = d5p.g3d;
		r2x[i1j.p2v] = d5p.x1p;
		r2x[i1j.i1o] = d5p.g3d;
	}
	else if (i1j.type == a8g.b8v)
	{
		r2x[i1j.p2v] = d5p.i2l;
		r2x[i1j.i1o] = d5p.g3d;
	}
	else if (i1j.type == a8g.q1x)
	{
		r2x[i1j.p2v] = d5p.l1a;
		r2x[i1j.i1o] = d5p.g3d;
	}
	else if (i1j.type == a8g.q2q)
	{
		r2x[i1j.p2v] = d5p.b1p;
		r2x[i1j.i1o] = d5p.g3d;
	}
	else if (i1j.type == a8g.a0g)
	{
		r2x[i1j.p2v] = d5p.w1z;
		r2x[i1j.i1o] = d5p.g3d;
	}
}

function o8h(r2x, i1j)
{
	if (i1j.type == a8g.j8g)
	{
		r2x[i1j.p2v] = r2x[i1j.i1o];
		r2x[i1j.i1o] = d5p.g3d;
	}
	else if (i1j.type == a8g.g9h)
	{
		let v6z = (i1j.p2v + 8);
		r2x[v6z] = d5p.g3d;
		r2x[i1j.p2v] = d5p.x6h;
		r2x[i1j.i1o] = d5p.g3d;
	}
	else if (i1j.type == a8g.b8v)
	{
		r2x[i1j.p2v] = d5p.f8i;
		r2x[i1j.i1o] = d5p.g3d;
	}
	else if (i1j.type == a8g.q1x)
	{
		r2x[i1j.p2v] = d5p.b3w;
		r2x[i1j.i1o] = d5p.g3d;
	}
	else if (i1j.type == a8g.q2q)
	{
		r2x[i1j.p2v] = d5p.f4r;
		r2x[i1j.i1o] = d5p.g3d;
	}
	else if (i1j.type == a8g.a0g)
	{
		r2x[i1j.p2v] = d5p.g6s;
		r2x[i1j.i1o] = d5p.g3d;
	}
}

function t1m(r2x, i1j)
{
	if (i1j.p2v == w5i)
	{
		r2x[i1j.p2v] = d5p.y3v;
		r2x[i1j.i1o] = d5p.g3d;
		r2x[a1] = d5p.g3d; 
		r2x[g3y] = d5p.l1a;
	}
	else
	{
		r2x[i1j.p2v] = d5p.y3v;
		r2x[i1j.i1o] = d5p.g3d;
		r2x[x7a] = d5p.g3d; 
		r2x[u8j] = d5p.l1a;
	}
}

function i5y(r2x, i1j)
{
	if (i1j.p2v == s5q)
	{
		r2x[i1j.p2v] = d5p.j1i;
		r2x[i1j.i1o] = d5p.g3d;
		r2x[a8] = d5p.g3d; 
		r2x[o4f] = d5p.b3w;
	}
	else
	{
		r2x[i1j.p2v] = d5p.j1i;
		r2x[i1j.i1o] = d5p.g3d;
		r2x[g3r] = d5p.g3d; 
		r2x[w9o] = d5p.b3w;
	}
}

function a5l(r2x, i1j, s5z)
{
	if (i1j.p2v == w5i)
	{
		r2x[i1j.p2v] = d5p.y3v;
		r2x[i1j.i1o] = d5p.g3d;
		if (s5z.x3z != i1j.p2v)
		{
			r2x[s5z.x3z] = d5p.g3d;
		}
		r2x[g3y] = d5p.l1a;
	}
	else if (i1j.p2v == j7x)
	{
		r2x[i1j.p2v] = d5p.y3v;
		r2x[i1j.i1o] = d5p.g3d;
		if (s5z.o9s != i1j.p2v)
		{
			r2x[s5z.o9s] = d5p.g3d;
		}
		r2x[u8j] = d5p.l1a;
	}
}

function d0r(r2x, i1j, s5z)
{
	if (i1j.p2v == s5q)
	{
		r2x[i1j.p2v] = d5p.j1i;
		r2x[i1j.i1o] = d5p.g3d;
		if (s5z.j0x != i1j.p2v)
		{
			r2x[s5z.j0x] = d5p.g3d;
		}
		r2x[o4f] = d5p.b3w;
	}
	else if (i1j.p2v == z1s)
	{
		r2x[i1j.p2v] = d5p.j1i;
		r2x[i1j.i1o] = d5p.g3d;
		if (s5z.l2n != i1j.p2v)
		{
			r2x[s5z.l2n] = d5p.g3d;
		}
		r2x[w9o] = d5p.b3w;
	}
}

function y5b(n2t, i1j)
{
	let h0r = n2t.y3v();
	if (h0r == d2w) return true;
	if (i1j.x0m == d5p.y3v)
	{
		h0r = i1j.p2v;
	}
	let r2x = n2t.r2x();
	if (i1j.type == a8g.k4m)
	{
		if (n2t.v8j())
		{
			a5l(r2x, i1j, n2t.s5z());
		}
		else
		{
			t1m(r2x, i1j);
		}
	}
	else
	{
		k4c(r2x, i1j);
	}
	return !r4c(r2x, h0r);
}

function s4f(n2t, i1j)
{
	let h0r = n2t.j1i();
	if (h0r == d2w) return true;
	if (i1j.x0m == d5p.j1i)
	{
		h0r = i1j.p2v;
	}
	let r2x = n2t.r2x();
	if (i1j.type == a8g.k4m)
	{
		if (n2t.v8j())
		{
			d0r(r2x, i1j, n2t.s5z());
		}
		else
		{
			i5y(r2x, i1j);
		}
	}
	else
	{
		o8h(r2x, i1j);
	}
	return !a9g(r2x, h0r);
}

function d7d(s3b, n2t, i1o)
{
	if (u4i(i1o) == z2l)
	{
		return;
	}
	f7a(s3b, n2t, i1o);
	let p2v = northWestSquare[i1o];
	if (p2v != d2w)
	{
		w4z(s3b, n2t, i1o, p2v);
	}
	p2v = northEastSquare[i1o];
	if (p2v != d2w)
	{
		w4z(s3b, n2t, i1o, p2v);
	}
}

function e5s(s3b, n2t, i1o)
{
	if (u4i(i1o) == rank_1)
	{
		return;
	}
	s4a(s3b, n2t, i1o);
	let p2v = southEastSquare[i1o];
	if (p2v != d2w)
	{
		p6e(s3b, n2t, i1o, p2v);
	}
	p2v = southWestSquare[i1o];
	if (p2v != d2w)
	{
		p6e(s3b, n2t, i1o, p2v);
	}
}

function f7a(s3b, n2t, i1o)
{
	let p2v = (i1o + p9v);
	if (n2t.c8p(p2v))
	{
		if (u4i(i1o) == b2q)
		{
			w1p(s3b, n2t, i1o, p2v);
		}
		else
		{
			z7v(s3b, n2t, i1o, p2v, a8g.j8g);
			if (u4i(i1o) == w6a)
			{
				let p2v = (i1o + p9v + p9v);
				if (n2t.c8p(p2v))
				{
					z7v(s3b, n2t, i1o, p2v, a8g.j8g);
				}
			}
		}
	}
}

function s4a(s3b, n2t, i1o)
{
	let p2v = (i1o + s6b);
	if (n2t.c8p(p2v))
	{
		if (u4i(i1o) == w6a)
		{
			h6o(s3b, n2t, i1o, p2v);
		}
		else
		{
			z7v(s3b, n2t, i1o, p2v, a8g.j8g);
			if (u4i(i1o) == b2q)
			{
				let p2v = (i1o + s6b + s6b);
				if (n2t.c8p(p2v))
				{
					z7v(s3b, n2t, i1o, p2v, a8g.j8g);
				}
			}
		}
	}
}

function w4z(s3b, n2t, i1o, p2v)
{
	if (!n2t.g0d(p2v))
	{
		return;
	}
	if (u4i(i1o) == b2q)
	{
		u5r(s3b, n2t, i1o, p2v);
	}
	else
	{
		i0p(s3b, n2t, i1o, p2v, a8g.j8g);
	}
}

function p6e(s3b, n2t, i1o, p2v)
{
	if (!n2t.u1g(p2v))
	{
		return;
	}
	if (u4i(i1o) == w6a)
	{
		y5a(s3b, n2t, i1o, p2v);
	}
	else
	{
		i0p(s3b, n2t, i1o, p2v, a8g.j8g);
	}
}

function v3o(s3b, n2t, i1o, n6f)
{
	for (const p2v of n6f)
	{
		if (n2t.c8p(p2v))
		{
			z7v(s3b, n2t, i1o, p2v, a8g.j8g);
		}
		else if (n2t.g0d(p2v))
		{
			i0p(s3b, n2t, i1o, p2v, a8g.j8g);
		}
	}
}

function o4p(s3b, n2t, i1o, n6f)
{
	for (const p2v of n6f)
	{
		if (n2t.c8p(p2v))
		{
			z7v(s3b, n2t, i1o, p2v, a8g.j8g);
		}
		else if (n2t.u1g(p2v))
		{
			i0p(s3b, n2t, i1o, p2v, a8g.j8g);
		}
	}
}

function x9k(s3b, n2t, i1o)
{
	v3o(s3b, n2t, i1o, knightSquares[i1o]);
}

function h4r(s3b, n2t, i1o)
{
	o4p(s3b, n2t, i1o, knightSquares[i1o]);
}

function x8a(s3b, n2t, i1o)
{
	m0h(s3b, n2t, i1o, northEastSquares[i1o]);
	m0h(s3b, n2t, i1o, southEastSquares[i1o]);
	m0h(s3b, n2t, i1o, southWestSquares[i1o]);
	m0h(s3b, n2t, i1o, northWestSquares[i1o]);
}

function n5x(s3b, n2t, i1o)
{
	z7x(s3b, n2t, i1o, northEastSquares[i1o]);
	z7x(s3b, n2t, i1o, southEastSquares[i1o]);
	z7x(s3b, n2t, i1o, southWestSquares[i1o]);
	z7x(s3b, n2t, i1o, northWestSquares[i1o]);
}

function f0t(s3b, n2t, i1o)
{
	m0h(s3b, n2t, i1o, northSquares[i1o]);
	m0h(s3b, n2t, i1o, eastSquares[i1o]);
	m0h(s3b, n2t, i1o, southSquares[i1o]);
	m0h(s3b, n2t, i1o, westSquares[i1o]);
}

function g8n(s3b, n2t, i1o)
{
	z7x(s3b, n2t, i1o, northSquares[i1o]);
	z7x(s3b, n2t, i1o, eastSquares[i1o]);
	z7x(s3b, n2t, i1o, southSquares[i1o]);
	z7x(s3b, n2t, i1o, westSquares[i1o]);
}

function v6w(s3b, n2t, i1o)
{
	m0h(s3b, n2t, i1o, northSquares[i1o]);
	m0h(s3b, n2t, i1o, northEastSquares[i1o]);
	m0h(s3b, n2t, i1o, eastSquares[i1o]);
	m0h(s3b, n2t, i1o, southEastSquares[i1o]);
	m0h(s3b, n2t, i1o, southSquares[i1o]);
	m0h(s3b, n2t, i1o, southWestSquares[i1o]);
	m0h(s3b, n2t, i1o, westSquares[i1o]);
	m0h(s3b, n2t, i1o, northWestSquares[i1o]);
}

function p6x(s3b, n2t, i1o)
{
	z7x(s3b, n2t, i1o, northSquares[i1o]);
	z7x(s3b, n2t, i1o, northEastSquares[i1o]);
	z7x(s3b, n2t, i1o, eastSquares[i1o]);
	z7x(s3b, n2t, i1o, southEastSquares[i1o]);
	z7x(s3b, n2t, i1o, southSquares[i1o]);
	z7x(s3b, n2t, i1o, southWestSquares[i1o]);
	z7x(s3b, n2t, i1o, westSquares[i1o]);
	z7x(s3b, n2t, i1o, northWestSquares[i1o]);
}

function i7p(s3b, n2t, i1o)
{
	o2k(s3b, n2t, i1o, kingSquares[i1o]);
}

function t1p(s3b, n2t, i1o)
{
	z0b(s3b, n2t, i1o, kingSquares[i1o]);
}

function m0h(s3b, n2t, i1o, n6f)
{
	for (const p2v of n6f)
	{
		if (n2t.c8p(p2v))
		{
			z7v(s3b, n2t, i1o, p2v, a8g.j8g);
		}
		else if (n2t.u1g(p2v))
		{
			break;
		}
		else
		{
			i0p(s3b, n2t, i1o, p2v, a8g.j8g);
			break;
		}
	}
}

function z7x(s3b, n2t, i1o, n6f)
{
	for (const p2v of n6f)
	{
		if (n2t.c8p(p2v))
		{
			z7v(s3b, n2t, i1o, p2v, a8g.j8g);
		}
		else if (n2t.g0d(p2v))
		{
			break;
		}
		else
		{
			i0p(s3b, n2t, i1o, p2v, a8g.j8g);
			break;
		}
	}
}

function o2k(s3b, n2t, i1o, n6f)
{
	for (const p2v of n6f)
	{
		if (n2t.c8p(p2v))
		{
			z7v(s3b, n2t, i1o, p2v, a8g.j8g);
		}
		else if (n2t.g0d(p2v))
		{
			i0p(s3b, n2t, i1o, p2v, a8g.j8g);
		}
	}
}

function z0b(s3b, n2t, i1o, n6f)
{
	for (const p2v of n6f)
	{
		if (n2t.c8p(p2v))
		{
			z7v(s3b, n2t, i1o, p2v, a8g.j8g);
		}
		else if (n2t.u1g(p2v))
		{
			i0p(s3b, n2t, i1o, p2v, a8g.j8g);
		}
	}
}

function s3p(left, n1g)
{
	let z8o = [];
	if (left > n1g)
	{
    let k9c = left;
    left = n1g;
    n1g = k9c;
	}
	for (let i = left + 1; i < n1g; i++)
	{
		z8o.push(i);
	}
	return z8o;
}

function l3s(s3b, n2t)
{
	if (!n2t.z3k(n2t.g1f()))
	{
		return;
	}
	if (!n2t.g2h(n2t.x3z()))
	{
		return;
	}
	let k8n = s3p(n2t.x3z(), g3y);
  for (const t0h of k8n)
	{
		if (t0h != n2t.g1f())
		{
			if (!n2t.c8p(t0h))
			{
				return;
			}
		}
	}
	let m7n = s3p(n2t.g1f(), w5i);
  for (const t0h of m7n)
	{
		if (t0h != n2t.x3z())
		{
			if (!n2t.c8p(t0h))
			{
				return;
			}
		}
	}
  for (const t0h of m7n)
	{
		if (n8b(n2t, t0h))
		{
			return;
		}
	}
	if (n8b(n2t, n2t.g1f()))
	{
		return;
	}
	if (n2t.g1f() != w5i)
	{
		if (!n2t.c8p(w5i))
		{
			if (w5i != n2t.x3z())
			{
				return;
			}
		}
	}
	if (n2t.x3z() != g3y)
	{
		if (!n2t.c8p(g3y))
		{
			if (g3y != n2t.g1f())
			{
				return;
			}
		}
	}
	z7v(s3b, n2t, n2t.g1f(), w5i, a8g.k4m);
}

function c7m(s3b, n2t)
{
	if (!n2t.z3k(n2t.g1f()))
	{
		return;
	}
	if (!n2t.g2h(n2t.o9s()))
	{
		return;
	}
	let k8n = s3p(n2t.o9s(), u8j);
  for (const t0h of k8n)
	{
		if (t0h != n2t.g1f())
		{
			if (!n2t.c8p(t0h))
			{
				return;
			}
		}
	}
	let m7n = s3p(n2t.g1f(), j7x);
  for (const t0h of m7n)
	{
		if (t0h != n2t.o9s())
		{
			if (!n2t.c8p(t0h))
			{
				return;
			}
		}
	}
  for (const t0h of m7n)
	{
		if (n8b(n2t, t0h))
		{
			return;
		}
	}
	if (n8b(n2t, n2t.g1f()))
	{
		return;
	}
	if (n2t.g1f() != j7x)
	{
		if (!n2t.c8p(j7x))
		{
			if (j7x != n2t.o9s())
			{
				return;
			}
		}
	}
	if (n2t.o9s() != u8j)
	{
		if (!n2t.c8p(u8j))
		{
			if (u8j != n2t.g1f())
			{
				return;
			}
		}
	}
	z7v(s3b, n2t, n2t.g1f(), j7x, a8g.k4m);
}

function l7i(s3b, n2t)
{
	if (!n2t.p4l(n2t.s8j()))
	{
		return;
	}
	if (!n2t.f0m(n2t.l2n()))
	{
		return;
	}
	let k8n = s3p(n2t.l2n(), w9o);
  for (const t0h of k8n)
	{
		if (t0h != n2t.s8j())
		{
			if (!n2t.c8p(t0h))
			{
				return;
			}
		}
	}
	let m7n = s3p(n2t.s8j(), z1s);
  for (const t0h of m7n)
	{
		if (t0h != n2t.l2n())
		{
			if (!n2t.c8p(t0h))
			{
				return;
			}
		}
	}
  for (const t0h of m7n)
	{
		if (r1v(n2t, t0h))
		{
			return;
		}
	}
	if (r1v(n2t, n2t.s8j()))
	{
		return;
	}
	if (n2t.s8j() != z1s)
	{
		if (!n2t.c8p(z1s))
		{
			if (z1s != n2t.l2n())
			{
				return;
			}
		}
	}
	if (n2t.l2n() != w9o)
	{
		if (!n2t.c8p(w9o))
		{
			if (w9o != n2t.s8j())
			{
				return;
			}
		}
	}
	z7v(s3b, n2t, n2t.s8j(), z1s, a8g.k4m);
}

function r6e(s3b, n2t)
{
	if (!n2t.p4l(n2t.s8j()))
	{
		return;
	}
	if (!n2t.f0m(n2t.j0x()))
	{
		return;
	}
	let k8n = s3p(n2t.j0x(), o4f);
  for (const t0h of k8n)
	{
		if (t0h != n2t.s8j())
		{
			if (!n2t.c8p(t0h))
			{
				return;
			}
		}
	}
	let m7n = s3p(n2t.s8j(), s5q);
  for (const t0h of m7n)
	{
		if (t0h != n2t.j0x())
		{
			if (!n2t.c8p(t0h))
			{
				return;
			}
		}
	}
  for (const t0h of m7n)
	{
		if (r1v(n2t, t0h))
		{
			return;
		}
	}
	if (r1v(n2t, n2t.s8j()))
	{
		return;
	}
	if (n2t.s8j() != s5q)
	{
		if (!n2t.c8p(s5q))
		{
			if (s5q != n2t.j0x())
			{
				return;
			}
		}
	}
	if (n2t.j0x() != o4f)
	{
		if (!n2t.c8p(o4f))
		{
			if (o4f != n2t.s8j())
			{
				return;
			}
		}
	}
	z7v(s3b, n2t, n2t.s8j(), s5q, a8g.k4m);
}

function x8x(s3b, n2t)
{
	if (!n2t.z3k(n2t.g1f()))
	{
		return;
	}
	if (!n2t.g2h(n2t.x3z()))
	{
		return;
	}
	if (!n2t.c8p(s3h))
	{
		return;
	}
	if (!n2t.c8p(w2m))
	{
		return;
	}
	if (!n2t.c8p(h3a))
	{
		return;
	}
	if (n8b(n2t, n2t.g1f()))
	{
		return;
	}
	if (n8b(n2t, h3a))
	{
		return;
	}
	z7v(s3b, n2t, n2t.g1f(), w5i, a8g.k4m);
}

function x5r(s3b, n2t)
{
	if (!n2t.z3k(n2t.g1f()))
	{
		return;
	}
	if (!n2t.g2h(n2t.o9s()))
	{
		return;
	}
	if (!n2t.c8p(w0r))
	{
		return;
	}
	if (!n2t.c8p(l5c))
	{
		return;
	}
	if (n8b(n2t, n2t.g1f()))
	{
		return;
	}
	if (n8b(n2t, w0r))
	{
		return;
	}
	z7v(s3b, n2t, n2t.g1f(), j7x, a8g.k4m);
}

function w2p(s3b, n2t)
{
	if (!n2t.p4l(n2t.s8j()))
	{
		return;
	}
	if (!n2t.f0m(n2t.j0x()))
	{
		return;
	}
	if (!n2t.c8p(b4v))
	{
		return;
	}
	if (!n2t.c8p(u1k))
	{
		return;
	}
	if (!n2t.c8p(u8r))
	{
		return;
	}
	if (r1v(n2t, n2t.s8j()))
	{
		return;
	}
	if (r1v(n2t, u8r))
	{
		return;
	}
	z7v(s3b, n2t, n2t.s8j(), s5q, a8g.k4m);
}

function x6w(s3b, n2t)
{
	if (!n2t.p4l(n2t.s8j()))
	{
		return;
	}
	if (!n2t.f0m(n2t.l2n()))
	{
		return;
	}
	if (!n2t.c8p(f3s))
	{
		return;
	}
	if (!n2t.c8p(r1k))
	{
		return;
	}
	if (r1v(n2t, n2t.s8j()))
	{
		return;
	}
	if (r1v(n2t, f3s))
	{
		return;
	}
	z7v(s3b, n2t, n2t.s8j(), z1s, a8g.k4m);
}

function t9z(s3b, n2t)
{
	if (n2t.v8j())
	{
		l3s(s3b, n2t);
	}
	else
	{
		x8x(s3b, n2t);
	}
}

function h0m(s3b, n2t)
{
	if (n2t.v8j())
	{
		c7m(s3b, n2t);
	}
	else
	{
		x5r(s3b, n2t);
	}
}

function m7u(s3b, n2t)
{
	if (n2t.u9m())
	{
		t9z(s3b, n2t);
	}
	if (n2t.c6a())
	{
		h0m(s3b, n2t);
	}
}

function b0w(s3b, n2t)
{
	if (n2t.v8j())
	{
		r6e(s3b, n2t);
	}
	else
	{
		w2p(s3b, n2t);
	}
}

function d9i(s3b, n2t)
{
	if (n2t.v8j())
	{
		l7i(s3b, n2t);
	}
	else
	{
		x6w(s3b, n2t);
	}
}

function v8x(s3b, n2t)
{
	if (n2t.p9x())
	{
		b0w(s3b, n2t);
	}
	if (n2t.i0q())
	{
		d9i(s3b, n2t);
	}
}

function w6p(s3b, n2t)
{
	if (n2t.d7j() == d2w)
	{
		return;
	}
	if (u4i(n2t.d7j()) != l3z)
	{
		return;
	}
	if (!n2t.c8p(n2t.d7j()))
	{
		return;
	}
	let o5w = (n2t.d7j() + 8);
	if (!n2t.c8p(o5w))
	{
		return;
	}
	let r7x = (n2t.d7j() - 8);
	if (!n2t.s2b(r7x))
	{
		return;
	}
	let k5g = westSquare[r7x];
	if (k5g != d2w)
	{
		if (n2t.w8g(k5g))
		{
			l0g(s3b, n2t, k5g, d5p.x1p, n2t.d7j(),
				d5p.x1p, r7x, d5p.x6h, a8g.g9h);
		}
	}
	k5g = eastSquare[r7x];
	if (k5g != d2w)
	{
		if (n2t.w8g(k5g))
		{
			l0g(s3b, n2t, k5g, d5p.x1p, n2t.d7j(),
				d5p.x1p, r7x, d5p.x6h, a8g.g9h);
		}
	}
}

function a1f(s3b, n2t)
{
	if (n2t.d7j() == d2w)
	{
		return;
	}
	if (u4i(n2t.d7j()) != z4d)
	{
		return;
	}
	if (!n2t.c8p(n2t.d7j()))
	{
		return;
	}
	let o5w = (n2t.d7j() - 8);
	if (!n2t.c8p(o5w))
	{
		return;
	}
	let r7x = (n2t.d7j() + 8);
	if (!n2t.w8g(r7x))
	{
		return;
	}
	let k5g = westSquare[r7x];
	if (k5g != d2w)
	{
		if (n2t.s2b(k5g))
		{
			l0g(s3b, n2t, k5g, d5p.x6h, n2t.d7j(),
				d5p.x6h, r7x, d5p.x1p, a8g.g9h);
		}
	}
	k5g = eastSquare[r7x];
	if (k5g != d2w)
	{
		if (n2t.s2b(k5g))
		{
			l0g(s3b, n2t, k5g, d5p.x6h, n2t.d7j(),
				d5p.x6h, r7x, d5p.x1p, a8g.g9h);
		}
	}
}

function l0g(s3b, n2t, i1o, x0m, p2v, y6k, v6z, h1u, type)
{
  let z1e = new b1y();
	z1e.i1o = i1o;
	z1e.x0m = x0m;
	z1e.p2v = p2v;
	z1e.y6k = y6k;
	z1e.v6z = v6z;
	z1e.h1u = h1u;
	z1e.type = type;
	if (u1g(x0m))
	{
		if (y5b(n2t, z1e))
		{
			s3b.push(z1e);
		}
	}
	else
	{
		if (s4f(n2t, z1e))
		{
			s3b.push(z1e);
		}
	}
}

function z7v(s3b, n2t, i1o, p2v, type)
{
	let d8n = n2t.j1a(i1o);
	l0g(s3b, n2t, i1o, d8n, p2v, d8n, d2w, d5p.g3d, type);
}

function i0p(s3b, n2t, i1o, p2v, type)
{
	let d8n = n2t.j1a(i1o);
	let h1u = n2t.j1a(p2v);
	l0g(s3b, n2t, i1o, d8n, p2v, d8n, p2v, h1u, type);
}

function w1p(s3b, n2t, i1o, p2v)
{
	l0g(s3b, n2t, i1o, d5p.x1p, p2v, d5p.w1z, d2w, d5p.g3d, a8g.a0g);
	l0g(s3b, n2t, i1o, d5p.x1p, p2v, d5p.b1p, d2w, d5p.g3d, a8g.q2q);
	l0g(s3b, n2t, i1o, d5p.x1p, p2v, d5p.l1a, d2w, d5p.g3d, a8g.q1x);
	l0g(s3b, n2t, i1o, d5p.x1p, p2v, d5p.i2l, d2w, d5p.g3d, a8g.b8v);
}

function h6o(s3b, n2t, i1o, p2v)
{
	l0g(s3b, n2t, i1o, d5p.x6h, p2v, d5p.g6s, d2w, d5p.g3d, a8g.a0g);
	l0g(s3b, n2t, i1o, d5p.x6h, p2v, d5p.f4r, d2w, d5p.g3d, a8g.q2q);
	l0g(s3b, n2t, i1o, d5p.x6h, p2v, d5p.b3w, d2w, d5p.g3d, a8g.q1x);
	l0g(s3b, n2t, i1o, d5p.x6h, p2v, d5p.f8i, d2w, d5p.g3d, a8g.b8v);
}

function u5r(s3b, n2t, i1o, p2v)
{
	let h1u = n2t.j1a(p2v);
	l0g(s3b, n2t, i1o, d5p.x1p, p2v, d5p.w1z, p2v, h1u, a8g.a0g);
	l0g(s3b, n2t, i1o, d5p.x1p, p2v, d5p.b1p, p2v, h1u, a8g.q2q);
	l0g(s3b, n2t, i1o, d5p.x1p, p2v, d5p.l1a, p2v, h1u, a8g.q1x);
	l0g(s3b, n2t, i1o, d5p.x1p, p2v, d5p.i2l, p2v, h1u, a8g.b8v);
}

function y5a(s3b, n2t, i1o, p2v)
{
	let h1u = n2t.j1a(p2v);
	l0g(s3b, n2t, i1o, d5p.x6h, p2v, d5p.g6s, p2v, h1u, a8g.a0g);
	l0g(s3b, n2t, i1o, d5p.x6h, p2v, d5p.f4r, p2v, h1u, a8g.q2q);
	l0g(s3b, n2t, i1o, d5p.x6h, p2v, d5p.b3w, p2v, h1u, a8g.q1x);
	l0g(s3b, n2t, i1o, d5p.x6h, p2v, d5p.f8i, p2v, h1u, a8g.b8v);
}

function t9f(s3b, n2t, p2v)
{
	let i1o = (p2v - p9v);
	if (n2t.w8g(i1o))
	{
		if (u4i(i1o) == b2q)
		{
			w1p(s3b, n2t, i1o, p2v);
		}
		else
		{
			z7v(s3b, n2t, i1o, p2v, a8g.j8g);
		}
	}
	else
	{
		if (n2t.c8p(i1o))
		{
			if (u4i(p2v) == p1n)
			{
				i1o = (p2v - p9v - p9v);
				if (n2t.w8g(i1o))
				{
					z7v(s3b, n2t, i1o, p2v, a8g.j8g);
				}
			}
		}
	}

	if (n2t.g0d(p2v))
	{
		let i1o = southWestSquare[p2v];
		if (i1o != d2w)
		{
			if (n2t.w8g(i1o))
			{
				if (u4i(i1o) == b2q)
				{
					u5r(s3b, n2t, i1o, p2v);
				}
				else
				{
					i0p(s3b, n2t, i1o, p2v, a8g.j8g);
				}
			}
		}
		i1o = southEastSquare[p2v];
		if (i1o != d2w)
		{
			if (n2t.w8g(i1o))
			{
				if (u4i(i1o) == b2q)
				{
					u5r(s3b, n2t, i1o, p2v);
				}
				else
				{
					i0p(s3b, n2t, i1o, p2v, a8g.j8g);
				}
			}
		}
	}

	if (n2t.d7j() == p2v)
	{
		let o5w = (n2t.d7j() + 8);
		if (!n2t.c8p(o5w))
		{
			return;
		}
		let r7x = (n2t.d7j() - 8);
		if (!n2t.s2b(r7x))
		{
			return;
		}
		let k5g = westSquare[r7x];
		if (k5g != d2w)
		{
			if (n2t.w8g(k5g))
			{
				l0g(s3b, n2t, k5g, d5p.x1p, n2t.d7j(),
					d5p.x1p, r7x, d5p.x6h, a8g.g9h);
			}
		}
		k5g = eastSquare[r7x];
		if (k5g != d2w)
		{
			if (n2t.w8g(k5g))
			{
				l0g(s3b, n2t, k5g, d5p.x1p, n2t.d7j(),
					d5p.x1p, r7x, d5p.x6h, a8g.g9h);
			}
		}
	}
}

function v8u(s3b, n2t, p2v)
{
	let i1o = (p2v - s6b);
	if (n2t.s2b(i1o))
	{
		if (u4i(i1o) == w6a)
		{
			h6o(s3b, n2t, i1o, p2v);
		}
		else
		{
			z7v(s3b, n2t, i1o, p2v, a8g.j8g);
		}
	}
	else
	{
		if (n2t.c8p(i1o))
		{
			if (u4i(p2v) == f3j)
			{
				i1o = (p2v - s6b - s6b);
				if (n2t.s2b(i1o))
				{
					z7v(s3b, n2t, i1o, p2v, a8g.j8g);
				}
			}
		}
	}

	if (n2t.u1g(p2v))
	{
		let i1o = northWestSquare[p2v];
		if (i1o != d2w)
		{
			if (n2t.s2b(i1o))
			{
				if (u4i(i1o) == w6a)
				{
					y5a(s3b, n2t, i1o, p2v);
				}
				else
				{
					i0p(s3b, n2t, i1o, p2v, a8g.j8g);
				}
			}
		}
		i1o = northEastSquare[p2v];
		if (i1o != d2w)
		{
			if (n2t.s2b(i1o))
			{
				if (u4i(i1o) == w6a)
				{
					y5a(s3b, n2t, i1o, p2v);
				}
				else
				{
					i0p(s3b, n2t, i1o, p2v, a8g.j8g);
				}
			}
		}
	}

	if (n2t.d7j() == p2v)
	{
		let o5w = (n2t.d7j() - 8);
		if (!n2t.c8p(o5w))
		{
			return;
		}
		let r7x = (n2t.d7j() + 8);
		if (!n2t.w8g(r7x))
		{
			return;
		}
		let k5g = westSquare[r7x];
		if (k5g != d2w)
		{
			if (n2t.s2b(k5g))
			{
				l0g(s3b, n2t, k5g, d5p.x6h, n2t.d7j(),
					d5p.x6h, r7x, d5p.x1p, a8g.g9h);
			}
		}
		k5g = eastSquare[r7x];
		if (k5g != d2w)
		{
			if (n2t.s2b(k5g))
			{
				l0g(s3b, n2t, k5g, d5p.x6h, n2t.d7j(),
					d5p.x6h, r7x, d5p.x1p, a8g.g9h);
			}
		}
	}
}

function m8z(s3b, n2t, p2v, d8n)
{
	p3f(s3b, n2t, p2v, knightSquares[p2v], d8n);
}

function f4y(s3b, n2t, p2v, d8n)
{
	z8t(s3b, n2t, p2v, northEastSquares[p2v], d8n);
	z8t(s3b, n2t, p2v, southEastSquares[p2v], d8n);
	z8t(s3b, n2t, p2v, southWestSquares[p2v], d8n);
	z8t(s3b, n2t, p2v, northWestSquares[p2v], d8n);
}

function y6e(s3b, n2t, p2v, d8n)
{
	z8t(s3b, n2t, p2v, northSquares[p2v], d8n);
	z8t(s3b, n2t, p2v, eastSquares[p2v], d8n);
	z8t(s3b, n2t, p2v, southSquares[p2v], d8n);
	z8t(s3b, n2t, p2v, westSquares[p2v], d8n);
}

function c0w(s3b, n2t, p2v, d8n)
{
	z8t(s3b, n2t, p2v, northSquares[p2v], d8n);
	z8t(s3b, n2t, p2v, northEastSquares[p2v], d8n);
	z8t(s3b, n2t, p2v, eastSquares[p2v], d8n);
	z8t(s3b, n2t, p2v, southEastSquares[p2v], d8n);
	z8t(s3b, n2t, p2v, southSquares[p2v], d8n);
	z8t(s3b, n2t, p2v, southWestSquares[p2v], d8n);
	z8t(s3b, n2t, p2v, westSquares[p2v], d8n);
	z8t(s3b, n2t, p2v, northWestSquares[p2v], d8n);
}

function h8n(s3b, n2t, p2v, d8n)
{
	x6f(s3b, n2t, p2v, kingSquares[p2v], d8n);
}

function z8t(s3b, n2t, p2v, b3r, d8n)
{
  for (const i1o of b3r)
	{
		if (n2t.j1a(i1o) == d8n)
		{
			if (n2t.c8p(p2v))
			{
				z7v(s3b, n2t, i1o, p2v, a8g.j8g);
			}
			else
			{
				i0p(s3b, n2t, i1o, p2v, a8g.j8g);
			}
			break;
		}
		else
		{
			if (!n2t.c8p(i1o))
			{
				break;
			}
		}
	}
}

function x6f(s3b, n2t, p2v, b3r, d8n)
{
  for (const i1o of b3r)
	{
		if (n2t.j1a(i1o) == d8n)
		{
			if (n2t.c8p(p2v))
			{
				z7v(s3b, n2t, i1o, p2v, a8g.j8g);
				break;
			}
			else
			{
				i0p(s3b, n2t, i1o, p2v, a8g.j8g);
				break;
			}
		}
	}
}

function p3f(s3b, n2t, p2v, b3r, d8n)
{
  for (const i1o of b3r)
	{
		if (n2t.j1a(i1o) == d8n)
		{
			if (n2t.c8p(p2v))
			{
				z7v(s3b, n2t, i1o, p2v, a8g.j8g);
				
			}
			else
			{
				i0p(s3b, n2t, i1o, p2v, a8g.j8g);
				
			}
		}
	}
}

function q5s(r2x, n6f)
{
  for (const p2v of n6f)
	{
		if (r2x[p2v] != d5p.g3d)
		{
			if (g0d(r2x[p2v]))
			{
				return false;
			}
			else
			{
				if (r2x[p2v] == d5p.b1p || r2x[p2v] == d5p.i2l)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function w3o(r2x, n6f)
{
  for (const p2v of n6f)
	{
		if (r2x[p2v] != d5p.g3d)
		{
			if (g0d(r2x[p2v]))
			{
				return false;
			}
			else
			{
				if (r2x[p2v] == d5p.l1a || r2x[p2v] == d5p.i2l)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function z5y(r2x, n6f)
{
  for (const p2v of n6f)
	{
		if (r2x[p2v] != d5p.g3d)
		{
			if (g0d(r2x[p2v]))
			{
				return false;
			}
			else
			{
				if (r2x[p2v] == d5p.l1a || r2x[p2v] == d5p.i2l)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function u7d(r2x, p2v)
{
	if (p2v == d2w)
	{
		return false;
	}
	if (r2x[p2v] == d5p.x1p)
	{
		return true;
	}
	return false;
}

function u6c(r2x, n6f)
{
  for (const p2v of n6f)
	{
		if (r2x[p2v] == d5p.w1z)
		{
			return true;
		}
	}
	return false;
}

function v3l(r2x, n6f)
{
  for (const p2v of n6f)
	{
		if (r2x[p2v] == d5p.y3v)
		{
			return true;
		}
	}
	return false;
}

function q6i(r2x, n6f)
{
  for (const p2v of n6f)
	{
		if (r2x[p2v] != d5p.g3d)
		{
			if (u1g(r2x[p2v]))
			{
				return false;
			}
			else
			{
				if (r2x[p2v] == d5p.f4r || r2x[p2v] == d5p.f8i)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function s7m(r2x, n6f)
{
  for (const p2v of n6f)
	{
		if (r2x[p2v] != d5p.g3d)
		{
			if (u1g(r2x[p2v]))
			{
				return false;
			}
			else
			{
				if (r2x[p2v] == d5p.b3w || r2x[p2v] == d5p.f8i)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function v4i(r2x, n6f)
{
  for (const p2v of n6f)
	{
		if (r2x[p2v] != d5p.g3d)
		{
			if (u1g(r2x[p2v]))
			{
				return false;
			}
			else
			{
				if (r2x[p2v] == d5p.b3w || r2x[p2v] == d5p.f8i)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function s3z(r2x, p2v)
{
	if (p2v == d2w)
	{
		return false;
	}
	if (r2x[p2v] == d5p.x6h)
	{
		return true;
	}
	return false;
}

function e2x(r2x, n6f)
{
  for (const p2v of n6f)
	{
		if (r2x[p2v] == d5p.g6s)
		{
			return true;
		}
	}
	return false;
}

function e5e(r2x,  n6f)
{
  for (const p2v of n6f)
	{
		if (r2x[p2v] == d5p.j1i)
		{
			return true;
		}
	}
	return false;
}

function x2t(n2t, n6f, d8o)
{
  for (const p2v of n6f)
	{
		if (!n2t.c8p(p2v))
		{
			if (n2t.g0d(p2v))
			{
				return false;
			}
			else
			{
				if (n2t.e0b(p2v) || n2t.c4c(p2v))
				{
					d8o = p2v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function v6v(n2t, n6f, d8o)
{
  for (const p2v of n6f)
	{
		if (!n2t.c8p(p2v))
		{
			if (n2t.u1g(p2v))
			{
				return false;
			}
			else
			{
				if (n2t.a3p(p2v) || n2t.u1b(p2v))
				{
					d8o = p2v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function f7b(n2t, n6f, d8o)
{
  for (const p2v of n6f)
	{
		if (!n2t.c8p(p2v))
		{
			if (n2t.g0d(p2v))
			{
				return false;
			}
			else
			{
				if (n2t.g2h(p2v) || n2t.c4c(p2v))
				{
					d8o = p2v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function x9q(n2t, n6f, d8o)
{
  for (const p2v of n6f)
	{
		if (!n2t.c8p(p2v))
		{
			if (n2t.u1g(p2v))
			{
				return false;
			}
			else
			{
				if (n2t.f0m(p2v) || n2t.u1b(p2v))
				{
					d8o = p2v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function z7h(n2t, n6f, d8o)
{
  for (const p2v of n6f)
	{
		if (!n2t.c8p(p2v))
		{
			if (n2t.g0d(p2v))
			{
				return false;
			}
			else
			{
				if (n2t.g2h(p2v) || n2t.c4c(p2v))
				{
					d8o = p2v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function n7n(n2t, n6f, d8o)
{
  for (const p2v of n6f)
	{
		if (!n2t.c8p(p2v))
		{
			if (n2t.u1g(p2v))
			{
				return false;
			}
			else
			{
				if (n2t.f0m(p2v) || n2t.u1b(p2v))
				{
					d8o = p2v;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function z1d(n2t, p2v)
{
	if (p2v == d2w)
	{
		return false;
	}
	if (n2t.w8g(p2v))
	{
		return true;
	}
	return false;
}

function g0b(n2t, p2v)
{
	if (p2v == d2w)
	{
		return false;
	}
	if (n2t.s2b(p2v))
	{
		return true;
	}
	return false;
}

function j6r(n2t, n6f, d8o)
{
  for (const p2v of n6f)
	{
		if (n2t.o2v(p2v))
		{
			d8o = p2v;
			return true;
		}
	}
	return false;
}



function j5g(n2t, n6f, d8o)
{
  for (const p2v of n6f)
	{
		if (n2t.c2s(p2v))
		{
			d8o = p2v;
			return true;
		}
	}
	return false;
}

function u0w(n2t, n6f, d8o)
{
  for (const p2v of n6f)
	{
		if (n2t.z3k(p2v))
		{
			d8o = p2v;
			return true;
		}
	}
	return false;
}

function j7q(n2t, n6f, d8o)
{
  for (const p2v of n6f)
	{
		if (n2t.p4l(p2v))
		{
			d8o = p2v;
			return true;
		}
	}
	return false;
}

function a9g(r2x, t0h)
{
	if (q5s(r2x, northEastSquares[t0h])) return true;
	if (q5s(r2x, southEastSquares[t0h])) return true;
	if (q5s(r2x, southWestSquares[t0h])) return true;
	if (q5s(r2x, northWestSquares[t0h])) return true;
	if (w3o(r2x, northSquares[t0h])) return true;
	if (z5y(r2x, eastSquares[t0h])) return true;
	if (w3o(r2x, southSquares[t0h])) return true;
	if (z5y(r2x, westSquares[t0h])) return true;
	if (u7d(r2x, southEastSquare[t0h])) return true;
	if (u7d(r2x, southWestSquare[t0h])) return true;
	if (u6c(r2x, knightSquares[t0h])) return true;
	if (v3l(r2x, kingSquares[t0h])) return true;
	return false;
}

function r4c(r2x, t0h)
{
	if (q6i(r2x, northEastSquares[t0h])) return true;
	if (q6i(r2x, southEastSquares[t0h])) return true;
	if (q6i(r2x, southWestSquares[t0h])) return true;
	if (q6i(r2x, northWestSquares[t0h])) return true;
	if (s7m(r2x, northSquares[t0h])) return true;
	if (v4i(r2x, eastSquares[t0h])) return true;
	if (s7m(r2x, southSquares[t0h])) return true;
	if (v4i(r2x, westSquares[t0h])) return true;
	if (s3z(r2x, northEastSquare[t0h])) return true;
	if (s3z(r2x, northWestSquare[t0h])) return true;
	if (e2x(r2x, knightSquares[t0h])) return true;
	if (e5e(r2x, kingSquares[t0h])) return true;
	return false;
}

function r1v(n2t, t0h)
{
	let d8o = d2w;
	if (x2t(n2t, northEastSquares[t0h], d8o)) return true;
	if (x2t(n2t, southEastSquares[t0h], d8o)) return true;
	if (x2t(n2t, southWestSquares[t0h], d8o)) return true;
	if (x2t(n2t, northWestSquares[t0h], d8o)) return true;
	if (f7b(n2t, northSquares[t0h], d8o)) return true;
	if (z7h(n2t, eastSquares[t0h], d8o)) return true;
	if (f7b(n2t, southSquares[t0h], d8o)) return true;
	if (z7h(n2t, westSquares[t0h], d8o)) return true;
	if (z1d(n2t, southEastSquare[t0h])) return true;
	if (z1d(n2t, southWestSquare[t0h])) return true;
	if (j6r(n2t, knightSquares[t0h], d8o)) return true;
	if (u0w(n2t, kingSquares[t0h], d8o)) return true;
	return false;
}

function n8b(n2t, t0h)
{
	let d8o = d2w;
	if (v6v(n2t, northEastSquares[t0h], d8o)) return true;
	if (v6v(n2t, southEastSquares[t0h], d8o)) return true;
	if (v6v(n2t, southWestSquares[t0h], d8o)) return true;
	if (v6v(n2t, northWestSquares[t0h], d8o)) return true;
	if (x9q(n2t, northSquares[t0h], d8o)) return true;
	if (n7n(n2t, eastSquares[t0h], d8o)) return true;
	if (x9q(n2t, southSquares[t0h], d8o)) return true;
	if (n7n(n2t, westSquares[t0h], d8o)) return true;
	if (g0b(n2t, northEastSquare[t0h])) return true;
	if (g0b(n2t, northWestSquare[t0h])) return true;
	if (j5g(n2t, knightSquares[t0h], d8o)) return true;
	if (j7q(n2t, kingSquares[t0h], d8o)) return true;
	return false;
}

function k6h()
{
	if (moveGeneratorInited) return;
	moveGeneratorInited = true;
 	for (const t0h of x6a)
	{
 		if (u4i(t0h) <= b2q && m9h(t0h) <= a8h)
		{
			let p2v = t0h + x0k;
			northEastSquare.push(p2v);
		}
		else
		{
			northEastSquare.push(d2w);
		}
		if (m9h(t0h) <= a8h)
		{
			let p2v = t0h + e7b;
			eastSquare.push(p2v);
		}
		else
		{
			eastSquare.push(d2w);
		}
		if (u4i(t0h) >= w6a && m9h(t0h) <= a8h)
		{
			let p2v = t0h + a0d;
			southEastSquare.push(p2v);
		}
		else
		{
			southEastSquare.push(d2w);
		}
		if (u4i(t0h) >= w6a && m9h(t0h) >= a1k)
		{
			let p2v = t0h + x2h;
			southWestSquare.push(p2v);
		}
		else
		{
			southWestSquare.push(d2w);
		}
		if (m9h(t0h) >= a1k)
		{
			let p2v = t0h + u9h;
			westSquare.push(p2v);
		}
		else
		{
			westSquare.push(d2w);
		}
		if (u4i(t0h) <= b2q && m9h(t0h) >= a1k)
		{
			let p2v = t0h + o9d;
			northWestSquare.push(p2v);
		}
		else
		{
			northWestSquare.push(d2w);
		}
	}

  for (const t0h of x6a)
	{
  	northSquares.push(x8m(t0h));
		northEastSquares.push(x6i(t0h));
		eastSquares.push(b1z(t0h));
		southEastSquares.push(f1p(t0h));
		southSquares.push(d1e(t0h));
		southWestSquares.push(p3s(t0h));
		westSquares.push(a4q(t0h));
		northWestSquares.push(v3k(t0h));
		kingSquares.push(u8f(t0h));
		knightSquares.push(j4c(t0h));
	}
}

function c6r(n2t)
{
	let s3b = [];

	if (n2t.k2b())
	{
		let i4e = n2t.i4e();
    for (const t0h of x6a)
		{
			if (!i4e) break;
			if (n2t.u1g(t0h))
			{
				switch (n2t.j1a(t0h))
				{
					case d5p.x1p:
						d7d(s3b, n2t, t0h);
						i4e--;
						break;
					case d5p.w1z:
						x9k(s3b, n2t, t0h);
						i4e--;
						break;
					case d5p.b1p:
						x8a(s3b, n2t, t0h);
						i4e--;
						break;
					case d5p.l1a:
						f0t(s3b, n2t, t0h);
						i4e--;
						break;
					case d5p.i2l:
						v6w(s3b, n2t, t0h);
						i4e--;
						break;
					case d5p.y3v:
						i7p(s3b, n2t, t0h);
						i4e--;
						break;
					default:
						break;
				}
			}
		}
		w6p(s3b, n2t);
		m7u(s3b, n2t);
	}
	else
	{
		let y2t = n2t.y2t();
    for (const t0h of x6a)
		{
			if (!y2t) break;
			if (n2t.g0d(t0h))
			{
				switch (n2t.j1a(t0h))
				{
					case d5p.x6h:
						e5s(s3b, n2t, t0h);
						y2t--;
						break;
					case d5p.g6s:
						h4r(s3b, n2t, t0h);
						y2t--;
						break;
					case d5p.f4r:
						n5x(s3b, n2t, t0h);
						y2t--;
						break;
					case d5p.b3w:
						g8n(s3b, n2t, t0h);
						y2t--;
						break;
					case d5p.f8i:
						p6x(s3b, n2t, t0h);
						y2t--;
						break;
					case d5p.j1i:
						t1p(s3b, n2t, t0h);
						y2t--;
						break;
					default:
						break;
				}
			}
		}
		a1f(s3b, n2t);
		v8x(s3b, n2t);
	}

	return s3b;
}

function b7m(n2t, j1b)
{
	let s3b = [];

	if (n2t.k2b())
	{
		if (!n2t.u1g(j1b))
		{
			t9f(s3b, n2t, j1b);
		}
	}
	else
	{
		if (!n2t.g0d(j1b))
		{
			v8u(s3b, n2t, j1b);
		}
	}

	return s3b;
}

function j4f(n2t, j1b)
{
	let s3b = [];

	if (n2t.k2b())
	{
		if (!n2t.u1g(j1b))
		{
			m8z(s3b, n2t, j1b, d5p.w1z);
		}
	}
	else
	{
		if (!n2t.g0d(j1b))
		{
			m8z(s3b, n2t, j1b, d5p.g6s);
		}
	}

	return s3b;
}

function y6v(n2t, j1b)
{
	let s3b = [];

	if (n2t.k2b())
	{
		if (!n2t.u1g(j1b))
		{
			f4y(s3b, n2t, j1b, d5p.b1p);
		}
	}
	else
	{
		if (!n2t.g0d(j1b))
		{
			f4y(s3b, n2t, j1b, d5p.f4r);
		}
	}

	return s3b;
}

function w2l(n2t, j1b)
{
	let s3b = [];

	if (n2t.k2b())
	{
		if (!n2t.u1g(j1b))
		{
			y6e(s3b, n2t, j1b, d5p.l1a);
		}
	}
	else
	{
		if (!n2t.g0d(j1b))
		{
			y6e(s3b, n2t, j1b, d5p.b3w);
		}
	}

	return s3b;
}

function k9f(n2t, j1b)
{
	let s3b = [];

	if (n2t.k2b())
	{
		if (!n2t.u1g(j1b))
		{
			c0w(s3b, n2t, j1b, d5p.i2l);
		}
	}
	else
	{
		if (!n2t.g0d(j1b))
		{
			c0w(s3b, n2t, j1b, d5p.f8i);
		}
	}

	return s3b;
}

function f7z(n2t, j1b)
{
	let s3b = [];

	let h0r = d2w;
	if (n2t.k2b())
	{
		h0r = n2t.y3v();
	}
	else
	{
		h0r = n2t.j1i();
	}

	if (h0r == d2w)
	{
		return s3b;
	}

	if (n2t.k2b())
	{
		i7p(s3b, n2t, h0r);
		m7u(s3b, n2t);
	}
	else
	{
		t1p(s3b, n2t, h0r);
		v8x(s3b, n2t);
	}

	return s3b;
}

function y0k(n2t, j1b)
{
	let s3b = [];

	let h0r = d2w;
	if (n2t.k2b())
	{
		h0r = n2t.y3v();
	}
	else
	{
		h0r = n2t.j1i();
	}

	if (h0r == d2w)
	{
		return s3b;
	}

	if (n2t.k2b())
	{
		if (!n2t.u1g(j1b))
		{
			h8n(s3b, n2t, j1b, d5p.y3v);
		}
	}
	else
	{
		if (!n2t.g0d(j1b))
		{
			h8n(s3b, n2t, j1b, d5p.j1i);
		}
	}

	return s3b;
}

function t5a(n2t)
{
	let s3b = [];

	if (n2t.k2b())
	{
		if (!n2t.z3k(n2t.g1f()))
		{
			return s3b;
		}
		if (!n2t.u9m())
		{
			return s3b;
		}
		t9z(s3b, n2t);
		return s3b;
	}
	else
	{
		if (!n2t.p4l(n2t.s8j()))
		{
			return s3b;
		}
		if (!n2t.p9x())
		{
			return s3b;
		}
		b0w(s3b, n2t);
		return s3b;
	}
}

function j3m(n2t)
{
	let s3b = [];

	if (n2t.k2b())
	{
		if (!n2t.z3k(n2t.g1f()))
		{
			return s3b;
		}
		if (!n2t.c6a())
		{
			return s3b;
		}
		h0m(s3b, n2t);
		return s3b;
	}
	else
	{
		if (!n2t.p4l(n2t.s8j()))
		{
			return s3b;
		}
		if (!n2t.i0q())
		{
			return s3b;
		}
		d9i(s3b, n2t);
		return s3b;
	}
}

function x1i(n2t)
{
	if (n2t.k2b())
	{
		if (n2t.y3v() != d2w)
		{
			return n8b(n2t, n2t.y3v());
		}
	}
	else
	{
		if (n2t.j1i() != d2w)
		{
			return r1v(n2t, n2t.j1i());
		}
	}
	return false;
}




function b1o(n2t, i1o)
{
	let f6i = c6r(n2t);
	let k2j = [];
  for (const i1j of f6i)
	{
		if (i1j.i1o == i1o)
		{
			k2j.push(i1j);
		}
	}
	return k2j;
}

function a6b(n2t, p2v)
{
	let f6i = c6r(n2t);
	let l6i = [];
  for (const i1j of f6i)
	{
		if (i1j.p2v == p2v)
		{
			l6i.push(i1j);
		}
	}
	return l6i;
}

function y4j(n2t, i1o, p2v)
{
	let f6i = c6r(n2t);
	let b1v = [];
  for (const i1j of f6i)
	{
		if (i1j.i1o == i1o && i1j.p2v == p2v)
		{
			b1v.push(i1j);
		}
	}
	return b1v;
}

function f2c(n2t, i1o, p2v, type)
{
	let z1e = new b1y();
	if (type == a8g.null)
	{
		return z1e;
	}

	z1e.i1o = i1o;
	z1e.p2v = p2v;
	z1e.type = type;
	if (type == a8g.j8g)
	{
		if (n2t.j1a(z1e.p2v) != d5p.g3d)
		{
			z1e.v6z = z1e.p2v;
			z1e.h1u = n2t.j1a(z1e.p2v);
		}
		z1e.x0m = n2t.j1a(z1e.i1o);
		z1e.y6k = z1e.x0m;
	}
	else if (type == a8g.k4m)
	{
		z1e.x0m = n2t.j1a(z1e.i1o);
		z1e.y6k = z1e.x0m;
	}
	else if (type == a8g.g9h)
	{
		z1e.x0m = n2t.j1a(z1e.i1o);
		z1e.y6k = z1e.x0m;
		if (u1g(z1e.x0m))
		{
			z1e.v6z = (z1e.p2v - 8);
			z1e.h1u = d5p.x6h;
		}
		else
		{
			z1e.v6z = (z1e.p2v + 8);
			z1e.h1u = d5p.x1p;
		}
	}
	else if (type == a8g.b8v)
	{
		if (n2t.j1a(z1e.p2v) != d5p.g3d)
		{
			z1e.v6z = z1e.p2v;
			z1e.h1u = n2t.j1a(z1e.p2v);
		}
		z1e.x0m = n2t.j1a(z1e.i1o);
		if (u1g(z1e.x0m))
		{
			z1e.y6k = d5p.i2l;
		}
		else
		{
			z1e.y6k = d5p.f8i;
		}
	}
	else if (type == a8g.q1x)
	{
		if (n2t.j1a(z1e.p2v) != d5p.g3d)
		{
			z1e.v6z = z1e.p2v;
			z1e.h1u = n2t.j1a(z1e.p2v);
		}
		z1e.x0m = n2t.j1a(z1e.i1o);
		if (u1g(z1e.x0m))
		{
			z1e.y6k = d5p.l1a;
		}
		else
		{
			z1e.y6k = d5p.b3w;
		}
	}
	else if (type == a8g.q2q)
	{
		if (n2t.j1a(z1e.p2v) != d5p.g3d)
		{
			z1e.v6z = z1e.p2v;
			z1e.h1u = n2t.j1a(z1e.p2v);
		}
		z1e.x0m = n2t.j1a(z1e.i1o);
		if (u1g(z1e.x0m))
		{
			z1e.y6k = d5p.b1p;
		}
		else
		{
			z1e.y6k = d5p.f4r;
		}
	}
	else if (type == a8g.a0g)
	{
		if (n2t.j1a(z1e.p2v) != d5p.g3d)
		{
			z1e.v6z = z1e.p2v;
			z1e.h1u = n2t.j1a(z1e.p2v);
		}
		z1e.x0m = n2t.j1a(z1e.i1o);
		if (u1g(z1e.x0m))
		{
			z1e.y6k = d5p.w1z;
		}
		else
		{
			z1e.y6k = d5p.g6s;
		}
	}
	return z1e;
}

function f2c(r2x, i1o, p2v, type)
{
	let z1e = new b1y();
	if (type == a8g.null)
	{
		return z1e;
	}

	z1e.i1o = i1o;
	z1e.p2v = p2v;
	z1e.type = type;
	if (type == a8g.j8g)
	{
		if (r2x[z1e.p2v] != d5p.g3d)
		{
			z1e.v6z = z1e.p2v;
			z1e.h1u = r2x[z1e.p2v];
		}
		z1e.x0m = r2x[z1e.i1o];
		z1e.y6k = z1e.x0m;
	}
	else if (type == a8g.k4m)
	{
		z1e.x0m = r2x[z1e.i1o];
		z1e.y6k = z1e.x0m;
	}
	else if (type == a8g.g9h)
	{
		z1e.x0m = r2x[z1e.i1o];
		z1e.y6k = z1e.x0m;
		if (u1g(z1e.x0m))
		{
			z1e.v6z = (z1e.p2v - 8);
			z1e.h1u = d5p.x6h;
		}
		else
		{
			z1e.v6z = (z1e.p2v + 8);
			z1e.h1u = d5p.x1p;
		}
	}
	else if (type == a8g.b8v)
	{
		if (r2x[z1e.p2v] != d5p.g3d)
		{
			z1e.v6z = z1e.p2v;
			z1e.h1u = r2x[z1e.p2v];
		}
		z1e.x0m = r2x[z1e.i1o];
		if (u1g(z1e.x0m))
		{
			z1e.y6k = d5p.i2l;
		}
		else
		{
			z1e.y6k = d5p.f8i;
		}
	}
	else if (type == a8g.q1x)
	{
		if (r2x[z1e.p2v] != d5p.g3d)
		{
			z1e.v6z = z1e.p2v;
			z1e.h1u = r2x[z1e.p2v];
		}
		z1e.x0m = r2x[z1e.i1o];
		if (u1g(z1e.x0m))
		{
			z1e.y6k = d5p.l1a;
		}
		else
		{
			z1e.y6k = d5p.b3w;
		}
	}
	else if (type == a8g.q2q)
	{
		if (r2x[z1e.p2v] != d5p.g3d)
		{
			z1e.v6z = z1e.p2v;
			z1e.h1u = r2x[z1e.p2v];
		}
		z1e.x0m = r2x[z1e.i1o];
		if (u1g(z1e.x0m))
		{
			z1e.y6k = d5p.b1p;
		}
		else
		{
			z1e.y6k = d5p.f4r;
		}
	}
	else if (type == a8g.a0g)
	{
		if (r2x[z1e.p2v] != d5p.g3d)
		{
			z1e.v6z = z1e.p2v;
			z1e.h1u = r2x[z1e.p2v];
		}
		z1e.x0m = r2x[z1e.i1o];
		if (u1g(z1e.x0m))
		{
			z1e.y6k = d5p.w1z;
		}
		else
		{
			z1e.y6k = d5p.g6s;
		}
	}
	return z1e;
}

const p9v 						=   8; 
const s6b 						=  -8; 
const e7b 	      			=   1; 
const u9h 	      			=  -1; 
const y8a 		=  17; 
const d4b 		=  10; 
const x0k 				=   9; 
const n2c 		=   6; 
const e1n 		=  15; 
const o9d 				=   7; 
const x2s 		= -17; 
const s0u 		= -10; 
const x2h 				=  -9; 
const w0t 		=  -6; 
const e3l 		= -15; 
const a0d 				=  -7; 

function x8m(t0h)
{
	let z8o = [];
	let p1v = p9v;
	let p2v = t0h;
	while (u4i(p2v) <= b2q)
	{
		p2v = p2v + p1v;
		z8o.push(p2v);
	}
	return z8o;
}

function x6i(t0h)
{
	let z8o = [];
	let p1v = x0k;
	let p2v = t0h;
	while (u4i(p2v) <= b2q && m9h(p2v) <= a8h)
	{
		p2v = p2v + p1v;
		z8o.push(p2v);
	}
	return z8o;
}

function b1z(t0h)
{
	let z8o = [];
	let p1v = e7b;
	let p2v = t0h;
	while (m9h(p2v) <= a8h)
	{
		p2v = p2v + p1v;
		z8o.push(p2v);
	}
	return z8o;
}

function f1p(t0h)
{
	let z8o = [];
	let p1v = a0d;
	let p2v = t0h;
	while (u4i(p2v) >= w6a && m9h(p2v) <= a8h)
	{
		p2v = p2v + p1v;
		z8o.push(p2v);
	}
	return z8o;
}

function d1e(t0h)
{
	let z8o = [];
	let p1v = s6b;
	let p2v = t0h;
	while (u4i(p2v) >= w6a)
	{
		p2v = p2v + p1v;
		z8o.push(p2v);
	}
	return z8o;
}

function p3s(t0h)
{
	let z8o = [];
	let p1v = x2h;
	let p2v = t0h;
	while (u4i(p2v) >= w6a && m9h(p2v) >= a1k)
	{
		p2v = p2v + p1v;
		z8o.push(p2v);
	}
	return z8o;
}

function a4q(t0h)
{
	let z8o = [];
	let p1v = u9h;
	let p2v = t0h;
	while (m9h(p2v) >= a1k)
	{
		p2v = p2v + p1v;
		z8o.push(p2v);
	}
	return z8o;
}

function v3k(t0h)
{
	let z8o = [];
	let p1v = o9d;
	let p2v = t0h;
	while (u4i(p2v) <= b2q && m9h(p2v) >= a1k)
	{
		p2v = p2v + p1v;
		z8o.push(p2v);
	}
	return z8o;
}

function j4c(t0h)
{
	let z8o = [];
	if (u4i(t0h) <= l3z && m9h(t0h) <= a8h)
	{
		let p2v = t0h + y8a;
		z8o.push(p2v);
	}
	if (u4i(t0h) <= b2q && m9h(t0h) <= j2o)
	{
		let p2v = t0h + d4b;
		z8o.push(p2v);
	}
	if (u4i(t0h) >= w6a && m9h(t0h) <= j2o)
	{
		let p2v = t0h + w0t;
		z8o.push(p2v);
	}
	if (u4i(t0h) >= z4d && m9h(t0h) <= a8h)
	{
		let p2v = t0h + e3l;
		z8o.push(p2v);
	}
	if (u4i(t0h) >= z4d && m9h(t0h) >= a1k)
	{
		let p2v = t0h + x2s;
		z8o.push(p2v);
	}
	if (u4i(t0h) >= w6a && m9h(t0h) >= n8x)
	{
		let p2v = t0h + s0u;
		z8o.push(p2v);
	}
	if (u4i(t0h) <= b2q && m9h(t0h) >= n8x)
	{
		p2v = t0h + n2c;
		z8o.push(p2v);
	}
	if (u4i(t0h) <= l3z && m9h(t0h) >= a1k)
	{
		let p2v = t0h + e1n;
		z8o.push(p2v);
	}
	return z8o;
}

function u8f(t0h)
{
	let z8o = [];
	if (u4i(t0h) <= b2q)
	{
		let p2v = t0h + p9v;
		z8o.push(p2v);
	}
	if (u4i(t0h) <= b2q && m9h(t0h) <= a8h)
	{
		let p2v = t0h + x0k;
		z8o.push(p2v);
	}
	if (m9h(t0h) <= a8h)
	{
		let p2v = t0h + e7b;
		z8o.push(p2v);
	}
	if (u4i(t0h) >= w6a && m9h(t0h) <= a8h)
	{
		let p2v = t0h + a0d;
		z8o.push(p2v);
	}
	if (u4i(t0h) >= w6a)
	{
		let p2v = t0h + s6b;
		z8o.push(p2v);
	}
	if (u4i(t0h) >= w6a && m9h(t0h) >= a1k)
	{
		let p2v = t0h + x2h;
		z8o.push(p2v);
	}
	if (m9h(t0h) >= a1k)
	{
		let p2v = t0h + u9h;
		z8o.push(p2v);
	}
	if (u4i(t0h) <= b2q && m9h(t0h) >= a1k)
	{
		let p2v = t0h + o9d;
		z8o.push(p2v);
	}
	return z8o;
}

const a8g =
{
  f0x : 0,  
	j8g : 1,
	k4m : 2,
	g9h : 3,
	a0g : 4,
	q2q : 5,
	q1x : 6,
	b8v : 7
};

function q1b(d8n)
{
	switch (d8n)
	{
		case d5p.x1p:
		case d5p.x6h:
			return g5i.f7t;
		case d5p.w1z:
		case d5p.g6s:
			return g5i.x9b;
		case d5p.b1p:
		case d5p.f4r:
			return g5i.y0u;
		case d5p.l1a:
		case d5p.b3w:
			return g5i.y0l;
		case d5p.i2l:
		case d5p.f8i:
			return g5i.n7o;
		case d5p.y3v:
		case d5p.j1i:
			return g5i.king;
		case d5p.g3d:
			return g5i.f7t;
	}
}

function v2s(n2t, z1e, q2f)
{
 	let i7a = '';
	if (z1e.g3d())
	{
		i7a += "--";
	}
	else if (q3s(z1e.x0m))
	{
    if (z1e.w3x())
    {
			let g9b = m9h(z1e.i1o);
			i7a = g4s(g9b) + "x" + s4c(z1e.p2v);
    }
    else
    {
 			i7a = s4c(z1e.p2v);
    }
		if (z1e.m7o())
		{
			i7a += "=";
			i7a += s7p(q1b(z1e.y6k));
		}
	}
	else if (z1e.x0m == d5p.y3v && z1e.i7q())
	{
		if (z1e.p2v == w5i)
		{
			i7a = "O-O-O";
		}
		else
		{
			i7a = "O-O";
		}
	}
	else if (z1e.x0m == d5p.j1i && z1e.i7q())
	{
		if (z1e.p2v == s5q)
		{
			i7a = "O-O-O";
		}
		else
		{
			i7a = "O-O";
		}
	}
	else
	{
		i7a = s7p(q1b(z1e.x0m));
    let f6i = [];
    if (u1g(z1e.x0m))
    {
      if (z1e.x0m == d5p.w1z)
      {
        f6i = j4f(n2t, z1e.p2v);
      }
      else if (z1e.x0m == d5p.b1p)
      {
        f6i = y6v(n2t, z1e.p2v);
      }
      else if (z1e.x0m == d5p.l1a)
      {
        f6i = w2l(n2t, z1e.p2v);
      }
      else if (z1e.x0m == d5p.i2l)
      {
        f6i = k9f(n2t, z1e.p2v);
      }
      else if (z1e.x0m == d5p.y3v)
      {
        f6i = y0k(n2t, z1e.p2v);
      }
    }
    else
    {
      if (z1e.x0m == d5p.g6s)
      {
        f6i = j4f(n2t, z1e.p2v);
      }
      else if (z1e.x0m == d5p.f4r)
      {
        f6i = y6v(n2t, z1e.p2v);
      }
      else if (z1e.x0m == d5p.b3w)
      {
        f6i = w2l(n2t, z1e.p2v);
      }
      else if (z1e.x0m == d5p.f8i)
      {
        f6i = k9f(n2t, z1e.p2v);
      }
      else if (z1e.x0m == d5p.j1i)
      {
        f6i = y0k(n2t, z1e.p2v);
      }
    }
    if (f6i.length > 1)
    {
      
      let i1b = 0;
      let g9b = m9h(z1e.i1o);
     	for (const i1j of f6i)
      {
        if (m9h(i1j.i1o) == g9b)
        {
          i1b++;
        }
      }
      if (i1b == 1)
      {
        
 				let g9b = m9h(z1e.i1o);
				i7a += g4s(g9b);
      }
      else
      {
        i1b = 0;
        let n9e = u4i(z1e.i1o);
       	for (const i1j of f6i)
        {
          if (u4i(i1j.i1o) == n9e)
          {
            i1b++;
          }
        }
        if (i1b == 1)
        {
          
          i7a += h0i(n9e);
        }
        else
        {
          
 					i7a += s4c(z1e.i1o);
        }
      }
    }
		if (z1e.w3x())
		{
       i7a += "x";
		}
		i7a += s4c(z1e.p2v);
	}
	if (!z1e.g3d())
	{
  	let a1u = n2t.r0c();
    a1u.m4i(z1e);
  	if (x1i(a1u))
	  {
  		let s3b = c6r(a1u);
	  	if (s3b.length == 0)
		  {
			  i7a += "#";
  		}
	  	else
		  {
			  i7a += "+";
  		}
	  }
	}
	return i7a;
}
class c1u
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.fontSize = 0;
}

}

function f4z(u3r,
  d4z,
  t6l,
  coordinate,
  coordinatesType,
  c5g,
  f0a,
  marginSize) 
{
 	let e5n = (coordinatesType == c7x.m1f ||
		coordinatesType == c7x.f3y ||
		coordinatesType == c7x.o6e);
	let f0v = (coordinatesType == c7x.m1f ||
		coordinatesType == c7x.f3y ||
		coordinatesType == c7x.k4b);
	let e8p =	(coordinatesType == c7x.m1f ||
		coordinatesType == c7x.o6e ||
		coordinatesType == c7x.h0d);
	let r2e = (coordinatesType == c7x.m1f ||
		coordinatesType == c7x.k4b ||
		coordinatesType == c7x.h0d);

	u3r.font = (coordinate.fontSize).toString() + "px serif";
	u3r.fillStyle = c5g;
  let i6w = coordinate.height;

	if (f0v)
	{
		let v4g = j3r;
		if (f0a)
		{
			v4g = 1;
		}
    for (let e4p = 0; e4p < j3r; e4p++)
		{
			let j3p = u3r.measureText(v4g).width;
			let top = d4z.a2y + 1 + e4p * t6l.p0u;
			top += (t6l.p0u - i6w) / 2 + i6w;
			let b6q = d4z.i4f - marginSize + (marginSize - j3p) / 2;
      u3r.fillText(v4g, b6q, top);
			if (f0a)
			{
				v4g++;
			}
			else
			{
				v4g--;
			}
		}
	}

	if (e8p)
	{
		let v4g = j3r;
		if (f0a)
		{
			v4g = 1;
		}
    for (let e4p = 0; e4p < j3r; e4p++)
		{
      let j3p = u3r.measureText(v4g).width;
			let top = d4z.a2y + 1 + e4p * t6l.p0u;
			top += (t6l.p0u - i6w) / 2 + i6w;
			let b6q = d4z.i4f + d4z.v1k() +
        (marginSize - j3p) / 2;
      u3r.fillText(v4g, b6q, top);
			if (f0a)
			{
				v4g++;
			}
			else
			{
				v4g--;
			}
		}
	}

	if (e5n)
	{
		let y9u = 'a';
		if (f0a)
		{
			y9u = 'h';
		}
    for (let g4f = 0; g4f < j3r; g4f++)
		{
			let o2b = y9u;
			let left = d4z.i4f + 1 + g4f * t6l.p0u;
      let j3p = u3r.measureText(o2b).width;
			let b6q = left + (t6l.p0u - j3p) / 2;
			let k7l = d4z.a2y - (marginSize - i6w) / 2 - 2;
      
      if (y9u == 'g')
      {
        k7l -= 2; 
      }
      u3r.fillText(o2b, b6q, k7l);
			if (f0a)
			{
        let q6m = y9u.charCodeAt(0);
        q6m--;
        y9u = String.fromCharCode(q6m);
			}
			else
			{
        let q6m = y9u.charCodeAt(0);
        q6m++;
        y9u = String.fromCharCode(q6m);
			}
		}
	}

	if (r2e)
	{
		let y9u = 'a';
		if (f0a)
		{
			y9u = 'h';
		}
    for (let g4f = 0; g4f < j3r; g4f++)
		{
			let o2b = y9u;
			let left = d4z.i4f + 1 + g4f * t6l.p0u;
      let j3p = u3r.measureText(o2b).width;
			let b6q = left + (t6l.p0u - j3p) / 2;
			let k7l = d4z.a2y + d4z.s2f() +
        (marginSize - i6w) / 2 + i6w - 2;
      
      if (y9u == 'g')
      {
        k7l -= 2; 
      }
      u3r.fillText(o2b, b6q, k7l);
			if (f0a)
			{
        let q6m = y9u.charCodeAt(0);
        q6m--;
        y9u = String.fromCharCode(q6m);
			}
			else
			{
        let q6m = y9u.charCodeAt(0);
        q6m++;
        y9u = String.fromCharCode(q6m);
			}
		}
	}
}

function f0k(u3r, fontSize)
{
	let i7s = new c1u();
	i7s.fontSize = fontSize;
	i7s.height = fontSize;
	i7s.width = fontSize;
	return i7s;
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

function k8c()
{
  whitePawnBitmap = o8v.u1v("images/pieces/Merida/wP");
 	whiteKnightBitmap = o8v.u1v("images/pieces/Merida/wN");
  whiteBishopBitmap = o8v.u1v("images/pieces/Merida/wB");
 	whiteRookBitmap = o8v.u1v("images/pieces/Merida/wR");
  whiteQueenBitmap = o8v.u1v("images/pieces/Merida/wQ");
 	whiteKingBitmap = o8v.u1v("images/pieces/Merida/wK");
  blackPawnBitmap = o8v.u1v("images/pieces/Merida/bP");
 	blackKnightBitmap = o8v.u1v("images/pieces/Merida/bN");
  blackBishopBitmap = o8v.u1v("images/pieces/Merida/bB");
 	blackRookBitmap = o8v.u1v("images/pieces/Merida/bR");
  blackQueenBitmap = o8v.u1v("images/pieces/Merida/bQ");
 	blackKingBitmap = o8v.u1v("images/pieces/Merida/bK");
}

function p4z()
{
  whitePawnBitmap = o8v.u1v("images/pieces/CBurnett/wP");
 	whiteKnightBitmap = o8v.u1v("images/pieces/CBurnett/wN");
  whiteBishopBitmap = o8v.u1v("images/pieces/CBurnett/wB");
 	whiteRookBitmap = o8v.u1v("images/pieces/CBurnett/wR");
  whiteQueenBitmap = o8v.u1v("images/pieces/CBurnett/wQ");
 	whiteKingBitmap = o8v.u1v("images/pieces/CBurnett/wK");
  blackPawnBitmap = o8v.u1v("images/pieces/CBurnett/bP");
 	blackKnightBitmap = o8v.u1v("images/pieces/CBurnett/bN");
  blackBishopBitmap = o8v.u1v("images/pieces/CBurnett/bB");
 	blackRookBitmap = o8v.u1v("images/pieces/CBurnett/bR");
  blackQueenBitmap = o8v.u1v("images/pieces/CBurnett/bQ");
 	blackKingBitmap = o8v.u1v("images/pieces/CBurnett/bK");
}

function c6z(y6o)
{
  if (y6o == 0)
  {
    p4z();
  }
  else
  {
    k8c();
  }
}

function r1q(d8n)
{
  switch (d8n)
	{
    case d5p.x1p:
      return whitePawnBitmap;
      break;
    case d5p.w1z:
      return whiteKnightBitmap;
      break;
    case d5p.b1p:
      return whiteBishopBitmap;
      break;
    case d5p.l1a:
      return whiteRookBitmap;
      break;
    case d5p.i2l:
      return whiteQueenBitmap;
      break;
    case d5p.y3v:
      return whiteKingBitmap;
      break;
    case d5p.x6h:
      return blackPawnBitmap;
      break;
    case d5p.g6s:
      return blackKnightBitmap;
      break;
    case d5p.f4r:
      return blackBishopBitmap;
      break;
    case d5p.b3w:
      return blackRookBitmap;
      break;
    case d5p.f8i:
      return blackQueenBitmap;
      break;
    case d5p.j1i:
      return blackKingBitmap;
      break;
    default:
      break
	}
  return null;
}

function p3a(u3r, rect, d8n)
{
  if (d8n == d5p.g3d) return;
	let u1v = r1q(d8n);
  u3r.drawImage(u1v, rect.i4f, rect.a2y, rect.v1k(), rect.s2f());
}
function i8h(i0s)
{
	let n2t = new i9r();
	let r2g = i0s.length;

 	let o3g = i0s.split(" ");
	if (o3g.length < 2)
	{
		return n2t;
	}

	let h4l = o3g[1];
	if (h4l.length)
	{
		if (h4l[0] == 'w')
		{
			n2t.b7c();
		}
		else if (h4l[0] == 'b')
		{
			n2t.g7y();
		}
	}

 	let g9l = o3g[0].split("/");
	if (g9l.length != 8)
	{
		return n2t;
	}
	let d4h = a8;
	for (const e4p of g9l)
	{
		let t0h = d4h;
		let r2g = e4p.length;
		for (let i = 0; i < r2g; i++)
		{
			if (t0h == d4h + 8)
			{
				return n2t; 
			}
			let o3e = true;
			switch (e4p[i])
			{
				case 'p':
					n2t.z6q(t0h, d5p.x6h);
					break;
				case 'n':
					n2t.z6q(t0h, d5p.g6s);
					break;
				case 'b':
					n2t.z6q(t0h, d5p.f4r);
					break;
				case 'r':
					n2t.z6q(t0h, d5p.b3w);
					break;
				case 'q':
					n2t.z6q(t0h, d5p.f8i);
					break;
				case 'k':
					n2t.z6q(t0h, d5p.j1i);
					break;
				case 'P':
					n2t.z6q(t0h, d5p.x1p);
					break;
				case 'N':
					n2t.z6q(t0h, d5p.w1z);
					break;
				case 'B':
					n2t.z6q(t0h, d5p.b1p);
					break;
				case 'R':
					n2t.z6q(t0h, d5p.l1a);
					break;
				case 'Q':
					n2t.z6q(t0h, d5p.i2l);
					break;
				case 'K':
					n2t.z6q(t0h, d5p.y3v);
					break;
				default:
					o3e = false;
					break;
			}
			if (o3e)
			{
				t0h = t0h + 1;
			}
			else
			{
				if (!isNaN(e4p[i]))
				{
					t0h = t0h + a9w(e4p[i], 0);
				}
			}
		}
		d4h = d4h - 8;
	}

 	if (o3g.length >= 3)
	{
		let x7l = new l2d(); 
		let b1b = o3g[2];
		if (b1b.length)
		{
			if (b1b[0] != '-')
			{
				let r2g = b1b.length;
				if (b1b[0] >= 'A' && b1b[0] <= 'H')
				{
 					x7l.i5w = true; 
          
					x7l.g1f = n2t.y3v();
					x7l.s8j = n2t.j1i();
					if (r2g == 4)
					{
						let i7a = b1b.charAt(0).toLowerCase();
						i7a += "1";
						x7l.o9s = t2h(i7a);
						if (n2t.g2h(x7l.o9s))
						{
							x7l.k0s = true;
						}
						i7a = b1b.charAt(1).toLowerCase();
						i7a += "1";
						x7l.x3z = t2h(i7a);
						if (n2t.g2h(x7l.x3z))
						{
							x7l.i6i = true;
						}
						i7a = b1b.charAt(2).toLowerCase();
						i7a += "8";
						x7l.l2n = t2h(i7a);
						if (n2t.f0m(x7l.l2n))
						{
							x7l.v4d = true;
						}
						i7a = b1b.charAt(3).toLowerCase();
						i7a += "8";
						x7l.j0x = t2h(i7a);
						if (n2t.f0m(x7l.j0x))
						{
							x7l.c3u = true;
						}
          }
				}
				else
				{
					for (let i = 0; i < r2g; i++)
					{
						switch (b1b[i])
						{
							case 'K':
								if (n2t.z3k(x7l.g1f) && n2t.g2h(x7l.o9s))
								{
									x7l.k0s = true;
								}
								break;
							case 'Q':
								if (n2t.z3k(x7l.g1f) && n2t.g2h(x7l.x3z))
								{
									x7l.i6i = true;
								}
								break;
							case 'k':
								if (n2t.p4l(x7l.s8j) && n2t.f0m(x7l.l2n))
								{
									x7l.v4d = true;
								}
								break;
							case 'q':
								if (n2t.p4l(x7l.s8j) && n2t.f0m(x7l.j0x))
								{
									x7l.c3u = true;
								}
								break;
						}
					}
				}
			}
		}
		if (o3g.length >= 4)
		{
			let a2u = o3g[3];
			if (a2u.length)
			{
				if (a2u[0] != '-')
				{
					x7l.d7j = t2h(a2u);
					if (u4i(x7l.d7j) == l3z)
					{
						let o1d = x7l.d7j + 8;
						let j1b = x7l.d7j - 8;
						if (!n2t.c8p(o1d) || !n2t.s2b(j1b))
						{
							x7l.d7j = d2w;
						}
					}
					else if (u4i(x7l.d7j) == z4d)
					{
						let o1d = x7l.d7j - 8;
						let j1b = x7l.d7j + 8;
						if (!n2t.c8p(o1d) || !n2t.w8g(j1b))
						{
							x7l.d7j = d2w;
						}
					}
					else
					{
						x7l.d7j = d2w;
					}
				}
			}
		}
		n2t.m5x(x7l);
	}
	return n2t;
}

function m1e(n2t)
{
	let i0s = '';
	let d4h = a8;
	for (let e4p = 7; e4p >= 0; e4p--)
	{
		let t0h = d4h;
		let q7u = 0;
		for (let g4f = 0; g4f < 8; g4f++)
		{
			if (n2t.c8p(t0h))
			{
				q7u++;
			}
			else
			{
				if (q7u)
				{
					i0s += q7u;
					q7u = 0;
				}
				switch (n2t.j1a(t0h))
				{
					case d5p.g3d:
						break;
					case d5p.x1p:
						i0s += 'P';
						break;
					case d5p.w1z:
						i0s += 'N';
						break;
					case d5p.b1p:
						i0s += 'B';
						break;
					case d5p.l1a:
						i0s += 'R';
						break;
					case d5p.i2l:
						i0s += 'Q';
						break;
					case d5p.y3v:
						i0s += 'K';
						break;
					case d5p.x6h:
						i0s += 'p';
						break;
					case d5p.g6s:
						i0s += 'n';
						break;
					case d5p.f4r:
						i0s += 'b';
						break;
					case d5p.b3w:
						i0s += 'r';
						break;
					case d5p.f8i:
						i0s += 'q';
						break;
					case d5p.j1i:
						i0s += 'k';
						break;
				}
			}
			t0h = t0h + 1;
		}
		if (q7u)
		{
			i0s += q7u;
		}
		d4h = (d4h - 8);
		if (e4p > 0)
		{
			i0s += "/";
		}
	}
	i0s += " ";
	if (n2t.k2b())
	{
		i0s += "w";
	}
	else
	{
		i0s += "b";
	}
	i0s += " ";
	let x7l = n2t.s5z();
	if (
		!x7l.k0s &&
		!x7l.i6i &&
		!x7l.v4d &&
		!x7l.c3u)
	{
		i0s += "-";
	}
	else
	{
		if (x7l.i5w)
		{
			if (x7l.k0s)
			{
				i0s += g4s(m9h(x7l.o9s)).toUpperCase();
			}
			if (x7l.i6i)
			{
				i0s += g4s(m9h(x7l.x3z)).toUpperCase();
			}
			if (x7l.v4d)
			{
				i0s += g4s(m9h(x7l.l2n)).toUpperCase();
			}
			if (x7l.c3u)
			{
				i0s += g4s(m9h(x7l.j0x)).toUpperCase();
			}
		}
		else
		{
			if (x7l.k0s)
			{
				i0s += "K";
			}
			if (x7l.i6i)
			{
				i0s += "Q";
			}
			if (x7l.v4d)
			{
				i0s += "k";
			}
			if (x7l.c3u)
			{
				i0s += "q";
			}
		}
	}
	i0s += " ";
	if (x7l.d7j == d2w)
	{
		i0s += "-";
	}
	else
	{
		i0s += s4c(x7l.d7j);
	}
	return i0s;
}

function c4m(n2t, w9i)
{
	
	

  let n7f = w9i.length;
	if (n7f < 2 || n7f > 7)
	{
		return false;
	}

	
	if (w9i[0] == 'Z' || (n7f == 2 && w9i == "--") || (n7f == 4 && w9i == "null"))
	{
		return new b1y();
	}

	
	let p7i = w9i[n7f-1];
	if (p7i == '+' || p7i == '#')
	{
		n7f--;
		if (n7f < 2)
		{
   		return false;
		}
	}

	
	if (w9i[0] == 'O' || w9i[0] == '0')
	{
		if (n7f == 3)
		{
			let f6i = j3m(n2t);
			if (f6i.length != 1)
			{
    		return false;
			}
			return f6i[0];
		}
		if (n7f == 5)
		{
			let f6i = t5a(n2t);
			if (f6i.length != 1)
			{
    		return false;
			}
			return f6i[0];
		}
 		return false;
	}

	
	let q7b = false;
	let t3j = d5p.g3d;
	if (w9i[n7f-2] == '=')
	{
		q7b = true;
		let y1y = w9i[n7f-1];
		if (y1y == 'N')
		{
			t3j = n2t.k2b() ? d5p.w1z : d5p.g6s;
		}
		else if (y1y == 'B')
		{
			t3j = n2t.k2b() ? d5p.b1p : d5p.f4r;
		}
		else if (y1y == 'R')
		{
			t3j = n2t.k2b() ? d5p.l1a : d5p.b3w;
		}
		else if (y1y == 'Q')
		{
			t3j = n2t.k2b() ? d5p.i2l : d5p.f8i;
		}
		else
		{
  		return false;
		}
		n7f -= 2;
		if (n7f < 2)
		{
  		return false;
		}
	}

 	
	let toString = '';
	toString += w9i[n7f-2];
	toString += w9i[n7f-1];
	let j1b = t2h(toString);
	if (j1b == d2w)
	{
		return false;
	}
	n7f -= 2;
	

 	if (q7b)
	{
		let f6i = b7m(n2t, j1b);
		if (f6i.length == 0)
		{
  		return false;
		}
		let b1n = [];
		for (const z1e of f6i)
		{
			if (z1e.y6k == t3j)
			{
				b1n.push(z1e);
			}
		}
		f6i = b1n;
		if (f6i.length == 1)
		{
			return f6i[0];
		}
		if (n7f == 0)
		{
			
			for (const i1j of f6i)
			{
				if (i1j.v6z == d2w)
				{
					return i1j;
				}
			}
  		return false;
		}
		if (n7f != 2)
		{
  		return false;
		}
		
		let p7i = w9i[0];
		if (p7i < 'a' || p7i > 'h')
		{
  		return false;
		}
		let g9b = f5h(p7i);
		for (const i1j of f6i)
		{
			if (m9h(i1j.i1o) == g9b)
			{
				return i1j;
			}
		}
		return false;
	}

	if (n7f == 0)
	{
  	
		let f6i = b7m(n2t, j1b);
		if (f6i.length != 1)
		{
  		return false;
		}
		return f6i[0];
	}

  
	let f7t = false;
	let f6i = [];
	let g0r = w9i[0];
	if (g0r == 'N')
	{
		f6i = j4f(n2t, j1b);
	}
	else if (g0r == 'B')
	{
		f6i = y6v(n2t, j1b);
	}
	else if (g0r == 'R')
	{
		f6i = w2l(n2t, j1b);
	}
	else if (g0r == 'Q')
	{
		f6i = k9f(n2t, j1b);
	}
	else if (g0r == 'K')
	{
		
		f6i = y0k(n2t, j1b);
	}
	else
	{
		f7t = true;
		f6i = b7m(n2t, j1b);
	}
	if (f6i.length == 0)
	{
		return false;
	}
	if (f6i.length == 1)
	{
		return f6i[0]; 
	}

	
	
	
	if (n7f < 2)
	{
		return false;
	}

 	if (f7t)
	{
		let p7i = w9i[0]; 
		if (p7i < 'a' || p7i > 'h')
		{
  	  return false;
		}
		let g9b = f5h(p7i);
		for (const i1j of f6i)
		{
			if (m9h(i1j.i1o) == g9b && i1j.v6z != d2w)
			{
				return i1j;
			}
		}
		return false;
	}

	

 	
	let e5v = false;
	if (w9i[n7f-1] == 'x')
	{
		e5v = true;
		n7f--;
	}
	else if (w9i[n7f-1] == '-') 
	{
		e5v = false;
		n7f--;
	}

	if (n7f < 2)
	{
		return false;
	}

 	if (n7f == 2)
	{
		
		let p7i = w9i[1]; 
		if (p7i >= 'a' && p7i <= 'h')
		{
			let g9b = f5h(p7i);
			let g1x  = 0;
      let y4i = null;
			for (const i1j of f6i)
			{
				if (m9h(i1j.i1o) == g9b)
				{
					y4i = i1j;
					g1x++;
				}
			}
      return g1x === 1 ? y4i : false;
		}
		if (p7i >= '1' && p7i <= '8')
		{
			let n9e = n0r(p7i);
			let g1x = 0;
      let y4i = null;
			for (const i1j of f6i)
			{
				if (u4i(i1j.i1o) == n9e)
				{
					y4i = i1j;
					g1x++;
				}
			}
      return g1x === 1 ? y4i : false;
		}
		return false;
	}

 	if (n7f == 3)
	{
		
		let b2n = '';
		b2n += w9i[1]; 
		b2n += w9i[2];
		let o1d = t2h(b2n);
		if (o1d == d2w)
		{
  		return false;
		}
		let g1x = 0;
    let y4i = null;
		for (const i1j of f6i)
		{
			if (i1j.i1o == o1d)
			{
				y4i = i1j;
				g1x++;
			}
		}
    return g1x === 1 ? y4i : false;
	}

	return false;
}

function x0w()
{
  let y3o = ["images/board/BoardBackground.png",
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
    "images/pieces/CBurnett/wR.svg"];
  return y3o;
}
class e0c
{

constructor()
{
	this.g3t = '';
}

r0c()
{
	let b4a = new e0c();
	b4a.g3t = this.g3t;
	return b4a;
}

g3d()
{
	return this.g3t.length == 0;
}

z5b()
{
	return this.g3t;
}

}


const r4b =
{
	f0x : 0,
	y2f : 1,
	f9g: 2,
	x4h: 3,
	h3z: 4,
	k6x: 5,
	r3p: 6,
	i5a: 7,
	j7d: 8,
	o7h: 9,
	z0a: 10,
	c9q: 11,
	b9l: 12,
	j6q: 13,
	z5i: 14,
	s0l: 15,
	f1i: 16,
	g7r: 17,
	j9y: 18,
	t8w: 19,
	u3m: 20,
	t7o: 21,
	f5g: 22,
	u1r: 23,
	a9z: 24,
	c4y: 25,
	x8q: 26,
	m8g: 27,
	z6u: 28,
	t1u: 29,
	l5d: 30,
	b6g: 31,
	o3j: 32,
	m0n: 33,
	f0i: 34,
	v3g: 35,
	f7c: 36,
	x7g: 37,
	v1x: 38,
	u4l: 39,
	i1i: 40,
	w5k: 41,
	c9n: 42,
	x4a: 43,
	h5f: 44,
	h2t: 45,
	j0b: 46,
	e0a: 47,
	v6o: 48,
	j1r: 49,
	y7h: 50,
	s5e: 51,
	o1f: 52,
	t4c: 53,
	g6x: 54,
	k1z: 55,
	x5n: 56,
	j2v: 57,
	x4m: 58,
	e3y: 59,
	i0x: 60,
	g5r: 61,
	i5l: 62,
	t3d: 63,
	c9f: 64,
	i5x: 65,
	p1b: 66,
	s2n: 67,
	m5y: 68,
	y8q: 69,
	t0p: 70,
	k1r: 71,
	v0m: 72,
	j7l: 73,
	j2p: 74,
	r1d: 75,
	c2m: 76,
	d8r: 77,
	d5n: 78,
	q5a: 79,
	u9u: 80,
	u5d: 81,
	c7b: 82,
	o7g: 83,
	h1b: 84,
	m6v: 85,
	p2g: 86,
	x0v: 87,
	w5b: 88,
	x6m: 89,
	o1w: 90,
	z9o: 91,
	j3h: 92,
	n3i: 93,
	r9l: 94,
	y0a: 95,
	w7v: 96,
	b9w: 97,
	a0j: 98,
	v3s: 99,
	k2a: 100,
	u8g: 101,
	b6n: 102,
	q2k: 103,
	w0b: 104,
	i1g: 105,
	p3v: 106,
	t4d: 107,
	q5e: 108,
	v3r: 109,
	i4r: 110,
	h7w: 111,
	h1d: 112,
	z0x: 113,
	j8h: 114,
	x7o: 115,
	m4q: 116,
	q0n: 117,
	a3k: 118,
	c0x: 119,
	i0n: 120,
	x5f: 121,
	h5t: 122,
	c0n: 123,
	a6k: 124,
	x8l: 125,
	r1o: 126,
	t7x: 127,
	j8y: 128,
	y3t: 129,
	j7f: 130,
	k0l: 131,
	w7x: 132,
	m1k: 133,
	r7n: 134,
	p0j: 135,
	w6z: 136,
	r2c: 137,
	z8w: 138,
	i8w: 139,
	u6r: 140,
	m8f: 141,
	c5z: 142,
	m9g: 143,
	b8i: 144,
	a3g: 145,
	v0j: 146,
	c6i: 147,
	p5u: 148,
	b5a: 149,
	z4x: 150,
	a8j: 151,
	x6l: 152,
	h1i: 153,
	m4s: 154,
	w2a: 155,
	u7q: 156,
	k6e: 157,
	d3j: 158,
	o6s: 159,
	i3y: 160,
	h5c: 161,
	f9m: 162,
	j8f: 163,
	g9p: 164,
	h0y: 165,
	h3q: 166,
	t6x: 167,
	a0k: 168,
	c7u: 169,
	u8w: 170,
	x7j: 171,
	m2c: 172,
	l0i: 173,
	o4v: 174,
	r6w: 175,
	b4t: 176,
	n2k: 177,
	h3r: 178,
	d9v: 179,
	l6k: 180,
	d9u: 181,
	o9c: 182,
	y1x: 183,
	c9u: 184,
	h6m: 185,
	d9j: 186,
	t1b: 187,
	h8d: 188,
	l0c: 189,
	v6e: 190,
	y6b: 191,
	s9o: 192,
	i9b: 193,
	o2w: 194,
	i9l: 195,
	l4m: 196,
	x4z: 197,
	m9d: 198,
	g6h: 199,
	l2a: 200,
	x0s: 201,
	j1u: 202,
	y7y: 203,
	y1v: 204,
	j3b: 205,
	q3z: 206,
	g3c: 207,
	s1b: 208,
	j7s: 209,
	k2z: 210,
	y8t: 211,
	k1l: 212,
	j0a: 213,
	j7k: 214,
	q0v: 215,
	h0p: 216,
	m4b: 217,
	r8c: 218,
	m2k: 219,
	h3v: 220,
	g5y: 221,
	a4e: 222,
	o7n: 223,
	p7o: 224,
	j2m: 225,
	f8e: 226,
	q1y: 227,
	v5l: 228,
	b4e: 229,
	d2u: 230,
	v9q: 231,
	g2e: 232,
	k7g: 233,
	j8j: 234,
	a7v: 235,
	v4y: 236,
	q1l: 237,
	g8k: 238,
	i3d: 239,
	j9a: 240,
	e1q: 241,
	q4f: 242,
	v8h: 243,
	b8z: 244,
	s3y: 245,
	q3x: 246,
	b9y: 247,
	b4w: 248,
	o9y: 249,
	u9x: 250,
	y0n: 251,
	g5s: 252,
	t6n: 253,
	q4g: 254,
	y1j: 255,
	k1x: 256,
	m2j: 257,
	h9r: 258,
	t9k: 259
};


const x7r = 0;
const b0d = 500;

function p3n(i7a)
{
	if (i7a.length != 3)
	{
		return 0;
	}
	let y1n = i7a[0];
	let h6g = i7a[1];
	let d7o = i7a[2];

	let c6q = 0;
	if (y1n == 'A' || y1n == 'a') c6q = 0;
	else if (y1n == 'B' || y1n == 'b') c6q = 1;
	else if (y1n == 'C' || y1n == 'c') c6q = 2;
	else if (y1n == 'D' || y1n == 'd') c6q = 3;
	else if (y1n == 'E' || y1n == 'e') c6q = 4;
	else return 0;
	if (isNaN(h6g) || isNaN(d7o))
	{
		return 0;
	}
	return c6q * 100 + a9w(i7a.substr(1, 2), 0) + 1;
}

function i1u(v3z)
{
	if (v3z)
	{
		let div = Math.trunc((v3z - 1) / 100);
		let w5y = (v3z - 1) % 100;
		let l2t = 'A';
		if (div == 0) l2t = 'A';
		else if (div == 1) l2t = 'B';
		else if (div == 2) l2t = 'C';
		else if (div == 3) l2t = 'D';
		else if (div == 4) l2t = 'E';
		return l2t + w5y.toString().padStart(2, '0');
	}
	else
	{
		return "";
	}
}
class u4h
{

constructor()
{
	this.x0p = 0;
	this.s7s = 0;
	this.r3r = 0;
}

r0c()
{
	let h0z = new u4h();
	h0z.h2i = this.x0p;
	h0z.h7c = this.s7s;
	h0z.d6w = this.r3r;
	return h0z;
}

g3d()
{
	return this.r3r == 0 && this.s7s == 0 && this.x0p == 0;
}

t4y()
{
	let d6w = this.r3r.toString().padStart(4, '0');
	let h7c = this.s7s.toString().padStart(2, '0');
	let h2i = this.x0p.toString().padStart(2, '0');
	return d6w + h7c + h2i;
}

n5n(b8o, i7a)
{
	let r2g = i7a.length;
	if (!r2g)
	{
		this.r3r = 0;
		this.s7s = 0;
		this.x0p = 0;
	}
	else if (b8o == "dd-mm-yyyy" || b8o == "dd.mm.yyyy")
	{
  	if (r2g == 4)
		{
      this.r3r = a9w(i7a.substr(1, 4), 0);
		}
		else if (r2g == 10)
		{
			this.x0p = a9w(i7a.substr(0, 2), 0);
			this.s7s = a9w(i7a.substr(3, 2), 0);
			this.r3r = a9w(i7a.substr(6, 4), 0);
		}
	}
	else if (b8o == "yyyy-mm-dd" || b8o == "yyyy.mm.dd")
	{
  	if (r2g == 4)
		{
      this.r3r = a9w(i7a.substr(1, 4), 0);
		}
		else if (r2g == 10)
		{
			this.x0p = a9w(i7a.substr(8, 2), 0);
			this.s7s = a9w(i7a.substr(5, 2), 0);
			this.r3r = a9w(i7a.substr(0, 4), 0);
		}
	}
	else if (b8o == "dd-mm-yy" || b8o == "dd.mm.yy")
	{
		if (r2g == 8)
		{
			this.x0p = a9w(i7a.substr(0, 2), 0);
			this.s7s = a9w(i7a.substr(3, 2), 0);
			this.r3r = a9w(i7a.substr(6, 2), 0) + 2000;
		}
	}
}

toString(b8o)
{
	let i7a = '';
	if (this.g3d())
	{
	}
	else if (b8o == "list")
	{
		let d6w = this.r3r.toString().padStart(4, '0');
		let h7c = this.s7s.toString().padStart(2, '0');
		let h2i = this.x0p.toString().padStart(2, '0');
		if (this.x0p)
		{
			i7a = h2i + "-" + h7c + "-" + d6w;
		}
		else if (this.s7s)
		{
			i7a = h7c + "-" + d6w;
		}
		else if (this.r3r)
		{
			i7a = d6w;
		}
	}
	else if (b8o == "dd-mm-yyyy")
	{
		let d6w = this.r3r.toString().padStart(4, '0');
		let h7c = this.s7s.toString().padStart(2, '0');
		let h2i = this.x0p.toString().padStart(2, '0');
		i7a = h2i + "-" + h7c + "-" + d6w;
	}
	else if (b8o == "dd.mm.yyyy")
	{
		let d6w = this.r3r.toString().padStart(4, '0');
		let h7c = this.s7s.toString().padStart(2, '0');
		let h2i = this.x0p.toString().padStart(2, '0');
		i7a = h2i + "." + h7c + "." + d6w;
	}
	else if (b8o == "yyyy-mm-dd")
	{
		let d6w = this.r3r.toString().padStart(4, '0');
		let h7c = this.s7s.toString().padStart(2, '0');
		let h2i = this.x0p.toString().padStart(2, '0');
		i7a = d6w + "-" + h7c + "-" + h2i;
	}
	else if (b8o == "yyyy.mm.dd")
	{
		let d6w = this.r3r.toString().padStart(4, '0');
		let h7c = this.s7s.toString().padStart(2, '0');
		let h2i = this.x0p.toString().padStart(2, '0');
		i7a = d6w + "." + h7c + "." + h2i;
	}
	else if (b8o == "yyyymmdd")
	{
		let d6w = this.r3r.toString().padStart(4, '0');
		let h7c = this.s7s.toString().padStart(2, '0');
		let h2i = this.x0p.toString().padStart(2, '0');
		i7a = d6w + h7c + h2i;
	}
	else if (b8o == "yyyy")
	{
		let d6w = this.r3r.toString().padStart(4, '0');
		i7a = d6w;
	}
	return i7a;
}

}

class z4r
{

constructor()
{
	this.n0s = new v7x();
	this.c0u = new j1s();
	this.y8h = 0;
	this.e3u = 0;
	this.w4t = "";
  this.i4h = r4b.f0x;
}

r0c()
{
	let q0e = new z4r();
	q0e.n0s = this.n0s.r0c();
	q0e.c0u = this.c0u.r0c();
	q0e.y8h = this.y8h;
	q0e.e3u = this.e3u;
	q0e.w4t = this.w4t;
  q0e.i4h = this.i4h;
	return q0e;
}

g3d()
{
	return this.n0s.g3d() &&
		this.c0u.g3d() &&
		this.y8h == 0 &&
		this.e3u == 0 &&
		this.w4t == "" &&
 		this.i4h == r4b.f0x;
}

}


class c0c
{

constructor()
{
	this.y1l = new z4r();
	this.n4i = new z4r();
	this.u1l = new h8g();
	this.h9i = new e0c();
	this.u6s = new q7e();
	this.w4t = new g6v();
	this.t4y = new u4h();
	this.c8h = z8y.f0x;
	this.v3z = 0;
	this.y1g = 0;
	this.t7m = 0;
	this.j9q = new o7d();
  this.id = new i1l();
}

r0c()
{
	let h1x = new c0c();
	h1x.y1l = this.y1l.r0c();
	h1x.n4i = this.n4i.r0c();
	h1x.u1l = this.u1l.r0c();
	h1x.h9i = this.h9i.r0c();
	h1x.u6s = this.u6s.r0c();
	h1x.w4t = this.w4t.r0c();
	h1x.t4y = this.t4y.r0c();
	h1x.c8h = this.c8h;
	h1x.v3z = this.v3z;
	h1x.y1g = this.y1g;
	h1x.t7m = this.t7m;
	h1x.j9q = this.j9q.r0c();
  h1x.id = this.id.r0c();
	return h1x;
}

g3d()
{
	return this.y1l.g3d() &&
		this.n4i.g3d() &&
		this.u1l.g3d() &&
		this.h9i.g3d() &&
		this.u6s.g3d() &&
		this.w4t.g3d() &&
		this.t4y.g3d() &&
		this.c8h == z8y.f0x &&
		this.v3z == 0 &&
		this.y1g == 0 &&
		this.t7m == 0 &&
		this.j9q.g3d();
}

u6d()
{
	let i7a = '';
	if (this.t7m)
	{
		i7a = this.y1g.toString() + "." + this.t7m.toString();
	}
	else if (this.y1g)
	{
		i7a = this.y1g.toString();
	}
	return i7a;
}

}


class i1l
{

constructor()
{
	this.w1q = '';
}

r0c()
{
	let z0k = new i1l();
	z0k.w1q = this.w1q;
	return z0k;
}

toString()
{
  return this.w1q;
}

}


class g6v
{

constructor()
{
	this.w4t = '';
}

r0c()
{
	let c7t = new g6v();
	c7t.w4t = this.w4t;
	return c7t;
}

g3d()
{
	return this.w4t.length == 0;
}

z5b()
{
	return this.w4t;
}

}


class v7x
{

constructor()
{
	this.m0z = '';
	this.c8y = '';
}

r0c()
{
	let f6x = new v7x();
	f6x.m0z = this.m0z;
	f6x.c8y = this.c8y;
	return f6x;
}

g3d()
{
	return this.c8y.length == 0 &&
		this.m0z.length == 0;
}

g3t()
{
	if (!this.c8y.length == 0 && !this.m0z.length == 0)
	{
		return this.c8y + "," + this.m0z;
	}
	else if (this.c8y.length == 0 && this.m0z.length == 0)
	{
		return "";
	}
	else if (this.m0z.length == 0)
	{
		return this.c8y;
	}
	else
	{
		return this.m0z;
	}
}

d4k()
{
	return this.g3t().replace(/,/g, " ");
}

z6t()
{
	return this.z4t(1).replace(/,/g, " ");
}

z4t(m6a)
{
	if (this.c8y.length == 0)
	{
		if (this.m0z.length == 0 || m6a < 1)
		{
			return "";
		}
		else
		{
			return this.m0z.substring(0, m6a);
		}
	}
	else
	{
		if (this.m0z.length == 0 || m6a < 1)
		{
			return this.c8y;
		}
		else
		{
			return this.c8y + "," + this.m0z.substring(0, m6a);
		}
	}
}

l1e(o7l)
{
	let i7a = o7l.trim();
	let p6q = i7a.lastIndexOf(",");
	if (p6q != -1)
	{
		this.c8y = i7a.substr(0, p6q).trim();
		this.m0z = i7a.substr(p6q+1, i7a.length).trim();
		if (this.m0z.length != 0)
		{
			if (this.m0z.charAt(0).toLowerCase() == this.m0z.charAt(0))
			{
				this.c8y += ",";
				this.c8y += this.m0z;
				this.m0z = "";
			}
		}
	}
	else
	{
		this.c8y = i7a;
		this.m0z = "";
	}
}

z5b()
{
	return this.g3t();
}

}

const z8y =
{
	f0x : 0,
	d5i : 1,
	c6v : 2,
	o7k : 3,
	i0f : 4,
	y6i : 5,
	n9z : 6,
	z2n : 7,
	a5w : 8,
	d7m : 9,
	b2c : 10,
	b5s : 11,
	l8d : 12,
	p3d : 13,
	q8y : 14,
	k0o : 15
};


function u3c(c8h)
{
	switch (c8h)
	{
		case z8y.d5i:
			return "2-0";
		case z8y.o7k:
			return "1-1";
		case z8y.c6v:
			return "0-2";
		default:
			return "";
	}
}
const h5y =
{
	z4p : 0,
	x1k : 1,
	c3b : 2
};

const n9q =
[
	[ h5y.z4p,   "High" ],
	[ h5y.x1k, "Middle" ],
	[ h5y.c3b,    "Low" ]
];

class q7e
{

constructor()
{
	this.w4t = '';
	this.z0d = '';
	this.b9u = new u4h();
	this.w6j = new u4h();
	this.l7g = 0;
	this.u9p = h5y.z4p;
}

r0c()
{
	let s3o = new q7e();
	s3o.w4t = this.w4t;
	s3o.z0d = this.z0d;
	s3o.b9u = this.b9u.r0c();
	s3o.w6j = this.w6j.r0c();
	s3o.l7g = this.l7g;
	s3o.u9p = this.u9p;
	return s3o;
}

g3d()
{
	return this.w4t.length == 0 &&
		this.z0d.length == 0 &&
		this.b9u.g3d() &&
		this.w6j.g3d() &&
		this.l7g == 0 &&
		this.u9p == h5y.z4p;
}

z5b()
{
	let i7a = this.w4t;
	if (this.z0d.length)
	{
		if (i7a.length)
		{
			i7a += " ";
		}
		i7a += this.z0d;
	}
	return i7a;
}

}


const m7w =
{
	c1d : 0,
	i8s : 1,
	g8m : 2,
	z8m : 3,
	h6e : 4,
	x9x : 5,
	q1f : 6,
	j4x : 7,
	m0d : 8,
	j7y : 9,
	u7u : 10,
	p6l : 11,
	r8q : 12,
	w6x : 13,
	c2w : 14,
	r6z : 15
};

class o7d
{

constructor()
{
	this.value = 0;
}

p1x(value)
{
	this.value = value;
}

r0c()
{
	let w9q = new o7d();
	w9q.value = this.value;
	return w9q;
}

g3d()
{
	return this.value == 0;
}

v2j()
{
	return this.value != 0;
}

f0x()
{
	return this.value == 0;
}

i1b()
{
	let n6n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.x7w(i))
		{
			n6n++;
		}
	}
	return n6n;
}

o5s()
{
	this.value = 0;
}

set(c3y, g2b)
{
	if (g2b)
	{
		this.value |= (1 << c3y);
	}
	else
	{
		this.value &= ~(1 << c3y);
	}
}

x7w(c3y)
{
	return (this.value & (1 << c3y)) != 0;
}

w8t()
{
	return this.value;
}

}

function o4b(d6w)
{
	return d6w.toString().padStart(4, '0');
}

class j1s
{

constructor()
{
	this.g3t = '';
	this.a5d = 0;
	this.d6w = 0;
	this.q4m = false;
	this.i4h = r4b.f0x;
}

r0c()
{
	let y5j = new j1s();
	y5j.g3t = this.g3t;
	y5j.a5d = this.a5d;
	y5j.d6w = this.d6w;
	y5j.q4m = this.q4m;
	y5j.i4h = this.i4h;
	return y5j;
}

g3d()
{
	return this.g3t.length == 0 &&
		this.a5d == 0 &&
		this.d6w == 0 &&
		this.q4m == false &&
		this.i4h == r4b.f0x;
}

p9y()
{
	let i7a = this.g3t;
	if (this.a5d)
	{
		if (i7a.length)
		{
			i7a += " ";
		}
		i7a += this.a5d;
	}
	return i7a;
}

z5b()
{
	let i7a = this.g3t;
	if (this.a5d)
	{
		if (i7a.length)
		{
			i7a += " ";
		}
		i7a += this.a5d;
	}
	if (i7a.length)
	{
		i7a += " ";
	}
	i7a += this.j0j();
	return i7a;
}


i4l()
{
	let i7a = this.g3t;
	if (this.a5d > 1)
	{
		i7a += " ";
		i7a += this.a5d;
	}
	return i7a;
}

j0j()
{
	let i7a = '';
	if (this.q4m)
	{
		let j4m = o4b(this.d6w);
		let b1i = o4b(this.d6w + 1);
		let f1t = j4m + "/" + b1i.substr(2, 2);
		i7a = f1t;
	}
	else
	{
		i7a = o4b(this.d6w);
	}
	return i7a;
}

}

class m6f
{

constructor()
{
	this.s3n = 0;
	this.f6s = 0;
	this.c0m = 0;

}

}

function q5d(i7a, c3g, e3u)
{
	e3u.s3n = 0;
	e3u.f6s = 0;
	e3u.c0m = 0;

	let r2g = i7a.length;
	if (!r2g || i7a == "?")
	{
		return;
	}
	let i = 0;
	for (; i < r2g; i++)
	{
		if (!isNaN(i7a[i]))
		{
			break;
		}
	}
	let f7u = '';
	for (; i < r2g; i++)
	{
		if (isNaN(i7a[i]))
		{
			break;
		}
		f7u += i7a[i].toString();
	}
	for (; i < r2g; i++)
	{
		if (!isNaN(i7a[i]))
		{
			break;
		}
	}
	let n1h = '';
	for (; i < r2g; i++)
	{
		if (isNaN(i7a[i]))
		{
			break;
		}
		n1h += i7a[i].toString();
	}
	for (; i < r2g; i++)
	{
		if (!isNaN(i7a[i]))
		{
			break;
		}
	}
	let e5o = '';
	for (; i < r2g; i++)
	{
		if (isNaN(i7a[i]))
		{
			break;
		}
		e5o += i7a[i].toString();
	}
	let h3u = a9w(f7u, 0);
	let a6z = a9w(n1h, 0);
	let p1j = a9w(e5o, 0);
	if (
		h3u < 0 || h3u > c3g ||
		a6z < 0 || a6z > 59 ||
		p1j < 0 || p1j > 59)
	{
		h3u = 0;
		a6z = 0;
		p1j = 0;
	}
	e3u.s3n = h3u;
	e3u.f6s = a6z;
	e3u.c0m = p1j;
}

function j2h(i7a)
{
	if (i7a.length == 0)
	{
		return 0;
	}
	else
	{
		let e3u = new m6f();
		q5d(i7a, 9, e3u);
		return e3u.s3n * 60 + e3u.f6s;
	}
}


const b3l =
{
	f0x : 0,
	a5z : 1,
	g7x : 2,
	u1l : 3,
	w1l : 4,
	a5r : 5,
	x3j : 6,
	s4i : 7
};

const a5i =
[
	[ b3l.f0x, 			 	""                   ],
	[ b3l.a5z,  		 	"SingleGame"         ],
	[ b3l.g7x,  		 	"Match"              ],
	[ b3l.u1l,  "RoundRobin"         ],
	[ b3l.w1l,   		"SwissSystem"        ],
	[ b3l.a5r,    "Knockout"           ],
	[ b3l.x3j,"Simul"              ],
	[ b3l.s4i,"ScheveningenSystem" ]
];

class h8g
{

constructor()
{
	this.w4t = '';
	this.d0c = '';
	this.l6w = new u4h();
	this.d2h = new u4h();
	this.e6a = n7y.j8g;
	this.l0u = 0;
	this.i4h = r4b.f0x;
	this.type = b3l.f0x;
	this.k2v = 0;
	this.z3a = false;
	this.s5x = false;
	this.s0s = false;
	this.c3e = false;
}

r0c()
{
	let k9j = new h8g();
	k9j.w4t = this.w4t;
	k9j.d0c = this.d0c;
	k9j.l6w = this.l6w.r0c();
	k9j.d2h = this.d2h.r0c();
	k9j.e6a = this.e6a;
	k9j.l0u = this.l0u;
	k9j.i4h = this.i4h;
	k9j.type = this.type;
	k9j.k2v = this.k2v;
	k9j.z3a = this.z3a;
	k9j.s5x = this.s5x;
	k9j.s0s = this.s0s;
	k9j.c3e = this.c3e;
	return k9j;
}

g3d()
{
	return this.w4t.length == 0 &&
		this.d0c.length == 0 &&
		this.l6w.g3d() &&
		this.d2h.g3d() &&
		this.e6a == n7y.j8g &&
		this.l0u == 0 &&
		this.i4h == r4b.f0x &&
		this.type == b3l.f0x &&
		!this.k2v &&
		!this.z3a &&
		!this.s5x &&
		!this.s0s &&
		!this.c3e;
}

z5b()
{
	let i7a = this.w4t;
	if (this.d0c.length)
	{
		if (i7a.length)
		{
			i7a += " ";
		}
		i7a += this.d0c;
	}
	if (i7a.length)
	{
		i7a += " ";
	}
	let d6w = this.l6w.d6w.toString().padStart(4, '0');
	i7a += d6w;
	return i7a;
}

}



const n7y =
{
	j8g : 0,
	c7l : 1,
	q9b : 2,
	t0x : 3
};

const l5w =
[
	[ n7y.j8g, "Normal" ],
	[ n7y.c7l,  "Rapid"  ],
	[ n7y.q9b,  "Blitz"  ],
	[ n7y.t0x,   "Corr"   ]
];

function z6c(e6a)
{
	return l5w[e6a][1];
}

function z6f()
{
	let t3z = [];
	for (const e6a of l5w)
	{
		t3z.push(e6a[1]);
	}
	return t3z;
}

class r0u
{

constructor()
{
	this.f2r = '';
	this.i7r = '';
	this.o1b = t4p.f0x;
	this.style = r2j.f0x;
	this.value = m0e.f0x;
	this.r7v = new i5q();
	this.u5a = new u6i();
	this.z2x = new s2q();
	this.u6x = k9n.f0x;
	this.d0q = false;
	this.t0z = false;
  this.e8i = false;
}

r0c()
{
	let x9w = new r0u();
	x9w.f2r = this.f2r;
	x9w.i7r = this.i7r;
	x9w.o1b = this.o1b;
	x9w.style = this.style;
	x9w.value = this.value;
	x9w.r7v = this.r7v.r0c();
	x9w.u5a = this.u5a.r0c();
	x9w.z2x = this.z2x.r0c();
	x9w.u6x = this.u6x;
	x9w.d0q = this.d0q;
	x9w.t0z = this.t0z;
 	x9w.e8i = this.e8i;
	return x9w;
}

g3d()
{
	return this.f2r.length == 0 &&
		this.i7r.length == 0 &&
		this.o1b == t4p.f0x &&
		this.style == r2j.f0x &&
		this.value == m0e.f0x &&
		this.r7v.g3d() &&
		this.u5a.g3d() &&
		this.z2x.g3d() &&
		this.u6x == k9n.f0x &&
		this.d0q == false &&
		this.t0z == false &&
 		this.e8i == false;
}

}

const k9n =
{
	f0x : 0,
	b6o : 1,
	x1k : 2,
	c9k : 3
};

const h8p =
{
	m0t : 0,
	u4e : 1,
	u3k : 2,
	v4x : 3,
	i6y : 4,
	q9f : 5,
	b4b : 6,
	k0o : 7,
	y5m : 8,
	a9a : 9,
	h6i : 10,
	w1g : 11,
	d8f : 12,
	e4g : 13,
	e9g : 14,
	a8c : 15
};

class i5q
{

constructor()
{
	this.value = 0;
}

p1x(value)
{
	this.value = value;
}

r0c()
{
	let a0r = new i5q();
	a0r.value = this.value;
	return a0r;
}

g3d()
{
	return this.value == 0;
}

v2j()
{
	return this.value != 0;
}

f0x()
{
	return this.value == 0;
}

i1b()
{
	let n6n = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.x7w(i))
		{
			n6n++;
		}
	}
	return n6n;
}

o5s()
{
	this.value = 0;
}

set(c3y, g2b)
{
	if (g2b)
	{
		this.value |= (1 << c3y);
	}
	else
	{
		this.value &= ~(1 << c3y);
	}
}

x7w(c3y)
{
	return (this.value & (1 << c3y)) != 0;
}

w8t()
{
	return this.value;
}

}

const t4p =
{
	f0x : 0,
	j8r : 1,
	w3d : 2,
	m5n : 3,
	b8r : 4,
	v7j : 5,
	w5j : 6
};

const l4i =
[
	[ t4p.f0x,     		  ""   ],
	[ t4p.j8r,       		  "RR" ],
	[ t4p.w3d, 		  "&#8979;"  ],
	[ t4p.m5n, 		  "&#8804;"  ],
	[ t4p.b8r,  "="  ],
	[ t4p.v7j,   "&#9651;"  ],
	[ t4p.w5j,  "&#9661;"  ]
];

function w6v(o1b)
{
	return l4i[o1b][1];
}


const r2j =
{
	f0x : 0,
	r3e : 1,
	q7q : 2,
	u2o : 3,
	x4e : 4,
	m8q : 5,
	r0f : 6,
	d3t : 7,
	l8j : 8
};

const k2m =
[
	[ r2j.f0x,     		"" 	 ],
	[ r2j.r3e,       	"!"  ],
	[ r2j.q7q, 					"?"  ],
	[ r2j.u2o,	"!?" ],
	[ r2j.x4e,	 		"?!" ],
	[ r2j.m8q,  	"!!" ],
	[ r2j.r0f, 			"??" ],
	[ r2j.d3t, 		"&#8857;"  ],
	[ r2j.l8j, 		"&#9723;"  ]
];

function u1o(style)
{
	return k2m[style][1];
}


class q5b
{

constructor()
{
	this.z1e = new y5p();
	this.x7d = null;
	this.g8c = null;
	this.l3l = null;
	this.a2j = null;
  this.a5d = 0; 
}

g0i(z1e)
{
	this.z1e = z1e.r0c();
}

n9k(n2t, o1d, j1b, o4u)
{
	this.z1e.n9k(n2t, o1d, j1b, o4u);
}

}

class v6h
{

constructor()
{
	this.o3l = null;
	this.z1e = null;
}

s4b(b5l)
{
	return this.o3l == b5l.o3l;
}

n1x(b5l)
{
	return !this.s4b(b5l);
}

r0c()
{
	let l0k = new v6h();
  l0k.o3l = this.o3l;
  l0k.z1e = this.z1e;
	return l0k;
}

}


class e1t
{

constructor()
{
	this.m7j = new i9r();
 	this.q6h = null;
	this.y0i = 1;
	this.m7j.e7t();
  this.w5t = new r0u();
}

i6j(b5l)
{
	this.m7y(b5l.m7j, b5l.y0i);
	this.w5t = b5l.w5t.r0c();
	this.q6h = this.h4e(b5l.q6h);
}

r0c()
{
	let g2i = new e1t();
	g2i.i6j(this);
	return g2i;
}

m7y(b3q, h2u)
{
	this.m7j = b3q.r0c();
	this.y0i = h2u;
	this.w5t = new r0u();
	this.q6h = null;
}

h2u()
{
	return this.y0i;
}

b3q()
{
	return this.m7j.r0c();
}

o8o(p6q)
{
  let k0e = this.k6y(p6q) + 1;
	if (k0e)
	{
		return this.y0i +
			Math.floor((k0e - 1 + this.m7j.b9z()) / 2);
	}
	else
	{
		return this.y0i;
	}
}

k6y(p6q)
{
	let k0e = 0;
	if (!p6q.o3l)
	{
		return 0;
	}
	let r6i = p6q.o3l;
	while (1)
	{
		k0e++;
		if (!r6i.g8c)
		{
			let e2a = r6i;
			while (e2a.l3l)
			{
				e2a = e2a.l3l;
			}
			if (!e2a.g8c)
			{
				break;
			}
		}
		if (r6i.g8c)
		{
			r6i = r6i.g8c;
		}
		else
		{
			let e2a = r6i;
			while (e2a.l3l)
			{
				e2a = e2a.l3l;
			}
			r6i = e2a.g8c;
		}
	}
	return k0e;
}


e6d()
{
	let w9s = 0;
	let j0u = this.q6h;
	while (j0u)
	{
		w9s++;
		j0u = j0u.x7d;
	}
	return w9s;
}

j0w()
{
	return this.q6h != null;
}

j5j(p6q)
{
	return p6q.s4b(this.s0m());
}

u2i(p6q)
{
	if (p6q.o3l)
	{
		return p6q.o3l.x7d == null;
	}
	else if (this.q6h)
	{
		return false;
	}
	else
	{
		return true;
	}
}

k4f(p6q)
{
	if (!this.j5j(p6q))
	{
		if (p6q.o3l.g8c)
		{
			p6q.o3l = p6q.o3l.g8c;
			p6q.z1e = p6q.o3l.z1e;
		}
		else
		{
			let r6i = p6q.o3l;
			while (r6i.l3l)
			{
				r6i = r6i.l3l;
			}
			r6i = r6i.g8c;
			p6q.o3l = r6i;
      if (p6q.o3l)
      {
  			p6q.z1e = p6q.o3l.z1e;
      }
      else
      {
        p6q.z1e = null;
      }
		}
	}
}

m4i(p6q)
{
	if (!this.u2i(p6q))
	{
		p6q.o3l = this.l7x(p6q);
		p6q.z1e = p6q.o3l.z1e;
	}
}

h0w(p6q, m2w)
{
	let l5k = this.n3a(p6q);
	if (m2w < 0 || m2w >= l5k)
	{
		return;
	}
	let e2a = this.l7x(p6q);
	let i = 0;
	while (i != m2w)
	{
		i++;
		e2a = e2a.a2j;
	}
	p6q.o3l = e2a;
	p6q.z1e = p6q.o3l.z1e;
}

e0k(p6q)
{
	if (!p6q.o3l)
	{
		return this.y0i;
	}
	let k0e = this.k6y(p6q);
	if (k0e)
	{
		return this.y0i +
      Math.floor((k0e - 1 + this.m7j.b9z()) / 2);
	}
	else
	{
		return this.y0i;
	}
}

s0m()
{
	let p6q = new v6h();
	p6q.o3l = null;
	p6q.z1e = null;
	return p6q;
}

e4m(p6q)
{
	if (!this.u2i(p6q))
	{
		let r6i = this.l7x(p6q);
		while (true)
		{
			if (!r6i.x7d)
			{
				break;
			}
			r6i = r6i.x7d;
		}
		p6q.o3l = r6i;
		p6q.z1e = p6q.o3l.z1e;
	}
}

u3l(s2h)
{
	let p6q = this.s0m();
	if (s2h > 0)
	{
    this.s2h = 0;
		this.n2e(p6q, s2h);
		return p6q;
	}
	else
	{
		return p6q;
	}
}

n2e(p6q, s2h)
{
	while (true)
	{
		if (this.u2i(p6q))
		{
			return false;
		}
		let l5k = this.n3a(p6q);
		if (l5k > 1)
		{
			let d5z = p6q.r0c();
			for (let i = 1; i < l5k; i++)
			{
				this.h0w(p6q, i);
				this.s2h++;
				if (this.s2h == s2h)
				{
					return true;
				}
				if (this.n2e(p6q, s2h))
				{
					return true;
				}
        p6q.o3l = d5z.o3l;
        p6q.z1e = d5z.z1e;
			}
		}
		this.m4i(p6q);
		this.s2h++;
		if (this.s2h == s2h)
		{
			return true;
		}
	}
}

l8u(p6q)
{
	if (!p6q.o3l)
	{
		return 0;
	}
	else
	{
		return p6q.o3l.a5d;
	}
}

d8m(p6q)
{
	let s3b = [];
 	if (!p6q.o3l)
  {
		return s3b;
	}
	let r6i = p6q.o3l;
	while (1)
	{
		s3b.push(r6i);
		if (!r6i.g8c)
		{
			let e2a = r6i;
			while (e2a.l3l)
			{
				e2a = e2a.l3l;
			}
			if (!e2a.g8c)
			{
				break;
			}
		}
		if (r6i.g8c)
		{
			r6i = r6i.g8c;
		}
		else
		{
			let e2a = r6i;
			while (e2a.l3l)
			{
				e2a = e2a.l3l;
			}
			r6i = e2a.g8c;
		}
	}
	return s3b.reverse();
}

o0f(p6q)
{
	let s3b = this.d8m(p6q);
	let l5k = this.n3a(p6q);
	if (l5k == 0)
	{
		return s3b;
	}
	let b2x = this.k7o(p6q, 0);
	while (b2x)
	{
		s3b.push(b2x);
		b2x = b2x.x7d;
	}
	return s3b;
}

n3a(p6q)
{
	let b2x = this.l7x(p6q);
	if (!b2x)
	{
		return 0;
	}
	let l5k = 1;
	while (b2x.a2j)
	{
		l5k++;
		b2x = b2x.a2j;
	}
	return l5k;
}

i1n(p6q, e8t)
{
	if (this.j5j(p6q))
	{
		this.q6h = e8t;
		p6q.o3l = e8t;
		p6q.z1e = p6q.o3l.z1e;
	}
	else
	{
		p6q.o3l.x7d = e8t;
		e8t.g8c = p6q.o3l;
		p6q.o3l = e8t;
		p6q.z1e = p6q.o3l.z1e;
	}
}

t5g(p6q, e8t)
{
	let e2a = this.l7x(p6q);
	while (e2a.a2j)
	{
		e2a = e2a.a2j;
	}
	e2a.a2j = e8t;
	e8t.l3l = e2a;

	p6q.o3l = e8t;
	p6q.z1e = p6q.o3l.z1e;
}

z7v(p6q, z1e)
{
	let e8t = new q5b();
 	e8t.g0i(z1e);
	if (this.u2i(p6q))
	{
		this.i1n(p6q, e8t);
	}
	else
	{
		this.t5g(p6q, e8t);
	}
}

y0p(p6q)
{
	let e2a = this.k7o(p6q, 1);
	if (!e2a)
	{
		return false;
	}
	while (e2a)
	{
		let j0u = e2a.x7d;
		while (j0u)
		{
			if (j0u.a2j)
			{
				return false;
			}
			j0u = j0u.x7d;
		}
		e2a = e2a.a2j;
	}
	return true;
}

i6f()
{
	let j0u = this.q6h;
	while (j0u)
	{
		if (j0u.a2j)
		{
			return true;
		}
		j0u = j0u.x7d;
	}
	return false;
}

x3r()
{
	if (!this.w5t.g3d())
	{
		return true;
	}
	if (this.i6f())
	{
		return true;
	}
	let j0u = this.q6h;
	while (j0u)
	{
		if (j0u.z1e.x3r())
		{
			return true;
		}
		j0u = j0u.x7d;
	}
	return false;
}

l7x(p6q)
{
	if (p6q.o3l)
	{
		return p6q.o3l.x7d;
	}
	return this.q6h;
}

k7o(p6q, m2w)
{
	let i = 0;
	let e2a = this.l7x(p6q);
	while (e2a && i != m2w)
	{
		e2a = e2a.a2j;
		i++;
	}
	return e2a;
}

h4e(e2a)
{
	let m8m = e2a;
	let p0l = null;
	let e8t = null;
	let r3h = null;
	while (m8m)
	{
		e8t = new q5b();
		e8t.g0i(m8m.z1e);
		if (p0l)
		{
			p0l.x7d = e8t;
			e8t.g8c = p0l;
		}
		else
		{
			r3h = e8t;
		}
		p0l = e8t;
		if (m8m.a2j && !m8m.l3l)
		{
			let p5j = m8m.a2j;
			let z2c = p0l;
			while (p5j)
			{
				let j1y = this.h4e(p5j);
				z2c.a2j = j1y;
				j1y.l3l = z2c;
				z2c = j1y;
				p5j = p5j.a2j;
			}
		}
		m8m = m8m.x7d;
	}
	return r3h;
}

b9e()
{
	return this.w5t;
}

g4t()
{
	return this.w5t.f2r;
}

t9q(m7i)
{
	this.w5t.f2r = m7i;
}

e7s()
{
	return !this.w5t.u5a.g3d();
}

m7m(u5a)
{
	this.w5t.u5a = u5a.r0c();
}

y8x()
{
	return this.w5t.u5a;
}

h6v()
{
	return !this.w5t.z2x.g3d();
}

e6z(z2x)
{
	this.w5t.z2x = z2x.r0c();
}

w2j()
{
	return this.w5t.z2x;
}

s5j()
{
	return !this.w5t.r7v.g3d();
}

j6s(r7v)
{
	this.w5t.r7v = r7v.r0c();
}

i0e()
{
	return this.w5t.r7v;
}

u3z(s2h)
{
  if (s2h == 0)
  {
    return true;
  }
	let j0u = this.q6h;
	while (j0u)
	{
    if (j0u.a5d == s2h)
    {
      return true;
    }
		j0u = j0u.x7d;
	}
	return false;
}

y0x()
{
	let p6q = this.s0m();
	this.s2h = 0;
	this.e2g(p6q);
}

e2g(p6q)
{
	while (true)
	{
		if (this.u2i(p6q))
		{
			return;
		}
		let l5k = this.n3a(p6q);
		if (l5k > 1)
		{
			let d5z = p6q.r0c();
			for (let i = 1; i < l5k; i++)
			{
				this.h0w(p6q, i);
				this.s2h++;
        p6q.o3l.a5d = this.s2h;
				this.e2g(p6q);
        p6q.o3l = d5z.o3l;
        p6q.z1e = d5z.z1e;
			}
		}
		this.m4i(p6q);
  	this.s2h++;
    p6q.o3l.a5d = this.s2h;
	}
}

n2t(p6q)
{
	let n2t = this.m7j.r0c();
	if (!p6q.o3l)
	{
		return n2t;
	}
	let s3b = this.u6p(p6q);
  for (const z1e of s3b)
	{
		n2t.m4i(z1e.i1j());
	}
	return n2t;
}

u6p(p6q)
{
	let s3b = [];
 	if (!p6q.o3l)
  {
		return s3b;
	}
	let r6i = p6q.o3l;
	while (1)
	{
		s3b.push(r6i.z1e);
		if (!r6i.g8c)
		{
			let e2a = r6i;
			while (e2a.l3l)
			{
				e2a = e2a.l3l;
			}
			if (!e2a.g8c)
			{
				break;
			}
		}
		if (r6i.g8c)
		{
			r6i = r6i.g8c;
		}
		else
		{
			let e2a = r6i;
			while (e2a.l3l)
			{
				e2a = e2a.l3l;
			}
			r6i = e2a.g8c;
		}
	}
	return s3b.reverse();
}


l9k()
{
	this.w5t = new r0u();
	this.q6h = null; 
  
}


y7c()
{
	let s3b = [];
	let j0u = this.q6h;
	while (j0u)
	{
		s3b.push(j0u.z1e);
		j0u = j0u.x7d;
	}
	return s3b;
}

}

const m0e =
{
	f0x : 0,
	i0f : 1,
	y6i : 2,
	n9z : 3,
	z2n : 4,
	a5w : 5,
	d7m : 6,
	b2c : 7,
	b5s : 8,
	l8d : 9,
	p3d : 10,
	q8y : 11,
	k0o : 12,
	c4h : 13,
	h2s : 14,
	v4x : 15
};

const x7t =
[
	[ m0e.f0x,     						  ""    ],
	[ m0e.i0f,        "+&#8211;" ],
	[ m0e.y6i, 						"&#177;" ],
	[ m0e.n9z,		"&#10866;"  ],
	[ m0e.z2n, 							"="   ],
	[ m0e.a5w,  							"&#8734;" ],
	[ m0e.d7m,  	"&#10865;"],
	[ m0e.b2c, 						"&#8723;" ],
	[ m0e.b5s, 				"&#8211;+"],
	[ m0e.l8d,						"&#8773;" ],
	[ m0e.p3d, 						"&#8646;" ],
	[ m0e.q8y,  						"&#8593;" ],
	[ m0e.k0o, 								"&#8594;" ],
	[ m0e.c4h, 					"&#8853;" ],
	[ m0e.h2s,		"&#10227;"],
	[ m0e.v4x, 								"N"   ]
];

function f6c(value)
{
	return x7t[value][1];
}


const j5s =
{
	k6k : 0,
	r1w : 1,
	u4x : 2
};

const e4e =
{
	f0x : 0,
	x3p : 1,
	y1m : 2,
	t9l : 3,
	q1g : 4,
	o1b : 5,
	i7r : 6,
	f2r : 7,
	e4h : 8,
	r7v : 9,
	d0q : 10,
	t0z : 11
};

/*
TO DO
- Aanpassen voor tekst after van y9n daar kan dia inzitten (zie c++)
- Vette tekst en niet vette x3p testen bij wel/niet MultiPV
*/
class y4w
{

constructor()
{
	this.v1l = new q6l();
  this.m7q = true;
  this.r0z = false;
  this.r4h = true;
  this.c2n = true;
  this.g9m = j5s.k6k;
  this.m0x = false;
  this.y3g = true;
 	this.u4n = true;
 	this.n4k = -1;
  this.b1g = false;
  this.m9t = false;
	this.y4b = false;
	this.v7f = true;
  this.n6c = false;
  this.o9b = false;
  this.f3d = 0;
	this.s8a = true;
  this.n9l = null;
 	this.h4v = e4e.f0x;
}

a1v(s3b)
{
	this.n9l = s3b;
 	let s0m = this.n9l.s0m();
	let b3q = this.n9l.b3q();
	this.h4v = e4e.f0x;
	this.v7f = true;
	this.m9t = false;
	this.y4b = false;
	this.b1g = false;
	this.n6c = this.n9l.x3r();
	this.s8a = true;
	this.f3d = 0;

	if (this.m0x)
	{
		this.g2o(e4e.y1m);
		this.s9b();
	}
	else
	{
    
    if (this.g9m == j5s.r1w ||
      (this.g9m == j5s.u4x && !b3q.n7j()))
    {
      if (this.c2n)
      {
        this.a7t(s0m, b3q, f3d);
        this.v7f = true;
      }
    }

    this.g2o((this.n6c && !this.e8i) ? e4e.x3p : e4e.y1m);
    this.f3z(this.n6c);
    this.z7v(s0m, "");
    this.t4i(s0m, this.n9l.b9e().f2r);

    if (this.n9l.j0w())
    {
      this.p6w();
    }
   	this.g2o(e4e.f0x);
   	this.c7n();
  }
}

s9b()
{
	let p6q = this.n9l.s0m();
	let n3a = this.n9l.n3a(p6q);
	for (let i = 0; i < n3a; i++)
	{
    this.v1l.q6d('<div class="variation-row">');
		p6q = this.n9l.s0m();
  	let n2t = this.n9l.b3q();
	  let e0k = this.n9l.h2u();
		this.n9l.h0w(p6q, i);
		this.v7f = true;
		let n4j = true;
		let z1e = p6q.z1e;
		let i7r = z1e.i7r();
		if (i7r.length)
		{
			this.x8e(p6q, i7r);
		}
		this.g2o(e4e.y1m);
		do
		{
			if (n4j)
			{
				p6q.z1e.p2p();
			}
			this.l1h(p6q, n2t, e0k);
			if (n4j)
			{
				p6q.z1e.p8c(i7r);
				n4j = false;
			}
			if (this.n9l.u2i(p6q))
			{
				break;
			}
			n2t.m4i(p6q.z1e);
			if (n2t.k2b())
			{
				e0k++;
			}
			this.n9l.m4i(p6q);
		} while (true);
    this.v1l.q6d('<div');
	}
}

p6w()
{
  let g0s = 0;
 	let p6q = this.n9l.s0m();
	let n2t = this.n9l.b3q();
  let e0k = this.n9l.h2u();

	let x0c = 100000;
	if (this.n4k == 0)
	{
		return;
	}
	if (this.n4k != -1)
	{
		x0c = this.n4k;
	}
	let p0v = e0k + x0c - 1;
	this.v7f = true;
	while (true)
	{
		let n3a = this.n9l.n3a(p6q);
		while (e0k <= p0v && !this.n9l.u2i(p6q))
		{
      this.n9l.m4i(p6q);
    	this.g2o((this.n6c && !this.e8i) ? e4e.x3p : e4e.y1m);
			this.l1h(p6q, n2t, e0k);
			n2t.m4i(p6q.z1e.i1j());
 			if (n2t.k2b())
			{
				e0k++;
			}
			if (this.u4n && n3a > 1)
			{
				break;
			}
			n3a = this.n9l.n3a(p6q);
		}
		if (!n3a || e0k > p0v)
		{
			return;
		}
    n2t.k4f(p6q.z1e.i1j());
		if (n2t.b9z())
		{
			e0k--;
		}
    this.n9l.k4f(p6q);
		for (let i = 1; i < n3a; i++)
		{
      g0s++;
      let d1g = "<span class=\"tdline\" data-level=\"";
      d1g += g0s.toString();
      d1g += "\">";
      this.v1l.q6d(d1g);
			this.t0k(e4e.t9l);
			this.q4d("[", true);
			let o1b = '';
      this.s8e(p6q, n2t, e0k, i, o1b, g0s);
			this.g2o(e4e.t9l);
			this.q4d("]", true);
      this.v1l.q6d("</span>");
      g0s--;
     	this.g2o((this.n6c && !this.e8i) ? e4e.x3p : e4e.y1m);
		}
		this.t0k(this.h4v);
    this.n9l.m4i(p6q);
    n2t.m4i(p6q.z1e.i1j());
		if (n2t.k2b())
		{
			e0k++;
		}
		this.v7f = true;
	}
}

l1h(p6q, n2t, e0k)
{
	if (this.n9l.j5j(p6q))
	{
		return;
	}
 	let z1e = p6q.z1e;

	let i7a = '';
  let w9w = false;
  if (this.m7q)
	{
		if (z1e.g0d())
		{
			if (!this.n9l.j5j(p6q))
			{
        let q7r = p6q.r0c();
        this.n9l.k4f(q7r);
        if (q7r.z1e)
        {
  				if (q7r.z1e.c8b())
	  			{
		  			w9w = true;
			  	}
        }
			}
		}
  }
	if (this.m9t)
	{
		i7a = "(";
		this.m9t = false;
		if (this.m7q && z1e.k5p())
		{
			this.q4d("(", true);
			let a1t = this.h4v;
			this.x8e(p6q, z1e.i7r());
			this.g2o(a1t);
			i7a = "";
      w9w = true;
		}
	}
	else
	{
		if (this.m7q && z1e.k5p())
		{
  	  let a1t = this.h4v;
	  	this.x8e(p6q, z1e.i7r());
		  this.g2o(a1t);
      w9w = true;
    }
	}
	if (z1e.s3k())
	{
		i7a += w6v(z1e.o1b());
	}
	let x5k = z1e.u1g();
	if (x5k)
	{
    i7a += e0k;
		i7a += '.';
	}
	else
	{
		if (this.v7f || w9w)
		{
 			i7a += e0k;
			i7a += "...";
		}
	}
	i7a += v2s(n2t, z1e.i1j(), false);
	if (z1e.n6r())
	{
		i7a += u1o(z1e.style());
	}
	if (z1e.h2x())
	{
		i7a += f6c(z1e.value());
	}
	if (z1e.h4b())
	{
		i7a += " End Of Game";
  }
	if (this.y4b || this.b1g)
	{
		if (this.n9l.u2i(p6q) && (!this.m7q || !z1e.c8b()))
		{
			if (this.y4b)
			{
				i7a += ")";
				this.y4b = false;
			}
			else
			{
				i7a += ";";
				this.b1g = false;
			}
		}
	}
	this.z7v(p6q, i7a);
	this.v7f = false;

	if (z1e.y9o())
	{
		let f2r = z1e.f2r();
    let h1t = f2r.indexOf("[#]");
		let d7a = f2r.substring(0, h1t);
	  let n8l = f2r.substring(h1t + 3);
		if (d7a.length)
		{
			this.t4i(p6q, d7a);
		}
		this.f3d++;
		if (this.c2n)
		{
			this.t0k(e4e.f0x);
      this.a7t(p6q, n2t, this.f3d);
			this.v7f = true;
		}
		if (n8l.length)
		{
			this.t4i(p6q, n8l);
		}
	}
	else
	{
		this.t4i(p6q, z1e.f2r());
	}

  if (z1e.h4b())
	{
    this.v1l.p3z("<div>&nbsp;</div>"); 
   	this.c7n();
 	  this.f3z(false); 
 	  this.o9b = true;
	}
}

g2o(w4w)
{
	if (w4w != this.h4v)
	{
		this.o1a();
		this.h4v = w4w;
		this.i8y();
	}
}

i8y()
{
}

o1a()
{
	this.h4v = e4e.f0x;
}

t0k(w4w)
{
	this.o1a();
	this.h4v = e4e.f0x;
  
  
  
  
  this.v1l.p3z("<br>"); 
	if (w4w != e4e.f0x)
	{
		this.h4v = w4w;
		this.i8y();
	}
}

a7t(p6q, n2t, a5d)
{
  this.s8a = true;
	let d1g = "<span class=\"tddia\" movenr=\"";
  d1g += this.n9l.l8u(p6q).toString();
	d1g += "\">",
	this.v1l.q6d(d1g);
	this.v1l.q6d("<canvas></canvas>");
	this.v1l.q6d("</span>");
	this.v7f = true;
}

y8d(p6q, m7i)
{
  this.b6v(p6q);
	this.y4r(m7i);
  this.i2c();
}

s8e(a3w, y2g, e0k, m2w, o1b, g0s)
{
  let p6q = a3w.r0c();
  let n2t = y2g.r0c();

	if (o1b.length)
	{
		this.g2o(e4e.o1b);
		let i4a = o1b;
		i4a += ")";
    let d1g = "<span class=\"tdprefix\">";
    this.v1l.q6d(d1g);
  	this.q4d(i4a);
    this.v1l.q6d("</span>");
	}
	let n3a = 0;
	let m8s = 1;
  this.n9l.h0w(p6q, m2w);
	this.v7f = true;
	do
	{
		this.g2o(e4e.t9l);
		this.l1h(p6q, n2t, e0k);
		if (n3a > 1)
		{
      this.n9l.k4f(p6q);
      this.x8k(p6q, n2t, e0k);
      this.n9l.m4i(p6q);
			this.v7f = true;
		}
		n2t.m4i(p6q.z1e.i1j());
		if (n2t.k2b())
		{
			e0k++;
		}
		n3a = this.n9l.n3a(p6q);
		if (n3a == 0)
		{
			break;
		}
		if (n3a > 1)
		{
			if (!this.n9l.y0p(p6q))
			{
				break;
			}
		}
    this.n9l.m4i(p6q);
		m8s++;
	} while (true);

	if (this.n9l.u2i(p6q))
	{
		return;
	}

	let a9k = o1b.length;
	let i4a = '';
	let z0z = 1;
	for (let i = 0; i < n3a; i++)
	{
		if (a9k == 0)
		{
      i4a = String.fromCharCode('A'.charCodeAt() + z0z - 1);
		}
		else if (a9k == 1)
		{
      i4a = o1b;
      i4a += z0z;
		}
		else if (a9k == 2)
		{
      i4a = o1b;
      i4a += String.fromCharCode('a'.charCodeAt() + z0z - 1);
		}
		else
		{
      i4a = o1b;
      i4a += z0z;
		}

    let d1g = "<span class=\"tdline\" data-level=\"";
    d1g += g0s.toString();
    d1g += "\">";
    this.v1l.q6d(d1g);
  	this.t0k(this.h4v);
    this.s8e(p6q, n2t, e0k, i, i4a, g0s);
    this.v1l.q6d("</span>");
		z0z++;
	}
}

x8k(a3w, y2g, e0k)
{
  let p6q = a3w.r0c();
  let n2t = y2g.r0c();

	this.g2o(e4e.q1g);
	this.m9t = true;
	this.b1g = false;
	let n3a = this.n9l.n3a(p6q);
	for (let i = 1; i < n3a; i++)
	{
		if (i == n3a - 1)
		{
			this.y4b = true;
		}
		if (i < n3a - 1)
		{
			this.b1g = true;
		}
    this.a9t(p6q, n2t, e0k, i);
		if (this.b1g)
		{
			this.g2o(e4e.q1g);
			this.q4d(";", false);
			this.b1g = false;
		}
	}
	this.g2o(e4e.q1g);
	if (this.y4b)
	{
		this.q4d(")", false);
		this.y4b = false;
	}
}

a9t(a3w, y2g, e0k, m2w)
{
  let p6q = a3w.r0c();
  let n2t = y2g.r0c();

  this.n9l.h0w(p6q, m2w);
	let m8s = 0;
	this.v7f = true;
	do
	{
		m8s++;
		this.g2o(e4e.q1g);
		this.l1h(p6q, n2t, e0k);
		if (this.n9l.u2i(p6q))
		{
			break;
		}
		n2t.m4i(p6q.z1e.i1j());
		if (n2t.k2b())
		{
			e0k++;
		}
    this.n9l.m4i(p6q);
	} while (true);
}

z7v(p6q, i7a)
{
	if (i7a.length)
	{
 		this.i6x(p6q, i7a);
	}
	else
	{
		if (this.y3g)
    {
      this.i6x(p6q, "[...]");
    }
	}
	if (p6q.z1e)
	{
		if (p6q.z1e.m9z() || p6q.z1e.j3d())
		{
			this.h8z(p6q, e4e.e4h);
		}
		if (p6q.z1e.y9o())
		{
		}
		if (p6q.z1e.a8q())
		{
			this.h8z(p6q, e4e.d0q);
		}
		if (p6q.z1e.x2m())
		{
			this.h8z(p6q, e4e.r7v);
		}
	}
	else
	{
		if (this.n9l.e7s() || this.n9l.h6v())
		{
			this.h8z(p6q, e4e.e4h);
		}
		if (this.n9l.s5j())
		{
		 	this.h8z(p6q, e4e.r7v);
		}
	}
}

q4d(i7a, u4q)
{
	if (i7a.length == 0)
	{
		return;
	}
	if (!this.s8a && u4q)
	{
		this.v1l.p3z(" ");
	}
	this.v1l.p3z(i7a);
	this.s8a = false;
}

x8e(p6q, i7r)
{
	if (this.m7q && i7r.length)
	{
		this.g2o(e4e.i7r);
		this.y8d(p6q, i7r);
	}
}

t4i(p6q, f2r)
{
	if (this.m7q && f2r.length)
	{
		this.g2o(e4e.f2r);
		this.y8d(p6q, f2r);
	}
}

y4r(m7i)
{
  let x9z = m7i;
  let a5e = x9z.replaceAll("<br><br>", "<br>");
  let l3q = a5e.replaceAll("<br><br>", "<br>");
  let l4b = l3q.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = l4b;
  this.v1l.p3z(s);
}

i6x(p6q, i7a)
{
	if (i7a.length == 0)
	{
		return;
	}
	if (!this.s8a)
	{
		this.v1l.p3z(" ");
	}
  let z8a = '';
  if (p6q.z1e)
  {
  	if (p6q.z1e.y7s())
	  {
		  if (p6q.z1e.u6x() == k9n.b6o)
  		{
	  		z8a = "tdmove-crit-opening";
		  }
  		else if (p6q.z1e.u6x() == k9n.x1k)
	  	{
		  	z8a = "tdmove-crit-middle";
  		}
	  	else if (p6q.z1e.u6x() == k9n.c9k)
		  {
  			z8a = "tdmove-crit-end";
	  	}
  	}
  }
	let v5d = "<span class=\"";
	if (z8a.length == 0)
	{
		v5d += "tdmove\" movenr=\"";
	}
	else
	{
		v5d += "tdmove " + z8a + "\" movenr=\"";
	}
  v5d += this.n9l.l8u(p6q).toString();
  v5d += "\"";
	v5d += ">",
	v5d += i7a;
	v5d += "</span>";

	this.v1l.q6d(v5d);
	this.s8a = false;
}

h8z(p6q, w4w)
{
  if (w4w == e4e.e4h)
  {
    this.d3o(p6q);
  }
  else if (w4w == e4e.r7v)
  {
    this.l7t(p6q);
  }
}

d3o(p6q)
{
	let d1g = "<span class=\"tdcolors\" movenr=\"";
  d1g += this.n9l.l8u(p6q).toString();
	d1g += "\">",
	this.v1l.q6d(d1g);
	this.v1l.q6d("</span>");
}

l7t(p6q)
{
	let d1g = "<span class=\"tdmedal\" movenr=\"";
  d1g += this.n9l.l8u(p6q).toString();
	d1g += "\">",
	this.v1l.q6d(d1g);
	this.v1l.q6d("<canvas></canvas>");
	this.v1l.q6d("</span>");
}

f3z(f9z)
{
 	let d1g = "<span class=\"tdline\"";
	if (f9z)
	{
		d1g += " data-commented=\"1\"";
	}
	d1g += " data-level=\"0\">";
	this.v1l.p3z(d1g);
}

c7n()
{
  this.v1l.q6d("</span>");
}

b6v(p6q)
{
  let q7o = "tdcomment";
  if (this.r0z)
  {
    q7o += " is-bold";
  }
  let d1g = "<span class=\"" + q7o + "\" movenr=\"";
  d1g += this.n9l.l8u(p6q).toString();
  d1g += "\">";
  this.v1l.p3z(d1g);
}

i2c()
{
  this.v1l.q6d("</span>");
}

v0f(value)
{
  this.y3g = value;
}

t8z(value)
{
  this.r0z = value;
}

w2k(value)
{
  this.r4h = value;
}

i7g(value)
{
  this.m0x = value;
}

} 
const n6q =
{
	k0o : 1,
	a9a : 2,
	b1m : 3
};

class n6j
{

constructor()
{
	this.i1o = 0;
	this.p2v = 0;
	this.type = n6q.k0o;
}

r0c()
{
	let f7r = new n6j();
	f7r.i1o = this.i1o;
	f7r.p2v = this.p2v;
	f7r.type = this.type;
	return f7r;
}

}

function m5s(i1o, p2v, type)
{
	let s = new n6j();
	s.i1o = i1o;
	s.p2v = p2v;
	s.type = type;
	return s;
}
class u6i
{

constructor()
{
	this.q7t = [];
}

r0c()
{
	let z9p = new u6i();
	for (const f6u of this.q7t)
	{
		z9p.add(f6u.r0c());
	}
	return z9p;
}

h9j()
{
	this.q7t.length = 0;
}

g3d()
{
	return this.q7t.length == 0;
}

size()
{
	return this.q7t.length;
}

add(f6u)
{
	let d9m = f6u.r0c();
	this.q7t.push(d9m);
}

}

const o3t =
{
	b8j : 0,
	m9q : 1,
	t2o : 2
};

class d7y
{

constructor()
{
	this.t0h = 0;
	this.type = o3t.b8j;
}

r0c()
{
	let g7q = new d7y();
	g7q.t0h = this.t0h;
	g7q.type = this.type;
	return g7q;
}

}

function u0n(t0h, type)
{
	let p9z = new d7y();
	p9z.t0h = t0h;
	p9z.type = type;
	return p9z;
}

class s2q
{

constructor()
{
	this.n5a = [];
}

r0c()
{
	let y8p = new s2q();
	for (const z0y of this.n5a)
	{
		y8p.add(z0y.r0c());
	}
	return y8p;
}

h9j()
{
	this.n5a.length = 0;
}

g3d()
{
	return this.n5a.length == 0;
}

size()
{
	return this.n5a.length;
}

add(f6n)
{
	let v6m = f6n.r0c();
	this.n5a.push(v6m);
}

}

const g5i =
{
	f7t    : 0,
	x9b  : 1,
	y0u  : 2,
	y0l    : 3,
  n7o   : 4,
	n1o    : 5,
};


function s7p(d8n)
{
	let i7a = '';
	switch (d8n)
	{
		case g5i.f7t:
			i7a = "P";
			break;
		case g5i.x9b:
			i7a = "N";
			break;
		case g5i.y0u:
			i7a = "B";
			break;
		case g5i.y0l:
			i7a = "R";
			break;
		case g5i.n7o:
			i7a = "Q";
			break;
		case g5i.king:
			i7a = "K";
			break;
	}
	return i7a;
}

class k3k
{

constructor()
{
  this.f3e = 0;
	this.n4q = new c0c();
	this.s3b = new e1t();
}

r0c()
{
	let x5j = new k3k();
  x5j.f3e = this.f3e;
	x5j.n4q = this.n4q.r0c();
	x5j.s3b = this.s3b.r0c();
	return x5j;
}

}

const d4v = 	 		"#7B8295";
const o7j =			"#9F9F9F";
const o9k = 			    "#7B8295";
const l9h = 		  "#FFFFFF";
const h6u =       "#D0B194";

const o5d	   = "#E13129";
const s4k	 = "#389C13";
const m3u = "#E2B628";

const y2c	 = "#E13129";
const c3z	 = "#389C13";
const g1s	   = "#E2B628";

class p8q
{

constructor()
{
	this.j3l = null;
	this.p5e = false;
	this.g0o = null;
	this.x7u = null;
	this.w4s = null;
	this.h7x = 0;
	this.d2f = 0;
	this.e9p = 0;
	this.p8z = 0;
	this.p9s = 0;
	this.a8y = 0;
	this.t6l = new i2p();
	this.n2t = new i9r();
	this.u5a = new u6i();
	this.z2x = new s2q();
  this.y5q = new b1y();
  this.j0i = true;
	this.n7g = true;
	this.t1o = true;
	this.f0a = false;
	this.i6p = d4v;
	this.s8s = o7j;
	this.c5g = d2q;
	this.a2e = n5b;
	this.e1x = n5b;
	this.d7w = t6z;
	this.r2h = true;
	this.q4i = d2w;
	this.d8k = d2w;
	this.j4y = false;
	this.c1j = [];
	this.p1v = 0;
}

u9s(j3l)
{
	this.j3l = j3l;
}

r9p(t6l)
{
	this.t6l = t6l;
	this.e9p = t6l.e9p();
	this.p8z = t6l.e9p();

	this.h7x = (this.j3l.width - this.e9p) / 2;
	let top = (this.j3l.height - this.p8z) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.d2f = top;
	this.p9s = this.h7x + this.e9p - 1;
	this.a8y = this.d2f + this.p8z - 1;
	this.p5e = false;
	this.h2r();
}

m7y(n2t)
{
	this.n2t = n2t.r0c();
	this.u5a.h9j();
	this.z2x.h9j();
}

r8y(u5a)
{
	this.u5a = u5a.r0c();
}

v7d(z2x)
{
	this.z2x = z2x.r0c();
}

y0b(z1e)
{
  this.y5q = z1e.r0c();
}

e7e(f0a)
{
	this.f0a = f0a;
}

n5p()
{
	this.f0a = !this.f0a;
}

o7k()
{
	if (!this.j3l) return;
	if (this.e9p <= 0 || this.p8z <= 0)
	{
		return;
	}
	this.y4n();
}

z7i()
{
	let p3o = this.t6l.p3o;
	if (this.p5e)
	{
		return;
	}
	this.p5e = true;
	if (p3o == d1d.u5l)
	{
  	this.g0o = o8v.u1v("images/board/LightSquare");
  	this.x7u = o8v.u1v("images/board/DarkSquare");
		this.w4s = o8v.u1v("images/board/Margin");
	}
}

h2r()
{
	this.z7i();
	let p3o = this.t6l.p3o;
	if (p3o == d1d.u5l)
	{
		this.r2h = false;
		this.n7g = false;
		this.t1o = false;
		this.c5g = "#FFFF97";
		this.a2e = "#9B2E31";
		this.e1x = i0w;
	}
}

y4n()
{
	this.h2r();
	if (this.t6l.p3o == d1d.u5l)
	{
		let m3b = o8v.u1v("images/board/BoardBackground");
		this.m3d(new o1y(0, 0, this.j3l.width, this.j3l.height), m3b);
	}
	this.j6g();  
	this.i3c(); 
	this.e3s(); 
  if (chess)
  {
	  this.q4a();
  }
  else
  {
	  this.j3q();
  	this.d0m();
  }
  
  this.p9c();
 	this.f9b();
 	this.e6q();
 	this.q2p();
	this.f4z(); 
	this.l1t();      
}

j6g()
{
	let a6q = this.d2f;
	let v5s = this.h7x;
	let l4o = this.p9s;
	let n1r = this.a8y;
	let n7r = this.t6l.m8a;
	this.n5k(new o1y(v5s, a6q, l4o, a6q+n7r-1), this.a2e);
	this.n5k(new o1y(v5s, n1r-n7r+1, l4o, n1r), this.e1x);
	this.n5k(new o1y(v5s, a6q, v5s+n7r-1, n1r), this.a2e);
	this.n5k(new o1y(l4o-n7r+1, a6q, l4o, n1r), this.e1x);
}

i3c()
{
	let m8a = this.t6l.m8a;
	let v6s = this.t6l.v6s;
	if (!v6s)
	{
		return;
	}
	if (this.r2h || !this.w4s)
	{
		this.e8s(this.d7w);
	}
	else
	{
		let left = this.h7x + m8a;
		let top = this.d2f + m8a;
		let n1g = this.p9s - m8a;
		let w1y = this.d2f + m8a + v6s - 1;
		this.m3d(new o1y(left, top, n1g, w1y), this.w4s);

		left = this.h7x + m8a;
		top = this.d2f + m8a;
		n1g = this.h7x + m8a + v6s - 1;
		w1y = this.a8y - m8a;
		this.m3d(new o1y(left, top, n1g, w1y), this.w4s);

		left = this.h7x + m8a;
		top = this.a8y - m8a - v6s + 1;
		n1g = this.p9s - m8a;
		w1y = this.a8y - m8a;
		this.m3d(new o1y(left, top, n1g, w1y), this.w4s);

		left = this.p9s - m8a - v6s + 1;
		top = this.d2f + m8a;
		n1g = this.p9s - m8a;
		w1y = this.a8y - m8a;
		this.m3d(new o1y(left, top, n1g, w1y), this.w4s);
	}
}

e8s()
{
	let m8a = this.t6l.m8a;
	let v6s = this.t6l.v6s;
	if (!v6s)
	{
		return;
	}

	let left = this.h7x + m8a;
	let top = this.d2f + m8a;
	let n1g = this.p9s - m8a;
	let w1y = this.d2f + m8a + v6s - 1;
	this.n5k(new o1y(left, top, n1g, w1y), this.d7w);

	left = this.h7x + m8a;
	top = this.d2f + m8a;
	n1g = this.h7x + m8a + v6s - 1;
	w1y = this.a8y - m8a;
	this.n5k(new o1y(left, top, n1g, w1y), this.d7w);

	left = this.h7x + m8a;
	top = this.a8y - m8a - v6s + 1;
	n1g = this.p9s - m8a;
	w1y = this.a8y - m8a;
	this.n5k(new o1y(left, top, n1g, w1y), this.d7w);

	left = this.p9s - m8a - v6s + 1;
	top = this.d2f + m8a;
	n1g = this.p9s - m8a;
	w1y = this.a8y - m8a;
	this.n5k(new o1y(left, top, n1g, w1y), this.d7w);
}

l1t()
{
	if (this.t6l.r2n)
	{
  	if (!this.t6l.v6s)
  	{
	  	return;
  	}
		let color = "#000000";
		if (this.n2t.k2b())
		{
			color = "#EDD790";
		}
		else
		{
			color = "#000000";
		}
		let rect = this.i6a();
		let u3r = this.d0k();
		u3r.beginPath();
		u3r.fillStyle = color;
		let z4v = rect.v1k() * 0.40;
		u3r.arc(rect.i4f + rect.v1k()/2 - 1, rect.a2y + rect.s2f()/2 - 1,
			z4v, 0, 2 * Math.PI);
		u3r.fill();
	}
}

e3s()
{
	let c0b = i0w;
	let m8a = this.t6l.m8a;
	let v6s = this.t6l.v6s;
	let n7r = this.t6l.n7r;
	let a6q = this.d2f + m8a + v6s;
	let v5s = this.h7x + m8a + v6s;
	let l4o = this.p9s - m8a - v6s;
	let n1r = this.a8y - m8a - v6s;
	this.n5k(new o1y(v5s, a6q, l4o, a6q+n7r-1), c0b);
	this.n5k(new o1y(v5s, n1r-n7r+1, l4o, n1r), c0b);
	this.n5k(new o1y(v5s, a6q, v5s+n7r-1, n1r), c0b);
	this.n5k(new o1y(l4o-n7r+1, a6q, l4o, n1r), c0b);
}

d0k()
{
	return this.j3l.getContext('2d');
}

b2d(rect, color)
{
	let u3r = this.d0k();
	u3r.beginPath();
	u3r.lineWidth = "1";
	u3r.strokeStyle = color;
	u3r.rect(rect.i4f, rect.a2y, rect.v1k(), rect.s2f());
	u3r.stroke();
}

n5k(rect, color)
{
	let u3r = this.d0k();
	u3r.fillStyle = color;
	u3r.fillRect(rect.i4f, rect.a2y, rect.v1k(), rect.s2f());
}

m3d(rect, img)
{
	let u3r = this.d0k();
	let y9s = u3r.createPattern(img, 'repeat');
	u3r.fillStyle = y9s;
	u3r.fillRect(rect.i4f, rect.a2y, rect.v1k(), rect.s2f());
}

u5q(rect, img)
{
	let u3r = this.d0k();
	let y9s = u3r.createPattern(img, 'no-repeat');
	u3r.fillStyle = y9s;
	u3r.fillRect(rect.i4f, rect.a2y, rect.v1k(), rect.s2f());
}

a1s(t0h)
{
	let g4f = b4p;
	let e4p = l4v;
	if (this.f0a)
	{
		g4f = m9h(u0z(t0h));
		e4p = u4i(u0z(t0h));
	}
	else
	{
		g4f = m9h(t0h);
		e4p = u4i(t0h);
	}
	if (startsWithDarkSquare(e4p))
	{
		g4f++;
	}
	else
	{
		g4f--;
	}
	return this.b6u(e4p, g4f);
}

j3q()
{
	for (const t0h of x6a)
	{
		this.u7j(t0h);
	}
}

u7j(t0h)
{
	this.h3x(this.a1s(t0h), t0h);
}

h3x(rect, t0h)
{
	let u1v = this.g0o;
	if (this.t1o)
	{
		this.w6g(rect, this.s8s);
		return;
	}
	if (!u1v)
	{
		this.w6g(rect, this.s8s);
		return;
	}

	let y1e = u1v.width;
	let j1p = u1v.height;
	let o9w = this.t6l.p0u;
	if (y1e < o9w || j1p < o9w)
	{
		this.u5q(rect, u1v);
		return;
	}

	let p3p = Math.trunc(y1e / this.t6l.p0u);
	let f6t = Math.trunc(j1p / this.t6l.p0u);
	if (p3p == 0)
	{
		p3p = 1;
	}
	if (f6t == 0)
	{
		f6t = 1;
	}

	let l7y = Math.trunc((t0h) / p3p);
	let q0c = (t0h) % p3p;
	let y = Math.trunc(l7y / f6t);
	l7y = l7y % f6t;

  let s4z = new o1y();
	s4z.i4f = q0c * this.t6l.p0u;
	s4z.a2y = l7y * this.t6l.p0u;
	s4z.u8l = (q0c + 1) * this.t6l.p0u - 1;
	s4z.w3s = (l7y + 1) * this.t6l.p0u - 1;
	let u3r = this.d0k();
	k3i(u3r, rect, u1v, s4z);
}

y6t(t0h)
{
	let g4f = b4p;
	let e4p = l4v;
	if (this.f0a)
	{
		g4f = m9h(u0z(t0h));
		e4p = u4i(u0z(t0h));
	}
	else
	{
		g4f = m9h(t0h);
		e4p = u4i(t0h);
	}
	return this.b6u(e4p, g4f);
}

d0m()
{
	for (const t0h of x6a)
	{
		this.d7n(t0h);
	}
}

d7n(t0h)
{
	this.q6a(this.y6t(t0h), t0h);
}

q6a(rect, t0h)
{
	let u1v = this.x7u;
	if (this.n7g)
	{
		this.w6g(rect, this.i6p);
		return;
	}
	if (!u1v)
	{
		this.w6g(rect, this.i6p);
		return;
	}

	let y1e = u1v.width;
	let j1p = u1v.height;
	let o9w = this.t6l.p0u;
	if (y1e < o9w || j1p < o9w)
	{
		this.u5q(rect, u1v);
		return;
	}

	let p3p = Math.trunc(y1e / this.t6l.p0u);
	let f6t = Math.trunc(j1p / this.t6l.p0u);
	if (p3p == 0)
	{
		p3p = 1;
	}
	if (f6t == 0)
	{
		f6t = 1;
	}

	let l7y = Math.trunc((t0h) / p3p);
	let q0c = (t0h) % p3p;
	let y = Math.trunc(l7y / f6t);
	l7y = l7y % f6t;

  let s4z = new o1y();
	s4z.i4f = q0c * this.t6l.p0u;
	s4z.a2y = l7y * this.t6l.p0u;
	s4z.u8l = (q0c + 1) * this.t6l.p0u - 1;
	s4z.w3s = (l7y + 1) * this.t6l.p0u - 1;
	let u3r = this.d0k();
	k3i(u3r, rect, u1v, s4z);
}

b6u(e4p, g4f)
{
	let m8a = this.t6l.m8a;
	let v6s = this.t6l.v6s;
	let n7r = this.t6l.n7r;
	let p0u = this.t6l.p0u;
	let rect = new o1y();
	rect.i4f = this.h7x + m8a + v6s +	n7r + (g4f) * p0u;
	rect.u8l = rect.i4f + p0u - 1;
	rect.a2y = this.d2f + m8a + v6s +	n7r + (j3r - e4p - 1) * p0u;
	rect.w3s = rect.a2y + p0u - 1;
	return rect;
}

n9r(t0h)
{
	let g4f = b4p;
	let e4p = l4v;
	if (this.f0a)
	{
		g4f = m9h(u0z(t0h));
		e4p = u4i(u0z(t0h));
	}
	else
	{
		g4f = m9h(t0h);
		e4p = u4i(t0h);
	}
	return this.b6u(e4p, g4f);
}

q4a()
{
	for (const t0h of x6a)
	{
		this.k9l(t0h);
	}
}

k9l(t0h)
{
	this.i2n(this.n9r(t0h), t0h);
}

i2n(rect, t0h)
{
	let r4d = h7z(t0h);
	let u1v = this.g0o;
	if (r4d)
	{
		u1v = this.x7u;
	}
	if (r4d)
	{
		if (this.n7g)
		{
			this.w6g(rect, this.i6p);
			return;
		}
		if (!u1v)
		{
			this.w6g(rect, this.i6p);
			return;
		}
	}
	else
	{
		if (this.t1o)
		{
			this.w6g(rect, this.s8s);
			return;
		}
		if (!u1v)
		{
			this.w6g(rect, this.s8s);
			return;
		}
	}

 	let y1e = u1v.width;
	let j1p = u1v.height;
	let o9w = this.t6l.p0u;
	if (y1e < o9w || j1p < o9w)
	{
		this.u5q(rect, u1v);
		return;
	}
	let p3p = Math.trunc(y1e / this.t6l.p0u);
	let f6t = Math.trunc(j1p / this.t6l.p0u);
	if (p3p == 0)
	{
		p3p = 1;
	}
	if (f6t == 0)
	{
		f6t = 1;
	}

	let l7y = Math.trunc((t0h) / p3p);
	let q0c = (t0h) % p3p;
	let y = Math.trunc(l7y / f6t);
	l7y = l7y % f6t;

  let s4z = new o1y();
	s4z.i4f = q0c * this.t6l.p0u;
	s4z.a2y = l7y * this.t6l.p0u;
	s4z.u8l = (q0c + 1) * this.t6l.p0u - 1;
	s4z.w3s = (l7y + 1) * this.t6l.p0u - 1;
	let u3r = this.d0k();
	k3i(u3r, rect, u1v, s4z);
}

w6g(rect, color)
{
	this.n5k(rect, color);
}

e6q()
{
	for (const t0h of x6a)
	{
		this.i9k(t0h);
	}
}

p6r(i1o, p2v, e5v)
{
	this.q4i = i1o;
	this.d8k = p2v;
	this.j4y = e5v;

	this.c1j.length = 0;
 	let z5a = this.n9r(i1o);
  let c9p = this.n9r(p2v);
	let l3g = this.t6l.p0u;

	let v9j = 32;
	if (l3g < 32)
	{
		v9j = l3g;
	}

  
	if (false)
	{
    
    
		let t4h = new c4l(z5a.i4f + l3g / 2, z5a.a2y + l3g / 2);
		let x3l = new c4l(c9p.i4f + l3g / 2, c9p.a2y + l3g / 2);
		let n3q = Math.abs(t4h.X - x3l.X);
		let r8m = Math.abs(t4h.Y - x3l.Y);
		let p9h = Math.atan2(x3l.X - t4h.X, t4h.Y - x3l.Y);
		let g5q = Math.sqrt(n3q*n3q + r8m*r8m) / 2;
		x3l.X = t4h.X + g5q * 2;
		x3l.Y = t4h.Y;
		let f5y = new c4l(t4h.X + g5q, t4h.Y);
		let d7s = Math.PI / v9j;
		let g7n = l3g * 0.40;
		let r6n = Math.PI;
		let k3d = (c9p.i4f > z5a.i4f && c9p.a2y < z5a.a2y) ||
			(c9p.i4f < z5a.i4f && c9p.a2y > z5a.a2y);
		for (let i = 1; i < v9j; i++)
		{
			let b2d = new o1y();
			if (k3d)
			{
				r6n -= d7s;
			}
			else
			{
				r6n += d7s;
			}
			let v4h = Math.cos(r6n);
			let z2f = Math.sin(r6n);
			let k7a = new c4l(f5y.X + g5q * v4h,
				f5y.Y - g7n * z2f);
			this.c1j.push(d8w(k7a, t4h, p9h - Math.PI / 2));
		}
	}
	else
	{
		let t4h = new c4l(z5a.i4f + l3g / 2, z5a.a2y + l3g / 2);
		let x3l = new c4l(c9p.i4f + l3g / 2, c9p.a2y + l3g / 2);
		let j8p = (x3l.X - t4h.X) / v9j;
		let o6n = (x3l.Y - t4h.Y) / v9j;
		for (let i = 1; i < v9j; i++)
		{
			this.c1j.push(new c4l(t4h.X + i * j8p, t4h.Y + i * o6n));
		}
	}
	this.c1j.push(new c4l(c9p.i4f + l3g / 2, c9p.a2y + l3g / 2));
	this.p1v = 0;
}

z5p()
{
	this.q4i = d2w;
	this.d8k = d2w;
}

q7l()
{
	this.o7k(); 

	let l3v = this.c1j[this.p1v];
	let p0u = this.t6l.p0u;
	let b2d = new o1y();
	b2d.i4f = l3v.X - p0u / 2;
	b2d.a2y = l3v.Y - p0u / 2;
	b2d.w3m(p0u);
	b2d.f8r(p0u);
 	let u3r = this.d0k();
	p3a(u3r, b2d, this.n2t.j1a(this.q4i));

	this.p1v++;
	if (this.p1v >= this.c1j.length)
	{
		let d8n = this.n2t.j1a(this.q4i);
		this.n2t.z6q(this.q4i, d5p.g3d);
		this.n2t.z6q(this.d8k, d8n);
		this.z5p();
		return true;
	}
	else
	{
		return false;
	}
}

i9k(t0h)
{
	if (t0h == this.q4i)
	{
		return;
	}
	let p8e = this.n9r(t0h);
 	let u3r = this.d0k();
	p3a(u3r, p8e, this.n2t.j1a(t0h));
}

f4z()
{
	if (!this.t6l.o1u)
	{
    return;
  }

 	let n7r = this.t6l.n7r;
	let m8a = this.t6l.m8a;
	let v6s = this.t6l.v6s;
	let p0u = this.t6l.p0u;

	let d4z = new o1y();
	d4z.i4f = this.h7x + m8a + v6s;
	d4z.a2y = this.d2f + m8a + v6s;
	d4z.w3m(j3r * p0u + 2 * n7r);
	d4z.f8r(j3r * p0u + 2 * n7r);

 	let u3r = this.d0k();
  let i7s = f0k(u3r, v6s-6);

  f4z(u3r,
    d4z,
    this.t6l,
    i7s,
    c7x.k4b,
    this.c5g,
    this.f0a,
    v6s);
}

h6t(t0h, color)
{
	let rect = this.n9r(t0h);
	let u3r = this.d0k();
  u3r.save();
  u3r.globalAlpha = 0.25; 
	u3r.fillStyle = color;
	u3r.fillRect(rect.i4f, rect.a2y, rect.v1k(), rect.s2f());
  u3r.restore();
}

p9c()
{
	if (this.j0i)
	{
		if (!this.y5q.g3d())
		{
      let color = "#800080"; 
			this.h6t(this.y5q.i1o, color);
			this.h6t(this.y5q.p2v, color);
		}
  }
}

f9b()
{
	for (const z0y of this.z2x.n5a)
	{
		this.h3c(z0y);
	}
}

h3c(z0y)
{
	let rect = this.n9r(z0y.t0h);
	let w4x = '';
	switch (z0y.type)
	{
		case o3t.b8j:
			w4x = o5d;
			break;
		case o3t.m9q:
			w4x = s4k;
			break;
		case o3t.t2o:
			w4x = m3u;
			break;
	}
	let l3g = this.e9p / 10;
	let u3r = this.d0k();
  /* dit is met roundrect
  g3v(rect, 5);
	u3r.lineWidth = l3g / 15;
	u3r.strokeStyle = w4x;
	f9r(u3r, rect.i4f, rect.a2y, rect.v1k(), rect.s2f(), 10);
  */
  
  u3r.save();
  u3r.globalAlpha = 0.7; 
	u3r.fillStyle = w4x;
	u3r.fillRect(rect.i4f, rect.a2y, rect.v1k(), rect.s2f());
  u3r.restore();
}

q2p()
{
	for (const f6u of this.u5a.q7t)
	{
		this.x2u(f6u);
	}
}

x2u(f6u)
{
	let i1o = f6u.i1o;
	let p2v = f6u.p2v;
	let d9p = f6u.type;

	let z5a = this.n9r(i1o);
	let c9p = this.n9r(p2v);

	let v5n = z5a.i4f + z5a.v1k()/2;
	let q7f = z5a.a2y + z5a.s2f()/2;
	let v0x = new c4l(v5n, q7f);

	let d3z = c9p.i4f + c9p.v1k()/2;
	let o3k = c9p.a2y + c9p.s2f()/2;

	let k9c = (d3z-v5n)*(d3z-v5n) + (o3k-q7f)*(o3k-q7f);
	let i3w = Math.sqrt(k9c);

	let r4r = (this.n2t.c8p(i1o)) ? 0 : z5a.v1k() / 4;
	i3w -= r4r;
	let r0n = (this.n2t.c8p(p2v)) ? 0 : z5a.v1k() / 4;
	i3w -= r0n;

	let r7z = 5;
	let l9o = 5 * r7z;
	let z0m = 7 * r7z;

	let a0c = v5n + r4r;
	let l3b = q7f;

	let o9e = a0c + i3w - 1;
	let f0j = q7f;

	let p4k = o9e - z0m;
	let i6u = q7f;

	let p9h = Math.atan2((d3z - v5n), (q7f - o3k));

  
	let p7s = [];
  let z8f = 10; 
	p7s.push(new c4l(p4k, i6u));
	p7s.push(new c4l(p4k - z8f, i6u - l9o));
	p7s.push(new c4l(o9e, f0j));
	p7s.push(new c4l(p4k - z8f, i6u + l9o));
	p7s.push(new c4l(p4k, f0j));
	let w8a = [];
	for (let i = 0; i <= 4; i++)
	{
		w8a.push(d8w(p7s[i], v0x, p9h - Math.PI / 2));
	}

	let u3r = this.d0k();
  u3r.save();
  u3r.globalAlpha = 0.7;

 	let u3w = '';
	switch (d9p)
	{
		case n6q.k0o:
			u3w = y2c;
			break;
		case n6q.a9a:
			u3w = c3z;
			break;
		case n6q.b1m:
			u3w = g1s;
			break;
	}
 	u3r.fillStyle = u3w;
  u3r.strokeStyle = u3w;
	u3r.beginPath();
	u3r.moveTo(w8a[0].X, w8a[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		u3r.lineTo(w8a[i].X, w8a[i].Y);
	}
	u3r.closePath();
	u3r.fill();

  
	p7s.length = 0;
	p7s.push(new c4l(a0c, l3b - r7z));
	p7s.push(new c4l(a0c, l3b + r7z));
	p7s.push(new c4l(p4k, l3b + r7z));
	p7s.push(new c4l(p4k, l3b - r7z));
	w8a.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		w8a.push(d8w(p7s[i], v0x, p9h - Math.PI / 2));
	}
	if (v5n == d3z)
	{
		if (w8a[0].Y != w8a[1].Y)
		{
			w8a[0].Y = w8a[1].Y;
		}
		if (w8a[2].Y != w8a[3].Y)
		{
			w8a[2].Y = w8a[3].Y;
		}
	}
	if (q7f == o3k)
	{
		if (w8a[0].X != w8a[1].X)
		{
			w8a[0].X = w8a[1].X;
		}
		if (w8a[2].X != w8a[3].X)
		{
			w8a[2].X = w8a[3].X;
		}
	}
	u3r.beginPath();
	u3r.moveTo(w8a[0].X, w8a[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		u3r.lineTo(w8a[i].X, w8a[i].Y);
	}
	u3r.closePath();
	u3r.fill();
  u3r.restore();
}

i6a()
{
	let m8a = this.t6l.m8a;
	let v6s = this.t6l.v6s;
	let l3g = this.t6l.p0u;
	let rect = new o1y();
	rect.i4f = this.p9s - m8a - v6s + 1;
	rect.a2y = this.a8y - m8a - v6s;
	rect.w3s = this.a8y;
	rect.u8l = this.p9s - 1;
	return rect;
}

}

const b3a = 14;

const d1d =
{
	u5l : 0
};

const f3a =
{
	u5l : 0
};

const m7b =
{
	f0x : 0,
	h6h : 1,
};

const c7x =
{
	m1f: 0,
	f3y: 1,
	k4b: 2,
	o6e: 3,
	h0d: 4,
};

class i2p
{

constructor()
{
	this.p3o = d1d.u5l;
	this.y6o = 1; 
	this.m8a = 0;
	this.v6s = b3a;
	this.n7r = 2;
	this.p0u = 32;
	this.v6r = 20;
	this.o1u = true;
	this.q8k = m7b.h6h;
	this.r2n = true;
}

r0c()
{
	let l3n = new i2p();
	l3n.p3o = this.p3o;
	l3n.y6o = this.y6o;
	l3n.m8a = this.m8a;
	l3n.v6s = this.v6s;
	l3n.n7r = this.n7r;
	l3n.p0u = this.p0u;
	l3n.v6r = this.v6r;
	l3n.o1u = this.o1u;
	l3n.q8k = this.q8k;
	l3n.r2n = this.r2n;
	return l3n;
}

e9p()
{
	return this.p0u * j3r + 2 * (this.m8a + this.v6s + this.n7r);
}

e6n(rect)
{
	let w = rect.v1k();
	let h = rect.s2f();
	let t8e = 0;
	if (w < h)
	{
		t8e = w;
	}
	else
	{
		t8e = h;
	}
	if (this.v6s)
	{
		for (this.p0u = 2; this.p0u < 1000; this.p0u++)
		{
			this.v6s = (this.p0u / 100) * this.v6r;
			if (this.v6s < b3a)
			{
				this.v6s = b3a;
			}
			let size = 2 * (this.m8a + this.v6s + this.n7r) + j3r * this.p0u;
			if (size > t8e)
			{
				break;
			}
		}
		this.p0u--;
		this.v6s = (this.p0u / 100) * this.v6r;
		if (this.v6s < b3a)
		{
			this.v6s = b3a;
		}
	}
	else
	{
		for (this.p0u = 2; this.p0u < 1000; this.p0u++)
		{
			let size = 2 * (this.m8a + this.n7r) + j3r * this.p0u;
			if (size > t8e)
			{
				break;
			}
		}
		this.p0u--;
	}
	return this.e9p();
}

}


class l3f
{

constructor()
{
	this.b3q = new i9r();
	this.y9b = new i9r();
	this.u5a = new u6i();
	this.z2x = new s2q();
	this.x7d = new b1y();
 	this.g8c = new b1y();
	this.o8o = 0;
	this.s3l = false;
	this.g4r = false;
	this.m8s = 0;
	this.k6y = 0;
	this.h6i = '';
}

}

const c4i =
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

function g3v(rect, y7z)
{
	rect.i4f += y7z;
	rect.u8l -= y7z;
	if (rect.i4f > rect.u8l)
	{
		rect.i4f = rect.u8l;
	}
	rect.a2y += y7z;
	rect.w3s -= y7z;
	if (rect.a2y > rect.w3s)
	{
		rect.a2y = rect.w3s;
	}
}

function k3i(f8c, x1y, d4d, s4z)
{
	f8c.drawImage(d4d, s4z.i4f, s4z.a2y, s4z.v1k(), s4z.s2f(),
		x1y.i4f, x1y.a2y, x1y.v1k(), x1y.s2f());
}

function f9r(u3r, x, y, width, height, z4v)
{
	u3r.beginPath();
	u3r.moveTo(x, y + z4v);
	u3r.lineTo(x, y + height - z4v);
	u3r.arcTo(x, y + height, x + z4v, y + height, z4v);
	u3r.lineTo(x + width - z4v, y + height);
	u3r.arcTo(x + width, y + height, x + width, y + height-z4v, z4v);
	u3r.lineTo(x + width, y + z4v);
	u3r.arcTo(x + width, y, x + width - z4v, y, z4v);
	u3r.lineTo(x + z4v, y);
	u3r.arcTo(x, y, x, y + z4v, z4v);
	u3r.stroke();
}

function d8w(i7k, v0x, q4o)
{
	let p = new c4l();
	p.X = (Math.cos(q4o) * (i7k.X - v0x.X)) - (Math.sin(q4o) * (i7k.Y - v0x.Y)) + v0x.X;
	p.Y = (Math.sin(q4o) * (i7k.X - v0x.X)) + (Math.cos(q4o) * (i7k.Y - v0x.Y)) + v0x.Y;
	return p;
}

function g3q(u3r, rect, r7v)
{
	let left = rect.i4f;
	let top = rect.a2y;
	let n1g = rect.u8l;
	let w1y = rect.w3s;

	u3r.fillStyle = x4t;
	u3r.fillRect(rect.i4f, rect.a2y, rect.v1k(), rect.s2f());

	if (r7v.f0x())
	{
		return;
	}

	let x2c = r7v.i1b();
	let l9x = 0;
	if (x2c > 8)
	{
		l9x = (n1g - left) / 8;
	}
	else
	{
		l9x = (n1g - left) / x2c;
	}
	let s2t = left - l9x;
	let m3m = top;
	let c5k = s2t + l9x;
	let o0r = 0;
	if (x2c > 8)
	{
		o0r = (w1y - top + 1) / 2;
	}
	else
	{
		o0r = w1y - top + 1;
	}

	let j5w = top + o0r - 1;
	let j9o = 0;
	for (let i = 0; i < 16; i++)
	{
		if (r7v.x7w(i))
		{
			s2t += l9x;
			c5k += l9x;
			if (j9o == 7 || j9o == 15 ||
				(j9o < 8 && j9o == x2c - 1))
			{
				c5k = n1g;
			}
			if (j9o == 8)
			{
				s2t = left;
				c5k = s2t + l9x;
				m3m = top + o0r;
				j5w = w1y;
			}
			let y4h = new o1y(s2t, m3m, c5k, j5w);
			u3r.fillStyle = c4i[i];
			u3r.fillRect(y4h.i4f, y4h.a2y, y4h.v1k(), y4h.s2f());
			j9o++;
		}
	}
}




class z0c
{

constructor()
{
	this.g3t = '';
	this.u1v = null;
}

}

class v2p
{

constructor()
{
	this.r1f = [];
}

add(img)
{
	let c0q = new z0c();
	c0q.g3t = img.id;
	c0q.u1v = img;
	this.r1f.push(c0q);
}

u1v(g3t)
{
	for (const t6m of this.r1f)
	{
		if (t6m.g3t.toLowerCase() == g3t.toLowerCase())
		{
			return t6m.u1v;
		}
	}
	return null;
}

}
const x5z 				= "#00FFFF";
const i0w 			= "#000000";
const t6z 				= "#0000FF";
const k4h 			= "#FFFBF0";
const f3q 			= "#808080";
const c0l 		= "#FF00FF";
const l3y 				= "#808080";
const v3i 			= "#008000";
const l2i 				= "#00FF00";
const d0n 			= "#C0C0C0";
const c7e 			= "#800000";
const x0t 		= "#A0A0A4";
const l7k 	= "#C0DCC0";
const p7f 				= "#000080";
const s3m 			= "#808000";
const i0a 			= "#800080";
const x4t 				= "#FF0000";
const i1e 			= "#C0C0C0";
const n2f 		= "#A6CAF0";
const g9e 				= "#008000";
const n5b 			= "#FFFFFF";
const d2q 			= "#FFFF00";

class c4l
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

r0c()
{
	let w8y = new c4l();
	w8y.i4f = this.X;
	w8y.a2y = this.Y;
	return w8y;
}

}

class o1y
{

constructor(left, top, n1g, w1y)
{
	if (left === undefined)
	{
		this.i4f = 0;
		this.a2y = 0;
		this.u8l = 0;
		this.w3s = 0;
	}
	else
	{
		this.i4f = left;
		this.a2y = top;
		this.u8l = n1g;
		this.w3s = w1y;
	}
}

r0c()
{
	let g8g = new o1y();
	g8g.i4f = this.i4f;
	g8g.a2y = this.a2y;
	g8g.u8l = this.u8l;
	g8g.w3s = this.w3s;
	return g8g;
}

v1k()
{
	return this.u8l - this.i4f + 1;
}

s5w()
{
	return this.u8l - this.i4f + 1;
}

w3m(width)
{
	this.u8l = this.i4f + width - 1;
}

s2f()
{
	return this.w3s - this.a2y + 1;
}

j4b()
{
	return this.w3s - this.a2y + 1;
}

f8r(height)
{
	this.w3s = this.a2y + height - 1;
}

s1f()
{
	this.i4f++;
	this.a2y++;
	this.u8l--;
	this.w3s--;
}

a9e(l3v)
{
	return l3v.X >= this.i4f &&
		l3v.X <= this.u8l &&
		l3v.Y >= this.a2y &&
		l3v.Y <= this.w3s;
}


}

class o3u
{

constructor(s5i)
{
	this.s5i = s5i;
	this.e1u = new i9r();
	this.r2x = new p8q();
	this.s6w = null;
	this.t6l = new i2p();
	this.b7q = true;
}

t5u()
{
	let n8c = window.devicePixelRatio;

	this.r2x.j3l.width = this.s6w.clientWidth * n8c;
	this.r2x.j3l.height = this.s6w.clientHeight * n8c;

	let b4s = 32 * n8c;
	let d6z = 32 * n8c;
	let s7v = this.r2x.j3l.width - b4s;
	let d1l = this.r2x.j3l.height - d6z;
	let k8w = d1l < s7v ? d1l : s7v;
	if (k8w < 128)
	{
		k8w = 128;
	}
	let rect = new o1y();
	rect.i4f = 0;
	rect.a2y = 0;
	rect.w3m(k8w);
	rect.f8r(k8w);
	this.t6l.v6s = k8w * 0.02;
  if (this.t6l.v6s < b3a)
  {
    this.t6l.v6s = b3a;
  }
	k8w = this.t6l.e6n(rect);
 	this.r2x.r9p(this.t6l);
	this.r2x.o7k();
}

n5p()
{
	this.r2x.n5p();
	this.r2x.o7k();
}

q8s()
{
	this.t6l.o1u = !this.t6l.o1u;
	this.r2x.r9p(this.t6l);
	this.r2x.o7k();
}

z2k()
{
	this.r2x.r9p(this.t6l);
	this.r2x.o7k();
}

j7c(p6t)
{
	this.e1u = p6t.y9b.r0c();
	this.r2x.m7y(this.e1u);
	this.r2x.r8y(p6t.u5a);
	this.r2x.v7d(p6t.z2x);
  
 	this.r2x.y0b(p6t.g8c);
	this.r2x.o7k();

	if (this.b7q)
	{
		w6n('playBackward' + this.s5i, p6t.s3l);
		w6n('goToBegin'+ this.s5i, p6t.s3l);
		w6n('playForward' + this.s5i, p6t.g4r);
		w6n('goToEnd' + this.s5i, p6t.g4r);
		w6n('autoPlay' + this.s5i, p6t.g4r);
	}
	else
	{
		w6n('goToBegin' + this.s5i, p6t.s3l);
		w6n('goToEnd' + this.s5i, p6t.g4r);
	}
}

m7y(n2t)
{
	let p6t = new l3f();
	p6t.y9b = n2t.r0c();
	this.m7y(p6t);
}

r9p(t6l)
{
  this.t6l = t6l.r0c();
}

}

class b0i
{

constructor(s5i)
{
	this.s5i = s5i;
  this.u3n = null;
	this.k0a = new c0c();
}

d2c(k0a)
{
	this.k0a = k0a.r0c();
	this.z7z();
}

z7z()
{
	let n7l = this.k0a.y1l.n0s.d4k();
	let j6i = this.k0a.n4i.n0s.d4k();

	let u5u = '';
	if (n7l.length && this.k0a.y1l.y8h)
	{
		u5u = this.k0a.y1l.y8h.toString();
	}
	let g3m = '';
	if (n7l.length && this.k0a.y1l.w4t.length)
	{
		g3m = this.k0a.y1l.w4t.toString();
	}

	let x4g = '';
	if (j6i.length && this.k0a.n4i.y8h)
	{
		x4g = this.k0a.n4i.y8h.toString();
	}
	let e4c = '';
	if (j6i.length && this.k0a.n4i.w4t.length)
	{
		e4c = this.k0a.n4i.w4t.toString();
	}

	let i5z = this.k0a.y1l.n0s.z4t(1);
	let u4v = this.k0a.n4i.n0s.z4t(1);

	let m1l = '';
	let h0f = '';
	if (!this.k0a.y1l.c0u.g3d() &&
		!this.k0a.n4i.c0u.g3d())
	{
		m1l = this.k0a.y1l.c0u.p9y();
		h0f = this.k0a.n4i.c0u.p9y();
	}

	let f5n = u3c(this.k0a.c8h);
	let u1l = this.k0a.u1l.w4t;
	if (!this.k0a.u1l.l6w.g3d())
	{
		u1l += " ";
		u1l += this.k0a.u1l.l6w.d6w.toString();
	}
	let d5w = '';
	if (!this.k0a.t4y.g3d())
	{
		d5w = this.k0a.t4y.toString("dd-mm-yyyy");
	}
	let h9i = '';
	if (!this.k0a.h9i.g3d())
	{
		h9i = '</br>' + '[' + this.k0a.h9i.g3t + ']';
	}

	let s3i = document.getElementById("nota-container"+this.s5i);
	let g7w = s3i.clientHeight;
	let l0p = 200;

  let index = this.s5i;
  let d0c = this.k0a.u1l.d0c;

	let e5b = true;
	if (this.u3n.clientWidth >= 374 && g7w >= l0p)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + n7l + "</span>";
    s += 					"<span class=\"rating\">" + u5u + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + m1l + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + f5n + "</span>";
		s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + j6i + "</span>";
		s +=          "<span class=\"rating\">" + x4g + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + h0f + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "<span>" + g3m + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + u1l + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + d0c + "</span>";
		s +=          "<span class=\"gameDate\">" + d5w + "</span>";
    s +=          "<span class=\"annotator\">" + h9i + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + e4c + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
		s +=      "</tr>";
		s +=    "</table>";
		this.u3n.innerHTML = s;

		
		
		let x3a = Math.trunc(this.u3n.clientWidth / 10);
		if (x3a < 24) x3a = 24;
    
		
		
		
		
		
		
	}
	else if (this.u3n.clientWidth >= 300 && g7w >= l0p)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + i5z + "</span>";
    s +=          "<span class=\"rating\">" + u5u + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + m1l + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + f5n + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + u4v + "</span>";
    s +=          "<span class=\"rating\">" + x4g + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + h0f + "</span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + g3m + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + u1l + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + d0c + "</span>";
    s +=          "<span class=\"gameDate\">" + d5w + "</span>";
		s +=          "<span class=\"annotator\">" + h9i + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + e4c + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.u3n.innerHTML = s;
	}
	else if (this.u3n.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + i5z + "</span>";
    s +=          "<span class=\"rating\">" + u5u + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + f5n + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + u4v + "</span>";
    s +=          "<span class=\"rating\">" + x4g + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.u3n.innerHTML = s;
	}
	else
	{
		
		e5b = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + i5z + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + f5n + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + u4v + "</span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.u3n.innerHTML = s;
	}

	if (e5b)
	{
		let r0e = 16;
		if (this.u3n.clientWidth < 400)
		{
			r0e = 16;
		}
		else if (this.u3n.clientWidth < 500)
		{
			r0e = 24;
		}
		else
		{
			r0e = 32;
		}
    if (this.k0a.y1l.i4h != r4b.f0x)
    {
  		let u4k = document.getElementById("whitePlayerNation"+this.s5i);
	  	u4k.src = "images/flags/" + r0e.toString() +"/" + r1h(this.k0a.y1l.i4h) + ".png";
		  u4k.height = r0e;
  		u4k.width = r0e;
    }
    if (this.k0a.n4i.i4h != r4b.f0x)
    {
  		let k3t = document.getElementById("blackPlayerNation"+this.s5i);
	  	k3t.src = "images/flags/" + r0e.toString() + "/" + r1h(this.k0a.n4i.i4h) + ".png";
		  k3t.height = r0e;
  		k3t.width = r0e;
    }
	}
}

}

class w5x
{

constructor(s5i)
{
	this.s5i = s5i;
	this.k0a = new c0c();
	this.t4s = new o3u(s5i);
	this.l6e = new s1v(s5i);
	this.l6e.z9c.l0q = this; 
	this.e1c = new f8z();
}

n5p()
{
	this.t4s.n5p();
}

q8s()
{
	this.t4s.q8s();
}

z2k()
{
	this.t4s.z2k();
	this.l6e.z9c.z2k();
}

p9e(g3n, z2z, s2h, a5z)
{
	this.q0j(a5z, s2h);
}

q0j(a5z, s2h)
{
	this.k0a = a5z.n4q.r0c();
	this.d2c();
	this.l6e.z9c.m1v(a5z.s3b, s2h);
}

d2c()
{
	this.l6e.g9q.d2c(this.k0a);
}

e8f(p6t)
{
	this.t4s.j7c(p6t);
  this.s5l();
}

e6r()
{
	if (this.e1c.a1y())
	{
		this.e1c.g7g();
	}
	else
	{
		if (!this.l6e.z9c.u2i())
		{
      
			this.e1c.l0q = this; 
			this.e1c.o6b();
			this.l6e.z9c.r1p();
		}
	}
}

s5l()
{
}

}

const w5o =
{
	k7e : 0,
	g7m : 1,
	s7z : 2,
	a0y : 3,
	y2l : 4,
 	a4d : 5,
	c8h : 6,
	s3b : 7,
	d6w : 8,
	event : 9,
	y1g : 10
};

const u9z =
{
	f0x : 0,
	j4h : 1,
	t9a : 2
};

let e2k = 0;
let h7k = 0;
let f5f = 0;
let c6y = 0;
let h5a = 0;
let c5f = 0;
let s4n = 0;
let l5m = 0;

let t9a = false;

function x8n(f, s)
{
	let a1i = f.n4q.y1l.n0s.g3t();
	let e6e = s.n4q.y1l.n0s.g3t();
	if (a1i < e6e)
	{
		return t9a ? -1 : 1;
	}
	if (a1i > e6e)
	{
		return t9a ? 1 : -1;
	}
	a1i = f.n4q.n4i.n0s.g3t();
	e6e = s.n4q.n4i.n0s.g3t();
	if (a1i < e6e)
	{
		return -1;
	}
	if (a1i > e6e)
	{
		return 1;
	}
	return 0;
}

function m5g(f, s)
{
	let a1i = f.n4q.n4i.n0s.g3t();
	let e6e = s.n4q.n4i.n0s.g3t();
	if (a1i < e6e)
	{
		return t9a ? -1 : 1;
	}
	if (a1i > e6e)
	{
		return t9a ? 1 : -1;
	}
	a1i = f.n4q.y1l.n0s.g3t();
	e6e = s.n4q.y1l.n0s.g3t();
	if (a1i < e6e)
	{
		return -1;
	}
	if (a1i > e6e)
	{
		return 1;
	}
	return 0;
}

function y8n(f, s)
{
	let p5m = f.n4q.y1l.y8h - s.n4q.y1l.y8h;
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	p5m = f.n4q.n4i.y8h - s.n4q.n4i.y8h;
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	return x8n(f, s);
}

function f8k(f, s)
{
	let p5m = f.n4q.n4i.y8h - s.n4q.n4i.y8h;
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	p5m = f.n4q.y1l.y8h - s.n4q.y1l.y8h;
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	return x8n(f, s);
}

function u3q(f, s)
{
	let p5m = f.n4q.y1l.i4h - s.n4q.y1l.i4h;
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	p5m = f.n4q.n4i.i4h - s.n4q.n4i.i4h;
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	return x8n(f, s);
}

function d1c(f, s)
{
	let p5m = f.n4q.n4i.i4h - s.n4q.n4i.i4h;
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	p5m = f.n4q.y1l.i4h - s.n4q.y1l.i4h;
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	return x8n(f, s);
}

function r2z(f, s)
{
	let p5m = f.n4q.c8h - s.n4q.c8h;
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	return x8n(f, s);
}

function h1a(f, s)
{
	let p5m = s.n4q.t4y.t4y() - f.n4q.t4y.t4y();
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	return x8n(f, s);
}

function a2m(f, s)
{
	let p7z = f.n4q.u1l.w4t;
	let j0o = s.n4q.u1l.w4t;
	if (p7z < j0o)
	{
		return t9a ? -1 : 1;
	}
	if (p7z > j0o)
	{
		return t9a ? 1 : -1;
	}
	let p5m = f.n4q.u1l.l6w.t4y() - s.n4q.u1l.l6w.t4y();
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	p5m = f.n4q.y1g - s.n4q.y1g;
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	p5m = f.n4q.t7m - s.n4q.t7m;
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	return x8n(f, s);
}

function n7z(f, s)
{
	let p5m = s.n4q.y1g - f.n4q.y1g;
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	p5m = s.n4q.t7m - f.n4q.t7m;
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	return x8n(f, s);
}

function e3w(f, s)
{
	let p5m = s.f3e - f.f3e;
	if (t9a)
	{
		p5m = -p5m;
	}
	if (p5m < 0) return -1;
	if (p5m > 0) return 1;
	return x8n(f, s);
}

class t7g
{

constructor(s5i)
{
	this.s5i = s5i;
	this.l4x = [];
	this.n4o = null;
	this.y3q = null;
	this.n8u = null;
	this.e0n = [];
	this.j1d = [];
	this.r4n = -1;
	this.l7l = u9z.f0x;
	this.n7v = 0;
  this.j9m = null;
}

x3e()
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
	this.n8u.innerHTML = s;
	this.e0n = this.n8u.getElementsByTagName("TH");
	let s5i = this.s5i;

 	this.e0n[w5o.k7e].onclick = this.t7y.bind(this);
	this.e0n[w5o.g7m].onclick = this.f1w.bind(this);
  this.e0n[w5o.s7z].onclick = this.r6a.bind(this);
	this.e0n[w5o.a0y].onclick = this.t7y.bind(this);
	this.e0n[w5o.y2l].onclick = this.h1w.bind(this);
  this.e0n[w5o.a4d].onclick = this.y4f.bind(this);
	this.e0n[w5o.c8h].onclick = this.v8q.bind(this);
	this.e0n[w5o.s3b].onclick = this.q1z.bind(this);
	this.e0n[w5o.d6w].onclick = this.a6u.bind(this);
	this.e0n[w5o.event].onclick = this.y9r.bind(this);
	this.e0n[w5o.y1g].onclick = this.y2o.bind(this);
}

s9p(l4x)
{
	this.l4x = l4x;
	this.t5u();
}

h7f()
{
	this.l1z("grid-player");
	this.l1z("grid-rating");
 	this.l1z("grid-flag");
	this.l1z("grid-result");
	this.l1z("grid-moves");
	this.l1z("grid-year");
	this.l1z("grid-event");
	this.l1z("grid-round");
}

h4j()
{
	this.k7n("grid-player", e2k);
	this.k7n("grid-rating", h7k);
 	this.k7n("grid-flag", l5m);
	this.k7n("grid-result", f5f);
	this.k7n("grid-moves", c6y);
	this.k7n("grid-year", h5a);
	this.k7n("grid-event", c5f);
	this.k7n("grid-round", s4n);

}

l1z(j8t)
{
	let a6g = this.n4o.getElementsByClassName(j8t);
	for (let i = 0; i < a6g.length; i++) {
		a6g[i].style.display = "none";
	}
}

l6c(j8t)
{
	let a6g = this.n4o.getElementsByClassName(j8t);
	for (let i = 0; i < a6g.length; i++) {
		a6g[i].style.display = "table-cell";
	}
}

k7n(j8t, width)
{
	let a6g = this.n4o.getElementsByClassName(j8t);
	for (let i = 0; i < a6g.length; i++) {
		a6g[i].style.width = (width) + "px";
	}
}

t5u()
{
	this.n7v = this.n4o.clientWidth;
	this.n7v -= 17;
	if (this.n7v < 100)
	{
		this.n7v = 100;
	}
	e2k = 200;
	h7k = 52;
	f5f = 34;
	c6y = 50;
	h5a = 52;
	c5f = 200;
	s4n = 50;
  l5m = 30;

 
	let o2t = document.getElementsByClassName("tdreplay")[0];
	if (o2t.clientWidth <= q7d)
	{
		let f9i = 0.7;
		e2k *= f9i;
		h7k *= f9i;
		f5f *= f9i;
		c6y *= f9i;
		h5a *= f9i;
		c5f *= f9i;
		s4n *= f9i;
	}
	this.b5i();
}

u5w()
{
	this.h7f();
	this.h4j();

  let u9y = 2.8;
  let i2a = 2.8;
  let w8k = 17;
	if (this.n7v <= 400)
	{
		this.l6c("grid-player");
		this.l6c("grid-result");
    this.l6c("grid-year");
		this.l6c("grid-event");
    let u1h = 5 * (u9y + i2a);
		let g9o = f5f + h5a;
		let f4a = Math.trunc((this.n7v - g9o - u1h - w8k) / 3);
		this.k7n("grid-player", f4a);
		this.k7n("grid-event", f4a);
	}
	else if (this.n7v <= 580)
	{
		this.l6c("grid-player");
		this.l6c("grid-rating");
		this.l6c("grid-result");
		this.l6c("grid-year");
		this.l6c("grid-event");
    let u1h = 7 * (u9y + i2a);
		let g9o = 2 * h7k + f5f + h5a;
		let f4a = Math.trunc((this.n7v - g9o - u1h - w8k) / 3);
		this.k7n("grid-player", f4a);
		this.k7n("grid-event", f4a);
	}
	else
	{
		this.l6c("grid-player");
		this.l6c("grid-rating");
    this.l6c("grid-flag");
		this.l6c("grid-result");
		this.l6c("grid-moves");
		this.l6c("grid-year");
		this.l6c("grid-event");
		this.l6c("grid-round");
    let u1h = 11 * (u9y + i2a);
		let g9o = 2 * h7k + 2 * l5m + f5f + c6y + h5a + s4n;
		let f4a = Math.trunc((this.n7v - g9o - u1h - w8k) / 3);
		this.k7n("grid-player", f4a);
		this.k7n("grid-event", f4a);
	}
}

b5i()
{
	let r0e = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.s5i + "\">"; 
	for (const a5z of this.l4x)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += a5z.n4q.y1l.n0s.z6t();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (a5z.n4q.y1l.y8h)
		{
			s += a5z.n4q.y1l.y8h;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (a5z.n4q.y1l.i4h != r4b.f0x)
		{
      let m6n = "images/flags/" + r0e.toString() + "/" + r1h(a5z.n4q.y1l.i4h) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += m6n;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += a5z.n4q.n4i.n0s.z6t();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (a5z.n4q.n4i.y8h)
		{
			s += a5z.n4q.n4i.y8h;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (a5z.n4q.n4i.i4h != r4b.f0x)
		{
      let m6n = "images/flags/" + r0e.toString() + "/" + r1h(a5z.n4q.n4i.i4h) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += m6n;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-result\">";
		s += u3c(a5z.n4q.c8h);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += a5z.f3e;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += a5z.n4q.t4y.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += a5z.n4q.u1l.w4t;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += a5z.n4q.u6d();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.y3q.innerHTML = s;

  let v0k = document.getElementById('gameList' + this.s5i);
  v0k.addEventListener('click', this.x5a.bind(this));

	this.u5w();
}

h6b(r4l)
{
	if (r4l != this.r4n)
	{
		this.r4n = r4l;
		this.l7l = u9z.j4h;
	}
	else
	{
		if (this.l7l == u9z.f0x)
		{
			this.l7l = u9z.j4h;
		}
		else if (this.l7l == u9z.j4h)
		{
			this.l7l = u9z.t9a;
		}
		else if (this.l7l == u9z.t9a)
		{
			this.l7l = u9z.j4h;
		}
	}
	t9a = (this.l7l == u9z.t9a);

	for (const s2j of this.e0n)
	{
		let s = s2j.q7o;
		let z0p = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let e7k = z0p.replace(" grid-header-sort grid-header-sort-asc", "");
		s2j.q7o = e7k;
	}
	let f5c = this.e0n[this.r4n];
	if (this.l7l == u9z.t9a)
	{
		f5c.q7o = f5c.q7o + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		f5c.q7o = f5c.q7o + " grid-header-sort grid-header-sort-asc";
	}
}

t7y(event)
{
	this.h6b(w5o.k7e);
	this.l4x.sort(x8n);
	this.b5i();
}

f1w(event)
{
	this.h6b(w5o.g7m);
	this.l4x.sort(y8n);
	this.b5i();
}

r6a(event)
{
	this.h6b(w5o.s7z);
	this.l4x.sort(u3q);
	this.b5i();
}

d9l(event)
{
	this.h6b(w5o.a0y);
	this.l4x.sort(m5g);
	this.b5i();
}

h1w(event)
{
	this.h6b(w5o.y2l);
	this.l4x.sort(f8k);
	this.b5i();
}

y4f(event)
{
	this.h6b(w5o.a4d);
	this.l4x.sort(d1c);
	this.b5i();
}

v8q(event)
{
	this.h6b(w5o.c8h);
	this.l4x.sort(r2z);
	this.b5i();
}

a6u(event)
{
	this.h6b(w5o.d6w);
	this.l4x.sort(h1a);
	this.b5i();
}

y9r(event)
{
	this.h6b(w5o.event);
	this.l4x.sort(a2m);
	this.b5i();
}

y2o(event)
{
	this.h6b(w5o.y1g);
	this.l4x.sort(n7z);
	this.b5i();
}

q1z(event)
{
	this.h6b(w5o.s3b);
	this.l4x.sort(e3w);
	this.b5i();
}

x5a(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.j9m)
  {
    this.j9m(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class o7w
{

constructor()
{
	this.n2t = new i9r();
	this.h6d = new i9r();
	this.e5v = false;
	this.d0a = 0;
	this.r1z = 0;
	this.z8o = [];
}

}

var tooltip = null;

class z5k
{

constructor(s5i)
{
	this.s5i = s5i;
	this.n9l = new e1t();
	this.l0q = null;
	this.b4d = new o7w();
	this.p5w = null;
	this.t4a = [];
	this.x9h = [];
  this.z7k = [];
  this.g6a = [];
	this.m9e = -1;
	this.t6l = new i2p();
  this.i7v = null;
	this.m0s = true;
	this.m6p = false;
	this.q4b = [];
	this.q2r = 0;
  this.y3g = true;
  this.l4l = false;
	this.r0z = false;
	this.r4h = true;
  this.m0x = false;
}

m1v(o5q, s2h)
{
	this.n9l = o5q.r0c();
  this.n9l.y0x();
	this.i7v = this.n9l.u3l(s2h);
	this.p9e();
}

t6g(w8l)
{
  this.r8n(this.z7k[w8l]);
}

p9e()
{
	this.q0r();
	this.r1p();
  this.o4h(this.n9l.l8u(this.i7v));
}

q0r()
{
	let b2k = new y4w();
  b2k.v0f(this.y3g);
	b2k.i7g(this.m0x);
  /*
	b2k.setOneLine(this.m0x);
  */
	b2k.t8z(this.r0z);
	b2k.w2k(this.r4h);
	b2k.a1v(this.n9l);

  this.p5w.innerHTML = b2k.v1l.m7i;
  this.t4a = this.p5w.getElementsByClassName("tdmove");
  this.x9h = this.p5w.getElementsByClassName("tdcomment");

	this.g9j("tdmove");
	this.g9j("tdcomment");
	this.g9j("tddia");
	this.g9j("tdmedal");
  this.g9j("tdcolors");

  this.r2d("tdmove");

	this.u3x();
	this.g3q();
}

g9j(i9x)
{
	let s5i = this.s5i;
	let j9q = this.p5w.getElementsByClassName(i9x);
	for (const c3y of j9q)
	{
    let s2h = c3y.getAttribute('movenr');
    c3y.onclick = this.c2p.bind(this, s2h);
	}
}

r2d(i9x)
{
	let s5i = this.s5i;
	let j9q = this.p5w.getElementsByClassName(i9x);
	for (const c3y of j9q)
	{
    let s2h = c3y.getAttribute('movenr');
    c3y.onmouseover = this.x3n.bind(this, s2h);
    c3y.onmouseleave = this.f5r.bind(this, s2h);
	}
}

z2k()
{
	this.u3x();
}

u3x()
{
	let l9q = this.p5w.getElementsByClassName("tddia");
	for (const b5e of l9q)
	{
		let r2x = new p8q();
		r2x.j3l = b5e.getElementsByTagName("canvas")[0];
		let k8w = this.t6l.e9p();
		r2x.j3l.width = k8w;
		r2x.j3l.height = k8w;
		r2x.r9p(this.t6l);
		let p6q = this.n9l.u3l(b5e.getAttribute('movenr'));
    r2x.m7y(this.n9l.n2t(p6q));
    if (p6q.z1e)
    {
  		r2x.r8y(p6q.z1e.u5a());
	  	r2x.v7d(p6q.z1e.z2x());
    }
    else
    {
   		r2x.r8y(this.n9l.y8x());
	  	r2x.v7d(this.n9l.w2j());
    }
		r2x.o7k();
	}
}

g3q()
{
	let r7s = this.p5w.getElementsByClassName("tdmedal");
	for (const h0a of r7s)
	{
		let j3l = h0a.getElementsByTagName("canvas")[0];
		j3l.width = 40;
		j3l.height = 16;
		let u3r = j3l.getContext('2d');
		let rect = new o1y();
		rect.w3m(40);
		rect.f8r(16);
		let p6q = this.n9l.u3l(h0a.getAttribute('movenr'));
    if (p6q.z1e)
    {
  		g3q(u3r, rect, p6q.z1e.r7v());
    }
    else
    {
  		g3q(u3r, rect, this.n9l.i0e());
    }
	}
}

r1p()
{
	let p6t = new l3f();
	p6t.b3q = this.n9l.b3q();
  p6t.y9b = this.n9l.n2t(this.i7v);
  if (this.j5j())
  {
    p6t.u5a = this.n9l.y8x();
	  p6t.z2x = this.n9l.w2j();
  }
  else
  {
  	p6t.u5a = this.i7v.z1e.u5a();
	  p6t.z2x = this.i7v.z1e.z2x();
  }
  
	if (this.u2i())
	{
		p6t.x7d = new b1y();
	}
	else
	{
    let m9m = this.i7v.r0c();
		this.n9l.m4i(m9m);
		p6t.x7d = m9m.z1e.i1j().r0c();
	}
  
 	if (!this.j5j())
	{
		p6t.g8c = this.i7v.z1e.i1j();
	}
	p6t.o8o = this.o8o();
	p6t.s3l = this.s3l();
	p6t.g4r = this.g4r();
	p6t.m8s = 0; 
  p6t.k6y = this.n9l.k6y(this.i7v);
	if (this.l0q)
	{
		this.l0q.e8f(p6t);
	}
}

d0l(v4g)
{
	this.i7v = this.n9l.u3l(v4g);
	this.r1p();
}

w0m(y4l)
{
	switch (y4l)
	{
		case b0r:
		case z0o:
		case p1f:
			this.t7n();
			break;
		case b7h:
		case n9w:
		case h2h:
			this.j7z();
			break;
		case t7c:
		case y1w:
		case o0c:
			this.h8y();
			break;
		case a6s:
		case k7t:
		case y0s:
			this.m3c();
			break;
		case u1t:
			break;
		case d8g:
			break;
	}
}

i1d()
{
  if (this.i7v.o3l)
  {
    this.o4h(this.i7v.o3l.a5d);
  }
  else
  {
    this.o4h(0);
  }
}

p2e()
{
	this.i1d();
	this.r1p();
}

s3l()
{
	return !this.j5j();
}

j5j()
{
	return this.n9l.j5j(this.i7v);
}

u2i()
{
	return this.n9l.u2i(this.i7v);
}

o8o()
{
	return this.n9l.o8o(this.i7v);
}

x7d(m2w)
{
	if (this.u2i())
	{
		return null;
	}
	else
	{
    let m9m = this.i7v.r0c();
		this.n9l.h0w(m9m, m2w);
		return m9m.z1e;
	}
}

j7z()
{
	if (this.s3l())
	{
		this.n9l.k4f(this.i7v);
		this.p2e();
	}
}

g4r()
{
	return !this.u2i();
}

t7n()
{
	if (this.g4r())
	{
		this.x9m(0);
	}
}

x9m(index)
{
	let l5k = this.n9l.n3a(this.i7v);
	if (index >= 0 && index < l5k)
	{
		this.n9l.h0w(this.i7v, index);
		this.p2e();
	}
}

m3c()
{
	if (this.g4r())
	{
		this.n9l.e4m(this.i7v);
		this.p2e();
	}
}

h8y()
{
	if (this.s3l())
	{
		this.i7v = this.n9l.s0m();
		this.p2e();
	}
}

d3w()
{
	if (this.m0s)
	{
		this.j8l();
	}
	else
	{
		this.q9h();
	}
}

b7z()
{
	if (this.m6p)
	{
		this.m6p = false;
		this.l0q.t4s.r2x.z5p();
		this.r1p();
	}
	else
	{
		this.r1p();
	}
}


q9h()
{
	if (this.u2i())
	{
		this.r1p();
		return;
	}
  if (chess)
  {
  	this.x9m(0);
    return;
  }

  
 	let z1e = this.x7d(0);
  if (!z1e.r1z())
 	{
  	this.x9m(0);
	  return;
 	}

  
	let n5t = false;
	if (!this.b4d.e5v)
	{
		n5t = true;
	}
	else
	{
		n5t = false;
		if (this.b4d.d0a < this.b4d.r1z)
		{
			if (this.b4d.h6d.n1x(this.b4d.n2t))
			{
				n5t = true;
			}
		}
	}
	if (n5t)
	{
		this.b4d.n2t = this.n9l.n2t(this.i7v);
		this.b4d.h6d = this.n9l.n2t(this.i7v);
		this.b4d.e5v = true;
		this.b4d.d0a = 0;
		this.b4d.z8o.length = 0;
		this.b4d.z8o.push(z1e.i1o()); 
		this.b4d.r1z = z1e.r1z();
		if (this.b4d.r1z > 1)
		{
			let i1q = generateBetweens(this.b4d.h6d, z1e.i1j());
			for (let i = 0; i < this.b4d.r1z - 1; i++)
			{
				this.b4d.z8o.push(i1q[i]);
			}
		}
		this.b4d.z8o.push(z1e.j1b());
	}
	if (this.b4d.d0a < this.b4d.r1z)
	{
		let x0m = z1e.x0m();
		let o1d = this.b4d.z8o[this.b4d.d0a];
		let j1b = this.b4d.z8o[this.b4d.d0a + 1];
		this.b4d.h6d.z6q(o1d, d5p.g3d);
		this.b4d.h6d.z6q(j1b, x0m);
		this.b4d.n2t = this.b4d.h6d.r0c();
		this.b4d.d0a++;
		let p6t = new l3f();
		p6t.y9b = this.b4d.h6d.r0c();
		p6t.s3l = this.s3l();
		p6t.g4r = this.g4r();
		if (this.l0q)
		{
			this.l0q.e8f(p6t);
		}
	}
	else
	{
		this.b4d.e5v = false;
		this.x9m(0);
	}
}



j8l()
{
	if (this.m6p)
	{
		let v5f = this.l0q.t4s.r2x.q7l();
		if (v5f)
		{
			if (this.q2r < this.q4b.length - 1)
			{
				this.l0q.t4s.r2x.p6r(this.q4b[this.q2r],
					this.q4b[this.q2r+1], true);
				this.q2r++;
			}
			else
			{
				this.m6p = false;
				this.x9m(0);
			}
		}
		return;
	}

	if (this.u2i())
	{
		this.r1p();
		return;
	}

	this.q4b.length = 0;
	let z1e = this.x7d(0);
	let r1z = z1e.r1z();
	if (r1z == 0)
	{
		this.q4b.push(z1e.i1o()); 
		this.q4b.push(z1e.p2v());
	}
	else
	{
		this.q4b.push(z1e.i1o());
		if (r1z > 1)
		{
      let n2t = this.n9l.n2t(this.i7v);
      let i1q = generateBetweens(n2t, z1e.i1j());
			for (let i = 0; i < r1z - 1; i++)
			{
				this.q4b.push(i1q[i]);
			}
		}
		this.q4b.push(z1e.p2v());
	}

	this.l0q.t4s.r2x.p6r(this.q4b[0],
		this.q4b[1], r1z > 0);
	this.q2r = 1;
	this.m6p = true;
}

o0k(s8o)
{
	for (const m of this.t4a)
	{
		if (m.getAttribute('movenr') == s8o)
		{
			return m;
		}
	}
	return null;
}

h2b(s8o)
{
	let s6f = [];
	for (const q6t of this.x9h)
	{
		if (q6t.getAttribute('movenr') == s8o)
		{
			s6f.push(q6t);
		}
	}
	return s6f;
}

r8n(t5i)
{
	let d1t = t5i.offsetTop;
	let t6b = t5i.scrollHeight;

	let e7m = this.p5w.offsetTop;
	let f2j = this.p5w.scrollTop;
	let r2b = this.p5w.clientHeight;
	let b9q = this.p5w.scrollHeight;
	let w6w = d1t - e7m;
	if (w6w >= f2j && w6w + t6b <= f2j + r2b - 1)
	{
		
	}
	else
	{
		
		let top = w6w - (r2b / 2);
		if (top < 0) top = 0;
		this.p5w.scrollTop = top;
	}
}

e9e(e2a, w0j)
{
	let j0u = e2a;
	while (j0u.l3l)
	{
		j0u = j0u.l3l;
	}
 	while (j0u)
	{
    if (this.n9l.u3z(j0u.a5d) == false)
    {
 	  	let t5i = this.o0k(j0u.a5d);
  	  if (t5i)
 		  {
  		  t5i.classList.add(w0j);
 	  	}
    }
    j0u = j0u.a2j;
  }
}

o4h(s2h)
{
  
 	for (const z1e of this.t4a)
	{
 		z1e.classList.remove('tdcurline');
    z1e.classList.remove('tdcurnode1');
	}
 	for (const q6t of this.x9h)
	{
 		q6t.classList.remove('tdcurline');
	}

  
	if (this.m9e >= 0)
	{
		let t5i = this.o0k(this.m9e);
		if (t5i)
		{
			t5i.classList.remove('tdcurmove');
		}
	}

  
  let r3h = true;
  let a4r = this.n9l.o0f(this.i7v);
 	for (const e2a of a4r)
	{
    if (e2a.l3l && r3h)
		{
		  this.e9e(e2a, 'tdcurnode1');
      r3h = false;
    }
    else
    {
      if (this.n9l.u3z(e2a.a5d) == false)
      {
   	  	let o7t = this.o0k(e2a.a5d);
	  	  if (o7t)
  		  {
	  		  o7t.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let t5i = this.o0k(s2h);
	if (t5i)
	{
    t5i.classList.remove('tdcurline');
		t5i.classList.add('tdcurmove');
		this.r8n(t5i);
	}
	this.m9e = s2h;
}

u3y()
{
	let z1e = this.o0k(this.m9e);
	if (!z1e) return;
	let z9e = z1e.offsetTop;
	let z6o = null;
	let t5d = -1;
	for (const m of this.t4a)
	{
		if (m.offsetTop < z9e)
		{
			if (m.offsetTop > t5d)
			{
				z6o = m;
				t5d = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (z6o)
	{
		this.p0b(z6o.getAttribute('movenr'));
	}
	else
	{
		if (this.t4a.length)
		{
			this.p0b(this.t4a[0].getAttribute('movenr'));
		}
	}
}

d8h()
{
	let z1e = this.o0k(this.m9e);
	if (!z1e)
	{
		this.t7n();
		return;
	}
	let z9e = z1e.offsetTop;
	for (const m of this.t4a)
	{
		if (m.offsetTop > z9e)
		{
			this.p0b(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.t4a.length)
	{
		this.p0b(this.t4a[this.t4a.length - 1].getAttribute('movenr'));
	}
}

p0b(v4g)
{
  
  
  
  
  if (this.i7v.o3l)
  {
    if (this.i7v.o3l.a5d == v4g)
    {
      return;
    }
  }
  else
  {
    if (v4g == 0)
    {
      return;
    }
  }
	
  this.d0l(v4g);
  this.o4h(v4g);
	
}

l8u()
{
	return this.n9l.l8u(this.i7v);
}

r9p(t6l)
{
  this.t6l = t6l.r0c();
	this.t6l.m8a = 0;
	this.t6l.v6s = 0;
	this.t6l.p0u = 32;
  this.t6l.n7r = 2;
 	this.t6l.o1u = false;
}

b3q()
{
	return this.n9l.b3q();
}

h2u()
{
	return this.n9l.h2u();
}

u6p()
{
	return this.n9l.u6p(this.i7v);
}

j0w()
{
	return this.n9l.j0w();
}

c2p(s2h, event)
{
  this.p0b(s2h);
}

x3n(s2h, event)
{
  if (!this.l4l) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const c3y = event.currentTarget; 
  const rect = c3y.getBoundingClientRect();
  console.log(`o1y.i4f: ${rect.left}`);
  console.log(`o1y.a2y: ${rect.top}`);
  let e4a = rect.left;
  let c9e = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let v9w = this.t6l.e9p();

  if (e4a + v9w > viewportWidth)
  {
    e4a = viewportWidth - v9w - 5;
  }
  if (e4a < 5)
  {
    e4a = 5;
  }
  if (c9e + v9w > viewportHeight)
  {
    c9e = viewportHeight - v9w - 5;
  }
  if (c9e < 5)
  {
    c9e = 5;
  }

  let p6q = this.n9l.u3l(s2h);
  let n2t = this.n9l.n2t(p6q);
  tooltip.innerHTML = this.w0n(n2t);

  tooltip.style.left = `${e4a}px`;
  tooltip.style.top = `${c9e}px`;
  tooltip.classList.add('visible');
}

f5r(s2h, event)
{
  if (!this.l4l) return;
  tooltip.classList.remove('visible');
}

w0n(n2t)
{
  let r2x = new p8q();
  const tempCanvas = document.createElement('canvas');
	r2x.j3l = tempCanvas;
	let k8w = this.t6l.e9p();
	r2x.j3l.width = k8w;
	r2x.j3l.height = k8w;
	r2x.r9p(this.t6l);
  r2x.m7y(n2t);
  r2x.o7k();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="${imageDataURL}" alt="Chess Position" width="${boardSize}" height="${boardSize}">`;
}

}

class b1x
{

constructor()
{
	this.fontSize = 15;
  this.w0d = true;
 	this.l7c = true;
}

r0c()
{
  return Object.assign(new b1x(), this);
}

}
class s1v
{

constructor(s5i)
{
  this.g9q = new b0i(s5i);
  this.z9c = new z5k(s5i);
}

}

class f8z
{

constructor()
{
	this.n6i = false;
	this.l0q = null;
	this.h7s = null;
	this.p2w = 6;
	this.a2s = null;
	this.x5s = null;
	this.w2q = null;
	this.g6f = null;
	this.j4w = null;
	this.e7p = false;
}

o6b()
{
	this.n6i = false;
	this.v7t();
	this.a2s.classList.replace('autoPlay', 'autoStop');
	this.g6f.style.display = 'none';
	this.j4w.style.display = 'none';
	this.x5s.style.display = 'inline-block';
	this.w2q.style.display = 'inline-block';
	this.b6d();
	this.l0q.t4s.b7q = false;
}

g7g()
{
	if (this.h7s)
	{
		clearInterval(this.h7s);
		this.h7s = null;
		this.a2s.classList.replace('autoStop', 'autoPlay');
		this.g6f.style.display = 'inline-block';
		this.j4w.style.display = 'inline-block';
		this.x5s.style.display = 'none';
		this.w2q.style.display = 'none';
		this.l0q.t4s.b7q = true; 
		this.l0q.l6e.z9c.b7z();
	}
}

v7t()
{
	let s5i = this.l0q.s5i;
	this.h7s = setInterval(function(){ h9s(s5i); },
		this.l0q.l6e.z9c.m0s ? this.p2w * 2 : this.p2w * 100);
}

a1y()
{
	return this.h7s != null;
}

s3l()
{
	return !this.l0q.l6e.z9c.j5j();
}

g4r()
{
	return !this.l0q.l6e.z9c.u2i();
}

z4c()
{
	if (this.e7p)
	{
		return;
	}
	else
	{
		this.e7p = true;
	}
	if (!this.g4r())
	{
		this.g7g();
	}
	else
	{
		this.l0q.l6e.z9c.d3w();
	}
	this.e7p = false;
}

s6o()
{
	if (this.h7s)
	{
		if (this.p2w < 50)
		{
			this.p2w++;
			clearInterval(this.h7s);
			this.v7t();
			this.b6d();
		}
	}
}

r5r()
{
	if (this.h7s)
	{
		if (this.p2w > 1)
		{
			this.p2w--;
			clearInterval(this.h7s);
			this.v7t();
			this.b6d();
		}
	}
}

b6d()
{
	h4p(this.x5s, this.p2w < 50);
	h4p(this.w2q, this.p2w > 1);
}

}

let v5p = null;
let y7z = 0;
let a4b = null;

class t1a
{

constructor()
{
	this.index = 0;
	this.j6v = '';
	this.o2t = null;
	this.r9m = false;
	this.l0q = null;
	this.f8t = null;
  this.l4x = [];
	this.y7q = 0;
  this.j8v = 0;

	this.i5v = null;
	this.y9n = null;
	this.left = null;
	this.z5z = null;
	this.e8e = null;
	this.h0v = null;
	this.g6g = null;
	this.s6w = null;
	this.f1o = null;
	this.h6c = null;
	this.j7j = null;
 	this.h5n = null;
 	this.b0z = null;
	this.r1i = null;
	this.g6f = null;
	this.x5s = null;
	this.a2s = null;
	this.j4w = null;
	this.w2q = null;
	this.b3n = null;
 	this.c6g = null;
  this.n9m = null;
	this.o7x = null;
  this.c7o = null;
	this.z6w = null;
	this.o1h = null;
	this.n4o = null;
	this.y9j = null;
	this.j2c = null;
	this.p8l = null;
  this.z0j = null;
  this.g6d = null;
	this.b0s = null;
	this.n1g = null;
	this.h8c = null;
	this.l8r = null;
	this.i2m = null;

	this.k2n = null;
	this.j5o = null;
	this.c2y = null;
	this.e6f = null;

  
  this.d0e = null;
  this.j5p = null;
  this.h0o = null;
  this.x8t = null;
  this.j5q = null;
  this.c6e = null;
}

c0a(index, o2t, j6v)
{
	this.index = index;
	this.o2t = o2t;
	this.j6v = j6v;
	o2t.innerHTML = '';
	o2t.id = "replay";

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

  o2t.innerHTML = s;

	this.i5v = document.getElementById("rootParent"+index);
	this.y9n = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.z5z = document.getElementById("leftContainer"+index);
	this.e8e = document.getElementById("leftNest"+index);
	this.h0v = document.getElementById("leftNorth"+index);
	this.g6g = document.getElementById("boardHolder"+index);
	this.s6w = document.getElementById("boardPanel"+index);
	this.f1o = document.getElementById("boardCanvas"+index);
	this.h6c = document.getElementById("belowBoard"+index);
	this.j7j = document.getElementById("replayPanel"+index);
 	this.h5n = document.getElementById("goToPrevious"+index);
 	this.b0z = document.getElementById("goToNext"+index);
	this.r1i = document.getElementById("goToBegin"+index);
	this.g6f = document.getElementById("playBackward"+index);
	this.x5s = document.getElementById("playSlower"+index);
	this.a2s = document.getElementById("autoPlay"+index);
	this.j4w = document.getElementById("playForward"+index);
	this.w2q = document.getElementById("playFaster"+index);
	this.b3n = document.getElementById("goToEnd"+index);
  this.c6g = document.getElementById("flipBoard"+index);
  this.n9m = document.getElementById("download"+index);
	this.o7x = document.getElementById("showGameList"+index);
  this.c7o = document.getElementById("settings"+index);
	this.z6w = document.getElementById("leftSouth"+index);
	this.o1h = document.getElementById("leftSouthNest"+index);
	this.n4o = document.getElementById("listParent"+index);
	this.y9j = document.getElementById("listHeader"+index);
	this.j2c = document.getElementById("listHeaderTable"+index);
	this.p8l = document.getElementById("listBody"+index);
  this.z0j = document.getElementById("list-button-container"+index);
  this.g6d = document.getElementById("hideGameList"+index);
	this.b0s = document.getElementById("gameList"+index);
	this.n1g = document.getElementById("right"+index);
	this.h8c = document.getElementById("rightNest"+index);
	this.l8r = document.getElementById("rightNorth"+index);
	this.i2m = document.getElementById("rightSouth"+index);
	this.k2n = document.getElementById("nota-container"+index);
  this.k2n.style.fontSize = a0o.fontSize + 'px';
	this.j5o = document.getElementById("nota-header-container"+index);
	this.c2y = document.getElementById("headerPanel"+index);
	this.e6f = document.getElementById("movesPanel"+index);
}

x3e()
{
	this.o2t.style.display = 'block';
	this.x5s.style.display = 'none';
	this.w2q.style.display = 'none';
	this.n4o.style.display = 'none';

	this.r9m = false;
	if (this.o2t.clientWidth <= q7d)
	{
		this.b6b();
		this.r9m = true;
	}
	else
	{
		this.t8b();
		this.i5d();
	}
  this.s1u();
	let s5i = this.index;

	this.r1i.onclick = this.d1q.bind(this);
	this.g6f.onclick = this.j7z.bind(this);
	this.x5s.onclick = this.s6o.bind(this);
	this.a2s.onclick = this.h6a.bind(this);
	this.w2q.onclick = this.r5r.bind(this);
	this.j4w.onclick = this.t7n.bind(this);
	this.b3n.onclick = this.b1r.bind(this);
  this.h5n.onclick = this.e0y.bind(this);
  this.b0z.onclick = this.a7x.bind(this);
  this.c6g.onclick = this.n5p.bind(this);
 	this.n9m.onclick = this.w9a.bind(this);
	this.o7x.onclick = this.c9d.bind(this);
 	this.g6d.onclick = this.d4l.bind(this);

  this.c7o.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

	this.l0q = new w5x(this.index);
	this.l0q.t4s.r2x.u9s(this.f1o);
	this.l0q.t4s.s6w = this.s6w;
  this.l0q.t4s.r9p(b1h);
	this.l0q.l6e.g9q.u3n = this.c2y;
	this.l0q.l6e.z9c.p5w = this.e6f;
  this.l0q.l6e.z9c.r9p(b1h);
	this.l0q.e1c.a2s = this.a2s;
	this.l0q.e1c.x5s = this.x5s;
	this.l0q.e1c.w2q = this.w2q;
	this.l0q.e1c.g6f = this.g6f;
	this.l0q.e1c.j4w = this.j4w;

	this.f8t = new t7g(this.index);
	this.f8t.n4o = this.n4o;
	this.f8t.y3q = this.b0s;
	this.f8t.n8u = this.j2c;
	this.f8t.x3e();
	this.f8t.s9p(this.l4x);
  this.f8t.j9m = (b0s, index) => {
    this.v7g(b0s, index);
  };
	if (this.f8t.l4x.length)
	{
		this.p9e(0, 0);
	}
	else
	{
		let a5z = new k3k();
		this.l0q.p9e(null, 1, 0, a5z);
	}
}

r0g(j6v)
{
	this.j6v = j6v;
 	let l4f = this.j6v.split('\n');
	let r5s = 0;
	for (const x9r of l4f)
	{
		if (x9r.startsWith("[Event \""))
		{
			let e2y = r5s;
      let d3g = l4f.length;
   		let w2w = l4f.slice(e2y, d3g);
  		let y9a = new g7e(w2w);
	  	this.f8t.l4x[this.y7q] = y9a.b2s();
      break;
    }
    r5s++;
	}
  this.p9e(0, 0);
}

s1u()
{
	let l4f = this.j6v.split('\n');
	let j2x = [];
	let r5s = 0;
	for (const x9r of l4f)
	{
		if (x9r.startsWith("[Event \""))
		{
			j2x.push(r5s);
		}
		r5s++;
	}
	let i = 0;
	this.l4x = [];
	for (const o8w of j2x)
	{
		let e2y = o8w;
		let d3g = 0;
		if (i < j2x.length - 1)
		{
			d3g = j2x[i + 1];
		}
		else
		{
			d3g = l4f.length;
		}
		let w2w = l4f.slice(e2y, d3g);
		let y9a = new g7e(w2w);
		let a5z = y9a.b2s();
		this.l4x.push(a5z);
		i++;
	}
}

e9d()
{
	if (this.r9m || this.y9n.clientHeight <= q7d)
	{
		this.o2t.style.v5s = "0px";
		this.o2t.style.l4o = "0px";
		this.o2t.style.width = "100%";
		this.o2t.style.height = "88vh";
	}
	else
	{
		this.o2t.style.v5s = "1px solid gray";
		this.o2t.style.l4o = "1px solid gray";
		this.o2t.style.height = "88vh";
	}
}

z3m()
{
	this.e9d();

	this.left.style.width = "100%";

	let d7k = this.h0v.getBoundingClientRect();
	this.z6w.style.top = (d7k.height) + "px";
	this.i5d();

	this.g1n();
	this.t8b();
	this.l6n();
	this.n0y();
  this.b3b()
}

x7e()
{
	this.e9d();

	let e3j = this.y9n.getBoundingClientRect();
	this.left.style.width = (e3j.width * 0.50) + "px";
	let x4w = this.left.getBoundingClientRect();

	let d7k = this.h0v.getBoundingClientRect();
	this.z6w.style.top = (d7k.height) + "px";
	this.i5d();

	this.n1g.style.left = (x4w.width) + "px";
	this.n1g.style.width = (e3j.width - x4w.width) + "px";

	this.g1n();
	this.t8b();
	this.l6n();
	this.n0y();
  this.b3b()
}

t8b()
{
}

w2f()
{
  this.h0v.style.height = '100%';
  this.l8r.appendChild(this.k2n);
  this.k2n.style.height = '100%';
  this.n1g.style.display = 'block';
}

b6b()
{
  this.h0v.style.height = '70%';
  this.o1h.appendChild(this.k2n);
  this.k2n.style.height = '100%';
  this.n1g.style.display = 'none';
}

c9d(event)
{
	this.n4o.style.display = 'block';
  let r0i = this.n4o.clientHeight - this.y9j.clientHeight - this.z0j.clientHeight;
  this.p8l.style.height = r0i + "px";
	this.l6n();
}

d4l(event)
{
 	this.n4o.style.display = 'none';
}

n0y()
{
	this.l0q.l6e.g9q.z7z();
}

b3b()
{
}

l6n()
{
  this.f8t.t5u();
}

g1n()
{
	let d7k = this.h0v.getBoundingClientRect();
	let z3e = this.h6c.getBoundingClientRect();
	this.g6g.style.height = (d7k.height - z3e.height - 1) + "px";
	this.l0q.t4s.t5u();
}

i5d()
{
	let o5i = this.e8e.getBoundingClientRect();
	let d7k = this.h0v.getBoundingClientRect();
	let c7p = o5i.height - d7k.height;
	if (c7p < 0) c7p = 0;
	this.z6w.style.height = c7p + "px";
}

h8q()
{
  w6n('goToPrevious'+this.index, this.y7q > 0);
  w6n('goToNext'+this.index, this.y7q < this.f8t.l4x.length - 1);
}

i2y(e)
{
	this.l0q.t4s.r2x.mouseDown(e);
}

f4m(e)
{
	this.l0q.t4s.r2x.mouseMove(e);
}

n1a(e)
{
	this.l0q.t4s.r2x.mouseUp(e);
}

b6c(e)
{
	this.l0q.t4s.r2x.touchStart(e);
}

o8g(e)
{
	this.l0q.t4s.r2x.touchMove(e);
}

y7t(e)
{
	this.l0q.t4s.r2x.touchEnd(e);
}

s6o(event)
{
	this.l0q.e1c.s6o();
}

r5r(event)
{
	this.l0q.e1c.r5r();
}

j7z(event)
{
	this.l0q.e1c.g7g();
	this.l0q.l6e.z9c.j7z();
}

t7n(event)
{
	this.l0q.e1c.g7g();
	this.l0q.l6e.z9c.t7n();
}

d1q(event)
{
	this.l0q.e1c.g7g();
	this.l0q.l6e.z9c.h8y();
}

b1r(event)
{
	this.l0q.e1c.g7g();
	this.l0q.l6e.z9c.m3c();
}

h6a(event)
{
	this.l0q.e6r();
}

x8z()
{
 	if (this.f8t.l4x.length)
  {
    this.p9e(0, 0);
  }
}

e0y(event)
{
 	if (this.y7q > 0)
  {
    this.p9e(this.y7q - 1, 0);
  }
}

a7x(event)
{
  if (this.y7q < this.f8t.l4x.length - 1)
  {
    this.p9e(this.y7q + 1, 0);
  }
}

e3z()
{
	if (this.f8t.l4x.length)
  {
    this.y7q = this.f8t.l4x.length - 1;
    this.p9e(this.f8t.l4x.length - 1, 0);
	}
}

p9e(y7q, s2h)
{
  if (y7q >= 0 && y7q <= this.f8t.l4x.length - 1)
  {
    this.y7q = y7q;
  	this.l0q.p9e(null, 1, s2h, this.f8t.l4x[this.y7q]);
  }
  this.h8q();
}

n5p(event)
{
	this.l0q.n5p();
}

q8s()
{
	this.l0q.q8s();
}

m2h()
{
	if (this.o2t.clientWidth <= q7d)
	{
		if (this.r9m)
		{
			this.z3m();
		}
		else
		{
			this.b6b();
			this.r9m = true;
			this.z3m();
		}
	}
	else
	{
		if (!this.r9m)
		{
			this.x7e();
		}
		else
		{
			this.w2f();
			this.r9m = false;
			this.x7e();
		}
	}
}

v7g(b0s, index)
{
	this.p9e(index, 0);
  this.d4l();
}

w9a(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.j6v.length - 1)
  {
    if (this.j6v[i] == '[')
    {
        break;
    }
    i++;
  }
  let j6v = this.j6v.substring(i);
  a.href = window.URL.createObjectURL(new Blob([j6v], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

x9p()
{
  this.l0q.t4s.r9p(b1h);
  this.l0q.t4s.t5u();
  this.l0q.l6e.z9c.r9p(b1h);
  this.l0q.l6e.z9c.q0r();
  let k2n = document.getElementById("nota-container"+this.index);
  k2n.style.fontSize = a0o.fontSize + 'px';
}

async onSettingsClick()
{
  const dialog = new c5i();
  const { c8h } = await dialog.show();

  if (c8h === dialog.l2e)
  {
    this.x9p();
  }
}

}

class c5i
{

constructor()
{
  this.l2e = 1;
  this.z2t = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.k9d();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.j5p = this.dialog.querySelector(".piece-select");
  this.h0o = this.dialog.querySelector(".coordinates-checkbox");
  this.x8t = this.dialog.querySelector(".font-select");
  this.j5q = this.dialog.querySelector(".ok-button");
  this.c6e = this.dialog.querySelector(".cancel-button");

  this.j5q.onclick = this.n4v.bind(this);
 	this.c6e.onclick = this.g1u.bind(this);
}

k9d()
{
  const o8y = x4i();
  const s = `
    <dialog id="settingsDialog" class="settingsDialog">
      <z3c>Settings</z3c>

      <div class="settings-row">
        <span class="label-text">Pieces:</span>
        <select class="pieceSelect piece-select">
          ${o8y.map((d8n, i) => '<option value="' + i + '">' + d8n + '</option>').join('')}
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

n4v(event)
{
  b1h.y6o = this.j5p.value;
  localStorage.setItem(m6y, b1h.y6o);
  c6z(b1h.y6o);
  b1h.o1u = this.h0o.checked;
  localStorage.setItem(t5q, b1h.o1u.toString());
  a0o.fontSize = this.x8t.value;
  localStorage.setItem(e4i, a0o.fontSize);
  this.dialog.close('ok');
}

g1u(event)
{
  this.dialog.close('cancel');
}

async show()
{
  p2c = true;

  this.j5p.value = b1h.y6o;
  this.h0o.checked = b1h.o1u;
  this.x8t.value = a0o.fontSize;

  const c8h = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.l2e : this.z2t);
    };
    this.dialog.showModal();
  });

  p2c = false;
  return { c8h };
}

}

const z7r = 38;
const u4t = 40;
const b7h = 37;
const n9w = 37;
const h2h = 52;
const b0r = 39;
const z0o = 39;
const p1f = 54;
const t7c = 36;
const y1w = 36;
const o0c = 55;
const a6s = 35;
const k7t = 35;
const y0s = 49;
const o3v = 187;
const c2a = 107;
const n5y = 61;
const k8s = 42;
const m4g = 170;
const d8g = 8;
const u1t = 13;
let p0x = false;
let p2c = false;

const q7d = 767;
let t8q = [];
let k2c = -1;
let o8v = new v2p();

let b1h = new i2p();
let a0o = new b1x();

window.onload = function()
{
  b3x();
  k6h();
  c0f();
};

document.onkeydown = p0w;

function p0w(e)
{
  if (e.y4l === "Escape")
  {
    return;
  }

  if (p2c)
  {
    
    e.preventDefault();
    return;
  }

	let o3s = e || window.event;
	let y4l = o3s.keyCode;

	if (p0x) return;
	p0x = true;

	if (k2c == -1) return;

	if (e.ctrlKey)
	{
		if (y4l == 66) 
		{
				t8q[k2c].n5p();
				e.preventDefault();
				
				
				
		}
		p0x = false;
		return;
	}
	if (y4l)
	{
		
		s2g(y4l);
		e.preventDefault(); 
		
	}
	p0x = false;
}

function h9s(s5i)
{
	t8q[s5i].l0q.e1c.z4c();
}

function s2g(y4l)
{
	if (k2c == -1) return;

	if (y4l == z7r)
	{
		t8q[k2c].l0q.l6e.z9c.u3y();
	}
	else if (y4l == u4t)
	{
		t8q[k2c].l0q.l6e.z9c.d8h();
	}
	else if (y4l == b7h || y4l == n9w || y4l == h2h ||
	y4l == b0r || y4l == z0o || y4l == p1f ||
	y4l == t7c || y4l == y1w ||
	y4l == a6s || y4l == k7t)
	{
		t8q[k2c].l0q.l6e.z9c.w0m(y4l);
	}
	else if (y4l == o3v || y4l == c2a || y4l == n5y)
	{
		t8q[k2c].doFlipBoard();
	}
}

function o7u(w9r, n5o)
{
	let d2m = w9r.length;
	let i1b = 0;

	function check(n)
	{
		if (n == d2m)
		{
			n5o();
		}
	}

	for (let i = 0; i < w9r.length; ++i)
	{
    let y9l = w9r[i];
		let img = document.createElement("img");
		img.id = w9r[i].replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
		o8v.add(img);
		img.addEventListener("load", function()
		{
			i1b++;
			check(i1b);
		});
		img.src = y9l;
	}
}

function b3x()
{
 	o7u(x0w(), s1d);
  
  
}

function m2h()
{
	for (const n5z of t8q)
	{
		n5z.m2h();
	}
}

function s1d()
{
	let s1m = document.getElementsByClassName("tdreplay");
	for (const o2t of s1m)
	{
		let n5z = new t1a();
		n5z.c0a(t8q.length, o2t, o2t.innerHTML);
		n5z.x3e();
		t8q.push(n5z);
	}
	if (t8q.length)
	{
		k2c = 0;
	}
	window.addEventListener("resize", m2h);
	m2h();
}

function w6n(g3t, m7g)
{
	let button = document.getElementById(g3t);
	if (m7g)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function h4p(button, m7g)
{
	if (m7g)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const t5q = 'Coordinates';
const m6y = 'Pieces';
const e4i = 'MovesFontSize';
const u2d = 'SearchTime';
const o6y = 'MultiPV';
const x6s = 'Threads';
const z8i = 'Memory';

function c0f()
{
  const coordinatesValue = localStorage.getItem(t5q);
  if (coordinatesValue === null)
  {
    b1h.o1u = true;
  }
  else
  {
    b1h.o1u = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(m6y);
  if (piecesValue === null)
  {
    b1h.y6o = 0;
  }
  else
  {
    b1h.y6o = piecesValue;
  }
  c6z(b1h.y6o);

  const movesFontSizeValue = localStorage.getItem(e4i);
  if (movesFontSizeValue === null)
  {
    a0o.fontSize = 15;
  }
  else
  {
    a0o.fontSize = movesFontSizeValue;
  }
}
const x1q =
[
	[ b3l.f0x, 			  	""      ],
	[ b3l.a5z,  		 		"game"  ],
	[ b3l.g7x,    		 	"match" ],
	[ b3l.u1l,  	"tourn" ],
	[ b3l.w1l,   			"swiss" ],
	[ b3l.a5r,    	"k.o."  ],
	[ b3l.x3j,	"simul" ],
	[ b3l.s4i,	"schev" ]
];

const g0q =
[
	[ n7y.j8g, ""        ],
	[ n7y.c7l,  "(rapid)" ],
	[ n7y.q9b,  "(blitz)" ],
	[ n7y.t0x,   "(corr)"  ]
];

const l2l =
[
	[ t4p.f0x,     		 ""     ],
	[ t4p.j8r,       		 "$145" ],
	[ t4p.w3d, 		 "$142" ],
	[ t4p.m5n, 		 "$143" ],
	[ t4p.b8r, "$144" ],
	[ t4p.v7j,  "$140" ],
	[ t4p.w5j, "$141" ]
];

const s6d =
[
	[ r2j.f0x,     		""   ],
	[ r2j.r3e,       	"$1" ],
	[ r2j.q7q, 			  	"$2" ],
	[ r2j.u2o,	"$5" ],
	[ r2j.x4e, 		  "$6" ],
	[ r2j.m8q,  	"$3" ],
	[ r2j.r0f, 		  "$4" ],
	[ r2j.d3t, 		"$22" ],
	[ r2j.l8j, 		"$8" ]
];

const w4a =
[
	[ m0e.f0x,     						""     ],
	[ m0e.i0f,      "$18"  ],
	[ m0e.y6i, 					"$16"  ],
	[ m0e.n9z,	"$14"  ],
	[ m0e.z2n, 						"$11"  ],
	[ m0e.a5w,  						"$13"  ],
	[ m0e.d7m,  "$15"  ],
	[ m0e.b2c, 					"$17"  ],
	[ m0e.b5s, 			"$19"  ],
	[ m0e.l8d,					"$44"  ],
	[ m0e.p3d, 					"$132" ],
	[ m0e.q8y,  					"$36"  ],
	[ m0e.k0o, 							"$40"  ],
	[ m0e.c4h, 			  "$138" ],
	[ m0e.h2s,	"$32"  ],
	[ m0e.v4x, 							"$146" ]
];

const g3o =
[
	[ k9n.f0x,     		""     ],
	[ k9n.b6o,     "$51"  ],
	[ k9n.x1k, 			"$52"  ],
	[ k9n.c9k,	    		"$53"  ]
];

const k5l =
[
	[ h5y.z4p, 			 	""       ],
	[ h5y.x1k,   		"middle" ],
	[ h5y.c3b,   	   	 	"low"    ]
];


function z9q(e6a)
{
	return g0q[e6a][1];
}

function c0j(c7s)
{
	for (const e6a of g0q)
	{
		if (e6a[1] == c7s)
		{
			return e6a[0];
		}
	}
	return n7y.j8g;
}

function p5k(type)
{
	return x1q[type][1];
}

function n0m(c7s)
{
	for (const z9l of x1q)
	{
		if (z9l[1] == c7s)
		{
			return z9l[0];
		}
	}
	return b3l.f0x;
}

function u1c(o1b)
{
	return l2l[o1b][1];
}

function q2o(c7s)
{
	for (const o1b of l2l)
	{
		if (o1b[1] == c7s)
		{
			return o1b[0];
		}
	}
	return t4p.f0x;
}

function p9t(style)
{
	return s6d[style][1];
}

function c9v(c7s)
{
	for (const style of s6d)
	{
		if (style[1] == c7s)
		{
			return style[0];
		}
	}
	return r2j.f0x;
}

function h6l(value)
{
	return w4a[value][1];
}

function u6f(c7s)
{
	for (const value of w4a)
	{
		if (value[1] == c7s)
		{
			return value[0];
		}
	}
	return m0e.f0x;
}

function e8o(u6x)
{
	return g3o[u6x][1];
}

function s5p(c7s)
{
	for (const l5u of g3o)
	{
		if (l5u[1] == c7s)
		{
			return l5u[0];
		}
	}
	return k9n.f0x;
}

function d4e(c7s)
{
	return c7s.length == 0 ||
		c7s == "?" ||
		c7s == "-" ||
		c7s == "*" ||
		c7s == "????.??.??";
}

function x1v(c7s)
{
	if (d4e(c7s))
	{
		return "";
	}
	else
	{
		return c7s.trim();
	}
}

function b5z(c7s, g5b)
{
	if (d4e(c7s))
	{
		return g5b;
	}
	else
	{
		return a9w(c7s, g5b);
	}
}

function u3p(value)
{
	return value ? value.toString() : "";
}

function b1t(u9p)
{
	return k5l[u9p][1];
}

function o2x(c7s)
{
	for (const u9p of k5l)
	{
		if (u9p[1] == c7s)
		{
			return u9p[0];
		}
	}
	return h5y.z4p;
}

function n6s(f6s)
{
	if (!f6s)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(f6s / 60);
		let w5y = f6s % 60;
		return div.toString() + "." + w5y.toString().padStart(2, '0');
	}
}

function z7t(c8h)
{
	switch (c8h)
	{
		case z8y.d5i:
			return "1-0";
		case z8y.o7k:
			return "1/2-1/2";
		case z8y.c6v:
			return "0-1";
		default:
			return "*";
	}
}

function j8i(y8h)
{
	if (y8h > 0 && y8h <= 9999)
	{
		return y8h.toString().padStart(4, '0');
	}
	else
	{
		return "-";
	}
}

function o3f(t4y)
{
	if (t4y.g3d())
	{
		return "????.??.??";
	}
	let c7s = '';
	if (t4y.d6w)
	{
		c7s = t4y.d6w.toString().padStart(4, '0');
	}
	else
	{
		c7s = "????";
	}
	c7s += ".";
	if (t4y.h7c)
	{
		let i8z = t4y.h7c.toString().padStart(2, '0');
		c7s += i8z;
	}
	else
	{
		c7s += "??";
	}
	c7s += ".";
	if (t4y.h2i)
	{
		let r2u = t4y.h2i.toString().padStart(2, '0');;
		c7s += r2u;
	}
	else
	{
		c7s += "??";
	}
	return c7s;
}

function u8a(i7a)
{
	if (d4e(i7a))
	{
		return new u4h();
	}
	else
	{
		let t4y = new u4h();
		t4y.n5n("yyyy.mm.dd", i7a);
		return t4y;
	}
}

function v2a(i7a, u1l)
{
	u1l.z3a = (i7a.indexOf("team") != -1);
	u1l.type = b3l.f0x;
	for (const z9l of x1q)
	{
		if (i7a.indexOf(z9l[1]) != -1)
		{
			u1l.type = z9l[0];
			break;
		}
	}
	u1l.e6a = n7y.j8g;
	for (const e6a of g0q)
	{
		if (i7a.indexOf(e6a[1]) != -1)
		{
			u1l.e6a = e6a[0];
			break;
		}
	}
}

function v0b(i7a, k0a)
{
	k0a.y1g = 0;
	k0a.t7m = 0;
	let p6q = i7a.indexOf(".");
	if (p6q != -1)
	{
		let i7t = i7a.substr(0, p6q);
		k0a.y1g = a9w(i7t, 0);
		let m6h = i7a.substr(p6q + 1, i7a.length);
		p6q = m6h.indexOf(".");
		if (p6q != -1)
		{
			i7t = m6h.substr(0, p6q);
			k0a.t7m = a9w(i7t, 0);
		}
		else
		{
			k0a.t7m = a9w(m6h, 0);
		}
	}
	else
	{
		k0a.y1g = a9w(i7a, 0);
	}
}

function i9n(k0a)
{
	let i7a = '';
	if (k0a.t7m)
	{
		i7a = k0a.y1g.toString() + "." + k0a.t7m.toString();
	}
	else if (k0a.y1g)
	{
		i7a = k0a.y1g.toString();
	}
	return i7a;
}

function n1n(i7a)
{
	if (i7a == "2-0" || i7a == "20" || i7a == "1-0" || i7a == "10")
	{
		return z8y.d5i;
	}
	else if (i7a == "1-1" || i7a == "11" || i7a == "1/2-1/2" ||
		i7a == "1/21/2" || i7a == "0.5-0.5")
	{
		return z8y.o7k;
	}
	else if (i7a == "0-2" || i7a == "02" || i7a == "0-1" || i7a == "01")
	{
		return z8y.c6v;
	}
	else
	{
		return z8y.f0x;
	}
}

function w0h(i7a)
{
	return a9w(i7a, 0);
}

function n4d(i7a)
{
	return p3n(i7a);
}

function o6w(i7a)
{
	return j2h(i7a);
}

function i8v(value)
{
	return value ? "1" : "";
}

function q2t(i7a)
{
	return i7a == "1";
}

function h9e(n6k)
{
	let k0a = new c0c();

	
	k0a.y1l.n0s.l1e(x1v(n6k.k7e));
	if (!d4e(n6k.e8w))
	{
		k0a.y1l.c0u.g3t = x1v(n6k.e8w);
		k0a.y1l.c0u.a5d = b5z(n6k.f9u, 0);
		if (!d4e(n6k.x3q))
		{
			let t4y = u8a(n6k.x3q);
			k0a.y1l.c0u.d6w = t4y.d6w;
		}
		k0a.y1l.c0u.q4m = q2t(n6k.i8k);
		k0a.y1l.c0u.i4h = z2m(x1v(n6k.a7h));
	}
	k0a.y1l.y8h = w0h(x1v(n6k.g7m));
	k0a.y1l.e3u = o6w(x1v(n6k.o8t));
	k0a.y1l.w4t = x1v(n6k.l8c);
	k0a.y1l.i4h = y9i(x1v(n6k.g6o));

	
	k0a.n4i.n0s.l1e(x1v(n6k.a0y));
	if (!d4e(n6k.h7h))
	{
		k0a.n4i.c0u.g3t = x1v(n6k.h7h);
		k0a.n4i.c0u.a5d = b5z(n6k.i4b, 0);
		if (!d4e(n6k.y7j))
		{
			let t4y = u8a(n6k.y7j);
			k0a.n4i.c0u.d6w = t4y.d6w;
		}
		k0a.n4i.c0u.q4m = q2t(n6k.j2j);
		k0a.n4i.c0u.i4h = z2m(x1v(n6k.m5l));
	}
	k0a.n4i.y8h = w0h(x1v(n6k.y2l));
	k0a.n4i.e3u = o6w(x1v(n6k.j9k));
	k0a.n4i.w4t = x1v(n6k.r0j);
	k0a.n4i.i4h = y9i(x1v(n6k.v9h));

	
	k0a.u1l.w4t = x1v(n6k.j4r);
	k0a.u1l.d0c = x1v(n6k.j5x);
	k0a.u1l.l6w = u8a(n6k.f4e);
	k0a.u1l.d2h = u8a(n6k.s8m);

	v2a(x1v(n6k.z9l), k0a.u1l);
	
	
	
	let v7l = c0j(n6k.v7l);
	if (v7l != n7y.j8g)
	{
		k0a.u1l.e6a = v7l;
	}
	k0a.u1l.i4h = z2m(x1v(n6k.i1x));
	k0a.u1l.l0u = b5z(n6k.a0n, 0);
	let z9l = n0m(n6k.z9l);
	if (z9l != b3l.f0x)
	{
		k0a.u1l.type= z9l;
	}
	k0a.u1l.k2v = b5z(n6k.t5t, 0);
	k0a.u1l.z3a = q2t(n6k.z3g);
	k0a.u1l.s5x = q2t(n6k.u3o);
	k0a.u1l.s0s = q2t(n6k.v3m);
	k0a.u1l.c3e = q2t(n6k.b4o);

	
	k0a.h9i.g3t = x1v(n6k.h9i);

	
	k0a.u6s.w4t = x1v(n6k.q7v);
	k0a.u6s.z0d = x1v(n6k.d5h);
	k0a.u6s.b9u = u8a(n6k.y8j);
	k0a.u6s.l7g = b5z(n6k.g8l, 0);
	k0a.u6s.w6j = u8a(n6k.g0a);
	k0a.u6s.u9p = o2x(n6k.e1l);

	
	k0a.w4t.w4t = x1v(n6k.w4t);

	
	k0a.t4y = u8a(n6k.t4y);
	k0a.c8h = n1n(x1v(n6k.c8h));
	k0a.v3z = n4d(x1v(n6k.v3z));
	v0b(x1v(n6k.y1g), k0a);

	
	let j9q = b5z(n6k.j9q, 0);
	k0a.j9q.p1x(j9q);

  
  k0a.id.w1q = n6k.w1q;

	return k0a;
}

function u3t(k0a)
{
	let n6k = new u0g();

	
	n6k.k7e = k0a.y1l.n0s.g3t();
	if (k0a.y1l.c0u.g3t.length)
	{
		n6k.e8w = k0a.y1l.c0u.g3t;
		if (k0a.y1l.c0u.a5d)
		{
			n6k.f9u = k0a.y1l.c0u.a5d;
		}
		if (k0a.y1l.c0u.d6w)
		{
			let o2m = new u4h();
			o2m.d6w = k0a.y1l.c0u.d6w;
			n6k.x3q = o3f(o2m);
		}
		if (k0a.y1l.c0u.q4m)
		{
			n6k.i8k = i8v(k0a.y1l.c0u.q4m);
		}
		if (k0a.y1l.c0u.i4h != r4b.f0x)
		{
			n6k.a7h = u5b(k0a.y1l.c0u.i4h);
		}
	}
	n6k.g7m = j8i(k0a.y1l.y8h);
	n6k.o8t = n6s(k0a.y1l.e3u);
	n6k.l8c = k0a.y1l.w4t;

	
	n6k.a0y = k0a.n4i.n0s.g3t();
	if (k0a.n4i.c0u.g3t.length)
	{
		n6k.h7h = k0a.n4i.c0u.g3t;
		if (k0a.n4i.c0u.a5d)
		{
			n6k.i4b = k0a.n4i.c0u.a5d;
		}
		if (k0a.n4i.c0u.d6w)
		{
			let k5x = new u4h();
			k5x.d6w = k0a.n4i.c0u.d6w;
			n6k.y7j = o3f(k5x);
		}
		if (k0a.n4i.c0u.q4m)
		{
			n6k.j2j = i8v(k0a.n4i.c0u.q4m);
		}
		if (k0a.n4i.c0u.i4h != r4b.f0x)
		{
			n6k.m5l = u5b(k0a.n4i.c0u.i4h);
		}
	}
	n6k.y2l = j8i(k0a.n4i.y8h);
	n6k.j9k = n6s(k0a.n4i.e3u);
	n6k.r0j = k0a.n4i.w4t;

	
	n6k.j4r = k0a.u1l.w4t;
	n6k.j5x = k0a.u1l.d0c;
	n6k.f4e = o3f(k0a.u1l.l6w);
	n6k.s8m = o3f(k0a.u1l.d2h);
	n6k.v7l = z9q(k0a.u1l.e6a);
	n6k.a0n = u3p(k0a.u1l.l0u);
	n6k.i1x = u5b(k0a.u1l.i4h);
	n6k.z9l = p5k(k0a.u1l.type);
	n6k.t5t = u3p(k0a.u1l.k2v);
	n6k.z3g = i8v(k0a.u1l.z3a);
	n6k.u3o = i8v(k0a.u1l.s5x);
	n6k.v3m = i8v(k0a.u1l.s0s);
	n6k.b4o = i8v(k0a.u1l.c3e);

	
	n6k.h9i = k0a.h9i.g3t;

	
	n6k.q7v = k0a.u6s.w4t;
	n6k.d5h = k0a.u6s.z0d;
	n6k.y8j = o3f(k0a.u6s.b9u);
	n6k.g8l = u3p(k0a.u6s.l7g);
	n6k.g0a = o3f(k0a.u6s.w6j);
	n6k.e1l = b1t(k0a.u6s.u9p);

	
	n6k.w4t = k0a.w4t.w4t;

	
	n6k.t4y = o3f(k0a.t4y);
	n6k.c8h = z7t(k0a.c8h);
	n6k.v3z = i1u(k0a.v3z);
	n6k.y1g = i9n(k0a);

	
	n6k.j9q = u3p(k0a.j9q.w8t());

	return n6k;
}

const r5f  					= "White";
const n3h					= "WhiteTeam";
const u0r 				= "WhiteTeamNumber";
const b3i 					= "WhiteTeamYear";
const q6u 				= "WhiteTeamSeason";
const s1t 			= "WhiteTeamCountry";
const z1h 						= "WhiteRating";
const v9v 							= "WhiteTime";
const g9u 							= "WhiteElo";
const b0b  						= "WhiteTitle";
const n7q						= "WhiteCountry";

const y4u						= "Black";
const j1j					= "BlackTeam";
const b8y 				= "BlackTeamNumber";
const m3p 					= "BlackTeamYear";
const i5s 				= "BlackTeamSeason";
const u1m 			= "BlackTeamCountry";
const y6q 						= "BlackRating";
const v2i 							= "BlackTime";
const o2e 							= "BlackElo";
const h3o  						= "BlackTitle";
const q8r						= "BlackCountry";

const u4p 				= "Event";
const x6n				= "Site";
const x9l 			 	= "EventDate";
const s6m 		 	= "EventEndDate";
const n7i 			 	= "EventSpeed";
const s7k 	 	= "EventCategory";
const o8k 		 	= "EventCountry";
const h8j 			 	= "EventType";
const e4o 		 	= "EventRounds";
const y9t 			 	= "EventTeams";
const m5f		 	= "EventComplete";
const m6w 	= "EventThreePoints";
const g2g	= "EventBoardPoints";

const s6j 							= "Annotator";

const k6a 				 		= "SourceTitle";
const i1k 				 		= "Publication";
const l1b		 		= "SourcePublisher";
const r7e		 		= "PublicationDate";
const r3i 				 		= "SourceDate";
const t2y 		= "SourceVersionNumber";
const t1i 	 		= "SourceVersionDate";
const y0f 			 		= "SourceQuality";

const e8u 					 		    = "Title";

const v5g 							 		= "Date";
const n5m 								= "Result";
const y6u 										= "ECO";
const g7a 									= "Round";

const k9h			 							= "Tags";

const j0c 									= "Setup";
const i4c 										= "FEN";
const o0d 							= "PlyCount";

const d5g      							= "GUID";

const i8p = "(";
const f1r   = ")";
const r9x    = "{";

class w2y
{

constructor()
{
  this.e9k = new u6i();
  this.s4l = new s2q();
  this.r7v = new i5q();
  this.i6y = false;
  this.d0q = false;
  this.e8i = false;
  this.a7q = '';
}

}

class g7e
{

constructor(l4f)
{
	this.i8a = new u0g();
	this.f1y = l4f;
	this.g6l = 0;
	this.w9n = '';
	this.k1c = 0;
	this.x3g = 0;
	this.h4k = '';
	this.u5e = 0;
	this.b7s = false;
	this.e5h = '';
	this.k6n = '';
	this.n9l = null;
	this.m7j = new i9r();
	this.f7g = '';
	this.c2r = false;
 	this.m5t = false;
	this.u0d = false;
}

b2s()
{
  this.u5e = 0;
	let a5z = new k3k();
	this.n9l = a5z.s3b;
	try
	{
		this.y1k();
	}
	catch (err)
	{
	}
	a5z.n4q = h9e(this.i8a);
  a5z.f3e = this.u5e;
	return a5z;
}

y1k()
{
	this.b7s = false;
	this.v9o();
	if (this.b7s)
	{
		this.b3q = i8h(this.k6n);
		this.n9l.m7y(this.b3q, 1);
	}
 	this.l9g();
}

w4r()
{
	if (this.f1y.length == 0)
	{
		return false;
	}
	if (this.g6l >= this.f1y.length)
	{
		return false;
	}
	else
	{
		this.w9n = this.f1y[this.g6l];
		this.k1c = this.w9n.length;
		this.x3g = 0;
		this.g6l++;
		return true;
	}
}

v9o()
{
	this.u0d = false;
	this.m5t = false;
	while (true)
	{
		if (!this.w4r())
		{
			return;
		}
		this.e2j();
		if (!this.u0c())
		{
			return;
		}
		this.i8u();
	}
}


q2h(z8j)
{
	let i7a = this.h4k.substr(1, this.h4k.length - 1);
	return i7a.toUpperCase() === z8j.toUpperCase();
}

l9g()
{
 	if (this.h4k.length == 0) return;
	this.c2r = false;

	while (this.h4k[0] == '{')
	{
		let m7i = this.b4u();
    let f2x = new w2y();
		this.e0p(m7i, f2x);
    if (!f2x.e9k.g3d())
		{
			this.n9l.m7m(f2x.e9k);
		}
 		if (!f2x.s4l.g3d())
		{
			this.n9l.e6z(f2x.s4l);
		}
		if (!f2x.r7v.g3d())
		{
			this.n9l.j6s(f2x.r7v);
		}
 		m7i = f2x.a7q.trim();
    if (m7i.length)
    {
      
      
      if (m7i.startsWith("[%a") && m7i.length > 7)
      {
        m7i = m7i.substr(7, m7i.length).trim();
      }
      let g4t = this.n9l.g4t();
      if (g4t.length)
      {
        g4t += ' ';
      }
      g4t += m7i;
      this.n9l.t9q(g4t);
		}
		this.e2j();
		if (this.h4k.length == 0)
		{
			return;
		}
	}
	this.j0l(this.n9l.s0m(), this.n9l.b3q());
}

j0l(a3w, y2g)
{
  let p6q = a3w.r0c();
  let n2t = y2g.r0c();

	let h6f = null;
 	let s5z = new l2d();

	do
	{
		if (this.h4k == i8p)
		{
			if (!h6f)
			{
				throw "error";
			}
			if (!this.e2j())
			{
				throw "error";
			}

 			n2t.k4f(p6q.z1e.i1j());
			n2t.m5x(s5z);
			this.n9l.k4f(p6q); 
      this.j0l(p6q, n2t);
			this.n9l.m4i(p6q); 
			n2t.m4i(p6q.z1e.i1j());

			while (this.e2j())
			{
				if (this.h4k != i8p)
				{
					break;
				}
				if (!this.e2j())
				{
					throw "error";
				}
        n2t.k4f(p6q.z1e.i1j());
				n2t.m5x(s5z);
				this.n9l.k4f(p6q); 
				this.j0l(p6q, n2t);
				this.n9l.m4i(p6q);  
				n2t.m4i(p6q.z1e.i1j());
			}
		}

		if (this.h4k == f1r)
		{
			break;
		}

		if (
			this.h4k == "1-0" ||
			this.h4k == "2-0" ||
			this.h4k == "0-1" ||
			this.h4k == "0-2" ||
			this.h4k == "1/2-1/2" ||
			this.h4k == "1-1" ||
			this.h4k == "*" ||
			this.h4k == "**" ||
			this.h4k == "-*" ||
			this.h4k == "1-0*" ||
			this.h4k == "2-0*" ||
			this.h4k == "0-1*" ||
			this.h4k == "0-2*" ||
			this.h4k == "1/2-1/2*" ||
			this.h4k == "1-1*" ||
			this.h4k == "2-00*" ||
			this.h4k == "00-2*")
			break;

		if (this.h4k[0] == '$')
		{
			if (!h6f)
			{
				throw "error";
			}
			let o1b = q2o(this.h4k);
			if (o1b != t4p.f0x)
			{
				h6f.f2f(o1b);
				continue;
			}
			let style = c9v(this.h4k);
			if (style != r2j.f0x)
			{
				h6f.c4p(style);
				continue;
			}
			let value = u6f(this.h4k);
			if (value != m0e.f0x)
			{
				h6f.a0e(value);
				continue;
			}
			let u6x = s5p(this.h4k);
			if (u6x != k9n.f0x)
			{
				h6f.b6k(u6x);
				continue;
			}
			continue;
		}
		if (this.h4k[0] == '{')
		{
			let m7i = this.b4u();
      let f2x = new w2y();
  		this.e0p(m7i, f2x);
      if (!f2x.e9k.g3d())
      {
		  	if (h6f)
			  {
				  h6f.r8y(f2x.e9k);
				}
			}
   		if (!f2x.s4l.g3d())
      {
				if (h6f)
				{
					h6f.v7d(f2x.s4l);
				}
			}
   		if (!f2x.r7v.g3d())
      {
				if (h6f)
				{
					h6f.v2r(f2x.r7v);
				}
			}
      if (f2x.d0q)
      {
				if (h6f)
				{
					h6f.p7u();
				}
			}
      if (f2x.e8i)
      {
				if (h6f)
				{
					h6f.j3x();
				}
			}
   		m7i = f2x.a7q.trim();
      if (!m7i.length)
      {
        continue;
      }
			if (h6f)
			{
        let f2r = h6f.f2r();
        if (f2r.length)
        {
          f2r += ' ';
        }
        f2r += m7i;
				h6f.l6q(f2r);
			}
			else
			{
        if (this.f7g.length)
        {
   				this.f7g += ' ';
        }
				this.f7g += m7i;
				this.c2r = true;
			}
			continue;
		}
		if (!this.v4p())
		{
			continue;
		}
		let y5q = false;
		if (this.h4k[this.h4k.length] == '*')
		{
			this.h4k = this.h4k.substr(0, this.h4k.length - 1);
			y5q = true;
		}
 		let r7t = this.k3w(this.h4k);
    let i1j = c4m(n2t, this.h4k);
 		s5z = n2t.s5z();
		n2t.m4i(i1j);
		let z1e = h6w(i1j);
    z1e.c4p(r7t);
    this.n9l.z7v(p6q, z1e);
		h6f = p6q.z1e;
		if (this.c2r)
		{
			h6f.p8c(this.f7g);
			this.c2r = false;
      this.f7g = '';
		}
		if (y5q)
		{
			break;
		}
	} while (this.e2j());
}

k3w(i7a)
{
	if (i7a.endsWith("??"))
	{
		i7a = i7a.subString(0, i7a.length-2);
		return r2j.r0f;
	}
	else if (i7a.endsWith("!!"))
	{
		i7a = i7a.subString(0, i7a.length-2);
		return r2j.m8q;
	}
	else if (i7a.endsWith("?!"))
	{
		i7a = i7a.subString(0, i7a.length-2);
		return r2j.x4e;
	}
	else if (i7a.endsWith("!?"))
	{
		i7a = i7a.subString(0, i7a.length-2);
		return r2j.u2o;
	}
	else if (i7a.endsWith("?"))
	{
		i7a = i7a.subString(0, i7a.length-1);
		return r2j.q7q;
	}
	else if (i7a.endsWith("!"))
	{
		i7a = i7a.subString(0, i7a.length-1);
		return r2j.r3e;
	}
	else
	{
		return r2j.f0x;
	}
}

v4p()
{
	let r2g = this.h4k.length;
	let p6q = -1;
	for (let i = 0; i < r2g; i++)
	{
		if (this.h4k[i] == '.')
		{
			p6q = i;
		}
	}
	if (p6q != -1)
	{
		this.h4k = this.h4k.substr(p6q + 1 , r2g);
	}
	return this.h4k.length != 0;
}

e2j()
{
	this.h4k = "";
	let k9c = '';
	let index = 0;
	let r2g = 0;
	while (true)
	{
		let p7i = 0;
		if (this.x3g < this.k1c)
		{
			p7i = this.w9n[this.x3g];
		}
		else
		{
			p7i = 0;
		}
		if (!p7i)
		{
			if (r2g)
			{
				break;
			}
			if (!this.w4r())
			{
				return false;
			}
			continue;
		}
		if (p7i == ';')
		{
			if (!this.w4r())
			{
				return false;
			}
			continue;
		}
		if (p7i == '(')
		{
			if (r2g)
			{
				break;
			}
			else
			{
				this.x3g++;
				this.h4k = i8p;
				return true;
			}
		}
		if (p7i == ')')
		{
			if (r2g)
			{
				break;
			}
			else
			{
				this.x3g++;
				this.h4k = f1r;
				return true;
			}
		}
		if (p7i == '{')
		{
			if (r2g)
			{
				break;
			}
			else
			{
				this.x3g++;
				this.h4k = r9x;
				return true;
			}
		}
		if (p7i == ' ' || p7i == '\r' || p7i == '\n')
		{
			if (r2g)
			{
				this.x3g++;
				break;
			}
			else
			{
				this.x3g++;
				continue;
			}
		}
		k9c += p7i;
		index++;
		r2g++;
		this.x3g++;
	}
	if (index)
	{
		this.h4k += k9c;
	}
	return this.h4k.length != 0;
}

b4u()
{
	let i7a = '';
	let k9c = '';
	let index = 0;
	let q8a = 0;
	while (true)
	{
		let p7i = 0;
		if (this.x3g < this.k1c)
		{
			p7i = this.w9n[this.x3g];
		}
		else
		{
			p7i = 0;
		}
		if (!p7i)
		{
			if (!this.w4r())
			{
				break;
			}
			if (index > 0)
			{
				k9c += ' '; 
				index++;
			}
			continue;
		}
		if (p7i == '{')
		{
			q8a++;
		}
		if (p7i == '}')
		{
			if (q8a)
			{
				q8a--;
			}
			else
			{
				this.x3g++;
				break;
			}
		}
		k9c += p7i;
		index++;
		this.x3g++;
	}
	if (index)
	{
		i7a += k9c;
	}
	return i7a.trim();
}

p8t()
{
	this.e5h = "";

	let h2n = 0;
	let r2g = this.w9n.length;
	for (let i = r2g - 1; i >= 0; i--)
	{
		if (this.w9n[i] == ']')
		{
			h2n = i;
			break;
		}
	}
	let index = 0;
	let w4n = false;
	let k9c = '';
	while (true)
	{
		let p7i = 0;
		if (this.x3g < this.k1c)
		{
			p7i = this.w9n[this.x3g];
		}
		else
		{
			p7i = 0;
		}
		if (!p7i)
		{
			if (!this.w4r())
			{
				break;
			}
			continue;
		}
		if (p7i == '\"')
		{
			w4n = true;
			this.x3g++;
			continue;
		}
		if (p7i == ']')
		{
			if (this.x3g == h2n)
			{
				this.x3g++;
				break;
			}
		}
		if (w4n)
		{
			k9c += p7i;
			index++;
		}
		this.x3g++;
	}
	if (index)
	{
		this.e5h += k9c;
	}
}

u0c()
{
	if (this.h4k.length == 0)
	{
		return false;
	}
	if (this.h4k[0] != '[')
	{
		return false;
	}
	
	let index = this.x3g;
	let e8d = false;
	while (index < this.k1c)
	{
		let p7i = this.w9n[index++];
		if (p7i == '\"' && this.w9n[index] == ']')
		{
			index++;
			e8d = true;
			continue;
		}
		if (p7i == '\r' || p7i == '\n')
		{
			break;
		}
		if (e8d)
		{
			e8d = false;
			break;
		}
	}
	return e8d;
}

i8u()
{
	
	if (this.q2h(r5f))
	{
		this.p8t();
		this.i8a.k7e = this.e5h;
		return;
	}
	if (this.q2h(n3h))
	{
		this.p8t();
		this.i8a.e8w = this.e5h;
		return;
	}
	if (this.q2h(u0r))
	{
		this.p8t();
		this.i8a.f9u = this.e5h;
		return;
	}
	if (this.q2h(b3i))
	{
		this.p8t();
		this.i8a.x3q = this.e5h;
		return;
	}
	if (this.q2h(q6u))
	{
		this.p8t();
		this.i8a.i8k = this.e5h;
		return;
	}
	if (this.q2h(s1t))
	{
		this.p8t();
		this.i8a.a7h = this.e5h;
		return;
	}
	if (this.q2h(g9u) || this.q2h(z1h))
	{
		this.p8t();
		this.i8a.g7m = this.e5h;
		return;
	}
	if (this.q2h(v9v))
	{
		this.p8t();
		this.i8a.o8t = this.e5h;
		return;
	}
	if (this.q2h(b0b))
	{
		this.p8t();
		this.i8a.l8c = this.e5h;
		return;
	}
	if (this.q2h(n7q))
	{
		this.p8t();
		this.i8a.g6o = this.e5h;
		return;
	}

	
	if (this.q2h(y4u))
	{
		this.p8t();
		this.i8a.a0y = this.e5h;
		return;
	}
	if (this.q2h(j1j))
	{
		this.p8t();
		this.i8a.h7h = this.e5h;
		return;
	}
	if (this.q2h(b8y))
	{
		this.p8t();
		this.i8a.i4b = this.e5h;
		return;
	}
	if (this.q2h(m3p))
	{
		this.p8t();
		this.i8a.y7j = this.e5h;
		return;
	}
	if (this.q2h(i5s))
	{
		this.p8t();
		this.i8a.j2j = this.e5h;
		return;
	}
	if (this.q2h(u1m))
	{
		this.p8t();
		this.i8a.m5l = this.e5h;
		return;
	}
	if (this.q2h(o2e) || this.q2h(y6q))
	{
		this.p8t();
		this.i8a.y2l = this.e5h;
		return;
	}
	if (this.q2h(v2i))
	{
		this.p8t();
		this.i8a.j9k = this.e5h;
		return;
	}
	if (this.q2h(h3o))
	{
		this.p8t();
		this.i8a.r0j = this.e5h;
		return;
	}
	if (this.q2h(q8r))
	{
		this.p8t();
		this.i8a.v9h = this.e5h;
		return;
	}

	
	if (this.q2h(u4p))
	{
		this.p8t();
		this.i8a.j4r = this.e5h;
		return;
	}
	if (this.q2h(x6n))
	{
		this.p8t();
		this.i8a.j5x = this.e5h;
		return;
	}
	if (this.q2h(x9l))
	{
		this.p8t();
		this.i8a.f4e = this.e5h;
		return;
	}
	if (this.q2h(s6m))
	{
		this.p8t();
		this.i8a.s8m = this.e5h;
		return;
	}
	if (this.q2h(n7i))
	{
		this.p8t();
		this.i8a.v7l = this.e5h;
		return;
	}
	if (this.q2h(s7k))
	{
		this.p8t();
		this.i8a.a0n = this.e5h;
		return;
	}
	if (this.q2h(o8k))
	{
		this.p8t();
		this.i8a.i1x = this.e5h;
		return;
	}
	if (this.q2h(h8j))
	{
		this.p8t();
		this.i8a.z9l = this.e5h;
		return;
	}
	if (this.q2h(e4o))
	{
		this.p8t();
		this.i8a.t5t = this.e5h;
		return;
	}
	if (this.q2h(y9t))
	{
		this.p8t();
		this.i8a.z3g = this.e5h;
		return;
	}
	if (this.q2h(m5f))
	{
		this.p8t();
		this.i8a.u3o = this.e5h;
		return;
	}
	if (this.q2h(m6w))
	{
		this.p8t();
		this.i8a.v3m = this.e5h;
		return;
	}
	if (this.q2h(g2g))
	{
		this.p8t();
		this.i8a.b4o = this.e5h;
		return;
	}

	
	if (this.q2h(s6j))
	{
		this.p8t();
		this.i8a.h9i = this.e5h;
		return;
	}

	
	if (this.q2h(k6a))
	{
		this.p8t();
		this.i8a.q7v = this.e5h;
		return;
	}
	if (this.q2h(i1k))
	{
		this.p8t();
		this.i8a.q7v = this.e5h;
		return;
	}
	if (this.q2h(l1b))
	{
		this.p8t();
		this.i8a.d5h = this.e5h;
		return;
	}
	if (this.q2h(r3i))
	{
		this.p8t();
		this.i8a.y8j = this.e5h;
		return;
	}
	if (this.q2h(r7e))
	{
		this.p8t();
		this.i8a.y8j = this.e5h;
		return;
	}
	if (this.q2h(t2y))
	{
		this.p8t();
		this.i8a.g8l = this.e5h;
		return;
	}
	if (this.q2h(t1i))
	{
		this.p8t();
		this.i8a.g0a = this.e5h;
		return;
	}
	if (this.q2h(y0f))
	{
		this.p8t();
		this.i8a.e1l = this.e5h;
		return;
	}

	
	if (this.q2h(e8u))
	{
		this.p8t();
		this.i8a.w4t = this.e5h;
		return;
	}

	
	if (this.q2h(v5g))
	{
		this.p8t();
		this.i8a.t4y = this.e5h;
		return;
	}
	if (this.q2h(n5m))
	{
		this.p8t();
		this.i8a.c8h = this.e5h;
		return;
	}
	if (this.q2h(y6u))
	{
		this.p8t();
		this.i8a.v3z = this.e5h;
		return;
	}
	if (this.q2h(g7a))
	{
		this.p8t();
		this.i8a.y1g = this.e5h;
		return;
	}

	
	if (this.q2h(k9h))
	{
		this.p8t();
		this.i8a.j9q = this.e5h;
		return;
	}

	
	if (this.q2h(j0c))
	{
		this.p8t();
		return;
	}
	if (this.q2h(i4c))
	{
		this.p8t();
		if (this.e5h.length == 0 || this.e5h == "?")
		{
			return;
		}
		this.b7s = true;
		this.k6n = this.e5h;
		return;
	}
	if (this.q2h(o0d))
	{
		this.p8t();
		this.u5e = a9w(this.e5h, 0);
		return;
	}
  
 	if (this.q2h(d5g))
	{
		this.p8t();
		this.i8a.w1q = this.e5h;
		return;
	}

}

r1u(m7i)
{
	let u5a = new u6i();
	let i7a = m7i.substr(6, m7i.length - 6);
	let f4f = i7a.split(",");
	for (const s of f4f)
	{
		if (s.length < 5)
		{
			continue;
		}
		let i1o = t2h(s.substr(1, 2));
		let p2v = t2h(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let f6u = m5s(i1o, p2v, n6q.k0o);
			u5a.add(f6u);
		}
		else if (s[0] == 'G')
		{
			let f6u = m5s(i1o, p2v, n6q.a9a);
			u5a.add(f6u);
		}
		else if (s[0] == 'Y')
		{
			let f6u = m5s(i1o, p2v, n6q.b1m);
			u5a.add(f6u);
		}
	}
	return u5a;
}

v3q(m7i)
{
	let z2x = new s2q();
	let i7a = m7i.substr(6, m7i.length - 6);
	let f4f = i7a.split(",");
	for (const s of f4f)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let t0h = t2h(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let z0y = u0n(t0h, o3t.b8j);
			z2x.add(z0y);
		}
		else if (s[0] == 'G')
		{
      let z0y = u0n(t0h, o3t.m9q);
			z2x.add(z0y);
		}
		else if (s[0] == 'Y')
		{
      let z0y = u0n(t0h, o3t.t2o);
			z2x.add(z0y);
		}
	}
	return z2x;
}

t1k(m7i)
{
	let i7a = m7i.substr(6, m7i.length - 6);
	let p6q = i7a.indexOf("]");
	if (p6q != -1)
	{
		let r7v = new i5q();
		let value = a9w(i7a.substr(0, p6q), 0);
		r7v.p1x(value);
		return r7v;
	}
	else
	{
		return new i5q();
	}
}


e0p(m7i, f2x)
{
	if (
		m7i.startsWith("[%cal") ||
    m7i.startsWith("[%csb") ||
		m7i.startsWith("[%csl") ||
		m7i.startsWith("[%mdl") ||
		m7i.startsWith("[%evp") ||
		m7i.startsWith("[%eval") ||
		m7i.startsWith("[%emt") ||
		m7i.startsWith("[%tqu") ||
		m7i.startsWith("[%tqu") ||
		m7i.startsWith("[%pws") ||
		m7i.startsWith("[%pth") ||
		m7i.startsWith("[%eog"))
	{
		let c4n = 0;
		{
     	let k4u = m7i.indexOf("[%cal");
			if (k4u != -1)
			{
        let e4m = m7i.indexOf("]", k4u);
				if (e4m != -1)
				{
     			let f6f = m7i.substring(k4u, e4m + 1);
					f2x.e9k = this.r1u(f6f).r0c();
					if (e4m > c4n) c4n = e4m;
				}
			}
		}
		{
     	let k4u = m7i.indexOf("[%csb");
   		if (k4u != -1)
			{
        let e4m = m7i.indexOf("]", k4u);
				if (e4m != -1)
				{
          let m8h = m7i.substring(k4u, e4m + 1);
					f2x.s4l = this.v3q(m8h).r0c();
					if (e4m > c4n) c4n = e4m;
				}
			}
		}
		{
      let k4u = m7i.indexOf("[%csl");
			if (k4u != -1)
			{
        let e4m = m7i.indexOf("]", k4u);
				if (e4m != -1)
				{
          let m8h = m7i.substring(k4u, e4m + 1);
					f2x.s4l = this.v3q(m8h).r0c();
					if (e4m > c4n) c4n = e4m;
				}
			}
		}
		{
      let k4u = m7i.indexOf("[%mdl");
			if (k4u != -1)
			{
        let e4m = m7i.indexOf("]", k4u);
				if (e4m != -1)
				{
          let z9g = m7i.substring(k4u, e4m + 1);
					f2x.r7v = this.t1k(z9g).r0c();
					if (e4m > c4n) c4n = e4m;
				}
			}
		}
		{
      let k4u = m7i.indexOf("[%evp");
			if (k4u != -1)
			{
        let e4m = m7i.indexOf("]", k4u);
				if (e4m != -1)
				{
					if (e4m > c4n) c4n = e4m;
				}
			}
		}
		{
      let k4u = m7i.indexOf("[%eval");
			if (k4u != -1)
			{
        let e4m = m7i.indexOf("]", k4u);
				if (e4m != -1)
				{
					if (e4m > c4n) c4n = e4m;
				}
			}
		}
		{
      let k4u = m7i.indexOf("[%emt");
			if (k4u = -1)
			{
        let e4m = m7i.indexOf("]", k4u);
				if (e4m != -1)
				{
					if (e4m > c4n) c4n = e4m;
				}
			}
		}
		{
      let k4u = m7i.indexOf("[%tqu");
			if (k4u != -1)
			{
        let e4m = m7i.indexOf("]", k4u);
				if (e4m != -1)
				{
					if (e4m > c4n) c4n = e4m;
				}
			}
		}
		{
      let k4u = m7i.indexOf("[%pws");
			if (k4u != -1)
			{
        let e4m = m7i.indexOf("]", k4u);
				if (e4m != -1)
				{
          f2x.i6y = true;
					if (e4m > c4n) c4n = e4m;
				}
			}
		}
		{
      let k4u = m7i.indexOf("[%pth");
			if (k4u != -1)
			{
        let e4m = m7i.indexOf("]", k4u);
				if (e4m != -1)
				{
          f2x.d0q = true;
					if (e4m > c4n) c4n = e4m;
				}
			}
		}
		{
      let k4u = m7i.indexOf("[%eog");
			if (k4u != -1)
			{
        let e4m = m7i.indexOf("]", k4u);
				if (e4m != -1)
				{
					f2x.e8i = true; 
					if (e4m > c4n) c4n = e4m;
				}
			}
		}
    f2x.a7q = m7i.substring(c4n + 1);
	}
	else
	{
		f2x.a7q = m7i;
	}
}

}

class v3x
{

constructor()
{
  this.f3e = 0;
	this.n4q = new u0g();
	this.s3b = new e1t();
}

r0c()
{
	let d3h = new v3x();
  d3h.f3e = this.f3e;
	d3h.n4q = this.n4q.r0c();
	d3h.s3b = this.s3b.r0c();
	return d3h;
}

}

class u0g
{

constructor()
{
	this.k7e = '';
	this.e8w = '';
	this.f9u = '';
	this.x3q = '';
	this.i8k = '';
	this.a7h = '';
	this.g7m = '';
	this.o8t = '';
	this.l8c = '';
  this.g6o = '';
	this.a0y = '';
	this.h7h = '';
	this.i4b = '';
	this.y7j = '';
	this.j2j = '';
	this.m5l = '';
	this.y2l = '';
	this.j9k = '';
	this.r0j = '';
  this.v9h = '';
	this.j4r = '';
	this.j5x = '';
	this.f4e = '';
	this.s8m = '';
	this.v7l = '';
	this.a0n = '';
	this.i1x = '';
	this.z9l = '';
	this.t5t = '';
	this.z3g = '';
	this.u3o = '';
	this.v3m = '';
	this.b4o = '';
	this.h9i = '';
	this.q7v = '';
	this.d5h = '';
	this.y8j = '';
	this.g8l = '';
	this.g0a = '';
	this.e1l = '';
	this.w4t = '';
	this.t4y = '';
	this.c8h = '';
	this.v3z = '';
	this.y1g = '';
	this.j9q = '';
  this.w1q = '';
}

r0c()
{
	let b4n = new u0g();

	b4n.k7e = this.k7e;
	b4n.e8w = this.e8w;
	b4n.f9u = this.f9u;
	b4n.x3q = this.x3q;
	b4n.i8k = this.i8k;
	b4n.a7h = this.a7h;
	b4n.g7m = this.g7m;
	b4n.o8t = this.o8t;
	b4n.l8c = this.l8c;
	b4n.g6o = this.g6o;

	b4n.a0y = this.a0y;
	b4n.h7h = this.h7h;
	b4n.i4b = this.i4b;
	b4n.y7j = this.y7j;
	b4n.j2j = this.j2j;
	b4n.m5l = this.m5l;
	b4n.y2l = this.y2l;
	b4n.j9k = this.j9k;
	b4n.r0j = this.r0j;
	b4n.v9h = this.v9h;

	b4n.j4r = this.j4r;
	b4n.j5x = this.j5x;
	b4n.f4e = this.f4e;
	b4n.s8m = this.s8m;
	b4n.v7l = this.v7l;
	b4n.a0n = this.a0n;
	b4n.i1x = this.i1x;
	b4n.z9l = this.z9l;
	b4n.t5t = this.t5t;
	b4n.z3g = this.z3g;
	b4n.u3o = this.u3o;
	b4n.v3m = this.v3m;
	b4n.b4o = this.b4o;

	b4n.h9i = this.h9i;

	b4n.q7v = this.q7v;
	b4n.d5h = this.d5h;
	b4n.y8j = this.y8j;
	b4n.g8l = this.g8l;
	b4n.g0a = this.g0a;
	b4n.e1l = this.e1l;

	b4n.w4t = this.w4t;

	b4n.t4y = this.t4y;
	b4n.c8h = this.c8h;
	b4n.v3z = this.v3z;
	b4n.y1g = this.y1g;

	b4n.j9q = this.j9q;
 	b4n.w1q = this.w1q;

	return b4n;
}

}


const g9v =
[
		[ r4b.f0x, 				  									"",											            "", 																	"",   ""    ],
		[ r4b.y2f, 										  "Afghanistan",											"Afghanistan", 												"af", "AFG" ],
		[ r4b.f9g, 									 	"AlandIslands",										  "Aland", 															"ax", "ALA" ],
		[ r4b.x4h,  											 	"Albania",													"Albania", 														"al", "ALB" ],
		[ r4b.h3z,  											 	"Algeria",													"Algeria", 														"dz", "DZA" ],
		[ r4b.k6x,  								 	"AmericanSamoa",										"American Samoa", 										"as", "ASM" ],
		[ r4b.r3p,  											 	"Andorra",													"Andorra", 														"ad", "AND" ],
		[ r4b.i5a,                           "Angola",													  "Angola", 														"ao", "AGO" ],
		[ r4b.j7d,  											  "Anguilla",												  "Anguilla", 													"ai", "AIA" ],
		[ r4b.o7h,  										  "Antarctica",											  "Antarctica", 												"aq", "ATA" ],
		[ r4b.z0a,  								  "AntiguaBarbuda",									  "Antigua & Barbuda", 									"ag", "ATG" ],
		[ r4b.c9q,  										 	"Argentina",												"Argentina", 													"ar", "ARG" ],
		[ r4b.b9l,  											 	"Armenia",													"Armenia",														"am", "ARM" ],
		[ r4b.j6q,  												 	"Aruba",														"Aruba",															"aw", "ABW" ],
		[ r4b.z5i,  										 	"Australia",												"Australia",													"au", "AUS" ],
		[ r4b.s0l,  											 	"Austria",													"Austria",											 			"at", "AUT" ],
		[ r4b.f1i,  										  "Azerbaijan",											  "Azerbaijan",													"az", "AZE" ],
		[ r4b.g7r,  											 	"Bahamas",													"Bahamas",														"bs", "BHS" ],
		[ r4b.j9y,  											 	"Bahrain",													"Bahrain",														"bh", "BHR" ],
		[ r4b.t8w,  										  "Bangladesh",											  "Bangladesh",													"bd", "BGD" ],
		[ r4b.u3m,  											  "Barbados",												  "Barbados",														"bb", "BRB" ],
		[ r4b.t7o,  								 	"BasqueCountry",	 									"Basque Country",     								"x1", "XX1" ], 
		[ r4b.f5g,  											 	"Belarus",													"Belarus",														"by", "BLR" ],
		[ r4b.u1r,  											 	"Belgium",													"Belgium",														"be", "BEL" ],
		[ r4b.a9z,  												  "Belize",													  "Belize",															"bz", "BLZ" ],
		[ r4b.c4y,  												 	"Benin",														"Benin",															"bj", "BEN" ],
		[ r4b.x8q,  											 	"Bermuda",													"Bermuda",														"bm", "BMU" ],
		[ r4b.m8g,  												  "Bhutan",													  "Bhutan",															"bt", "BTN" ],
		[ r4b.z6u,  												"Bolivia",													"Bolivia",														"bo", "BOL" ],
		[ r4b.t1u,  						  "BosniaHerzegovina",       				  "Bosnia & Herzegovina", 							"ba", "BIH" ], 
		[ r4b.l5d,  											  "Botswana",                      	  "Botswana",														"bw", "BWA" ],
		[ r4b.b6g,  									  "BouvetIsland",                 		"Bouvet",															"bv", "BVT" ],
		[ r4b.o3j,  												  "Brazil",                        	  "Brazil",															"br", "BRA" ],
		[ r4b.m0n,  	 	"BritishIndianOceanTerritory",			"British Indian Ocean Territory", 		"io", "IOT" ],
		[ r4b.f0i, 							 	"BruneiDarussalam",								  "Brunei",															"bn", "BRN" ], 
		[ r4b.v3g,  											  "Bulgaria",												  "Bulgaria", 													"bg", "BGR" ],
		[ r4b.f7c, 										  "BurkinaFaso",											"Burkina Faso",												"bf", "BFA" ],
		[ r4b.x7g,  											 	"Burundi",													"Burundi",														"bi", "BDI" ],
		[ r4b.v1x,  											  "Cambodia",												  "Cambodja",														"kh", "KHM" ],
		[ r4b.u4l,  											  "Cameroon",												  "Cameroon",														"cm", "CMR" ],
		[ r4b.i1i,  												  "Canada",													  "Canada",															"ca", "CAN" ],
		[ r4b.w5k,  										  "CapeVerde",												"Cape Verde",													"cv", "CPV" ], 
		[ r4b.c9n,  										  "Catalonia",												"Catalonia",													"x2", "XX2" ], 
		[ r4b.x4a,  								  "CaymanIslands",										"Cayman Islands",											"ky", "CYM" ],
		[ r4b.h5f,  				  "CentralAfricanRepublic",					  "Central African Republic",						"cf", "CAF" ],
		[ r4b.h2t,  													  "Chad",														  "Chad",																"td", "TCD" ],
		[ r4b.j0b,  												 	"Chile",														"Chile",															"cl", "CHL" ],
		[ r4b.e0a,  												 	"China",														"China",															"cn", "CHN" ],
		[ r4b.v6o,  							 	"ChristmasIsland",									"Christmas",													"cx", "CXR" ],
		[ r4b.j1r,  					 	"CocosKeelingIslands",							"Cocos (Keeling)",										"cc", "CCK" ], 
		[ r4b.y7h,  											  "Colombia",												  "Colombia",														"co", "COL" ],
		[ r4b.s5e,  											 	"Comoros",													"Comoros",														"km", "COM" ],
		[ r4b.o1f,  												 	"Congo",														"Congo-Brazzaville", 						    	"cg", "COG" ],
		[ r4b.t4c,  			 	"CongoDemocraticRepublic",					"Congo-Kinshasa(Zaire)",						  "cd", "COD" ],
		[ r4b.g6x,  									 	"CookIslands",											"Cook Islands",											 	"ck", "COK" ],
		[ r4b.k1z,  											"CostaRica",												"Costa Rica",												 	"cr", "CRI" ],
		[ r4b.x5n,  												"Croatia",													"Croatia",														"hr", "HRV" ],
		[ r4b.j2v,  													  "Cuba",														  "Cuba",															 	"cu", "CUB" ],
		[ r4b.x4m,  												"Curacao",													"Curacao",											  		"cw", "CUW" ],
		[ r4b.e3y,  												  "Cyprus",													  "Cyprus",														 	"cy", "CYP" ],
		[ r4b.i0x,  									      "Czechia",										      "Czech Republic", 										"cz", "CZE" ],
		[ r4b.g5r,  										  "CoteIvoire",	   					 				  "Cote d'Ivoire",											"ci", "CIV" ],
		[ r4b.i5l,  												"Denmark",													"Denmark",													  "dk", "DNK" ],
		[ r4b.t3d,  											  "Djibouti",												  "Djibouti",													 	"dj", "DJI" ],
		[ r4b.c9f,  											  "Dominica",												  "Dominica",													 	"dm", "DMA" ],
		[ r4b.i5x,  							"DominicanRepublic",								"Dominican Republic",								 	"do", "DOM" ],
		[ r4b.p1b,  												"Ecuador",													"Ecuador",													 	"ec", "ECU" ],
		[ r4b.s2n,  													"Egypt",														"Egypt", 														 	"eg", "EGY" ],
		[ r4b.m5y,  										  "ElSalvador",											  "El Salvador",												"sv", "SLV" ],
		[ r4b.y8q,  												"England",													"England",														"x3", "GBR" ],
		[ r4b.t0p,  							  "EquatorialGuinea",								  "Equatorial Guinea",									"gq", "GNQ" ], 
		[ r4b.k1r,  												"Eritrea",													"Eritrea",														"er", "ERI" ],
		[ r4b.v0m,  												"Estonia",													"Estonia",														"ee", "EST" ],
		[ r4b.j7l,  											  "Ethiopia",												  "Ethiopia",													 	"et", "ETH" ],
		[ r4b.j2p,  								"FalklandIslands",									"England",														"fk", "FLK" ], 
		[ r4b.r1d,  									  "FaroeIslands",										  "Faroes",														 	"fo", "FRO" ],
		[ r4b.c2m,  													  "Fiji",														  "Fiji",															 	"fj", "FJI" ],
		[ r4b.d8r,  												"Finland",													"Finland",														"fi", "FIN" ],
		[ r4b.d5n,  												  "France",													  "France",														 	"fr", "FRA" ],
		[ r4b.q5a,  									  "FrenchGuiana",										  "Guyana", 														"gf", "GUF" ], 
		[ r4b.u9u,  								"FrenchPolynesia",									"Tahiti(French Polinesia)", 					"pf", "PYF" ], 
		[ r4b.u5d,  			"FrenchSouthernTerritories",				"French Southern and Antarctic Lands","tf", "ATF" ],
		[ r4b.c7b,  													"Gabon",														"Gabon",															"ga", "GAB" ], 
		[ r4b.o7g,  												  "Gambia",													  "Gambia",															"gm", "GMB" ],
		[ r4b.h1b,  												"Georgia",													"Georgia",														"ge", "GEO" ],
		[ r4b.m6v,  												"Germany",													"Germany",														"de", "DEU" ],
		[ r4b.p2g, 													  "Ghana",														"Ghana",															"gh", "GHA" ],
		[ r4b.x0v,  											"Gibraltar",												"Gibraltar",													"gi", "GIB" ],
		[ r4b.w5b,  												  "Greece",													  "Greece",															"gr", "GRC" ],
		[ r4b.x6m,  											"Greenland",												"Greenland",													"gl", "GRL" ],
		[ r4b.o1w,  												"Grenada",													"Grenada",														"gd", "GRD" ],
		[ r4b.z9o,  										  "Guadeloupe",											  "Guadeloupe",													"gp", "GLP" ],
		[ r4b.j3h,  													  "Guam",														  "Guam",																"gu", "GUM" ],
		[ r4b.n3i,  											"Guatemala",												"Guatemala",													"gt", "GTM" ],
		[ r4b.r9l,  											  "Guernsey",												  "Guernsey",														"gg", "GGY" ], 
		[ r4b.y0a,  												  "Guinea",													  "Guinea",															"gn", "GIN" ],
		[ r4b.w7v,  									  "GuineaBissau",										  "Guinea-Bissau",											"gw", "GNB" ],
		[ r4b.b9w,  												  "Guyana",													  "Guyana",															"gy", "GUY" ],
		[ r4b.a0j,  													"Haiti",														"Haiti",															"ht", "HTI" ],
		[ r4b.v3s, 			"HeardIslandMcDonaldIslands", 			"Australia",   									  		"hm", "HMD" ],
		[ r4b.k2a,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ r4b.u8g,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ r4b.b6n,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ r4b.q2k,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ r4b.w0b,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ r4b.i1g,  												 	"India",														"India",															"in", "IND" ],
		[ r4b.p3v,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ r4b.t4d,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ r4b.q5e,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ r4b.v3r,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ r4b.i4r,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ r4b.h7w,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ r4b.h1d,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ r4b.z0x,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ r4b.j8h,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], 
		[ r4b.x7o,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ r4b.m4q,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ r4b.q0n,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ r4b.a3k,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ r4b.c0x,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ r4b.i0n,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ r4b.x5f,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], 
		[ r4b.h5t,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], 
		[ r4b.c0n,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ r4b.a6k,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ r4b.x8l,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ r4b.r1o,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ r4b.t7x, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ r4b.j8y,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ r4b.y3t, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ r4b.j7f,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ r4b.k0l,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ r4b.w7x,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ r4b.m1k,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ r4b.r7n,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ r4b.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ r4b.w6z,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ r4b.r2c,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ r4b.z8w,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ r4b.i8w,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ r4b.u6r,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ r4b.m8f, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ r4b.c5z,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ r4b.m9g,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ r4b.b8i,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ r4b.a3g,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ r4b.v0j,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ r4b.c6i,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ r4b.p5u,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ r4b.b5a,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ r4b.z4x,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ r4b.a8j,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ r4b.x6l,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ r4b.h1i,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ r4b.m4s,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ r4b.w2a,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ r4b.u7q,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ r4b.k6e, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ r4b.d3j,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ r4b.o6s,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ r4b.i3y,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ r4b.h5c,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ r4b.f9m, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ r4b.j8f,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ r4b.g9p,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ r4b.h0y,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ r4b.h3q,  													"Niger",														"Niger",															"ne", "NER" ],
		[ r4b.t6x,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ r4b.a0k,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ r4b.c7u,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ r4b.u8w,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], 
		[ r4b.x7j,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ r4b.m2c,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ r4b.l0i,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ r4b.o4v,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ r4b.r6w,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ r4b.b4t,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ r4b.n2k,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ r4b.h3r,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ r4b.d9v,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ r4b.l6k,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ r4b.d9u,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ r4b.o9c,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ r4b.y1x,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ r4b.c9u,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ r4b.h6m,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ r4b.d9j,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ r4b.t1b,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ r4b.h8d,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ r4b.l0c,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ r4b.v6e,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ r4b.y6b,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ r4b.s9o,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], 
		[ r4b.i9b,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], 
		[ r4b.o2w, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], 
		[ r4b.i9l,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ r4b.l4m,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], 
		[ r4b.x4z,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], 
		[ r4b.m9d,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ r4b.g6h,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ r4b.l2a,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ r4b.x0s,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ r4b.j1u,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ r4b.y7y,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ r4b.y1v,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ r4b.j3b,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ r4b.q3z,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ r4b.g3c,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ r4b.s1b,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ r4b.j7s,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ r4b.k2z,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ r4b.y8t,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ r4b.k1l,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ r4b.j0a,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ r4b.j7k, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ r4b.q0v,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ r4b.h0p,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ r4b.m4b, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ r4b.r8c,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ r4b.m2k,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ r4b.h3v,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], 
		[ r4b.g5y,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], 
		[ r4b.a4e,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ r4b.o7n,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ r4b.p7o,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ r4b.j2m,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ r4b.f8e,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ r4b.q1y,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ r4b.v5l,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ r4b.b4e, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ r4b.d2u,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], 
		[ r4b.v9q, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ r4b.g2e,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], 
		[ r4b.k7g,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ r4b.j8j,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ r4b.a7v,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ r4b.v4y,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ r4b.q1l,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ r4b.g8k,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ r4b.i3d,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ r4b.j9a,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ r4b.e1q,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ r4b.q4f,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ r4b.v8h,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], 
		[ r4b.b8z,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ r4b.s3y, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ r4b.q3x,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ r4b.b9y,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ r4b.b4w,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ r4b.o9y,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ r4b.u9x,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ r4b.y0n,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ r4b.g5s,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ r4b.t6n,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ r4b.q4g,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ r4b.y1j,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ r4b.k1x,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ r4b.m2j,  											 		"Zaire",														"",																		"zr", "ZRN" ], 
		[ r4b.h9r,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ r4b.t9k,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function r1h(i4h)
{
	return g9v[i4h][2];
}

function u5b(i4h)
{
	return g9v[i4h][4];
}

function z2m(x3m)
{
	for (const i4h of g9v)
	{
		if (i4h[4] == x3m)
		{
			return i4h[0];
		}
	}
	return r4b.f0x;
}

function y9i(j8a)
{
	for (const i4h of g9v)
	{
		if (i4h[3] == j8a)
		{
			return i4h[0];
		}
	}
	return r4b.f0x;
}
class q6l
{

constructor()
{
	this.m7i = '';
}

p3z(i7a)
{
	this.m7i += i7a;
}

q6d(i7a)
{
	this.m7i += i7a + '\n';
}

m7p()
{
	this.m7i += '\n';
}

}




function a9w(n6y, s9f)
{
	let value = Number(n6y);
	if (isNaN(value))
	{
		return s9f;
	}
	else
	{
		return value;
	}
}
