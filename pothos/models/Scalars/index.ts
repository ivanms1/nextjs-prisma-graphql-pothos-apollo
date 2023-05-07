import { DateTimeResolver, JSONObjectResolver } from "graphql-scalars";

import builder from "pothos/builder";

builder.addScalarType("Date", DateTimeResolver, {});
builder.addScalarType("JSON", JSONObjectResolver, {});
