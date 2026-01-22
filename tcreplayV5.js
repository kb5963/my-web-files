const	chess = true; 

const e6m =
{
	e9y    : 0,
	z7y  : 1,
	y4y  : 2,
	k5g    : 3,
  s9a   : 4,
	q3z    : 5,
	q1f    : 6,
	u8e  : 7,
	v4g  : 8,
	p2g    : 9,
	g1r   : 10,
	v1w    : 11,
	k4u        : 12,
};

const n0s =
{
	l7w        : 0,
	k4y        : 1,
};

const	a1 = 0;
const z6n = 1;
const a5p = 2;
const x5p = 3;
const d9f = 4;
const n9f = 5;
const a1y = 6;
const p0w = 7;
const	a2 = 8;
const o2y = 9;
const m2w = 10;
const u2h = 11;
const m1n = 12;
const t5u = 13;
const t5k = 14;
const w5e = 15;
const	a3 = 16;
const l1i = 17;
const j8z = 18;
const n6k = 19;
const j0f = 20;
const m7p = 21;
const o7i = 22;
const z1p = 23;
const	a4 = 24;
const j0a = 25;
const i8q = 26;
const i5d = 27;
const i5f = 28;
const p3g = 29;
const h3w = 30;
const y5y = 31;
const	a5 = 32;
const h4a = 33;
const z9m = 34;
const l1s = 35;
const g3m = 36;
const g0b = 37;
const m6y = 38;
const e9g = 39;
const	a6 = 40;
const l7l = 41;
const p3w = 42;
const h1y = 43;
const o8x = 44;
const t1q = 45;
const b5q = 46;
const v2n = 47;
const	a7 = 48;
const e9c = 49;
const x2b = 50;
const l0a = 51;
const o4p = 52;
const v9f = 53;
const m4j = 54;
const e3b = 55;
const	a8 = 56;
const l7e = 57;
const q8k = 58;
const j4d = 59;
const l4x = 60;
const n6i = 61;
const t9n = 62;
const a0d = 63;
const f7w = 64;

const r4m = 0;
const n4t = 1;
const d6e = 2;
const e5h = 3;
const o8s = 4;
const d1i = 5;
const z7b = 6;
const y5x = 7;
const b7s = 8;

const	rank_1 = 0;
const t5l = 1;
const f2q = 2;
const w2h = 3;
const l8w = 4;
const f6r = 5;
const p7p = 6;
const q4e = 7;
const g8b = 8;

const b6i        = 8;
const b0j       = 64;
const t7g      = 16;

const h0v =
[
	e6m.k5g,    
  e6m.z7y,  
  e6m.y4y,  
  e6m.s9a,   
  e6m.q3z,    
  e6m.y4y,  
  e6m.z7y,  
  e6m.k5g,    
	e6m.e9y,    
  e6m.e9y,    
  e6m.e9y,    
  e6m.e9y,    
  e6m.e9y,    
  e6m.e9y,    
  e6m.e9y,    
  e6m.e9y,    
	e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
	e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
	e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
	e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
	e6m.q1f,    
  e6m.q1f,    
  e6m.q1f,    
  e6m.q1f,    
  e6m.q1f,    
  e6m.q1f,    
  e6m.q1f,    
  e6m.q1f,    
	e6m.p2g,    
  e6m.u8e,  
  e6m.v4g,  
  e6m.g1r,   
  e6m.v1w,    
  e6m.v4g,  
  e6m.u8e,  
  e6m.p2g,    
];

const l0p =
[
	e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
	e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
	e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
	e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
	e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
	e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
	e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
	e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
  e6m.k4u,        
];

const r5e =
[
	a1, z6n, a5p, x5p, d9f, n9f, a1y, p0w,
	a2, o2y, m2w, u2h, m1n, t5u, t5k, w5e,
	a3, l1i, j8z, n6k, j0f, m7p, o7i, z1p,
	a4, j0a, i8q, i5d, i5f, p3g, h3w, y5y,
	a5, h4a, z9m, l1s, g3m, g0b, m6y, e9g,
	a6, l7l, p3w, h1y, o8x, t1q, b5q, v2n,
	a7, e9c, x2b, l0a, o4p, v9f, m4j, e3b,
	a8, l7e, q8k, j4d, l4x, n6i, t9n, a0d,
];

const v9k =
[
	r4m,
  n4t,
  d6e,
  e5h,
  o8s,
  d1i,
  z7b,
  y5x,
];

const t7b =
[
	rank_1,
  t5l,
  f2q,
  w2h,
  l8w,
  f6r,
  p7p,
  q4e,
];

function y2y(s1e)
{
	return s1e == e6m.q1f ||
		s1e == e6m.u8e ||
    s1e == e6m.v4g ||
    s1e == e6m.p2g ||
    s1e == e6m.g1r ||
    s1e == e6m.v1w;
}

function d9v(s1e)
{
	return s1e == e6m.e9y ||
		s1e == e6m.z7y ||
    s1e == e6m.y4y ||
    s1e == e6m.k5g ||
    s1e == e6m.s9a ||
    s1e == e6m.q3z;
}

function f7z(s1e)
{
	return s1e == e6m.e9y || s1e == e6m.q1f;
}

function u0h(s1e)
{
	return s1e == e6m.z7y || s1e == e6m.u8e;
}

function k6k(s1e)
{
	return s1e == e6m.y4y || s1e == e6m.v4g;
}

function c1m(s1e)
{
	return s1e == e6m.k5g || s1e == e6m.p2g;
}

function u1y(s1e)
{
	return s1e == e6m.s9a || s1e == e6m.g1r;
}

function e4j(s1e)
{
	return s1e == e6m.q3z || s1e == e6m.v1w;
}

function a8w(z1c)
{
	if (z1c == f7w)
	{
		return f7w;
	}
	else
	{
		return b0j - z1c - 1;
	}
}

const q4i =
[
	r4m, n4t, d6e, e5h, o8s, d1i, z7b, y5x,
	r4m, n4t, d6e, e5h, o8s, d1i, z7b, y5x,
	r4m, n4t, d6e, e5h, o8s, d1i, z7b, y5x,
	r4m, n4t, d6e, e5h, o8s, d1i, z7b, y5x,
	r4m, n4t, d6e, e5h, o8s, d1i, z7b, y5x,
	r4m, n4t, d6e, e5h, o8s, d1i, z7b, y5x,
	r4m, n4t, d6e, e5h, o8s, d1i, z7b, y5x,
	r4m, n4t, d6e, e5h, o8s, d1i, z7b, y5x,
];

function x6z(z1c)
{
	return q4i[z1c];
}

const c6j =
[
	rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1, rank_1,
	t5l, t5l, t5l, t5l, t5l, t5l, t5l, t5l,
	f2q, f2q, f2q, f2q, f2q, f2q, f2q, f2q,
	w2h, w2h, w2h, w2h, w2h, w2h, w2h, w2h,
	l8w, l8w, l8w, l8w, l8w, l8w, l8w, l8w,
	f6r, f6r, f6r, f6r, f6r, f6r, f6r, f6r,
	p7p, p7p, p7p, p7p, p7p, p7p, p7p, p7p,
	q4e, q4e, q4e, q4e, q4e, q4e, q4e, q4e,
];

function e8y(z1c)
{
	return c6j[z1c];
}

function e3v(a, b)
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

function z4a(a, b)
{
	for (let i = 0; i < b.length; i++)
	{
		a[i] = b[i];
	}
}

function k0k(h7x, s1e)
{
	let b9q = 0;
	for (const value of h7x)
	{
		if (value == s1e)
		{
			b9q++;
		}
	}
	return b9q;
}

var stringToSquareMapInited = false;
const u5t = new Map();
function p3u()
{
  u5t.set("a1", a1);
  u5t.set("a2", a2);
  u5t.set("a3", a3);
  u5t.set("a4", a4);
  u5t.set("a5", a5);
  u5t.set("a6", a6);
  u5t.set("a7", a7);
  u5t.set("a8", a8);
  u5t.set("b1", z6n);
  u5t.set("b2", o2y);
  u5t.set("b3", l1i);
  u5t.set("b4", j0a);
  u5t.set("b5", h4a);
  u5t.set("b6", l7l);
  u5t.set("b7", e9c);
  u5t.set("b8", l7e);
  u5t.set("c1", a5p);
  u5t.set("c2", m2w);
  u5t.set("c3", j8z);
  u5t.set("c4", i8q);
  u5t.set("c5", z9m);
  u5t.set("c6", p3w);
  u5t.set("c7", x2b);
  u5t.set("c8", q8k);
  u5t.set("d1", x5p);
  u5t.set("d2", u2h);
  u5t.set("d3", n6k);
  u5t.set("d4", i5d);
  u5t.set("d5", l1s);
  u5t.set("d6", h1y);
  u5t.set("d7", l0a);
  u5t.set("d8", j4d);
  u5t.set("e1", d9f);
  u5t.set("e2", m1n);
  u5t.set("e3", j0f);
  u5t.set("e4", i5f);
  u5t.set("e5", g3m);
  u5t.set("e6", o8x);
  u5t.set("e7", o4p);
  u5t.set("e8", l4x);
  u5t.set("f1", n9f);
  u5t.set("f2", t5u);
  u5t.set("f3", m7p);
  u5t.set("f4", p3g);
  u5t.set("f5", g0b);
  u5t.set("f6", t1q);
  u5t.set("f7", v9f);
  u5t.set("f8", n6i);
  u5t.set("g1", a1y);
  u5t.set("g2", t5k);
  u5t.set("g3", o7i);
  u5t.set("g4", h3w);
  u5t.set("g5", m6y);
  u5t.set("g6", b5q);
  u5t.set("g7", m4j);
  u5t.set("g8", t9n);
  u5t.set("h1", p0w);
  u5t.set("h2", w5e);
  u5t.set("h3", z1p);
  u5t.set("h4", y5y);
  u5t.set("h5", e9g);
  u5t.set("h6", v2n);
  u5t.set("h7", e3b);
  u5t.set("h8", a0d);
}

function e2x(w5a)
{
  if (!stringToSquareMapInited)
  {
    p3u();
    stringToSquareMapInited = true;
  }
  if (u5t.has(w5a))
  {
    return u5t.get(w5a);
  }
  else
  {
		return f7w;
  }
}

function q7n(z1c)
{
  return k4i[z1c];
}

const t7z  = a1y;
const n2h  = n9f;
const c7e = a5p;
const n4e = x5p;
const e7z  = t9n;
const n8e  = n6i;
const u6a = q8k;
const r5x = j4d;

const k4i =
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

const u2v =
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

const d5s =
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




const d0a =
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

function a5u(z1c)
{
	return d0a[z1c];
}



















function i0z(n3x)
{
  if (n3x == '1')
  {
    return rank_1;
  }
  else if (n3x == '2')
  {
    return t5l;
  }
  else if (n3x == '3')
  {
    return f2q;
  }
  else if (n3x == '4')
  {
    return w2h;
  }
  else if (n3x == '5')
  {
    return l8w;
  }
  else if (n3x == '6')
  {
    return f6r;
  }
  else if (n3x == '7')
  {
    return p7p;
  }
  else if (n3x == '8')
  {
    return q4e;
  }
	else
	{
		return g8b;
	}
}

function d7b(n3x)
{
  if (n3x == 'a')
  {
    return r4m;
  }
  else if (n3x == 'b')
  {
    return n4t;
  }
  else if (n3x == 'c')
  {
    return d6e;
  }
  else if (n3x == 'd')
  {
    return e5h;
  }
  else if (n3x == 'e')
  {
    return o8s;
  }
  else if (n3x == 'f')
  {
    return d1i;
  }
  else if (n3x == 'g')
  {
    return z7b;
  }
  else if (n3x == 'h')
  {
    return y5x;
  }
  else
	{
		return b7s;
	}
}

function s7f(k1e)
{
  return d5s[k1e];
}

function u0f(o3p)
{
  return u2v[o3p];
}


class d3i
{

constructor()
{
	this.l6v = false;
	this.f6j = d9f;
	this.s8e = l4x;
	this.w2d = p0w;
	this.p8f = a1;
	this.v3y = a0d;
	this.k6j = a8;
	this.d8b = false;
	this.o1i = false;
	this.g3o = false;
	this.r0z = false;
	this.e7r = f7w;
}

g6i()
{
	let f0j = new d3i();
  return Object.assign(f0j, this);
}

}


class z5d
{

constructor()
{
  this.v2z = Array(b0j).fill(e6m.k4u);
 	this.m2v = n0s.l7w;
 	this.m3n = new d3i();
 	this.k3p();
}

g6i()
{
	let s6v = new z5d();
	z4a(s6v.v2z, this.v2z);
	s6v.m2v = this.m2v;
  s6v.m3n = this.m3n.g6i();
  s6v.whiteKing_ = this.whiteKing_;
	s6v.blackKing_ = this.blackKing_;
	return s6v;
}

n0a(k9o)
{
	return this.m2v == k9o.m2v &&
		e3v(this.v2z, k9o.v2z);
}

g4t(k9o)
{
	return !this.n0a(k9o);
}

d8m()
{
 	z4a(this.v2z, h0v);
 	this.m2v = n0s.l7w;
  this.m3n.l6v = false;
	this.m3n.f6j = d9f;
	this.m3n.s8e = l4x;
	this.m3n.w2d = p0w;
	this.m3n.p8f = a1;
	this.m3n.v3y = a0d;
	this.m3n.k6j = a8;
	this.m3n.e7r = f7w;
	this.m3n.d8b = true;
	this.m3n.o1i = true;
	this.m3n.g3o = true;
	this.m3n.r0z = true;
 	this.whiteKing_ = d9f;
	this.blackKing_ = l4x;
}

g2c()
{
	return this.m2v == n0s.l7w && this.c8l();
}

c8l()
{
	return e3v(this.v2z, h0v);
}

k3p()
{
	this.v2z.fill(e6m.k4u);
	this.m2v = n0s.l7w;
	this.m3n.l6v = false;
	this.m3n.f6j = d9f;
	this.m3n.s8e = l4x;
	this.m3n.w2d = p0w;
	this.m3n.p8f = a1;
	this.m3n.v3y = a0d;
	this.m3n.k6j = a8;
	this.m3n.e7r = f7w;
	this.m3n.d8b = false;
	this.m3n.o1i = false;
	this.m3n.g3o = false;
	this.m3n.r0z = false;
  this.whiteKing_ = f7w;
  this.blackKing_ = f7w;
}

b9x()
{
	return this.m2v == n0s.l7w && this.v7x();
}

v7x()
{
	return this.v2z.every(e6m.k4u);
}

h7x()
{
  return this.v2z.slice();
}

c1b(z1c)
{
	return this.v2z[z1c];
}

w6f(z1c, s1e)
{
	if (this.v2z[z1c] == e6m.q3z)
	{
		this.whiteKing_ = f7w;
	}
	else if (this.v2z[z1c] == e6m.v1w)
	{
		this.blackKing_ = f7w;
	}
	if (s1e == e6m.q3z)
	{
		this.whiteKing_ = z1c;
	}
	else if (s1e == e6m.v1w)
	{
		this.blackKing_ = z1c;
	}
	this.v2z[z1c] = s1e;
}

z6h()
{
	this.m2v = n0s.l7w;
}

d1l()
{
	this.m2v = n0s.k4y;
}

b1b()
{
	if (this.m2v == n0s.l7w)
	{
		this.m2v = n0s.k4y;
	}
	else
	{
		this.m2v = n0s.l7w;
	}
}

s6y()
{
	return this.m2v == n0s.l7w;
}

b3q()
{
	return this.m2v == n0s.k4y;
}

t0q(z1c)
{
	return this.v2z[z1c] == e6m.k4u;
}

d9v(z1c)
{
	let s1e = this.v2z[z1c];
	return s1e == e6m.e9y ||
		s1e == e6m.z7y ||
    s1e == e6m.y4y ||
    s1e == e6m.k5g ||
    s1e == e6m.s9a ||
    s1e == e6m.q3z;
}

y2y(z1c)
{
	let s1e = this.v2z[z1c];
	return s1e == e6m.q1f ||
		s1e == e6m.u8e ||
    s1e == e6m.v4g ||
    s1e == e6m.p2g ||
    s1e == e6m.g1r ||
    s1e == e6m.v1w;
}

q2x(z1c)
{
  let s1e = this.v2z[z1c];
	return s1e == e6m.e9y;
}

c2c(z1c)
{
  let s1e = this.v2z[z1c];
	return s1e == e6m.z7y;
}

z3s(z1c)
{
  let s1e = this.v2z[z1c];
	return s1e == e6m.y4y;
}

o3j(z1c)
{
  let s1e = this.v2z[z1c];
	return s1e == e6m.k5g;
}

p5l(z1c)
{
  let s1e = this.v2z[z1c];
	return s1e == e6m.s9a;
}

s9w(z1c)
{
  let s1e = this.v2z[z1c];
	return s1e == e6m.q3z;
}

y7s(z1c)
{
  let s1e = this.v2z[z1c];
	return s1e == e6m.q1f;
}

w1s(z1c)
{
  let s1e = this.v2z[z1c];
	return s1e == e6m.u8e;
}

x0x(z1c)
{
  let s1e = this.v2z[z1c];
	return s1e == e6m.v4g;
}

s0y(z1c)
{
  let s1e = this.v2z[z1c];
	return s1e == e6m.p2g;
}

z5e(z1c)
{
  let s1e = this.v2z[z1c];
	return s1e == e6m.g1r;
}

s3x(z1c)
{
  let s1e = this.v2z[z1c];
	return s1e == e6m.v1w;
}

d9e()
{
  let b9q = 0;
	for (const z1c of r5e)
	{
    if (this.d9v(z1c))
		{
			b9q++;
		}
	}
	return b9q;
}

y1y()
{
  let b9q = 0;
	for (const z1c of r5e)
	{
    if (this.y2y(z1c))
		{
			b9q++;
		}
	}
	return b9q;
}

m6i(h3d)
{
  this.m3n = h3d.g6i();
}

h3d()
{
  return this.m3n.g6i();
}

s8z(r4w)
{
 	this.m3n.e7r = f7w; 
	if (r4w.a9r())
	{
		this.b1b();
		return;
	}
	if (r4w.d9v())
	{
		if (r4w.c3m())
		{
			this.v2z[r4w.a3y] = e6m.k4u;
			if (r4w.o7b == e6m.p2g)
			{
				if (r4w.a3y == this.m3n.k6j)
				{
					this.m3n.r0z = false;
				}
				else if (r4w.a3y == this.m3n.v3y)
				{
					this.m3n.g3o = false;
				}
			}
		}
		this.v2z[r4w.f7i] = e6m.k4u;
		this.v2z[r4w.j3l] = r4w.d6z;
		if (r4w.n7i == e6m.e9y)
		{
			if ((r4w.j3l - r4w.f7i) == 16)
			{
				this.m3n.e7r = (r4w.f7i + 8);
			}
		}
		else if (r4w.n7i == e6m.k5g)
		{
			if (r4w.f7i == this.m3n.p8f)
			{
				this.m3n.o1i = false;
			}
			else if (r4w.f7i == this.m3n.w2d)
			{
				this.m3n.d8b = false;
			}
		}
		else if (r4w.n7i == e6m.q3z)
		{
			if (r4w.r9f())
			{
				if (r4w.j3l == c7e)
				{
					
					if (this.m3n.p8f != r4w.j3l)
					{
						this.v2z[this.m3n.p8f] = e6m.k4u;
					}
					this.v2z[n4e] = e6m.k5g;
				}
				else if (r4w.j3l == t7z)
				{
					
					if (this.m3n.w2d != r4w.j3l)
					{
						this.v2z[this.m3n.w2d] = e6m.k4u;
					}
					this.v2z[n2h] = e6m.k5g;
				}
			}
			this.m3n.o1i = false;
			this.m3n.d8b = false;
			this.whiteKing_ = r4w.j3l;
		}
	}
	else
	{
		if (r4w.c3m())
		{
			this.v2z[r4w.a3y] = e6m.k4u;
			if (r4w.o7b == e6m.k5g)
			{
				if (r4w.a3y == this.m3n.p8f)
				{
					this.m3n.o1i = false;
				}
				else if (r4w.a3y == this.m3n.w2d)
				{
					this.m3n.d8b = false;
				}
			}
		}
		this.v2z[r4w.f7i] = e6m.k4u;
		this.v2z[r4w.j3l] = r4w.d6z;
		if (r4w.n7i == e6m.q1f)
		{
			if ((r4w.j3l - r4w.f7i) == -16)
			{
				this.m3n.e7r = (r4w.f7i - 8);
			}
		}
		else if (r4w.n7i == e6m.p2g)
		{
			if (r4w.f7i == this.m3n.k6j)
			{
				this.m3n.r0z = false;
			}
			else if (r4w.f7i == this.m3n.v3y)
			{
				this.m3n.g3o = false;
			}
		}
		else if (r4w.n7i == e6m.v1w)
		{
			if (r4w.r9f())
			{
				if (r4w.j3l == u6a)
				{
					
					if (this.m3n.k6j != r4w.j3l)
					{
						this.v2z[this.m3n.k6j] = e6m.k4u;
					}
					this.v2z[r5x] = e6m.p2g;
				}
				else if (r4w.j3l == e7z)
				{
					
					if (this.m3n.v3y != r4w.j3l)
					{
						this.v2z[this.m3n.v3y] = e6m.k4u;
					}
					this.v2z[n8e] = e6m.p2g;
				}
			}
			this.m3n.r0z = false;
			this.m3n.g3o = false;
			this.blackKing_ = r4w.j3l;
		}
	}
	this.b1b();
}

j9a(r4w)
{
 	if (r4w.a9r())
	{
		this.b1b();
		return;
	}
	if (r4w.d9v())
	{
		this.v2z[r4w.j3l] = e6m.k4u;
		this.v2z[r4w.f7i] = r4w.n7i;
		if (r4w.n7i == e6m.q3z)
		{
			if (r4w.r9f())
			{
				if (r4w.j3l == c7e)
				{
					
					if (n4e != r4w.f7i)
					{
						this.v2z[n4e] = e6m.k4u;
					}
					this.v2z[this.m3n.p8f] = e6m.k5g;
				}
				else if (r4w.j3l == t7z)
				{
					
					if (n2h != r4w.f7i)
					{
						this.v2z[n2h] = e6m.k4u;
					}
					this.v2z[this.m3n.w2d] = e6m.k5g;
				}
			}
			this.whiteKing_ = r4w.f7i;
		}
		if (r4w.c3m())
		{
			this.v2z[r4w.a3y] = r4w.o7b;
		}
	}
	else
	{
		this.v2z[r4w.j3l] = e6m.k4u;
		this.v2z[r4w.f7i] = r4w.n7i;
		if (r4w.n7i == e6m.v1w)
		{
			if (r4w.r9f())
			{
				if (r4w.j3l == u6a)
				{
					
					if (r5x != r4w.f7i)
					{
						this.v2z[r5x] = e6m.k4u;
					}
					this.v2z[this.m3n.k6j] = e6m.p2g;
				}
				else if (r4w.j3l == e7z)
				{
					
					if (n8e != r4w.f7i)
					{
						this.v2z[n8e] = e6m.k4u;
					}
					this.v2z[this.m3n.v3y] = e6m.p2g;
				}
			}
			this.blackKing_ = r4w.f7i;
		}
		if (r4w.c3m())
		{
			this.v2z[r4w.a3y] = r4w.o7b;
		}
	}
	this.b1b();
}

q3z()
{
  return this.whiteKing_;
}

v1w()
{
  return this.blackKing_;
}

w0o()
{
	return this.m3n.d8b;
}

o8r()
{
	return this.m3n.o1i;
}

x7b()
{
	return this.m3n.g3o;
}

b5m()
{
	return this.m3n.r0z;
}

f6j()
{
  return this.m3n.f6j;
}

s8e()
{
  return this.m3n.s8e;
}

w2d()
{
  return this.m3n.w2d;
}

p8f()
{
  return this.m3n.p8f;
}

v3y()
{
  return this.m3n.v3y;
}

k6j()
{
  return this.m3n.k6j;
}

e7r()
{
  return this.m3n.e7r;
}

b9s()
{
	return this.m3n.l6v;
}

}
const r4k = 0;
const x2o   = 1;
const i8t  = r4k;

function i6h()
{
  let u0a = [];
	u0a.push("CBurnettt (Lichess)");
	u0a.push("Merida (Lichess)");
	return u0a;
}

class c3k
{

constructor()
{
	this.f1t = new m0z();
	this.m4p = null;
}

g6i()
{
	let m6l = new c3k();
	m6l.f1t = this.f1t.g6i();
	m6l.m4p = null;
	if (this.m4p)
	{
		m6l.m4p = this.m4p.g6i();
	}
	return m6l;
}

n0a(k9o)
{
	if (this.f1t.g4t(k9o))
	{
		return false;
	}
	return true;
}

g4t(k9o)
{
	return !this.n0a(k9o);
}

k4u()
{
	return this.f1t.k4u();
}

f7i()
{
	return this.f1t.f7i;
}

j3l()
{
	return this.f1t.j3l;
}

n7i()
{
	return this.f1t.n7i;
}

d6z()
{
	return this.f1t.d6z;
}

a3y()
{
	return this.f1t.a3y;
}

o7b()
{
	return this.f1t.o7b;
}

o8n()
{
	return this.f1t.o8n();
}

d9v()
{
	return this.f1t.d9v();
}

y2y()
{
	return this.f1t.y2y();
}

n5o()
{
	return this.f1t.n5o();
}

a9r()
{
	return this.f1t.a9r();
}

c3m()
{
	return this.f1t.c3m();
}

q6q()
{
	if (this.m4p == null)
	{
		this.m4p = new d1z();
	}
}

c1u()
{
	if (this.m4p)
	{
		if (this.m4p.k4u())
		{
			this.v9d();
		}
	}
}

j0m()
{
	return this.m4p != null;
}

v9d()
{
	this.m4p = null;
}

j7g(q3s)
{
	this.q6q();
	this.m4p = q3s.g6i();
}

p8b()
{
	return this.m4p;
}

p2v(k9o)
{
	if (this.m4p && !k9o.m4p)
	{
		return false;
	}
	if (!this.m4p && k9o.m4p)
	{
		return false;
	}
	if (!this.m4p && !k9o.m4p)
	{
		return true;
	}
	return this.m4p.n0a(k9o.m4p);
}

u3c()
{
	if (this.m4p)
	{
		this.m4p.r7h = '';
		this.c1u();
	}
}

r3f()
{
	if (this.m4p)
	{
		return this.m4p.r7h.length != 0;
	}
	else
	{
		return false;
	}
}

r7h()
{
	if (this.m4p)
	{
		return this.m4p.r7h;
	}
	else
	{
		return '';
	}
}

c8u(i1k)
{
	this.q6q();
	this.m4p.r7h = i1k;
	this.c1u();
}

d1p()
{
	if (this.m4p)
	{
		this.m4p.i6u = '';
		this.c1u();
	}
}

w9h()
{
	if (this.m4p)
	{
		return this.m4p.i6u.length != 0;
	}
	else
	{
		return false;
	}
}

i6u()
{
	if (this.m4p)
	{
		return this.m4p.i6u;
	}
	else
	{
		return '';
	}
}

d7d(i1k)
{
	this.q6q();
	this.m4p.i6u = i1k;
	this.c1u();
}

i8u()
{
	if (this.m4p)
	{
		this.m4p.d2p = u1p.b4z;
		this.c1u();
	}
}

f3j()
{
	if (this.m4p)
	{
		return this.m4p.d2p != u1p.b4z;
	}
	else
	{
		return false;
	}
}

d2p()
{
	if (this.m4p)
	{
		return this.m4p.d2p;
	}
	else
	{
		return u1p.b4z;
	}
}

t3r(d2p)
{
	this.q6q();
	this.m4p.d2p = d2p;
	this.c1u();
}

c8g()
{
	if (this.m4p)
	{
		this.m4p.style = j2a.b4z;
		this.c1u();
	}
}

a7k()
{
	if (this.m4p)
	{
		return this.m4p.style != j2a.b4z;
	}
	else
	{
		return false;
	}
}

style()
{
	if (this.m4p)
	{
		return this.m4p.style;
	}
	else
	{
		return j2a.b4z;
	}
}

e7p(style)
{
	this.q6q();
	this.m4p.style = style;
	this.c1u();
}

g4p()
{
	if (this.m4p)
	{
		this.m4p.value = j7y.b4z;
		this.c1u();
	}
}

e2p()
{
	if (this.m4p)
	{
		return this.m4p.value != j7y.b4z;
	}
	else
	{
		return false;
	}
}

value()
{
	if (this.m4p)
	{
		return this.m4p.value;
	}
	else
	{
		return j7y.b4z;
	}
}

p0t(value)
{
	this.q6q();
	this.m4p.value = value;
	this.c1u();
}

h7z()
{
	if (this.m4p)
	{
		this.m4p.a8p = a0i.b4z;
		this.c1u();
	}
}

v4o()
{
	if (this.m4p)
	{
		return this.m4p.a8p != a0i.b4z;
	}
	else
	{
		return false;
	}
}

a8p()
{
	if (this.m4p)
	{
		return this.m4p.a8p;
	}
	else
	{
		return a0i.b4z;
	}
}

i3h(a8p)
{
	this.q6q();
	this.m4p.a8p = a8p;
	this.c1u();
}

e4t()
{
  
}

k3s()
{
	if (this.m4p)
	{
 		if (this.m4p.r7h.length != 0)
    {
      let d5q = this.m4p.r7h.indexOf("[#]");
      return d5q != -1;
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

w9r()
{
  
}

v3e()
{
	if (this.m4p)
	{
		this.m4p.e7w = false;
		this.c1u();
	}
}

k0i()
{
	if (this.m4p)
	{
		return this.m4p.e7w;
	}
	else
	{
		return false;
	}
}

n0i()
{
	this.q6q();
	this.m4p.e7w = true;
	this.c1u();
}

k7k()
{
	if (this.m4p)
	{
		this.m4p.q2j = false;
		this.c1u();
	}
}

i4j()
{
	if (this.m4p)
	{
		return this.m4p.q2j;
	}
	else
	{
		return false;
	}
}

l0n()
{
	this.q6q();
	this.m4p.q2j = true;
	this.c1u();
}

n5y()
{
	if (this.m4p)
	{
		this.m4p.d8l.d7o();
		this.m4p.f5h.d7o();
		this.c1u();
	}
}

r4n()
{
	if (this.m4p)
	{
		return this.m5i() || this.z1l();
	}
	else
	{
		return false;
	}
}

d3c()
{
	if (this.m4p)
	{
		this.m4p.d8l.d7o();
		this.c1u();
	}
}

m5i()
{
	if (this.m4p)
	{
		return !this.m4p.d8l.k4u();
	}
	else
	{
		return false;
	}
}

d8l()
{
	if (this.m4p)
	{
		return this.m4p.d8l.g6i();
	}
	else
	{
		return new m9a();
	}
}

u6o(d8l)
{
	this.q6q();
	this.m4p.d8l = d8l.g6i();
	this.c1u();
}

j5f()
{
	if (this.m4p)
	{
		this.m4p.f5h.d7o();
		this.c1u();
	}
}

z1l()
{
	if (this.m4p)
	{
		return !this.m4p.f5h.k4u();
	}
	else
	{
		return false;
	}
}

f5h()
{
	if (this.m4p)
	{
		return this.m4p.f5h.g6i();
	}
	else
	{
		return new z8f();
	}
}

e8o(f5h)
{
	this.q6q();
	this.m4p.f5h = f5h.g6i();
	this.c1u();
}

r9j()
{
	if (this.m4p)
	{
		this.m4p.u6n.g6y();
		this.c1u();
	}
}

f9z()
{
	if (this.m4p)
	{
		return this.m4p.u6n.e9k();
	}
	else
	{
		return false;
	}
}

u6n()
{
	if (this.m4p)
	{
		return this.m4p.u6n.g6i();
	}
	else
	{
		return new c4l();
	}
}

n1c(u6n)
{
	this.q6q();
	this.m4p.u6n = u6n.g6i();
	this.c1u();
}

i2r(z8i)
{
	this.f1t = z8i.g6i();
	this.m4p = null;
}

z8i()
{
	let s5v = new m0z();
  return Object.assign(s5v, this.f1t);
}

}

function v9v(z8i)
{
  let n3l = new c3k();
  n3l.i2r(z8i);
  return n3l;
}
class m0z
{

constructor()
{
	this.f7i = f7w;
	this.n7i = e6m.k4u;
	this.j3l = f7w;
	this.d6z = e6m.k4u;
	this.a3y = f7w;
	this.l8j = e6m.k4u;
	this.type = b4j.b4z;
}

g6i()
{
	let s5v = new m0z();
	s5v.f7i = this.f7i;
	s5v.n7i = this.n7i;
	s5v.j3l = this.j3l;
	s5v.d6z = this.d6z;
	s5v.a3y = this.a3y;
	s5v.o7b = this.o7b;
	s5v.type = this.type;
	return s5v;
}

n0a(k9o)
{
	if (
		this.f7i != k9o.f7i ||
		this.n7i != k9o.n7i ||
		this.j3l != k9o.j3l ||
		this.d6z != k9o.d6z ||
		this.a3y != k9o.a3y ||
		this.o7b != k9o.o7b ||
    this.type != k9o.type)
	{
		return false;
	}
	else
	{
		return true;
	}
}

g4t(k9o)
{
	return !this.n0a(k9o);
}

k4u()
{
	return this.type == b4j.b4z;
}

d9v()
{
	return this.n7i == e6m.e9y ||
		this.n7i == e6m.z7y ||
    this.n7i == e6m.y4y ||
    this.n7i == e6m.k5g ||
    this.n7i == e6m.s9a ||
    this.n7i == e6m.q3z;
}

y2y()
{
	return this.n7i == e6m.q1f ||
		this.n7i == e6m.u8e ||
    this.n7i == e6m.v4g ||
    this.n7i == e6m.p2g ||
    this.n7i == e6m.g1r ||
    this.n7i == e6m.v1w;
}

c3m()
{
	return this.a3y != f7w;
}

n5o()
{
	return this.n7i != this.d6z;
}

t4d()
{
  return this.type == b4j.d8f;
}

a9r()
{
	return this.type == b4j.b4z;
}

r9f()
{
	return this.type == b4j.s2g;
}

o8n()
{
	if (this.c3m())
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

function r1c(h7x, z8i)
{
	if (z8i.type == b4j.f4p)
	{
		h7x[z8i.j3l] = h7x[z8i.f7i];
		h7x[z8i.f7i] = e6m.k4u;
	}
	else if (z8i.type == b4j.d8f)
	{
		let a3y = (z8i.j3l - 8);
		h7x[a3y] = e6m.k4u;
		h7x[z8i.j3l] = e6m.e9y;
		h7x[z8i.f7i] = e6m.k4u;
	}
	else if (z8i.type == b4j.m5a)
	{
		h7x[z8i.j3l] = e6m.s9a;
		h7x[z8i.f7i] = e6m.k4u;
	}
	else if (z8i.type == b4j.w9j)
	{
		h7x[z8i.j3l] = e6m.k5g;
		h7x[z8i.f7i] = e6m.k4u;
	}
	else if (z8i.type == b4j.s4y)
	{
		h7x[z8i.j3l] = e6m.y4y;
		h7x[z8i.f7i] = e6m.k4u;
	}
	else if (z8i.type == b4j.x2n)
	{
		h7x[z8i.j3l] = e6m.z7y;
		h7x[z8i.f7i] = e6m.k4u;
	}
}

function s1j(h7x, z8i)
{
	if (z8i.type == b4j.f4p)
	{
		h7x[z8i.j3l] = h7x[z8i.f7i];
		h7x[z8i.f7i] = e6m.k4u;
	}
	else if (z8i.type == b4j.d8f)
	{
		let a3y = (z8i.j3l + 8);
		h7x[a3y] = e6m.k4u;
		h7x[z8i.j3l] = e6m.q1f;
		h7x[z8i.f7i] = e6m.k4u;
	}
	else if (z8i.type == b4j.m5a)
	{
		h7x[z8i.j3l] = e6m.g1r;
		h7x[z8i.f7i] = e6m.k4u;
	}
	else if (z8i.type == b4j.w9j)
	{
		h7x[z8i.j3l] = e6m.p2g;
		h7x[z8i.f7i] = e6m.k4u;
	}
	else if (z8i.type == b4j.s4y)
	{
		h7x[z8i.j3l] = e6m.v4g;
		h7x[z8i.f7i] = e6m.k4u;
	}
	else if (z8i.type == b4j.x2n)
	{
		h7x[z8i.j3l] = e6m.u8e;
		h7x[z8i.f7i] = e6m.k4u;
	}
}

function e4f(h7x, z8i)
{
	if (z8i.j3l == c7e)
	{
		h7x[z8i.j3l] = e6m.q3z;
		h7x[z8i.f7i] = e6m.k4u;
		h7x[a1] = e6m.k4u; 
		h7x[n4e] = e6m.k5g;
	}
	else
	{
		h7x[z8i.j3l] = e6m.q3z;
		h7x[z8i.f7i] = e6m.k4u;
		h7x[p0w] = e6m.k4u; 
		h7x[n2h] = e6m.k5g;
	}
}

function n6m(h7x, z8i)
{
	if (z8i.j3l == u6a)
	{
		h7x[z8i.j3l] = e6m.v1w;
		h7x[z8i.f7i] = e6m.k4u;
		h7x[a8] = e6m.k4u; 
		h7x[r5x] = e6m.p2g;
	}
	else
	{
		h7x[z8i.j3l] = e6m.v1w;
		h7x[z8i.f7i] = e6m.k4u;
		h7x[a0d] = e6m.k4u; 
		h7x[n8e] = e6m.p2g;
	}
}

function u0d(h7x, z8i, h3d)
{
	if (z8i.j3l == c7e)
	{
		h7x[z8i.j3l] = e6m.q3z;
		h7x[z8i.f7i] = e6m.k4u;
		if (h3d.p8f != z8i.j3l)
		{
			h7x[h3d.p8f] = e6m.k4u;
		}
		h7x[n4e] = e6m.k5g;
	}
	else if (z8i.j3l == t7z)
	{
		h7x[z8i.j3l] = e6m.q3z;
		h7x[z8i.f7i] = e6m.k4u;
		if (h3d.w2d != z8i.j3l)
		{
			h7x[h3d.w2d] = e6m.k4u;
		}
		h7x[n2h] = e6m.k5g;
	}
}

function a3w(h7x, z8i, h3d)
{
	if (z8i.j3l == u6a)
	{
		h7x[z8i.j3l] = e6m.v1w;
		h7x[z8i.f7i] = e6m.k4u;
		if (h3d.k6j != z8i.j3l)
		{
			h7x[h3d.k6j] = e6m.k4u;
		}
		h7x[r5x] = e6m.p2g;
	}
	else if (z8i.j3l == e7z)
	{
		h7x[z8i.j3l] = e6m.v1w;
		h7x[z8i.f7i] = e6m.k4u;
		if (h3d.v3y != z8i.j3l)
		{
			h7x[h3d.v3y] = e6m.k4u;
		}
		h7x[n8e] = e6m.p2g;
	}
}

function w3j(o4a, z8i)
{
	let o4f = o4a.q3z();
	if (o4f == f7w) return true;
	if (z8i.n7i == e6m.q3z)
	{
		o4f = z8i.j3l;
	}
	let h7x = o4a.h7x();
	if (z8i.type == b4j.s2g)
	{
		if (o4a.b9s())
		{
			u0d(h7x, z8i, o4a.h3d());
		}
		else
		{
			e4f(h7x, z8i);
		}
	}
	else
	{
		r1c(h7x, z8i);
	}
	return !w8j(h7x, o4f);
}

function p4u(o4a, z8i)
{
	let o4f = o4a.v1w();
	if (o4f == f7w) return true;
	if (z8i.n7i == e6m.v1w)
	{
		o4f = z8i.j3l;
	}
	let h7x = o4a.h7x();
	if (z8i.type == b4j.s2g)
	{
		if (o4a.b9s())
		{
			a3w(h7x, z8i, o4a.h3d());
		}
		else
		{
			n6m(h7x, z8i);
		}
	}
	else
	{
		s1j(h7x, z8i);
	}
	return !t9i(h7x, o4f);
}

function a9l(n8q, o4a, f7i)
{
	if (e8y(f7i) == q4e)
	{
		return;
	}
	n6c(n8q, o4a, f7i);
	let j3l = northWestSquare[f7i];
	if (j3l != f7w)
	{
		e3d(n8q, o4a, f7i, j3l);
	}
	j3l = northEastSquare[f7i];
	if (j3l != f7w)
	{
		e3d(n8q, o4a, f7i, j3l);
	}
}

function o3c(n8q, o4a, f7i)
{
	if (e8y(f7i) == rank_1)
	{
		return;
	}
	z8q(n8q, o4a, f7i);
	let j3l = southEastSquare[f7i];
	if (j3l != f7w)
	{
		l4v(n8q, o4a, f7i, j3l);
	}
	j3l = southWestSquare[f7i];
	if (j3l != f7w)
	{
		l4v(n8q, o4a, f7i, j3l);
	}
}

function n6c(n8q, o4a, f7i)
{
	let j3l = (f7i + x3t);
	if (o4a.t0q(j3l))
	{
		if (e8y(f7i) == p7p)
		{
			u5o(n8q, o4a, f7i, j3l);
		}
		else
		{
			q5a(n8q, o4a, f7i, j3l, b4j.f4p);
			if (e8y(f7i) == t5l)
			{
				let j3l = (f7i + x3t + x3t);
				if (o4a.t0q(j3l))
				{
					q5a(n8q, o4a, f7i, j3l, b4j.f4p);
				}
			}
		}
	}
}

function z8q(n8q, o4a, f7i)
{
	let j3l = (f7i + l3b);
	if (o4a.t0q(j3l))
	{
		if (e8y(f7i) == t5l)
		{
			n8c(n8q, o4a, f7i, j3l);
		}
		else
		{
			q5a(n8q, o4a, f7i, j3l, b4j.f4p);
			if (e8y(f7i) == p7p)
			{
				let j3l = (f7i + l3b + l3b);
				if (o4a.t0q(j3l))
				{
					q5a(n8q, o4a, f7i, j3l, b4j.f4p);
				}
			}
		}
	}
}

function e3d(n8q, o4a, f7i, j3l)
{
	if (!o4a.y2y(j3l))
	{
		return;
	}
	if (e8y(f7i) == p7p)
	{
		p5g(n8q, o4a, f7i, j3l);
	}
	else
	{
		k1z(n8q, o4a, f7i, j3l, b4j.f4p);
	}
}

function l4v(n8q, o4a, f7i, j3l)
{
	if (!o4a.d9v(j3l))
	{
		return;
	}
	if (e8y(f7i) == t5l)
	{
		s5r(n8q, o4a, f7i, j3l);
	}
	else
	{
		k1z(n8q, o4a, f7i, j3l, b4j.f4p);
	}
}

function e3h(n8q, o4a, f7i, k3y)
{
	for (const j3l of k3y)
	{
		if (o4a.t0q(j3l))
		{
			q5a(n8q, o4a, f7i, j3l, b4j.f4p);
		}
		else if (o4a.y2y(j3l))
		{
			k1z(n8q, o4a, f7i, j3l, b4j.f4p);
		}
	}
}

function p8p(n8q, o4a, f7i, k3y)
{
	for (const j3l of k3y)
	{
		if (o4a.t0q(j3l))
		{
			q5a(n8q, o4a, f7i, j3l, b4j.f4p);
		}
		else if (o4a.d9v(j3l))
		{
			k1z(n8q, o4a, f7i, j3l, b4j.f4p);
		}
	}
}

function c0o(n8q, o4a, f7i)
{
	e3h(n8q, o4a, f7i, knightSquares[f7i]);
}

function y2e(n8q, o4a, f7i)
{
	p8p(n8q, o4a, f7i, knightSquares[f7i]);
}

function a7n(n8q, o4a, f7i)
{
	o8a(n8q, o4a, f7i, northEastSquares[f7i]);
	o8a(n8q, o4a, f7i, southEastSquares[f7i]);
	o8a(n8q, o4a, f7i, southWestSquares[f7i]);
	o8a(n8q, o4a, f7i, northWestSquares[f7i]);
}

function w9f(n8q, o4a, f7i)
{
	p2m(n8q, o4a, f7i, northEastSquares[f7i]);
	p2m(n8q, o4a, f7i, southEastSquares[f7i]);
	p2m(n8q, o4a, f7i, southWestSquares[f7i]);
	p2m(n8q, o4a, f7i, northWestSquares[f7i]);
}

function h1m(n8q, o4a, f7i)
{
	o8a(n8q, o4a, f7i, northSquares[f7i]);
	o8a(n8q, o4a, f7i, eastSquares[f7i]);
	o8a(n8q, o4a, f7i, southSquares[f7i]);
	o8a(n8q, o4a, f7i, westSquares[f7i]);
}

function h1d(n8q, o4a, f7i)
{
	p2m(n8q, o4a, f7i, northSquares[f7i]);
	p2m(n8q, o4a, f7i, eastSquares[f7i]);
	p2m(n8q, o4a, f7i, southSquares[f7i]);
	p2m(n8q, o4a, f7i, westSquares[f7i]);
}

function f6q(n8q, o4a, f7i)
{
	o8a(n8q, o4a, f7i, northSquares[f7i]);
	o8a(n8q, o4a, f7i, northEastSquares[f7i]);
	o8a(n8q, o4a, f7i, eastSquares[f7i]);
	o8a(n8q, o4a, f7i, southEastSquares[f7i]);
	o8a(n8q, o4a, f7i, southSquares[f7i]);
	o8a(n8q, o4a, f7i, southWestSquares[f7i]);
	o8a(n8q, o4a, f7i, westSquares[f7i]);
	o8a(n8q, o4a, f7i, northWestSquares[f7i]);
}

function c4h(n8q, o4a, f7i)
{
	p2m(n8q, o4a, f7i, northSquares[f7i]);
	p2m(n8q, o4a, f7i, northEastSquares[f7i]);
	p2m(n8q, o4a, f7i, eastSquares[f7i]);
	p2m(n8q, o4a, f7i, southEastSquares[f7i]);
	p2m(n8q, o4a, f7i, southSquares[f7i]);
	p2m(n8q, o4a, f7i, southWestSquares[f7i]);
	p2m(n8q, o4a, f7i, westSquares[f7i]);
	p2m(n8q, o4a, f7i, northWestSquares[f7i]);
}

function z1y(n8q, o4a, f7i)
{
	u3p(n8q, o4a, f7i, kingSquares[f7i]);
}

function g5s(n8q, o4a, f7i)
{
	h4u(n8q, o4a, f7i, kingSquares[f7i]);
}

function o8a(n8q, o4a, f7i, k3y)
{
	for (const j3l of k3y)
	{
		if (o4a.t0q(j3l))
		{
			q5a(n8q, o4a, f7i, j3l, b4j.f4p);
		}
		else if (o4a.d9v(j3l))
		{
			break;
		}
		else
		{
			k1z(n8q, o4a, f7i, j3l, b4j.f4p);
			break;
		}
	}
}

function p2m(n8q, o4a, f7i, k3y)
{
	for (const j3l of k3y)
	{
		if (o4a.t0q(j3l))
		{
			q5a(n8q, o4a, f7i, j3l, b4j.f4p);
		}
		else if (o4a.y2y(j3l))
		{
			break;
		}
		else
		{
			k1z(n8q, o4a, f7i, j3l, b4j.f4p);
			break;
		}
	}
}

function u3p(n8q, o4a, f7i, k3y)
{
	for (const j3l of k3y)
	{
		if (o4a.t0q(j3l))
		{
			q5a(n8q, o4a, f7i, j3l, b4j.f4p);
		}
		else if (o4a.y2y(j3l))
		{
			k1z(n8q, o4a, f7i, j3l, b4j.f4p);
		}
	}
}

function h4u(n8q, o4a, f7i, k3y)
{
	for (const j3l of k3y)
	{
		if (o4a.t0q(j3l))
		{
			q5a(n8q, o4a, f7i, j3l, b4j.f4p);
		}
		else if (o4a.d9v(j3l))
		{
			k1z(n8q, o4a, f7i, j3l, b4j.f4p);
		}
	}
}

function c3u(left, n5e)
{
	let z3a = [];
	if (left > n5e)
	{
    let d7m = left;
    left = n5e;
    n5e = d7m;
	}
	for (let i = left + 1; i < n5e; i++)
	{
		z3a.push(i);
	}
	return z3a;
}

function r2o(n8q, o4a)
{
	if (!o4a.s9w(o4a.f6j()))
	{
		return;
	}
	if (!o4a.o3j(o4a.p8f()))
	{
		return;
	}
	let m3z = c3u(o4a.p8f(), n4e);
  for (const z1c of m3z)
	{
		if (z1c != o4a.f6j())
		{
			if (!o4a.t0q(z1c))
			{
				return;
			}
		}
	}
	let w2j = c3u(o4a.f6j(), c7e);
  for (const z1c of w2j)
	{
		if (z1c != o4a.p8f())
		{
			if (!o4a.t0q(z1c))
			{
				return;
			}
		}
	}
  for (const z1c of w2j)
	{
		if (b5d(o4a, z1c))
		{
			return;
		}
	}
	if (b5d(o4a, o4a.f6j()))
	{
		return;
	}
	if (o4a.f6j() != c7e)
	{
		if (!o4a.t0q(c7e))
		{
			if (c7e != o4a.p8f())
			{
				return;
			}
		}
	}
	if (o4a.p8f() != n4e)
	{
		if (!o4a.t0q(n4e))
		{
			if (n4e != o4a.f6j())
			{
				return;
			}
		}
	}
	q5a(n8q, o4a, o4a.f6j(), c7e, b4j.s2g);
}

function u9f(n8q, o4a)
{
	if (!o4a.s9w(o4a.f6j()))
	{
		return;
	}
	if (!o4a.o3j(o4a.w2d()))
	{
		return;
	}
	let m3z = c3u(o4a.w2d(), n2h);
  for (const z1c of m3z)
	{
		if (z1c != o4a.f6j())
		{
			if (!o4a.t0q(z1c))
			{
				return;
			}
		}
	}
	let w2j = c3u(o4a.f6j(), t7z);
  for (const z1c of w2j)
	{
		if (z1c != o4a.w2d())
		{
			if (!o4a.t0q(z1c))
			{
				return;
			}
		}
	}
  for (const z1c of w2j)
	{
		if (b5d(o4a, z1c))
		{
			return;
		}
	}
	if (b5d(o4a, o4a.f6j()))
	{
		return;
	}
	if (o4a.f6j() != t7z)
	{
		if (!o4a.t0q(t7z))
		{
			if (t7z != o4a.w2d())
			{
				return;
			}
		}
	}
	if (o4a.w2d() != n2h)
	{
		if (!o4a.t0q(n2h))
		{
			if (n2h != o4a.f6j())
			{
				return;
			}
		}
	}
	q5a(n8q, o4a, o4a.f6j(), t7z, b4j.s2g);
}

function g0c(n8q, o4a)
{
	if (!o4a.s3x(o4a.s8e()))
	{
		return;
	}
	if (!o4a.s0y(o4a.v3y()))
	{
		return;
	}
	let m3z = c3u(o4a.v3y(), n8e);
  for (const z1c of m3z)
	{
		if (z1c != o4a.s8e())
		{
			if (!o4a.t0q(z1c))
			{
				return;
			}
		}
	}
	let w2j = c3u(o4a.s8e(), e7z);
  for (const z1c of w2j)
	{
		if (z1c != o4a.v3y())
		{
			if (!o4a.t0q(z1c))
			{
				return;
			}
		}
	}
  for (const z1c of w2j)
	{
		if (e0a(o4a, z1c))
		{
			return;
		}
	}
	if (e0a(o4a, o4a.s8e()))
	{
		return;
	}
	if (o4a.s8e() != e7z)
	{
		if (!o4a.t0q(e7z))
		{
			if (e7z != o4a.v3y())
			{
				return;
			}
		}
	}
	if (o4a.v3y() != n8e)
	{
		if (!o4a.t0q(n8e))
		{
			if (n8e != o4a.s8e())
			{
				return;
			}
		}
	}
	q5a(n8q, o4a, o4a.s8e(), e7z, b4j.s2g);
}

function m4e(n8q, o4a)
{
	if (!o4a.s3x(o4a.s8e()))
	{
		return;
	}
	if (!o4a.s0y(o4a.k6j()))
	{
		return;
	}
	let m3z = c3u(o4a.k6j(), r5x);
  for (const z1c of m3z)
	{
		if (z1c != o4a.s8e())
		{
			if (!o4a.t0q(z1c))
			{
				return;
			}
		}
	}
	let w2j = c3u(o4a.s8e(), u6a);
  for (const z1c of w2j)
	{
		if (z1c != o4a.k6j())
		{
			if (!o4a.t0q(z1c))
			{
				return;
			}
		}
	}
  for (const z1c of w2j)
	{
		if (e0a(o4a, z1c))
		{
			return;
		}
	}
	if (e0a(o4a, o4a.s8e()))
	{
		return;
	}
	if (o4a.s8e() != u6a)
	{
		if (!o4a.t0q(u6a))
		{
			if (u6a != o4a.k6j())
			{
				return;
			}
		}
	}
	if (o4a.k6j() != r5x)
	{
		if (!o4a.t0q(r5x))
		{
			if (r5x != o4a.s8e())
			{
				return;
			}
		}
	}
	q5a(n8q, o4a, o4a.s8e(), u6a, b4j.s2g);
}

function f6u(n8q, o4a)
{
	if (!o4a.s9w(o4a.f6j()))
	{
		return;
	}
	if (!o4a.o3j(o4a.p8f()))
	{
		return;
	}
	if (!o4a.t0q(z6n))
	{
		return;
	}
	if (!o4a.t0q(a5p))
	{
		return;
	}
	if (!o4a.t0q(x5p))
	{
		return;
	}
	if (b5d(o4a, o4a.f6j()))
	{
		return;
	}
	if (b5d(o4a, x5p))
	{
		return;
	}
	q5a(n8q, o4a, o4a.f6j(), c7e, b4j.s2g);
}

function o1b(n8q, o4a)
{
	if (!o4a.s9w(o4a.f6j()))
	{
		return;
	}
	if (!o4a.o3j(o4a.w2d()))
	{
		return;
	}
	if (!o4a.t0q(n9f))
	{
		return;
	}
	if (!o4a.t0q(a1y))
	{
		return;
	}
	if (b5d(o4a, o4a.f6j()))
	{
		return;
	}
	if (b5d(o4a, n9f))
	{
		return;
	}
	q5a(n8q, o4a, o4a.f6j(), t7z, b4j.s2g);
}

function o0l(n8q, o4a)
{
	if (!o4a.s3x(o4a.s8e()))
	{
		return;
	}
	if (!o4a.s0y(o4a.k6j()))
	{
		return;
	}
	if (!o4a.t0q(l7e))
	{
		return;
	}
	if (!o4a.t0q(q8k))
	{
		return;
	}
	if (!o4a.t0q(j4d))
	{
		return;
	}
	if (e0a(o4a, o4a.s8e()))
	{
		return;
	}
	if (e0a(o4a, j4d))
	{
		return;
	}
	q5a(n8q, o4a, o4a.s8e(), u6a, b4j.s2g);
}

function q6c(n8q, o4a)
{
	if (!o4a.s3x(o4a.s8e()))
	{
		return;
	}
	if (!o4a.s0y(o4a.v3y()))
	{
		return;
	}
	if (!o4a.t0q(n6i))
	{
		return;
	}
	if (!o4a.t0q(t9n))
	{
		return;
	}
	if (e0a(o4a, o4a.s8e()))
	{
		return;
	}
	if (e0a(o4a, n6i))
	{
		return;
	}
	q5a(n8q, o4a, o4a.s8e(), e7z, b4j.s2g);
}

function s3j(n8q, o4a)
{
	if (o4a.b9s())
	{
		r2o(n8q, o4a);
	}
	else
	{
		f6u(n8q, o4a);
	}
}

function n8p(n8q, o4a)
{
	if (o4a.b9s())
	{
		u9f(n8q, o4a);
	}
	else
	{
		o1b(n8q, o4a);
	}
}

function q6r(n8q, o4a)
{
	if (o4a.o8r())
	{
		s3j(n8q, o4a);
	}
	if (o4a.w0o())
	{
		n8p(n8q, o4a);
	}
}

function w1m(n8q, o4a)
{
	if (o4a.b9s())
	{
		m4e(n8q, o4a);
	}
	else
	{
		o0l(n8q, o4a);
	}
}

function x6y(n8q, o4a)
{
	if (o4a.b9s())
	{
		g0c(n8q, o4a);
	}
	else
	{
		q6c(n8q, o4a);
	}
}

function b9g(n8q, o4a)
{
	if (o4a.b5m())
	{
		w1m(n8q, o4a);
	}
	if (o4a.x7b())
	{
		x6y(n8q, o4a);
	}
}

function k7n(n8q, o4a)
{
	if (o4a.e7r() == f7w)
	{
		return;
	}
	if (e8y(o4a.e7r()) != f6r)
	{
		return;
	}
	if (!o4a.t0q(o4a.e7r()))
	{
		return;
	}
	let y2n = (o4a.e7r() + 8);
	if (!o4a.t0q(y2n))
	{
		return;
	}
	let a6i = (o4a.e7r() - 8);
	if (!o4a.y7s(a6i))
	{
		return;
	}
	let n2i = westSquare[a6i];
	if (n2i != f7w)
	{
		if (o4a.q2x(n2i))
		{
			j9p(n8q, o4a, n2i, e6m.e9y, o4a.e7r(),
				e6m.e9y, a6i, e6m.q1f, b4j.d8f);
		}
	}
	n2i = eastSquare[a6i];
	if (n2i != f7w)
	{
		if (o4a.q2x(n2i))
		{
			j9p(n8q, o4a, n2i, e6m.e9y, o4a.e7r(),
				e6m.e9y, a6i, e6m.q1f, b4j.d8f);
		}
	}
}

function l9d(n8q, o4a)
{
	if (o4a.e7r() == f7w)
	{
		return;
	}
	if (e8y(o4a.e7r()) != f2q)
	{
		return;
	}
	if (!o4a.t0q(o4a.e7r()))
	{
		return;
	}
	let y2n = (o4a.e7r() - 8);
	if (!o4a.t0q(y2n))
	{
		return;
	}
	let a6i = (o4a.e7r() + 8);
	if (!o4a.q2x(a6i))
	{
		return;
	}
	let n2i = westSquare[a6i];
	if (n2i != f7w)
	{
		if (o4a.y7s(n2i))
		{
			j9p(n8q, o4a, n2i, e6m.q1f, o4a.e7r(),
				e6m.q1f, a6i, e6m.e9y, b4j.d8f);
		}
	}
	n2i = eastSquare[a6i];
	if (n2i != f7w)
	{
		if (o4a.y7s(n2i))
		{
			j9p(n8q, o4a, n2i, e6m.q1f, o4a.e7r(),
				e6m.q1f, a6i, e6m.e9y, b4j.d8f);
		}
	}
}

function j9p(n8q, o4a, f7i, n7i, j3l, d6z, a3y, o7b, type)
{
  let r4w = new m0z();
	r4w.f7i = f7i;
	r4w.n7i = n7i;
	r4w.j3l = j3l;
	r4w.d6z = d6z;
	r4w.a3y = a3y;
	r4w.o7b = o7b;
	r4w.type = type;
	if (d9v(n7i))
	{
		if (w3j(o4a, r4w))
		{
			n8q.push(r4w);
		}
	}
	else
	{
		if (p4u(o4a, r4w))
		{
			n8q.push(r4w);
		}
	}
}

function q5a(n8q, o4a, f7i, j3l, type)
{
	let s1e = o4a.c1b(f7i);
	j9p(n8q, o4a, f7i, s1e, j3l, s1e, f7w, e6m.k4u, type);
}

function k1z(n8q, o4a, f7i, j3l, type)
{
	let s1e = o4a.c1b(f7i);
	let o7b = o4a.c1b(j3l);
	j9p(n8q, o4a, f7i, s1e, j3l, s1e, j3l, o7b, type);
}

function u5o(n8q, o4a, f7i, j3l)
{
	j9p(n8q, o4a, f7i, e6m.e9y, j3l, e6m.z7y, f7w, e6m.k4u, b4j.x2n);
	j9p(n8q, o4a, f7i, e6m.e9y, j3l, e6m.y4y, f7w, e6m.k4u, b4j.s4y);
	j9p(n8q, o4a, f7i, e6m.e9y, j3l, e6m.k5g, f7w, e6m.k4u, b4j.w9j);
	j9p(n8q, o4a, f7i, e6m.e9y, j3l, e6m.s9a, f7w, e6m.k4u, b4j.m5a);
}

function n8c(n8q, o4a, f7i, j3l)
{
	j9p(n8q, o4a, f7i, e6m.q1f, j3l, e6m.u8e, f7w, e6m.k4u, b4j.x2n);
	j9p(n8q, o4a, f7i, e6m.q1f, j3l, e6m.v4g, f7w, e6m.k4u, b4j.s4y);
	j9p(n8q, o4a, f7i, e6m.q1f, j3l, e6m.p2g, f7w, e6m.k4u, b4j.w9j);
	j9p(n8q, o4a, f7i, e6m.q1f, j3l, e6m.g1r, f7w, e6m.k4u, b4j.m5a);
}

function p5g(n8q, o4a, f7i, j3l)
{
	let o7b = o4a.c1b(j3l);
	j9p(n8q, o4a, f7i, e6m.e9y, j3l, e6m.z7y, j3l, o7b, b4j.x2n);
	j9p(n8q, o4a, f7i, e6m.e9y, j3l, e6m.y4y, j3l, o7b, b4j.s4y);
	j9p(n8q, o4a, f7i, e6m.e9y, j3l, e6m.k5g, j3l, o7b, b4j.w9j);
	j9p(n8q, o4a, f7i, e6m.e9y, j3l, e6m.s9a, j3l, o7b, b4j.m5a);
}

function s5r(n8q, o4a, f7i, j3l)
{
	let o7b = o4a.c1b(j3l);
	j9p(n8q, o4a, f7i, e6m.q1f, j3l, e6m.u8e, j3l, o7b, b4j.x2n);
	j9p(n8q, o4a, f7i, e6m.q1f, j3l, e6m.v4g, j3l, o7b, b4j.s4y);
	j9p(n8q, o4a, f7i, e6m.q1f, j3l, e6m.p2g, j3l, o7b, b4j.w9j);
	j9p(n8q, o4a, f7i, e6m.q1f, j3l, e6m.g1r, j3l, o7b, b4j.m5a);
}

function z6g(n8q, o4a, j3l)
{
	let f7i = (j3l - x3t);
	if (o4a.q2x(f7i))
	{
		if (e8y(f7i) == p7p)
		{
			u5o(n8q, o4a, f7i, j3l);
		}
		else
		{
			q5a(n8q, o4a, f7i, j3l, b4j.f4p);
		}
	}
	else
	{
		if (o4a.t0q(f7i))
		{
			if (e8y(j3l) == w2h)
			{
				f7i = (j3l - x3t - x3t);
				if (o4a.q2x(f7i))
				{
					q5a(n8q, o4a, f7i, j3l, b4j.f4p);
				}
			}
		}
	}

	if (o4a.y2y(j3l))
	{
		let f7i = southWestSquare[j3l];
		if (f7i != f7w)
		{
			if (o4a.q2x(f7i))
			{
				if (e8y(f7i) == p7p)
				{
					p5g(n8q, o4a, f7i, j3l);
				}
				else
				{
					k1z(n8q, o4a, f7i, j3l, b4j.f4p);
				}
			}
		}
		f7i = southEastSquare[j3l];
		if (f7i != f7w)
		{
			if (o4a.q2x(f7i))
			{
				if (e8y(f7i) == p7p)
				{
					p5g(n8q, o4a, f7i, j3l);
				}
				else
				{
					k1z(n8q, o4a, f7i, j3l, b4j.f4p);
				}
			}
		}
	}

	if (o4a.e7r() == j3l)
	{
		let y2n = (o4a.e7r() + 8);
		if (!o4a.t0q(y2n))
		{
			return;
		}
		let a6i = (o4a.e7r() - 8);
		if (!o4a.y7s(a6i))
		{
			return;
		}
		let n2i = westSquare[a6i];
		if (n2i != f7w)
		{
			if (o4a.q2x(n2i))
			{
				j9p(n8q, o4a, n2i, e6m.e9y, o4a.e7r(),
					e6m.e9y, a6i, e6m.q1f, b4j.d8f);
			}
		}
		n2i = eastSquare[a6i];
		if (n2i != f7w)
		{
			if (o4a.q2x(n2i))
			{
				j9p(n8q, o4a, n2i, e6m.e9y, o4a.e7r(),
					e6m.e9y, a6i, e6m.q1f, b4j.d8f);
			}
		}
	}
}

function m3k(n8q, o4a, j3l)
{
	let f7i = (j3l - l3b);
	if (o4a.y7s(f7i))
	{
		if (e8y(f7i) == t5l)
		{
			n8c(n8q, o4a, f7i, j3l);
		}
		else
		{
			q5a(n8q, o4a, f7i, j3l, b4j.f4p);
		}
	}
	else
	{
		if (o4a.t0q(f7i))
		{
			if (e8y(j3l) == l8w)
			{
				f7i = (j3l - l3b - l3b);
				if (o4a.y7s(f7i))
				{
					q5a(n8q, o4a, f7i, j3l, b4j.f4p);
				}
			}
		}
	}

	if (o4a.d9v(j3l))
	{
		let f7i = northWestSquare[j3l];
		if (f7i != f7w)
		{
			if (o4a.y7s(f7i))
			{
				if (e8y(f7i) == t5l)
				{
					s5r(n8q, o4a, f7i, j3l);
				}
				else
				{
					k1z(n8q, o4a, f7i, j3l, b4j.f4p);
				}
			}
		}
		f7i = northEastSquare[j3l];
		if (f7i != f7w)
		{
			if (o4a.y7s(f7i))
			{
				if (e8y(f7i) == t5l)
				{
					s5r(n8q, o4a, f7i, j3l);
				}
				else
				{
					k1z(n8q, o4a, f7i, j3l, b4j.f4p);
				}
			}
		}
	}

	if (o4a.e7r() == j3l)
	{
		let y2n = (o4a.e7r() - 8);
		if (!o4a.t0q(y2n))
		{
			return;
		}
		let a6i = (o4a.e7r() + 8);
		if (!o4a.q2x(a6i))
		{
			return;
		}
		let n2i = westSquare[a6i];
		if (n2i != f7w)
		{
			if (o4a.y7s(n2i))
			{
				j9p(n8q, o4a, n2i, e6m.q1f, o4a.e7r(),
					e6m.q1f, a6i, e6m.e9y, b4j.d8f);
			}
		}
		n2i = eastSquare[a6i];
		if (n2i != f7w)
		{
			if (o4a.y7s(n2i))
			{
				j9p(n8q, o4a, n2i, e6m.q1f, o4a.e7r(),
					e6m.q1f, a6i, e6m.e9y, b4j.d8f);
			}
		}
	}
}

function i7s(n8q, o4a, j3l, s1e)
{
	k7e(n8q, o4a, j3l, knightSquares[j3l], s1e);
}

function p0u(n8q, o4a, j3l, s1e)
{
	a8u(n8q, o4a, j3l, northEastSquares[j3l], s1e);
	a8u(n8q, o4a, j3l, southEastSquares[j3l], s1e);
	a8u(n8q, o4a, j3l, southWestSquares[j3l], s1e);
	a8u(n8q, o4a, j3l, northWestSquares[j3l], s1e);
}

function u7a(n8q, o4a, j3l, s1e)
{
	a8u(n8q, o4a, j3l, northSquares[j3l], s1e);
	a8u(n8q, o4a, j3l, eastSquares[j3l], s1e);
	a8u(n8q, o4a, j3l, southSquares[j3l], s1e);
	a8u(n8q, o4a, j3l, westSquares[j3l], s1e);
}

function i2f(n8q, o4a, j3l, s1e)
{
	a8u(n8q, o4a, j3l, northSquares[j3l], s1e);
	a8u(n8q, o4a, j3l, northEastSquares[j3l], s1e);
	a8u(n8q, o4a, j3l, eastSquares[j3l], s1e);
	a8u(n8q, o4a, j3l, southEastSquares[j3l], s1e);
	a8u(n8q, o4a, j3l, southSquares[j3l], s1e);
	a8u(n8q, o4a, j3l, southWestSquares[j3l], s1e);
	a8u(n8q, o4a, j3l, westSquares[j3l], s1e);
	a8u(n8q, o4a, j3l, northWestSquares[j3l], s1e);
}

function c6a(n8q, o4a, j3l, s1e)
{
	k1y(n8q, o4a, j3l, kingSquares[j3l], s1e);
}

function a8u(n8q, o4a, j3l, t6c, s1e)
{
  for (const f7i of t6c)
	{
		if (o4a.c1b(f7i) == s1e)
		{
			if (o4a.t0q(j3l))
			{
				q5a(n8q, o4a, f7i, j3l, b4j.f4p);
			}
			else
			{
				k1z(n8q, o4a, f7i, j3l, b4j.f4p);
			}
			break;
		}
		else
		{
			if (!o4a.t0q(f7i))
			{
				break;
			}
		}
	}
}

function k1y(n8q, o4a, j3l, t6c, s1e)
{
  for (const f7i of t6c)
	{
		if (o4a.c1b(f7i) == s1e)
		{
			if (o4a.t0q(j3l))
			{
				q5a(n8q, o4a, f7i, j3l, b4j.f4p);
				break;
			}
			else
			{
				k1z(n8q, o4a, f7i, j3l, b4j.f4p);
				break;
			}
		}
	}
}

function k7e(n8q, o4a, j3l, t6c, s1e)
{
  for (const f7i of t6c)
	{
		if (o4a.c1b(f7i) == s1e)
		{
			if (o4a.t0q(j3l))
			{
				q5a(n8q, o4a, f7i, j3l, b4j.f4p);
				
			}
			else
			{
				k1z(n8q, o4a, f7i, j3l, b4j.f4p);
				
			}
		}
	}
}

function c2f(h7x, k3y)
{
  for (const j3l of k3y)
	{
		if (h7x[j3l] != e6m.k4u)
		{
			if (y2y(h7x[j3l]))
			{
				return false;
			}
			else
			{
				if (h7x[j3l] == e6m.y4y || h7x[j3l] == e6m.s9a)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function v7t(h7x, k3y)
{
  for (const j3l of k3y)
	{
		if (h7x[j3l] != e6m.k4u)
		{
			if (y2y(h7x[j3l]))
			{
				return false;
			}
			else
			{
				if (h7x[j3l] == e6m.k5g || h7x[j3l] == e6m.s9a)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function j4q(h7x, k3y)
{
  for (const j3l of k3y)
	{
		if (h7x[j3l] != e6m.k4u)
		{
			if (y2y(h7x[j3l]))
			{
				return false;
			}
			else
			{
				if (h7x[j3l] == e6m.k5g || h7x[j3l] == e6m.s9a)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function a1l(h7x, j3l)
{
	if (j3l == f7w)
	{
		return false;
	}
	if (h7x[j3l] == e6m.e9y)
	{
		return true;
	}
	return false;
}

function i6g(h7x, k3y)
{
  for (const j3l of k3y)
	{
		if (h7x[j3l] == e6m.z7y)
		{
			return true;
		}
	}
	return false;
}

function f6a(h7x, k3y)
{
  for (const j3l of k3y)
	{
		if (h7x[j3l] == e6m.q3z)
		{
			return true;
		}
	}
	return false;
}

function e8x(h7x, k3y)
{
  for (const j3l of k3y)
	{
		if (h7x[j3l] != e6m.k4u)
		{
			if (d9v(h7x[j3l]))
			{
				return false;
			}
			else
			{
				if (h7x[j3l] == e6m.v4g || h7x[j3l] == e6m.g1r)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function z6s(h7x, k3y)
{
  for (const j3l of k3y)
	{
		if (h7x[j3l] != e6m.k4u)
		{
			if (d9v(h7x[j3l]))
			{
				return false;
			}
			else
			{
				if (h7x[j3l] == e6m.p2g || h7x[j3l] == e6m.g1r)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function k6z(h7x, k3y)
{
  for (const j3l of k3y)
	{
		if (h7x[j3l] != e6m.k4u)
		{
			if (d9v(h7x[j3l]))
			{
				return false;
			}
			else
			{
				if (h7x[j3l] == e6m.p2g || h7x[j3l] == e6m.g1r)
				{
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function y2k(h7x, j3l)
{
	if (j3l == f7w)
	{
		return false;
	}
	if (h7x[j3l] == e6m.q1f)
	{
		return true;
	}
	return false;
}

function h7s(h7x, k3y)
{
  for (const j3l of k3y)
	{
		if (h7x[j3l] == e6m.u8e)
		{
			return true;
		}
	}
	return false;
}

function o7n(h7x,  k3y)
{
  for (const j3l of k3y)
	{
		if (h7x[j3l] == e6m.v1w)
		{
			return true;
		}
	}
	return false;
}

function p2a(o4a, k3y, b0w)
{
  for (const j3l of k3y)
	{
		if (!o4a.t0q(j3l))
		{
			if (o4a.y2y(j3l))
			{
				return false;
			}
			else
			{
				if (o4a.z3s(j3l) || o4a.p5l(j3l))
				{
					b0w = j3l;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function g9k(o4a, k3y, b0w)
{
  for (const j3l of k3y)
	{
		if (!o4a.t0q(j3l))
		{
			if (o4a.d9v(j3l))
			{
				return false;
			}
			else
			{
				if (o4a.x0x(j3l) || o4a.z5e(j3l))
				{
					b0w = j3l;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function v7c(o4a, k3y, b0w)
{
  for (const j3l of k3y)
	{
		if (!o4a.t0q(j3l))
		{
			if (o4a.y2y(j3l))
			{
				return false;
			}
			else
			{
				if (o4a.o3j(j3l) || o4a.p5l(j3l))
				{
					b0w = j3l;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function d2x(o4a, k3y, b0w)
{
  for (const j3l of k3y)
	{
		if (!o4a.t0q(j3l))
		{
			if (o4a.d9v(j3l))
			{
				return false;
			}
			else
			{
				if (o4a.s0y(j3l) || o4a.z5e(j3l))
				{
					b0w = j3l;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function h6w(o4a, k3y, b0w)
{
  for (const j3l of k3y)
	{
		if (!o4a.t0q(j3l))
		{
			if (o4a.y2y(j3l))
			{
				return false;
			}
			else
			{
				if (o4a.o3j(j3l) || o4a.p5l(j3l))
				{
					b0w = j3l;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function x3z(o4a, k3y, b0w)
{
  for (const j3l of k3y)
	{
		if (!o4a.t0q(j3l))
		{
			if (o4a.d9v(j3l))
			{
				return false;
			}
			else
			{
				if (o4a.s0y(j3l) || o4a.z5e(j3l))
				{
					b0w = j3l;
					return true;
				}
				return false;
			}
		}
	}
	return false;
}

function r8i(o4a, j3l)
{
	if (j3l == f7w)
	{
		return false;
	}
	if (o4a.q2x(j3l))
	{
		return true;
	}
	return false;
}

function y6g(o4a, j3l)
{
	if (j3l == f7w)
	{
		return false;
	}
	if (o4a.y7s(j3l))
	{
		return true;
	}
	return false;
}

function z3m(o4a, k3y, b0w)
{
  for (const j3l of k3y)
	{
		if (o4a.c2c(j3l))
		{
			b0w = j3l;
			return true;
		}
	}
	return false;
}



function h5y(o4a, k3y, b0w)
{
  for (const j3l of k3y)
	{
		if (o4a.w1s(j3l))
		{
			b0w = j3l;
			return true;
		}
	}
	return false;
}

function c3a(o4a, k3y, b0w)
{
  for (const j3l of k3y)
	{
		if (o4a.s9w(j3l))
		{
			b0w = j3l;
			return true;
		}
	}
	return false;
}

function a2x(o4a, k3y, b0w)
{
  for (const j3l of k3y)
	{
		if (o4a.s3x(j3l))
		{
			b0w = j3l;
			return true;
		}
	}
	return false;
}

function t9i(h7x, z1c)
{
	if (c2f(h7x, northEastSquares[z1c])) return true;
	if (c2f(h7x, southEastSquares[z1c])) return true;
	if (c2f(h7x, southWestSquares[z1c])) return true;
	if (c2f(h7x, northWestSquares[z1c])) return true;
	if (v7t(h7x, northSquares[z1c])) return true;
	if (j4q(h7x, eastSquares[z1c])) return true;
	if (v7t(h7x, southSquares[z1c])) return true;
	if (j4q(h7x, westSquares[z1c])) return true;
	if (a1l(h7x, southEastSquare[z1c])) return true;
	if (a1l(h7x, southWestSquare[z1c])) return true;
	if (i6g(h7x, knightSquares[z1c])) return true;
	if (f6a(h7x, kingSquares[z1c])) return true;
	return false;
}

function w8j(h7x, z1c)
{
	if (e8x(h7x, northEastSquares[z1c])) return true;
	if (e8x(h7x, southEastSquares[z1c])) return true;
	if (e8x(h7x, southWestSquares[z1c])) return true;
	if (e8x(h7x, northWestSquares[z1c])) return true;
	if (z6s(h7x, northSquares[z1c])) return true;
	if (k6z(h7x, eastSquares[z1c])) return true;
	if (z6s(h7x, southSquares[z1c])) return true;
	if (k6z(h7x, westSquares[z1c])) return true;
	if (y2k(h7x, northEastSquare[z1c])) return true;
	if (y2k(h7x, northWestSquare[z1c])) return true;
	if (h7s(h7x, knightSquares[z1c])) return true;
	if (o7n(h7x, kingSquares[z1c])) return true;
	return false;
}

function e0a(o4a, z1c)
{
	let b0w = f7w;
	if (p2a(o4a, northEastSquares[z1c], b0w)) return true;
	if (p2a(o4a, southEastSquares[z1c], b0w)) return true;
	if (p2a(o4a, southWestSquares[z1c], b0w)) return true;
	if (p2a(o4a, northWestSquares[z1c], b0w)) return true;
	if (v7c(o4a, northSquares[z1c], b0w)) return true;
	if (h6w(o4a, eastSquares[z1c], b0w)) return true;
	if (v7c(o4a, southSquares[z1c], b0w)) return true;
	if (h6w(o4a, westSquares[z1c], b0w)) return true;
	if (r8i(o4a, southEastSquare[z1c])) return true;
	if (r8i(o4a, southWestSquare[z1c])) return true;
	if (z3m(o4a, knightSquares[z1c], b0w)) return true;
	if (c3a(o4a, kingSquares[z1c], b0w)) return true;
	return false;
}

function b5d(o4a, z1c)
{
	let b0w = f7w;
	if (g9k(o4a, northEastSquares[z1c], b0w)) return true;
	if (g9k(o4a, southEastSquares[z1c], b0w)) return true;
	if (g9k(o4a, southWestSquares[z1c], b0w)) return true;
	if (g9k(o4a, northWestSquares[z1c], b0w)) return true;
	if (d2x(o4a, northSquares[z1c], b0w)) return true;
	if (x3z(o4a, eastSquares[z1c], b0w)) return true;
	if (d2x(o4a, southSquares[z1c], b0w)) return true;
	if (x3z(o4a, westSquares[z1c], b0w)) return true;
	if (y6g(o4a, northEastSquare[z1c])) return true;
	if (y6g(o4a, northWestSquare[z1c])) return true;
	if (h5y(o4a, knightSquares[z1c], b0w)) return true;
	if (a2x(o4a, kingSquares[z1c], b0w)) return true;
	return false;
}

function o7e()
{
	if (moveGeneratorInited) return;
	moveGeneratorInited = true;
 	for (const z1c of r5e)
	{
 		if (e8y(z1c) <= p7p && x6z(z1c) <= z7b)
		{
			let j3l = z1c + b5n;
			northEastSquare.push(j3l);
		}
		else
		{
			northEastSquare.push(f7w);
		}
		if (x6z(z1c) <= z7b)
		{
			let j3l = z1c + e7f;
			eastSquare.push(j3l);
		}
		else
		{
			eastSquare.push(f7w);
		}
		if (e8y(z1c) >= t5l && x6z(z1c) <= z7b)
		{
			let j3l = z1c + r1x;
			southEastSquare.push(j3l);
		}
		else
		{
			southEastSquare.push(f7w);
		}
		if (e8y(z1c) >= t5l && x6z(z1c) >= n4t)
		{
			let j3l = z1c + k1p;
			southWestSquare.push(j3l);
		}
		else
		{
			southWestSquare.push(f7w);
		}
		if (x6z(z1c) >= n4t)
		{
			let j3l = z1c + a1r;
			westSquare.push(j3l);
		}
		else
		{
			westSquare.push(f7w);
		}
		if (e8y(z1c) <= p7p && x6z(z1c) >= n4t)
		{
			let j3l = z1c + d1k;
			northWestSquare.push(j3l);
		}
		else
		{
			northWestSquare.push(f7w);
		}
	}

  for (const z1c of r5e)
	{
  	northSquares.push(t6h(z1c));
		northEastSquares.push(q8c(z1c));
		eastSquares.push(r7y(z1c));
		southEastSquares.push(m0n(z1c));
		southSquares.push(w0z(z1c));
		southWestSquares.push(k3g(z1c));
		westSquares.push(l7i(z1c));
		northWestSquares.push(m3h(z1c));
		kingSquares.push(c3f(z1c));
		knightSquares.push(e7g(z1c));
	}
}

function i4h(o4a)
{
	let n8q = [];

	if (o4a.s6y())
	{
		let d9e = o4a.d9e();
    for (const z1c of r5e)
		{
			if (!d9e) break;
			if (o4a.d9v(z1c))
			{
				switch (o4a.c1b(z1c))
				{
					case e6m.e9y:
						a9l(n8q, o4a, z1c);
						d9e--;
						break;
					case e6m.z7y:
						c0o(n8q, o4a, z1c);
						d9e--;
						break;
					case e6m.y4y:
						a7n(n8q, o4a, z1c);
						d9e--;
						break;
					case e6m.k5g:
						h1m(n8q, o4a, z1c);
						d9e--;
						break;
					case e6m.s9a:
						f6q(n8q, o4a, z1c);
						d9e--;
						break;
					case e6m.q3z:
						z1y(n8q, o4a, z1c);
						d9e--;
						break;
					default:
						break;
				}
			}
		}
		k7n(n8q, o4a);
		q6r(n8q, o4a);
	}
	else
	{
		let y1y = o4a.y1y();
    for (const z1c of r5e)
		{
			if (!y1y) break;
			if (o4a.y2y(z1c))
			{
				switch (o4a.c1b(z1c))
				{
					case e6m.q1f:
						o3c(n8q, o4a, z1c);
						y1y--;
						break;
					case e6m.u8e:
						y2e(n8q, o4a, z1c);
						y1y--;
						break;
					case e6m.v4g:
						w9f(n8q, o4a, z1c);
						y1y--;
						break;
					case e6m.p2g:
						h1d(n8q, o4a, z1c);
						y1y--;
						break;
					case e6m.g1r:
						c4h(n8q, o4a, z1c);
						y1y--;
						break;
					case e6m.v1w:
						g5s(n8q, o4a, z1c);
						y1y--;
						break;
					default:
						break;
				}
			}
		}
		l9d(n8q, o4a);
		b9g(n8q, o4a);
	}

	return n8q;
}

function l1o(o4a, g6x)
{
	let n8q = [];

	if (o4a.s6y())
	{
		if (!o4a.d9v(g6x))
		{
			z6g(n8q, o4a, g6x);
		}
	}
	else
	{
		if (!o4a.y2y(g6x))
		{
			m3k(n8q, o4a, g6x);
		}
	}

	return n8q;
}

function y2x(o4a, g6x)
{
	let n8q = [];

	if (o4a.s6y())
	{
		if (!o4a.d9v(g6x))
		{
			i7s(n8q, o4a, g6x, e6m.z7y);
		}
	}
	else
	{
		if (!o4a.y2y(g6x))
		{
			i7s(n8q, o4a, g6x, e6m.u8e);
		}
	}

	return n8q;
}

function b8g(o4a, g6x)
{
	let n8q = [];

	if (o4a.s6y())
	{
		if (!o4a.d9v(g6x))
		{
			p0u(n8q, o4a, g6x, e6m.y4y);
		}
	}
	else
	{
		if (!o4a.y2y(g6x))
		{
			p0u(n8q, o4a, g6x, e6m.v4g);
		}
	}

	return n8q;
}

function a5b(o4a, g6x)
{
	let n8q = [];

	if (o4a.s6y())
	{
		if (!o4a.d9v(g6x))
		{
			u7a(n8q, o4a, g6x, e6m.k5g);
		}
	}
	else
	{
		if (!o4a.y2y(g6x))
		{
			u7a(n8q, o4a, g6x, e6m.p2g);
		}
	}

	return n8q;
}

function r3z(o4a, g6x)
{
	let n8q = [];

	if (o4a.s6y())
	{
		if (!o4a.d9v(g6x))
		{
			i2f(n8q, o4a, g6x, e6m.s9a);
		}
	}
	else
	{
		if (!o4a.y2y(g6x))
		{
			i2f(n8q, o4a, g6x, e6m.g1r);
		}
	}

	return n8q;
}

function n3d(o4a, g6x)
{
	let n8q = [];

	let o4f = f7w;
	if (o4a.s6y())
	{
		o4f = o4a.q3z();
	}
	else
	{
		o4f = o4a.v1w();
	}

	if (o4f == f7w)
	{
		return n8q;
	}

	if (o4a.s6y())
	{
		z1y(n8q, o4a, o4f);
		q6r(n8q, o4a);
	}
	else
	{
		g5s(n8q, o4a, o4f);
		b9g(n8q, o4a);
	}

	return n8q;
}

function v3r(o4a, g6x)
{
	let n8q = [];

	let o4f = f7w;
	if (o4a.s6y())
	{
		o4f = o4a.q3z();
	}
	else
	{
		o4f = o4a.v1w();
	}

	if (o4f == f7w)
	{
		return n8q;
	}

	if (o4a.s6y())
	{
		if (!o4a.d9v(g6x))
		{
			c6a(n8q, o4a, g6x, e6m.q3z);
		}
	}
	else
	{
		if (!o4a.y2y(g6x))
		{
			c6a(n8q, o4a, g6x, e6m.v1w);
		}
	}

	return n8q;
}

function e3e(o4a)
{
	let n8q = [];

	if (o4a.s6y())
	{
		if (!o4a.s9w(o4a.f6j()))
		{
			return n8q;
		}
		if (!o4a.o8r())
		{
			return n8q;
		}
		s3j(n8q, o4a);
		return n8q;
	}
	else
	{
		if (!o4a.s3x(o4a.s8e()))
		{
			return n8q;
		}
		if (!o4a.b5m())
		{
			return n8q;
		}
		w1m(n8q, o4a);
		return n8q;
	}
}

function n7s(o4a)
{
	let n8q = [];

	if (o4a.s6y())
	{
		if (!o4a.s9w(o4a.f6j()))
		{
			return n8q;
		}
		if (!o4a.w0o())
		{
			return n8q;
		}
		n8p(n8q, o4a);
		return n8q;
	}
	else
	{
		if (!o4a.s3x(o4a.s8e()))
		{
			return n8q;
		}
		if (!o4a.x7b())
		{
			return n8q;
		}
		x6y(n8q, o4a);
		return n8q;
	}
}

function b9f(o4a)
{
	if (o4a.s6y())
	{
		if (o4a.q3z() != f7w)
		{
			return b5d(o4a, o4a.q3z());
		}
	}
	else
	{
		if (o4a.v1w() != f7w)
		{
			return e0a(o4a, o4a.v1w());
		}
	}
	return false;
}




function p0k(o4a, f7i)
{
	let d1r = i4h(o4a);
	let x6i = [];
  for (const z8i of d1r)
	{
		if (z8i.f7i == f7i)
		{
			x6i.push(z8i);
		}
	}
	return x6i;
}

function e2t(o4a, j3l)
{
	let d1r = i4h(o4a);
	let h3k = [];
  for (const z8i of d1r)
	{
		if (z8i.j3l == j3l)
		{
			h3k.push(z8i);
		}
	}
	return h3k;
}

function u5d(o4a, f7i, j3l)
{
	let d1r = i4h(o4a);
	let t7q = [];
  for (const z8i of d1r)
	{
		if (z8i.f7i == f7i && z8i.j3l == j3l)
		{
			t7q.push(z8i);
		}
	}
	return t7q;
}

function h8u(o4a, f7i, j3l, type)
{
	let r4w = new m0z();
	if (type == b4j.null)
	{
		return r4w;
	}

	r4w.f7i = f7i;
	r4w.j3l = j3l;
	r4w.type = type;
	if (type == b4j.f4p)
	{
		if (o4a.c1b(r4w.j3l) != e6m.k4u)
		{
			r4w.a3y = r4w.j3l;
			r4w.o7b = o4a.c1b(r4w.j3l);
		}
		r4w.n7i = o4a.c1b(r4w.f7i);
		r4w.d6z = r4w.n7i;
	}
	else if (type == b4j.s2g)
	{
		r4w.n7i = o4a.c1b(r4w.f7i);
		r4w.d6z = r4w.n7i;
	}
	else if (type == b4j.d8f)
	{
		r4w.n7i = o4a.c1b(r4w.f7i);
		r4w.d6z = r4w.n7i;
		if (d9v(r4w.n7i))
		{
			r4w.a3y = (r4w.j3l - 8);
			r4w.o7b = e6m.q1f;
		}
		else
		{
			r4w.a3y = (r4w.j3l + 8);
			r4w.o7b = e6m.e9y;
		}
	}
	else if (type == b4j.m5a)
	{
		if (o4a.c1b(r4w.j3l) != e6m.k4u)
		{
			r4w.a3y = r4w.j3l;
			r4w.o7b = o4a.c1b(r4w.j3l);
		}
		r4w.n7i = o4a.c1b(r4w.f7i);
		if (d9v(r4w.n7i))
		{
			r4w.d6z = e6m.s9a;
		}
		else
		{
			r4w.d6z = e6m.g1r;
		}
	}
	else if (type == b4j.w9j)
	{
		if (o4a.c1b(r4w.j3l) != e6m.k4u)
		{
			r4w.a3y = r4w.j3l;
			r4w.o7b = o4a.c1b(r4w.j3l);
		}
		r4w.n7i = o4a.c1b(r4w.f7i);
		if (d9v(r4w.n7i))
		{
			r4w.d6z = e6m.k5g;
		}
		else
		{
			r4w.d6z = e6m.p2g;
		}
	}
	else if (type == b4j.s4y)
	{
		if (o4a.c1b(r4w.j3l) != e6m.k4u)
		{
			r4w.a3y = r4w.j3l;
			r4w.o7b = o4a.c1b(r4w.j3l);
		}
		r4w.n7i = o4a.c1b(r4w.f7i);
		if (d9v(r4w.n7i))
		{
			r4w.d6z = e6m.y4y;
		}
		else
		{
			r4w.d6z = e6m.v4g;
		}
	}
	else if (type == b4j.x2n)
	{
		if (o4a.c1b(r4w.j3l) != e6m.k4u)
		{
			r4w.a3y = r4w.j3l;
			r4w.o7b = o4a.c1b(r4w.j3l);
		}
		r4w.n7i = o4a.c1b(r4w.f7i);
		if (d9v(r4w.n7i))
		{
			r4w.d6z = e6m.z7y;
		}
		else
		{
			r4w.d6z = e6m.u8e;
		}
	}
	return r4w;
}

function h8u(h7x, f7i, j3l, type)
{
	let r4w = new m0z();
	if (type == b4j.null)
	{
		return r4w;
	}

	r4w.f7i = f7i;
	r4w.j3l = j3l;
	r4w.type = type;
	if (type == b4j.f4p)
	{
		if (h7x[r4w.j3l] != e6m.k4u)
		{
			r4w.a3y = r4w.j3l;
			r4w.o7b = h7x[r4w.j3l];
		}
		r4w.n7i = h7x[r4w.f7i];
		r4w.d6z = r4w.n7i;
	}
	else if (type == b4j.s2g)
	{
		r4w.n7i = h7x[r4w.f7i];
		r4w.d6z = r4w.n7i;
	}
	else if (type == b4j.d8f)
	{
		r4w.n7i = h7x[r4w.f7i];
		r4w.d6z = r4w.n7i;
		if (d9v(r4w.n7i))
		{
			r4w.a3y = (r4w.j3l - 8);
			r4w.o7b = e6m.q1f;
		}
		else
		{
			r4w.a3y = (r4w.j3l + 8);
			r4w.o7b = e6m.e9y;
		}
	}
	else if (type == b4j.m5a)
	{
		if (h7x[r4w.j3l] != e6m.k4u)
		{
			r4w.a3y = r4w.j3l;
			r4w.o7b = h7x[r4w.j3l];
		}
		r4w.n7i = h7x[r4w.f7i];
		if (d9v(r4w.n7i))
		{
			r4w.d6z = e6m.s9a;
		}
		else
		{
			r4w.d6z = e6m.g1r;
		}
	}
	else if (type == b4j.w9j)
	{
		if (h7x[r4w.j3l] != e6m.k4u)
		{
			r4w.a3y = r4w.j3l;
			r4w.o7b = h7x[r4w.j3l];
		}
		r4w.n7i = h7x[r4w.f7i];
		if (d9v(r4w.n7i))
		{
			r4w.d6z = e6m.k5g;
		}
		else
		{
			r4w.d6z = e6m.p2g;
		}
	}
	else if (type == b4j.s4y)
	{
		if (h7x[r4w.j3l] != e6m.k4u)
		{
			r4w.a3y = r4w.j3l;
			r4w.o7b = h7x[r4w.j3l];
		}
		r4w.n7i = h7x[r4w.f7i];
		if (d9v(r4w.n7i))
		{
			r4w.d6z = e6m.y4y;
		}
		else
		{
			r4w.d6z = e6m.v4g;
		}
	}
	else if (type == b4j.x2n)
	{
		if (h7x[r4w.j3l] != e6m.k4u)
		{
			r4w.a3y = r4w.j3l;
			r4w.o7b = h7x[r4w.j3l];
		}
		r4w.n7i = h7x[r4w.f7i];
		if (d9v(r4w.n7i))
		{
			r4w.d6z = e6m.z7y;
		}
		else
		{
			r4w.d6z = e6m.u8e;
		}
	}
	return r4w;
}

const x3t 						=   8; 
const l3b 						=  -8; 
const e7f 	      			=   1; 
const a1r 	      			=  -1; 
const b9l 		=  17; 
const z2d 		=  10; 
const b5n 				=   9; 
const i2t 		=   6; 
const u4e 		=  15; 
const d1k 				=   7; 
const s1w 		= -17; 
const d4x 		= -10; 
const k1p 				=  -9; 
const m5d 		=  -6; 
const r1y 		= -15; 
const r1x 				=  -7; 

function t6h(z1c)
{
	let z3a = [];
	let n8w = x3t;
	let j3l = z1c;
	while (e8y(j3l) <= p7p)
	{
		j3l = j3l + n8w;
		z3a.push(j3l);
	}
	return z3a;
}

function q8c(z1c)
{
	let z3a = [];
	let n8w = b5n;
	let j3l = z1c;
	while (e8y(j3l) <= p7p && x6z(j3l) <= z7b)
	{
		j3l = j3l + n8w;
		z3a.push(j3l);
	}
	return z3a;
}

function r7y(z1c)
{
	let z3a = [];
	let n8w = e7f;
	let j3l = z1c;
	while (x6z(j3l) <= z7b)
	{
		j3l = j3l + n8w;
		z3a.push(j3l);
	}
	return z3a;
}

function m0n(z1c)
{
	let z3a = [];
	let n8w = r1x;
	let j3l = z1c;
	while (e8y(j3l) >= t5l && x6z(j3l) <= z7b)
	{
		j3l = j3l + n8w;
		z3a.push(j3l);
	}
	return z3a;
}

function w0z(z1c)
{
	let z3a = [];
	let n8w = l3b;
	let j3l = z1c;
	while (e8y(j3l) >= t5l)
	{
		j3l = j3l + n8w;
		z3a.push(j3l);
	}
	return z3a;
}

function k3g(z1c)
{
	let z3a = [];
	let n8w = k1p;
	let j3l = z1c;
	while (e8y(j3l) >= t5l && x6z(j3l) >= n4t)
	{
		j3l = j3l + n8w;
		z3a.push(j3l);
	}
	return z3a;
}

function l7i(z1c)
{
	let z3a = [];
	let n8w = a1r;
	let j3l = z1c;
	while (x6z(j3l) >= n4t)
	{
		j3l = j3l + n8w;
		z3a.push(j3l);
	}
	return z3a;
}

function m3h(z1c)
{
	let z3a = [];
	let n8w = d1k;
	let j3l = z1c;
	while (e8y(j3l) <= p7p && x6z(j3l) >= n4t)
	{
		j3l = j3l + n8w;
		z3a.push(j3l);
	}
	return z3a;
}

function e7g(z1c)
{
	let z3a = [];
	if (e8y(z1c) <= f6r && x6z(z1c) <= z7b)
	{
		let j3l = z1c + b9l;
		z3a.push(j3l);
	}
	if (e8y(z1c) <= p7p && x6z(z1c) <= d1i)
	{
		let j3l = z1c + z2d;
		z3a.push(j3l);
	}
	if (e8y(z1c) >= t5l && x6z(z1c) <= d1i)
	{
		let j3l = z1c + m5d;
		z3a.push(j3l);
	}
	if (e8y(z1c) >= f2q && x6z(z1c) <= z7b)
	{
		let j3l = z1c + r1y;
		z3a.push(j3l);
	}
	if (e8y(z1c) >= f2q && x6z(z1c) >= n4t)
	{
		let j3l = z1c + s1w;
		z3a.push(j3l);
	}
	if (e8y(z1c) >= t5l && x6z(z1c) >= d6e)
	{
		let j3l = z1c + d4x;
		z3a.push(j3l);
	}
	if (e8y(z1c) <= p7p && x6z(z1c) >= d6e)
	{
		j3l = z1c + i2t;
		z3a.push(j3l);
	}
	if (e8y(z1c) <= f6r && x6z(z1c) >= n4t)
	{
		let j3l = z1c + u4e;
		z3a.push(j3l);
	}
	return z3a;
}

function c3f(z1c)
{
	let z3a = [];
	if (e8y(z1c) <= p7p)
	{
		let j3l = z1c + x3t;
		z3a.push(j3l);
	}
	if (e8y(z1c) <= p7p && x6z(z1c) <= z7b)
	{
		let j3l = z1c + b5n;
		z3a.push(j3l);
	}
	if (x6z(z1c) <= z7b)
	{
		let j3l = z1c + e7f;
		z3a.push(j3l);
	}
	if (e8y(z1c) >= t5l && x6z(z1c) <= z7b)
	{
		let j3l = z1c + r1x;
		z3a.push(j3l);
	}
	if (e8y(z1c) >= t5l)
	{
		let j3l = z1c + l3b;
		z3a.push(j3l);
	}
	if (e8y(z1c) >= t5l && x6z(z1c) >= n4t)
	{
		let j3l = z1c + k1p;
		z3a.push(j3l);
	}
	if (x6z(z1c) >= n4t)
	{
		let j3l = z1c + a1r;
		z3a.push(j3l);
	}
	if (e8y(z1c) <= p7p && x6z(z1c) >= n4t)
	{
		let j3l = z1c + d1k;
		z3a.push(j3l);
	}
	return z3a;
}

const b4j =
{
  b4z : 0,  
	f4p : 1,
	s2g : 2,
	d8f : 3,
	x2n : 4,
	s4y : 5,
	w9j : 6,
	m5a : 7
};

function w1i(s1e)
{
	switch (s1e)
	{
		case e6m.e9y:
		case e6m.q1f:
			return v5h.n0h;
		case e6m.z7y:
		case e6m.u8e:
			return v5h.o8h;
		case e6m.y4y:
		case e6m.v4g:
			return v5h.t1h;
		case e6m.k5g:
		case e6m.p2g:
			return v5h.g5t;
		case e6m.s9a:
		case e6m.g1r:
			return v5h.c3t;
		case e6m.q3z:
		case e6m.v1w:
			return v5h.king;
		case e6m.k4u:
			return v5h.n0h;
	}
}

function d3k(o4a, r4w, n6s)
{
 	let w5a = '';
	if (r4w.k4u())
	{
		w5a += "--";
	}
	else if (f7z(r4w.n7i))
	{
    if (r4w.c3m())
    {
			let e5p = x6z(r4w.f7i);
			w5a = s7f(e5p) + "x" + q7n(r4w.j3l);
    }
    else
    {
 			w5a = q7n(r4w.j3l);
    }
		if (r4w.n5o())
		{
			w5a += "=";
			w5a += n9d(w1i(r4w.d6z));
		}
	}
	else if (r4w.n7i == e6m.q3z && r4w.r9f())
	{
		if (r4w.j3l == c7e)
		{
			w5a = "O-O-O";
		}
		else
		{
			w5a = "O-O";
		}
	}
	else if (r4w.n7i == e6m.v1w && r4w.r9f())
	{
		if (r4w.j3l == u6a)
		{
			w5a = "O-O-O";
		}
		else
		{
			w5a = "O-O";
		}
	}
	else
	{
		w5a = n9d(w1i(r4w.n7i));
    let d1r = [];
    if (d9v(r4w.n7i))
    {
      if (r4w.n7i == e6m.z7y)
      {
        d1r = y2x(o4a, r4w.j3l);
      }
      else if (r4w.n7i == e6m.y4y)
      {
        d1r = b8g(o4a, r4w.j3l);
      }
      else if (r4w.n7i == e6m.k5g)
      {
        d1r = a5b(o4a, r4w.j3l);
      }
      else if (r4w.n7i == e6m.s9a)
      {
        d1r = r3z(o4a, r4w.j3l);
      }
      else if (r4w.n7i == e6m.q3z)
      {
        d1r = v3r(o4a, r4w.j3l);
      }
    }
    else
    {
      if (r4w.n7i == e6m.u8e)
      {
        d1r = y2x(o4a, r4w.j3l);
      }
      else if (r4w.n7i == e6m.v4g)
      {
        d1r = b8g(o4a, r4w.j3l);
      }
      else if (r4w.n7i == e6m.p2g)
      {
        d1r = a5b(o4a, r4w.j3l);
      }
      else if (r4w.n7i == e6m.g1r)
      {
        d1r = r3z(o4a, r4w.j3l);
      }
      else if (r4w.n7i == e6m.v1w)
      {
        d1r = v3r(o4a, r4w.j3l);
      }
    }
    if (d1r.length > 1)
    {
      
      let i4r = 0;
      let e5p = x6z(r4w.f7i);
     	for (const z8i of d1r)
      {
        if (x6z(z8i.f7i) == e5p)
        {
          i4r++;
        }
      }
      if (i4r == 1)
      {
        
 				let e5p = x6z(r4w.f7i);
				w5a += s7f(e5p);
      }
      else
      {
        i4r = 0;
        let k2q = e8y(r4w.f7i);
       	for (const z8i of d1r)
        {
          if (e8y(z8i.f7i) == k2q)
          {
            i4r++;
          }
        }
        if (i4r == 1)
        {
          
          w5a += u0f(k2q);
        }
        else
        {
          
 					w5a += q7n(r4w.f7i);
        }
      }
    }
		if (r4w.c3m())
		{
       w5a += "x";
		}
		w5a += q7n(r4w.j3l);
	}
	if (!r4w.k4u())
	{
  	let i8y = o4a.g6i();
    i8y.s8z(r4w);
  	if (b9f(i8y))
	  {
  		let n8q = i4h(i8y);
	  	if (n8q.length == 0)
		  {
			  w5a += "#";
  		}
	  	else
		  {
			  w5a += "+";
  		}
	  }
	}
	return w5a;
}
class d8u
{

constructor()
{
	this.height = 0;
	this.width = 0;
	this.fontSize = 0;
}

}

function t8c(k9p,
  s7u,
  s1i,
  coordinate,
  coordinatesType,
  v3k,
  d1u,
  marginSize) 
{
 	let e8a = (coordinatesType == e8c.o8o ||
		coordinatesType == e8c.p5t ||
		coordinatesType == e8c.q1p);
	let h0k = (coordinatesType == e8c.o8o ||
		coordinatesType == e8c.p5t ||
		coordinatesType == e8c.k8v);
	let s0c =	(coordinatesType == e8c.o8o ||
		coordinatesType == e8c.q1p ||
		coordinatesType == e8c.n9p);
	let a8x = (coordinatesType == e8c.o8o ||
		coordinatesType == e8c.k8v ||
		coordinatesType == e8c.n9p);

	k9p.font = (coordinate.fontSize).toString() + "px serif";
	k9p.fillStyle = v3k;
  let a2b = coordinate.height;

	if (h0k)
	{
		let p9a = b6i;
		if (d1u)
		{
			p9a = 1;
		}
    for (let o3p = 0; o3p < b6i; o3p++)
		{
			let i4l = k9p.measureText(p9a).width;
			let top = s7u.l6h + 1 + o3p * s1i.o4h;
			top += (s1i.o4h - a2b) / 2 + a2b;
			let l2f = s7u.u9c - marginSize + (marginSize - i4l) / 2;
      k9p.fillText(p9a, l2f, top);
			if (d1u)
			{
				p9a++;
			}
			else
			{
				p9a--;
			}
		}
	}

	if (s0c)
	{
		let p9a = b6i;
		if (d1u)
		{
			p9a = 1;
		}
    for (let o3p = 0; o3p < b6i; o3p++)
		{
      let i4l = k9p.measureText(p9a).width;
			let top = s7u.l6h + 1 + o3p * s1i.o4h;
			top += (s1i.o4h - a2b) / 2 + a2b;
			let l2f = s7u.u9c + s7u.j9n() +
        (marginSize - i4l) / 2;
      k9p.fillText(p9a, l2f, top);
			if (d1u)
			{
				p9a++;
			}
			else
			{
				p9a--;
			}
		}
	}

	if (e8a)
	{
		let f8k = 'a';
		if (d1u)
		{
			f8k = 'h';
		}
    for (let k1e = 0; k1e < b6i; k1e++)
		{
			let r5r = f8k;
			let left = s7u.u9c + 1 + k1e * s1i.o4h;
      let i4l = k9p.measureText(r5r).width;
			let l2f = left + (s1i.o4h - i4l) / 2;
			let j6h = s7u.l6h - (marginSize - a2b) / 2 - 2;
      
      if (f8k == 'g')
      {
        j6h -= 2; 
      }
      k9p.fillText(r5r, l2f, j6h);
			if (d1u)
			{
        let d0e = f8k.charCodeAt(0);
        d0e--;
        f8k = String.fromCharCode(d0e);
			}
			else
			{
        let d0e = f8k.charCodeAt(0);
        d0e++;
        f8k = String.fromCharCode(d0e);
			}
		}
	}

	if (a8x)
	{
		let f8k = 'a';
		if (d1u)
		{
			f8k = 'h';
		}
    for (let k1e = 0; k1e < b6i; k1e++)
		{
			let r5r = f8k;
			let left = s7u.u9c + 1 + k1e * s1i.o4h;
      let i4l = k9p.measureText(r5r).width;
			let l2f = left + (s1i.o4h - i4l) / 2;
			let j6h = s7u.l6h + s7u.x5s() +
        (marginSize - a2b) / 2 + a2b - 2;
      
      if (f8k == 'g')
      {
        j6h -= 2; 
      }
      k9p.fillText(r5r, l2f, j6h);
			if (d1u)
			{
        let d0e = f8k.charCodeAt(0);
        d0e--;
        f8k = String.fromCharCode(d0e);
			}
			else
			{
        let d0e = f8k.charCodeAt(0);
        d0e++;
        f8k = String.fromCharCode(d0e);
			}
		}
	}
}

function y7j(k9p, fontSize)
{
	let u4f = new d8u();
	u4f.fontSize = fontSize;
	u4f.height = fontSize;
	u4f.width = fontSize;
	return u4f;
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

function g7l()
{
  whitePawnBitmap = h3i.l4y("images/pieces/Merida/wP");
 	whiteKnightBitmap = h3i.l4y("images/pieces/Merida/wN");
  whiteBishopBitmap = h3i.l4y("images/pieces/Merida/wB");
 	whiteRookBitmap = h3i.l4y("images/pieces/Merida/wR");
  whiteQueenBitmap = h3i.l4y("images/pieces/Merida/wQ");
 	whiteKingBitmap = h3i.l4y("images/pieces/Merida/wK");
  blackPawnBitmap = h3i.l4y("images/pieces/Merida/bP");
 	blackKnightBitmap = h3i.l4y("images/pieces/Merida/bN");
  blackBishopBitmap = h3i.l4y("images/pieces/Merida/bB");
 	blackRookBitmap = h3i.l4y("images/pieces/Merida/bR");
  blackQueenBitmap = h3i.l4y("images/pieces/Merida/bQ");
 	blackKingBitmap = h3i.l4y("images/pieces/Merida/bK");
}

function f5r()
{
  whitePawnBitmap = h3i.l4y("images/pieces/CBurnett/wP");
 	whiteKnightBitmap = h3i.l4y("images/pieces/CBurnett/wN");
  whiteBishopBitmap = h3i.l4y("images/pieces/CBurnett/wB");
 	whiteRookBitmap = h3i.l4y("images/pieces/CBurnett/wR");
  whiteQueenBitmap = h3i.l4y("images/pieces/CBurnett/wQ");
 	whiteKingBitmap = h3i.l4y("images/pieces/CBurnett/wK");
  blackPawnBitmap = h3i.l4y("images/pieces/CBurnett/bP");
 	blackKnightBitmap = h3i.l4y("images/pieces/CBurnett/bN");
  blackBishopBitmap = h3i.l4y("images/pieces/CBurnett/bB");
 	blackRookBitmap = h3i.l4y("images/pieces/CBurnett/bR");
  blackQueenBitmap = h3i.l4y("images/pieces/CBurnett/bQ");
 	blackKingBitmap = h3i.l4y("images/pieces/CBurnett/bK");
}

function g6o(k0n)
{
  if (k0n == 0)
  {
    f5r();
  }
  else
  {
    g7l();
  }
}

function a2y(s1e)
{
  switch (s1e)
	{
    case e6m.e9y:
      return whitePawnBitmap;
      break;
    case e6m.z7y:
      return whiteKnightBitmap;
      break;
    case e6m.y4y:
      return whiteBishopBitmap;
      break;
    case e6m.k5g:
      return whiteRookBitmap;
      break;
    case e6m.s9a:
      return whiteQueenBitmap;
      break;
    case e6m.q3z:
      return whiteKingBitmap;
      break;
    case e6m.q1f:
      return blackPawnBitmap;
      break;
    case e6m.u8e:
      return blackKnightBitmap;
      break;
    case e6m.v4g:
      return blackBishopBitmap;
      break;
    case e6m.p2g:
      return blackRookBitmap;
      break;
    case e6m.g1r:
      return blackQueenBitmap;
      break;
    case e6m.v1w:
      return blackKingBitmap;
      break;
    default:
      break
	}
  return null;
}

function w9z(k9p, rect, s1e)
{
  if (s1e == e6m.k4u) return;
	let l4y = a2y(s1e);
  k9p.drawImage(l4y, rect.u9c, rect.l6h, rect.j9n(), rect.x5s());
}
function v1b(w7a)
{
	let o4a = new z5d();
	let k6x = w7a.length;

 	let x1q = w7a.split(" ");
	if (x1q.length < 2)
	{
		return o4a;
	}

	let o2f = x1q[1];
	if (o2f.length)
	{
		if (o2f[0] == 'w')
		{
			o4a.z6h();
		}
		else if (o2f[0] == 'b')
		{
			o4a.d1l();
		}
	}

 	let i3w = x1q[0].split("/");
	if (i3w.length != 8)
	{
		return o4a;
	}
	let y1r = a8;
	for (const o3p of i3w)
	{
		let z1c = y1r;
		let k6x = o3p.length;
		for (let i = 0; i < k6x; i++)
		{
			if (z1c == y1r + 8)
			{
				return o4a; 
			}
			let e3x = true;
			switch (o3p[i])
			{
				case 'p':
					o4a.w6f(z1c, e6m.q1f);
					break;
				case 'n':
					o4a.w6f(z1c, e6m.u8e);
					break;
				case 'b':
					o4a.w6f(z1c, e6m.v4g);
					break;
				case 'r':
					o4a.w6f(z1c, e6m.p2g);
					break;
				case 'q':
					o4a.w6f(z1c, e6m.g1r);
					break;
				case 'k':
					o4a.w6f(z1c, e6m.v1w);
					break;
				case 'P':
					o4a.w6f(z1c, e6m.e9y);
					break;
				case 'N':
					o4a.w6f(z1c, e6m.z7y);
					break;
				case 'B':
					o4a.w6f(z1c, e6m.y4y);
					break;
				case 'R':
					o4a.w6f(z1c, e6m.k5g);
					break;
				case 'Q':
					o4a.w6f(z1c, e6m.s9a);
					break;
				case 'K':
					o4a.w6f(z1c, e6m.q3z);
					break;
				default:
					e3x = false;
					break;
			}
			if (e3x)
			{
				z1c = z1c + 1;
			}
			else
			{
				if (!isNaN(o3p[i]))
				{
					z1c = z1c + y4s(o3p[i], 0);
				}
			}
		}
		y1r = y1r - 8;
	}

 	if (x1q.length >= 3)
	{
		let z9x = new d3i(); 
		let q7e = x1q[2];
		if (q7e.length)
		{
			if (q7e[0] != '-')
			{
				let k6x = q7e.length;
				if (q7e[0] >= 'A' && q7e[0] <= 'H')
				{
 					z9x.l6v = true; 
          
					z9x.f6j = o4a.q3z();
					z9x.s8e = o4a.v1w();
					if (k6x == 4)
					{
						let w5a = q7e.charAt(0).toLowerCase();
						w5a += "1";
						z9x.w2d = e2x(w5a);
						if (o4a.o3j(z9x.w2d))
						{
							z9x.d8b = true;
						}
						w5a = q7e.charAt(1).toLowerCase();
						w5a += "1";
						z9x.p8f = e2x(w5a);
						if (o4a.o3j(z9x.p8f))
						{
							z9x.o1i = true;
						}
						w5a = q7e.charAt(2).toLowerCase();
						w5a += "8";
						z9x.v3y = e2x(w5a);
						if (o4a.s0y(z9x.v3y))
						{
							z9x.g3o = true;
						}
						w5a = q7e.charAt(3).toLowerCase();
						w5a += "8";
						z9x.k6j = e2x(w5a);
						if (o4a.s0y(z9x.k6j))
						{
							z9x.r0z = true;
						}
          }
				}
				else
				{
					for (let i = 0; i < k6x; i++)
					{
						switch (q7e[i])
						{
							case 'K':
								if (o4a.s9w(z9x.f6j) && o4a.o3j(z9x.w2d))
								{
									z9x.d8b = true;
								}
								break;
							case 'Q':
								if (o4a.s9w(z9x.f6j) && o4a.o3j(z9x.p8f))
								{
									z9x.o1i = true;
								}
								break;
							case 'k':
								if (o4a.s3x(z9x.s8e) && o4a.s0y(z9x.v3y))
								{
									z9x.g3o = true;
								}
								break;
							case 'q':
								if (o4a.s3x(z9x.s8e) && o4a.s0y(z9x.k6j))
								{
									z9x.r0z = true;
								}
								break;
						}
					}
				}
			}
		}
		if (x1q.length >= 4)
		{
			let w0l = x1q[3];
			if (w0l.length)
			{
				if (w0l[0] != '-')
				{
					z9x.e7r = e2x(w0l);
					if (e8y(z9x.e7r) == f6r)
					{
						let h4g = z9x.e7r + 8;
						let g6x = z9x.e7r - 8;
						if (!o4a.t0q(h4g) || !o4a.y7s(g6x))
						{
							z9x.e7r = f7w;
						}
					}
					else if (e8y(z9x.e7r) == f2q)
					{
						let h4g = z9x.e7r - 8;
						let g6x = z9x.e7r + 8;
						if (!o4a.t0q(h4g) || !o4a.q2x(g6x))
						{
							z9x.e7r = f7w;
						}
					}
					else
					{
						z9x.e7r = f7w;
					}
				}
			}
		}
		o4a.m6i(z9x);
	}
	return o4a;
}

function r5f(o4a)
{
	let w7a = '';
	let y1r = a8;
	for (let o3p = 7; o3p >= 0; o3p--)
	{
		let z1c = y1r;
		let o6h = 0;
		for (let k1e = 0; k1e < 8; k1e++)
		{
			if (o4a.t0q(z1c))
			{
				o6h++;
			}
			else
			{
				if (o6h)
				{
					w7a += o6h;
					o6h = 0;
				}
				switch (o4a.c1b(z1c))
				{
					case e6m.k4u:
						break;
					case e6m.e9y:
						w7a += 'P';
						break;
					case e6m.z7y:
						w7a += 'N';
						break;
					case e6m.y4y:
						w7a += 'B';
						break;
					case e6m.k5g:
						w7a += 'R';
						break;
					case e6m.s9a:
						w7a += 'Q';
						break;
					case e6m.q3z:
						w7a += 'K';
						break;
					case e6m.q1f:
						w7a += 'p';
						break;
					case e6m.u8e:
						w7a += 'n';
						break;
					case e6m.v4g:
						w7a += 'b';
						break;
					case e6m.p2g:
						w7a += 'r';
						break;
					case e6m.g1r:
						w7a += 'q';
						break;
					case e6m.v1w:
						w7a += 'k';
						break;
				}
			}
			z1c = z1c + 1;
		}
		if (o6h)
		{
			w7a += o6h;
		}
		y1r = (y1r - 8);
		if (o3p > 0)
		{
			w7a += "/";
		}
	}
	w7a += " ";
	if (o4a.s6y())
	{
		w7a += "w";
	}
	else
	{
		w7a += "b";
	}
	w7a += " ";
	let z9x = o4a.h3d();
	if (
		!z9x.d8b &&
		!z9x.o1i &&
		!z9x.g3o &&
		!z9x.r0z)
	{
		w7a += "-";
	}
	else
	{
		if (z9x.l6v)
		{
			if (z9x.d8b)
			{
				w7a += s7f(x6z(z9x.w2d)).toUpperCase();
			}
			if (z9x.o1i)
			{
				w7a += s7f(x6z(z9x.p8f)).toUpperCase();
			}
			if (z9x.g3o)
			{
				w7a += s7f(x6z(z9x.v3y)).toUpperCase();
			}
			if (z9x.r0z)
			{
				w7a += s7f(x6z(z9x.k6j)).toUpperCase();
			}
		}
		else
		{
			if (z9x.d8b)
			{
				w7a += "K";
			}
			if (z9x.o1i)
			{
				w7a += "Q";
			}
			if (z9x.g3o)
			{
				w7a += "k";
			}
			if (z9x.r0z)
			{
				w7a += "q";
			}
		}
	}
	w7a += " ";
	if (z9x.e7r == f7w)
	{
		w7a += "-";
	}
	else
	{
		w7a += q7n(z9x.e7r);
	}
	return w7a;
}

function x4a(o4a, x1u)
{
	
	

  let c9j = x1u.length;
	if (c9j < 2 || c9j > 7)
	{
		return false;
	}

	
	if (x1u[0] == 'Z' || (c9j == 2 && x1u == "--") || (c9j == 4 && x1u == "null"))
	{
		return new m0z();
	}

	
	let n3x = x1u[c9j-1];
	if (n3x == '+' || n3x == '#')
	{
		c9j--;
		if (c9j < 2)
		{
   		return false;
		}
	}

	
	if (x1u[0] == 'O' || x1u[0] == '0')
	{
		if (c9j == 3)
		{
			let d1r = n7s(o4a);
			if (d1r.length != 1)
			{
    		return false;
			}
			return d1r[0];
		}
		if (c9j == 5)
		{
			let d1r = e3e(o4a);
			if (d1r.length != 1)
			{
    		return false;
			}
			return d1r[0];
		}
 		return false;
	}

	
	let s2b = false;
	let z3r = e6m.k4u;
	if (x1u[c9j-2] == '=')
	{
		s2b = true;
		let o3d = x1u[c9j-1];
		if (o3d == 'N')
		{
			z3r = o4a.s6y() ? e6m.z7y : e6m.u8e;
		}
		else if (o3d == 'B')
		{
			z3r = o4a.s6y() ? e6m.y4y : e6m.v4g;
		}
		else if (o3d == 'R')
		{
			z3r = o4a.s6y() ? e6m.k5g : e6m.p2g;
		}
		else if (o3d == 'Q')
		{
			z3r = o4a.s6y() ? e6m.s9a : e6m.g1r;
		}
		else
		{
  		return false;
		}
		c9j -= 2;
		if (c9j < 2)
		{
  		return false;
		}
	}

 	
	let toString = '';
	toString += x1u[c9j-2];
	toString += x1u[c9j-1];
	let g6x = e2x(toString);
	if (g6x == f7w)
	{
		return false;
	}
	c9j -= 2;
	

 	if (s2b)
	{
		let d1r = l1o(o4a, g6x);
		if (d1r.length == 0)
		{
  		return false;
		}
		let b5e = [];
		for (const r4w of d1r)
		{
			if (r4w.d6z == z3r)
			{
				b5e.push(r4w);
			}
		}
		d1r = b5e;
		if (d1r.length == 1)
		{
			return d1r[0];
		}
		if (c9j == 0)
		{
			
			for (const z8i of d1r)
			{
				if (z8i.a3y == f7w)
				{
					return z8i;
				}
			}
  		return false;
		}
		if (c9j != 2)
		{
  		return false;
		}
		
		let n3x = x1u[0];
		if (n3x < 'a' || n3x > 'h')
		{
  		return false;
		}
		let e5p = d7b(n3x);
		for (const z8i of d1r)
		{
			if (x6z(z8i.f7i) == e5p)
			{
				return z8i;
			}
		}
		return false;
	}

	if (c9j == 0)
	{
  	
		let d1r = l1o(o4a, g6x);
		if (d1r.length != 1)
		{
  		return false;
		}
		return d1r[0];
	}

  
	let n0h = false;
	let d1r = [];
	let o1t = x1u[0];
	if (o1t == 'N')
	{
		d1r = y2x(o4a, g6x);
	}
	else if (o1t == 'B')
	{
		d1r = b8g(o4a, g6x);
	}
	else if (o1t == 'R')
	{
		d1r = a5b(o4a, g6x);
	}
	else if (o1t == 'Q')
	{
		d1r = r3z(o4a, g6x);
	}
	else if (o1t == 'K')
	{
		
		d1r = v3r(o4a, g6x);
	}
	else
	{
		n0h = true;
		d1r = l1o(o4a, g6x);
	}
	if (d1r.length == 0)
	{
		return false;
	}
	if (d1r.length == 1)
	{
		return d1r[0]; 
	}

	
	
	
	if (c9j < 2)
	{
		return false;
	}

 	if (n0h)
	{
		let n3x = x1u[0]; 
		if (n3x < 'a' || n3x > 'h')
		{
  	  return false;
		}
		let e5p = d7b(n3x);
		for (const z8i of d1r)
		{
			if (x6z(z8i.f7i) == e5p && z8i.a3y != f7w)
			{
				return z8i;
			}
		}
		return false;
	}

	

 	
	let n3w = false;
	if (x1u[c9j-1] == 'x')
	{
		n3w = true;
		c9j--;
	}
	else if (x1u[c9j-1] == '-') 
	{
		n3w = false;
		c9j--;
	}

	if (c9j < 2)
	{
		return false;
	}

 	if (c9j == 2)
	{
		
		let n3x = x1u[1]; 
		if (n3x >= 'a' && n3x <= 'h')
		{
			let e5p = d7b(n3x);
			let v8e  = 0;
      let n1m = null;
			for (const z8i of d1r)
			{
				if (x6z(z8i.f7i) == e5p)
				{
					n1m = z8i;
					v8e++;
				}
			}
      return v8e === 1 ? n1m : false;
		}
		if (n3x >= '1' && n3x <= '8')
		{
			let k2q = i0z(n3x);
			let v8e = 0;
      let n1m = null;
			for (const z8i of d1r)
			{
				if (e8y(z8i.f7i) == k2q)
				{
					n1m = z8i;
					v8e++;
				}
			}
      return v8e === 1 ? n1m : false;
		}
		return false;
	}

 	if (c9j == 3)
	{
		
		let x0k = '';
		x0k += x1u[1]; 
		x0k += x1u[2];
		let h4g = e2x(x0k);
		if (h4g == f7w)
		{
  		return false;
		}
		let v8e = 0;
    let n1m = null;
		for (const z8i of d1r)
		{
			if (z8i.f7i == h4g)
			{
				n1m = z8i;
				v8e++;
			}
		}
    return v8e === 1 ? n1m : false;
	}

	return false;
}

function w5p()
{
  let c5l = ["images/board/BoardBackground.png",
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
  return c5l;
}
function div(p6i, p9h)
{
  const o0t = p6i % p9h;
  const quot = Math.floor((p6i - o0t) / p9h);
  return { quot: quot, o0t: o0t };
}

function n0e(o4a, w5a)
{
	let r4w = new m0z();
	if (w5a.length < 4)
	{
		return r4w;
	}
	let x0k = w5a.slice(0, 2);
	let toString = w5a.slice(2, 4);
	r4w.f7i = e2x(x0k);
  r4w.n7i = o4a.c1b(r4w.f7i);
	r4w.j3l = e2x(toString);
	r4w.d6z = r4w.n7i;
	if (w5a.length == 5)
	{
		switch (w5a[4])
		{
			case 'q':
				r4w.d6z = o4a.s6y() ? e6m.s9a : e6m.g1r;
				break;
			case 'r':
				r4w.d6z = o4a.s6y() ? e6m.k5g : e6m.p2g;
				break;
			case 'b':
				r4w.d6z = o4a.s6y() ? e6m.y4y : e6m.v4g;
				break;
			case 'n':
				r4w.d6z = o4a.s6y() ? e6m.z7y : e6m.u8e;
				break;
		}
	}
	return r4w;
}

class w1n
{

constructor()
{
	let z0j = '';
	let value = '';
}

}

function k3a(w5a, z0j, b1i)
{
  let c4z = " " + z0j + " ";
  let h3t = w5a.indexOf(c4z, 0);
	if (h3t >= 0)
	{
		let h9v = h3t + c4z.length;
		let p2s = 0;
		
		if (z0j == "pv")
		{
			p2s = w5a.indexOf(" string ", h9v);
		}
		else
		{
			p2s = w5a.indexOf(" ", h9v);
		}
		if (p2s < 0)
		{
			p2s = w5a.length;
		}
    let value = w5a.slice(h9v, p2s).trim();
		b1i.set(z0j, value);
	}
}

const e4s =
{
	c8r        : 0,
	n2d      : 1,
};

class Engine
{

constructor()
{
	this.h4d = new j7u();
  this.h2x = null;
  this.y4j = new u8o();
  this.y5m = new d3o();
  this.x8a = false;
  this.q6y = false;
  this.m8g = false;
  this.b1p = false;
  this.c1x = false;
  this.u7f = new z7c();
	this.r6k = new r4o();
  this.z1z = null;
}

k3h(t9s)
{
  this.h4d = t9s.g6i();
  this.n6l();
  this.x8a = false;
 	for (const h6a of this.h4d.g3v.g3v)
	{
		if (h6a.z0j == "MultiPV")
		{
			this.x8a = (h6a.value != "1");
			break;
		}
	}

  this.m7l();
}

/*
m7l()
{
  this.h2x = new Worker("engines/stockfish/stockfish-17.1-8e4d048.js");
  this.h2x.z1z = (event) => {
    this.n2d(event);
  };
}
*/



async m7l() {
  
  const folderUrl = "https://kb5963.github.io/my-web-files/engines/stockfish/";
  const engineJsUrl = folderUrl + "stockfish-17.1-8e4d048.js";

  console.log("Attempting to load engine from:", engineJsUrl);

  try {
    
    const response = await fetch(engineJsUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    let j6b = await response.i1k();

    
    
    const wasmFix = `var Module = { locateFile: function(path) { return "${folderUrl}" + path; } }; \n`;
    j6b = wasmFix + j6b;

    
    const blob = new Blob([j6b], { type: 'application/javascript' });
    const blobUrl = URL.createObjectURL(blob);

    this.h2x = new Worker(blobUrl);

    
    this.h2x.z1z = (event) => {
      this.n2d(event);
    };

    console.log("Stockfish 17.1 successfully started via Blob Proxy.");
  } catch (error) {
    console.error("Engine failed to start. Check if the files exist at the URL.", error);
  }
}

p8a()
{
	this.y4j.d7o();
	this.y5m.d7o();
	this.c8r("uci");
}

l9b()
{
	if (!this.m8g)
	{
    return;
  }

  
	for (const h6a of this.h4d.g3v.g3v)
	{
		let y8c = "setoption";
		y8c += " name ";
		y8c += h6a.z0j;
		y8c += " value ";
		y8c += h6a.value;
		this.c8r(y8c);
	}
  
  
  
  

	this.c8r("isready");
	this.m8g = false;
}

c8r(t6d)
{
	this.g7v(t6d, e4s.c8r);
  this.h2x.postMessage(t6d);
}

n2d(event)
{
  
  
 	this.g7v(event.data, e4s.n2d);
	this.v6k(event.data);
}

v6k(y8c)
{
	let x1q = y8c.split(' ');
	if (x1q.length == 0) return;
	let t6d = x1q[0];

	if (t6d == "readyok")
	{
		this.q6y = true;
    if (this.z1z)
    {
      this.z1z({
        cmd: "ready",
        data: {}
        });
    }
		return;
	}
	if (t6d == "bestmove")
	{
		this.o8l(y8c);
	}
	else if (t6d == "id")
	{
		this.x1i(y8c);
	}
	else if (t6d == "info")
	{
		this.p7o(y8c);
	}
	else if (t6d == "option")
	{
		this.a7a(y8c);
	}
	else if (t6d == "uciok")
	{
		this.b1y(y8c);
	}
}

o8l(y8c)
{
	this.b1p = false;
  if (this.c1x)
  {
    this.c1x = false;
    this.i3i();
  }
}

x1i(y8c)
{
 	let w5a = y8c;
	let x1q = w5a.split(" ");
	if (x1q.length < 3) return;

  const word1 = x1q.shift();
  const word2 = x1q.shift();
  const value = x1q.join(' ');

	if (word2 == "name")
	{
		this.y4j.z0j = value;
	}
	else if (word2 == "author")
	{
		this.y4j.g7m = value;
	}
}

p7o(y8c)
{
	let w5a = y8c;
	let b1i = new Map();
	k3a(w5a, "depth", b1i);
 	k3a(w5a, "seldepth", b1i);
	k3a(w5a, "pv", b1i);
	k3a(w5a, "nps", b1i);
	k3a(w5a, "nodes", b1i);
	k3a(w5a, "score cp", b1i);
	k3a(w5a, "score mate", b1i);
	k3a(w5a, "time", b1i);
	k3a(w5a, "currmove", b1i);
	k3a(w5a, "currmovenumber", b1i);
 	k3a(w5a, "multipv", b1i);

  if (b1i.has("pv") && b1i.has("depth"))
  {
		this.u1u(b1i);
    if (this.z1z)
    {
      this.z1z({
        cmd: "pv",
        data: {}
        });
    }

		return;
  }

  if (b1i.has("currmove") && b1i.has("currmovenumber"))
	{
		this.k7f(b1i);
    if (this.z1z)
    {
      this.z1z({
        cmd: "cm",
        data: {}
        });
    }
		return;
	}
}

a7a(y8c)
{
	let h6a = new e5i();
	let w5a = y8c;

	let t9w = " name ";
  let o8i = w5a.indexOf(t9w, 0);
	if (o8i < 0) return;
	let y3k = o8i + t9w.length;

	let d0y = " type ";
	let a3u = w5a.indexOf(d0y, 0);
	if (a3u < 0) return;
	let d8v = a3u;

	let q7g = a3u + d0y.length;
	let v4a = w5a.indexOf(" ", q7g);
	if (v4a < 0) v4a = w5a.length + 1;

	h6a.z0j = w5a.slice(y3k, d8v);
	h6a.type = w5a.slice(q7g, v4a);

	if (h6a.type == "check")
	{
		h6a.type = "bool";
	}
	else if (h6a.type == "combo")
	{
		h6a.type = "enum";
	}

	let v7g = " default ";
	let n2l = w5a.indexOf(v7g, 0);
	if (n2l >= 0)
	{
		let f9x = n2l + v7g.length;
		let l6y = w5a.indexOf(" ", f9x);
		if (l6y < 0) l6y = w5a.length + 1;
		h6a.value = w5a.slice(f9x, l6y);
		if (h6a.value == "<empty>")
		{
			h6a.value = "";
		}
	}
	if (h6a.type == "spin")
	{
		let w3d = " min ";
		let i7a = w5a.indexOf(w3d, 0);
		if (i7a >= 0)
		{
			let q0t = i7a + w3d.length;
			let l2k = w5a.indexOf(" ", q0t);
			if (l2k < 0) l2k = w5a.length + 1;
			h6a.min = w5a.slice(q0t, l2k).trim();
		}
		let o7l = " max ";
		let h0q = w5a.indexOf(o7l, 0);
		if (h0q >= 0)
		{
			let s8w = h0q + o7l.length;
			let p1h = w5a.indexOf(" ", s8w);
			if (p1h < 0) p1h = w5a.length + 1;
			h6a.max = w5a.slice(s8w, p1h).trim();
		}
	}
	else if (h6a.type == "enum")
	{
		let i1o = 0;
		while (true)
		{
			let a4b = " var ";
			let q5r = w5a.indexOf(a4b, i1o);
			if (q5r < 0) break;
			let f8m = q5r + a4b.length;
			let k0s = w5a.indexOf(" var ", q5r + 5);
			if (k0s < 0) k0s = w5a.length + 1;
			if (h6a.values.length != 0)
			{
				h6a.values += " ";
			}
			h6a.values += w5a.slice(f8m, k0s).trim();
			i1o = k0s;
		}
	}
	this.y5m.g3v.push(h6a);
}

b1y(y8c)
{
	this.m8g = true;
  this.l9b();
}


o6f()
{
	if (this.h2x)
  {
    this.c8r("quit");
    this.h2x.terminate();
    this.h2x = null;
  }
}








v0y()
{
}

y1a(input)
{
	if (this.q6y)
	{
  	this.g7v('setInput', e4s.c8r);
		this.u7f = input.g6i();
    if (this.b1p)
    {
      this.c1x = true;
      this.c8r('stop');
    }
    else
    {
      this.i3i();
    }
	}
}

i3i()
{
  this.r6k = new r4o();
  this.r6k.o4a = this.u7f.p4s();
  this.r6k.m9v = this.u7f.m9v();
	this.r6k.u4c = this.x8a;
  this.b1p = true;
  if (this.z1z)
  {
    this.z1z({
      cmd: "go",
      data: {}
      });
  }

  let y8c = "position fen";
  y8c += " ";
	let w7a = r5f(this.u7f.p4s());
	y8c += w7a;
	this.c8r(y8c);
	if (this.u7f.x9b == h3p)
	{
		y8c = "go infinite";
		this.c8r(y8c);
	}
	else
	{
		y8c = "go movetime ";
		y8c += this.u7f.x9b;
		this.c8r(y8c);
	}
}

n6l()
{
}

g7v(w5a, h9r)
{
	if (!this.h4d.z1s) return;
 	if (h9r == e4s.n2d)
	{
    console.log("From engine:", w5a);
	}
	else
	{
    console.log("To engine:", w5a);
	}
}

u1u(b1i)
{
  let p7l = b1i.get("depth");
  let f2z = b1i.get("multipv");

	let r3s = new h8h();
	r3s.f9t = p7l;

	if (b1i.has("seldepth"))
	{
		r3s.f8l = b1i.get("seldepth");
	}

 	if (b1i.has("nps"))
	{
    let l9x = b1i.get("nps");
		let c9y = y4s(l9x, 0);
		let p5c = c9y / 1000;
		if (p5c)
		{
			r3s.c6k = p5c + " kN/s";
		}
	}

	let r8k = 0.0;
  if (b1i.has("score cp"))
	{
    let x3v = b1i.get("score cp");
		r8k = parseFloat(x3v);
		r8k = r8k / 100.0;
		if (r8k > 9.99)
		{
			r8k = 9.99;
		}
		if (r8k < -9.99)
		{
			r8k = -9.99;
		}
		if (this.r6k.o4a.b3q())
		{
			r8k = -r8k;
		}
		r3s.r8k = r8k;
	}
  if (b1i.has("score mate"))
	{
    let h4r = b1i.get("score mate");
		let p6g = y4s(h4r, 0);
		if (this.r6k.o4a.b3q())
		{
			p6g = -p6g;
		}
		r3s.p6g = p6g;
		if (p6g > 0)
		{
			r8k = 9.99;
		}
		if (p6g < 0)
		{
			r8k = -9.99;
		}
		r3s.r8k = r8k;
	}

  if (b1i.has("time"))
	{
    let c3d = b1i.get("time");
		let y9h = y4s(c3d, 0);
		let g1g = y9h / 1000;
		let m = div(g1g, 60);
		let b1x = m.o0t;
    b1x = Math.o1m(b1x);
		let h = div(m.quot, 60);
		let c9e = h.o0t;
		let l5k = h.quot;
    const pad = (num) => String(num).padStart(2, '0');
    const m4t = `${pad(l5k)}:${pad(c9e)}:${pad(b1x)}`;
    r3s.m4t = m4t;
	}

  let t4v = b1i.get("pv");
	let e4h = t4v.split(" ");

	let n8q = new n2s();
	let m9v = this.r6k.m9v;
	n8q.n6t(this.r6k.o4a, m9v);
	let o0z = n8q.b8q();
	let n6y = this.r6k.o4a.g6i();
	for (const s of e4h)
	{
		if (s.length == 0)
		{
			continue;
		}
		let b6o = n0e(n6y, s);
		let d1r = i4h(n6y);
		let e3x = false;
		for (const z8i of d1r)
		{
			if (z8i.j3l == b6o.j3l &&
				z8i.f7i == b6o.f7i &&
				z8i.d6z == b6o.d6z)
			{
				n6y.s8z(z8i);
				let r4w = v9v(z8i);
				n8q.q5a(o0z, r4w);
				e3x = true;
				break;
			}
		}
    if (!e3x) break;
	}
	if (!n8q.l2w())
	{
    console.log("parse moves aantal: leeg!");
		return;
	}
  console.log("parse moves aantal: " + n8q.l2w());
	r3s.n8q = n8q;

 	if (this.x8a)
	{
		if (f2z == 1)
		{
			this.r6k.j6t = r3s;
		}
		if (f2z > this.r6k.lines.length)
		{
			this.r6k.lines.push(r3s);
		}
		else
		{
			this.r6k.lines[f2z-1] = r3s;
		}
	}
	else
	{
		this.r6k.lines.push(r3s);
		this.r6k.j6t = r3s;
	}
}

k7f(b1i)
{
  let l1k = b1i.get("currmove");
  let d7r = b1i.get("currmovenumber"); 
	this.r6k.w4h = y4s(d7r, 0);
	let d1r = i4h(this.r6k.o4a);
	this.r6k.j6z = d1r.length;
	let b6o = n0e(this.r6k.o4a, l1k);
	for (const z8i of d1r)
	{
		if (z8i.j3l == b6o.j3l &&
			z8i.f7i == b6o.f7i &&
			z8i.d6z == b6o.d6z)
		{
			this.r6k.l2v = z8i;
			break;
		}
	}
}

y0c()
{
	return this.r6k.g6i();
}

t9s()
{
	return this.h4d.g6i();
}

}

class u8o
{

constructor()
{
	this.z0j = '';
	this.g7m = '';
	this.k8n = '';
	this.l8m = '';
}

g6i()
{
  return Object.assign(new u8o(), this);
}

d7o()
{
	this.z0j = '';
	this.g7m = '';
	this.k8n = '';
	this.l8m = '';
}

}


const h3p = 10000000;

class z7c
{

constructor()
{
	this.n8q = new n2s();
	this.x9b = h3p;
  this.i1r = 0;
	this.i0q = 0;
}

g6i()
{
	let a4s = new z7c();
  a4s.n8q = this.n8q.g6i();
  a4s.x9b = this.x9b;
  a4s.i1r = this.i1r;
  a4s.i0q = this.i0q;
	return a4s;
}

m9v()
{
	return this.n8q.c6n(this.n8q.k8h());
}

p4s()
{
	return this.n8q.k1b();
}

}


class j7u
{

constructor()
{
	this.l2t = '';
	this.id = new u8o();
	this.g3v = new d3o();
	this.q3h = new d3o();
	this.z1s = true;
	this.n0t = true;
}

g6i()
{
	let m4v = new j7u();
	m4v.l2t = this.l2t;
	m4v.id = this.id.g6i();
	m4v.g3v = this.g3v.g6i();
	m4v.q3h = this.q3h.g6i();
	m4v.z1s = this.z1s;
	m4v.n0t = this.n0t;
	return m4v;
}


}


function d1o(r8k)
{
  if (Math.abs(r8k) < 0.005)
  {
    return "0.00";
  }
  else
  {
     const formatted = r8k.toFixed(2);
     return r8k > 0 ? `+${formatted}` : formatted;
  }
}

class h8h
{

constructor()
{
	this.r8k = 0.0;
	this.p6g = false;
	this.f9t = '';
	this.f8l = '';
	this.m4t = '';
	this.c6k = '';
	this.n8q = new n2s();
}

g6i()
{
	let w9g = new h8h();
  w9g.r8k = this.r8k;
  w9g.p6g = this.p6g;
  w9g.f9t = this.f9t;
  w9g.f8l = this.f8l;
  w9g.m4t = this.m4t;
  w9g.c6k = this.c6k;
  w9g.n8q = this.n8q.g6i();
	return w9g;
}

o3l()
{
	if (this.p6g)
	{
		return "#" + this.p6g;
	}
	else
	{
		return d1o(this.r8k);
	}
}

w0j()
{
	let r8p = scoreToMoveValue(this.r8k);
	let y0t = moveValueToEvalString(r8p);
	return y0t;
}

}

class r4o
{

constructor()
{
	this.o4a = new z5d();
	this.m9v = 1;
	this.n0f = false;
	this.a3k = false;
	this.u4c = false;
	this.lines = [];
	this.j6t = new h8h();
	this.l2v = new m0z();
	this.w4h = 0;
	this.j6z = 0;
}

g6i()
{
	let f0k = new r4o();
  f0k.o4a = this.o4a.g6i();
  f0k.m9v = this.m9v;
  f0k.n0f = this.n0f;
  f0k.a3k = this.a3k;
  f0k.u4c = this.u4c;
  f0k.lines = this.lines.slice();
  f0k.j6t = this.j6t.g6i();
  f0k.l2v = this.l2v.g6i();
  f0k.w4h = this.w4h;
  f0k.j6z = this.j6z;
	return f0k;
}

d3v()
{
	return this.j6t.n8q.l2w() > 0;
}

r0t()
{
	let d5q = this.j6t.n8q.b8q();
	this.j6t.n8q.s8z(d5q);
	return d5q.r4w.z8i();
}

}


class e5i
{
  constructor(type = '', z0j = '', value = '', min = '', max = '', values = '')
  {
    this.type = type;
    this.z0j = z0j;
    this.value = value;
    this.min = min;
    this.max = max;
    this.values = values;
  }

  g6i()
  {
    return Object.assign(new e5i(), this);
  }
}

class d3o
{
  constructor()
  {
    this.g3v = [];
  }

  g6i()
  {
    let m4b = new d3o();
    m4b.g3v = this.g3v.map(p => p.g6i());
    return m4b;
  }

  d7o()
  {
    this.g3v.length = 0;
  }

  addBool(z0j, value)
  {
    this.g3v.push(new e5i("bool", z0j, value));
  }

  addInteger(z0j, value)
  {
    this.g3v.push(new e5i("int", z0j, value));
  }

  addSpin(z0j, value, min, max)
  {
    this.g3v.push(new e5i("spin", z0j, value, min, max));
  }

  addString(z0j, value)
  {
    this.g3v.push(new e5i("string", z0j, value));
  }

  addEnum(z0j, value, values)
  {
    this.g3v.push(new e5i("enum", z0j, value, '', '', values));
  }

  addButton(z0j)
  {
    this.g3v.push(new e5i("button", z0j, z0j));
  }

  p0t(z0j, value)
  {
    for (let h6a of this.g3v)
    {
      if (h6a.z0j === z0j)
      {
        h6a.value = value;
      }
    }
  }
}
class z3i
{

constructor()
{
	this.z0j = '';
}

g6i()
{
	let j2e = new z3i();
	j2e.z0j = this.z0j;
	return j2e;
}

k4u()
{
	return this.z0j.length == 0;
}

y3l()
{
	return this.z0j;
}

}


const y8f =
{
	b4z : 0,
	j0k : 1,
	w0n: 2,
	l6u: 3,
	u7q: 4,
	w3k: 5,
	a8l: 6,
	e0z: 7,
	q6p: 8,
	y2c: 9,
	b6l: 10,
	x2x: 11,
	g0p: 12,
	j9k: 13,
	i9g: 14,
	k6a: 15,
	c3i: 16,
	h3q: 17,
	t4r: 18,
	k6n: 19,
	v5r: 20,
	d2m: 21,
	o7v: 22,
	k0f: 23,
	z8o: 24,
	w7q: 25,
	q9m: 26,
	e5x: 27,
	n4u: 28,
	z9c: 29,
	f3s: 30,
	i6l: 31,
	x4z: 32,
	b6g: 33,
	p9n: 34,
	q6g: 35,
	g6d: 36,
	x3p: 37,
	o5x: 38,
	l2o: 39,
	h2a: 40,
	o0k: 41,
	y0k: 42,
	p5m: 43,
	c7n: 44,
	x2z: 45,
	x6a: 46,
	i7p: 47,
	q8i: 48,
	d6i: 49,
	l9r: 50,
	j9v: 51,
	f3p: 52,
	t2i: 53,
	r3l: 54,
	n5i: 55,
	e2v: 56,
	r2s: 57,
	j2u: 58,
	w2i: 59,
	q4u: 60,
	b6s: 61,
	b5f: 62,
	c0q: 63,
	u4u: 64,
	o3w: 65,
	s3a: 66,
	w7f: 67,
	p8c: 68,
	r2y: 69,
	s0d: 70,
	g7u: 71,
	z1x: 72,
	j0p: 73,
	s0q: 74,
	h9c: 75,
	e6f: 76,
	f7h: 77,
	t0x: 78,
	h4p: 79,
	w8f: 80,
	n4z: 81,
	t6a: 82,
	c2h: 83,
	v8x: 84,
	y9t: 85,
	l3l: 86,
	r0k: 87,
	q3a: 88,
	x3r: 89,
	h5r: 90,
	v8j: 91,
	s4f: 92,
	x9l: 93,
	y9v: 94,
	g2e: 95,
	b1e: 96,
	y6d: 97,
	r0v: 98,
	x6p: 99,
	s7l: 100,
	f3a: 101,
	w6z: 102,
	z3k: 103,
	n9y: 104,
	v1n: 105,
	x1x: 106,
	p0b: 107,
	w2c: 108,
	n9k: 109,
	u8i: 110,
	w5n: 111,
	w9x: 112,
	a0m: 113,
	t3i: 114,
	a6x: 115,
	s8b: 116,
	j0o: 117,
	l1x: 118,
	k0m: 119,
	s3d: 120,
	w0s: 121,
	q0h: 122,
	d7h: 123,
	p1k: 124,
	g2z: 125,
	i8k: 126,
	u0e: 127,
	d8j: 128,
	k1r: 129,
	r4d: 130,
	x1o: 131,
	m8x: 132,
	v8d: 133,
	b3x: 134,
	k7z: 135,
	q9o: 136,
	j6s: 137,
	j2m: 138,
	o5i: 139,
	b7i: 140,
	g8l: 141,
	h1h: 142,
	w9e: 143,
	y3y: 144,
	t3k: 145,
	m2e: 146,
	q9a: 147,
	v6e: 148,
	t5i: 149,
	t1f: 150,
	t6e: 151,
	o1w: 152,
	r4f: 153,
	s7r: 154,
	q4x: 155,
	f0c: 156,
	y8a: 157,
	j3x: 158,
	d4s: 159,
	h9u: 160,
	x4n: 161,
	o6n: 162,
	x9o: 163,
	z9q: 164,
	w6w: 165,
	t6f: 166,
	g6e: 167,
	o9f: 168,
	p0v: 169,
	i6t: 170,
	y5f: 171,
	f9e: 172,
	c5r: 173,
	o8g: 174,
	u8x: 175,
	g8e: 176,
	i6f: 177,
	l1a: 178,
	c9t: 179,
	u6l: 180,
	y1u: 181,
	g8y: 182,
	q8q: 183,
	l6w: 184,
	x5k: 185,
	b2f: 186,
	o2g: 187,
	m2c: 188,
	f4d: 189,
	m8r: 190,
	m4h: 191,
	j9w: 192,
	u0s: 193,
	c1s: 194,
	p2e: 195,
	x1g: 196,
	r9t: 197,
	t4p: 198,
	h0f: 199,
	q2z: 200,
	p0d: 201,
	i1d: 202,
	b4g: 203,
	q4z: 204,
	o8q: 205,
	f4o: 206,
	u6p: 207,
	m8e: 208,
	x8r: 209,
	x1d: 210,
	r8s: 211,
	e5j: 212,
	j9h: 213,
	p1m: 214,
	y9o: 215,
	u0r: 216,
	k9u: 217,
	t9q: 218,
	m9x: 219,
	g5m: 220,
	k4w: 221,
	v1a: 222,
	l2c: 223,
	t6q: 224,
	t9x: 225,
	y6q: 226,
	j6f: 227,
	b4o: 228,
	q0x: 229,
	l9u: 230,
	e4a: 231,
	j5x: 232,
	p4l: 233,
	o5t: 234,
	r0y: 235,
	j7v: 236,
	y7p: 237,
	o0a: 238,
	z9i: 239,
	z5v: 240,
	f6l: 241,
	v3x: 242,
	k0z: 243,
	e5b: 244,
	p2y: 245,
	s6t: 246,
	m7k: 247,
	n7c: 248,
	f7e: 249,
	c0l: 250,
	u9s: 251,
	r0m: 252,
	g9d: 253,
	j8l: 254,
	g0s: 255,
	a0w: 256,
	f7p: 257,
	k8w: 258,
	a0q: 259
};


const j1z = 0;
const j8y = 500;

function x9g(w5a)
{
	if (w5a.length != 3)
	{
		return 0;
	}
	let v5e = w5a[0];
	let w8c = w5a[1];
	let e8d = w5a[2];

	let i4c = 0;
	if (v5e == 'A' || v5e == 'a') i4c = 0;
	else if (v5e == 'B' || v5e == 'b') i4c = 1;
	else if (v5e == 'C' || v5e == 'c') i4c = 2;
	else if (v5e == 'D' || v5e == 'd') i4c = 3;
	else if (v5e == 'E' || v5e == 'e') i4c = 4;
	else return 0;
	if (isNaN(w8c) || isNaN(e8d))
	{
		return 0;
	}
	return i4c * 100 + y4s(w5a.substr(1, 2), 0) + 1;
}

function a4q(d8w)
{
	if (d8w)
	{
		let div = Math.trunc((d8w - 1) / 100);
		let o0t = (d8w - 1) % 100;
		let k9g = 'A';
		if (div == 0) k9g = 'A';
		else if (div == 1) k9g = 'B';
		else if (div == 2) k9g = 'C';
		else if (div == 3) k9g = 'D';
		else if (div == 4) k9g = 'E';
		return k9g + o0t.toString().padStart(2, '0');
	}
	else
	{
		return "";
	}
}
class y6h
{

constructor()
{
	this.i5u = 0;
	this.f9d = 0;
	this.b9d = 0;
}

g6i()
{
	let q3w = new y6h();
	q3w.y0i = this.i5u;
	q3w.c2q = this.f9d;
	q3w.h8q = this.b9d;
	return q3w;
}

k4u()
{
	return this.b9d == 0 && this.f9d == 0 && this.i5u == 0;
}

h1r()
{
	let h8q = this.b9d.toString().padStart(4, '0');
	let c2q = this.f9d.toString().padStart(2, '0');
	let y0i = this.i5u.toString().padStart(2, '0');
	return h8q + c2q + y0i;
}

p0l(z5k, w5a)
{
	let k6x = w5a.length;
	if (!k6x)
	{
		this.b9d = 0;
		this.f9d = 0;
		this.i5u = 0;
	}
	else if (z5k == "dd-mm-yyyy" || z5k == "dd.mm.yyyy")
	{
  	if (k6x == 4)
		{
      this.b9d = y4s(w5a.substr(1, 4), 0);
		}
		else if (k6x == 10)
		{
			this.i5u = y4s(w5a.substr(0, 2), 0);
			this.f9d = y4s(w5a.substr(3, 2), 0);
			this.b9d = y4s(w5a.substr(6, 4), 0);
		}
	}
	else if (z5k == "yyyy-mm-dd" || z5k == "yyyy.mm.dd")
	{
  	if (k6x == 4)
		{
      this.b9d = y4s(w5a.substr(1, 4), 0);
		}
		else if (k6x == 10)
		{
			this.i5u = y4s(w5a.substr(8, 2), 0);
			this.f9d = y4s(w5a.substr(5, 2), 0);
			this.b9d = y4s(w5a.substr(0, 4), 0);
		}
	}
	else if (z5k == "dd-mm-yy" || z5k == "dd.mm.yy")
	{
		if (k6x == 8)
		{
			this.i5u = y4s(w5a.substr(0, 2), 0);
			this.f9d = y4s(w5a.substr(3, 2), 0);
			this.b9d = y4s(w5a.substr(6, 2), 0) + 2000;
		}
	}
}

toString(z5k)
{
	let w5a = '';
	if (this.k4u())
	{
	}
	else if (z5k == "list")
	{
		let h8q = this.b9d.toString().padStart(4, '0');
		let c2q = this.f9d.toString().padStart(2, '0');
		let y0i = this.i5u.toString().padStart(2, '0');
		if (this.i5u)
		{
			w5a = y0i + "-" + c2q + "-" + h8q;
		}
		else if (this.f9d)
		{
			w5a = c2q + "-" + h8q;
		}
		else if (this.b9d)
		{
			w5a = h8q;
		}
	}
	else if (z5k == "dd-mm-yyyy")
	{
		let h8q = this.b9d.toString().padStart(4, '0');
		let c2q = this.f9d.toString().padStart(2, '0');
		let y0i = this.i5u.toString().padStart(2, '0');
		w5a = y0i + "-" + c2q + "-" + h8q;
	}
	else if (z5k == "dd.mm.yyyy")
	{
		let h8q = this.b9d.toString().padStart(4, '0');
		let c2q = this.f9d.toString().padStart(2, '0');
		let y0i = this.i5u.toString().padStart(2, '0');
		w5a = y0i + "." + c2q + "." + h8q;
	}
	else if (z5k == "yyyy-mm-dd")
	{
		let h8q = this.b9d.toString().padStart(4, '0');
		let c2q = this.f9d.toString().padStart(2, '0');
		let y0i = this.i5u.toString().padStart(2, '0');
		w5a = h8q + "-" + c2q + "-" + y0i;
	}
	else if (z5k == "yyyy.mm.dd")
	{
		let h8q = this.b9d.toString().padStart(4, '0');
		let c2q = this.f9d.toString().padStart(2, '0');
		let y0i = this.i5u.toString().padStart(2, '0');
		w5a = h8q + "." + c2q + "." + y0i;
	}
	else if (z5k == "yyyymmdd")
	{
		let h8q = this.b9d.toString().padStart(4, '0');
		let c2q = this.f9d.toString().padStart(2, '0');
		let y0i = this.i5u.toString().padStart(2, '0');
		w5a = h8q + c2q + y0i;
	}
	else if (z5k == "yyyy")
	{
		let h8q = this.b9d.toString().padStart(4, '0');
		w5a = h8q;
	}
	return w5a;
}

}

class v4k
{

constructor()
{
	this.g7i = new y1z();
	this.d7i = new w8t();
	this.t3u = 0;
	this.time = 0;
	this.j4k = "";
  this.l8m = y8f.b4z;
}

g6i()
{
	let z2m = new v4k();
	z2m.g7i = this.g7i.g6i();
	z2m.d7i = this.d7i.g6i();
	z2m.t3u = this.t3u;
	z2m.time = this.time;
	z2m.j4k = this.j4k;
  z2m.l8m = this.l8m;
	return z2m;
}

k4u()
{
	return this.g7i.k4u() &&
		this.d7i.k4u() &&
		this.t3u == 0 &&
		this.time == 0 &&
		this.j4k == "" &&
 		this.l8m == y8f.b4z;
}

}


class s8c
{

constructor()
{
	this.l7w = new v4k();
	this.k4y = new v4k();
	this.h8f = new n5k();
	this.t9j = new z3i();
	this.p3n = new f0t();
	this.j4k = new l5m();
	this.h1r = new y6h();
	this.i6r = f7y.b4z;
	this.d8w = 0;
	this.o1m = 0;
	this.z2c = 0;
	this.c1e = new g9n();
  this.id = new x6w();
}

g6i()
{
	let z8k = new s8c();
	z8k.l7w = this.l7w.g6i();
	z8k.k4y = this.k4y.g6i();
	z8k.h8f = this.h8f.g6i();
	z8k.t9j = this.t9j.g6i();
	z8k.p3n = this.p3n.g6i();
	z8k.j4k = this.j4k.g6i();
	z8k.h1r = this.h1r.g6i();
	z8k.i6r = this.i6r;
	z8k.d8w = this.d8w;
	z8k.o1m = this.o1m;
	z8k.z2c = this.z2c;
	z8k.c1e = this.c1e.g6i();
  z8k.id = this.id.g6i();
	return z8k;
}

k4u()
{
	return this.l7w.k4u() &&
		this.k4y.k4u() &&
		this.h8f.k4u() &&
		this.t9j.k4u() &&
		this.p3n.k4u() &&
		this.j4k.k4u() &&
		this.h1r.k4u() &&
		this.i6r == f7y.b4z &&
		this.d8w == 0 &&
		this.o1m == 0 &&
		this.z2c == 0 &&
		this.c1e.k4u();
}

b7q()
{
	let w5a = '';
	if (this.z2c)
	{
		w5a = this.o1m.toString() + "." + this.z2c.toString();
	}
	else if (this.o1m)
	{
		w5a = this.o1m.toString();
	}
	return w5a;
}

}


class x6w
{

constructor()
{
	this.z1j = '';
}

g6i()
{
	let o0n = new x6w();
	o0n.z1j = this.z1j;
	return o0n;
}

toString()
{
  return this.z1j;
}

}


class l5m
{

constructor()
{
	this.j4k = '';
}

g6i()
{
	let j4c = new l5m();
	j4c.j4k = this.j4k;
	return j4c;
}

k4u()
{
	return this.j4k.length == 0;
}

y3l()
{
	return this.j4k;
}

}


class y1z
{

constructor()
{
	this.z2b = '';
	this.x9d = '';
}

g6i()
{
	let e1i = new y1z();
	e1i.z2b = this.z2b;
	e1i.x9d = this.x9d;
	return e1i;
}

k4u()
{
	return this.x9d.length == 0 &&
		this.z2b.length == 0;
}

z0j()
{
	if (!this.x9d.length == 0 && !this.z2b.length == 0)
	{
		return this.x9d + "," + this.z2b;
	}
	else if (this.x9d.length == 0 && this.z2b.length == 0)
	{
		return "";
	}
	else if (this.z2b.length == 0)
	{
		return this.x9d;
	}
	else
	{
		return this.z2b;
	}
}

w4y()
{
	return this.z0j().replace(/,/g, " ");
}

z0z()
{
	return this.o4j(1).replace(/,/g, " ");
}

o4j(j3c)
{
	if (this.x9d.length == 0)
	{
		if (this.z2b.length == 0 || j3c < 1)
		{
			return "";
		}
		else
		{
			return this.z2b.substring(0, j3c);
		}
	}
	else
	{
		if (this.z2b.length == 0 || j3c < 1)
		{
			return this.x9d;
		}
		else
		{
			return this.x9d + "," + this.z2b.substring(0, j3c);
		}
	}
}

y9q(j4g)
{
	let w5a = j4g.trim();
	let d5q = w5a.lastIndexOf(",");
	if (d5q != -1)
	{
		this.x9d = w5a.substr(0, d5q).trim();
		this.z2b = w5a.substr(d5q+1, w5a.length).trim();
		if (this.z2b.length != 0)
		{
			if (this.z2b.charAt(0).toLowerCase() == this.z2b.charAt(0))
			{
				this.x9d += ",";
				this.x9d += this.z2b;
				this.z2b = "";
			}
		}
	}
	else
	{
		this.x9d = w5a;
		this.z2b = "";
	}
}

y3l()
{
	return this.z0j();
}

}

const f7y =
{
	b4z : 0,
	t8s : 1,
	c8c : 2,
	c7m : 3,
	o7j : 4,
	s6g : 5,
	o8k : 6,
	m2h : 7,
	s1h : 8,
	h7j : 9,
	d8n : 10,
	o4y : 11,
	z1n : 12,
	e1z : 13,
	c0a : 14,
	w3a : 15
};


function n0c(i6r)
{
	switch (i6r)
	{
		case f7y.t8s:
			return "2-0";
		case f7y.c7m:
			return "1-1";
		case f7y.c8c:
			return "0-2";
		default:
			return "";
	}
}
const n5u =
{
	a0x : 0,
	z3w : 1,
	n1o : 2
};

const k1g =
[
	[ n5u.a0x,   "High" ],
	[ n5u.z3w, "Middle" ],
	[ n5u.n1o,    "Low" ]
];

class f0t
{

constructor()
{
	this.j4k = '';
	this.p4w = '';
	this.t4q = new y6h();
	this.a1v = new y6h();
	this.b6v = 0;
	this.u5x = n5u.a0x;
}

g6i()
{
	let x6o = new f0t();
	x6o.j4k = this.j4k;
	x6o.p4w = this.p4w;
	x6o.t4q = this.t4q.g6i();
	x6o.a1v = this.a1v.g6i();
	x6o.b6v = this.b6v;
	x6o.u5x = this.u5x;
	return x6o;
}

k4u()
{
	return this.j4k.length == 0 &&
		this.p4w.length == 0 &&
		this.t4q.k4u() &&
		this.a1v.k4u() &&
		this.b6v == 0 &&
		this.u5x == n5u.a0x;
}

y3l()
{
	let w5a = this.j4k;
	if (this.p4w.length)
	{
		if (w5a.length)
		{
			w5a += " ";
		}
		w5a += this.p4w;
	}
	return w5a;
}

}


const l5u =
{
	o4q : 0,
	z1t : 1,
	c3n : 2,
	v9t : 3,
	a8k : 4,
	v7o : 5,
	u1j : 6,
	i9f : 7,
	t1i : 8,
	c6p : 9,
	r8u : 10,
	n0n : 11,
	q8v : 12,
	m8o : 13,
	q9y : 14,
	m1z : 15
};

class g9n
{

constructor()
{
	this.value = 0;
}

j7z(value)
{
	this.value = value;
}

g6i()
{
	let n7l = new g9n();
	n7l.value = this.value;
	return n7l;
}

k4u()
{
	return this.value == 0;
}

e9k()
{
	return this.value != 0;
}

b4z()
{
	return this.value == 0;
}

i4r()
{
	let b9q = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.t8d(i))
		{
			b9q++;
		}
	}
	return b9q;
}

g6y()
{
	this.value = 0;
}

set(q2y, d0h)
{
	if (d0h)
	{
		this.value |= (1 << q2y);
	}
	else
	{
		this.value &= ~(1 << q2y);
	}
}

t8d(q2y)
{
	return (this.value & (1 << q2y)) != 0;
}

l2e()
{
	return this.value;
}

}

function q1j(h8q)
{
	return h8q.toString().padStart(4, '0');
}

class w8t
{

constructor()
{
	this.z0j = '';
	this.k6t = 0;
	this.h8q = 0;
	this.z6e = false;
	this.l8m = y8f.b4z;
}

g6i()
{
	let x5y = new w8t();
	x5y.z0j = this.z0j;
	x5y.k6t = this.k6t;
	x5y.h8q = this.h8q;
	x5y.z6e = this.z6e;
	x5y.l8m = this.l8m;
	return x5y;
}

k4u()
{
	return this.z0j.length == 0 &&
		this.k6t == 0 &&
		this.h8q == 0 &&
		this.z6e == false &&
		this.l8m == y8f.b4z;
}

w0q()
{
	let w5a = this.z0j;
	if (this.k6t)
	{
		if (w5a.length)
		{
			w5a += " ";
		}
		w5a += this.k6t;
	}
	return w5a;
}

y3l()
{
	let w5a = this.z0j;
	if (this.k6t)
	{
		if (w5a.length)
		{
			w5a += " ";
		}
		w5a += this.k6t;
	}
	if (w5a.length)
	{
		w5a += " ";
	}
	w5a += this.a1u();
	return w5a;
}


w1u()
{
	let w5a = this.z0j;
	if (this.k6t > 1)
	{
		w5a += " ";
		w5a += this.k6t;
	}
	return w5a;
}

a1u()
{
	let w5a = '';
	if (this.z6e)
	{
		let h9f = q1j(this.h8q);
		let d0l = q1j(this.h8q + 1);
		let z7k = h9f + "/" + d0l.substr(2, 2);
		w5a = z7k;
	}
	else
	{
		w5a = q1j(this.h8q);
	}
	return w5a;
}

}

class q4s
{

constructor()
{
	this.l5k = 0;
	this.c9e = 0;
	this.b1x = 0;

}

}

function g6a(w5a, c1g, time)
{
	time.l5k = 0;
	time.c9e = 0;
	time.b1x = 0;

	let k6x = w5a.length;
	if (!k6x || w5a == "?")
	{
		return;
	}
	let i = 0;
	for (; i < k6x; i++)
	{
		if (!isNaN(w5a[i]))
		{
			break;
		}
	}
	let l8b = '';
	for (; i < k6x; i++)
	{
		if (isNaN(w5a[i]))
		{
			break;
		}
		l8b += w5a[i].toString();
	}
	for (; i < k6x; i++)
	{
		if (!isNaN(w5a[i]))
		{
			break;
		}
	}
	let x7y = '';
	for (; i < k6x; i++)
	{
		if (isNaN(w5a[i]))
		{
			break;
		}
		x7y += w5a[i].toString();
	}
	for (; i < k6x; i++)
	{
		if (!isNaN(w5a[i]))
		{
			break;
		}
	}
	let e9i = '';
	for (; i < k6x; i++)
	{
		if (isNaN(w5a[i]))
		{
			break;
		}
		e9i += w5a[i].toString();
	}
	let v0n = y4s(l8b, 0);
	let e2w = y4s(x7y, 0);
	let f1o = y4s(e9i, 0);
	if (
		v0n < 0 || v0n > c1g ||
		e2w < 0 || e2w > 59 ||
		f1o < 0 || f1o > 59)
	{
		v0n = 0;
		e2w = 0;
		f1o = 0;
	}
	time.l5k = v0n;
	time.c9e = e2w;
	time.b1x = f1o;
}

function j1o(w5a)
{
	if (w5a.length == 0)
	{
		return 0;
	}
	else
	{
		let time = new q4s();
		g6a(w5a, 9, time);
		return time.l5k * 60 + time.c9e;
	}
}


const w7g =
{
	b4z : 0,
	m7o : 1,
	e5k : 2,
	h8f : 3,
	i4i : 4,
	f9f : 5,
	l3f : 6,
	v1v : 7
};

const n2p =
[
	[ w7g.b4z, 			 	""                   ],
	[ w7g.m7o,  		 	"SingleGame"         ],
	[ w7g.e5k,  		 	"Match"              ],
	[ w7g.h8f,  "RoundRobin"         ],
	[ w7g.i4i,   		"SwissSystem"        ],
	[ w7g.f9f,    "Knockout"           ],
	[ w7g.l3f,"Simul"              ],
	[ w7g.v1v,"ScheveningenSystem" ]
];

class n5k
{

constructor()
{
	this.j4k = '';
	this.i1h = '';
	this.u0z = new y6h();
	this.z1q = new y6h();
	this.v9u = n3r.f4p;
	this.a9a = 0;
	this.l8m = y8f.b4z;
	this.type = w7g.b4z;
	this.a3s = 0;
	this.i8o = false;
	this.f1e = false;
	this.v0q = false;
	this.y9p = false;
}

g6i()
{
	let g2v = new n5k();
	g2v.j4k = this.j4k;
	g2v.i1h = this.i1h;
	g2v.u0z = this.u0z.g6i();
	g2v.z1q = this.z1q.g6i();
	g2v.v9u = this.v9u;
	g2v.a9a = this.a9a;
	g2v.l8m = this.l8m;
	g2v.type = this.type;
	g2v.a3s = this.a3s;
	g2v.i8o = this.i8o;
	g2v.f1e = this.f1e;
	g2v.v0q = this.v0q;
	g2v.y9p = this.y9p;
	return g2v;
}

k4u()
{
	return this.j4k.length == 0 &&
		this.i1h.length == 0 &&
		this.u0z.k4u() &&
		this.z1q.k4u() &&
		this.v9u == n3r.f4p &&
		this.a9a == 0 &&
		this.l8m == y8f.b4z &&
		this.type == w7g.b4z &&
		!this.a3s &&
		!this.i8o &&
		!this.f1e &&
		!this.v0q &&
		!this.y9p;
}

y3l()
{
	let w5a = this.j4k;
	if (this.i1h.length)
	{
		if (w5a.length)
		{
			w5a += " ";
		}
		w5a += this.i1h;
	}
	if (w5a.length)
	{
		w5a += " ";
	}
	let h8q = this.u0z.h8q.toString().padStart(4, '0');
	w5a += h8q;
	return w5a;
}

}



const n3r =
{
	f4p : 0,
	e9z : 1,
	z2h : 2,
	h1c : 3
};

const m8u =
[
	[ n3r.f4p, "Normal" ],
	[ n3r.e9z,  "Rapid"  ],
	[ n3r.z2h,  "Blitz"  ],
	[ n3r.h1c,   "Corr"   ]
];

function a5z(v9u)
{
	return m8u[v9u][1];
}

function a3m()
{
	let x2h = [];
	for (const v9u of m8u)
	{
		x2h.push(v9u[1]);
	}
	return x2h;
}

class d1z
{

constructor()
{
	this.r7h = '';
	this.i6u = '';
	this.d2p = u1p.b4z;
	this.style = j2a.b4z;
	this.value = j7y.b4z;
	this.u6n = new c4l();
	this.d8l = new m9a();
	this.f5h = new z8f();
	this.a8p = a0i.b4z;
	this.e7w = false;
	this.a0h = false;
  this.q2j = false;
}

g6i()
{
	let y6e = new d1z();
	y6e.r7h = this.r7h;
	y6e.i6u = this.i6u;
	y6e.d2p = this.d2p;
	y6e.style = this.style;
	y6e.value = this.value;
	y6e.u6n = this.u6n.g6i();
	y6e.d8l = this.d8l.g6i();
	y6e.f5h = this.f5h.g6i();
	y6e.a8p = this.a8p;
	y6e.e7w = this.e7w;
	y6e.a0h = this.a0h;
 	y6e.q2j = this.q2j;
	return y6e;
}

k4u()
{
	return this.r7h.length == 0 &&
		this.i6u.length == 0 &&
		this.d2p == u1p.b4z &&
		this.style == j2a.b4z &&
		this.value == j7y.b4z &&
		this.u6n.k4u() &&
		this.d8l.k4u() &&
		this.f5h.k4u() &&
		this.a8p == a0i.b4z &&
		this.e7w == false &&
		this.a0h == false &&
 		this.q2j == false;
}

}

const a0i =
{
	b4z : 0,
	k3l : 1,
	z3w : 2,
	j7l : 3
};

const s1g =
{
	r7c : 0,
	v6t : 1,
	d7p : 2,
	a5v : 3,
	r9m : 4,
	y2q : 5,
	p6n : 6,
	w3a : 7,
	d9h : 8,
	m7h : 9,
	s0o : 10,
	o2v : 11,
	a3k : 12,
	l1t : 13,
	f9n : 14,
	t1z : 15
};

class c4l
{

constructor()
{
	this.value = 0;
}

j7z(value)
{
	this.value = value;
}

g6i()
{
	let b0u = new c4l();
	b0u.value = this.value;
	return b0u;
}

k4u()
{
	return this.value == 0;
}

e9k()
{
	return this.value != 0;
}

b4z()
{
	return this.value == 0;
}

i4r()
{
	let b9q = 0;
	for (let i = 0; i < 16; i++)
	{
		if (this.t8d(i))
		{
			b9q++;
		}
	}
	return b9q;
}

g6y()
{
	this.value = 0;
}

set(q2y, d0h)
{
	if (d0h)
	{
		this.value |= (1 << q2y);
	}
	else
	{
		this.value &= ~(1 << q2y);
	}
}

t8d(q2y)
{
	return (this.value & (1 << q2y)) != 0;
}

l2e()
{
	return this.value;
}

}

const u1p =
{
	b4z : 0,
	w0v : 1,
	n6x : 2,
	v1m : 3,
	m0l : 4,
	a3h : 5,
	s7y : 6
};

const o6q =
[
	[ u1p.b4z,     		  ""   ],
	[ u1p.w0v,       		  "RR" ],
	[ u1p.n6x, 		  "&#8979;"  ],
	[ u1p.v1m, 		  "&#8804;"  ],
	[ u1p.m0l,  "="  ],
	[ u1p.a3h,   "&#9651;"  ],
	[ u1p.s7y,  "&#9661;"  ]
];

function a4o(d2p)
{
	return o6q[d2p][1];
}


const j2a =
{
	b4z : 0,
	e9f : 1,
	e6s : 2,
	h8t : 3,
	e4e : 4,
	l6i : 5,
	i3j : 6,
	b1j : 7,
	y0b : 8
};

const n9q =
[
	[ j2a.b4z,     		"" 	 ],
	[ j2a.e9f,       	"!"  ],
	[ j2a.e6s, 					"?"  ],
	[ j2a.h8t,	"!?" ],
	[ j2a.e4e,	 		"?!" ],
	[ j2a.l6i,  	"!!" ],
	[ j2a.i3j, 			"??" ],
	[ j2a.b1j, 		"&#8857;"  ],
	[ j2a.y0b, 		"&#9723;"  ]
];

function i9n(style)
{
	return n9q[style][1];
}


class s7i
{

constructor()
{
	this.r4w = new c3k();
	this.m7n = null;
	this.y1m = null;
	this.h4z = null;
	this.w9a = null;
  this.k6t = 0; 
}

c3p(r4w)
{
	this.r4w = r4w.g6i();
}

i2r(o4a, h4g, g6x, w6v)
{
	this.r4w.i2r(o4a, h4g, g6x, w6v);
}

}

class p8d
{

constructor()
{
	this.z5n = null;
	this.r4w = null;
}

n0a(k9o)
{
	return this.z5n == k9o.z5n;
}

g4t(k9o)
{
	return !this.n0a(k9o);
}

g6i()
{
	let m5q = new p8d();
  m5q.z5n = this.z5n;
  m5q.r4w = this.r4w;
	return m5q;
}

}


class n2s
{

constructor()
{
	this.y1g = new z5d();
 	this.g0r = null;
	this.j8e = 1;
	this.y1g.d8m();
  this.p4b = new d1z();
}

u9g(k9o)
{
	this.n6t(k9o.y1g, k9o.j8e);
	this.p4b = k9o.p4b.g6i();
	this.g0r = this.s0x(k9o.g0r);
}

g6i()
{
	let v3z = new n2s();
	v3z.u9g(this);
	return v3z;
}

n6t(n5j, s5c)
{
	this.y1g = n5j.g6i();
	this.j8e = s5c;
	this.p4b = new d1z();
	this.g0r = null;
}

s5c()
{
	return this.j8e;
}

n5j()
{
	return this.y1g.g6i();
}


k8h()
{
	let d5q = this.b8q();
	this.h5n(d5q);
	return d5q;
}


k1b()
{
	let h5n = this.k8h();
	return this.o4a(h5n);
}


c6n(d5q)
{
  let s2i = this.i1q(d5q) + 1;
	if (s2i)
	{
		return this.j8e +
			Math.floor((s2i - 1 + this.y1g.b3q()) / 2);
	}
	else
	{
		return this.j8e;
	}
}

i1q(d5q)
{
	let s2i = 0;
	if (!d5q.z5n)
	{
		return 0;
	}
	let g1n = d5q.z5n;
	while (1)
	{
		s2i++;
		if (!g1n.y1m)
		{
			let b9k = g1n;
			while (b9k.h4z)
			{
				b9k = b9k.h4z;
			}
			if (!b9k.y1m)
			{
				break;
			}
		}
		if (g1n.y1m)
		{
			g1n = g1n.y1m;
		}
		else
		{
			let b9k = g1n;
			while (b9k.h4z)
			{
				b9k = b9k.h4z;
			}
			g1n = b9k.y1m;
		}
	}
	return s2i;
}


l2w()
{
	let z0c = 0;
	let j7m = this.g0r;
	while (j7m)
	{
		z0c++;
		j7m = j7m.m7n;
	}
	return z0c;
}

x2d()
{
	return this.g0r != null;
}

m1l(d5q)
{
	return d5q.n0a(this.b8q());
}

u1s(d5q)
{
	if (d5q.z5n)
	{
		return d5q.z5n.m7n == null;
	}
	else if (this.g0r)
	{
		return false;
	}
	else
	{
		return true;
	}
}

j9a(d5q)
{
	if (!this.m1l(d5q))
	{
		if (d5q.z5n.y1m)
		{
			d5q.z5n = d5q.z5n.y1m;
			d5q.r4w = d5q.z5n.r4w;
		}
		else
		{
			let g1n = d5q.z5n;
			while (g1n.h4z)
			{
				g1n = g1n.h4z;
			}
			g1n = g1n.y1m;
			d5q.z5n = g1n;
      if (d5q.z5n)
      {
  			d5q.r4w = d5q.z5n.r4w;
      }
      else
      {
        d5q.r4w = null;
      }
		}
	}
}

s8z(d5q)
{
	if (!this.u1s(d5q))
	{
		d5q.z5n = this.q5d(d5q);
		d5q.r4w = d5q.z5n.r4w;
	}
}

c1p(d5q, e7u)
{
	let i2s = this.b2m(d5q);
	if (e7u < 0 || e7u >= i2s)
	{
		return;
	}
	let b9k = this.q5d(d5q);
	let i = 0;
	while (i != e7u)
	{
		i++;
		b9k = b9k.w9a;
	}
	d5q.z5n = b9k;
	d5q.r4w = d5q.z5n.r4w;
}

m9v(d5q)
{
	if (!d5q.z5n)
	{
		return this.j8e;
	}
	let s2i = this.i1q(d5q);
	if (s2i)
	{
		return this.j8e +
      Math.floor((s2i - 1 + this.y1g.b3q()) / 2);
	}
	else
	{
		return this.j8e;
	}
}

b8q()
{
	let d5q = new p8d();
	d5q.z5n = null;
	d5q.r4w = null;
	return d5q;
}

h5n(d5q)
{
	if (!this.u1s(d5q))
	{
		let g1n = this.q5d(d5q);
		while (true)
		{
			if (!g1n.m7n)
			{
				break;
			}
			g1n = g1n.m7n;
		}
		d5q.z5n = g1n;
		d5q.r4w = d5q.z5n.r4w;
	}
}

h2t(o2t)
{
	let d5q = this.b8q();
	if (o2t > 0)
	{
    this.o2t = 0;
		this.i4k(d5q, o2t);
		return d5q;
	}
	else
	{
		return d5q;
	}
}

i4k(d5q, o2t)
{
	while (true)
	{
		if (this.u1s(d5q))
		{
			return false;
		}
		let i2s = this.b2m(d5q);
		if (i2s > 1)
		{
			let r4a = d5q.g6i();
			for (let i = 1; i < i2s; i++)
			{
				this.c1p(d5q, i);
				this.o2t++;
				if (this.o2t == o2t)
				{
					return true;
				}
				if (this.i4k(d5q, o2t))
				{
					return true;
				}
        d5q.z5n = r4a.z5n;
        d5q.r4w = r4a.r4w;
			}
		}
		this.s8z(d5q);
		this.o2t++;
		if (this.o2t == o2t)
		{
			return true;
		}
	}
}

q6x(d5q)
{
	if (!d5q.z5n)
	{
		return 0;
	}
	else
	{
		return d5q.z5n.k6t;
	}
}

k6p(d5q)
{
	let n8q = [];
 	if (!d5q.z5n)
  {
		return n8q;
	}
	let g1n = d5q.z5n;
	while (1)
	{
		n8q.push(g1n);
		if (!g1n.y1m)
		{
			let b9k = g1n;
			while (b9k.h4z)
			{
				b9k = b9k.h4z;
			}
			if (!b9k.y1m)
			{
				break;
			}
		}
		if (g1n.y1m)
		{
			g1n = g1n.y1m;
		}
		else
		{
			let b9k = g1n;
			while (b9k.h4z)
			{
				b9k = b9k.h4z;
			}
			g1n = b9k.y1m;
		}
	}
	return n8q.reverse();
}

o4b(d5q)
{
	let n8q = this.k6p(d5q);
	let i2s = this.b2m(d5q);
	if (i2s == 0)
	{
		return n8q;
	}
	let f7v = this.d9u(d5q, 0);
	while (f7v)
	{
		n8q.push(f7v);
		f7v = f7v.m7n;
	}
	return n8q;
}

b2m(d5q)
{
	let f7v = this.q5d(d5q);
	if (!f7v)
	{
		return 0;
	}
	let i2s = 1;
	while (f7v.w9a)
	{
		i2s++;
		f7v = f7v.w9a;
	}
	return i2s;
}

n3c(d5q, a5i)
{
	if (this.m1l(d5q))
	{
		this.g0r = a5i;
		d5q.z5n = a5i;
		d5q.r4w = d5q.z5n.r4w;
	}
	else
	{
		d5q.z5n.m7n = a5i;
		a5i.y1m = d5q.z5n;
		d5q.z5n = a5i;
		d5q.r4w = d5q.z5n.r4w;
	}
}

p0s(d5q, a5i)
{
	let b9k = this.q5d(d5q);
	while (b9k.w9a)
	{
		b9k = b9k.w9a;
	}
	b9k.w9a = a5i;
	a5i.h4z = b9k;

	d5q.z5n = a5i;
	d5q.r4w = d5q.z5n.r4w;
}

q5a(d5q, r4w)
{
	let a5i = new s7i();
 	a5i.c3p(r4w);
	if (this.u1s(d5q))
	{
		this.n3c(d5q, a5i);
	}
	else
	{
		this.p0s(d5q, a5i);
	}
}


t4z(d5q, n8q)
{
	for (const r4w of n8q)
	{
		this.q5a(d5q, r4w);
	}
}


v4y(d5q)
{
	let b9k = this.d9u(d5q, 1);
	if (!b9k)
	{
		return false;
	}
	while (b9k)
	{
		let j7m = b9k.m7n;
		while (j7m)
		{
			if (j7m.w9a)
			{
				return false;
			}
			j7m = j7m.m7n;
		}
		b9k = b9k.w9a;
	}
	return true;
}

y6u()
{
	let j7m = this.g0r;
	while (j7m)
	{
		if (j7m.w9a)
		{
			return true;
		}
		j7m = j7m.m7n;
	}
	return false;
}

j0m()
{
	if (!this.p4b.k4u())
	{
		return true;
	}
	if (this.y6u())
	{
		return true;
	}
	let j7m = this.g0r;
	while (j7m)
	{
		if (j7m.r4w.j0m())
		{
			return true;
		}
		j7m = j7m.m7n;
	}
	return false;
}

q5d(d5q)
{
	if (d5q.z5n)
	{
		return d5q.z5n.m7n;
	}
	return this.g0r;
}

d9u(d5q, e7u)
{
	let i = 0;
	let b9k = this.q5d(d5q);
	while (b9k && i != e7u)
	{
		b9k = b9k.w9a;
		i++;
	}
	return b9k;
}

s0x(b9k)
{
	let h2b = b9k;
	let o5f = null;
	let a5i = null;
	let s7h = null;
	while (h2b)
	{
		a5i = new s7i();
		a5i.c3p(h2b.r4w);
		if (o5f)
		{
			o5f.m7n = a5i;
			a5i.y1m = o5f;
		}
		else
		{
			s7h = a5i;
		}
		o5f = a5i;
		if (h2b.w9a && !h2b.h4z)
		{
			let f8e = h2b.w9a;
			let x4h = o5f;
			while (f8e)
			{
				let s3b = this.s0x(f8e);
				x4h.w9a = s3b;
				s3b.h4z = x4h;
				x4h = s3b;
				f8e = f8e.w9a;
			}
		}
		h2b = h2b.m7n;
	}
	return s7h;
}

y2p()
{
	return this.p4b;
}

r7d()
{
	return this.p4b.r7h;
}

a8h(i1k)
{
	this.p4b.r7h = i1k;
}

s2x()
{
	return !this.p4b.d8l.k4u();
}

q4l(d8l)
{
	this.p4b.d8l = d8l.g6i();
}

z1i()
{
	return this.p4b.d8l;
}

r9x()
{
	return !this.p4b.f5h.k4u();
}

m8j(f5h)
{
	this.p4b.f5h = f5h.g6i();
}

z1v()
{
	return this.p4b.f5h;
}

i9c()
{
	return !this.p4b.u6n.k4u();
}

s6s(u6n)
{
	this.p4b.u6n = u6n.g6i();
}

m6w()
{
	return this.p4b.u6n;
}

n2r(o2t)
{
  if (o2t == 0)
  {
    return true;
  }
	let j7m = this.g0r;
	while (j7m)
	{
    if (j7m.k6t == o2t)
    {
      return true;
    }
		j7m = j7m.m7n;
	}
	return false;
}

g1y()
{
	let d5q = this.b8q();
	this.o2t = 0;
	this.x0n(d5q);
}

x0n(d5q)
{
	while (true)
	{
		if (this.u1s(d5q))
		{
			return;
		}
		let i2s = this.b2m(d5q);
		if (i2s > 1)
		{
			let r4a = d5q.g6i();
			for (let i = 1; i < i2s; i++)
			{
				this.c1p(d5q, i);
				this.o2t++;
        d5q.z5n.k6t = this.o2t;
				this.x0n(d5q);
        d5q.z5n = r4a.z5n;
        d5q.r4w = r4a.r4w;
			}
		}
		this.s8z(d5q);
  	this.o2t++;
    d5q.z5n.k6t = this.o2t;
	}
}

o4a(d5q)
{
	let o4a = this.y1g.g6i();
	if (!d5q.z5n)
	{
		return o4a;
	}
	let n8q = this.t0t(d5q);
  for (const r4w of n8q)
	{
		o4a.s8z(r4w.z8i());
	}
	return o4a;
}

t0t(d5q)
{
	let n8q = [];
 	if (!d5q.z5n)
  {
		return n8q;
	}
	let g1n = d5q.z5n;
	while (1)
	{
		n8q.push(g1n.r4w);
		if (!g1n.y1m)
		{
			let b9k = g1n;
			while (b9k.h4z)
			{
				b9k = b9k.h4z;
			}
			if (!b9k.y1m)
			{
				break;
			}
		}
		if (g1n.y1m)
		{
			g1n = g1n.y1m;
		}
		else
		{
			let b9k = g1n;
			while (b9k.h4z)
			{
				b9k = b9k.h4z;
			}
			g1n = b9k.y1m;
		}
	}
	return n8q.reverse();
}


w8h()
{
	this.p4b = new d1z();
	this.g0r = null; 
  
}


u5p()
{
	let n8q = [];
	let j7m = this.g0r;
	while (j7m)
	{
		n8q.push(j7m.r4w);
		j7m = j7m.m7n;
	}
	return n8q;
}


}

const j7y =
{
	b4z : 0,
	o7j : 1,
	s6g : 2,
	o8k : 3,
	m2h : 4,
	s1h : 5,
	h7j : 6,
	d8n : 7,
	o4y : 8,
	z1n : 9,
	e1z : 10,
	c0a : 11,
	w3a : 12,
	y3j : 13,
	s1p : 14,
	a5v : 15
};

const y9f =
[
	[ j7y.b4z,     						  ""    ],
	[ j7y.o7j,        "+&#8211;" ],
	[ j7y.s6g, 						"&#177;" ],
	[ j7y.o8k,		"&#10866;"  ],
	[ j7y.m2h, 							"="   ],
	[ j7y.s1h,  							"&#8734;" ],
	[ j7y.h7j,  	"&#10865;"],
	[ j7y.d8n, 						"&#8723;" ],
	[ j7y.o4y, 				"&#8211;+"],
	[ j7y.z1n,						"&#8773;" ],
	[ j7y.e1z, 						"&#8646;" ],
	[ j7y.c0a,  						"&#8593;" ],
	[ j7y.w3a, 								"&#8594;" ],
	[ j7y.y3j, 					"&#8853;" ],
	[ j7y.s1p,		"&#10227;"],
	[ j7y.a5v, 								"N"   ]
];

function q5g(value)
{
	return y9f[value][1];
}


const q4t =
{
	e5e : 0,
	j0z : 1,
	l5n : 2
};

const y6w =
{
	b4z : 0,
	m6x : 1,
	h0i : 2,
	n2b : 3,
	r6z : 4,
	d2p : 5,
	i6u : 6,
	r7h : 7,
	z5s : 8,
	u6n : 9,
	e7w : 10,
	a0h : 11
};

/*
TO DO
- Aanpassen voor tekst after van c0g daar kan dia inzitten (zie c++)
- Vette tekst en niet vette m6x testen bij wel/niet MultiPV
*/
class j2s
{

constructor()
{
	this.k4c = new b2u();
  this.a6p = true;
  this.o2b = false;
  this.a0a = true;
  this.t8r = true;
  this.p7u = q4t.e5e;
  this.u4c = false;
  this.d6g = true;
 	this.z4l = true;
 	this.x3g = -1;
  this.u9a = false;
  this.x5x = false;
	this.l9q = false;
	this.j0h = true;
  this.m4p = false;
  this.r6l = false;
  this.x7r = 0;
	this.p9q = true;
  this.g5o = null;
 	this.s4r = y6w.b4z;
}

s3t(n8q)
{
	this.g5o = n8q;
 	let b8q = this.g5o.b8q();
	let n5j = this.g5o.n5j();
	this.s4r = y6w.b4z;
	this.j0h = true;
	this.x5x = false;
	this.l9q = false;
	this.u9a = false;
	this.m4p = this.g5o.j0m();
	this.p9q = true;
	this.x7r = 0;

	if (this.u4c)
	{
		this.c0f(y6w.h0i);
		this.h4j();
	}
	else
	{
    
    if (this.p7u == q4t.j0z ||
      (this.p7u == q4t.l5n && !n5j.g2c()))
    {
      if (this.t8r)
      {
        this.a7h(b8q, n5j, x7r);
        this.j0h = true;
      }
    }

    this.c0f((this.m4p && !this.q2j) ? y6w.m6x : y6w.h0i);
    this.g4q(this.m4p);
    this.q5a(b8q, "");
    this.v7m(b8q, this.g5o.y2p().r7h);

    if (this.g5o.x2d())
    {
      this.o7a();
    }
   	this.c0f(y6w.b4z);
   	this.r3q();
  }
}

h4j()
{
	let d5q = this.g5o.b8q();
	let b2m = this.g5o.b2m(d5q);
	for (let i = 0; i < b2m; i++)
	{
    this.k4c.b3u('<div class="variation-row">');
		d5q = this.g5o.b8q();
  	let o4a = this.g5o.n5j();
	  let m9v = this.g5o.s5c();
		this.g5o.c1p(d5q, i);
		this.j0h = true;
		let w2k = true;
		let r4w = d5q.r4w;
		let i6u = r4w.i6u();
		if (i6u.length)
		{
			this.b7u(d5q, i6u);
		}
		this.c0f(y6w.h0i);
		do
		{
			if (w2k)
			{
				d5q.r4w.d1p();
			}
			this.u2p(d5q, o4a, m9v);
			if (w2k)
			{
				d5q.r4w.d7d(i6u);
				w2k = false;
			}
			if (this.g5o.u1s(d5q))
			{
				break;
			}
			o4a.s8z(d5q.r4w);
			if (o4a.s6y())
			{
				m9v++;
			}
			this.g5o.s8z(d5q);
		} while (true);
    this.k4c.b3u('<div');
	}
}

o7a()
{
  let j3e = 0;
 	let d5q = this.g5o.b8q();
	let o4a = this.g5o.n5j();
  let m9v = this.g5o.s5c();

	let j5v = 100000;
	if (this.x3g == 0)
	{
		return;
	}
	if (this.x3g != -1)
	{
		j5v = this.x3g;
	}
	let g5v = m9v + j5v - 1;
	this.j0h = true;
	while (true)
	{
		let b2m = this.g5o.b2m(d5q);
		while (m9v <= g5v && !this.g5o.u1s(d5q))
		{
      this.g5o.s8z(d5q);
    	this.c0f((this.m4p && !this.q2j) ? y6w.m6x : y6w.h0i);
			this.u2p(d5q, o4a, m9v);
			o4a.s8z(d5q.r4w.z8i());
 			if (o4a.s6y())
			{
				m9v++;
			}
			if (this.z4l && b2m > 1)
			{
				break;
			}
			b2m = this.g5o.b2m(d5q);
		}
		if (!b2m || m9v > g5v)
		{
			return;
		}
    o4a.j9a(d5q.r4w.z8i());
		if (o4a.b3q())
		{
			m9v--;
		}
    this.g5o.j9a(d5q);
		for (let i = 1; i < b2m; i++)
		{
      j3e++;
      let v6p = "<span class=\"tdline\" data-level=\"";
      v6p += j3e.toString();
      v6p += "\">";
      this.k4c.b3u(v6p);
			this.o3q(y6w.n2b);
			this.n3f("[", true);
			let d2p = '';
      this.a4e(d5q, o4a, m9v, i, d2p, j3e);
			this.c0f(y6w.n2b);
			this.n3f("]", true);
      this.k4c.b3u("</span>");
      j3e--;
     	this.c0f((this.m4p && !this.q2j) ? y6w.m6x : y6w.h0i);
		}
		this.o3q(this.s4r);
    this.g5o.s8z(d5q);
    o4a.s8z(d5q.r4w.z8i());
		if (o4a.s6y())
		{
			m9v++;
		}
		this.j0h = true;
	}
}

u2p(d5q, o4a, m9v)
{
	if (this.g5o.m1l(d5q))
	{
		return;
	}
 	let r4w = d5q.r4w;

	let w5a = '';
  let c8d = false;
  if (this.a6p)
	{
		if (r4w.y2y())
		{
			if (!this.g5o.m1l(d5q))
			{
        let k9i = d5q.g6i();
        this.g5o.j9a(k9i);
        if (k9i.r4w)
        {
  				if (k9i.r4w.r3f())
	  			{
		  			c8d = true;
			  	}
        }
			}
		}
  }
	if (this.x5x)
	{
		w5a = "(";
		this.x5x = false;
		if (this.a6p && r4w.w9h())
		{
			this.n3f("(", true);
			let t5p = this.s4r;
			this.b7u(d5q, r4w.i6u());
			this.c0f(t5p);
			w5a = "";
      c8d = true;
		}
	}
	else
	{
		if (this.a6p && r4w.w9h())
		{
  	  let t5p = this.s4r;
	  	this.b7u(d5q, r4w.i6u());
		  this.c0f(t5p);
      c8d = true;
    }
	}
	if (r4w.f3j())
	{
		w5a += a4o(r4w.d2p());
	}
	let l8f = r4w.d9v();
	if (l8f)
	{
    w5a += m9v;
		w5a += '.';
	}
	else
	{
		if (this.j0h || c8d)
		{
 			w5a += m9v;
			w5a += "...";
		}
	}
	w5a += d3k(o4a, r4w.z8i(), false);
	if (r4w.a7k())
	{
		w5a += i9n(r4w.style());
	}
	if (r4w.e2p())
	{
		w5a += q5g(r4w.value());
	}
	if (r4w.i4j())
	{
		w5a += " End Of Game";
  }
	if (this.l9q || this.u9a)
	{
		if (this.g5o.u1s(d5q) && (!this.a6p || !r4w.r3f()))
		{
			if (this.l9q)
			{
				w5a += ")";
				this.l9q = false;
			}
			else
			{
				w5a += ";";
				this.u9a = false;
			}
		}
	}
	this.q5a(d5q, w5a);
	this.j0h = false;

	if (r4w.k3s())
	{
		let r7h = r4w.r7h();
    let o2o = r7h.indexOf("[#]");
		let h2j = r7h.substring(0, o2o);
	  let u9y = r7h.substring(o2o + 3);
		if (h2j.length)
		{
			this.v7m(d5q, h2j);
		}
		this.x7r++;
		if (this.t8r)
		{
			this.o3q(y6w.b4z);
      this.a7h(d5q, o4a, this.x7r);
			this.j0h = true;
		}
		if (u9y.length)
		{
			this.v7m(d5q, u9y);
		}
	}
	else
	{
		this.v7m(d5q, r4w.r7h());
	}

  if (r4w.i4j())
	{
    this.k4c.h3b("<div>&nbsp;</div>"); 
   	this.r3q();
 	  this.g4q(false); 
 	  this.r6l = true;
	}
}

c0f(z8j)
{
	if (z8j != this.s4r)
	{
		this.a6f();
		this.s4r = z8j;
		this.n1f();
	}
}

n1f()
{
}

a6f()
{
	this.s4r = y6w.b4z;
}

o3q(z8j)
{
	this.a6f();
	this.s4r = y6w.b4z;
  
  
  
  
  this.k4c.h3b("<br>"); 
	if (z8j != y6w.b4z)
	{
		this.s4r = z8j;
		this.n1f();
	}
}

a7h(d5q, o4a, k6t)
{
  this.p9q = true;
	let v6p = "<span class=\"tddia\" movenr=\"";
  v6p += this.g5o.q6x(d5q).toString();
	v6p += "\">",
	this.k4c.b3u(v6p);
	this.k4c.b3u("<canvas></canvas>");
	this.k4c.b3u("</span>");
	this.j0h = true;
}

g3a(d5q, i1k)
{
  this.k2f(d5q);
	this.d6m(i1k);
  this.f5a();
}

a4e(m5e, t8q, m9v, e7u, d2p, j3e)
{
  let d5q = m5e.g6i();
  let o4a = t8q.g6i();

	if (d2p.length)
	{
		this.c0f(y6w.d2p);
		let h6v = d2p;
		h6v += ")";
    let v6p = "<span class=\"tdprefix\">";
    this.k4c.b3u(v6p);
  	this.n3f(h6v);
    this.k4c.b3u("</span>");
	}
	let b2m = 0;
	let m0y = 1;
  this.g5o.c1p(d5q, e7u);
	this.j0h = true;
	do
	{
		this.c0f(y6w.n2b);
		this.u2p(d5q, o4a, m9v);
		if (b2m > 1)
		{
      this.g5o.j9a(d5q);
      this.m9m(d5q, o4a, m9v);
      this.g5o.s8z(d5q);
			this.j0h = true;
		}
		o4a.s8z(d5q.r4w.z8i());
		if (o4a.s6y())
		{
			m9v++;
		}
		b2m = this.g5o.b2m(d5q);
		if (b2m == 0)
		{
			break;
		}
		if (b2m > 1)
		{
			if (!this.g5o.v4y(d5q))
			{
				break;
			}
		}
    this.g5o.s8z(d5q);
		m0y++;
	} while (true);

	if (this.g5o.u1s(d5q))
	{
		return;
	}

	let q9e = d2p.length;
	let h6v = '';
	let c0x = 1;
	for (let i = 0; i < b2m; i++)
	{
		if (q9e == 0)
		{
      h6v = String.fromCharCode('A'.charCodeAt() + c0x - 1);
		}
		else if (q9e == 1)
		{
      h6v = d2p;
      h6v += c0x;
		}
		else if (q9e == 2)
		{
      h6v = d2p;
      h6v += String.fromCharCode('a'.charCodeAt() + c0x - 1);
		}
		else
		{
      h6v = d2p;
      h6v += c0x;
		}

    let v6p = "<span class=\"tdline\" data-level=\"";
    v6p += j3e.toString();
    v6p += "\">";
    this.k4c.b3u(v6p);
  	this.o3q(this.s4r);
    this.a4e(d5q, o4a, m9v, i, h6v, j3e);
    this.k4c.b3u("</span>");
		c0x++;
	}
}

m9m(m5e, t8q, m9v)
{
  let d5q = m5e.g6i();
  let o4a = t8q.g6i();

	this.c0f(y6w.r6z);
	this.x5x = true;
	this.u9a = false;
	let b2m = this.g5o.b2m(d5q);
	for (let i = 1; i < b2m; i++)
	{
		if (i == b2m - 1)
		{
			this.l9q = true;
		}
		if (i < b2m - 1)
		{
			this.u9a = true;
		}
    this.p9t(d5q, o4a, m9v, i);
		if (this.u9a)
		{
			this.c0f(y6w.r6z);
			this.n3f(";", false);
			this.u9a = false;
		}
	}
	this.c0f(y6w.r6z);
	if (this.l9q)
	{
		this.n3f(")", false);
		this.l9q = false;
	}
}

p9t(m5e, t8q, m9v, e7u)
{
  let d5q = m5e.g6i();
  let o4a = t8q.g6i();

  this.g5o.c1p(d5q, e7u);
	let m0y = 0;
	this.j0h = true;
	do
	{
		m0y++;
		this.c0f(y6w.r6z);
		this.u2p(d5q, o4a, m9v);
		if (this.g5o.u1s(d5q))
		{
			break;
		}
		o4a.s8z(d5q.r4w.z8i());
		if (o4a.s6y())
		{
			m9v++;
		}
    this.g5o.s8z(d5q);
	} while (true);
}

q5a(d5q, w5a)
{
	if (w5a.length)
	{
 		this.z9n(d5q, w5a);
	}
	else
	{
		if (this.d6g)
    {
      this.z9n(d5q, "[...]");
    }
	}
	if (d5q.r4w)
	{
		if (d5q.r4w.m5i() || d5q.r4w.z1l())
		{
			this.t8a(d5q, y6w.z5s);
		}
		if (d5q.r4w.k3s())
		{
		}
		if (d5q.r4w.k0i())
		{
			this.t8a(d5q, y6w.e7w);
		}
		if (d5q.r4w.f9z())
		{
			this.t8a(d5q, y6w.u6n);
		}
	}
	else
	{
		if (this.g5o.s2x() || this.g5o.r9x())
		{
			this.t8a(d5q, y6w.z5s);
		}
		if (this.g5o.i9c())
		{
		 	this.t8a(d5q, y6w.u6n);
		}
	}
}

n3f(w5a, t2e)
{
	if (w5a.length == 0)
	{
		return;
	}
	if (!this.p9q && t2e)
	{
		this.k4c.h3b(" ");
	}
	this.k4c.h3b(w5a);
	this.p9q = false;
}

b7u(d5q, i6u)
{
	if (this.a6p && i6u.length)
	{
		this.c0f(y6w.i6u);
		this.g3a(d5q, i6u);
	}
}

v7m(d5q, r7h)
{
	if (this.a6p && r7h.length)
	{
		this.c0f(y6w.r7h);
		this.g3a(d5q, r7h);
	}
}

d6m(i1k)
{
  let g3j = i1k;
  let v7s = g3j.replaceAll("<br><br>", "<br>");
  let x4b = v7s.replaceAll("<br><br>", "<br>");
  let s3y = x4b.replaceAll("<br>", "<div>&nbsp;</div>");
  let s = s3y;
  this.k4c.h3b(s);
}

z9n(d5q, w5a)
{
	if (w5a.length == 0)
	{
		return;
	}
	if (!this.p9q)
	{
		this.k4c.h3b(" ");
	}
  let d4c = '';
  if (d5q.r4w)
  {
  	if (d5q.r4w.v4o())
	  {
		  if (d5q.r4w.a8p() == a0i.k3l)
  		{
	  		d4c = "tdmove-crit-opening";
		  }
  		else if (d5q.r4w.a8p() == a0i.z3w)
	  	{
		  	d4c = "tdmove-crit-middle";
  		}
	  	else if (d5q.r4w.a8p() == a0i.j7l)
		  {
  			d4c = "tdmove-crit-end";
	  	}
  	}
  }
	let p0o = "<span class=\"";
	if (d4c.length == 0)
	{
		p0o += "tdmove\" movenr=\"";
	}
	else
	{
		p0o += "tdmove " + d4c + "\" movenr=\"";
	}
  p0o += this.g5o.q6x(d5q).toString();
  p0o += "\"";
	p0o += ">",
	p0o += w5a;
	p0o += "</span>";

	this.k4c.b3u(p0o);
	this.p9q = false;
}

t8a(d5q, z8j)
{
  if (z8j == y6w.z5s)
  {
    this.f7r(d5q);
  }
  else if (z8j == y6w.u6n)
  {
    this.b6u(d5q);
  }
}

f7r(d5q)
{
	let v6p = "<span class=\"tdcolors\" movenr=\"";
  v6p += this.g5o.q6x(d5q).toString();
	v6p += "\">",
	this.k4c.b3u(v6p);
	this.k4c.b3u("</span>");
}

b6u(d5q)
{
	let v6p = "<span class=\"tdmedal\" movenr=\"";
  v6p += this.g5o.q6x(d5q).toString();
	v6p += "\">",
	this.k4c.b3u(v6p);
	this.k4c.b3u("<canvas></canvas>");
	this.k4c.b3u("</span>");
}

g4q(i0o)
{
 	let v6p = "<span class=\"tdline\"";
	if (i0o)
	{
		v6p += " data-commented=\"1\"";
	}
	v6p += " data-level=\"0\">";
	this.k4c.h3b(v6p);
}

r3q()
{
  this.k4c.b3u("</span>");
}

k2f(d5q)
{
  let g9m = "tdcomment";
  if (this.o2b)
  {
    g9m += " is-bold";
  }
  let v6p = "<span class=\"" + g9m + "\" movenr=\"";
  v6p += this.g5o.q6x(d5q).toString();
  v6p += "\">";
  this.k4c.h3b(v6p);
}

f5a()
{
  this.k4c.b3u("</span>");
}

d1y(value)
{
  this.d6g = value;
}

s0s(value)
{
  this.o2b = value;
}

u8m(value)
{
  this.a0a = value;
}

i5i(value)
{
  this.u4c = value;
}

} 
const i7d =
{
	w3a : 1,
	m7h : 2,
	y7c : 3
};

class q3o
{

constructor()
{
	this.f7i = 0;
	this.j3l = 0;
	this.type = i7d.w3a;
}

g6i()
{
	let i2u = new q3o();
	i2u.f7i = this.f7i;
	i2u.j3l = this.j3l;
	i2u.type = this.type;
	return i2u;
}

}

function h5u(f7i, j3l, type)
{
	let s = new q3o();
	s.f7i = f7i;
	s.j3l = j3l;
	s.type = type;
	return s;
}
class m9a
{

constructor()
{
	this.m4f = [];
}

g6i()
{
	let g3e = new m9a();
	for (const o6b of this.m4f)
	{
		g3e.add(o6b.g6i());
	}
	return g3e;
}

d7o()
{
	this.m4f.length = 0;
}

k4u()
{
	return this.m4f.length == 0;
}

size()
{
	return this.m4f.length;
}

add(o6b)
{
	let b9h = o6b.g6i();
	this.m4f.push(b9h);
}

}

const d7t =
{
	s0p : 0,
	q2l : 1,
	p8m : 2
};

class g8q
{

constructor()
{
	this.z1c = 0;
	this.type = d7t.s0p;
}

g6i()
{
	let m4g = new g8q();
	m4g.z1c = this.z1c;
	m4g.type = this.type;
	return m4g;
}

}

function h3l(z1c, type)
{
	let v0x = new g8q();
	v0x.z1c = z1c;
	v0x.type = type;
	return v0x;
}

class z8f
{

constructor()
{
	this.x0l = [];
}

g6i()
{
	let w8y = new z8f();
	for (const x8n of this.x0l)
	{
		w8y.add(x8n.g6i());
	}
	return w8y;
}

d7o()
{
	this.x0l.length = 0;
}

k4u()
{
	return this.x0l.length == 0;
}

size()
{
	return this.x0l.length;
}

add(o3t)
{
	let s2w = o3t.g6i();
	this.x0l.push(s2w);
}

}

const v5h =
{
	n0h    : 0,
	o8h  : 1,
	t1h  : 2,
	g5t    : 3,
  c3t   : 4,
	k4f    : 5,
};


function n9d(s1e)
{
	let w5a = '';
	switch (s1e)
	{
		case v5h.n0h:
			w5a = "P";
			break;
		case v5h.o8h:
			w5a = "N";
			break;
		case v5h.t1h:
			w5a = "B";
			break;
		case v5h.g5t:
			w5a = "R";
			break;
		case v5h.c3t:
			w5a = "Q";
			break;
		case v5h.king:
			w5a = "K";
			break;
	}
	return w5a;
}

class q4h
{

constructor()
{
  this.w3q = 0;
	this.i2q = new s8c();
	this.n8q = new n2s();
}

g6i()
{
	let o4v = new q4h();
  o4v.w3q = this.w3q;
	o4v.i2q = this.i2q.g6i();
	o4v.n8q = this.n8q.g6i();
	return o4v;
}

}

const g8v = 	 		"#7B8295";
const b2l =			"#9F9F9F";
const y2o = 			    "#7B8295";
const k7q = 		  "#FFFFFF";
const v2b =       "#D0B194";

const u9r	   = "#E13129";
const u8a	 = "#389C13";
const n0m = "#E2B628";

const w4t	 = "#E13129";
const q3v	 = "#389C13";
const t0e	   = "#E2B628";

class w0h
{

constructor()
{
	this.h1k = null;
	this.f1y = false;
	this.h1u = null;
	this.f4s = null;
	this.b3z = null;
	this.c2l = 0;
	this.h9p = 0;
	this.x8t = 0;
	this.o0q = 0;
	this.k7w = 0;
	this.f4f = 0;
	this.s1i = new k0d();
	this.o4a = new z5d();
	this.d8l = new m9a();
	this.f5h = new z8f();
  this.h7w = new m0z();
  this.f3m = true;
	this.m4l = true;
	this.l5g = true;
	this.d1u = false;
	this.x1k = g8v;
	this.y4x = b2l;
	this.v3k = r2f;
	this.t3d = v8a;
	this.u5s = v8a;
	this.n7v = y7q;
	this.u7e = true;
	this.t6s = f7w;
	this.s4q = f7w;
	this.u2n = false;
	this.m5u = [];
	this.n8w = 0;
}

v3n(h1k)
{
	this.h1k = h1k;
}

a1c(s1i)
{
	this.s1i = s1i;
	this.x8t = s1i.x8t();
	this.o0q = s1i.x8t();

	this.c2l = (this.h1k.width - this.x8t) / 2;
	let top = (this.h1k.height - this.o0q) * 0.25;
	if (top > 0 && top < 16) top = 16;
	this.h9p = top;
	this.k7w = this.c2l + this.x8t - 1;
	this.f4f = this.h9p + this.o0q - 1;
	this.f1y = false;
	this.i5p();
}

n6t(o4a)
{
	this.o4a = o4a.g6i();
	this.d8l.d7o();
	this.f5h.d7o();
}

u6o(d8l)
{
	this.d8l = d8l.g6i();
}

e8o(f5h)
{
	this.f5h = f5h.g6i();
}

g1t(r4w)
{
  this.h7w = r4w.g6i();
}

v5q(d1u)
{
	this.d1u = d1u;
}

f0w()
{
	this.d1u = !this.d1u;
}

c7m()
{
	if (!this.h1k) return;
	if (this.x8t <= 0 || this.o0q <= 0)
	{
		return;
	}
	this.u3l();
}

e6g()
{
	let f0z = this.s1i.f0z;
	if (this.f1y)
	{
		return;
	}
	this.f1y = true;
	if (f0z == v9h.n5z)
	{
  	this.h1u = h3i.l4y("images/board/LightSquare");
  	this.f4s = h3i.l4y("images/board/DarkSquare");
		this.b3z = h3i.l4y("images/board/Margin");
	}
}

i5p()
{
	this.e6g();
	let f0z = this.s1i.f0z;
	if (f0z == v9h.n5z)
	{
		this.u7e = false;
		this.m4l = false;
		this.l5g = false;
		this.v3k = "#FFFF97";
		this.t3d = "#9B2E31";
		this.u5s = k4l;
	}
}

u3l()
{
	this.i5p();
	if (this.s1i.f0z == v9h.n5z)
	{
		let t0w = h3i.l4y("images/board/BoardBackground");
		this.g4g(new l9f(0, 0, this.h1k.width, this.h1k.height), t0w);
	}
	this.a5r();  
	this.n5x(); 
	this.s6d(); 
  if (chess)
  {
	  this.t3v();
  }
  else
  {
	  this.k2r();
  	this.x9y();
  }
  
  this.i6c();
 	this.p1g();
 	this.b3l();
 	this.l9n();
	this.t8c(); 
	this.v7q();      
}

a5r()
{
	let i0p = this.h9p;
	let z1m = this.c2l;
	let m1y = this.k7w;
	let m8d = this.f4f;
	let i8b = this.s1i.n9n;
	this.x8x(new l9f(z1m, i0p, m1y, i0p+i8b-1), this.t3d);
	this.x8x(new l9f(z1m, m8d-i8b+1, m1y, m8d), this.u5s);
	this.x8x(new l9f(z1m, i0p, z1m+i8b-1, m8d), this.t3d);
	this.x8x(new l9f(m1y-i8b+1, i0p, m1y, m8d), this.u5s);
}

n5x()
{
	let n9n = this.s1i.n9n;
	let f4n = this.s1i.f4n;
	if (!f4n)
	{
		return;
	}
	if (this.u7e || !this.b3z)
	{
		this.e4k(this.n7v);
	}
	else
	{
		let left = this.c2l + n9n;
		let top = this.h9p + n9n;
		let n5e = this.k7w - n9n;
		let v0a = this.h9p + n9n + f4n - 1;
		this.g4g(new l9f(left, top, n5e, v0a), this.b3z);

		left = this.c2l + n9n;
		top = this.h9p + n9n;
		n5e = this.c2l + n9n + f4n - 1;
		v0a = this.f4f - n9n;
		this.g4g(new l9f(left, top, n5e, v0a), this.b3z);

		left = this.c2l + n9n;
		top = this.f4f - n9n - f4n + 1;
		n5e = this.k7w - n9n;
		v0a = this.f4f - n9n;
		this.g4g(new l9f(left, top, n5e, v0a), this.b3z);

		left = this.k7w - n9n - f4n + 1;
		top = this.h9p + n9n;
		n5e = this.k7w - n9n;
		v0a = this.f4f - n9n;
		this.g4g(new l9f(left, top, n5e, v0a), this.b3z);
	}
}

e4k()
{
	let n9n = this.s1i.n9n;
	let f4n = this.s1i.f4n;
	if (!f4n)
	{
		return;
	}

	let left = this.c2l + n9n;
	let top = this.h9p + n9n;
	let n5e = this.k7w - n9n;
	let v0a = this.h9p + n9n + f4n - 1;
	this.x8x(new l9f(left, top, n5e, v0a), this.n7v);

	left = this.c2l + n9n;
	top = this.h9p + n9n;
	n5e = this.c2l + n9n + f4n - 1;
	v0a = this.f4f - n9n;
	this.x8x(new l9f(left, top, n5e, v0a), this.n7v);

	left = this.c2l + n9n;
	top = this.f4f - n9n - f4n + 1;
	n5e = this.k7w - n9n;
	v0a = this.f4f - n9n;
	this.x8x(new l9f(left, top, n5e, v0a), this.n7v);

	left = this.k7w - n9n - f4n + 1;
	top = this.h9p + n9n;
	n5e = this.k7w - n9n;
	v0a = this.f4f - n9n;
	this.x8x(new l9f(left, top, n5e, v0a), this.n7v);
}

v7q()
{
	if (this.s1i.l9a)
	{
  	if (!this.s1i.f4n)
  	{
	  	return;
  	}
		let color = "#000000";
		if (this.o4a.s6y())
		{
			color = "#EDD790";
		}
		else
		{
			color = "#000000";
		}
		let rect = this.d1x();
		let k9p = this.x6r();
		k9p.beginPath();
		k9p.fillStyle = color;
		let r2z = rect.j9n() * 0.40;
		k9p.arc(rect.u9c + rect.j9n()/2 - 1, rect.l6h + rect.x5s()/2 - 1,
			r2z, 0, 2 * Math.PI);
		k9p.fill();
	}
}

s6d()
{
	let q7a = k4l;
	let n9n = this.s1i.n9n;
	let f4n = this.s1i.f4n;
	let i8b = this.s1i.i8b;
	let i0p = this.h9p + n9n + f4n;
	let z1m = this.c2l + n9n + f4n;
	let m1y = this.k7w - n9n - f4n;
	let m8d = this.f4f - n9n - f4n;
	this.x8x(new l9f(z1m, i0p, m1y, i0p+i8b-1), q7a);
	this.x8x(new l9f(z1m, m8d-i8b+1, m1y, m8d), q7a);
	this.x8x(new l9f(z1m, i0p, z1m+i8b-1, m8d), q7a);
	this.x8x(new l9f(m1y-i8b+1, i0p, m1y, m8d), q7a);
}

x6r()
{
	return this.h1k.getContext('2d');
}

k2g(rect, color)
{
	let k9p = this.x6r();
	k9p.beginPath();
	k9p.lineWidth = "1";
	k9p.strokeStyle = color;
	k9p.rect(rect.u9c, rect.l6h, rect.j9n(), rect.x5s());
	k9p.stroke();
}

x8x(rect, color)
{
	let k9p = this.x6r();
	k9p.fillStyle = color;
	k9p.fillRect(rect.u9c, rect.l6h, rect.j9n(), rect.x5s());
}

g4g(rect, img)
{
	let k9p = this.x6r();
	let c8b = k9p.createPattern(img, 'repeat');
	k9p.fillStyle = c8b;
	k9p.fillRect(rect.u9c, rect.l6h, rect.j9n(), rect.x5s());
}

q2h(rect, img)
{
	let k9p = this.x6r();
	let c8b = k9p.createPattern(img, 'no-repeat');
	k9p.fillStyle = c8b;
	k9p.fillRect(rect.u9c, rect.l6h, rect.j9n(), rect.x5s());
}

l2u(z1c)
{
	let k1e = b7s;
	let o3p = g8b;
	if (this.d1u)
	{
		k1e = x6z(a8w(z1c));
		o3p = e8y(a8w(z1c));
	}
	else
	{
		k1e = x6z(z1c);
		o3p = e8y(z1c);
	}
	if (startsWithDarkSquare(o3p))
	{
		k1e++;
	}
	else
	{
		k1e--;
	}
	return this.s8l(o3p, k1e);
}

k2r()
{
	for (const z1c of r5e)
	{
		this.n5g(z1c);
	}
}

n5g(z1c)
{
	this.m4i(this.l2u(z1c), z1c);
}

m4i(rect, z1c)
{
	let l4y = this.h1u;
	if (this.l5g)
	{
		this.c5t(rect, this.y4x);
		return;
	}
	if (!l4y)
	{
		this.c5t(rect, this.y4x);
		return;
	}

	let a7v = l4y.width;
	let s5i = l4y.height;
	let p9d = this.s1i.o4h;
	if (a7v < p9d || s5i < p9d)
	{
		this.q2h(rect, l4y);
		return;
	}

	let p2b = Math.trunc(a7v / this.s1i.o4h);
	let i9i = Math.trunc(s5i / this.s1i.o4h);
	if (p2b == 0)
	{
		p2b = 1;
	}
	if (i9i == 0)
	{
		i9i = 1;
	}

	let k9q = Math.trunc((z1c) / p2b);
	let i0f = (z1c) % p2b;
	let y = Math.trunc(k9q / i9i);
	k9q = k9q % i9i;

  let f8f = new l9f();
	f8f.u9c = i0f * this.s1i.o4h;
	f8f.l6h = k9q * this.s1i.o4h;
	f8f.u4m = (i0f + 1) * this.s1i.o4h - 1;
	f8f.i3k = (k9q + 1) * this.s1i.o4h - 1;
	let k9p = this.x6r();
	h8x(k9p, rect, l4y, f8f);
}

k3d(z1c)
{
	let k1e = b7s;
	let o3p = g8b;
	if (this.d1u)
	{
		k1e = x6z(a8w(z1c));
		o3p = e8y(a8w(z1c));
	}
	else
	{
		k1e = x6z(z1c);
		o3p = e8y(z1c);
	}
	return this.s8l(o3p, k1e);
}

x9y()
{
	for (const z1c of r5e)
	{
		this.m1u(z1c);
	}
}

m1u(z1c)
{
	this.r3g(this.k3d(z1c), z1c);
}

r3g(rect, z1c)
{
	let l4y = this.f4s;
	if (this.m4l)
	{
		this.c5t(rect, this.x1k);
		return;
	}
	if (!l4y)
	{
		this.c5t(rect, this.x1k);
		return;
	}

	let a7v = l4y.width;
	let s5i = l4y.height;
	let p9d = this.s1i.o4h;
	if (a7v < p9d || s5i < p9d)
	{
		this.q2h(rect, l4y);
		return;
	}

	let p2b = Math.trunc(a7v / this.s1i.o4h);
	let i9i = Math.trunc(s5i / this.s1i.o4h);
	if (p2b == 0)
	{
		p2b = 1;
	}
	if (i9i == 0)
	{
		i9i = 1;
	}

	let k9q = Math.trunc((z1c) / p2b);
	let i0f = (z1c) % p2b;
	let y = Math.trunc(k9q / i9i);
	k9q = k9q % i9i;

  let f8f = new l9f();
	f8f.u9c = i0f * this.s1i.o4h;
	f8f.l6h = k9q * this.s1i.o4h;
	f8f.u4m = (i0f + 1) * this.s1i.o4h - 1;
	f8f.i3k = (k9q + 1) * this.s1i.o4h - 1;
	let k9p = this.x6r();
	h8x(k9p, rect, l4y, f8f);
}

s8l(o3p, k1e)
{
	let n9n = this.s1i.n9n;
	let f4n = this.s1i.f4n;
	let i8b = this.s1i.i8b;
	let o4h = this.s1i.o4h;
	let rect = new l9f();
	rect.u9c = this.c2l + n9n + f4n +	i8b + (k1e) * o4h;
	rect.u4m = rect.u9c + o4h - 1;
	rect.l6h = this.h9p + n9n + f4n +	i8b + (b6i - o3p - 1) * o4h;
	rect.i3k = rect.l6h + o4h - 1;
	return rect;
}

e3u(z1c)
{
	let k1e = b7s;
	let o3p = g8b;
	if (this.d1u)
	{
		k1e = x6z(a8w(z1c));
		o3p = e8y(a8w(z1c));
	}
	else
	{
		k1e = x6z(z1c);
		o3p = e8y(z1c);
	}
	return this.s8l(o3p, k1e);
}

t3v()
{
	for (const z1c of r5e)
	{
		this.c5p(z1c);
	}
}

c5p(z1c)
{
	this.n3h(this.e3u(z1c), z1c);
}

n3h(rect, z1c)
{
	let o4t = a5u(z1c);
	let l4y = this.h1u;
	if (o4t)
	{
		l4y = this.f4s;
	}
	if (o4t)
	{
		if (this.m4l)
		{
			this.c5t(rect, this.x1k);
			return;
		}
		if (!l4y)
		{
			this.c5t(rect, this.x1k);
			return;
		}
	}
	else
	{
		if (this.l5g)
		{
			this.c5t(rect, this.y4x);
			return;
		}
		if (!l4y)
		{
			this.c5t(rect, this.y4x);
			return;
		}
	}

 	let a7v = l4y.width;
	let s5i = l4y.height;
	let p9d = this.s1i.o4h;
	if (a7v < p9d || s5i < p9d)
	{
		this.q2h(rect, l4y);
		return;
	}
	let p2b = Math.trunc(a7v / this.s1i.o4h);
	let i9i = Math.trunc(s5i / this.s1i.o4h);
	if (p2b == 0)
	{
		p2b = 1;
	}
	if (i9i == 0)
	{
		i9i = 1;
	}

	let k9q = Math.trunc((z1c) / p2b);
	let i0f = (z1c) % p2b;
	let y = Math.trunc(k9q / i9i);
	k9q = k9q % i9i;

  let f8f = new l9f();
	f8f.u9c = i0f * this.s1i.o4h;
	f8f.l6h = k9q * this.s1i.o4h;
	f8f.u4m = (i0f + 1) * this.s1i.o4h - 1;
	f8f.i3k = (k9q + 1) * this.s1i.o4h - 1;
	let k9p = this.x6r();
	h8x(k9p, rect, l4y, f8f);
}

c5t(rect, color)
{
	this.x8x(rect, color);
}

b3l()
{
	for (const z1c of r5e)
	{
		this.l1b(z1c);
	}
}

u2s(f7i, j3l, n3w)
{
	this.t6s = f7i;
	this.s4q = j3l;
	this.u2n = n3w;

	this.m5u.length = 0;
 	let n2e = this.e3u(f7i);
  let p5f = this.e3u(j3l);
	let j9e = this.s1i.o4h;

	let c9a = 32;
	if (j9e < 32)
	{
		c9a = j9e;
	}

  
	if (false)
	{
    
    
		let i4q = new h1n(n2e.u9c + j9e / 2, n2e.l6h + j9e / 2);
		let k5e = new h1n(p5f.u9c + j9e / 2, p5f.l6h + j9e / 2);
		let d7n = Math.abs(i4q.X - k5e.X);
		let p6w = Math.abs(i4q.Y - k5e.Y);
		let k5f = Math.atan2(k5e.X - i4q.X, i4q.Y - k5e.Y);
		let v9m = Math.sqrt(d7n*d7n + p6w*p6w) / 2;
		k5e.X = i4q.X + v9m * 2;
		k5e.Y = i4q.Y;
		let m7b = new h1n(i4q.X + v9m, i4q.Y);
		let q8a = Math.PI / c9a;
		let b3b = j9e * 0.40;
		let e1u = Math.PI;
		let j6r = (p5f.u9c > n2e.u9c && p5f.l6h < n2e.l6h) ||
			(p5f.u9c < n2e.u9c && p5f.l6h > n2e.l6h);
		for (let i = 1; i < c9a; i++)
		{
			let k2g = new l9f();
			if (j6r)
			{
				e1u -= q8a;
			}
			else
			{
				e1u += q8a;
			}
			let j8c = Math.cos(e1u);
			let z8d = Math.sin(e1u);
			let u4z = new h1n(m7b.X + v9m * j8c,
				m7b.Y - b3b * z8d);
			this.m5u.push(w7i(u4z, i4q, k5f - Math.PI / 2));
		}
	}
	else
	{
		let i4q = new h1n(n2e.u9c + j9e / 2, n2e.l6h + j9e / 2);
		let k5e = new h1n(p5f.u9c + j9e / 2, p5f.l6h + j9e / 2);
		let r0q = (k5e.X - i4q.X) / c9a;
		let u2e = (k5e.Y - i4q.Y) / c9a;
		for (let i = 1; i < c9a; i++)
		{
			this.m5u.push(new h1n(i4q.X + i * r0q, i4q.Y + i * u2e));
		}
	}
	this.m5u.push(new h1n(p5f.u9c + j9e / 2, p5f.l6h + j9e / 2));
	this.n8w = 0;
}

p3y()
{
	this.t6s = f7w;
	this.s4q = f7w;
}

n5l()
{
	this.c7m(); 

	let f5n = this.m5u[this.n8w];
	let o4h = this.s1i.o4h;
	let k2g = new l9f();
	k2g.u9c = f5n.X - o4h / 2;
	k2g.l6h = f5n.Y - o4h / 2;
	k2g.z4d(o4h);
	k2g.m5w(o4h);
 	let k9p = this.x6r();
	w9z(k9p, k2g, this.o4a.c1b(this.t6s));

	this.n8w++;
	if (this.n8w >= this.m5u.length)
	{
		let s1e = this.o4a.c1b(this.t6s);
		this.o4a.w6f(this.t6s, e6m.k4u);
		this.o4a.w6f(this.s4q, s1e);
		this.p3y();
		return true;
	}
	else
	{
		return false;
	}
}

l1b(z1c)
{
	if (z1c == this.t6s)
	{
		return;
	}
	let u8u = this.e3u(z1c);
 	let k9p = this.x6r();
	w9z(k9p, u8u, this.o4a.c1b(z1c));
}

t8c()
{
	if (!this.s1i.c1i)
	{
    return;
  }

 	let i8b = this.s1i.i8b;
	let n9n = this.s1i.n9n;
	let f4n = this.s1i.f4n;
	let o4h = this.s1i.o4h;

	let s7u = new l9f();
	s7u.u9c = this.c2l + n9n + f4n;
	s7u.l6h = this.h9p + n9n + f4n;
	s7u.z4d(b6i * o4h + 2 * i8b);
	s7u.m5w(b6i * o4h + 2 * i8b);

 	let k9p = this.x6r();
  let u4f = y7j(k9p, f4n-6);

  t8c(k9p,
    s7u,
    this.s1i,
    u4f,
    e8c.k8v,
    this.v3k,
    this.d1u,
    f4n);
}

w0i(z1c, color)
{
	let rect = this.e3u(z1c);
	let k9p = this.x6r();
  k9p.save();
  k9p.globalAlpha = 0.25; 
	k9p.fillStyle = color;
	k9p.fillRect(rect.u9c, rect.l6h, rect.j9n(), rect.x5s());
  k9p.restore();
}

i6c()
{
	if (this.f3m)
	{
		if (!this.h7w.k4u())
		{
      let color = "#800080"; 
			this.w0i(this.h7w.f7i, color);
			this.w0i(this.h7w.j3l, color);
		}
  }
}

p1g()
{
	for (const x8n of this.f5h.x0l)
	{
		this.b5j(x8n);
	}
}

b5j(x8n)
{
	let rect = this.e3u(x8n.z1c);
	let k6c = '';
	switch (x8n.type)
	{
		case d7t.s0p:
			k6c = u9r;
			break;
		case d7t.q2l:
			k6c = u8a;
			break;
		case d7t.p8m:
			k6c = n0m;
			break;
	}
	let j9e = this.x8t / 10;
	let k9p = this.x6r();
  /* dit is met roundrect
  b8z(rect, 5);
	k9p.lineWidth = j9e / 15;
	k9p.strokeStyle = k6c;
	s8h(k9p, rect.u9c, rect.l6h, rect.j9n(), rect.x5s(), 10);
  */
  
  k9p.save();
  k9p.globalAlpha = 0.7; 
	k9p.fillStyle = k6c;
	k9p.fillRect(rect.u9c, rect.l6h, rect.j9n(), rect.x5s());
  k9p.restore();
}

l9n()
{
	for (const o6b of this.d8l.m4f)
	{
		this.e3n(o6b);
	}
}

e3n(o6b)
{
	let f7i = o6b.f7i;
	let j3l = o6b.j3l;
	let v1d = o6b.type;

	let n2e = this.e3u(f7i);
	let p5f = this.e3u(j3l);

	let u8b = n2e.u9c + n2e.j9n()/2;
	let c9s = n2e.l6h + n2e.x5s()/2;
	let t1v = new h1n(u8b, c9s);

	let p4z = p5f.u9c + p5f.j9n()/2;
	let f0n = p5f.l6h + p5f.x5s()/2;

	let d7m = (p4z-u8b)*(p4z-u8b) + (f0n-c9s)*(f0n-c9s);
	let j4p = Math.sqrt(d7m);

	let x9h = (this.o4a.t0q(f7i)) ? 0 : n2e.j9n() / 4;
	j4p -= x9h;
	let l8g = (this.o4a.t0q(j3l)) ? 0 : n2e.j9n() / 4;
	j4p -= l8g;

	let d4g = 5;
	let c7l = 5 * d4g;
	let e1o = 7 * d4g;

	let i4d = u8b + x9h;
	let o7g = c9s;

	let u9t = i4d + j4p - 1;
	let a2g = c9s;

	let p2k = u9t - e1o;
	let l2g = c9s;

	let k5f = Math.atan2((p4z - u8b), (c9s - f0n));

  
	let c4i = [];
  let d1v = 10; 
	c4i.push(new h1n(p2k, l2g));
	c4i.push(new h1n(p2k - d1v, l2g - c7l));
	c4i.push(new h1n(u9t, a2g));
	c4i.push(new h1n(p2k - d1v, l2g + c7l));
	c4i.push(new h1n(p2k, a2g));
	let g9t = [];
	for (let i = 0; i <= 4; i++)
	{
		g9t.push(w7i(c4i[i], t1v, k5f - Math.PI / 2));
	}

	let k9p = this.x6r();
  k9p.save();
  k9p.globalAlpha = 0.7;

 	let b5g = '';
	switch (v1d)
	{
		case i7d.w3a:
			b5g = w4t;
			break;
		case i7d.m7h:
			b5g = q3v;
			break;
		case i7d.y7c:
			b5g = t0e;
			break;
	}
 	k9p.fillStyle = b5g;
  k9p.strokeStyle = b5g;
	k9p.beginPath();
	k9p.moveTo(g9t[0].X, g9t[0].Y);
	for (let i = 1; i <= 4; i++)
	{
		k9p.lineTo(g9t[i].X, g9t[i].Y);
	}
	k9p.closePath();
	k9p.fill();

  
	c4i.length = 0;
	c4i.push(new h1n(i4d, o7g - d4g));
	c4i.push(new h1n(i4d, o7g + d4g));
	c4i.push(new h1n(p2k, o7g + d4g));
	c4i.push(new h1n(p2k, o7g - d4g));
	g9t.length = 0;
	for (let i = 0; i <= 3; i++)
	{
		g9t.push(w7i(c4i[i], t1v, k5f - Math.PI / 2));
	}
	if (u8b == p4z)
	{
		if (g9t[0].Y != g9t[1].Y)
		{
			g9t[0].Y = g9t[1].Y;
		}
		if (g9t[2].Y != g9t[3].Y)
		{
			g9t[2].Y = g9t[3].Y;
		}
	}
	if (c9s == f0n)
	{
		if (g9t[0].X != g9t[1].X)
		{
			g9t[0].X = g9t[1].X;
		}
		if (g9t[2].X != g9t[3].X)
		{
			g9t[2].X = g9t[3].X;
		}
	}
	k9p.beginPath();
	k9p.moveTo(g9t[0].X, g9t[0].Y);
	for (let i = 1; i <= 3; i++)
	{
		k9p.lineTo(g9t[i].X, g9t[i].Y);
	}
	k9p.closePath();
	k9p.fill();
  k9p.restore();
}

d1x()
{
	let n9n = this.s1i.n9n;
	let f4n = this.s1i.f4n;
	let j9e = this.s1i.o4h;
	let rect = new l9f();
	rect.u9c = this.k7w - n9n - f4n + 1;
	rect.l6h = this.f4f - n9n - f4n;
	rect.i3k = this.f4f;
	rect.u4m = this.k7w - 1;
	return rect;
}

}

const b4m = 14;

const v9h =
{
	n5z : 0
};

const j5n =
{
	n5z : 0
};

const c1h =
{
	b4z : 0,
	z1h : 1,
};

const e8c =
{
	o8o: 0,
	p5t: 1,
	k8v: 2,
	q1p: 3,
	n9p: 4,
};

class k0d
{

constructor()
{
	this.f0z = v9h.n5z;
	this.k0n = 1; 
	this.n9n = 0;
	this.f4n = b4m;
	this.i8b = 2;
	this.o4h = 32;
	this.p4k = 20;
	this.c1i = true;
	this.c5b = c1h.z1h;
	this.l9a = true;
}

g6i()
{
	let e0d = new k0d();
	e0d.f0z = this.f0z;
	e0d.k0n = this.k0n;
	e0d.n9n = this.n9n;
	e0d.f4n = this.f4n;
	e0d.i8b = this.i8b;
	e0d.o4h = this.o4h;
	e0d.p4k = this.p4k;
	e0d.c1i = this.c1i;
	e0d.c5b = this.c5b;
	e0d.l9a = this.l9a;
	return e0d;
}

x8t()
{
	return this.o4h * b6i + 2 * (this.n9n + this.f4n + this.i8b);
}

z3h(rect)
{
	let w = rect.j9n();
	let h = rect.x5s();
	let p2z = 0;
	if (w < h)
	{
		p2z = w;
	}
	else
	{
		p2z = h;
	}
	if (this.f4n)
	{
		for (this.o4h = 2; this.o4h < 1000; this.o4h++)
		{
			this.f4n = (this.o4h / 100) * this.p4k;
			if (this.f4n < b4m)
			{
				this.f4n = b4m;
			}
			let size = 2 * (this.n9n + this.f4n + this.i8b) + b6i * this.o4h;
			if (size > p2z)
			{
				break;
			}
		}
		this.o4h--;
		this.f4n = (this.o4h / 100) * this.p4k;
		if (this.f4n < b4m)
		{
			this.f4n = b4m;
		}
	}
	else
	{
		for (this.o4h = 2; this.o4h < 1000; this.o4h++)
		{
			let size = 2 * (this.n9n + this.i8b) + b6i * this.o4h;
			if (size > p2z)
			{
				break;
			}
		}
		this.o4h--;
	}
	return this.x8t();
}

}


class u8c
{

constructor()
{
	this.n5j = new z5d();
	this.f3b = new z5d();
	this.d8l = new m9a();
	this.f5h = new z8f();
	this.m7n = new m0z();
 	this.y1m = new m0z();
	this.c6n = 0;
	this.k7v = false;
	this.s8d = false;
	this.m0y = 0;
	this.i1q = 0;
	this.s0o = '';
}

}

const y0u =
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

function b8z(rect, m5x)
{
	rect.u9c += m5x;
	rect.u4m -= m5x;
	if (rect.u9c > rect.u4m)
	{
		rect.u9c = rect.u4m;
	}
	rect.l6h += m5x;
	rect.i3k -= m5x;
	if (rect.l6h > rect.i3k)
	{
		rect.l6h = rect.i3k;
	}
}

function h8x(a9y, x2q, w0g, f8f)
{
	a9y.drawImage(w0g, f8f.u9c, f8f.l6h, f8f.j9n(), f8f.x5s(),
		x2q.u9c, x2q.l6h, x2q.j9n(), x2q.x5s());
}

function s8h(k9p, x, y, width, height, r2z)
{
	k9p.beginPath();
	k9p.moveTo(x, y + r2z);
	k9p.lineTo(x, y + height - r2z);
	k9p.arcTo(x, y + height, x + r2z, y + height, r2z);
	k9p.lineTo(x + width - r2z, y + height);
	k9p.arcTo(x + width, y + height, x + width, y + height-r2z, r2z);
	k9p.lineTo(x + width, y + r2z);
	k9p.arcTo(x + width, y, x + width - r2z, y, r2z);
	k9p.lineTo(x + r2z, y);
	k9p.arcTo(x, y, x, y + r2z, r2z);
	k9p.stroke();
}

function w7i(l9l, t1v, p4n)
{
	let p = new h1n();
	p.X = (Math.cos(p4n) * (l9l.X - t1v.X)) - (Math.sin(p4n) * (l9l.Y - t1v.Y)) + t1v.X;
	p.Y = (Math.sin(p4n) * (l9l.X - t1v.X)) + (Math.cos(p4n) * (l9l.Y - t1v.Y)) + t1v.Y;
	return p;
}

function p0g(k9p, rect, u6n)
{
	let left = rect.u9c;
	let top = rect.l6h;
	let n5e = rect.u4m;
	let v0a = rect.i3k;

	k9p.fillStyle = t6y;
	k9p.fillRect(rect.u9c, rect.l6h, rect.j9n(), rect.x5s());

	if (u6n.b4z())
	{
		return;
	}

	let b3k = u6n.i4r();
	let z1k = 0;
	if (b3k > 8)
	{
		z1k = (n5e - left) / 8;
	}
	else
	{
		z1k = (n5e - left) / b3k;
	}
	let z5y = left - z1k;
	let w8i = top;
	let q9f = z5y + z1k;
	let t1w = 0;
	if (b3k > 8)
	{
		t1w = (v0a - top + 1) / 2;
	}
	else
	{
		t1w = v0a - top + 1;
	}

	let l1l = top + t1w - 1;
	let z8p = 0;
	for (let i = 0; i < 16; i++)
	{
		if (u6n.t8d(i))
		{
			z5y += z1k;
			q9f += z1k;
			if (z8p == 7 || z8p == 15 ||
				(z8p < 8 && z8p == b3k - 1))
			{
				q9f = n5e;
			}
			if (z8p == 8)
			{
				z5y = left;
				q9f = z5y + z1k;
				w8i = top + t1w;
				l1l = v0a;
			}
			let c0s = new l9f(z5y, w8i, q9f, l1l);
			k9p.fillStyle = y0u[i];
			k9p.fillRect(c0s.u9c, c0s.l6h, c0s.j9n(), c0s.x5s());
			z8p++;
		}
	}
}




class k8b
{

constructor()
{
	this.z0j = '';
	this.l4y = null;
}

}

class c8e
{

constructor()
{
	this.c5c = [];
}

add(img)
{
	let e1n = new k8b();
	e1n.z0j = img.id;
	e1n.l4y = img;
	this.c5c.push(e1n);
}

l4y(z0j)
{
	for (const j0j of this.c5c)
	{
		if (j0j.z0j.toLowerCase() == z0j.toLowerCase())
		{
			return j0j.l4y;
		}
	}
	return null;
}

}
const i3b 				= "#00FFFF";
const k4l 			= "#000000";
const y7q 				= "#0000FF";
const l7s 			= "#FFFBF0";
const x4r 			= "#808080";
const o6g 		= "#FF00FF";
const u4a 				= "#808080";
const u6r 			= "#008000";
const r8j 				= "#00FF00";
const j7a 			= "#C0C0C0";
const n6q 			= "#800000";
const a7o 		= "#A0A0A4";
const d0o 	= "#C0DCC0";
const w8l 				= "#000080";
const z3d 			= "#808000";
const a5f 			= "#800080";
const t6y 				= "#FF0000";
const h6j 			= "#C0C0C0";
const v4z 		= "#A6CAF0";
const q1h 				= "#008000";
const v8a 			= "#FFFFFF";
const r2f 			= "#FFFF00";

class h1n
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

g6i()
{
	let h2z = new h1n();
	h2z.u9c = this.X;
	h2z.l6h = this.Y;
	return h2z;
}

}

class l9f
{

constructor(left, top, n5e, v0a)
{
	if (left === undefined)
	{
		this.u9c = 0;
		this.l6h = 0;
		this.u4m = 0;
		this.i3k = 0;
	}
	else
	{
		this.u9c = left;
		this.l6h = top;
		this.u4m = n5e;
		this.i3k = v0a;
	}
}

g6i()
{
	let t4u = new l9f();
	t4u.u9c = this.u9c;
	t4u.l6h = this.l6h;
	t4u.u4m = this.u4m;
	t4u.i3k = this.i3k;
	return t4u;
}

j9n()
{
	return this.u4m - this.u9c + 1;
}

o5k()
{
	return this.u4m - this.u9c + 1;
}

z4d(width)
{
	this.u4m = this.u9c + width - 1;
}

x5s()
{
	return this.i3k - this.l6h + 1;
}

n9v()
{
	return this.i3k - this.l6h + 1;
}

m5w(height)
{
	this.i3k = this.l6h + height - 1;
}

b0e()
{
	this.u9c++;
	this.l6h++;
	this.u4m--;
	this.i3k--;
}

o0i(f5n)
{
	return f5n.X >= this.u9c &&
		f5n.X <= this.u4m &&
		f5n.Y >= this.l6h &&
		f5n.Y <= this.i3k;
}


}

class y3g
{

constructor(a5o)
{
	this.a5o = a5o;
	this.e6d = new z5d();
	this.h7x = new w0h();
	this.l0q = null;
	this.s1i = new k0d();
	this.o3a = true;
}

j7h()
{
	let x3k = window.devicePixelRatio;

	this.h7x.h1k.width = this.l0q.clientWidth * x3k;
	this.h7x.h1k.height = this.l0q.clientHeight * x3k;

	let i6e = 32 * x3k;
	let v6y = 32 * x3k;
	let c0z = this.h7x.h1k.width - i6e;
	let b2p = this.h7x.h1k.height - v6y;
	let u9d = b2p < c0z ? b2p : c0z;
	if (u9d < 128)
	{
		u9d = 128;
	}
	let rect = new l9f();
	rect.u9c = 0;
	rect.l6h = 0;
	rect.z4d(u9d);
	rect.m5w(u9d);
	this.s1i.f4n = u9d * 0.02;
  if (this.s1i.f4n < b4m)
  {
    this.s1i.f4n = b4m;
  }
	u9d = this.s1i.z3h(rect);
 	this.h7x.a1c(this.s1i);
	this.h7x.c7m();
}

f0w()
{
	this.h7x.f0w();
	this.h7x.c7m();
}

z0u()
{
	this.s1i.c1i = !this.s1i.c1i;
	this.h7x.a1c(this.s1i);
	this.h7x.c7m();
}

a5q()
{
	this.h7x.a1c(this.s1i);
	this.h7x.c7m();
}

k0t(w2z)
{
	this.e6d = w2z.f3b.g6i();
	this.h7x.n6t(this.e6d);
	this.h7x.u6o(w2z.d8l);
	this.h7x.e8o(w2z.f5h);
  
 	this.h7x.g1t(w2z.y1m);
	this.h7x.c7m();

	if (this.o3a)
	{
		s6f('playBackward' + this.a5o, w2z.k7v);
		s6f('goToBegin'+ this.a5o, w2z.k7v);
		s6f('playForward' + this.a5o, w2z.s8d);
		s6f('goToEnd' + this.a5o, w2z.s8d);
		s6f('autoPlay' + this.a5o, w2z.s8d);
	}
	else
	{
		s6f('goToBegin' + this.a5o, w2z.k7v);
		s6f('goToEnd' + this.a5o, w2z.s8d);
	}
}

n6t(o4a)
{
	let w2z = new u8c();
	w2z.f3b = o4a.g6i();
	this.n6t(w2z);
}

a1c(s1i)
{
  this.s1i = s1i.g6i();
}

}

const d2r =
{
	r7t       : 0,
	m0g        : 1,
};

class q0w
{

constructor(a5o)
{
	this.a5o = a5o;
 	this.f1b = new n2s();
 	this.q8g = new x4g(a5o);
  this.q8g.d6g = false;
  this.q8g.z3j = true;
  this.q8g.o2b = true;
  this.q8g.a0a = false;
  this.s1u = null;
  this.h4d = new j7u();
  this.y9s = new z7c();
 	this.s9j = new r4o();
	this.o7o = new z5d();
	this.h0n = new z5d();
	this.e0y = 0;
	this.a8s = [];
	this.n9e = false;
 	this.l0w = false;
 	this.f7a = false;
 	this.b1f = false;
  this.e1m = d2r.r7t;
  this.y1j = document.getElementById("threat"+this.a5o);
 	this.y1j.onclick = this.r9e.bind(this);
  this.w7x();
  this.i9r = document.getElementById("engineSettings"+this.a5o);
}

x2w(t9s)
{
  this.s1u = new Engine();
  this.s1u.z1z = (event) => {
    this.m7j(event);
  };
  this.s1u.k3h(t9s);
  this.s1u.p8a();
}

u6u()
{
	this.h4d = this.s1u.t9s();
	this.s9j = new r4o();
  /*
	showName();
	MovePanel->Caption = "";
	ScorePanel->Caption = "";
	DepthPanel->Caption = "";
	NodesPanel->Caption = "";
  */
	this.f1b.n6t(this.s9j.o4a,
    this.s9j.m9v);
	this.d2t();
 	this.d7g();
  this.w7x();
}

n6t(n5j, s5c, n8q, x2d)
{
	this.h0n = n5j.g6i();
	this.e0y = s5c;
	this.a8s = n8q.slice(); 
	this.n9e = x2d;
	this.d7g();
}

d7g()
{
	if (!this.s1u) return;
	if (this.l0w) return;

	if (this.f7a)
	{
		let n8q = new n2s();
		n8q.n6t(this.h0n, this.e0y);
		let b8q = n8q.b8q();
		n8q.t4z(b8q, this.a8s);
		let r1j = n8q.k1b();
		let w1a = n8q.c6n(n8q.k8h());
		if (r1j.b3q())
		{
			w1a++;
		}
		let g3x = r1j;
		g3x.b1b();
		this.y9s = new z7c();
    this.y9s.n8q.n6t(g3x, w1a);
		this.o7o = g3x;
  }
  else
  {
 		this.y9s.n8q.n6t(this.h0n, this.e0y);
		let b8q = this.y9s.n8q.b8q();
		this.y9s.n8q.t4z(b8q, this.a8s);
		this.o7o = this.y9s.n8q.k1b();
  }
  if (y8x === 10) 
  {
    this.y9s.x9b = h3p;
  }
  else
  {
    this.y9s.x9b = u0g(y8x);
  }

  this.s1u.v0y();
	this.b1f = false;
  let n8q = i4h(this.o7o);
  if (n8q.length == 0)
  {
  	this.s1u.y1a(this.y9s);
		return;
  }
  else
  {
  	this.s1u.y1a(this.y9s);
		return;
  }
}

g6h()
{
	this.s9j = this.s1u.y0c();
  /*
	showScore();
	showDepth();
	showNodes();
	showCM();
  */
	this.f1b.n6t(this.s9j.o4a,
    this.s9j.m9v);
	this.d2t();
}

i1m()
{
	this.s9j = this.s1u.y0c();
	
}


y7g()
{
	this.s9j = this.s1u.y0c();
  
	
	
	
  
	this.d2t();
}

d2t()
{
	let a6z = this.s9j.j6t.n8q.g6i();
  a6z.n6t(this.s9j.o4a, this.s9j.m9v);

  if (this.s9j.u4c)
  {
    for (let y8c of this.s9j.lines)
    {
      let n8q = y8c.n8q.u5p();
      let d5q = a6z.b8q();
      let m9v = 0;
      for (let r4w of n8q)
      {
        if (m9v == 0)
        {
					let e6a = y8c.o3l() +
						"/" + y8c.f9t;
					r4w.d7d(e6a);
        }
        a6z.q5a(d5q, r4w);
        m9v++;
      }
    }
  }
  else
  {
    if (this.s9j.lines.length !== 0)
    {
      let y8c = this.s9j.lines[this.s9j.lines.length - 1];
      let n8q = y8c.n8q.u5p();
      let d5q = a6z.b8q();
      let m9v = 0;
      for (let r4w of n8q)
      {
				if (m9v == 0)
				{
					let e6a = y8c.o3l() +
						"/" + y8c.f9t;
					r4w.d7d(e6a);
				}
        a6z.q5a(d5q, r4w);
        m9v++;
      }
    }
  }
  this.f1b = a6z.g6i();
  this.q8g.u4c = this.s9j.u4c;
  this.q8g.w2g(this.f1b, 0);
}

m7j(event)
{
  const {cmd, data} = event;
  if (cmd === 'ready')
  {
    this.u6u()
  }
  else if (cmd === 'go')
  {
    this.g6h()
  }
  else if (cmd === 'cm')
  {
    this.i1m();
  }
  else if (cmd === 'pv')
  {
    this.y7g();
  }
}

e6b()
{
	if (this.s1u)
	{
    this.s1u.z1z = null;
    this.s1u.o6f();
		this.s1u = null;
		this.s9j = new r4o();
  	this.f1b.n6t(this.s9j.o4a,
      this.s9j.m9v);
  	this.d2t();
    this.f7a = false;
    this.w7x();
  }
}

t9o()
{
	return (this.s1u != null);
}

g1m()
{
  return (this.engineMode === d2r.m0g);
}

r9e()
{
	if (this.s1u && !this.g1m())
	{
		this.f7a = !this.f7a;
		this.w7x();
		this.d7g();
	}
}

w7x()
{
	if (this.s1u)
	{
    this.y1j.disabled = false;
    this.y1j.classList.remove('threat-inactive');
		if (this.f7a)
		{
      this.y1j.classList.remove('threat-off');
      this.y1j.classList.add('threat-on');
		}
		else
		{
      this.y1j.classList.remove('threat-on');
      this.y1j.classList.add('threat-off');
		}
	}
	else
	{
    this.y1j.disabled = true;
    this.y1j.classList.add('threat-inactive');
    this.y1j.classList.remove('threat-on');
    this.y1j.classList.add('threat-off');
	}
}

}

class s0k
{

constructor(a5o)
{
	this.a5o = a5o;
  this.e9a = null;
	this.t3a = new s8c();
}

y2m(t3a)
{
	this.t3a = t3a.g6i();
	this.n6p();
}

n6p()
{
	let e7s = this.t3a.l7w.g7i.w4y();
	let l5v = this.t3a.k4y.g7i.w4y();

	let x7m = '';
	if (e7s.length && this.t3a.l7w.t3u)
	{
		x7m = this.t3a.l7w.t3u.toString();
	}
	let h8b = '';
	if (e7s.length && this.t3a.l7w.j4k.length)
	{
		h8b = this.t3a.l7w.j4k.toString();
	}

	let i1l = '';
	if (l5v.length && this.t3a.k4y.t3u)
	{
		i1l = this.t3a.k4y.t3u.toString();
	}
	let u3f = '';
	if (l5v.length && this.t3a.k4y.j4k.length)
	{
		u3f = this.t3a.k4y.j4k.toString();
	}

	let a6u = this.t3a.l7w.g7i.o4j(1);
	let v3q = this.t3a.k4y.g7i.o4j(1);

	let y4p = '';
	let j5i = '';
	if (!this.t3a.l7w.d7i.k4u() &&
		!this.t3a.k4y.d7i.k4u())
	{
		y4p = this.t3a.l7w.d7i.w0q();
		j5i = this.t3a.k4y.d7i.w0q();
	}

	let c4p = n0c(this.t3a.i6r);
	let h8f = this.t3a.h8f.j4k;
	if (!this.t3a.h8f.u0z.k4u())
	{
		h8f += " ";
		h8f += this.t3a.h8f.u0z.h8q.toString();
	}
	let d4y = '';
	if (!this.t3a.h1r.k4u())
	{
		d4y = this.t3a.h1r.toString("dd-mm-yyyy");
	}
	let t9j = '';
	if (!this.t3a.t9j.k4u())
	{
		t9j = '</br>' + '[' + this.t3a.t9j.z0j + ']';
	}

	let v9w = document.getElementById("nota-container"+this.a5o);
	let n0o = v9w.clientHeight;
	let r6u = 200;

  let index = this.a5o;
  let i1h = this.t3a.h8f.i1h;

	let f3c = true;
	if (this.e9a.clientWidth >= 374 && n0o >= r6u)
	{
    let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable scroll\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
    s += 				"</td>";
		s +=        "<td class=\"playerWhite\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + e7s + "</span>";
    s += 					"<span class=\"rating\">" + x7m + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + y4p + "</span>";
		s +=        "</td>";
    s += 		  	"<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + c4p + "</span>";
		s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"8\">";
    s +=          "<span class=\"player\">" + l5v + "</span>";
		s +=          "<span class=\"rating\">" + i1l + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + j5i + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"playerPortrait\" colspan=\"3\" rowspan=\"2\">";
    
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
		s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
		s +=          "<span>" + h8b + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"tournamentData\" colspan=\"12\">";
    s +=          "<span class=\"tournamentTitle\">" + h8f + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"tournamentPlace\">" + i1h + "</span>";
		s +=          "<span class=\"gameDate\">" + d4y + "</span>";
    s +=          "<span class=\"annotator\">" + t9j + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + u3f + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"flagBlack\" colspan=\"2\">";
		s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
		s +=        "</td>";
		s +=      "</tr>";
		s +=    "</table>";
		this.e9a.innerHTML = s;

		
		
		let q2b = Math.trunc(this.e9a.clientWidth / 10);
		if (q2b < 24) q2b = 24;
    
		
		
		
		
		
		
	}
	else if (this.e9a.clientWidth >= 300 && n0o >= r6u)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + a6u + "</span>";
    s +=          "<span class=\"rating\">" + x7m + "</span>";
    s +=          "<br>";
		s += 				  "<span class=\"team\">" + y4p + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + c4p + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + v3q + "</span>";
    s +=          "<span class=\"rating\">" + i1l + "</span>";
    s +=          "<br>";
    s +=          "<span class=\"team\">" + j5i + "</span>";
		s +=        "</td>";
    s +=      "</tr>";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + h8b + "</span>";
    s +=        "</td>";
		s +=        "<td class=\"tournamentData\" colspan=\"14\">";
    s +=          "<span class=\"tournamentTitle\">" + h8f + "</span>";
    s +=          "<span class=\"tournamentPlace\">" + "</br>" + i1h + "</span>";
    s +=          "<span class=\"gameDate\">" + d4y + "</span>";
		s +=          "<span class=\"annotator\">" + t9j + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"fmjd\" colspan=\"1\">";
    s +=          "<span>" + u3f + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.e9a.innerHTML = s;
	}
	else if (this.e9a.clientWidth >= 280)
	{
		
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"flagWhite\" colspan=\"2\">";
    s +=          "<span><img id=\"whitePlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=        "<td class=\"playerWhite\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + a6u + "</span>";
    s +=          "<span class=\"rating\">" + x7m + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" colspan=\"2\">";
    s +=          "<span>" + c4p + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" colspan=\"9\">";
    s +=          "<span class=\"player\">" + v3q + "</span>";
    s +=          "<span class=\"rating\">" + i1l + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"flagBlack\" colspan=\"2\">";
    s +=          "<span><img id=\"blackPlayerNation" + index + "\" class=\"playerNation\"></span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.e9a.innerHTML = s;
	}
	else
	{
		
		f3c = false; 
		let s = "<span class=\"mainHeader\"></span>";
    s +=    "<table class=\"headerTable\">";
    s +=      "<tr>";
    s +=        "<td class=\"playerWhite\" width=\"45%\">";
    s +=          "<span class=\"player\">" + a6u + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"result\" width=\"10%\">";
    s +=          "<span>" + c4p + "</span>";
    s +=        "</td>";
    s +=        "<td class=\"playerBlack\" width=\"45%\">";
    s +=          "<span class=\"player\">" + v3q + "</span>";
    s +=        "</td>";
    s +=      "</tr>";
    s +=    "</table>";
		this.e9a.innerHTML = s;
	}

	if (f3c)
	{
		let t2d = 16;
		if (this.e9a.clientWidth < 400)
		{
			t2d = 16;
		}
		else if (this.e9a.clientWidth < 500)
		{
			t2d = 24;
		}
		else
		{
			t2d = 32;
		}
    if (this.t3a.l7w.l8m != y8f.b4z)
    {
  		let o5q = document.getElementById("whitePlayerNation"+this.a5o);
	  	o5q.src = "images/flags/" + t2d.toString() +"/" + t8b(this.t3a.l7w.l8m) + ".png";
		  o5q.height = t2d;
  		o5q.width = t2d;
    }
    if (this.t3a.k4y.l8m != y8f.b4z)
    {
  		let k1h = document.getElementById("blackPlayerNation"+this.a5o);
	  	k1h.src = "images/flags/" + t2d.toString() + "/" + t8b(this.t3a.k4y.l8m) + ".png";
		  k1h.height = t2d;
  		k1h.width = t2d;
    }
	}
}

}

class k3v
{

constructor(a5o)
{
	this.a5o = a5o;
	this.t3a = new s8c();
	this.t5d = new y3g(a5o);
	this.s8q = new a9q(a5o);
	this.s8q.q8g.e0t = this; 
	this.m0p = new o3x();
  this.v9z = new q0w(a5o);
}

f0w()
{
	this.t5d.f0w();
}

z0u()
{
	this.t5d.z0u();
}

a5q()
{
	this.t5d.a5q();
	this.s8q.q8g.a5q();
}

f1f(g9g, n3v, o2t, m7o)
{
	this.b0h(m7o, o2t);
}

b0h(m7o, o2t)
{
	this.t3a = m7o.i2q.g6i();
	this.y2m();
	this.s8q.q8g.w2g(m7o.n8q, o2t);
}

y2m()
{
	this.s8q.u4q.y2m(this.t3a);
}

f0f(w2z)
{
	this.t5d.k0t(w2z);
  this.d4j();
}

x9m()
{
	if (this.m0p.q3j())
	{
		this.m0p.r0b();
    this.i3i();
	}
	else
	{
		if (!this.s8q.q8g.u1s())
		{
      
			this.m0p.e0t = this; 
			this.m0p.c1j();
			this.s8q.q8g.j7w();
		}
	}
}

u2y(t9s)
{
	this.v9z.x2w(t9s);
}

y5j()
{
	this.v9z.e6b();
}

p4d()
{
	return this.v9z.t9o();
}

d4j()
{
  if (!this.m0p.q3j())
  {
    this.i3i();
  }
}

i3i()
{
	this.v9z.n6t(
		this.s8q.q8g.n5j(),
		this.s8q.q8g.s5c(),
		this.s8q.q8g.t0t(),
		this.s8q.q8g.x2d());
}

}

const o4u =
{
	r0i : 0,
	u0x : 1,
	x7h : 2,
	z2v : 3,
	l9o : 4,
 	z3y : 5,
	i6r : 6,
	n8q : 7,
	h8q : 8,
	event : 9,
	o1m : 10
};

const g6p =
{
	b4z : 0,
	q5l : 1,
	s5b : 2
};

let k1q = 0;
let l7m = 0;
let b8c = 0;
let u8v = 0;
let m3b = 0;
let x2c = 0;
let b7v = 0;
let n4y = 0;

let s5b = false;

function w4f(f, s)
{
	let e7v = f.i2q.l7w.g7i.z0j();
	let r8g = s.i2q.l7w.g7i.z0j();
	if (e7v < r8g)
	{
		return s5b ? -1 : 1;
	}
	if (e7v > r8g)
	{
		return s5b ? 1 : -1;
	}
	e7v = f.i2q.k4y.g7i.z0j();
	r8g = s.i2q.k4y.g7i.z0j();
	if (e7v < r8g)
	{
		return -1;
	}
	if (e7v > r8g)
	{
		return 1;
	}
	return 0;
}

function o2s(f, s)
{
	let e7v = f.i2q.k4y.g7i.z0j();
	let r8g = s.i2q.k4y.g7i.z0j();
	if (e7v < r8g)
	{
		return s5b ? -1 : 1;
	}
	if (e7v > r8g)
	{
		return s5b ? 1 : -1;
	}
	e7v = f.i2q.l7w.g7i.z0j();
	r8g = s.i2q.l7w.g7i.z0j();
	if (e7v < r8g)
	{
		return -1;
	}
	if (e7v > r8g)
	{
		return 1;
	}
	return 0;
}

function u6z(f, s)
{
	let i9l = f.i2q.l7w.t3u - s.i2q.l7w.t3u;
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	i9l = f.i2q.k4y.t3u - s.i2q.k4y.t3u;
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	return w4f(f, s);
}

function k7c(f, s)
{
	let i9l = f.i2q.k4y.t3u - s.i2q.k4y.t3u;
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	i9l = f.i2q.l7w.t3u - s.i2q.l7w.t3u;
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	return w4f(f, s);
}

function r5t(f, s)
{
	let i9l = f.i2q.l7w.l8m - s.i2q.l7w.l8m;
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	i9l = f.i2q.k4y.l8m - s.i2q.k4y.l8m;
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	return w4f(f, s);
}

function u3r(f, s)
{
	let i9l = f.i2q.k4y.l8m - s.i2q.k4y.l8m;
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	i9l = f.i2q.l7w.l8m - s.i2q.l7w.l8m;
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	return w4f(f, s);
}

function j7t(f, s)
{
	let i9l = f.i2q.i6r - s.i2q.i6r;
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	return w4f(f, s);
}

function o6y(f, s)
{
	let i9l = s.i2q.h1r.h1r() - f.i2q.h1r.h1r();
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	return w4f(f, s);
}

function u7s(f, s)
{
	let v4t = f.i2q.h8f.j4k;
	let h6o = s.i2q.h8f.j4k;
	if (v4t < h6o)
	{
		return s5b ? -1 : 1;
	}
	if (v4t > h6o)
	{
		return s5b ? 1 : -1;
	}
	let i9l = f.i2q.h8f.u0z.h1r() - s.i2q.h8f.u0z.h1r();
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	i9l = f.i2q.o1m - s.i2q.o1m;
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	i9l = f.i2q.z2c - s.i2q.z2c;
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	return w4f(f, s);
}

function t7y(f, s)
{
	let i9l = s.i2q.o1m - f.i2q.o1m;
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	i9l = s.i2q.z2c - f.i2q.z2c;
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	return w4f(f, s);
}

function q3p(f, s)
{
	let i9l = s.w3q - f.w3q;
	if (s5b)
	{
		i9l = -i9l;
	}
	if (i9l < 0) return -1;
	if (i9l > 0) return 1;
	return w4f(f, s);
}

class z2i
{

constructor(a5o)
{
	this.a5o = a5o;
	this.l8x = [];
	this.a1o = null;
	this.w3i = null;
	this.q8z = null;
	this.s2e = [];
	this.d2s = [];
	this.i0j = -1;
	this.w2n = g6p.b4z;
	this.e3t = 0;
  this.a9b = null;
}

l9b()
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
	this.q8z.innerHTML = s;
	this.s2e = this.q8z.getElementsByTagName("TH");
	let a5o = this.a5o;

 	this.s2e[o4u.r0i].onclick = this.b9r.bind(this);
	this.s2e[o4u.u0x].onclick = this.s3r.bind(this);
  this.s2e[o4u.x7h].onclick = this.i3p.bind(this);
	this.s2e[o4u.z2v].onclick = this.b9r.bind(this);
	this.s2e[o4u.l9o].onclick = this.g6z.bind(this);
  this.s2e[o4u.z3y].onclick = this.i4v.bind(this);
	this.s2e[o4u.i6r].onclick = this.x7g.bind(this);
	this.s2e[o4u.n8q].onclick = this.f0d.bind(this);
	this.s2e[o4u.h8q].onclick = this.h2p.bind(this);
	this.s2e[o4u.event].onclick = this.w8q.bind(this);
	this.s2e[o4u.o1m].onclick = this.c8p.bind(this);
}

g9p(l8x)
{
	this.l8x = l8x;
	this.j7h();
}

o4r()
{
	this.m8q("grid-player");
	this.m8q("grid-rating");
 	this.m8q("grid-flag");
	this.m8q("grid-result");
	this.m8q("grid-moves");
	this.m8q("grid-year");
	this.m8q("grid-event");
	this.m8q("grid-round");
}

t9g()
{
	this.s5h("grid-player", k1q);
	this.s5h("grid-rating", l7m);
 	this.s5h("grid-flag", n4y);
	this.s5h("grid-result", b8c);
	this.s5h("grid-moves", u8v);
	this.s5h("grid-year", m3b);
	this.s5h("grid-event", x2c);
	this.s5h("grid-round", b7v);

}

m8q(y6j)
{
	let g3i = this.a1o.getElementsByClassName(y6j);
	for (let i = 0; i < g3i.length; i++) {
		g3i[i].style.display = "none";
	}
}

l1p(y6j)
{
	let g3i = this.a1o.getElementsByClassName(y6j);
	for (let i = 0; i < g3i.length; i++) {
		g3i[i].style.display = "table-cell";
	}
}

s5h(y6j, width)
{
	let g3i = this.a1o.getElementsByClassName(y6j);
	for (let i = 0; i < g3i.length; i++) {
		g3i[i].style.width = (width) + "px";
	}
}

j7h()
{
	this.e3t = this.a1o.clientWidth;
	this.e3t -= 17;
	if (this.e3t < 100)
	{
		this.e3t = 100;
	}
	k1q = 200;
	l7m = 52;
	b8c = 34;
	u8v = 50;
	m3b = 52;
	x2c = 200;
	b7v = 50;
  n4y = 30;

 
	let v8i = document.getElementsByClassName("tdreplay")[0];
	if (v8i.clientWidth <= d2q)
	{
		let s4s = 0.7;
		k1q *= s4s;
		l7m *= s4s;
		b8c *= s4s;
		u8v *= s4s;
		m3b *= s4s;
		x2c *= s4s;
		b7v *= s4s;
	}
	this.l0c();
}

j8f()
{
	this.o4r();
	this.t9g();

  let n5w = 2.8;
  let b8t = 2.8;
  let v0w = 17;
	if (this.e3t <= 400)
	{
		this.l1p("grid-player");
		this.l1p("grid-result");
    this.l1p("grid-year");
		this.l1p("grid-event");
    let z7d = 5 * (n5w + b8t);
		let q3t = b8c + m3b;
		let m0b = Math.trunc((this.e3t - q3t - z7d - v0w) / 3);
		this.s5h("grid-player", m0b);
		this.s5h("grid-event", m0b);
	}
	else if (this.e3t <= 580)
	{
		this.l1p("grid-player");
		this.l1p("grid-rating");
		this.l1p("grid-result");
		this.l1p("grid-year");
		this.l1p("grid-event");
    let z7d = 7 * (n5w + b8t);
		let q3t = 2 * l7m + b8c + m3b;
		let m0b = Math.trunc((this.e3t - q3t - z7d - v0w) / 3);
		this.s5h("grid-player", m0b);
		this.s5h("grid-event", m0b);
	}
	else
	{
		this.l1p("grid-player");
		this.l1p("grid-rating");
    this.l1p("grid-flag");
		this.l1p("grid-result");
		this.l1p("grid-moves");
		this.l1p("grid-year");
		this.l1p("grid-event");
		this.l1p("grid-round");
    let z7d = 11 * (n5w + b8t);
		let q3t = 2 * l7m + 2 * n4y + b8c + u8v + m3b + b7v;
		let m0b = Math.trunc((this.e3t - q3t - z7d - v0w) / 3);
		this.s5h("grid-player", m0b);
		this.s5h("grid-event", m0b);
	}
}

l0c()
{
	let t2d = 16;
	let s = '';
  s += "<tbody id=\"gameList" + this.a5o + "\">"; 
	for (const m7o of this.l8x)
	{
		s += "<tr class=\"grid-row\">";
		s += "<td class=\"grid-cell grid-player\">";
		s += m7o.i2q.l7w.g7i.z0z();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (m7o.i2q.l7w.t3u)
		{
			s += m7o.i2q.l7w.t3u;
		}
		s += "</td>";
   	s += "<td class=\"grid-cell grid-flag\">";
		if (m7o.i2q.l7w.l8m != y8f.b4z)
		{
      let i5x = "images/flags/" + t2d.toString() + "/" + t8b(m7o.i2q.l7w.l8m) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += i5x;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-player\">";
		s += m7o.i2q.k4y.g7i.z0z();
		s += "</td>";
		s += "<td class=\"grid-cell grid-rating\">";
		if (m7o.i2q.k4y.t3u)
		{
			s += m7o.i2q.k4y.t3u;
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-flag\">";
		if (m7o.i2q.k4y.l8m != y8f.b4z)
		{
      let i5x = "images/flags/" + t2d.toString() + "/" + t8b(m7o.i2q.k4y.l8m) + ".png";
  		s += "<span>";
      s += "<img src=\"";
      s += i5x;
      s += "\" height=\"16\"";
      s += ">";
   		s += "</span>";
		}
		s += "</td>";
		s += "<td class=\"grid-cell grid-result\">";
		s += n0c(m7o.i2q.i6r);
		s += "</td>";
		s += "<td class=\"grid-cell grid-moves\">";
		s += m7o.w3q;
		s += "</td>";
		s += "<td class=\"grid-cell grid-year\">";
		s += m7o.i2q.h1r.toString("yyyy");
		s += "</td>";
		s += "<td class=\"grid-cell grid-event\">";
		s += m7o.i2q.h8f.j4k;
		s += "</td>";
		s += "<td class=\"grid-cell grid-round\">";
		s += m7o.i2q.b7q();
		s += "</td>";
		s += "</tr>";
	}
  s += "</tbody>";
	this.w3i.innerHTML = s;

  let l2m = document.getElementById('gameList' + this.a5o);
  l2m.addEventListener('click', this.q9z.bind(this));

	this.j8f();
}

x6d(d8p)
{
	if (d8p != this.i0j)
	{
		this.i0j = d8p;
		this.w2n = g6p.q5l;
	}
	else
	{
		if (this.w2n == g6p.b4z)
		{
			this.w2n = g6p.q5l;
		}
		else if (this.w2n == g6p.q5l)
		{
			this.w2n = g6p.s5b;
		}
		else if (this.w2n == g6p.s5b)
		{
			this.w2n = g6p.q5l;
		}
	}
	s5b = (this.w2n == g6p.s5b);

	for (const r2p of this.s2e)
	{
		let s = r2p.g9m;
		let x8u = s.replace(" grid-header-sort grid-header-sort-desc", "");
		let x8p = x8u.replace(" grid-header-sort grid-header-sort-asc", "");
		r2p.g9m = x8p;
	}
	let z8e = this.s2e[this.i0j];
	if (this.w2n == g6p.s5b)
	{
		z8e.g9m = z8e.g9m + " grid-header-sort grid-header-sort-desc";
	}
	else
	{
		z8e.g9m = z8e.g9m + " grid-header-sort grid-header-sort-asc";
	}
}

b9r(event)
{
	this.x6d(o4u.r0i);
	this.l8x.sort(w4f);
	this.l0c();
}

s3r(event)
{
	this.x6d(o4u.u0x);
	this.l8x.sort(u6z);
	this.l0c();
}

i3p(event)
{
	this.x6d(o4u.x7h);
	this.l8x.sort(r5t);
	this.l0c();
}

y1x(event)
{
	this.x6d(o4u.z2v);
	this.l8x.sort(o2s);
	this.l0c();
}

g6z(event)
{
	this.x6d(o4u.l9o);
	this.l8x.sort(k7c);
	this.l0c();
}

i4v(event)
{
	this.x6d(o4u.z3y);
	this.l8x.sort(u3r);
	this.l0c();
}

x7g(event)
{
	this.x6d(o4u.i6r);
	this.l8x.sort(j7t);
	this.l0c();
}

h2p(event)
{
	this.x6d(o4u.h8q);
	this.l8x.sort(o6y);
	this.l0c();
}

w8q(event)
{
	this.x6d(o4u.event);
	this.l8x.sort(u7s);
	this.l0c();
}

c8p(event)
{
	this.x6d(o4u.o1m);
	this.l8x.sort(t7y);
	this.l0c();
}

f0d(event)
{
	this.x6d(o4u.n8q);
	this.l8x.sort(q3p);
	this.l0c();
}

q9z(event)
{
  const clickedRow = event.target.closest('tr');
  if (!clickedRow) return;
  const index = clickedRow.rowIndex;
  if (this.a9b)
  {
    this.a9b(this, index);
  }
}

}

/*
TO DO:
Hover op eval/depth: laat bordje ziet met slotstand.
*/
class l0l
{

constructor()
{
	this.o4a = new z5d();
	this.n6y = new z5d();
	this.n3w = false;
	this.p8o = 0;
	this.o8n = 0;
	this.z3a = [];
}

}

var tooltip = null;

class x4g
{

constructor(a5o)
{
	this.a5o = a5o;
	this.g5o = new n2s();
	this.e0t = null;
	this.k6w = new l0l();
	this.y9i = null;
	this.i4y = [];
	this.k2m = [];
  this.n2y = [];
  this.b7h = [];
	this.q0k = -1;
	this.s1i = new k0d();
  this.t1o = null;
	this.b5v = true;
	this.p9r = false;
	this.v0p = [];
	this.h7f = 0;
  this.d6g = true;
  this.z3j = false;
	this.o2b = false;
	this.a0a = true;
  this.u4c = false;
}

w2g(i1u, o2t)
{
	this.g5o = i1u.g6i();
  this.g5o.g1y();
	this.t1o = this.g5o.h2t(o2t);
	this.f1f();
}

f6k(w8a)
{
  this.f9o(this.n2y[w8a]);
}

f1f()
{
	this.r1v();
	this.j7w();
  this.e1d(this.g5o.q6x(this.t1o));
}

r1v()
{
	let y4z = new j2s();
  y4z.d1y(this.d6g);
	y4z.i5i(this.u4c);
  /*
	y4z.setOneLine(this.u4c);
  */
	y4z.s0s(this.o2b);
	y4z.u8m(this.a0a);
	y4z.s3t(this.g5o);

  this.y9i.innerHTML = y4z.k4c.i1k;
  this.i4y = this.y9i.getElementsByClassName("tdmove");
  this.k2m = this.y9i.getElementsByClassName("tdcomment");

	this.h0r("tdmove");
	this.h0r("tdcomment");
	this.h0r("tddia");
	this.h0r("tdmedal");
  this.h0r("tdcolors");

  this.q3y("tdmove");

	this.y2r();
	this.p0g();
}

h0r(k6o)
{
	let a5o = this.a5o;
	let c1e = this.y9i.getElementsByClassName(k6o);
	for (const q2y of c1e)
	{
    let o2t = q2y.getAttribute('movenr');
    q2y.onclick = this.x0a.bind(this, o2t);
	}
}

q3y(k6o)
{
	let a5o = this.a5o;
	let c1e = this.y9i.getElementsByClassName(k6o);
	for (const q2y of c1e)
	{
    let o2t = q2y.getAttribute('movenr');
    q2y.onmouseover = this.g3q.bind(this, o2t);
    q2y.onmouseleave = this.h6g.bind(this, o2t);
	}
}

a5q()
{
	this.y2r();
}

y2r()
{
	let d4q = this.y9i.getElementsByClassName("tddia");
	for (const z0x of d4q)
	{
		let h7x = new w0h();
		h7x.h1k = z0x.getElementsByTagName("canvas")[0];
		let u9d = this.s1i.x8t();
		h7x.h1k.width = u9d;
		h7x.h1k.height = u9d;
		h7x.a1c(this.s1i);
		let d5q = this.g5o.h2t(z0x.getAttribute('movenr'));
    h7x.n6t(this.g5o.o4a(d5q));
    if (d5q.r4w)
    {
  		h7x.u6o(d5q.r4w.d8l());
	  	h7x.e8o(d5q.r4w.f5h());
    }
    else
    {
   		h7x.u6o(this.g5o.z1i());
	  	h7x.e8o(this.g5o.z1v());
    }
		h7x.c7m();
	}
}

p0g()
{
	let q6v = this.y9i.getElementsByClassName("tdmedal");
	for (const b2n of q6v)
	{
		let h1k = b2n.getElementsByTagName("canvas")[0];
		h1k.width = 40;
		h1k.height = 16;
		let k9p = h1k.getContext('2d');
		let rect = new l9f();
		rect.z4d(40);
		rect.m5w(16);
		let d5q = this.g5o.h2t(b2n.getAttribute('movenr'));
    if (d5q.r4w)
    {
  		p0g(k9p, rect, d5q.r4w.u6n());
    }
    else
    {
  		p0g(k9p, rect, this.g5o.m6w());
    }
	}
}

j7w()
{
	let w2z = new u8c();
	w2z.n5j = this.g5o.n5j();
  w2z.f3b = this.g5o.o4a(this.t1o);
  if (this.m1l())
  {
    w2z.d8l = this.g5o.z1i();
	  w2z.f5h = this.g5o.z1v();
  }
  else
  {
  	w2z.d8l = this.t1o.r4w.d8l();
	  w2z.f5h = this.t1o.r4w.f5h();
  }
  
	if (this.u1s())
	{
		w2z.m7n = new m0z();
	}
	else
	{
    let c8k = this.t1o.g6i();
		this.g5o.s8z(c8k);
		w2z.m7n = c8k.r4w.z8i().g6i();
	}
  
 	if (!this.m1l())
	{
		w2z.y1m = this.t1o.r4w.z8i();
	}
	w2z.c6n = this.c6n();
	w2z.k7v = this.k7v();
	w2z.s8d = this.s8d();
	w2z.m0y = 0; 
  w2z.i1q = this.g5o.i1q(this.t1o);
	if (this.e0t)
	{
		this.e0t.f0f(w2z);
	}
}

o5v(p9a)
{
	this.t1o = this.g5o.h2t(p9a);
	this.j7w();
}

v2m(y0x)
{
	switch (y0x)
	{
		case v0g:
		case c0b:
		case j9j:
			this.o1e();
			break;
		case c5d:
		case k9z:
		case c1y:
			this.q1e();
			break;
		case d0m:
		case s9l:
		case x3i:
			this.b2b();
			break;
		case j1r:
		case y5q:
		case t7o:
			this.n5d();
			break;
		case r5g:
			break;
		case h2r:
			break;
	}
}

m6g()
{
  if (this.t1o.z5n)
  {
    this.e1d(this.t1o.z5n.k6t);
  }
  else
  {
    this.e1d(0);
  }
}

g9i()
{
	this.m6g();
	this.j7w();
}

k7v()
{
	return !this.m1l();
}

m1l()
{
	return this.g5o.m1l(this.t1o);
}

u1s()
{
	return this.g5o.u1s(this.t1o);
}

c6n()
{
	return this.g5o.c6n(this.t1o);
}

m7n(e7u)
{
	if (this.u1s())
	{
		return null;
	}
	else
	{
    let c8k = this.t1o.g6i();
		this.g5o.c1p(c8k, e7u);
		return c8k.r4w;
	}
}

q1e()
{
	if (this.k7v())
	{
		this.g5o.j9a(this.t1o);
		this.g9i();
	}
}

s8d()
{
	return !this.u1s();
}

o1e()
{
	if (this.s8d())
	{
		this.q0y(0);
	}
}

q0y(index)
{
	let i2s = this.g5o.b2m(this.t1o);
	if (index >= 0 && index < i2s)
	{
		this.g5o.c1p(this.t1o, index);
		this.g9i();
	}
}

n5d()
{
	if (this.s8d())
	{
		this.g5o.h5n(this.t1o);
		this.g9i();
	}
}

b2b()
{
	if (this.k7v())
	{
		this.t1o = this.g5o.b8q();
		this.g9i();
	}
}

i7i()
{
	if (this.b5v)
	{
		this.z3z();
	}
	else
	{
		this.q6z();
	}
}

y3i()
{
	if (this.p9r)
	{
		this.p9r = false;
		this.e0t.t5d.h7x.p3y();
		this.j7w();
	}
	else
	{
		this.j7w();
	}
}


q6z()
{
	if (this.u1s())
	{
		this.j7w();
		return;
	}
  if (chess)
  {
  	this.q0y(0);
    return;
  }

  
 	let r4w = this.m7n(0);
  if (!r4w.o8n())
 	{
  	this.q0y(0);
	  return;
 	}

  
	let k5n = false;
	if (!this.k6w.n3w)
	{
		k5n = true;
	}
	else
	{
		k5n = false;
		if (this.k6w.p8o < this.k6w.o8n)
		{
			if (this.k6w.n6y.g4t(this.k6w.o4a))
			{
				k5n = true;
			}
		}
	}
	if (k5n)
	{
		this.k6w.o4a = this.g5o.o4a(this.t1o);
		this.k6w.n6y = this.g5o.o4a(this.t1o);
		this.k6w.n3w = true;
		this.k6w.p8o = 0;
		this.k6w.z3a.length = 0;
		this.k6w.z3a.push(r4w.f7i()); 
		this.k6w.o8n = r4w.o8n();
		if (this.k6w.o8n > 1)
		{
			let e2b = generateBetweens(this.k6w.n6y, r4w.z8i());
			for (let i = 0; i < this.k6w.o8n - 1; i++)
			{
				this.k6w.z3a.push(e2b[i]);
			}
		}
		this.k6w.z3a.push(r4w.g6x());
	}
	if (this.k6w.p8o < this.k6w.o8n)
	{
		let n7i = r4w.n7i();
		let h4g = this.k6w.z3a[this.k6w.p8o];
		let g6x = this.k6w.z3a[this.k6w.p8o + 1];
		this.k6w.n6y.w6f(h4g, e6m.k4u);
		this.k6w.n6y.w6f(g6x, n7i);
		this.k6w.o4a = this.k6w.n6y.g6i();
		this.k6w.p8o++;
		let w2z = new u8c();
		w2z.f3b = this.k6w.n6y.g6i();
		w2z.k7v = this.k7v();
		w2z.s8d = this.s8d();
		if (this.e0t)
		{
			this.e0t.f0f(w2z);
		}
	}
	else
	{
		this.k6w.n3w = false;
		this.q0y(0);
	}
}



z3z()
{
	if (this.p9r)
	{
		let z8u = this.e0t.t5d.h7x.n5l();
		if (z8u)
		{
			if (this.h7f < this.v0p.length - 1)
			{
				this.e0t.t5d.h7x.u2s(this.v0p[this.h7f],
					this.v0p[this.h7f+1], true);
				this.h7f++;
			}
			else
			{
				this.p9r = false;
				this.q0y(0);
			}
		}
		return;
	}

	if (this.u1s())
	{
		this.j7w();
		return;
	}

	this.v0p.length = 0;
	let r4w = this.m7n(0);
	let o8n = r4w.o8n();
	if (o8n == 0)
	{
		this.v0p.push(r4w.f7i()); 
		this.v0p.push(r4w.j3l());
	}
	else
	{
		this.v0p.push(r4w.f7i());
		if (o8n > 1)
		{
      let o4a = this.g5o.o4a(this.t1o);
      let e2b = generateBetweens(o4a, r4w.z8i());
			for (let i = 0; i < o8n - 1; i++)
			{
				this.v0p.push(e2b[i]);
			}
		}
		this.v0p.push(r4w.j3l());
	}

	this.e0t.t5d.h7x.u2s(this.v0p[0],
		this.v0p[1], o8n > 0);
	this.h7f = 1;
	this.p9r = true;
}

z9y(o0u)
{
	for (const m of this.i4y)
	{
		if (m.getAttribute('movenr') == o0u)
		{
			return m;
		}
	}
	return null;
}

q4c(o0u)
{
	let u1t = [];
	for (const u9p of this.k2m)
	{
		if (u9p.getAttribute('movenr') == o0u)
		{
			u1t.push(u9p);
		}
	}
	return u1t;
}

f9o(v5t)
{
	let e3c = v5t.offsetTop;
	let c4t = v5t.scrollHeight;

	let a4c = this.y9i.offsetTop;
	let c6x = this.y9i.scrollTop;
	let l9w = this.y9i.clientHeight;
	let k3x = this.y9i.scrollHeight;
	let n0d = e3c - a4c;
	if (n0d >= c6x && n0d + c4t <= c6x + l9w - 1)
	{
		
	}
	else
	{
		
		let top = n0d - (l9w / 2);
		if (top < 0) top = 0;
		this.y9i.scrollTop = top;
	}
}

p9g(b9k, w7k)
{
	let j7m = b9k;
	while (j7m.h4z)
	{
		j7m = j7m.h4z;
	}
 	while (j7m)
	{
    if (this.g5o.n2r(j7m.k6t) == false)
    {
 	  	let v5t = this.z9y(j7m.k6t);
  	  if (v5t)
 		  {
  		  v5t.classList.add(w7k);
 	  	}
    }
    j7m = j7m.w9a;
  }
}

e1d(o2t)
{
  
 	for (const r4w of this.i4y)
	{
 		r4w.classList.remove('tdcurline');
    r4w.classList.remove('tdcurnode1');
	}
 	for (const u9p of this.k2m)
	{
 		u9p.classList.remove('tdcurline');
	}

  
	if (this.q0k >= 0)
	{
		let v5t = this.z9y(this.q0k);
		if (v5t)
		{
			v5t.classList.remove('tdcurmove');
		}
	}

  
  let s7h = true;
  let c9y = this.g5o.o4b(this.t1o);
 	for (const b9k of c9y)
	{
    if (b9k.h4z && s7h)
		{
		  this.p9g(b9k, 'tdcurnode1');
      s7h = false;
    }
    else
    {
      if (this.g5o.n2r(b9k.k6t) == false)
      {
   	  	let q2e = this.z9y(b9k.k6t);
	  	  if (q2e)
  		  {
	  		  q2e.classList.add('tdcurline');
  	  	}
      }
    }
	}

  
	let v5t = this.z9y(o2t);
	if (v5t)
	{
    v5t.classList.remove('tdcurline');
		v5t.classList.add('tdcurmove');
		this.f9o(v5t);
	}
	this.q0k = o2t;
}

g2h()
{
	let r4w = this.z9y(this.q0k);
	if (!r4w) return;
	let x2k = r4w.offsetTop;
	let o4w = null;
	let f5i = -1;
	for (const m of this.i4y)
	{
		if (m.offsetTop < x2k)
		{
			if (m.offsetTop > f5i)
			{
				o4w = m;
				f5i = m.offsetTop;
			}
		}
		else
		{
			break;
		}
	}
	if (o4w)
	{
		this.f0y(o4w.getAttribute('movenr'));
	}
	else
	{
		if (this.i4y.length)
		{
			this.f0y(this.i4y[0].getAttribute('movenr'));
		}
	}
}

n1g()
{
	let r4w = this.z9y(this.q0k);
	if (!r4w)
	{
		this.o1e();
		return;
	}
	let x2k = r4w.offsetTop;
	for (const m of this.i4y)
	{
		if (m.offsetTop > x2k)
		{
			this.f0y(m.getAttribute('movenr'));
			return;
		}
	}
	if (this.i4y.length)
	{
		this.f0y(this.i4y[this.i4y.length - 1].getAttribute('movenr'));
	}
}

f0y(p9a)
{
  
  
  
  
  if (this.t1o.z5n)
  {
    if (this.t1o.z5n.k6t == p9a)
    {
      return;
    }
  }
  else
  {
    if (p9a == 0)
    {
      return;
    }
  }
	
  this.o5v(p9a);
  this.e1d(p9a);
	
}

q6x()
{
	return this.g5o.q6x(this.t1o);
}

a1c(s1i)
{
  this.s1i = s1i.g6i();
	this.s1i.n9n = 0;
	this.s1i.f4n = 0;
	this.s1i.o4h = 32;
  this.s1i.i8b = 2;
 	this.s1i.c1i = false;
}

n5j()
{
	return this.g5o.n5j();
}

s5c()
{
	return this.g5o.s5c();
}

t0t()
{
	return this.g5o.t0t(this.t1o);
}

x2d()
{
	return this.g5o.x2d();
}

x0a(o2t, event)
{
  this.f0y(o2t);
}

g3q(o2t, event)
{
  if (!this.z3j) return;

  if (!tooltip)
  {
    tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  }

  const q2y = event.currentTarget; 
  const rect = q2y.getBoundingClientRect();
  console.log(`l9f.u9c: ${rect.left}`);
  console.log(`l9f.l6h: ${rect.top}`);
  let x2a = rect.left;
  let e3r = rect.top + rect.height;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
	let x7s = this.s1i.x8t();

  if (x2a + x7s > viewportWidth)
  {
    x2a = viewportWidth - x7s - 5;
  }
  if (x2a < 5)
  {
    x2a = 5;
  }
  if (e3r + x7s > viewportHeight)
  {
    e3r = viewportHeight - x7s - 5;
  }
  if (e3r < 5)
  {
    e3r = 5;
  }

  let d5q = this.g5o.h2t(o2t);
  let o4a = this.g5o.o4a(d5q);
  tooltip.innerHTML = this.x4m(o4a);

  tooltip.style.left = `${x2a}px`;
  tooltip.style.top = `${e3r}px`;
  tooltip.classList.add('visible');
}

h6g(o2t, event)
{
  if (!this.z3j) return;
  tooltip.classList.remove('visible');
}

x4m(o4a)
{
  let h7x = new w0h();
  const tempCanvas = document.createElement('canvas');
	h7x.h1k = tempCanvas;
	let u9d = this.s1i.x8t();
	h7x.h1k.width = u9d;
	h7x.h1k.height = u9d;
	h7x.a1c(this.s1i);
  h7x.n6t(o4a);
  h7x.c7m();
  const imageDataURL = tempCanvas.toDataURL('image/png');
  return `<img src="${imageDataURL}" alt="Chess Position" width="${boardSize}" height="${boardSize}">`;
}

}

class r2a
{

constructor()
{
	this.fontSize = 15;
  this.x9u = true;
 	this.a9j = true;
}

g6i()
{
  return Object.assign(new r2a(), this);
}

}
class a9q
{

constructor(a5o)
{
  this.u4q = new s0k(a5o);
  this.q8g = new x4g(a5o);
}

}

class o3x
{

constructor()
{
	this.u2l = false;
	this.e0t = null;
	this.m7i = null;
	this.f4y = 6;
	this.n7e = null;
	this.x5e = null;
	this.f1w = null;
	this.a2f = null;
	this.l0d = null;
	this.s3e = false;
}

c1j()
{
	this.u2l = false;
	this.b6f();
	this.n7e.classList.replace('autoPlay', 'autoStop');
	this.a2f.style.display = 'none';
	this.l0d.style.display = 'none';
	this.x5e.style.display = 'inline-block';
	this.f1w.style.display = 'inline-block';
	this.l3i();
	this.e0t.t5d.o3a = false;
}

r0b()
{
	if (this.m7i)
	{
		clearInterval(this.m7i);
		this.m7i = null;
		this.n7e.classList.replace('autoStop', 'autoPlay');
		this.a2f.style.display = 'inline-block';
		this.l0d.style.display = 'inline-block';
		this.x5e.style.display = 'none';
		this.f1w.style.display = 'none';
		this.e0t.t5d.o3a = true; 
		this.e0t.s8q.q8g.y3i();
	}
}

b6f()
{
	let a5o = this.e0t.a5o;
	this.m7i = setInterval(function(){ n9b(a5o); },
		this.e0t.s8q.q8g.b5v ? this.f4y * 2 : this.f4y * 100);
}

q3j()
{
	return this.m7i != null;
}

k7v()
{
	return !this.e0t.s8q.q8g.m1l();
}

s8d()
{
	return !this.e0t.s8q.q8g.u1s();
}

d0b()
{
	if (this.s3e)
	{
		return;
	}
	else
	{
		this.s3e = true;
	}
	if (!this.s8d())
	{
		this.r0b();
	}
	else
	{
		this.e0t.s8q.q8g.i7i();
	}
	this.s3e = false;
}

n1h()
{
	if (this.m7i)
	{
		if (this.f4y < 50)
		{
			this.f4y++;
			clearInterval(this.m7i);
			this.b6f();
			this.l3i();
		}
	}
}

y5h()
{
	if (this.m7i)
	{
		if (this.f4y > 1)
		{
			this.f4y--;
			clearInterval(this.m7i);
			this.b6f();
			this.l3i();
		}
	}
}

l3i()
{
	m7y(this.x5e, this.f4y < 50);
	m7y(this.f1w, this.f4y > 1);
}

}

let p6m = null;
let m5x = 0;
let s3u = null;

class o8f
{

constructor()
{
	this.index = 0;
	this.w5r = '';
	this.v8i = null;
	this.i3e = false;
	this.e0t = null;
	this.c9i = null;
  this.l8x = [];
	this.a2z = 0;
  this.k0w = 0;

	this.g9v = null;
	this.c0g = null;
	this.left = null;
	this.t2w = null;
	this.z0h = null;
	this.p9y = null;
	this.r1o = null;
	this.l0q = null;
	this.c0u = null;
	this.t0k = null;
	this.n9l = null;
 	this.i5b = null;
 	this.m7q = null;
	this.u1i = null;
	this.a2f = null;
	this.x5e = null;
	this.n7e = null;
	this.l0d = null;
	this.f1w = null;
	this.z5u = null;
 	this.h3j = null;
  this.i5g = null;
	this.u7g = null;
  this.i9r = null;
	this.x8d = null;
	this.k2u = null;
	this.a1o = null;
	this.s9p = null;
	this.f6h = null;
	this.s1z = null;
  this.v0k = null;
  this.u7m = null;
	this.m5s = null;
	this.n5e = null;
	this.d0d = null;
	this.n4v = null;
	this.n3m = null;

	this.k6e = null;
	this.u1z = null;
	this.u8k = null;
	this.g7k = null;

  this.u2c = null;
	this.j4s = null;
	this.i0a = null;
  this.w5t = null;

  this.h0p = null;

  
  this.x0y = null;
  this.v5m = null;
  this.j4u = null;
  this.t4h = null;
  this.v7f = null;
  this.p6u = null;

  
}

p6r(index, v8i, w5r)
{
	this.index = index;
	this.v8i = v8i;
	this.w5r = w5r;
	v8i.innerHTML = '';
	v8i.id = "replay";

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
	s +=           "<div id=\"enota-container" + index + "\" class=\"enota-container\">";

  
	s +=  "<div id=\"belowBoard" + index + "\" class=\"belowBoard\">";
 	s +=  "<div id=\"engineButtonPanel" + index + "\" class=\"replayPanel\">";

  
  s += "<div class=\"toggle-container\">";
  s += "<input type=\"checkbox\" id=\"startEngine" + index + "\" hidden>";
  s += "<label for=\"startEngine" + index + "\" class=\"switch\" title=\"Evaluation on/off\">";
  s += "<span class=\"slider\"></span>";
  s += "</label>";
  s += "</div>";
  
	s += "<button id=\"threat" + index + "\" class=\"replayButton threat-off\" title=\"Threat\"></button>";
  
	s += "<button id=\"engineSettings" + index + "\" class=\"replayButton engineSettings\" title=\"Settings\"></button>";
  s +=  "</div>";
  s +=  "</div>";

	s +=             "<div class=\"enota-moves-container\">";
	s +=               "<div id=\"enota-imoves-container" + index + "\" class=\"enota-imoves-container\">";
	s +=                 "<div id=\"emovesPanel" + index + "\" class=\"emovesPanel\"></div>";
	s +=               "</div>";
	s +=             "</div>";
	s +=           "</div>";
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

  v8i.innerHTML = s;

	this.g9v = document.getElementById("rootParent"+index);
	this.c0g = document.getElementById("root"+index);
	this.left = document.getElementById("left"+index);
	this.t2w = document.getElementById("leftContainer"+index);
	this.z0h = document.getElementById("leftNest"+index);
	this.p9y = document.getElementById("leftNorth"+index);
	this.r1o = document.getElementById("boardHolder"+index);
	this.l0q = document.getElementById("boardPanel"+index);
	this.c0u = document.getElementById("boardCanvas"+index);
	this.t0k = document.getElementById("belowBoard"+index);
	this.n9l = document.getElementById("replayPanel"+index);
 	this.i5b = document.getElementById("goToPrevious"+index);
 	this.m7q = document.getElementById("goToNext"+index);
	this.u1i = document.getElementById("goToBegin"+index);
	this.a2f = document.getElementById("playBackward"+index);
	this.x5e = document.getElementById("playSlower"+index);
	this.n7e = document.getElementById("autoPlay"+index);
	this.l0d = document.getElementById("playForward"+index);
	this.f1w = document.getElementById("playFaster"+index);
	this.z5u = document.getElementById("goToEnd"+index);
  this.h3j = document.getElementById("flipBoard"+index);
  this.i5g = document.getElementById("download"+index);
	this.u7g = document.getElementById("showGameList"+index);
  this.i9r = document.getElementById("settings"+index);
	this.x8d = document.getElementById("leftSouth"+index);
	this.k2u = document.getElementById("leftSouthNest"+index);
	this.a1o = document.getElementById("listParent"+index);
	this.s9p = document.getElementById("listHeader"+index);
	this.f6h = document.getElementById("listHeaderTable"+index);
	this.s1z = document.getElementById("listBody"+index);
  this.v0k = document.getElementById("list-button-container"+index);
  this.u7m = document.getElementById("hideGameList"+index);
	this.m5s = document.getElementById("gameList"+index);
	this.n5e = document.getElementById("right"+index);
	this.d0d = document.getElementById("rightNest"+index);
	this.n4v = document.getElementById("rightNorth"+index);
	this.n3m = document.getElementById("rightSouth"+index);

  
  if (!chess)
  {
    this.n4v.style.height = "100%";
   	this.n3m.style.display = 'none';
  }

	this.k6e = document.getElementById("nota-container"+index);
  this.k6e.style.fontSize = h9g.fontSize + 'px';
	this.u1z = document.getElementById("nota-header-container"+index);
	this.u8k = document.getElementById("headerPanel"+index);
	this.g7k = document.getElementById("movesPanel"+index);

	this.u2c = document.getElementById("enota-container"+index);
  this.u2c.style.fontSize = h9g.fontSize + 'px';
	this.j4s = document.getElementById("enota-header-container"+index);
	this.i0a = document.getElementById("eheaderPanel"+index);
	this.w5t = document.getElementById("emovesPanel"+index);

  this.h0p = document.getElementById("startEngine"+index);
}

l9b()
{
	this.v8i.style.display = 'block';
	this.x5e.style.display = 'none';
	this.f1w.style.display = 'none';
	this.a1o.style.display = 'none';

	this.i3e = false;
	if (this.v8i.clientWidth <= d2q)
	{
		this.c7r();
		this.i3e = true;
	}
	else
	{
		this.v9n();
		this.w6g();
	}
  this.l1e();
	let a5o = this.index;

	this.u1i.onclick = this.r6q.bind(this);
	this.a2f.onclick = this.q1e.bind(this);
	this.x5e.onclick = this.n1h.bind(this);
	this.n7e.onclick = this.k6q.bind(this);
	this.f1w.onclick = this.y5h.bind(this);
	this.l0d.onclick = this.o1e.bind(this);
	this.z5u.onclick = this.g1c.bind(this);
  this.i5b.onclick = this.u0o.bind(this);
  this.m7q.onclick = this.f4i.bind(this);
  this.h3j.onclick = this.f0w.bind(this);
 	this.i5g.onclick = this.z2z.bind(this);
	this.u7g.onclick = this.c9c.bind(this);
 	this.u7m.onclick = this.w1r.bind(this);

  this.i9r.addEventListener('click', async () => {
    await this.onSettingsClick();
  });

 	this.h0p.onchange = this.p6e.bind(this);

	this.e0t = new k3v(this.index);
	this.e0t.t5d.h7x.v3n(this.c0u);
	this.e0t.t5d.l0q = this.l0q;
  this.e0t.t5d.a1c(t9t);
	this.e0t.s8q.u4q.e9a = this.u8k;
	this.e0t.s8q.q8g.y9i = this.g7k;
  this.e0t.s8q.q8g.a1c(t9t);
	this.e0t.m0p.n7e = this.n7e;
	this.e0t.m0p.x5e = this.x5e;
	this.e0t.m0p.f1w = this.f1w;
	this.e0t.m0p.a2f = this.a2f;
	this.e0t.m0p.l0d = this.l0d;
 	this.e0t.v9z.q8g.y9i = this.w5t;
  this.e0t.v9z.q8g.a1c(t9t);

  this.e0t.v9z.i9r.addEventListener('click', async () => {
    await this.onEngineSettingsClick();
  });

	this.c9i = new z2i(this.index);
	this.c9i.a1o = this.a1o;
	this.c9i.w3i = this.m5s;
	this.c9i.q8z = this.f6h;
	this.c9i.l9b();
	this.c9i.g9p(this.l8x);
  this.c9i.a9b = (m5s, index) => {
    this.v5n(m5s, index);
  };
	if (this.c9i.l8x.length)
	{
		this.f1f(0, 0);
	}
	else
	{
		let m7o = new q4h();
		this.e0t.f1f(null, 1, 0, m7o);
	}
}

e9u(w5r)
{
	this.w5r = w5r;
 	let lines = this.w5r.split('\n');
	let s5g = 0;
	for (const y8c of lines)
	{
		if (y8c.startsWith("[Event \""))
		{
			let r1i = s5g;
      let s4b = lines.length;
   		let f8v = lines.slice(r1i, s4b);
  		let w7w = new y7y(f8v);
	  	this.c9i.l8x[this.a2z] = w7w.x5g();
      break;
    }
    s5g++;
	}
  this.f1f(0, 0);
}

l1e()
{
	let lines = this.w5r.split('\n');
	let m9j = [];
	let s5g = 0;
	for (const y8c of lines)
	{
		if (y8c.startsWith("[Event \""))
		{
			m9j.push(s5g);
		}
		s5g++;
	}
	let i = 0;
	this.l8x = [];
	for (const y7t of m9j)
	{
		let r1i = y7t;
		let s4b = 0;
		if (i < m9j.length - 1)
		{
			s4b = m9j[i + 1];
		}
		else
		{
			s4b = lines.length;
		}
		let f8v = lines.slice(r1i, s4b);
		let w7w = new y7y(f8v);
		let m7o = w7w.x5g();
		this.l8x.push(m7o);
		i++;
	}
}

j2c()
{
	if (this.i3e || this.c0g.clientHeight <= d2q)
	{
		this.v8i.style.z1m = "0px";
		this.v8i.style.m1y = "0px";
		this.v8i.style.width = "100%";
		this.v8i.style.height = "88vh";
	}
	else
	{
		this.v8i.style.z1m = "1px solid gray";
		this.v8i.style.m1y = "1px solid gray";
		this.v8i.style.height = "88vh";
	}
}

a8m()
{
	this.j2c();

	this.left.style.width = "100%";

	let z4n = this.p9y.getBoundingClientRect();
	this.x8d.style.top = (z4n.height) + "px";
	this.w6g();

	this.o5p();
	this.v9n();
	this.a5w();
	this.f0s();
  this.f9l()
}

j9i()
{
	this.j2c();

	let p0e = this.c0g.getBoundingClientRect();
	this.left.style.width = (p0e.width * 0.50) + "px";
	let z0v = this.left.getBoundingClientRect();

	let z4n = this.p9y.getBoundingClientRect();
	this.x8d.style.top = (z4n.height) + "px";
	this.w6g();

	this.n5e.style.left = (z0v.width) + "px";
	this.n5e.style.width = (p0e.width - z0v.width) + "px";

	this.o5p();
	this.v9n();
	this.a5w();
	this.f0s();
  this.f9l()
}

v9n()
{
}

l4a()
{
  this.p9y.style.height = '100%';
  this.n4v.appendChild(this.k6e);
  this.k6e.style.height = '100%';
  this.n3m.appendChild(this.u2c);
  if (!chess)
  {
    this.n3m.style.display = 'none';
  }
  else
  {
    this.n3m.style.display = 'block';
    this.u2c.style.height = '100%';
  }
  this.n5e.style.display = 'block';
}

c7r()
{
  this.p9y.style.height = '70%';
  this.k2u.appendChild(this.k6e);
  if (!chess)
  {
    this.k6e.style.height = '100%';
    this.u2c.style.display = 'none';
  }
  else
  {
    this.k2u.appendChild(this.u2c);
    this.k6e.style.height = '50%';
    this.u2c.style.height = '50%';
    this.u2c.style.display = 'block';
  }
  this.n5e.style.display = 'none';
}

c9c(event)
{
	this.a1o.style.display = 'block';
  let u4p = this.a1o.clientHeight - this.s9p.clientHeight - this.v0k.clientHeight;
  this.s1z.style.height = u4p + "px";
	this.a5w();
}

w1r(event)
{
 	this.a1o.style.display = 'none';
}

f0s()
{
	this.e0t.s8q.u4q.n6p();
}

f9l()
{
}

a5w()
{
  this.c9i.j7h();
}

o5p()
{
	let z4n = this.p9y.getBoundingClientRect();
	let x7n = this.t0k.getBoundingClientRect();
	this.r1o.style.height = (z4n.height - x7n.height - 1) + "px";
	this.e0t.t5d.j7h();
}

w6g()
{
	let i5l = this.z0h.getBoundingClientRect();
	let z4n = this.p9y.getBoundingClientRect();
	let l5h = i5l.height - z4n.height;
	if (l5h < 0) l5h = 0;
	this.x8d.style.height = l5h + "px";
}

b8y()
{
  s6f('goToPrevious'+this.index, this.a2z > 0);
  s6f('goToNext'+this.index, this.a2z < this.c9i.l8x.length - 1);
}

c0y(e)
{
	this.e0t.t5d.h7x.mouseDown(e);
}

n0l(e)
{
	this.e0t.t5d.h7x.mouseMove(e);
}

y2j(e)
{
	this.e0t.t5d.h7x.mouseUp(e);
}

f9b(e)
{
	this.e0t.t5d.h7x.touchStart(e);
}

w2p(e)
{
	this.e0t.t5d.h7x.touchMove(e);
}

v0h(e)
{
	this.e0t.t5d.h7x.touchEnd(e);
}

n1h(event)
{
	this.e0t.m0p.n1h();
}

y5h(event)
{
	this.e0t.m0p.y5h();
}

q1e(event)
{
	this.e0t.m0p.r0b();
	this.e0t.s8q.q8g.q1e();
}

o1e(event)
{
	this.e0t.m0p.r0b();
	this.e0t.s8q.q8g.o1e();
}

r6q(event)
{
	this.e0t.m0p.r0b();
	this.e0t.s8q.q8g.b2b();
}

g1c(event)
{
	this.e0t.m0p.r0b();
	this.e0t.s8q.q8g.n5d();
}

k6q(event)
{
	this.e0t.x9m();
}

h9j()
{
 	if (this.c9i.l8x.length)
  {
    this.f1f(0, 0);
  }
}

u0o(event)
{
 	if (this.a2z > 0)
  {
    this.f1f(this.a2z - 1, 0);
  }
}

f4i(event)
{
  if (this.a2z < this.c9i.l8x.length - 1)
  {
    this.f1f(this.a2z + 1, 0);
  }
}

x1j()
{
	if (this.c9i.l8x.length)
  {
    this.a2z = this.c9i.l8x.length - 1;
    this.f1f(this.c9i.l8x.length - 1, 0);
	}
}

f1f(a2z, o2t)
{
  if (a2z >= 0 && a2z <= this.c9i.l8x.length - 1)
  {
    this.a2z = a2z;
  	this.e0t.f1f(null, 1, o2t, this.c9i.l8x[this.a2z]);
  }
  this.b8y();
}

f0w(event)
{
	this.e0t.f0w();
}

z0u()
{
	this.e0t.z0u();
}

k9k()
{
	if (this.v8i.clientWidth <= d2q)
	{
		if (this.i3e)
		{
			this.a8m();
		}
		else
		{
			this.c7r();
			this.i3e = true;
			this.a8m();
		}
	}
	else
	{
		if (!this.i3e)
		{
			this.j9i();
		}
		else
		{
			this.l4a();
			this.i3e = false;
			this.j9i();
		}
	}
}

v5n(m5s, index)
{
	this.f1f(index, 0);
  this.w1r();
}

z2z(event)
{
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);
  let i = 0;
  while (i < this.w5r.length - 1)
  {
    if (this.w5r[i] == '[')
    {
        break;
    }
    i++;
  }
  let w5r = this.w5r.substring(i);
  a.href = window.URL.createObjectURL(new Blob([w5r], { type: "text/plain" }));
  a.setAttribute("download", "games.pgn");
  a.click();
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}

p6e(event)
{
  if (chess)
  {
    if (this.e0t.p4d())
    {
      this.y5j();
    }
    else
    {
      this.u2y();
    }
  }
}

y5j()
{
  this.e0t.y5j();
}

u2y()
{
  let t9s = new j7u();
  t9s.id.z0j = "Stockfish";
  const g3v = t9s.g3v;
  g3v.addInteger("MultiPV", p8v);
  g3v.addInteger("Threads", w3o);
  g3v.addInteger("Hash",    z1u(p8g));
  this.e0t.u2y(t9s);
}

f1h()
{
  this.e0t.t5d.a1c(t9t);
  this.e0t.t5d.j7h();
  this.e0t.s8q.q8g.a1c(t9t);
  this.e0t.s8q.q8g.r1v();
  this.e0t.v9z.q8g.a1c(t9t);
  this.e0t.v9z.q8g.r1v();
  let k6e = document.getElementById("nota-container"+this.index);
  k6e.style.fontSize = h9g.fontSize + 'px';
  let p6a = document.getElementById("enota-container"+this.index);
  p6a.style.fontSize = h9g.fontSize + 'px';
}

i7n()
{
  if (this.e0t.p4d())
  {
    this.y5j();
    this.u2y();
  }
}

async onSettingsClick()
{
  const dialog = new j7r();
  const { i6r } = await dialog.show();

  if (i6r === dialog.s0t)
  {
    this.f1h();
  }
}

async onEngineSettingsClick()
{
  const dialog = new e4r();
  const { i6r } = await dialog.show();

  if (i6r === dialog.s0t)
  {
    this.i7n();
  }
}

}

class j7r
{

constructor()
{
  this.s0t = 1;
  this.z6q = 0;

  this.dialog = document.getElementById("settingsDialog");
  if (!this.dialog)
  {
    this.u7w();
  }
  this.dialog = document.getElementById("settingsDialog");

  this.v5m = this.dialog.querySelector(".piece-select");
  this.j4u = this.dialog.querySelector(".coordinates-checkbox");
  this.t4h = this.dialog.querySelector(".font-select");
  this.v7f = this.dialog.querySelector(".ok-button");
  this.p6u = this.dialog.querySelector(".cancel-button");

  this.v7f.onclick = this.k4h.bind(this);
 	this.p6u.onclick = this.j6x.bind(this);
}

u7w()
{
  const u0a = i6h();
  const s = `
    <dialog id="settingsDialog" class="settingsDialog">
      <w5e>Settings</w5e>

      <div class="settings-row">
        <span class="label-text">Pieces:</span>
        <select class="pieceSelect piece-select">
          ${u0a.map((s1e, i) => '<option value="' + i + '">' + s1e + '</option>').join('')}
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

k4h(event)
{
  t9t.k0n = this.v5m.value;
  localStorage.setItem(t0v, t9t.k0n);
  g6o(t9t.k0n);
  t9t.c1i = this.j4u.checked;
  localStorage.setItem(d4t, t9t.c1i.toString());
  h9g.fontSize = this.t4h.value;
  localStorage.setItem(x1h, h9g.fontSize);
  this.dialog.close('ok');
}

j6x(event)
{
  this.dialog.close('cancel');
}

async show()
{
  y5b = true;

  this.v5m.value = t9t.k0n;
  this.j4u.checked = t9t.c1i;
  this.t4h.value = h9g.fontSize;

  const i6r = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.s0t : this.z6q);
    };
    this.dialog.showModal();
  });

  y5b = false;
  return { i6r };
}

}

function u0g(p6s)
{
  const value = parseInt(p6s);
  const timeMap = {
    1: 2000,   
    2: 4000,   
    3: 6000,   
    4: 8000,   
    5: 10000,  
    6: 12000,  
    7: 15000,  
    8: 20000,  
    9: 30000,  
    10: 0      
  };
  return timeMap[value] || 2000; 
}

function z1u(p6s)
{
  const value = parseInt(p6s);
  const memoryMap = {
    1: 16,
    2: 32,
    3: 64,
    4: 128,
    5: 256,
    6: 512
  };
  return memoryMap[value] || 16;
}

class e4r
{

constructor()
{
  this.s0t = 1;
  this.z6q = 0;

  this.dialog = document.getElementById("engineSettingsDialog");
  if (!this.dialog)
  {
    this.u7w();
  }
  this.dialog = document.getElementById("engineSettingsDialog");

  this.c2t = this.dialog.querySelector(".searchTime-slider");

  this.m7t = this.dialog.querySelector(".searchTime-value");
  this.a4i = this.dialog.querySelector(".multiPV-slider");
  this.a5g = this.dialog.querySelector(".multiPV-value");
  this.l4r = this.dialog.querySelector(".threads-slider");
  this.c3g = this.dialog.querySelector(".threads-value");
  this.i5y = this.dialog.querySelector(".memory-slider");
  this.s7v = this.dialog.querySelector(".memory-value");
  this.v7f = this.dialog.querySelector(".ok-button");
  this.p6u = this.dialog.querySelector(".cancel-button");

  this.v7f.onclick = this.k4h.bind(this);
 	this.p6u.onclick = this.j6x.bind(this);

  this.c2t.addEventListener('input', this.j5h.bind(this));
  this.a4i.addEventListener('input', this.o8m.bind(this));

  this.l4r.addEventListener('input', this.r9b.bind(this));

  this.i5y.addEventListener('input', this.j2n.bind(this));

}

u7w() {
  const s = `
    <dialog id="engineSettingsDialog" class="settingsDialog">
      <w5e>Engine Settings</w5e>

      <div class="settings-row">
        <span class="label-text">Search time</span>
        <input type="range" class="simple-slider searchTime-slider" min="1" max="10" n8w="1" value="1">
        <span class="value-display-simple searchTime-value">1s</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Multiple lines</span>
        <input type="range" class="simple-slider multiPV-slider" min="1" max="5" n8w="1" value="1">
        <span class="value-display-simple multiPV-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Threads</span>
        <input type="range" class="simple-slider threads-slider" min="1" max="32" n8w="1" value="1">
        <span class="value-display-simple threads-value">1</span>
      </div>

      <div class="settings-row">
        <span class="label-text">Memory</span>
        <input type="range" class="simple-slider memory-slider" min="1" max="6" n8w="1" value="1">
        <span class="value-display-simple memory-value">16MB</span>
      </div>

      <form method="dialog">
        <button value="ok" class="settingsButton ok-button">OK</button>
        <button value="cancel" class="settingsButton cancel-button">Cancel</button>
      </form>

    </dialog>
  `;

  document.body.insertAdjacentHTML('beforeend', s);
}

k4h(event)

{
  y8x = parseInt(this.c2t.value);
  p8v = parseInt(this.a4i.value);
  w3o = parseInt(this.l4r.value);
  p8g = parseInt(this.i5y.value);
  localStorage.setItem(r9p, y8x);
  localStorage.setItem(j7d, p8v);
  localStorage.setItem(r7l, w3o);
  localStorage.setItem(l5y, p8g);
  this.dialog.close('ok');
}

j6x(event)
{
  this.dialog.close('cancel');
}

j5h()
{
  const value = parseInt(this.c2t.value);
  let displayValue;

  switch (value)
  {
    case 1: displayValue = "2s"; break;
    case 2: displayValue = "4s"; break;
    case 3: displayValue = "6s"; break;
    case 4: displayValue = "8s"; break;
    case 5: displayValue = "10s"; break;
    case 6: displayValue = "12s"; break;
    case 7: displayValue = "15s"; break;
    case 8: displayValue = "20s"; break;
    case 9: displayValue = "30s"; break;
    case 10: displayValue = "\u221E"; break;
    default: displayValue = "";
  }
  this.m7t.textContent = displayValue;
}

o8m()
{
  const value = this.a4i.value;
  this.a5g.textContent = `${value}`;
}


r9b()
{
  const value = this.l4r.value;
  this.c3g.textContent = `${value}`;
}


j2n()

{
  const value = parseInt(this.i5y.value);
  let displayValue;

  switch (value)
  {
    case 1: displayValue = "16MB"; break;
    case 2: displayValue = "32MB"; break;
    case 3: displayValue = "64MB"; break;
    case 4: displayValue = "128MB"; break;
    case 5: displayValue = "256MB"; break;
    case 6: displayValue = "512MB"; break;
    default: displayValue = "";
  }

  this.s7v.textContent = displayValue;
}

async show()
{
  y5b = true;

  this.c2t.value = y8x;
  this.a4i.value = p8v;
  this.l4r.value = w3o;
  this.i5y.value = p8g;

  this.j5h();
  this.o8m();
  this.r9b();
  this.j2n();

  const i6r = await new Promise((resolve) => {
    this.dialog.onclose = () => {
       resolve(this.dialog.returnValue === 'ok' ? this.s0t : this.z6q);
    };
    this.dialog.showModal();
  });

  y5b = false;
  return { i6r };
}

}

const z6y = 38;
const o9o = 40;
const c5d = 37;
const k9z = 37;
const c1y = 52;
const v0g = 39;
const c0b = 39;
const j9j = 54;
const d0m = 36;
const s9l = 36;
const x3i = 55;
const j1r = 35;
const y5q = 35;
const t7o = 49;
const a4a = 187;
const z0q = 107;
const t3q = 61;
const f8r = 42;
const p2p = 170;
const h2r = 8;
const r5g = 13;
let f5u = false;
let y5b = false;

const d2q = 767;
let w1t = [];
let d9q = -1;
let h3i = new c8e();

let t9t = new k0d();
let h9g = new r2a();
let y8x = 1;
let p8v = 1;
let w3o = 1;
let p8g = 1;

window.onload = function()
{
  n1n();
  o7e();
  h5g();
};

document.onkeydown = a4m;

function a4m(e)
{
  if (e.y0x === "Escape")
  {
    return;
  }

  if (y5b)
  {
    
    e.preventDefault();
    return;
  }

	let c6e = e || window.event;
	let y0x = c6e.keyCode;

	if (f5u) return;
	f5u = true;

	if (d9q == -1) return;

	if (e.ctrlKey)
	{
		if (y0x == 66) 
		{
				w1t[d9q].f0w();
				e.preventDefault();
				
				
				
		}
		f5u = false;
		return;
	}
	if (y0x)
	{
		
		v8m(y0x);
		e.preventDefault(); 
		
	}
	f5u = false;
}

function n9b(a5o)
{
	w1t[a5o].e0t.m0p.d0b();
}

function v8m(y0x)
{
	if (d9q == -1) return;

	if (y0x == z6y)
	{
		w1t[d9q].e0t.s8q.q8g.g2h();
	}
	else if (y0x == o9o)
	{
		w1t[d9q].e0t.s8q.q8g.n1g();
	}
	else if (y0x == c5d || y0x == k9z || y0x == c1y ||
	y0x == v0g || y0x == c0b || y0x == j9j ||
	y0x == d0m || y0x == s9l ||
	y0x == j1r || y0x == y5q)
	{
		w1t[d9q].e0t.s8q.q8g.v2m(y0x);
	}
	else if (y0x == a4a || y0x == z0q || y0x == t3q)
	{
		w1t[d9q].doFlipBoard();
	}
}

function a6l(n9x, m9e)
{
	let v3j = n9x.length;
	let i4r = 0;

	function check(n)
	{
		if (n == v3j)
		{
			m9e();
		}
	}

	for (let i = 0; i < n9x.length; ++i)
	{
    let e3w = n9x[i];
		let img = document.createElement("img");
		img.id = n9x[i].replace(".bmp", "").replace(".gif", "").replace(".jpg", "").replace(".png", "").replace(".svg", "");
		h3i.add(img);
		img.addEventListener("load", function()
		{
			i4r++;
			check(i4r);
		});
		img.src = e3w;
	}
}

function n1n()
{
 	a6l(w5p(), c1k);
  
  
}

function k9k()
{
	for (const u1e of w1t)
	{
		u1e.k9k();
	}
}

function c1k()
{
	let b1n = document.getElementsByClassName("tdreplay");
	for (const v8i of b1n)
	{
		let u1e = new o8f();
		u1e.p6r(w1t.length, v8i, v8i.innerHTML);
		u1e.l9b();
		w1t.push(u1e);
	}
	if (w1t.length)
	{
		d9q = 0;
	}
	window.addEventListener("resize", k9k);
	k9k();
}

function s6f(z0j, j1v)
{
	let button = document.getElementById(z0j);
	if (j1v)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

function m7y(button, j1v)
{
	if (j1v)
	{
		button.classList.remove('replayButtonDisabled');
	}
	else
	{
		button.classList.add('replayButtonDisabled');
	}
}

const d4t = 'Coordinates';
const t0v = 'Pieces';
const x1h = 'MovesFontSize';
const r9p = 'SearchTime';
const j7d = 'MultiPV';
const r7l = 'Threads';
const l5y = 'Memory';

function h5g()
{
  const coordinatesValue = localStorage.getItem(d4t);
  if (coordinatesValue === null)
  {
    t9t.c1i = true;
  }
  else
  {
    t9t.c1i = (coordinatesValue === 'true');
  }

  const piecesValue = localStorage.getItem(t0v);
  if (piecesValue === null)
  {
    t9t.k0n = 0;
  }
  else
  {
    t9t.k0n = piecesValue;
  }
  g6o(t9t.k0n);

  const movesFontSizeValue = localStorage.getItem(x1h);
  if (movesFontSizeValue === null)
  {
    h9g.fontSize = 15;
  }
  else
  {
    h9g.fontSize = movesFontSizeValue;
  }

  
  const searchTime = localStorage.getItem(r9p);
  if (searchTime === null)
  {
    y8x = 10; 
  }
  else
  {
    y8x = searchTime;
  }
  const u4c = localStorage.getItem(j7d);
  if (u4c === null)
  {
    p8v = 1;
  }
  else
  {
    p8v = u4c;
  }
  const threads = localStorage.getItem(r7l);
  if (threads === null)
  {
    const logicalThreads = navigator.hardwareConcurrency || 4;
    const defaultThreads = Math.max(1, logicalThreads - 1);
    w3o = defaultThreads;
  }
  else
  {
    w3o = threads;
  }
  const memory = localStorage.getItem(l5y);
  if (memory === null)
  {
    p8g = 4; 
  }
  else
  {
    p8g = memory;
  }
}
const q9c =
[
	[ w7g.b4z, 			  	""      ],
	[ w7g.m7o,  		 		"game"  ],
	[ w7g.e5k,    		 	"match" ],
	[ w7g.h8f,  	"tourn" ],
	[ w7g.i4i,   			"swiss" ],
	[ w7g.f9f,    	"k.o."  ],
	[ w7g.l3f,	"simul" ],
	[ w7g.v1v,	"schev" ]
];

const e2c =
[
	[ n3r.f4p, ""        ],
	[ n3r.e9z,  "(rapid)" ],
	[ n3r.z2h,  "(blitz)" ],
	[ n3r.h1c,   "(corr)"  ]
];

const c6l =
[
	[ u1p.b4z,     		 ""     ],
	[ u1p.w0v,       		 "$145" ],
	[ u1p.n6x, 		 "$142" ],
	[ u1p.v1m, 		 "$143" ],
	[ u1p.m0l, "$144" ],
	[ u1p.a3h,  "$140" ],
	[ u1p.s7y, "$141" ]
];

const g9c =
[
	[ j2a.b4z,     		""   ],
	[ j2a.e9f,       	"$1" ],
	[ j2a.e6s, 			  	"$2" ],
	[ j2a.h8t,	"$5" ],
	[ j2a.e4e, 		  "$6" ],
	[ j2a.l6i,  	"$3" ],
	[ j2a.i3j, 		  "$4" ],
	[ j2a.b1j, 		"$22" ],
	[ j2a.y0b, 		"$8" ]
];

const b8o =
[
	[ j7y.b4z,     						""     ],
	[ j7y.o7j,      "$18"  ],
	[ j7y.s6g, 					"$16"  ],
	[ j7y.o8k,	"$14"  ],
	[ j7y.m2h, 						"$11"  ],
	[ j7y.s1h,  						"$13"  ],
	[ j7y.h7j,  "$15"  ],
	[ j7y.d8n, 					"$17"  ],
	[ j7y.o4y, 			"$19"  ],
	[ j7y.z1n,					"$44"  ],
	[ j7y.e1z, 					"$132" ],
	[ j7y.c0a,  					"$36"  ],
	[ j7y.w3a, 							"$40"  ],
	[ j7y.y3j, 			  "$138" ],
	[ j7y.s1p,	"$32"  ],
	[ j7y.a5v, 							"$146" ]
];

const t8m =
[
	[ a0i.b4z,     		""     ],
	[ a0i.k3l,     "$51"  ],
	[ a0i.z3w, 			"$52"  ],
	[ a0i.j7l,	    		"$53"  ]
];

const s0r =
[
	[ n5u.a0x, 			 	""       ],
	[ n5u.z3w,   		"middle" ],
	[ n5u.n1o,   	   	 	"low"    ]
];


function b6t(v9u)
{
	return e2c[v9u][1];
}

function j3i(f1x)
{
	for (const v9u of e2c)
	{
		if (v9u[1] == f1x)
		{
			return v9u[0];
		}
	}
	return n3r.f4p;
}

function c6o(type)
{
	return q9c[type][1];
}

function u3k(f1x)
{
	for (const k2e of q9c)
	{
		if (k2e[1] == f1x)
		{
			return k2e[0];
		}
	}
	return w7g.b4z;
}

function j8u(d2p)
{
	return c6l[d2p][1];
}

function z7m(f1x)
{
	for (const d2p of c6l)
	{
		if (d2p[1] == f1x)
		{
			return d2p[0];
		}
	}
	return u1p.b4z;
}

function k0p(style)
{
	return g9c[style][1];
}

function j2v(f1x)
{
	for (const style of g9c)
	{
		if (style[1] == f1x)
		{
			return style[0];
		}
	}
	return j2a.b4z;
}

function l3g(value)
{
	return b8o[value][1];
}

function h6u(f1x)
{
	for (const value of b8o)
	{
		if (value[1] == f1x)
		{
			return value[0];
		}
	}
	return j7y.b4z;
}

function e6v(a8p)
{
	return t8m[a8p][1];
}

function n4p(f1x)
{
	for (const a7m of t8m)
	{
		if (a7m[1] == f1x)
		{
			return a7m[0];
		}
	}
	return a0i.b4z;
}

function t0b(f1x)
{
	return f1x.length == 0 ||
		f1x == "?" ||
		f1x == "-" ||
		f1x == "*" ||
		f1x == "????.??.??";
}

function o3s(f1x)
{
	if (t0b(f1x))
	{
		return "";
	}
	else
	{
		return f1x.trim();
	}
}

function z0s(f1x, w5o)
{
	if (t0b(f1x))
	{
		return w5o;
	}
	else
	{
		return y4s(f1x, w5o);
	}
}

function a7d(value)
{
	return value ? value.toString() : "";
}

function o8p(u5x)
{
	return s0r[u5x][1];
}

function o9a(f1x)
{
	for (const u5x of s0r)
	{
		if (u5x[1] == f1x)
		{
			return u5x[0];
		}
	}
	return n5u.a0x;
}

function v7d(c9e)
{
	if (!c9e)
	{
		return "";
	}
	else
	{
		let div = Math.trunc(c9e / 60);
		let o0t = c9e % 60;
		return div.toString() + "." + o0t.toString().padStart(2, '0');
	}
}

function a6n(i6r)
{
	switch (i6r)
	{
		case f7y.t8s:
			return "1-0";
		case f7y.c7m:
			return "1/2-1/2";
		case f7y.c8c:
			return "0-1";
		default:
			return "*";
	}
}

function y0n(t3u)
{
	if (t3u > 0 && t3u <= 9999)
	{
		return t3u.toString().padStart(4, '0');
	}
	else
	{
		return "-";
	}
}

function x6l(h1r)
{
	if (h1r.k4u())
	{
		return "????.??.??";
	}
	let f1x = '';
	if (h1r.h8q)
	{
		f1x = h1r.h8q.toString().padStart(4, '0');
	}
	else
	{
		f1x = "????";
	}
	f1x += ".";
	if (h1r.c2q)
	{
		let d1g = h1r.c2q.toString().padStart(2, '0');
		f1x += d1g;
	}
	else
	{
		f1x += "??";
	}
	f1x += ".";
	if (h1r.y0i)
	{
		let x4d = h1r.y0i.toString().padStart(2, '0');;
		f1x += x4d;
	}
	else
	{
		f1x += "??";
	}
	return f1x;
}

function p5d(w5a)
{
	if (t0b(w5a))
	{
		return new y6h();
	}
	else
	{
		let h1r = new y6h();
		h1r.p0l("yyyy.mm.dd", w5a);
		return h1r;
	}
}

function z3q(w5a, h8f)
{
	h8f.i8o = (w5a.indexOf("team") != -1);
	h8f.type = w7g.b4z;
	for (const k2e of q9c)
	{
		if (w5a.indexOf(k2e[1]) != -1)
		{
			h8f.type = k2e[0];
			break;
		}
	}
	h8f.v9u = n3r.f4p;
	for (const v9u of e2c)
	{
		if (w5a.indexOf(v9u[1]) != -1)
		{
			h8f.v9u = v9u[0];
			break;
		}
	}
}

function t8v(w5a, t3a)
{
	t3a.o1m = 0;
	t3a.z2c = 0;
	let d5q = w5a.indexOf(".");
	if (d5q != -1)
	{
		let d9b = w5a.substr(0, d5q);
		t3a.o1m = y4s(d9b, 0);
		let v3b = w5a.substr(d5q + 1, w5a.length);
		d5q = v3b.indexOf(".");
		if (d5q != -1)
		{
			d9b = v3b.substr(0, d5q);
			t3a.z2c = y4s(d9b, 0);
		}
		else
		{
			t3a.z2c = y4s(v3b, 0);
		}
	}
	else
	{
		t3a.o1m = y4s(w5a, 0);
	}
}

function c7b(t3a)
{
	let w5a = '';
	if (t3a.z2c)
	{
		w5a = t3a.o1m.toString() + "." + t3a.z2c.toString();
	}
	else if (t3a.o1m)
	{
		w5a = t3a.o1m.toString();
	}
	return w5a;
}

function j1u(w5a)
{
	if (w5a == "2-0" || w5a == "20" || w5a == "1-0" || w5a == "10")
	{
		return f7y.t8s;
	}
	else if (w5a == "1-1" || w5a == "11" || w5a == "1/2-1/2" ||
		w5a == "1/21/2" || w5a == "0.5-0.5")
	{
		return f7y.c7m;
	}
	else if (w5a == "0-2" || w5a == "02" || w5a == "0-1" || w5a == "01")
	{
		return f7y.c8c;
	}
	else
	{
		return f7y.b4z;
	}
}

function w3c(w5a)
{
	return y4s(w5a, 0);
}

function e9n(w5a)
{
	return x9g(w5a);
}

function b5b(w5a)
{
	return j1o(w5a);
}

function w3n(value)
{
	return value ? "1" : "";
}

function l5c(w5a)
{
	return w5a == "1";
}

function h7d(e7j)
{
	let t3a = new s8c();

	
	t3a.l7w.g7i.y9q(o3s(e7j.r0i));
	if (!t0b(e7j.s0u))
	{
		t3a.l7w.d7i.z0j = o3s(e7j.s0u);
		t3a.l7w.d7i.k6t = z0s(e7j.o6l, 0);
		if (!t0b(e7j.e1y))
		{
			let h1r = p5d(e7j.e1y);
			t3a.l7w.d7i.h8q = h1r.h8q;
		}
		t3a.l7w.d7i.z6e = l5c(e7j.c9x);
		t3a.l7w.d7i.l8m = y2i(o3s(e7j.t7l));
	}
	t3a.l7w.t3u = w3c(o3s(e7j.u0x));
	t3a.l7w.time = b5b(o3s(e7j.z1a));
	t3a.l7w.j4k = o3s(e7j.m0x);
	t3a.l7w.l8m = c6t(o3s(e7j.d9i));

	
	t3a.k4y.g7i.y9q(o3s(e7j.z2v));
	if (!t0b(e7j.r8q))
	{
		t3a.k4y.d7i.z0j = o3s(e7j.r8q);
		t3a.k4y.d7i.k6t = z0s(e7j.a2e, 0);
		if (!t0b(e7j.j8a))
		{
			let h1r = p5d(e7j.j8a);
			t3a.k4y.d7i.h8q = h1r.h8q;
		}
		t3a.k4y.d7i.z6e = l5c(e7j.y3v);
		t3a.k4y.d7i.l8m = y2i(o3s(e7j.o7x));
	}
	t3a.k4y.t3u = w3c(o3s(e7j.l9o));
	t3a.k4y.time = b5b(o3s(e7j.b9j));
	t3a.k4y.j4k = o3s(e7j.d3u);
	t3a.k4y.l8m = c6t(o3s(e7j.e2z));

	
	t3a.h8f.j4k = o3s(e7j.v2v);
	t3a.h8f.i1h = o3s(e7j.l3u);
	t3a.h8f.u0z = p5d(e7j.g2i);
	t3a.h8f.z1q = p5d(e7j.y2s);

	z3q(o3s(e7j.k2e), t3a.h8f);
	
	
	
	let e4y = j3i(e7j.e4y);
	if (e4y != n3r.f4p)
	{
		t3a.h8f.v9u = e4y;
	}
	t3a.h8f.l8m = y2i(o3s(e7j.c0c));
	t3a.h8f.a9a = z0s(e7j.f4c, 0);
	let k2e = u3k(e7j.k2e);
	if (k2e != w7g.b4z)
	{
		t3a.h8f.type= k2e;
	}
	t3a.h8f.a3s = z0s(e7j.s2h, 0);
	t3a.h8f.i8o = l5c(e7j.e7h);
	t3a.h8f.f1e = l5c(e7j.g1a);
	t3a.h8f.v0q = l5c(e7j.d3g);
	t3a.h8f.y9p = l5c(e7j.p8s);

	
	t3a.t9j.z0j = o3s(e7j.t9j);

	
	t3a.p3n.j4k = o3s(e7j.u1a);
	t3a.p3n.p4w = o3s(e7j.m6e);
	t3a.p3n.t4q = p5d(e7j.o7d);
	t3a.p3n.b6v = z0s(e7j.m9n, 0);
	t3a.p3n.a1v = p5d(e7j.i6k);
	t3a.p3n.u5x = o9a(e7j.v4f);

	
	t3a.j4k.j4k = o3s(e7j.j4k);

	
	t3a.h1r = p5d(e7j.h1r);
	t3a.i6r = j1u(o3s(e7j.i6r));
	t3a.d8w = e9n(o3s(e7j.d8w));
	t8v(o3s(e7j.o1m), t3a);

	
	let c1e = z0s(e7j.c1e, 0);
	t3a.c1e.j7z(c1e);

  
  t3a.id.z1j = e7j.z1j;

	return t3a;
}

function g1b(t3a)
{
	let e7j = new k4p();

	
	e7j.r0i = t3a.l7w.g7i.z0j();
	if (t3a.l7w.d7i.z0j.length)
	{
		e7j.s0u = t3a.l7w.d7i.z0j;
		if (t3a.l7w.d7i.k6t)
		{
			e7j.o6l = t3a.l7w.d7i.k6t;
		}
		if (t3a.l7w.d7i.h8q)
		{
			let v8o = new y6h();
			v8o.h8q = t3a.l7w.d7i.h8q;
			e7j.e1y = x6l(v8o);
		}
		if (t3a.l7w.d7i.z6e)
		{
			e7j.c9x = w3n(t3a.l7w.d7i.z6e);
		}
		if (t3a.l7w.d7i.l8m != y8f.b4z)
		{
			e7j.t7l = t4c(t3a.l7w.d7i.l8m);
		}
	}
	e7j.u0x = y0n(t3a.l7w.t3u);
	e7j.z1a = v7d(t3a.l7w.time);
	e7j.m0x = t3a.l7w.j4k;

	
	e7j.z2v = t3a.k4y.g7i.z0j();
	if (t3a.k4y.d7i.z0j.length)
	{
		e7j.r8q = t3a.k4y.d7i.z0j;
		if (t3a.k4y.d7i.k6t)
		{
			e7j.a2e = t3a.k4y.d7i.k6t;
		}
		if (t3a.k4y.d7i.h8q)
		{
			let f7u = new y6h();
			f7u.h8q = t3a.k4y.d7i.h8q;
			e7j.j8a = x6l(f7u);
		}
		if (t3a.k4y.d7i.z6e)
		{
			e7j.y3v = w3n(t3a.k4y.d7i.z6e);
		}
		if (t3a.k4y.d7i.l8m != y8f.b4z)
		{
			e7j.o7x = t4c(t3a.k4y.d7i.l8m);
		}
	}
	e7j.l9o = y0n(t3a.k4y.t3u);
	e7j.b9j = v7d(t3a.k4y.time);
	e7j.d3u = t3a.k4y.j4k;

	
	e7j.v2v = t3a.h8f.j4k;
	e7j.l3u = t3a.h8f.i1h;
	e7j.g2i = x6l(t3a.h8f.u0z);
	e7j.y2s = x6l(t3a.h8f.z1q);
	e7j.e4y = b6t(t3a.h8f.v9u);
	e7j.f4c = a7d(t3a.h8f.a9a);
	e7j.c0c = t4c(t3a.h8f.l8m);
	e7j.k2e = c6o(t3a.h8f.type);
	e7j.s2h = a7d(t3a.h8f.a3s);
	e7j.e7h = w3n(t3a.h8f.i8o);
	e7j.g1a = w3n(t3a.h8f.f1e);
	e7j.d3g = w3n(t3a.h8f.v0q);
	e7j.p8s = w3n(t3a.h8f.y9p);

	
	e7j.t9j = t3a.t9j.z0j;

	
	e7j.u1a = t3a.p3n.j4k;
	e7j.m6e = t3a.p3n.p4w;
	e7j.o7d = x6l(t3a.p3n.t4q);
	e7j.m9n = a7d(t3a.p3n.b6v);
	e7j.i6k = x6l(t3a.p3n.a1v);
	e7j.v4f = o8p(t3a.p3n.u5x);

	
	e7j.j4k = t3a.j4k.j4k;

	
	e7j.h1r = x6l(t3a.h1r);
	e7j.i6r = a6n(t3a.i6r);
	e7j.d8w = a4q(t3a.d8w);
	e7j.o1m = c7b(t3a);

	
	e7j.c1e = a7d(t3a.c1e.l2e());

	return e7j;
}

const v8k  					= "White";
const g9s					= "WhiteTeam";
const j4m 				= "WhiteTeamNumber";
const h4h 					= "WhiteTeamYear";
const p3s 				= "WhiteTeamSeason";
const v7z 			= "WhiteTeamCountry";
const e5q 						= "WhiteRating";
const p4m 							= "WhiteTime";
const z6p 							= "WhiteElo";
const l5q  						= "WhiteTitle";
const a3o						= "WhiteCountry";

const j9c						= "Black";
const l4c					= "BlackTeam";
const a5m 				= "BlackTeamNumber";
const d5x 					= "BlackTeamYear";
const s0a 				= "BlackTeamSeason";
const z7p 			= "BlackTeamCountry";
const r8x 						= "BlackRating";
const x1f 							= "BlackTime";
const m6j 							= "BlackElo";
const h8e  						= "BlackTitle";
const j5o						= "BlackCountry";

const m1h 				= "Event";
const a7g				= "Site";
const m8w 			 	= "EventDate";
const j5j 		 	= "EventEndDate";
const m6o 			 	= "EventSpeed";
const m4x 	 	= "EventCategory";
const x7j 		 	= "EventCountry";
const f5y 			 	= "EventType";
const h5f 		 	= "EventRounds";
const j5p 			 	= "EventTeams";
const o6m		 	= "EventComplete";
const n4i 	= "EventThreePoints";
const a0l	= "EventBoardPoints";

const v1q 							= "Annotator";

const f5v 				 		= "SourceTitle";
const c3v 				 		= "Publication";
const w5l		 		= "SourcePublisher";
const x7p		 		= "PublicationDate";
const t7i 				 		= "SourceDate";
const y6p 		= "SourceVersionNumber";
const w5m 	 		= "SourceVersionDate";
const r1b 			 		= "SourceQuality";

const u6q 					 		    = "Title";

const b5r 							 		= "Date";
const t4j 								= "Result";
const p3b 										= "ECO";
const f8t 									= "Round";

const k9w			 							= "Tags";

const f4z 									= "Setup";
const x0t 										= "FEN";
const k8p 							= "PlyCount";

const g0h      							= "GUID";

const y1s = "(";
const a2v   = ")";
const e1j    = "{";

class a8n
{

constructor()
{
  this.s6e = new m9a();
  this.f4b = new z8f();
  this.u6n = new c4l();
  this.r9m = false;
  this.e7w = false;
  this.q2j = false;
  this.c6w = '';
}

}

class y7y
{

constructor(lines)
{
	this.j2b = new k4p();
	this.x9r = lines;
	this.b9m = 0;
	this.h7a = '';
	this.t8t = 0;
	this.c7f = 0;
	this.g0y = '';
	this.q7c = 0;
	this.r5o = false;
	this.p8z = '';
	this.s9s = '';
	this.g5o = null;
	this.y1g = new z5d();
	this.w2q = '';
	this.g6w = false;
 	this.x4w = false;
	this.q7d = false;
}

x5g()
{
  this.q7c = 0;
	let m7o = new q4h();
	this.g5o = m7o.n8q;
	try
	{
		this.u1v();
	}
	catch (err)
	{
	}
	m7o.i2q = h7d(this.j2b);
  m7o.w3q = this.q7c;
	return m7o;
}

u1v()
{
	this.r5o = false;
	this.g8j();
	if (this.r5o)
	{
		this.n5j = v1b(this.s9s);
		this.g5o.n6t(this.n5j, 1);
	}
 	this.n8d();
}

v8q()
{
	if (this.x9r.length == 0)
	{
		return false;
	}
	if (this.b9m >= this.x9r.length)
	{
		return false;
	}
	else
	{
		this.h7a = this.x9r[this.b9m];
		this.t8t = this.h7a.length;
		this.c7f = 0;
		this.b9m++;
		return true;
	}
}

g8j()
{
	this.q7d = false;
	this.x4w = false;
	while (true)
	{
		if (!this.v8q())
		{
			return;
		}
		this.x7i();
		if (!this.g4s())
		{
			return;
		}
		this.k8j();
	}
}


s8x(u5n)
{
	let w5a = this.g0y.substr(1, this.g0y.length - 1);
	return w5a.toUpperCase() === u5n.toUpperCase();
}

n8d()
{
 	if (this.g0y.length == 0) return;
	this.g6w = false;

	while (this.g0y[0] == '{')
	{
		let i1k = this.q6s();
    let e4w = new a8n();
		this.i1x(i1k, e4w);
    if (!e4w.s6e.k4u())
		{
			this.g5o.q4l(e4w.s6e);
		}
 		if (!e4w.f4b.k4u())
		{
			this.g5o.m8j(e4w.f4b);
		}
		if (!e4w.u6n.k4u())
		{
			this.g5o.s6s(e4w.u6n);
		}
 		i1k = e4w.c6w.trim();
    if (i1k.length)
    {
      
      
      if (i1k.startsWith("[%a") && i1k.length > 7)
      {
        i1k = i1k.substr(7, i1k.length).trim();
      }
      let r7d = this.g5o.r7d();
      if (r7d.length)
      {
        r7d += ' ';
      }
      r7d += i1k;
      this.g5o.a8h(r7d);
		}
		this.x7i();
		if (this.g0y.length == 0)
		{
			return;
		}
	}
	this.z4q(this.g5o.b8q(), this.g5o.n5j());
}

z4q(m5e, t8q)
{
  let d5q = m5e.g6i();
  let o4a = t8q.g6i();

	let z3u = null;
 	let h3d = new d3i();

	do
	{
		if (this.g0y == y1s)
		{
			if (!z3u)
			{
				throw "error";
			}
			if (!this.x7i())
			{
				throw "error";
			}

 			o4a.j9a(d5q.r4w.z8i());
			o4a.m6i(h3d);
			this.g5o.j9a(d5q); 
      this.z4q(d5q, o4a);
			this.g5o.s8z(d5q); 
			o4a.s8z(d5q.r4w.z8i());

			while (this.x7i())
			{
				if (this.g0y != y1s)
				{
					break;
				}
				if (!this.x7i())
				{
					throw "error";
				}
        o4a.j9a(d5q.r4w.z8i());
				o4a.m6i(h3d);
				this.g5o.j9a(d5q); 
				this.z4q(d5q, o4a);
				this.g5o.s8z(d5q);  
				o4a.s8z(d5q.r4w.z8i());
			}
		}

		if (this.g0y == a2v)
		{
			break;
		}

		if (
			this.g0y == "1-0" ||
			this.g0y == "2-0" ||
			this.g0y == "0-1" ||
			this.g0y == "0-2" ||
			this.g0y == "1/2-1/2" ||
			this.g0y == "1-1" ||
			this.g0y == "*" ||
			this.g0y == "**" ||
			this.g0y == "-*" ||
			this.g0y == "1-0*" ||
			this.g0y == "2-0*" ||
			this.g0y == "0-1*" ||
			this.g0y == "0-2*" ||
			this.g0y == "1/2-1/2*" ||
			this.g0y == "1-1*" ||
			this.g0y == "2-00*" ||
			this.g0y == "00-2*")
			break;

		if (this.g0y[0] == '$')
		{
			if (!z3u)
			{
				throw "error";
			}
			let d2p = z7m(this.g0y);
			if (d2p != u1p.b4z)
			{
				z3u.t3r(d2p);
				continue;
			}
			let style = j2v(this.g0y);
			if (style != j2a.b4z)
			{
				z3u.e7p(style);
				continue;
			}
			let value = h6u(this.g0y);
			if (value != j7y.b4z)
			{
				z3u.p0t(value);
				continue;
			}
			let a8p = n4p(this.g0y);
			if (a8p != a0i.b4z)
			{
				z3u.i3h(a8p);
				continue;
			}
			continue;
		}
		if (this.g0y[0] == '{')
		{
			let i1k = this.q6s();
      let e4w = new a8n();
  		this.i1x(i1k, e4w);
      if (!e4w.s6e.k4u())
      {
		  	if (z3u)
			  {
				  z3u.u6o(e4w.s6e);
				}
			}
   		if (!e4w.f4b.k4u())
      {
				if (z3u)
				{
					z3u.e8o(e4w.f4b);
				}
			}
   		if (!e4w.u6n.k4u())
      {
				if (z3u)
				{
					z3u.n1c(e4w.u6n);
				}
			}
      if (e4w.e7w)
      {
				if (z3u)
				{
					z3u.n0i();
				}
			}
      if (e4w.q2j)
      {
				if (z3u)
				{
					z3u.l0n();
				}
			}
   		i1k = e4w.c6w.trim();
      if (!i1k.length)
      {
        continue;
      }
			if (z3u)
			{
        let r7h = z3u.r7h();
        if (r7h.length)
        {
          r7h += ' ';
        }
        r7h += i1k;
				z3u.c8u(r7h);
			}
			else
			{
        if (this.w2q.length)
        {
   				this.w2q += ' ';
        }
				this.w2q += i1k;
				this.g6w = true;
			}
			continue;
		}
		if (!this.j6n())
		{
			continue;
		}
		let h7w = false;
		if (this.g0y[this.g0y.length] == '*')
		{
			this.g0y = this.g0y.substr(0, this.g0y.length - 1);
			h7w = true;
		}
 		let n7m = this.w3z(this.g0y);
    let z8i = x4a(o4a, this.g0y);
 		h3d = o4a.h3d();
		o4a.s8z(z8i);
		let r4w = v9v(z8i);
    r4w.e7p(n7m);
    this.g5o.q5a(d5q, r4w);
		z3u = d5q.r4w;
		if (this.g6w)
		{
			z3u.d7d(this.w2q);
			this.g6w = false;
      this.w2q = '';
		}
		if (h7w)
		{
			break;
		}
	} while (this.x7i());
}

w3z(w5a)
{
	if (w5a.endsWith("??"))
	{
		w5a = w5a.subString(0, w5a.length-2);
		return j2a.i3j;
	}
	else if (w5a.endsWith("!!"))
	{
		w5a = w5a.subString(0, w5a.length-2);
		return j2a.l6i;
	}
	else if (w5a.endsWith("?!"))
	{
		w5a = w5a.subString(0, w5a.length-2);
		return j2a.e4e;
	}
	else if (w5a.endsWith("!?"))
	{
		w5a = w5a.subString(0, w5a.length-2);
		return j2a.h8t;
	}
	else if (w5a.endsWith("?"))
	{
		w5a = w5a.subString(0, w5a.length-1);
		return j2a.e6s;
	}
	else if (w5a.endsWith("!"))
	{
		w5a = w5a.subString(0, w5a.length-1);
		return j2a.e9f;
	}
	else
	{
		return j2a.b4z;
	}
}

j6n()
{
	let k6x = this.g0y.length;
	let d5q = -1;
	for (let i = 0; i < k6x; i++)
	{
		if (this.g0y[i] == '.')
		{
			d5q = i;
		}
	}
	if (d5q != -1)
	{
		this.g0y = this.g0y.substr(d5q + 1 , k6x);
	}
	return this.g0y.length != 0;
}

x7i()
{
	this.g0y = "";
	let d7m = '';
	let index = 0;
	let k6x = 0;
	while (true)
	{
		let n3x = 0;
		if (this.c7f < this.t8t)
		{
			n3x = this.h7a[this.c7f];
		}
		else
		{
			n3x = 0;
		}
		if (!n3x)
		{
			if (k6x)
			{
				break;
			}
			if (!this.v8q())
			{
				return false;
			}
			continue;
		}
		if (n3x == ';')
		{
			if (!this.v8q())
			{
				return false;
			}
			continue;
		}
		if (n3x == '(')
		{
			if (k6x)
			{
				break;
			}
			else
			{
				this.c7f++;
				this.g0y = y1s;
				return true;
			}
		}
		if (n3x == ')')
		{
			if (k6x)
			{
				break;
			}
			else
			{
				this.c7f++;
				this.g0y = a2v;
				return true;
			}
		}
		if (n3x == '{')
		{
			if (k6x)
			{
				break;
			}
			else
			{
				this.c7f++;
				this.g0y = e1j;
				return true;
			}
		}
		if (n3x == ' ' || n3x == '\r' || n3x == '\n')
		{
			if (k6x)
			{
				this.c7f++;
				break;
			}
			else
			{
				this.c7f++;
				continue;
			}
		}
		d7m += n3x;
		index++;
		k6x++;
		this.c7f++;
	}
	if (index)
	{
		this.g0y += d7m;
	}
	return this.g0y.length != 0;
}

q6s()
{
	let w5a = '';
	let d7m = '';
	let index = 0;
	let e8n = 0;
	while (true)
	{
		let n3x = 0;
		if (this.c7f < this.t8t)
		{
			n3x = this.h7a[this.c7f];
		}
		else
		{
			n3x = 0;
		}
		if (!n3x)
		{
			if (!this.v8q())
			{
				break;
			}
			if (index > 0)
			{
				d7m += ' '; 
				index++;
			}
			continue;
		}
		if (n3x == '{')
		{
			e8n++;
		}
		if (n3x == '}')
		{
			if (e8n)
			{
				e8n--;
			}
			else
			{
				this.c7f++;
				break;
			}
		}
		d7m += n3x;
		index++;
		this.c7f++;
	}
	if (index)
	{
		w5a += d7m;
	}
	return w5a.trim();
}

l4e()
{
	this.p8z = "";

	let b0f = 0;
	let k6x = this.h7a.length;
	for (let i = k6x - 1; i >= 0; i--)
	{
		if (this.h7a[i] == ']')
		{
			b0f = i;
			break;
		}
	}
	let index = 0;
	let u5e = false;
	let d7m = '';
	while (true)
	{
		let n3x = 0;
		if (this.c7f < this.t8t)
		{
			n3x = this.h7a[this.c7f];
		}
		else
		{
			n3x = 0;
		}
		if (!n3x)
		{
			if (!this.v8q())
			{
				break;
			}
			continue;
		}
		if (n3x == '\"')
		{
			u5e = true;
			this.c7f++;
			continue;
		}
		if (n3x == ']')
		{
			if (this.c7f == b0f)
			{
				this.c7f++;
				break;
			}
		}
		if (u5e)
		{
			d7m += n3x;
			index++;
		}
		this.c7f++;
	}
	if (index)
	{
		this.p8z += d7m;
	}
}

g4s()
{
	if (this.g0y.length == 0)
	{
		return false;
	}
	if (this.g0y[0] != '[')
	{
		return false;
	}
	
	let index = this.c7f;
	let j4h = false;
	while (index < this.t8t)
	{
		let n3x = this.h7a[index++];
		if (n3x == '\"' && this.h7a[index] == ']')
		{
			index++;
			j4h = true;
			continue;
		}
		if (n3x == '\r' || n3x == '\n')
		{
			break;
		}
		if (j4h)
		{
			j4h = false;
			break;
		}
	}
	return j4h;
}

k8j()
{
	
	if (this.s8x(v8k))
	{
		this.l4e();
		this.j2b.r0i = this.p8z;
		return;
	}
	if (this.s8x(g9s))
	{
		this.l4e();
		this.j2b.s0u = this.p8z;
		return;
	}
	if (this.s8x(j4m))
	{
		this.l4e();
		this.j2b.o6l = this.p8z;
		return;
	}
	if (this.s8x(h4h))
	{
		this.l4e();
		this.j2b.e1y = this.p8z;
		return;
	}
	if (this.s8x(p3s))
	{
		this.l4e();
		this.j2b.c9x = this.p8z;
		return;
	}
	if (this.s8x(v7z))
	{
		this.l4e();
		this.j2b.t7l = this.p8z;
		return;
	}
	if (this.s8x(z6p) || this.s8x(e5q))
	{
		this.l4e();
		this.j2b.u0x = this.p8z;
		return;
	}
	if (this.s8x(p4m))
	{
		this.l4e();
		this.j2b.z1a = this.p8z;
		return;
	}
	if (this.s8x(l5q))
	{
		this.l4e();
		this.j2b.m0x = this.p8z;
		return;
	}
	if (this.s8x(a3o))
	{
		this.l4e();
		this.j2b.d9i = this.p8z;
		return;
	}

	
	if (this.s8x(j9c))
	{
		this.l4e();
		this.j2b.z2v = this.p8z;
		return;
	}
	if (this.s8x(l4c))
	{
		this.l4e();
		this.j2b.r8q = this.p8z;
		return;
	}
	if (this.s8x(a5m))
	{
		this.l4e();
		this.j2b.a2e = this.p8z;
		return;
	}
	if (this.s8x(d5x))
	{
		this.l4e();
		this.j2b.j8a = this.p8z;
		return;
	}
	if (this.s8x(s0a))
	{
		this.l4e();
		this.j2b.y3v = this.p8z;
		return;
	}
	if (this.s8x(z7p))
	{
		this.l4e();
		this.j2b.o7x = this.p8z;
		return;
	}
	if (this.s8x(m6j) || this.s8x(r8x))
	{
		this.l4e();
		this.j2b.l9o = this.p8z;
		return;
	}
	if (this.s8x(x1f))
	{
		this.l4e();
		this.j2b.b9j = this.p8z;
		return;
	}
	if (this.s8x(h8e))
	{
		this.l4e();
		this.j2b.d3u = this.p8z;
		return;
	}
	if (this.s8x(j5o))
	{
		this.l4e();
		this.j2b.e2z = this.p8z;
		return;
	}

	
	if (this.s8x(m1h))
	{
		this.l4e();
		this.j2b.v2v = this.p8z;
		return;
	}
	if (this.s8x(a7g))
	{
		this.l4e();
		this.j2b.l3u = this.p8z;
		return;
	}
	if (this.s8x(m8w))
	{
		this.l4e();
		this.j2b.g2i = this.p8z;
		return;
	}
	if (this.s8x(j5j))
	{
		this.l4e();
		this.j2b.y2s = this.p8z;
		return;
	}
	if (this.s8x(m6o))
	{
		this.l4e();
		this.j2b.e4y = this.p8z;
		return;
	}
	if (this.s8x(m4x))
	{
		this.l4e();
		this.j2b.f4c = this.p8z;
		return;
	}
	if (this.s8x(x7j))
	{
		this.l4e();
		this.j2b.c0c = this.p8z;
		return;
	}
	if (this.s8x(f5y))
	{
		this.l4e();
		this.j2b.k2e = this.p8z;
		return;
	}
	if (this.s8x(h5f))
	{
		this.l4e();
		this.j2b.s2h = this.p8z;
		return;
	}
	if (this.s8x(j5p))
	{
		this.l4e();
		this.j2b.e7h = this.p8z;
		return;
	}
	if (this.s8x(o6m))
	{
		this.l4e();
		this.j2b.g1a = this.p8z;
		return;
	}
	if (this.s8x(n4i))
	{
		this.l4e();
		this.j2b.d3g = this.p8z;
		return;
	}
	if (this.s8x(a0l))
	{
		this.l4e();
		this.j2b.p8s = this.p8z;
		return;
	}

	
	if (this.s8x(v1q))
	{
		this.l4e();
		this.j2b.t9j = this.p8z;
		return;
	}

	
	if (this.s8x(f5v))
	{
		this.l4e();
		this.j2b.u1a = this.p8z;
		return;
	}
	if (this.s8x(c3v))
	{
		this.l4e();
		this.j2b.u1a = this.p8z;
		return;
	}
	if (this.s8x(w5l))
	{
		this.l4e();
		this.j2b.m6e = this.p8z;
		return;
	}
	if (this.s8x(t7i))
	{
		this.l4e();
		this.j2b.o7d = this.p8z;
		return;
	}
	if (this.s8x(x7p))
	{
		this.l4e();
		this.j2b.o7d = this.p8z;
		return;
	}
	if (this.s8x(y6p))
	{
		this.l4e();
		this.j2b.m9n = this.p8z;
		return;
	}
	if (this.s8x(w5m))
	{
		this.l4e();
		this.j2b.i6k = this.p8z;
		return;
	}
	if (this.s8x(r1b))
	{
		this.l4e();
		this.j2b.v4f = this.p8z;
		return;
	}

	
	if (this.s8x(u6q))
	{
		this.l4e();
		this.j2b.j4k = this.p8z;
		return;
	}

	
	if (this.s8x(b5r))
	{
		this.l4e();
		this.j2b.h1r = this.p8z;
		return;
	}
	if (this.s8x(t4j))
	{
		this.l4e();
		this.j2b.i6r = this.p8z;
		return;
	}
	if (this.s8x(p3b))
	{
		this.l4e();
		this.j2b.d8w = this.p8z;
		return;
	}
	if (this.s8x(f8t))
	{
		this.l4e();
		this.j2b.o1m = this.p8z;
		return;
	}

	
	if (this.s8x(k9w))
	{
		this.l4e();
		this.j2b.c1e = this.p8z;
		return;
	}

	
	if (this.s8x(f4z))
	{
		this.l4e();
		return;
	}
	if (this.s8x(x0t))
	{
		this.l4e();
		if (this.p8z.length == 0 || this.p8z == "?")
		{
			return;
		}
		this.r5o = true;
		this.s9s = this.p8z;
		return;
	}
	if (this.s8x(k8p))
	{
		this.l4e();
		this.q7c = y4s(this.p8z, 0);
		return;
	}
  
 	if (this.s8x(g0h))
	{
		this.l4e();
		this.j2b.z1j = this.p8z;
		return;
	}

}

a2q(i1k)
{
	let d8l = new m9a();
	let w5a = i1k.substr(6, i1k.length - 6);
	let e4h = w5a.split(",");
	for (const s of e4h)
	{
		if (s.length < 5)
		{
			continue;
		}
		let f7i = e2x(s.substr(1, 2));
		let j3l = e2x(s.substr(3, 2));
		if (s[0] == 'R')
		{
			let o6b = h5u(f7i, j3l, i7d.w3a);
			d8l.add(o6b);
		}
		else if (s[0] == 'G')
		{
			let o6b = h5u(f7i, j3l, i7d.m7h);
			d8l.add(o6b);
		}
		else if (s[0] == 'Y')
		{
			let o6b = h5u(f7i, j3l, i7d.y7c);
			d8l.add(o6b);
		}
	}
	return d8l;
}

p5x(i1k)
{
	let f5h = new z8f();
	let w5a = i1k.substr(6, i1k.length - 6);
	let e4h = w5a.split(",");
	for (const s of e4h)
	{
		if (s.length < 3)
		{
			continue;
		}
 		let z1c = e2x(s.substr(1, 2));
		if (s[0] == 'R')
		{
      let x8n = h3l(z1c, d7t.s0p);
			f5h.add(x8n);
		}
		else if (s[0] == 'G')
		{
      let x8n = h3l(z1c, d7t.q2l);
			f5h.add(x8n);
		}
		else if (s[0] == 'Y')
		{
      let x8n = h3l(z1c, d7t.p8m);
			f5h.add(x8n);
		}
	}
	return f5h;
}

h9w(i1k)
{
	let w5a = i1k.substr(6, i1k.length - 6);
	let d5q = w5a.indexOf("]");
	if (d5q != -1)
	{
		let u6n = new c4l();
		let value = y4s(w5a.substr(0, d5q), 0);
		u6n.j7z(value);
		return u6n;
	}
	else
	{
		return new c4l();
	}
}


i1x(i1k, e4w)
{
	if (
		i1k.startsWith("[%cal") ||
    i1k.startsWith("[%csb") ||
		i1k.startsWith("[%csl") ||
		i1k.startsWith("[%mdl") ||
		i1k.startsWith("[%evp") ||
		i1k.startsWith("[%eval") ||
		i1k.startsWith("[%emt") ||
		i1k.startsWith("[%tqu") ||
		i1k.startsWith("[%tqu") ||
		i1k.startsWith("[%pws") ||
		i1k.startsWith("[%pth") ||
		i1k.startsWith("[%eog"))
	{
		let x6k = 0;
		{
     	let m1s = i1k.indexOf("[%cal");
			if (m1s != -1)
			{
        let h5n = i1k.indexOf("]", m1s);
				if (h5n != -1)
				{
     			let y0w = i1k.substring(m1s, h5n + 1);
					e4w.s6e = this.a2q(y0w).g6i();
					if (h5n > x6k) x6k = h5n;
				}
			}
		}
		{
     	let m1s = i1k.indexOf("[%csb");
   		if (m1s != -1)
			{
        let h5n = i1k.indexOf("]", m1s);
				if (h5n != -1)
				{
          let s2n = i1k.substring(m1s, h5n + 1);
					e4w.f4b = this.p5x(s2n).g6i();
					if (h5n > x6k) x6k = h5n;
				}
			}
		}
		{
      let m1s = i1k.indexOf("[%csl");
			if (m1s != -1)
			{
        let h5n = i1k.indexOf("]", m1s);
				if (h5n != -1)
				{
          let s2n = i1k.substring(m1s, h5n + 1);
					e4w.f4b = this.p5x(s2n).g6i();
					if (h5n > x6k) x6k = h5n;
				}
			}
		}
		{
      let m1s = i1k.indexOf("[%mdl");
			if (m1s != -1)
			{
        let h5n = i1k.indexOf("]", m1s);
				if (h5n != -1)
				{
          let y5a = i1k.substring(m1s, h5n + 1);
					e4w.u6n = this.h9w(y5a).g6i();
					if (h5n > x6k) x6k = h5n;
				}
			}
		}
		{
      let m1s = i1k.indexOf("[%evp");
			if (m1s != -1)
			{
        let h5n = i1k.indexOf("]", m1s);
				if (h5n != -1)
				{
					if (h5n > x6k) x6k = h5n;
				}
			}
		}
		{
      let m1s = i1k.indexOf("[%eval");
			if (m1s != -1)
			{
        let h5n = i1k.indexOf("]", m1s);
				if (h5n != -1)
				{
					if (h5n > x6k) x6k = h5n;
				}
			}
		}
		{
      let m1s = i1k.indexOf("[%emt");
			if (m1s = -1)
			{
        let h5n = i1k.indexOf("]", m1s);
				if (h5n != -1)
				{
					if (h5n > x6k) x6k = h5n;
				}
			}
		}
		{
      let m1s = i1k.indexOf("[%tqu");
			if (m1s != -1)
			{
        let h5n = i1k.indexOf("]", m1s);
				if (h5n != -1)
				{
					if (h5n > x6k) x6k = h5n;
				}
			}
		}
		{
      let m1s = i1k.indexOf("[%pws");
			if (m1s != -1)
			{
        let h5n = i1k.indexOf("]", m1s);
				if (h5n != -1)
				{
          e4w.r9m = true;
					if (h5n > x6k) x6k = h5n;
				}
			}
		}
		{
      let m1s = i1k.indexOf("[%pth");
			if (m1s != -1)
			{
        let h5n = i1k.indexOf("]", m1s);
				if (h5n != -1)
				{
          e4w.e7w = true;
					if (h5n > x6k) x6k = h5n;
				}
			}
		}
		{
      let m1s = i1k.indexOf("[%eog");
			if (m1s != -1)
			{
        let h5n = i1k.indexOf("]", m1s);
				if (h5n != -1)
				{
					e4w.q2j = true; 
					if (h5n > x6k) x6k = h5n;
				}
			}
		}
    e4w.c6w = i1k.substring(x6k + 1);
	}
	else
	{
		e4w.c6w = i1k;
	}
}

}

class o4c
{

constructor()
{
  this.w3q = 0;
	this.i2q = new k4p();
	this.n8q = new n2s();
}

g6i()
{
	let r2r = new o4c();
  r2r.w3q = this.w3q;
	r2r.i2q = this.i2q.g6i();
	r2r.n8q = this.n8q.g6i();
	return r2r;
}

}

class k4p
{

constructor()
{
	this.r0i = '';
	this.s0u = '';
	this.o6l = '';
	this.e1y = '';
	this.c9x = '';
	this.t7l = '';
	this.u0x = '';
	this.z1a = '';
	this.m0x = '';
  this.d9i = '';
	this.z2v = '';
	this.r8q = '';
	this.a2e = '';
	this.j8a = '';
	this.y3v = '';
	this.o7x = '';
	this.l9o = '';
	this.b9j = '';
	this.d3u = '';
  this.e2z = '';
	this.v2v = '';
	this.l3u = '';
	this.g2i = '';
	this.y2s = '';
	this.e4y = '';
	this.f4c = '';
	this.c0c = '';
	this.k2e = '';
	this.s2h = '';
	this.e7h = '';
	this.g1a = '';
	this.d3g = '';
	this.p8s = '';
	this.t9j = '';
	this.u1a = '';
	this.m6e = '';
	this.o7d = '';
	this.m9n = '';
	this.i6k = '';
	this.v4f = '';
	this.j4k = '';
	this.h1r = '';
	this.i6r = '';
	this.d8w = '';
	this.o1m = '';
	this.c1e = '';
  this.z1j = '';
}

g6i()
{
	let g4o = new k4p();

	g4o.r0i = this.r0i;
	g4o.s0u = this.s0u;
	g4o.o6l = this.o6l;
	g4o.e1y = this.e1y;
	g4o.c9x = this.c9x;
	g4o.t7l = this.t7l;
	g4o.u0x = this.u0x;
	g4o.z1a = this.z1a;
	g4o.m0x = this.m0x;
	g4o.d9i = this.d9i;

	g4o.z2v = this.z2v;
	g4o.r8q = this.r8q;
	g4o.a2e = this.a2e;
	g4o.j8a = this.j8a;
	g4o.y3v = this.y3v;
	g4o.o7x = this.o7x;
	g4o.l9o = this.l9o;
	g4o.b9j = this.b9j;
	g4o.d3u = this.d3u;
	g4o.e2z = this.e2z;

	g4o.v2v = this.v2v;
	g4o.l3u = this.l3u;
	g4o.g2i = this.g2i;
	g4o.y2s = this.y2s;
	g4o.e4y = this.e4y;
	g4o.f4c = this.f4c;
	g4o.c0c = this.c0c;
	g4o.k2e = this.k2e;
	g4o.s2h = this.s2h;
	g4o.e7h = this.e7h;
	g4o.g1a = this.g1a;
	g4o.d3g = this.d3g;
	g4o.p8s = this.p8s;

	g4o.t9j = this.t9j;

	g4o.u1a = this.u1a;
	g4o.m6e = this.m6e;
	g4o.o7d = this.o7d;
	g4o.m9n = this.m9n;
	g4o.i6k = this.i6k;
	g4o.v4f = this.v4f;

	g4o.j4k = this.j4k;

	g4o.h1r = this.h1r;
	g4o.i6r = this.i6r;
	g4o.d8w = this.d8w;
	g4o.o1m = this.o1m;

	g4o.c1e = this.c1e;
 	g4o.z1j = this.z1j;

	return g4o;
}

}


const e4o =
[
		[ y8f.b4z, 				  									"",											            "", 																	"",   ""    ],
		[ y8f.j0k, 										  "Afghanistan",											"Afghanistan", 												"af", "AFG" ],
		[ y8f.w0n, 									 	"AlandIslands",										  "Aland", 															"ax", "ALA" ],
		[ y8f.l6u,  											 	"Albania",													"Albania", 														"al", "ALB" ],
		[ y8f.u7q,  											 	"Algeria",													"Algeria", 														"dz", "DZA" ],
		[ y8f.w3k,  								 	"AmericanSamoa",										"American Samoa", 										"as", "ASM" ],
		[ y8f.a8l,  											 	"Andorra",													"Andorra", 														"ad", "AND" ],
		[ y8f.e0z,                           "Angola",													  "Angola", 														"ao", "AGO" ],
		[ y8f.q6p,  											  "Anguilla",												  "Anguilla", 													"ai", "AIA" ],
		[ y8f.y2c,  										  "Antarctica",											  "Antarctica", 												"aq", "ATA" ],
		[ y8f.b6l,  								  "AntiguaBarbuda",									  "Antigua & Barbuda", 									"ag", "ATG" ],
		[ y8f.x2x,  										 	"Argentina",												"Argentina", 													"ar", "ARG" ],
		[ y8f.g0p,  											 	"Armenia",													"Armenia",														"am", "ARM" ],
		[ y8f.j9k,  												 	"Aruba",														"Aruba",															"aw", "ABW" ],
		[ y8f.i9g,  										 	"Australia",												"Australia",													"au", "AUS" ],
		[ y8f.k6a,  											 	"Austria",													"Austria",											 			"at", "AUT" ],
		[ y8f.c3i,  										  "Azerbaijan",											  "Azerbaijan",													"az", "AZE" ],
		[ y8f.h3q,  											 	"Bahamas",													"Bahamas",														"bs", "BHS" ],
		[ y8f.t4r,  											 	"Bahrain",													"Bahrain",														"bh", "BHR" ],
		[ y8f.k6n,  										  "Bangladesh",											  "Bangladesh",													"bd", "BGD" ],
		[ y8f.v5r,  											  "Barbados",												  "Barbados",														"bb", "BRB" ],
		[ y8f.d2m,  								 	"BasqueCountry",	 									"Basque Country",     								"x1", "XX1" ], 
		[ y8f.o7v,  											 	"Belarus",													"Belarus",														"by", "BLR" ],
		[ y8f.k0f,  											 	"Belgium",													"Belgium",														"be", "BEL" ],
		[ y8f.z8o,  												  "Belize",													  "Belize",															"bz", "BLZ" ],
		[ y8f.w7q,  												 	"Benin",														"Benin",															"bj", "BEN" ],
		[ y8f.q9m,  											 	"Bermuda",													"Bermuda",														"bm", "BMU" ],
		[ y8f.e5x,  												  "Bhutan",													  "Bhutan",															"bt", "BTN" ],
		[ y8f.n4u,  												"Bolivia",													"Bolivia",														"bo", "BOL" ],
		[ y8f.z9c,  						  "BosniaHerzegovina",       				  "Bosnia & Herzegovina", 							"ba", "BIH" ], 
		[ y8f.f3s,  											  "Botswana",                      	  "Botswana",														"bw", "BWA" ],
		[ y8f.i6l,  									  "BouvetIsland",                 		"Bouvet",															"bv", "BVT" ],
		[ y8f.x4z,  												  "Brazil",                        	  "Brazil",															"br", "BRA" ],
		[ y8f.b6g,  	 	"BritishIndianOceanTerritory",			"British Indian Ocean Territory", 		"io", "IOT" ],
		[ y8f.p9n, 							 	"BruneiDarussalam",								  "Brunei",															"bn", "BRN" ], 
		[ y8f.q6g,  											  "Bulgaria",												  "Bulgaria", 													"bg", "BGR" ],
		[ y8f.g6d, 										  "BurkinaFaso",											"Burkina Faso",												"bf", "BFA" ],
		[ y8f.x3p,  											 	"Burundi",													"Burundi",														"bi", "BDI" ],
		[ y8f.o5x,  											  "Cambodia",												  "Cambodja",														"kh", "KHM" ],
		[ y8f.l2o,  											  "Cameroon",												  "Cameroon",														"cm", "CMR" ],
		[ y8f.h2a,  												  "Canada",													  "Canada",															"ca", "CAN" ],
		[ y8f.o0k,  										  "CapeVerde",												"Cape Verde",													"cv", "CPV" ], 
		[ y8f.y0k,  										  "Catalonia",												"Catalonia",													"x2", "XX2" ], 
		[ y8f.p5m,  								  "CaymanIslands",										"Cayman Islands",											"ky", "CYM" ],
		[ y8f.c7n,  				  "CentralAfricanRepublic",					  "Central African Republic",						"cf", "CAF" ],
		[ y8f.x2z,  													  "Chad",														  "Chad",																"td", "TCD" ],
		[ y8f.x6a,  												 	"Chile",														"Chile",															"cl", "CHL" ],
		[ y8f.i7p,  												 	"China",														"China",															"cn", "CHN" ],
		[ y8f.q8i,  							 	"ChristmasIsland",									"Christmas",													"cx", "CXR" ],
		[ y8f.d6i,  					 	"CocosKeelingIslands",							"Cocos (Keeling)",										"cc", "CCK" ], 
		[ y8f.l9r,  											  "Colombia",												  "Colombia",														"co", "COL" ],
		[ y8f.j9v,  											 	"Comoros",													"Comoros",														"km", "COM" ],
		[ y8f.f3p,  												 	"Congo",														"Congo-Brazzaville", 						    	"cg", "COG" ],
		[ y8f.t2i,  			 	"CongoDemocraticRepublic",					"Congo-Kinshasa(Zaire)",						  "cd", "COD" ],
		[ y8f.r3l,  									 	"CookIslands",											"Cook Islands",											 	"ck", "COK" ],
		[ y8f.n5i,  											"CostaRica",												"Costa Rica",												 	"cr", "CRI" ],
		[ y8f.e2v,  												"Croatia",													"Croatia",														"hr", "HRV" ],
		[ y8f.r2s,  													  "Cuba",														  "Cuba",															 	"cu", "CUB" ],
		[ y8f.j2u,  												"Curacao",													"Curacao",											  		"cw", "CUW" ],
		[ y8f.w2i,  												  "Cyprus",													  "Cyprus",														 	"cy", "CYP" ],
		[ y8f.q4u,  									      "Czechia",										      "Czech Republic", 										"cz", "CZE" ],
		[ y8f.b6s,  										  "CoteIvoire",	   					 				  "Cote d'Ivoire",											"ci", "CIV" ],
		[ y8f.b5f,  												"Denmark",													"Denmark",													  "dk", "DNK" ],
		[ y8f.c0q,  											  "Djibouti",												  "Djibouti",													 	"dj", "DJI" ],
		[ y8f.u4u,  											  "Dominica",												  "Dominica",													 	"dm", "DMA" ],
		[ y8f.o3w,  							"DominicanRepublic",								"Dominican Republic",								 	"do", "DOM" ],
		[ y8f.s3a,  												"Ecuador",													"Ecuador",													 	"ec", "ECU" ],
		[ y8f.w7f,  													"Egypt",														"Egypt", 														 	"eg", "EGY" ],
		[ y8f.p8c,  										  "ElSalvador",											  "El Salvador",												"sv", "SLV" ],
		[ y8f.r2y,  												"England",													"England",														"x3", "GBR" ],
		[ y8f.s0d,  							  "EquatorialGuinea",								  "Equatorial Guinea",									"gq", "GNQ" ], 
		[ y8f.g7u,  												"Eritrea",													"Eritrea",														"er", "ERI" ],
		[ y8f.z1x,  												"Estonia",													"Estonia",														"ee", "EST" ],
		[ y8f.j0p,  											  "Ethiopia",												  "Ethiopia",													 	"et", "ETH" ],
		[ y8f.s0q,  								"FalklandIslands",									"England",														"fk", "FLK" ], 
		[ y8f.h9c,  									  "FaroeIslands",										  "Faroes",														 	"fo", "FRO" ],
		[ y8f.e6f,  													  "Fiji",														  "Fiji",															 	"fj", "FJI" ],
		[ y8f.f7h,  												"Finland",													"Finland",														"fi", "FIN" ],
		[ y8f.t0x,  												  "France",													  "France",														 	"fr", "FRA" ],
		[ y8f.h4p,  									  "FrenchGuiana",										  "Guyana", 														"gf", "GUF" ], 
		[ y8f.w8f,  								"FrenchPolynesia",									"Tahiti(French Polinesia)", 					"pf", "PYF" ], 
		[ y8f.n4z,  			"FrenchSouthernTerritories",				"French Southern and Antarctic Lands","tf", "ATF" ],
		[ y8f.t6a,  													"Gabon",														"Gabon",															"ga", "GAB" ], 
		[ y8f.c2h,  												  "Gambia",													  "Gambia",															"gm", "GMB" ],
		[ y8f.v8x,  												"Georgia",													"Georgia",														"ge", "GEO" ],
		[ y8f.y9t,  												"Germany",													"Germany",														"de", "DEU" ],
		[ y8f.l3l, 													  "Ghana",														"Ghana",															"gh", "GHA" ],
		[ y8f.r0k,  											"Gibraltar",												"Gibraltar",													"gi", "GIB" ],
		[ y8f.q3a,  												  "Greece",													  "Greece",															"gr", "GRC" ],
		[ y8f.x3r,  											"Greenland",												"Greenland",													"gl", "GRL" ],
		[ y8f.h5r,  												"Grenada",													"Grenada",														"gd", "GRD" ],
		[ y8f.v8j,  										  "Guadeloupe",											  "Guadeloupe",													"gp", "GLP" ],
		[ y8f.s4f,  													  "Guam",														  "Guam",																"gu", "GUM" ],
		[ y8f.x9l,  											"Guatemala",												"Guatemala",													"gt", "GTM" ],
		[ y8f.y9v,  											  "Guernsey",												  "Guernsey",														"gg", "GGY" ], 
		[ y8f.g2e,  												  "Guinea",													  "Guinea",															"gn", "GIN" ],
		[ y8f.b1e,  									  "GuineaBissau",										  "Guinea-Bissau",											"gw", "GNB" ],
		[ y8f.y6d,  												  "Guyana",													  "Guyana",															"gy", "GUY" ],
		[ y8f.r0v,  													"Haiti",														"Haiti",															"ht", "HTI" ],
		[ y8f.x6p, 			"HeardIslandMcDonaldIslands", 			"Australia",   									  		"hm", "HMD" ],
		[ y8f.s7l,  			 	                "Vatican",	  			                "Vatican City", 											"va", "VAT" ],
		[ y8f.f3a,  											  "Honduras",												  "Honduras",														"hn", "HND" ],
		[ y8f.w6z,  											  "HongKong",												  "Hong Kong",													"hk", "HKG" ],
		[ y8f.z3k,  											 	"Hungary",													"Hungary",														"hu", "HUN" ],
		[ y8f.n9y,  											 	"Iceland",													"Iceland",														"is", "ISL" ],
		[ y8f.v1n,  												 	"India",														"India",															"in", "IND" ],
		[ y8f.x1x,  										 	"Indonesia",												"Indonesia",													"id", "IDN" ],
		[ y8f.p0b,  													  "Iran",														  "Iran",																"ir", "IRN" ],
		[ y8f.w2c,  													  "Iraq",														  "Iraq",																"iq", "IRQ" ],
		[ y8f.n9k,  											 	"Ireland",													"Ireland",														"ie", "IRL" ],
		[ y8f.u8i,  										 	"IsleOfMan",												"Isle of Man",												"im", "IMN" ],
		[ y8f.w5n,  												  "Israel",													  "Israel",															"il", "ISR" ],
		[ y8f.w9x,  												 	"Italy",														"Italy",															"it", "ITA" ],
		[ y8f.a0m,  											 	"Jamaica",													"Jamaica",														"jm", "JAM" ],
		[ y8f.t3i,  											  "JanMayen",								  			  "Norway", 														"x4", "XX4" ], 
		[ y8f.a6x,  												 	"Japan",														"Japan",															"jp", "JPN" ],
		[ y8f.s8b,  												  "Jersey",													  "Jersey",															"je", "JEY" ],
		[ y8f.j0o,  												  "Jordan",													  "Jordan",															"jo", "JOR" ],
		[ y8f.l1x,  										  "Kazakhstan",											  "Kazakhstan",													"kz", "KAZ" ],
		[ y8f.k0m,  												 	"Kenya",														"Kenya",															"ke", "KEN" ],
		[ y8f.s3d,  											  "Kiribati",												  "Kiribati",														"ki", "KIR" ],
		[ y8f.w0s,  										  "KoreaNorth",											  "North Korea",												"kp", "PRK" ], 
		[ y8f.q0h,  										  "KoreaSouth",	 	  								  "South Korea", 												"kr", "KOR" ], 
		[ y8f.d7h,  												  "Kosovo",													  "Kosovo",															"x5", "RKS" ],
		[ y8f.p1k,  												  "Kuwait",													  "Kuwait",															"kw", "KWT" ],
		[ y8f.g2z,  										  "Kyrgyzstan",											  "Kyrgyzstan",													"kg", "KGZ" ],
		[ y8f.i8k,  													  "Laos",														  "Laos",																"la", "LAO" ],
		[ y8f.u0e, 	 											 	"Latvia",													  "Latvia",															"lv", "LVA" ],
		[ y8f.d8j,  											 	"Lebanon",													"Lebanon",														"lb", "LBN" ],
		[ y8f.k1r, 												  "Lesotho",													"Lesotho",														"ls", "LSO" ],
		[ y8f.r4d,  											 	"Liberia",													"Liberia",														"lr", "LBR" ],
		[ y8f.x1o,  												 	"Libya",														"Libya",															"ly", "LBY" ],
		[ y8f.m8x,  								 	"Liechtenstein",										"Liechtenstein",											"li", "LIE" ],
		[ y8f.v8d,  										 	"Lithuania",												"Lithuania",													"lt", "LTU" ],
		[ y8f.b3x,  										  "Luxembourg",											  "Luxembourg",													"lu", "LUX" ],
		[ y8f.macau,  												 	"Macau",														"Macau",															"mo", "MAC" ],
		[ y8f.q9o,  	  					 	  "NorthMacedonia",	   							  "Macedonia",													"mk", "MKD" ],
		[ y8f.j6s,  										  "Madagascar",											  "Madagascar",													"mg", "MDG" ],
		[ y8f.j2m,  												  "Malawi",													  "Malawi",															"mw", "MWI" ],
		[ y8f.o5i,  											  "Malaysia",												  "Malaysia",														"my", "MYS" ],
		[ y8f.b7i,  											  "Maldives",												  "Maldives",														"mv", "MDV" ],
		[ y8f.g8l, 													 	"Mali",														  "Mali",																"ml", "MLI" ],
		[ y8f.h1h,  												 	"Malta",														"Malta",															"mt", "MLT" ],
		[ y8f.w9e,  							 	"MarshallIslands",									"Marshall Islands",										"mh", "MHL" ],
		[ y8f.y3y,  										  "Martinique",											  "Martinique",													"mq", "MTQ" ],
		[ y8f.t3k,  										  "Mauritania",											  "Mauritania",													"mr", "MRT" ],
		[ y8f.m2e,  										 	"Mauritius",												"Mauritius",													"mu", "MUS" ],
		[ y8f.q9a,  											  "Mayotte",													"Mayotte",														"yt", "MYT" ],
		[ y8f.v6e,  												  "Mexico",													  "Mexico",															"mx", "MEX" ],
		[ y8f.t5i,  										  "Micronesia",											  "Micronesia",													"fm", "FSM" ],
		[ y8f.t1f,  											 	"Moldova",													"Moldova",														"md", "MDA" ],
		[ y8f.t6e,  												  "Monaco",													  "Monaco",															"mc", "MCO" ],
		[ y8f.o1w,  											  "Mongolia",												  "Mongolia",														"mn", "MNG" ],
		[ y8f.r4f,  										  "Montenegro",											  "Montenegro",													"me", "MNE" ],
		[ y8f.s7r,  										  "Montserrat",											  "Montserrat",													"ms", "MSR" ],
		[ y8f.q4x,  												"Morocco",													"Morocco",														"ma", "MAR" ],
		[ y8f.f0c,  										  "Mozambique",											  "Mozambique",													"mz", "MOZ" ],
		[ y8f.y8a, 												  "Myanmar",													"Myanmar(Burma)", 										"mm", "MMR" ],
		[ y8f.j3x,  												"Namibia",													"Namibia",														"na", "NAM" ],
		[ y8f.d4s,  													"Nauru",														"Nauru",															"nr", "NRU" ],
		[ y8f.h9u,  													"Nepal",														"Nepal",															"np", "NPL" ],
		[ y8f.x4n,  										"TheNetherlands",	  							  "Netherlands",												"nl", "NLD" ],
		[ y8f.o6n, 						  "NetherlandsAntilles",							"Netherlands Antilles",								"an", "ANT" ],
		[ y8f.x9o,  									  "NewCaledonia",										  "New Caledonia",											"nc", "NCL" ],
		[ y8f.z9q,  										  "NewZealand",											  "New Zealand",												"nz", "NZL" ],
		[ y8f.w6w,  											"Nicaragua",												"Nicaragua",													"ni", "NIC" ],
		[ y8f.t6f,  													"Niger",														"Niger",															"ne", "NER" ],
		[ y8f.g6e,  												"Nigeria",													"Nigeria",														"ng", "NGA" ],
		[ y8f.o9f,  													  "Niue",														  "Niue",																"nu", "NIU" ],
		[ y8f.p0v,  									"NorfolkIsland",										"Norfolk", 														"nf", "NFK" ],
		[ y8f.i6t,  								"NorthernIreland",									"Northern Ireland",										"x6", "GBR" ], 
		[ y8f.y5f,  				  "NorthernMarianaIslands",					  "Northern Mariana",										"mp", "MNP" ],
		[ y8f.f9e,  												  "Norway",													  "Norway",															"no", "NOR" ],
		[ y8f.c5r,  													  "Oman",														  "Oman",																"om", "OMN" ],
		[ y8f.o8g,  											  "Pakistan",												  "Pakistan",														"pk", "PAK" ],
		[ y8f.u8x,  													"Palau",														"Palau",															"pw", "PLW" ],
		[ y8f.g8e,  											"Palestine",												"Palestine",													"ps", "PSE" ],
		[ y8f.i6f,  												  "Panama",													  "Panama",															"pa", "PAN" ],
		[ y8f.l1a,  								  "PapuaNewGuinea",									  "Papua New Guinea",										"pg", "PNG" ],
		[ y8f.c9t,  											  "Paraguay",												  "Paraguay",														"py", "PRY" ],
		[ y8f.u6l,  													  "Peru",														  "Peru",																"pe", "PER" ],
		[ y8f.y1u,  										"Philippines",											"Philippines",												"ph", "PHL" ],
		[ y8f.g8y,  											  "Pitcairn",												  "Pitcairn",														"pn", "PCN" ],
		[ y8f.q8q,  												  "Poland",													  "Poland",															"pl", "POL" ],
		[ y8f.l6w,  											  "Portugal",												  "Portugal",														"pt", "PRT" ],
		[ y8f.x5k,  										  "PuertoRico",											  "Puerto Rico",												"pr", "PRI" ],
		[ y8f.b2f,  													"Qatar",														"Qatar",															"qa", "QAT" ],
		[ y8f.o2g,  												"Reunion",													"Reunion",														"re", "REU" ],
		[ y8f.m2c,  												"Romania",													"Romania",														"ro", "ROU" ],
		[ y8f.f4d,  												  "Russia",													  "Russian Federation", 								"ru", "RUS" ],
		[ y8f.m8r,  												  "Rwanda",													  "Rwanda",															"rw", "RWA" ],
		[ y8f.m4h,  								"SaintBarthelemy",									"Saint Barthelemy", 									"bl", "BLM" ],
		[ y8f.j9w,  										"SaintHelena",											"Saint Helena", 											"sh", "SHN" ], 
		[ y8f.u0s,  								"SaintKittsNevis",									"St Kitts & Nevis", 									"kn", "KNA" ], 
		[ y8f.c1s, 											"SaintLucia",											  "Saint Lucia", 												"lc", "LCA" ], 
		[ y8f.p2e,  					"SaintMartinFrenchPart",  					"Saint Martin", 											"mf", "MAF" ],
		[ y8f.x1g,  						"SaintPierreMiquelon",							"Saint Pierre and Miquelon", 					"pm", "SPM" ], 
		[ y8f.r9t,  				  "SaintVincentGrenadines",					  "St Vincent & the Grenadines", 				"vc", "VCT" ], 
		[ y8f.t4p,  													"Samoa",														"Samoa",															"ws", "WSM" ],
		[ y8f.h0f,  											"SanMarino",												"San Marino",													"sm", "SMR" ],
		[ y8f.q2z,  								"SaoTomePrincipe",									"Sao Tome & Principe", 								"st", "STP" ],
		[ y8f.p0d,  										"SaudiArabia",											"Saudi Arabia", 											"sa", "SAU" ],
		[ y8f.i1d,  											  "Scotland",												  "Scotland",														"x7", "GBR" ],
		[ y8f.b4g,  												"Senegal",													"Senegal",														"sn", "SEN" ],
		[ y8f.q4z,  												  "Serbia",													  "Serbia(Yugoslavia)", 								"rs", "SRB" ],
		[ y8f.o8q,  										  "Seychelles",											  "Seychelles",													"sc", "SYC" ],
		[ y8f.f4o,  									  "SierraLeone",											"Sierra Leone",												"sl", "SLE" ],
		[ y8f.u6p,  										 	"Singapore",												"Singapore",													"sg", "SGP" ],
		[ y8f.m8e,						  "SintMaartenDutchPart",  					  "Sint Maarten",												"sx", "SXM" ],
		[ y8f.x8r,  											  "Slovakia",												  "Slovakia",														"sk", "SVK" ],
		[ y8f.x1d,  											  "Slovenia",												  "Slovenia",														"si", "SVN" ],
		[ y8f.r8s,  								  "SolomonIslands",									  "Solomon Islands", 										"sb", "SLB" ],
		[ y8f.e5j,  											 	"Somalia",													"Somalia",														"so", "SOM" ],
		[ y8f.j9h,  									 	"SouthAfrica",											"South Africa",												"za", "ZAF" ],
		[ y8f.p1m, "SouthGeorgiaSouthSandwichIslands", "South Georgia and South Sandwich", 	"gs", "SGS" ],
		[ y8f.y9o,  										  "SouthSudan",											  "Southern Sudan", 										"ss", "SSD" ],
		[ y8f.u0r,  									 	"SovietUnion",											"Soviet Union", 			 								"su", "URS" ],
		[ y8f.k9u, 	 												  "Spain",														"Spain",															"es", "ESP" ],
		[ y8f.t9q,  											  "SriLanka",												  "Sri Lanka",													"lk", "LKA" ],
		[ y8f.m9x,  												 	"Sudan",														"Sudan",															"sd", "SDN" ],
		[ y8f.g5m,  											  "Suriname",												  "Suriname",														"sr", "SUR" ], 
		[ y8f.k4w,  											  "Svalbard",												  "Norway", 														"sj", "SJM" ], 
		[ y8f.v1a,  										 	"Swaziland",												"Swaziland",													"sz", "SWZ" ],
		[ y8f.l2c,  												  "Sweden",													  "Sweden",															"se", "SWE" ],
		[ y8f.t6q,  									 	"Switzerland",											"Switzerland",												"ch", "CHE" ],
		[ y8f.t9x,  												 	"Syria",														"Syria",															"sy", "SYR" ],
		[ y8f.y6q,  												  "Taiwan",													  "Taiwan",															"tw", "TWN" ],
		[ y8f.j6f,  										  "Tajikistan",											  "Tajikistan",													"tj", "TJK" ],
		[ y8f.b4o,  											  "Tanzania",												  "Tanzania",														"tz", "TZA" ],
		[ y8f.q0x, 											  "Thailand",												  "Thailand",														"th", "THA" ],
		[ y8f.l9u,  										  "TimorLeste",	  									  "Timor-Leste", 												"tl", "TLS" ], 
		[ y8f.e4a, 													 	"Togo",														  "Togo",																"tg", "TGO" ],
		[ y8f.j5x,  											 	"Tokelau",													"Tokelau",														"tk", "TKL" ], 
		[ y8f.p4l,  												 	"Tonga",														"Tonga",															"to", "TON" ],
		[ y8f.o5t,  								  "TrinidadTobago",									  "Trinidad & Tobago", 									"tt", "TTO" ],
		[ y8f.r0y,  												"Tunisia",													"Tunisia",														"tn", "TUN" ],
		[ y8f.j7v,  												  "Turkey",													  "Turkey",															"tr", "TUR" ],
		[ y8f.y7p,  									  "Turkmenistan",										  "Turkmenistan",												"tm", "TKM" ],
		[ y8f.o0a,  						  "TurksCaicosIslands",							  "Turks and Caicos Islands", 					"tc", "TCA" ],
		[ y8f.z9i,  												  "Tuvalu",													  "Tuvalu", 														"tv", "TUV" ],
		[ y8f.z5v,  												  "Uganda",													  "Uganda",															"ug", "UGA" ],
		[ y8f.f6l,  											  "Ukraine",													"Ukraine",														"ua", "UKR" ],
		[ y8f.v3x,  						  "UnitedArabEmirates",							  "United Arab Emirates",								"ae", "ARE" ],
		[ y8f.k0z,  									"UnitedKingdom",										"United Kingdom(Great Britain)", 			"gb", "GBR" ], 
		[ y8f.e5b,  									  "UnitedStates",										  "United States of America", 					"us", "USA" ],
		[ y8f.p2y, "UnitedStatesMinorOutlyingIslands", "United States of America",						"um", "UMI" ],
		[ y8f.s6t,  										 		"Uruguay",													"Uruguay",														"uy", "URY" ],
		[ y8f.m7k,  									 	  "Uzbekistan",											  "Uzbekistan",													"uz", "UZB" ],
		[ y8f.n7c,  										 		"Vanuatu",													"Vanuatu",														"vu", "VUT" ],
		[ y8f.f7e,  											"Venezuela",												"Venezuela",													"ve", "VEN" ],
		[ y8f.c0l,  												"Vietnam",													"Viet Nam",														"vn", "VNM" ],
		[ y8f.u9s,  					  "VirginIslandsBritish",       			"Virgin Islands British", 						"vg", "VGB" ],
		[ y8f.r0m,  								"VirginIslandsUS",	  							"Virgin Islands US", 									"vi", "VIR" ],
		[ y8f.g9d,  													"Wales",														"Wales",															"x8", "GBR" ],
		[ y8f.j8l,  									  "WallisFutuna",										  "Wallis and Futuna",									"wf", "WLF" ],
		[ y8f.g0s,  									"WesternSahara",										"Western Sahara",											"eh", "ESH" ],
		[ y8f.a0w,  											 		"Yemen",														"Yemen",															"ye", "YEM" ],
		[ y8f.f7p,  											 		"Zaire",														"",																		"zr", "ZRN" ], 
		[ y8f.k8w,  											 	  "Zambia",													  "Zambia",															"zm", "ZMB" ],
		[ y8f.a0q,  										 	  "Zimbabwe",												  "Zimbabwe",														"zw", "ZWE" ],
];

function t8b(l8m)
{
	return e4o[l8m][2];
}

function t4c(l8m)
{
	return e4o[l8m][4];
}

function y2i(q0e)
{
	for (const l8m of e4o)
	{
		if (l8m[4] == q0e)
		{
			return l8m[0];
		}
	}
	return y8f.b4z;
}

function c6t(c9b)
{
	for (const l8m of e4o)
	{
		if (l8m[3] == c9b)
		{
			return l8m[0];
		}
	}
	return y8f.b4z;
}
class b2u
{

constructor()
{
	this.i1k = '';
}

h3b(w5a)
{
	this.i1k += w5a;
}

b3u(w5a)
{
	this.i1k += w5a + '\n';
}

a7i()
{
	this.i1k += '\n';
}

}




function y4s(o2c, z6v)
{
	let value = Number(o2c);
	if (isNaN(value))
	{
		return z6v;
	}
	else
	{
		return value;
	}
}
